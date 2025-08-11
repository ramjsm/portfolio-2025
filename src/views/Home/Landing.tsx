import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

export function Landing() {
  const container = useRef()

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
    <div ref={container} className="flex w-full min-h-dvh items-end">
      <h1 className="text-left font-ark-es uppercase text-7xl text-transparent text-stroke-gray-100 text-stroke-1 mb-20">
        technology <br></br>
        as a medium for <br></br>
        creative expression
      </h1>
    </div>
  )
}
