import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import { LoadingIndicator } from '../../components/LoadingIndicatior'
import { Suspense, useRef } from 'react'
import { PlaygroundGraph } from '../../components/PlayGroundGraph'
import { WebGLImageWrapper } from '../../components/WebGLImageWrapper'

export function Playground() {
  const el = useRef<HTMLDivElement>(null!)

  return (
    <>
      <div className="relative w-full justify-center mt-100">
        <div className="relative h-50">
          <div className="absolute top-20 left-0 font-syne text-right text-8xl text-transparent text-stroke-gray-100 text-stroke-1">
            PLAY
          </div>
          <div className="absolute top-10 -left-5 font-syne text-right text-8xl text-transparent text-stroke-gray-100 text-stroke-1">
            PLAY
          </div>
          <div className="absolute top-0 -left-10 font-syne text-8xl">PLAY</div>
          <div className="absolute top-20 left-100 font-syne text-right text-8xl">
            GROUND
          </div>
        </div>
        <div ref={el} className="w-full h-dvh"></div>
        <div className="border-texture absolute bottom-[50%] left-0 w-1/3 h-1/3">
          <WebGLImageWrapper
            src="cocreations/synthara/synthara1.jpg"
            thresholdWhite={0.2}
            thresholdGray={0.2}
          />
          <div className="font-teenage-dreams text-4xl">Synthara</div>
          <div className="">#webgl #three.js</div>
        </div>
      </div>
      <UseCanvas>
        <ScrollScene track={el} debug={false}>
          {(props) => (
            <Suspense fallback={<LoadingIndicator {...props} />}>
              <PlaygroundGraph />
            </Suspense>
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  )
}
