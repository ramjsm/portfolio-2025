import { Link } from 'react-router-dom'
import Logo from '../assets/logo_white.svg?react'
import Menu from '../assets/menu.svg?react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useProgress } from '@react-three/drei'
import { Navigation } from './Navigation'

export function Overlay() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [animationTriggered, setAnimationTriggered] = useState(false)
  const logoRef = useRef<SVGSVGElement>(null)
  const leftElementsRef = useRef<HTMLAnchorElement>(null)
  const rightElementsRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { progress } = useProgress()
  const { contextSafe } = useGSAP()
  const tl = useRef()

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  // Initially hide all elements including logo
  useGSAP(() => {
    // Create animation timeline
    tl.current = gsap.timeline()

    // Show and animate logo to its position
    // Animate in other overlay elements
    tl.current
      .from(logoRef.current, {
        opacity: 0,
        duration: 1,
      })
      .from(
        '.overlay-stack',
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.5,
          delay: 0,
          ease: 'power2.out',
        },
        0.1
      )
  }, [])

  // Trigger animation when loading is complete
  useEffect(() => {
    if (progress >= 100 && !animationTriggered) {
      setAnimationTriggered(true)
      tl.current.resume()
    }
  }, [progress, animationTriggered])

  return (
    <>
      <div className="font-pp-neue-montreal fixed z-99 flex w-full justify-between bg-linear-to-b from-[#101010] to-transparent px-5 py-5 text-xs tracking-wider">
        <Link
          ref={leftElementsRef}
          to="/"
          className="overlay-stack flex-1 text-nowrap opacity-60"
          data-cursor-text="HOME"
        >
          <div className="font-[100] uppercase">Ramses Salas</div>
          <div className="font-[100] uppercase">Creative Technologist</div>
        </Link>
        <Link
          to="/"
          className="flex flex-1 justify-center"
          data-cursor-text="HOME"
        >
          <Logo
            ref={logoRef}
            className="overlay-logo h-[2rem] w-[2rem] lg:h-[33px] lg:w-[33px]"
          />
        </Link>
        <div
          ref={rightElementsRef}
          className="overlay-stack flex-1 text-right font-[100] text-nowrap uppercase opacity-60"
        >
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs">Available for Projects</span>
            <span className="relative">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative block h-2 w-2 rounded-full bg-green-500"></span>
            </span>
          </div>
          <a
            href="https://calendly.com/ramsessalas/discovery-meeting"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="CONTACT"
          >
            Schedule a Call &#8594;
          </a>
        </div>
      </div>
      <div ref={menuRef} className="overlay-menu fixed right-5 bottom-5 z-9999">
        <Menu
          className="overlay-stack cursor-hover h-[5rem] w-[5rem] lg:h-[80px] lg:w-[80px]"
          data-cursor-text="MENU"
          onClick={toggleMenu}
        />
      </div>

      {/* Full-screen Navigation */}
      <Navigation isVisible={isMenuVisible} onClose={toggleMenu} />
    </>
  )
}
