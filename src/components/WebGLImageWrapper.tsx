import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from '@14islands/r3f-scroll-rig'
import { Suspense, useRef } from 'react'
import { WebGLImage } from './WebGLImage'
import { LoadingIndicator } from './LoadingIndicatior'
import type { MediaAsset } from '../config/projects'

interface WebGLImageWrapperProps extends MediaAsset {
  loading?: 'eager' | 'lazy'
  noise?: number
  labelClass?: string
}

export function WebGLImageWrapper({
  src,
  thresholdWhite,
  thresholdGray,
  loading = 'eager',
}: WebGLImageWrapperProps) {
  const el = useRef<HTMLDivElement>(null!)
  const img = useRef<HTMLImageElement>(null)
  const { hasSmoothScrollbar } = useScrollRig()

  return (
    <>
      <div ref={el} className="Placeholder ScrollScene max-h-full">
        <img
          className={styles.hiddenWhenSmooth + ' object-cover'}
          ref={img}
          loading={loading}
          src={src}
          alt="This will be loaded as a texture"
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
    </>
  )
}
