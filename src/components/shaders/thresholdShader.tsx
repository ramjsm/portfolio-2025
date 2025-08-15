import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const ThresholdMaterial = shaderMaterial(
  {
    uMouse: new THREE.Vector2(0.5, 0.5),
    uActive: false,
    uTime: 0,
    uImage: null,
    uResolution: new THREE.Vector2(),
    uThresholdWhite: 2.0,
    uThresholdGray: 2.0,
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

      // if (uActive > 0.0) {
      //   float dist = distance(uv, uMouse);
      //   float ripple = sin(dist * 50.0 - uTime * 4.0) * 0.1;
      //   uv += normalize(uv - uMouse) * ripple;
      // }

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
