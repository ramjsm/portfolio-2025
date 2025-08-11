import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

// GLSL noise function (Classic Perlin)
const noiseGLSL = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  float snoise(vec2 v)
  {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute(
                i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 x_ = fract(p * C.w) * 2.0 - 1.0;
    vec3 h = abs(x_) - 0.5;
    vec3 ox = floor(x_ + 0.5);
    vec3 a0 = x_ - ox;
    float m0 = dot(x0, x0);
    float m1 = dot(x12.xy, x12.xy);
    float m2 = dot(x12.zw, x12.zw);
    m0 = max(0.5 - m0, 0.0);
    m1 = max(0.5 - m1, 0.0);
    m2 = max(0.5 - m2, 0.0);
    return 70.0 * (
      m0*m0*dot(a0.xy, x0) +
      m1*m1*dot(a0.zw, x12.xy) +
      m2*m2*dot(a0.zw, x12.zw)
    );
  }
`

const ThresholdMaterial = shaderMaterial(
  {
    uMouse: new THREE.Vector2(0.5, 0.5),
    uActive: false,
    uTime: 0,
    uImage: null,
    uResolution: new THREE.Vector2(),
    uThresholdWhite: 0.4,
    uThresholdGray: 0.3,
    uNoise: 1.0,
    uColor: new THREE.Color(),
    uEnabled: true,
  },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uActive;

    void main() {
      vUv = uv;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    varying vec2 vUv;
    uniform vec2 uResolution;
    uniform sampler2D uImage;
    uniform float uThresholdWhite;
    uniform float uThresholdGray;
    uniform float uNoise;
    uniform vec3 uColor;
    uniform float uEnabled;
    uniform float uTime;
    uniform float uActive;
    uniform vec2 uMouse;
    
    float threshold(float color) {
      if (color > uThresholdWhite) {
        return 1.0;
      }
      if (color > uThresholdGray) {
        return 0.5;
      }
      return 0.0;
    }

    float rand(vec2 uv) {
      return fract(sin(dot(uv * 10.0 + vec2(uTime * 0.001), vec2(12.9898,78.233))) * 43758.5453);
    }

    const int dither_matrix[16] = int[](
       0,  8,  2, 10,
      12,  4, 14,  6,
      3, 11,  1,  9,
      15,  7, 13,  5
    );

    float dither(vec2 uv, float luma) {
      float dither_amount = 4.0;
      int x = int(mod(floor(uv.x * uResolution.x), dither_amount));
      int y = int(mod(floor(uv.y * uResolution.y), dither_amount));
      int index = x + y * int(dither_amount);
      float limit = (float(dither_matrix[index]) + 1.0) / (1.0 + 4.0);
      return luma < limit ? 0.0 : 1.0;
    }


    void main() {
      vec4 luma = vec4(0.299, 0.587, 0.114, 0);
      vec2 uv = vUv;

      vec2 mouseUV = uMouse / uResolution;
      mouseUV.y = 1.0 - mouseUV.y;

      if (uActive > 0.0) {
        float dist = distance(uv, uMouse);
        float ripple = sin(dist * 50.0 - uTime * 4.0) * 0.1;
        uv += normalize(uv - uMouse) * ripple;
      }

      vec4 image = texture(uImage, uv);

      gl_FragColor = image; 

      float grayscale = dot(gl_FragColor, luma);

      float thresholded = threshold(
        grayscale + ((rand(uv) / 9.0) * uNoise)
      );
      
      
      gl_FragColor = thresholded < 0.5 ? vec4(0.0, 0.0, 0.0, 0.0) : vec4(image.r * thresholded, image.g * thresholded, image.b * thresholded, 1.0);
    }
  `
)

export default ThresholdMaterial

/* if(uEnabled == 1.0 && uActive > 0.0) {
        gl_FragColor = thresholded < 0.5 ? vec4(0.0, 0.0, 0.0, 0.0) : vec4(image.r * thresholded, image.g * thresholded, image.b * thresholded, 1.0);
        // gl_FragColor = thresholded < 0.5 ? vec4(0.0, 0.0, 0.0, 0.0) : vec4(vec3(thresholded), 1.0);
      } else if(uEnabled == 1.0) {
       gl_FragColor = thresholded < 0.5 ? vec4(0.0, 0.0, 0.0, 0.0) : vec4(vec3(thresholded), 1.0);
      } else {
        gl_FragColor = image;
      } */
