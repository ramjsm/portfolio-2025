import { shaderMaterial } from "@react-three/drei"
import * as THREE from 'three'

const ParticlesMaterial = shaderMaterial(
  { uResolution: new THREE.Vector2(5, 5) },
    /*glsl*/`
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;

      gl_PointSize = 0.3 * uResolution.y;
      gl_PointSize *= (1.0 / - viewPosition.z);
    }
  `,
    /*glsl*/`
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);;
    }
  `
)

export default ParticlesMaterial