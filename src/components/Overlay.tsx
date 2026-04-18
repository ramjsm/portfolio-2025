import { Link } from 'react-router-dom'
import Logo from '../assets/logo_white.svg?react'
import Menu from '../assets/menu.svg?react'
import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Navigation } from './Navigation'
import { handleScrambleHover } from '../utils/scrambleText'
import { useIntro } from '../contexts/IntroContext'

export function Overlay() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const logoRef = useRef<SVGSVGElement>(null)
  const leftElementsRef = useRef<HTMLAnchorElement>(null)
  const rightElementsRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuOpenTl = useRef<gsap.core.Timeline | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)
  const { markIntroComplete } = useIntro()

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  // Called from the top-bar home links so clicking them also closes the nav.
  const closeMenuIfOpen = () => {
    if (isMenuVisible) setIsMenuVisible(false)
  }

  // Menu button has two states:
  //   - idle: the original 4 overlapping capsules (from the static SVG)
  //   - X   : top & bottom pills slim down, meet in the center and rotate
  //           ±45° to form an X; middle pills fade out
  // We wait for any in-flight morph to finish before starting the next one.
  useGSAP(
    () => {
      const bars =
        menuRef.current?.querySelectorAll<SVGRectElement>('.menu-bar')
      if (!bars || bars.length < 4) return

      // Fire `cb` once the given timeline has reached the end of its current
      // direction of motion (forward or reverse). Returns immediately if the
      // timeline isn't playing.
      const afterSettled = (
        timeline: gsap.core.Timeline | null | undefined,
        cb: () => void
      ) => {
        if (!timeline || !timeline.isActive()) {
          cb()
          return
        }
        const evt = timeline.reversed() ? 'onReverseComplete' : 'onComplete'
        const prev = timeline.eventCallback(evt)
        timeline.eventCallback(evt, () => {
          timeline.eventCallback(evt, prev ?? null)
          cb()
        })
      }

      if (isMenuVisible) {
        // Morph to X. Keep each pill's original height/rx so the X is made of
        // the same fat capsules as the idle state — only y, width, and
        // rotation change.
        const X_H = 14.345
        const X_RX = 8.1725
        // Pill length in the X pose. Original width is 67.145; tweak this to
        // try thicker / longer diagonals.
        const X_W = 80
        const cx = 38 // rect horizontal center (x + width/2)
        const cy = 36
        const xAttrs = {
          x: cx - X_W / 2,
          y: cy - X_H / 2,
          width: X_W,
          height: X_H,
          rx: X_RX,
        }

        const MOVE_DUR = 0.45
        const ROTATE_DUR = 0.45

        menuOpenTl.current = gsap
          .timeline({ defaults: { ease: 'power3.inOut' } })
          // Middle pills fade first so they don't clutter the rotation.
          .to([bars[1], bars[2]], { opacity: 0, duration: 0.3 }, 0)
          // Phase 1: top pill slims & slides to center (no rotation yet).
          .to(bars[0], { attr: xAttrs, opacity: 1, duration: MOVE_DUR }, 0.08)
          // Phase 1: bottom pill slims & slides to center.
          .to(bars[3], { attr: xAttrs, opacity: 1, duration: MOVE_DUR }, 0.18)
          // Phase 2: rotate both bars around the exact SVG point (cx, cy).
          .to(
            bars[0],
            { rotate: 45, svgOrigin: `${cx} ${cy}`, duration: ROTATE_DUR },
            '>-0.05'
          )
          .to(
            bars[3],
            { rotate: -45, svgOrigin: `${cx} ${cy}`, duration: ROTATE_DUR },
            '<+0.05'
          )
      } else {
        // Wait for the X morph to finish before unwinding back to idle.
        afterSettled(menuOpenTl.current, () => {
          const idleBase = {
            x: 4.4275,
            width: 67.145,
            height: 24.345,
            rx: 12.1725,
          }
          const idleAttrs = [
            { ...idleBase, y: 0.4275 },
            { ...idleBase, y: 16.0275 },
            { ...idleBase, y: 31.6275 },
            { ...idleBase, y: 47.2275 },
          ]

          gsap.timeline({ defaults: { ease: 'power3.inOut' } }).to(
            bars,
            {
              attr: (i: number) => idleAttrs[i],
              rotate: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.55,
            },
            0
          )
        })
      }
    },
    { dependencies: [isMenuVisible], scope: menuRef }
  )

  // Full intro sequence (plays in parallel with asset loading):
  //   1. The logo hero-reveals dead-center of the viewport at a larger size.
  //   2. It then glides up into its resting position in the top bar.
  //   3. Only after that do the rest of the overlay elements fade in.
  // The AppPreloader holds the dark backdrop until both the assets finish
  // loading AND this timeline signals completion via `markIntroComplete`.
  useGSAP(() => {
    // The intro runs as soon as the Overlay mounts so it happens in parallel
    // with asset loading. The AppPreloader is responsible for keeping the
    // loading backdrop visible until BOTH the assets are ready AND the intro
    // has signalled completion via `markIntroComplete`.
    tl.current = gsap.timeline({
      onComplete: () => markIntroComplete(),
    })

    const logo = logoRef.current
    const logoPaths = logo?.querySelectorAll<SVGPathElement>('path')

    if (logo && logoPaths && logoPaths.length > 0) {
      // Measure how far the logo needs to travel from the header into the
      // vertical center of the viewport. It is already horizontally centered
      // thanks to the header's flex layout, so only Y needs adjusting.
      const rect = logo.getBoundingClientRect()
      const viewportCenterY = window.innerHeight / 2
      const logoCenterY = rect.top + rect.height / 2
      const deltaY = viewportCenterY - logoCenterY

      // Scale the logo up to a hero size. The header logo is ~32-33px, so a
      // scale of 4.5 puts it around ~145px for the reveal.
      const HERO_SCALE = 3

      // Pre-stage the logo: big, centered, and invisible (outline only, no
      // fill, dash offset equal to the full path length).
      logoPaths.forEach((path) => {
        const length = path.getTotalLength()
        gsap.set(path, {
          stroke: '#ffffff',
          strokeWidth: 0.6,
          fillOpacity: 0,
          strokeDasharray: length,
          strokeDashoffset: length,
        })
      })

      gsap.set(logo, {
        y: deltaY,
        scale: HERO_SCALE,
        transformOrigin: 'center center',
      })

      tl.current
        // 1) Trace the logo outline in place (slow, cinematic).
        .to(logoPaths, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: 'power2.inOut',
          stagger: 0.3,
        })
        // 2) Flood the shape with its fill.
        .to(
          logoPaths,
          {
            fillOpacity: 1,
            duration: 0.9,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        // 3) Fade the outline out so only the clean filled logo remains.
        .to(
          logoPaths,
          {
            strokeOpacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '<'
        )
        // 4) Spring up into the header slot as soon as the fill lands, so
        //    there is no dead pause between the logo completing and it
        //    moving. Split into two tweens so the translate overshoots
        //    (organic settle) while the scale eases cleanly — back.out on
        //    scale would briefly shrink past the final size which reads as
        //    a wobble.
        .to(
          logo,
          {
            y: 0,
            duration: 1.25,
            ease: 'back.out(0.6)',
          },
          '>'
        )
        .to(
          logo,
          {
            scale: 1,
            duration: 1.0,
            ease: 'power3.out',
          },
          '<'
        )
    }

    // 5) Finally, reveal the rest of the overlay elements with a little
    //    overshoot so they settle into place organically instead of easing
    //    out flat. `back.out(overshoot)` pushes past the target and rebounds.
    tl.current.from(
      '.overlay-stack',
      {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.12,
        ease: 'back.out(2)',
      },
      '-=0.3'
    )
  }, [])

  return (
    <>
      <div className="font-pp-neue-montreal fixed z-[10000] flex w-full justify-between bg-linear-to-b from-[#101010] to-transparent px-5 py-5 text-xs tracking-[0.3em] text-gray-500 uppercase">
        <Link
          ref={leftElementsRef}
          to="/"
          className="overlay-stack flex-1 text-nowrap transition-colors duration-300 hover:text-white"
          data-cursor-text="HOME"
          onMouseEnter={handleScrambleHover}
          onClick={closeMenuIfOpen}
        >
          <div data-scramble="Ramses Salas">Ramses Salas</div>
          <div data-scramble="Creative Technologist">Creative Technologist</div>
        </Link>
        <Link
          to="/"
          className="flex flex-1 justify-center"
          data-cursor-text="HOME"
          onClick={closeMenuIfOpen}
        >
          <Logo
            ref={logoRef}
            className="overlay-logo h-[2rem] w-[2rem] lg:h-[33px] lg:w-[33px]"
          />
        </Link>
        <div
          ref={rightElementsRef}
          className="overlay-stack flex-1 text-right text-nowrap"
        >
          <div className="flex items-center justify-end gap-2">
            <span>Available for Projects</span>
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
            onMouseEnter={handleScrambleHover}
            className="transition-colors duration-300 hover:text-white"
          >
            <span data-scramble="Schedule a Call →">
              Schedule a Call &#8594;
            </span>
          </a>
        </div>
      </div>
      <div
        ref={menuRef}
        className="overlay-menu fixed right-5 bottom-5 z-[10000]"
      >
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
