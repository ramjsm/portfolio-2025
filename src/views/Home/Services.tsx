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
    <div className="relative -mt-40 flex w-full items-center justify-center pb-50">
      <p className="text w-[80%] text-xl lg:text-2xl">
        I collaborate with artists and creative teams to shape digital
        experiences that combine creativity and technology. Using interactive
        and generative systems, I explore new ways of expressing ideas and
        crafting experiences. Together, we turn creative visions into digital
        realities.
      </p>
      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          ref={trackRef}
          className="led-text font-ark-es-dense text-stroke-gray-100 text-stroke-1 flex text-[8vw] whitespace-nowrap text-transparent uppercase opacity-70 will-change-transform lg:text-5xl landscape:text-[4.2vw]/[4.5vw]"
        >
          <span>
            Web - Motion - Interaction - Design - Web - Motion - Interaction -
            Design -
          </span>
          <span>
            Web - Motion - Interaction - Design - Web - Motion - Interaction -
            Design -
          </span>
        </div>
      </div>
    </div>
  )
}
