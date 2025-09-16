import { useEffect, useRef } from 'react'
import ThresholdMaterial from '../shaders/thresholdShader'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

extend({ ThresholdMaterial })

interface WebGLVideoProps {
  src: string
  videoRef: any
  thresholdWhite: number
  thresholdGray: number
  [key: string]: any
}

export function WebGLVideo({ src, videoRef, ...props }: WebGLVideoProps) {
  const materialRef = useRef<any>(null)
  const videoTextureRef = useRef<THREE.VideoTexture | null>(null)

  useGSAP(() => {
    gsap.fromTo(
      materialRef.current,
      {
        uThresholdWhite: 1,
        uThresholdGray: 1,
        uNoise: -10,
      },
      {
        duration: 2,
        uThresholdWhite: props.thresholdWhite,
        uThresholdGray: props.thresholdGray,
        uNoise: 1.0,
        scrollTrigger: videoRef.current,
        ease: 'expo.out',
      }
    )
  })

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      videoTextureRef.current = new THREE.VideoTexture(video)
      if (videoTextureRef.current) {
        videoTextureRef.current.minFilter = THREE.LinearFilter
        videoTextureRef.current.magFilter = THREE.LinearFilter
        videoTextureRef.current.format = THREE.RGBAFormat
      }
    }

    if (materialRef.current) {
      // materialRef.current.uResolution.set(videoTextureRef.image.width, videoTextureRef.image.height)
      materialRef.current.uThresholdWhite = props.thresholdWhite
      materialRef.current.uThresholdGray = props.thresholdGray
    }
  }, [
    src,
    videoRef,
    videoTextureRef,
    props.thresholdWhite,
    props.thresholdGray,
  ])

  useFrame(() => {
    if (videoTextureRef.current) {
      videoTextureRef.current.needsUpdate = true
      if (materialRef.current && materialRef.current.uniforms) {
        materialRef.current.uniforms.uImage.value = videoTextureRef.current
      }
    }
  })

  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1, 16, 16]} />
      <thresholdMaterial transparent ref={materialRef} uColor="white" />
    </mesh>
  )
}
