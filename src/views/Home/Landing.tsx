import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'
import ASCIIText from '../../components/ASCIIText'

export function Landing() {
  const container = useRef<HTMLDivElement>(null)

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
      <h1 className="font-ark-es text-stroke-gray-100 text-stroke-1 mt-30 mb-20 text-left text-[7.2vw]/[7.5vw] text-transparent uppercase lg:-ml-[4vw] lg:text-[4.5vw]/[4.5vw] landscape:text-[4.2vw]/[4.5vw]">
        technology <br></br>
        as a medium for <br></br>
        creative expression
      </h1>
      {/* <ASCIIText
        text="Technology as Medium </br> for Creative Expression"
        textFontSize={100}
        enableWaves={true}
        asciiFontSize={8}
      /> */}
    </div>
  )
}
