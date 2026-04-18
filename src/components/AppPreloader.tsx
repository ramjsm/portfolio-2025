import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { useImagePreloader, preloadImages } from '../hooks/useImagePreloader'
import {
  getCriticalHomePageAssets,
  getNonCriticalHomePageAssets,
} from '../utils/homeAssets'
import gsap from 'gsap'
import { useIntro } from '../contexts/IntroContext'

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
      }, 200)

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
 * Minimal loading indicator shown while critical assets are being preloaded.
 * Once `visible` flips to false the indicator fades out so it does not
 * compete with the Overlay's hero logo reveal.
 */
function LoadingIndicator({ visible }: { visible: boolean }) {
  const { progress } = useProgress()
  const clamped = Math.min(100, Math.max(0, Math.round(progress)))

  return (
    <div
      className={`font-pp-neue-montreal pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 text-white transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="h-px w-40 overflow-hidden bg-white/15">
        <div
          className="h-full bg-white/80 transition-[width] duration-300 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <div className="text-[10px] tracking-[0.3em] text-white/60 uppercase">
        Loading {clamped.toString().padStart(3, '0')}
      </div>
    </div>
  )
}

/**
 * App preloader component that prevents rendering until assets are loaded
 */
export function AppPreloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [areAssetsReady, setAreAssetsReady] = useState(false)
  const { isIntroComplete } = useIntro()
  const hasFadedOutRef = useRef(false)

  const handleAssetsReady = () => {
    setAreAssetsReady(true)
  }

  // The loading overlay only fades out once BOTH critical assets are ready
  // AND the Overlay's intro animation has finished. This guarantees the
  // hero logo reveal plays in front of the loader's dark backdrop and the
  // page content underneath stays hidden until the intro is complete.
  useEffect(() => {
    if (!areAssetsReady || !isIntroComplete || hasFadedOutRef.current) return
    hasFadedOutRef.current = true

    gsap.to('.loading-overlay', {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsLoading(false)
      },
    })
  }, [areAssetsReady, isIntroComplete])

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
              <AssetPreloader onComplete={handleAssetsReady} />
            </Suspense>
          </Canvas>
          <LoadingIndicator visible={!areAssetsReady} />
        </div>
      )}
    </>
  )
}
