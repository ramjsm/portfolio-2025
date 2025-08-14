import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from '@14islands/r3f-scroll-rig'
import { Suspense, useRef } from 'react'
import { WebGLImage } from './WebGLImage'
import { LoadingIndicator } from './LoadingIndicatior'
import { ImageDialog, type ImageDialogRef } from './ImageDialog'
import type { MediaAsset } from '../config/projects'

interface WebGLImageWrapperProps extends MediaAsset {
  loading?: 'eager' | 'lazy'
}

export function WebGLImageWrapper({
  src,
  thresholdWhite,
  thresholdGray,
  mediaClass,
  loading = 'eager',
  disableDialog = false,
}: WebGLImageWrapperProps) {
  const el = useRef<HTMLDivElement>(null!)
  const img = useRef<HTMLImageElement>(null)
  const dialogRef = useRef<ImageDialogRef>(null)
  const { hasSmoothScrollbar } = useScrollRig()

  const handleClick = () => {
    if (!disableDialog) {
      dialogRef.current?.open()
    }
  }

  return (
    <>
      <div 
        ref={el} 
        className={`h-full w-full ${!disableDialog ? 'cursor-zoom-in' : ''}`}
        onClick={handleClick}
      >
        <img
          className={`${styles.hiddenWhenSmooth} ${mediaClass} h-full w-full object-cover`}
          ref={img}
          loading={loading}
          src={src}
          alt={src}
        />
      </div>
      {hasSmoothScrollbar && (
        <UseCanvas>
          <ScrollScene track={el} debug={false}>
            {(props) => (
              <Suspense fallback={<LoadingIndicator {...props} />}>
                <WebGLImage
                  imgRef={img}
                  thresholdWhite={thresholdWhite}
                  thresholdGray={thresholdGray}
                  {...props}
                />
              </Suspense>
            )}
          </ScrollScene>
        </UseCanvas>
      )}
      {!disableDialog && <ImageDialog ref={dialogRef} src={src} alt={src} />}
    </>
  )
}
