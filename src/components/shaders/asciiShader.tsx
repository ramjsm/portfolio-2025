import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { ASCII_GLYPHS } from '../../utils/asciiAtlas'

const AsciiMaterial = shaderMaterial(
  {
    uMouse: new THREE.Vector2(0.5, 0.5),
    uActive: false,
    uTime: 0,
    uImage: null,
    uAsciiTex: null,
    uResolution: new THREE.Vector2(),
    uGlyphCount: ASCII_GLYPHS.length,
    uCellSize: 12.0,
    uSpacing: 0.0,
    uExposure: 1.0,
    uProgress: 1.0,
    uNoise: 1.0,
    uColor: new THREE.Color('white'),
    uSampleColor: 0.0,
    uDeformRadius: 0.25,
    uDeformStrength: 0.15,
  },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uActive;
    uniform vec2 uMouse;
    uniform float uDeformRadius;
    uniform float uDeformStrength;

    void main() {
      vUv = uv;

      vec3 pos = position;
      float dist = distance(uv, uMouse);
      float influence = uActive * (1.0 - smoothstep(0.0, uDeformRadius, dist));
      pos.z += influence * uDeformStrength;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    varying vec2 vUv;
    uniform vec2 uResolution;
    uniform sampler2D uImage;
    uniform sampler2D uAsciiTex;
    uniform float uGlyphCount;
    uniform float uCellSize;
    uniform float uSpacing;
    uniform float uExposure;
    uniform vec3 uColor;
    uniform float uProgress;
    uniform float uNoise;
    uniform float uTime;
    uniform float uActive;
    uniform vec2 uMouse;
    uniform float uSampleColor;

    float rand(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;

      // Snap the whole image to a coarse grid of "cells" - one glyph per cell.
      vec2 grid = max(uResolution / uCellSize, vec2(1.0));
      vec2 gridUV = floor(uv * grid) / grid;

      vec4 image = texture2D(uImage, gridUV);
      vec3 exposed = clamp(image.rgb * uExposure, 0.0, 1.0);
      float luma = dot(exposed, vec3(0.299, 0.587, 0.114));

      // Light/dense pixels -> dense glyphs (e.g. "@"), dark pixels -> sparse ones (e.g. " ").
      float glyphIndex = floor(luma * (uGlyphCount - 1.0));

      // Shrink the glyph within its cell (leaving a transparent gap around it)
      // by insetting the local UV by uSpacing on every side.
      float pad = clamp(uSpacing, 0.0, 0.49);
      vec2 rawCellUV = fract(uv * grid);
      vec2 cellUV = (rawCellUV - pad) / (1.0 - 2.0 * pad);
      bool insideGlyph =
        cellUV.x >= 0.0 && cellUV.x <= 1.0 &&
        cellUV.y >= 0.0 && cellUV.y <= 1.0;
      cellUV = clamp(cellUV, 0.0, 1.0);

      vec2 atlasUV = vec2((cellUV.x + glyphIndex) / uGlyphCount, cellUV.y);
      vec4 glyph = texture2D(uAsciiTex, atlasUV);

      // Cells materialize in randomly as uProgress goes 0 -> 1.
      float cellRand = rand(gridUV * 7.0);
      float revealed = step(cellRand, uProgress);

      vec3 color = mix(uColor, exposed, uSampleColor);

      float alpha = glyph.a * revealed * image.a * (insideGlyph ? 1.0 : 0.0);
      gl_FragColor = vec4(color, alpha);
    }
  `
)

export default AsciiMaterial
