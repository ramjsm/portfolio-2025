import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from '@14islands/r3f-scroll-rig'
import { Suspense, useRef } from 'react'
import { LoadingIndicator } from './LoadingIndicatior'
import { WebGLVideo } from './WebGLVideo'
import type { MediaAsset } from '../config/projects'

interface WebGLVideoWrapperProps extends MediaAsset {}

export function WebGLVideoWrapper({
  src,
  thresholdWhite,
  thresholdGray,
  mediaClass,
}: WebGLVideoWrapperProps) {
  const el = useRef<HTMLDivElement>(null!)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { hasSmoothScrollbar } = useScrollRig()

  return (
    <>
      <div ref={el} className="Placeholder ScrollScene aspect-video">
        <video
          ref={videoRef}
          className={`${styles.hiddenWhenSmooth} ${mediaClass}`}
          src={src}
          loop
          muted
          autoPlay
          playsInline
          style={{
            width: '100vw',
            top: 0,
            left: 0,
          }}
        />
      </div>
      {hasSmoothScrollbar && (
        <UseCanvas>
          <ScrollScene track={el} debug={false}>
            {(props) => (
              <Suspense fallback={<LoadingIndicator {...props} />}>
                <WebGLVideo
                  videoRef={videoRef}
                  src={src}
                  thresholdWhite={thresholdWhite}
                  thresholdGray={thresholdGray}
                  {...props}
                />
              </Suspense>
            )}
          </ScrollScene>
        </UseCanvas>
      )}
    </>
  )
}
