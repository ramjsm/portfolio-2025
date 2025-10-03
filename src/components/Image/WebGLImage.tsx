import { useImageAsTexture } from '@14islands/r3f-scroll-rig'
import { useEffect, useRef, useState } from 'react'
import ThresholdMaterial from '../shaders/thresholdShader'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

extend({ ThresholdMaterial })

interface WebGLImageProps {
  imgRef: any
  thresholdWhite: number
  thresholdGray: number
  noise?: number
  color?: string
  enabled?: boolean
  [key: string]: any
}

export function WebGLImage({ imgRef, ...props }: WebGLImageProps) {
  // Check for preloaded texture first
  const src = imgRef.current?.src
  const preloadedTextures = typeof window !== 'undefined' ? (window as any).__preloadedTextures : null
  const preloadedTexture = preloadedTextures && src ? preloadedTextures.get(src) : null
  
  // Use preloaded texture if available, otherwise load from img element
  const texture = preloadedTexture || useImageAsTexture(imgRef)
  const materialRef = useRef<any>(null)
  const meshRef = useRef<any>(null)
  const [isActive, setIsActive] = useState(false)

  useGSAP(() => {
    gsap.fromTo(
      materialRef.current,
      {
        uThresholdWhite: 1,
        uThresholdGray: 1,
        uNoise: 0,
      },
      {
        duration: 1.8,
        uThresholdWhite: props.thresholdWhite,
        uThresholdGray: props.thresholdGray,
        uNoise: 1,
        scrollTrigger: imgRef.current,
      }
    )
  })

  useEffect(() => {
    if (texture.image && materialRef.current) {
      materialRef.current.uResolution.set(
        texture.image.width,
        texture.image.height
      )
      // materialRef.current.uThresholdWhite = props.thresholdWhite
      // materialRef.current.uThresholdGray = props.thresholdGray
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
    const handleMouseMove = (e: MouseEvent) => {
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
