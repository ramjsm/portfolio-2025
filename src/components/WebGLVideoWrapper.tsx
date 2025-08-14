import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from '@14islands/r3f-scroll-rig'
import { Suspense, useRef } from 'react'
import { LoadingIndicator } from './LoadingIndicatior'
import { WebGLVideo } from './WebGLVideo'
import { VideoDialog, type VideoDialogRef } from './VideoDialog'
import type { MediaAsset } from '../config/projects'

interface WebGLVideoWrapperProps extends MediaAsset {}

export function WebGLVideoWrapper({
  src,
  thresholdWhite,
  thresholdGray,
  mediaClass,
  disableDialog = false,
  videoURL,
}: WebGLVideoWrapperProps) {
  const el = useRef<HTMLDivElement>(null!)
  const videoRef = useRef<HTMLVideoElement>(null)
  const dialogRef = useRef<VideoDialogRef>(null)
  const { hasSmoothScrollbar } = useScrollRig()
  const showVideo = !disableDialog && videoURL

  const handleClick = () => {
    if (showVideo) {
      dialogRef.current?.open()
    }
  }

  return (
    <>
      <div
        ref={el}
        className={`Placeholder ScrollScene relative aspect-video ${showVideo ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
      >
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
      {showVideo && (
        <>
          <VideoDialog ref={dialogRef} src={videoURL} />
          <span className="text-l font-pp-neue-montreal absolute bottom-2 left-2 lg:bottom-5 lg:left-5">
            /WATCH
          </span>
        </>
      )}
    </>
  )
}
