import { useImageAsTexture } from '@14islands/r3f-scroll-rig'
import { useEffect, useMemo, useRef, useState } from 'react'
import AsciiMaterial from '../shaders/asciiShader'
import { getAsciiAtlas } from '../../utils/asciiAtlas'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

extend({ AsciiMaterial })

interface WebGLAsciiImageProps {
  imgRef: any
  cellSize?: number
  /** Gap between glyphs, as a fraction of the cell (0 = touching, up to ~0.49). */
  spacing?: number
  /** Brightness multiplier applied before computing luminance/glyph density. */
  exposure?: number
  color?: string
  sampleColor?: boolean
  [key: string]: any
}

export function WebGLAsciiImage({
  imgRef,
  cellSize = 12,
  spacing = 0,
  exposure = 1,
  color = 'white',
  sampleColor = false,
  ...props
}: WebGLAsciiImageProps) {
  // Check for preloaded texture first, same as WebGLImage.
  const src = imgRef.current?.src
  const preloadedTextures =
    typeof window !== 'undefined' ? (window as any).__preloadedTextures : null
  const preloadedTexture =
    preloadedTextures && src ? preloadedTextures.get(src) : null

  const texture = preloadedTexture || useImageAsTexture(imgRef)
  const atlas = useMemo(() => getAsciiAtlas(), [])
  const materialRef = useRef<any>(null)
  const [isActive, setIsActive] = useState(false)

  useGSAP(() => {
    gsap.fromTo(
      materialRef.current,
      {
        uProgress: 0,
        uNoise: 0,
      },
      {
        duration: 1.8,
        uProgress: 1,
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
    }
  }, [texture])

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime()
      materialRef.current.uActive = isActive ? 1.0 : 0.0
    }
  })

  return (
    <group {...props}>
      <mesh
        onPointerMove={(e) => {
          setIsActive(true)
          if (materialRef.current && e.uv) {
            materialRef.current.uMouse.set(e.uv.x, e.uv.y)
          }
        }}
        onPointerOver={() => setIsActive(true)}
        onPointerOut={() => setIsActive(false)}
      >
        <planeGeometry args={[1, 1, 32, 32]} />
        <asciiMaterial
          transparent
          ref={materialRef}
          uImage={texture}
          uAsciiTex={atlas.texture}
          uGlyphCount={atlas.glyphCount}
          uCellSize={cellSize}
          uSpacing={spacing}
          uExposure={exposure}
          uColor={new THREE.Color(color)}
          uSampleColor={sampleColor ? 1.0 : 0.0}
        />
      </mesh>
    </group>
  )
}
