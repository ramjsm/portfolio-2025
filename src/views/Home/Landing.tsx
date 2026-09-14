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
        SplitText.create('.font-ark-es', {
          type: 'words',
          wordsClass: 'word++',
          onSplit: (self) => {
            gsap.from(self.words, {
              y: 'random([-100, 100])',
              autoAlpha: 0,
              stagger: 0.15,
              delay: 1,
              scrollTrigger: {
                trigger: '.font-ark-es',
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
        className="pointer-events-none absolute inset-0"
      />
      {/* The global canvas is fixed and unlayered, so the copy needs its own
          stacking context to sit on top of the simulation. */}
      <h1 className="font-ark-es text-stroke-gray-100 text-stroke-1 relative z-10 mt-30 mb-20 text-left text-[7.2vw]/[7.5vw] text-transparent uppercase lg:-ml-[4vw] lg:text-[4.5vw]/[4.5vw] landscape:text-[4.2vw]/[4.5vw]">
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
              colorMap="bone"
            />
          )}
        </ScrollScene>
      </UseCanvas>
    </div>
  )
}
