import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import { LoadingIndicator } from '../../components/LoadingIndicatior'
import { Suspense, useRef } from 'react'
import { PlaygroundGraph } from '../../components/PlayGroundGraph'
import { Image } from '../../components/Image'

export function Playground() {
  const el = useRef<HTMLDivElement>(null!)

  return (
    <>
      <div className="relative w-full justify-center">
        <div ref={el} className="h-screen w-full"></div>
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
