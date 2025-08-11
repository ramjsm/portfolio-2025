import { useImageAsTexture } from '@14islands/r3f-scroll-rig'
import { useGSAP } from '@gsap/react'
import { MeshDistortMaterial } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ThresholdMaterial from './shaders/thresholdShader'
import { extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

extend({ ThresholdMaterial })

export function WebGLVideo({ src, videoRef, ...props }) {
  // const videoRef = useRef(document.createElement('video'))
  const materialRef = useRef()
  const videoTextureRef = useRef()

  useEffect(() => {
    const video = videoRef.current
    
    // Create the video texture once the video element is ready
    videoTextureRef.current = new THREE.VideoTexture(video)
    videoTextureRef.current.minFilter = THREE.LinearFilter
    videoTextureRef.current.magFilter = THREE.LinearFilter
    videoTextureRef.current.format = THREE.RGBAFormat

    if (materialRef.current) {
      // console.log(props.thresholdWhite)
      // materialRef.current.uResolution.set(videoTextureRef.image.width, videoTextureRef.image.height)
      materialRef.current.uThresholdWhite = props.thresholdWhite
      materialRef.current.uThresholdGray = props.thresholdGray
    }
    
  }, [src, videoTextureRef])

  useFrame(() => {
    if (videoTextureRef.current) {
      videoTextureRef.current.needsUpdate = true
      if (materialRef.current) {
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