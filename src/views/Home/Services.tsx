import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    document.fonts.ready.then(() => {
      SplitText.create('.text', {
        type: 'words',
        smartWrap: true,
        onSplit: (self) => {
          gsap.from(self.words, {
            // y: "random([-100, 100])",
            autoAlpha: 0,
            duration: 1,
            delay: () => gsap.utils.random(0, 1),
            ease: 'bounce.out',
            // stagger: 0.1,
            scrollTrigger: {
              trigger: '.text',
            },
          })
        },
      })

      SplitText.create('.led-text', {
        type: 'chars',
        smartWrap: true,
        onSplit: (self) => {
          gsap.from(self.chars, {
            stagger: 0.1,
            autoAlpha: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: '.text',
            },
          })
        },
      })

      const track = trackRef.current
      if (track) {
        const scrollWidth = track.scrollWidth / 2 // half because content is duplicated

        gsap.to(track, {
        x: `-=${scrollWidth}`,
        duration: 25,
        ease: 'none',
        repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % scrollWidth),
          },
        })
      }
    })
  })
  return (
    <div className="relative flex w-full min-h-dvh items-center justify-center">
      <p className="text absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-left w-[80%]">
        I collaborate with artists and creatives teams to turn ideas into
        digital experiences. Through code, motion and interaction, I explore
        technology as a tool for expression, experimentation and connection.
      </p>
      <div
        className="absolute left-1/2 top-2/3 -translate-x-1/2 w-screen overflow-hidden
                      [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                      [--webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          ref={trackRef}
          className="led-text flex whitespace-nowrap will-change-transform"
        >
          <span className="font-ark-es-dense text-transparent text-stroke-gray-100 text-stroke-1 text-6xl uppercase opacity-70">
            Web - Motion - Interaction - Design - Web - Motion - Interaction -
            Design -
          </span>
          <span className="font-ark-es-dense text-transparent text-stroke-gray-100 text-stroke-1 text-6xl uppercase opacity-70">
            Web - Motion - Interaction - Design - Web - Motion - Interaction -
            Design -
          </span>
        </div>
      </div>
    </div>
  )
}
