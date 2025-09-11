import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from '@14islands/r3f-scroll-rig'
import { Suspense, useRef } from 'react'
import { WebGLImage } from './WebGLImage'
import { LoadingIndicator } from '../LoadingIndicatior'
import { ImageDialog, type ImageDialogRef } from './ImageDialog'
import type { MediaAsset } from '../../config/projects'

interface ImageProps extends MediaAsset {
  loading?: 'eager' | 'lazy'
  className?: string
}

export function Image({
  src,
  thresholdWhite,
  thresholdGray,
  mediaClass,
  loading = 'eager',
  disableDialog = false,
  className = '',
}: ImageProps) {
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
    <div className={className}>
      <div
        ref={el}
        className={`h-full w-full ${!disableDialog ? 'cursor-hover cursor-pointer' : ''}`}
        onClick={handleClick}
        data-cursor-text="ZOOM IN"
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
    </div>
  )
}
