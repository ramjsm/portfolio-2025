import { useImageAsTexture } from '@14islands/r3f-scroll-rig'
import { useGSAP } from '@gsap/react'
import { MeshDistortMaterial } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ThresholdMaterial from './shaders/thresholdShader'
import { extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

extend({ ThresholdMaterial })

export function WebGLImage({ imgRef, ...props }) {
  // Load texture from the <img/> and suspend until its ready
  const texture = useImageAsTexture(imgRef)
  const { camera, size, mouse, viewport } = useThree()
  const materialRef = useRef()
  const meshRef = useRef()
  const [isActive, setIsActive] = useState(false)

  const mouseVec = new THREE.Vector3()

  useEffect(() => {
    if (texture.image && materialRef.current) {
      materialRef.current.uResolution.set(
        texture.image.width,
        texture.image.height
      )
      materialRef.current.uThresholdWhite = props.thresholdWhite
      materialRef.current.uThresholdGray = props.thresholdGray
      // materialRef.current.uNoise = props.noise
      /* materialRef.current.uColor = new THREE.Color(props.color)
      materialRef.current.uEnabled = props.enabled */
      // materialRef.current.uActive = isActive
    }
  }, [
    texture,
    props.thresholdWhite,
    props.thresholdGray,
    props.noise,
    props.color,
    props.enabled,
    isActive,
  ])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isActive) return
      const x = e.clientX / window.innerWidth
      const y = 1.0 - e.clientY / window.innerHeight // flip Y for UV space
      if (materialRef.current) {
        materialRef.current.uMouse.set(x, y)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [materialRef, isActive])

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime()
      materialRef.current.uActive = isActive ? 1.0 : 0.0
    }
  })

  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setIsActive(true)}
        onPointerLeave={() => setIsActive(false)}
      >
        <planeGeometry args={[1, 1, 16, 16]} />
        <thresholdMaterial
          transparent
          ref={materialRef}
          uImage={texture}
          uColor="white"
          uMouse={new THREE.Vector3(0, 0, 0)}
        />
      </mesh>
    </group>
  )
}
