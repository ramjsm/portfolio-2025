import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import { GameOfLife } from '../../components/GameOfLife'
import { useIsMobile } from '../../hooks/useIsMobile'

export function Landing() {
  const container = useRef<HTMLDivElement>(null)
  const gameOfLife = useRef<HTMLDivElement>(null!)
  const isMobile = useIsMobile()

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        SplitText.create('.landing-text', {
          type: 'words',
          wordsClass: 'word++',
          onSplit: (self) => {
            gsap.from(self.words, {
              x: 'random([-100, 100])',
              autoAlpha: 0,
              stagger: 0.15,
              delay: 1,
              scrollTrigger: {
                trigger: '.landing-text',
              },
            })
          },
        })
      })
    },
    { scope: container }
  )
  return (
    <div ref={container} className="flex min-h-screen w-full items-center">
      {/* Tracked by the WebGL scene below — the cells are drawn on the global
          canvas, this div only describes where they live on the page. */}
      <div
        ref={gameOfLife}
        aria-hidden
        /* className="border-texture relative aspect-video min-h-[50%] w-full cursor-pointer" */
        className="absolute inset-0"
      />
      {/* The global canvas is fixed and unlayered, so the copy needs its own
          stacking context to sit on top of the simulation. */}
      <h1 className="landing-text font-pp-neue-montreal pointer-events-none absolute bottom-0 left-10 z-10 mb-10 text-left text-xl text-gray-100 uppercase opacity-50 lg:text-xl">
        technology <br></br>
        as a medium for <br></br>
        creative expression
      </h1>
      <UseCanvas>
        <ScrollScene track={gameOfLife} hideOffscreen>
          {(props) => (
            <GameOfLife
              {...props}
              cellSize={isMobile ? 40 : 10}
              generationsPerSecond={isMobile ? 7 : 9}
              opacity={0.5}
              colorMap="salinity"
            />
          )}
        </ScrollScene>
      </UseCanvas>
    </div>
  )
}
