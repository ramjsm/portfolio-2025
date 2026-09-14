import * as THREE from 'three'

/**
 * Conway's Game of Life, evaluated entirely on the GPU.
 *
 * The grid lives in a tiny RGBA texture (one texel per cell) that is
 * ping-ponged between two render targets:
 *
 *   r -> 1.0 alive, 0.0 dead
 *   g -> fading trail left behind by recently dead cells
 *   b -> how long the cell has been continuously alive (0 = just born)
 *
 * `GameOfLife.tsx` owns the render targets and drives the passes; this file
 * only describes the materials.
 */

const passthroughVertexShader = /*glsl*/ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const simulationFragmentShader = /*glsl*/ `
  precision highp float;

  varying vec2 vUv;

  uniform sampler2D uState;
  uniform vec2 uGrid;
  uniform float uTime;
  uniform float uSpawnChance;
  uniform float uTrailDecay;
  uniform float uAgeStep;
  uniform vec2 uMouse;
  uniform float uMouseActive;
  uniform float uBrushRadius;
  uniform float uMutation;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  // fract() wraps the lookup, so the board is a torus and gliders that walk
  // off one edge reappear on the other instead of dying at the border.
  float isAlive(vec2 uv) {
    return step(0.5, texture2D(uState, fract(uv)).r);
  }

  void main() {
    vec2 texel = 1.0 / uGrid;

    // Snap to the centre of the texel so NEAREST sampling can never land
    // between two cells.
    vec2 uv = (floor(vUv * uGrid) + 0.5) * texel;

    float neighbours = 0.0;

    for (int y = -1; y <= 1; y++) {
      for (int x = -1; x <= 1; x++) {
        if (x == 0 && y == 0) continue;

        neighbours += isAlive(
          uv + vec2(float(x), float(y)) * texel
        );
      }
    }

    vec4 self = texture2D(uState, uv);
    float alive = step(0.5, self.r);

    // B3/S23 expressed without float equality: survives on 2-3, born on 3.
    float survives = step(1.5, neighbours) * step(neighbours, 3.5);
    float born = step(2.5, neighbours) * step(neighbours, 3.5);
    float next = mix(born, survives, alive);

    // A trickle of spontaneous births keeps the board from settling into
    // still lifes (or dying out) while it sits behind the hero copy.
    float spark = step(
      1.0 - uSpawnChance,
      hash(uv * 512.0 + uTime)
    );

    next = max(next, spark);

    // Global mutation.
    //
    // When uMutation is 0.02, roughly 2% of cells are randomly flipped
    // whenever a generation is evaluated. This perturbs the entire board
    // instead of creating a local cursor-shaped mutation.
    float mutation = step(
      1.0 - uMutation,
      hash(uv * 193.7 + uTime * 17.3)
    );

    next = mix(next, 1.0 - next, mutation);

    // Subtle breakup only along the bottom edge.
    //
    // This prevents the simulation from forming a continuous horizontal
    // wall at the bottom while leaving the top and side edges untouched.
    float bottomEdge = 1.0 - smoothstep(
      0.0,
      0.08,
      uv.y
    );

    float bottomBreak = step(
      hash(uv * 743.1 + uTime * 3.7),
      bottomEdge * 0.12
    );

    next *= 1.0 - bottomBreak;

    // The cursor paints a sparse cluster of cells into the board (in cell
    // units, so the brush reads as a circle regardless of grid aspect).
    // A per-cell random gate keeps it looking like a scattered soup rather
    // than a solid stamped block.
    float cellDist = length((uv - uMouse) * uGrid);
    float inBrush = step(cellDist, uBrushRadius) * uMouseActive;
    float brushNoise = step(
      0.5,
      hash(uv * 991.0 + uTime * 37.0)
    );

    next = max(next, inBrush * brushNoise);

    float trail = max(next, self.g * uTrailDecay);
    float age = next * min(self.b * alive + uAgeStep, 1.0);

    gl_FragColor = vec4(next, trail, age, 1.0);
  }
`

const renderFragmentShader = /*glsl*/ `
  precision highp float;

  varying vec2 vUv;

  uniform sampler2D uState;
  uniform sampler2D uColorMap;
  uniform vec2 uGrid;
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uTrailOpacity;
  uniform float uGridOpacity;
  uniform float uGap;
  uniform float uStroke;

  // Same 4x4 ordered-dither matrix used on the image thumbnails
  // (see shaders/thresholdShader.tsx) so dying cells dissolve using
  // the same grainy, analog language instead of a smooth alpha fade.
  const int ditherMatrix[16] = int[](
     0,  8,  2, 10,
    12,  4, 14,  6,
     3, 11,  1,  9,
    15,  7, 13,  5
  );

  float dither(vec2 fragCoord, float value) {
    int x = int(mod(fragCoord.x, 4.0));
    int y = int(mod(fragCoord.y, 4.0));
    int index = x + y * 4;
    float limit = (float(ditherMatrix[index]) + 1.0) / 17.0;

    return value < limit ? 0.0 : 1.0;
  }

  void main() {
    vec2 scaled = vUv * uGrid;
    vec2 cellUv = fract(scaled);
    vec2 id = (floor(scaled) + 0.5) / uGrid;

    vec4 state = texture2D(uState, id);
    float alive = state.r;
    float trail = state.g;
    float age = state.b;

    // Chebyshev distance from the cell centre gives us a square, which is
    // what makes the cells read as pixels rather than dots.
    vec2 d = abs(cellUv - 0.5);
    float square = max(d.x, d.y);
    float halfSize = 0.5 - uGap;

    float filled = step(square, halfSize);
    float outline = filled - step(square, halfSize - uStroke);

    // Young cells are solid; the longer one survives the more it thins out
    // into an outline, echoing the stroked type used across the site.
    float shape = mix(
      filled,
      outline,
      smoothstep(0.15, 0.75, age)
    );

    float alpha = alive * shape * uOpacity;

    // Use the existing cell age as the position in the colormap.
    // age = 0.0 -> start of the palette
    // age = 1.0 -> end of the palette
    vec3 mapColor = texture2D(
      uColorMap,
      vec2(clamp(age, 0.0, 1.0), 0.5)
    ).rgb;

    // Keep the existing prop as a tint.
    vec3 finalColor = mapColor * uColor;

    // Dying cells stipple out via the dither pattern (denser dots = fresher
    // trail) instead of smoothly fading, so a dead cell with no trail left
    // is fully transparent and blends straight into the page background.
    float trailDither = dither(gl_FragCoord.xy, trail);

    alpha +=
      (1.0 - alive) *
      filled *
      trailDither *
      uTrailOpacity;

    if (alpha <= 0.001) {
      discard;
    }

    gl_FragColor = vec4(finalColor, alpha);
  }
`

const copyFragmentShader = /*glsl*/ `
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D uTexture;

  void main() {
    gl_FragColor = texture2D(uTexture, vUv);
  }
`

export function createGameOfLifeSimulationMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uState: { value: null },
      uGrid: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uSpawnChance: { value: 0.0006 },
      uTrailDecay: { value: 0.82 },
      uAgeStep: { value: 0.06 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseActive: { value: 0 },
      uBrushRadius: { value: 5 },

      // Global mutation strength.
      // GameOfLife.tsx can temporarily set this to 0.02 on click.
      uMutation: { value: 0 },
    },
    vertexShader: passthroughVertexShader,
    fragmentShader: simulationFragmentShader,
    depthTest: false,
    depthWrite: false,
  })
}

export function createGameOfLifeRenderMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uState: { value: null },

      // NEW: 1D colormap texture generated by `colormap`.
      uColorMap: { value: null },

      uGrid: { value: new THREE.Vector2(1, 1) },
      uColor: { value: new THREE.Color('#ffffff') },
      uOpacity: { value: 0.22 },
      uTrailOpacity: { value: 0.4 },

      // 0 by default so fully-dead cells are invisible and blend straight
      // into the page background instead of showing a persistent grid.
      uGridOpacity: { value: 0 },

      uGap: { value: 0.16 },
      uStroke: { value: 0.14 },
    },
    vertexShader: passthroughVertexShader,
    fragmentShader: renderFragmentShader,
    transparent: true,
    depthWrite: false,
  })
}

export function createCopyMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTexture: { value: null } },
    vertexShader: passthroughVertexShader,
    fragmentShader: copyFragmentShader,
    depthTest: false,
    depthWrite: false,
  })
}
