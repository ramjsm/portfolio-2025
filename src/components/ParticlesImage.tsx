import { useImageAsTexture } from '@14islands/r3f-scroll-rig'
import { useEffect, useMemo, useRef } from 'react'
import ParticlesMaterial from './shaders/ParticlesMaterial'
import { extend } from '@react-three/fiber'
import { Point, Points } from '@react-three/drei'
import * as THREE from 'three'

extend({ ParticlesMaterial })

export function ParticlesImage({ imgRef, ...props }) {
  const ref = useRef<THREE.Points>(null)
  const { size, viewport, gl } = useThree()

  // 2. Create PlaneGeometry and extract positions as points
  const points = useMemo(() => {
    const geo = new THREE.PlaneGeometry(30, 30, 50, 50) // width, height, segments
    return geo.attributes.position.array
  }, [])

  useEffect(() => {
    if (ref.current) {
      const resolution = new THREE.Vector2(
        size.width * gl.getPixelRatio(),
        size.height * gl.getPixelRatio()
      )
      ref.current.uniforms.uResolution.value.copy(resolution)
    }
  }, [size, gl])

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      {/* 3. Use custom shader material */}
      <particlesMaterial />
    </points>
  )
}
