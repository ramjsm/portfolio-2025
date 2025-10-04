import { Link } from 'react-router-dom'
import { useEffect, useRef, useCallback, memo } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface NavigationProps {
  isVisible: boolean
  onClose: () => void
}

function NavigationComponent({ isVisible, onClose }: NavigationProps) {
  const navigationRef = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP()

  const animateMenuIn = useCallback(() => {
    // GSAP animations commented out - fix later
    // if (navigationRef.current) {
    //   const tl = gsap.timeline()
    //   tl.set(navigationRef.current, { display: 'flex' })
    //     .from(overlayRef.current, {
    //       opacity: 0,
    //       duration: 0.3,
    //       ease: 'power2.out'
    //     })
    //     .from('.nav-item', {
    //       opacity: 0,
    //       y: 50,
    //       duration: 0.8,
    //       stagger: 0.1,
    //       ease: 'power3.out'
    //     }, 0.1)
    //     .from('.nav-footer', {
    //       opacity: 0,
    //       y: 30,
    //       duration: 0.6,
    //       ease: 'power2.out'
    //     }, 0.3)
    // }
  }, [])

  const animateMenuOut = useCallback(() => {
    // GSAP animations commented out - fix later
    // if (navigationRef.current) {
    //   const tl = gsap.timeline()
    //   tl.to('.nav-item', {
    //       opacity: 0,
    //       y: -30,
    //       duration: 0.4,
    //       stagger: 0.05,
    //       ease: 'power2.in'
    //     })
    //     .to('.nav-footer', {
    //       opacity: 0,
    //       y: -20,
    //       duration: 0.3,
    //       ease: 'power2.in'
    //     }, 0.1)
    //     .to(overlayRef.current, {
    //       opacity: 0,
    //       duration: 0.3,
    //       ease: 'power2.in'
    //     }, 0.2)
    //     .set(navigationRef.current, { display: 'none' })
    // }
  }, [])

  useEffect(() => {
    if (isVisible) {
      animateMenuIn()
    } else {
      animateMenuOut()
    }
  }, [isVisible, animateMenuIn, animateMenuOut])

  const handleLinkClick = useCallback(() => {
    onClose()
  }, [onClose])

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        onClose()
      }
    },
    [onClose]
  )

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        onClose()
      }
    }

    if (isVisible) {
      document.addEventListener('keydown', handleEscKey)
      return () => document.removeEventListener('keydown', handleEscKey)
    }
  }, [isVisible, onClose])

  return createPortal(
    <div
      ref={navigationRef}
      className="font-pp-neue-montreal fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      {/* Background overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 cursor-pointer bg-black"
        onClick={handleOverlayClick}
      />

      {/* Navigation content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8">
        {/* Menu items */}
        <nav className="text-center">
          <div ref={menuItemsRef} className="flex flex-col gap-8">
            <Link
              to="/"
              className="nav-item text-5xl leading-none font-light tracking-tight text-white transition-colors duration-300 hover:text-gray-300"
              onClick={handleLinkClick}
              data-cursor-text="HOME"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="nav-item text-5xl leading-none font-light tracking-tight text-white transition-colors duration-300 hover:text-gray-300"
              onClick={handleLinkClick}
              data-cursor-text="ABOUT"
            >
              About
            </Link>

            <Link
              to="/#co-creations"
              className="nav-item text-5xl leading-none font-light tracking-tight text-white transition-colors duration-300 hover:text-gray-300"
              onClick={handleLinkClick}
              data-cursor-text="CO-CREATIONS"
            >
              Co-Creations
            </Link>

            <Link
              to="/#clients-work"
              className="nav-item text-5xl leading-none font-light tracking-tight text-white transition-colors duration-300 hover:text-gray-300"
              onClick={handleLinkClick}
              data-cursor-text="CLIENTS"
            >
              Clients Work
            </Link>
          </div>
        </nav>
        {/* Close indicator */}
        <div className="absolute top-8 right-8 text-sm tracking-wider text-gray-400 uppercase">
          ESC to close
        </div>
      </div>
    </div>,
    document.body
  )
}

// Memoize the component to prevent unnecessary re-renders
export const Navigation = memo(NavigationComponent)
