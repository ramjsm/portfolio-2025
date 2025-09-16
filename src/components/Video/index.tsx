import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from '@14islands/r3f-scroll-rig'
import { Suspense, useRef } from 'react'
import { LoadingIndicator } from '../LoadingIndicatior'
import { WebGLVideo } from './WebGLVideo'
import { VideoDialog, type VideoDialogRef } from './VideoDialog'
import type { MediaAsset } from '../../config/projects'

interface VideoProps extends MediaAsset {
  className?: string
}

export function Video({
  src,
  thresholdWhite,
  thresholdGray,
  mediaClass,
  disableDialog = false,
  videoURL,
  className,
  children,
}: VideoProps) {
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
    <div className={`relative ${className}`}>
      <div
        ref={el}
        className={`Placeholder ScrollScene aspect-video ${showVideo ? 'cursor-hover cursor-pointer' : ''}`}
        onClick={handleClick}
        data-cursor-text="WATCH"
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
        <div className="0 absolute bottom-0 left-0 w-full px-5 py-5">
          {children}
        </div>
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
          <span className="font-pp-neue-montreal absolute bottom-2 left-2 text-base lg:bottom-5 lg:left-5 lg:hidden">
            /watch
          </span>
        </>
      )}
    </div>
  )
}
