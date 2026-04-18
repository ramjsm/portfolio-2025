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

  // Entrance animation
  useGSAP(
    () => {
      if (!isVisible) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35 }
      ).fromTo(
        '.nav-item',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          clearProps: 'opacity,transform',
        },
        '-=0.15'
      )
    },
    { dependencies: [isVisible], scope: navigationRef }
  )

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

  const navItems = [
    { to: '/', slug: '/home', cursor: 'HOME' },
    { to: '/about', slug: '/about', cursor: 'ABOUT' },
    { to: '/events', slug: '/events', cursor: 'EVENTS' },
    { to: '/#co-creations', slug: '/co-creations', cursor: 'CO-CREATIONS' },
    { to: '/#clients-work', slug: '/clients-work', cursor: 'WEB.WORK' },
  ]

  return createPortal(
    <div
      ref={navigationRef}
      className="font-pp-neue-montreal fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      {/* Background overlay — same raw texture as the rest of the site */}
      <div
        ref={overlayRef}
        className="absolute inset-0 cursor-pointer"
        onClick={handleOverlayClick}
        style={{
          backgroundImage:
            "linear-gradient(rgb(15 15 15), rgb(0 0 0 / 90%)), url('/background.webp')",
          backgroundRepeat: 'round',
        }}
      />

      {/* Navigation content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-start justify-center px-8">
        {/* Menu items */}
        <nav className="w-full max-w-md pl-8">
          <div ref={menuItemsRef} className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleLinkClick}
                data-cursor-text={item.cursor}
                className="nav-item border-texture-top group relative flex items-baseline gap-4 py-2 transition-[padding] duration-300 hover:pl-2"
              >
                {/* Index number */}
                <span className="w-5 text-[9px] tracking-widest text-gray-500 uppercase transition-colors duration-300 group-hover:text-white/80">
                  0{index + 1}
                </span>

                {/* Slug-style label */}
                <span className="font-pp-neue-montreal relative text-base leading-none font-light tracking-tight text-white lowercase">
                  <span className="relative inline-block">
                    <span className="text-gray-500 transition-colors duration-300 group-hover:text-white">
                      {item.slug.split('/')[0]}/
                    </span>
                    <span>{item.slug.slice(1)}</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>,
    document.body
  )
}

// Memoize the component to prevent unnecessary re-renders
export const Navigation = memo(NavigationComponent)
