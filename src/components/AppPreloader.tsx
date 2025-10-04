import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import { useImagePreloader, preloadImages } from '../hooks/useImagePreloader'
import {
  getCriticalHomePageAssets,
  getNonCriticalHomePageAssets,
} from '../utils/homeAssets'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

/**
 * Preloader component that loads critical assets
 */
function AssetPreloader({ onComplete }: { onComplete: () => void }) {
  const criticalAssets = getCriticalHomePageAssets()
  const { textureMap, isLoaded } = useImagePreloader(criticalAssets)

  useEffect(() => {
    if (isLoaded) {
      // Store preloaded textures globally
      if (typeof window !== 'undefined') {
        ;(window as any).__preloadedTextures = textureMap
      }

      // Small delay to show completion before hiding loader
      const timer = setTimeout(() => {
        onComplete()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isLoaded, textureMap, onComplete])

  return null // The loading UI is handled by Suspense fallback
}

/**
 * Progressive loader component for non-critical assets
 */
function ProgressiveAssetLoader() {
  useEffect(() => {
    // Load non-critical assets after the app has rendered
    const timer = setTimeout(() => {
      const nonCriticalAssets = getNonCriticalHomePageAssets()
      preloadImages(nonCriticalAssets)
    }, 1000) // 1 second delay

    return () => clearTimeout(timer)
  }, [])

  return null
}

/**
 * App preloader component that prevents rendering until assets are loaded
 */
export function AppPreloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const { contextSafe } = useGSAP()

  const handleComplete = () => {
    // Simple fade out the loader
    gsap.to('.loading-overlay', {
      opacity: 0,
      duration: 1,
      delay: 0,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsLoading(false)
      },
    })
  }

  return (
    <>
      {/* Always render the app */}
      {children}
      <ProgressiveAssetLoader />

      {/* Loading screen overlay */}
      {isLoading && (
        <div
          className="loading-overlay fixed inset-0 z-50"
          style={{
            background:
              'linear-gradient(rgb(15 15 15), rgb(0 0 0 / 75%)), url("/background.webp")',
            backgroundRepeat: 'round',
          }}
        >
          <Canvas
            className="h-full w-full"
            style={{ background: 'transparent' }}
            gl={{ alpha: true }}
          >
            <Suspense fallback={null}>
              <AssetPreloader onComplete={handleComplete} />
            </Suspense>
          </Canvas>
        </div>
      )}
    </>
  )
}
