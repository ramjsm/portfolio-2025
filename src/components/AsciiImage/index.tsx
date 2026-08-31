import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from '@14islands/r3f-scroll-rig'
import { Suspense, useRef } from 'react'
import { WebGLAsciiImage } from './WebGLAsciiImage'
import { StaticAsciiCanvas } from './StaticAsciiCanvas'
import { LoadingIndicator } from '../LoadingIndicatior'

interface AsciiImageProps {
  src: string
  /** Pixel size (in image space) of each glyph cell. Lower = more detail. */
  cellSize?: number
  /** Gap between glyphs, as a fraction of the cell (0 = touching, up to ~0.49). */
  spacing?: number
  /** Brightness multiplier applied before computing luminance/glyph density. */
  exposure?: number
  /** Glyph color, used when `sampleColor` is false. */
  color?: string
  /** Tint each glyph with the source image's color at that cell instead of `color`. */
  sampleColor?: boolean
  mediaClass?: string
  loading?: 'eager' | 'lazy'
  className?: string
}

export function AsciiImage({
  src,
  cellSize = 12,
  spacing = 0,
  exposure = 1,
  color = 'white',
  sampleColor = false,
  mediaClass = '',
  loading = 'eager',
  className = '',
}: AsciiImageProps) {
  const el = useRef<HTMLDivElement>(null!)
  const img = useRef<HTMLImageElement>(null)
  const { hasSmoothScrollbar } = useScrollRig()

  return (
    <div className={className}>
      <div ref={el} className="relative h-full w-full">
        <img
          className={`${styles.hiddenWhenSmooth} ${mediaClass} h-full w-full object-cover`}
          ref={img}
          loading={loading}
          src={src}
          alt={src}
        />
        {!hasSmoothScrollbar && (
          <StaticAsciiCanvas
            imgRef={img}
            cellSize={cellSize}
            spacing={spacing}
            exposure={exposure}
            color={color}
            sampleColor={sampleColor}
          />
        )}
      </div>
      {hasSmoothScrollbar && (
        <UseCanvas>
          <ScrollScene track={el} debug={false}>
            {(props) => (
              <Suspense fallback={<LoadingIndicator {...props} />}>
                <WebGLAsciiImage
                  imgRef={img}
                  cellSize={cellSize}
                  spacing={spacing}
                  exposure={exposure}
                  color={color}
                  sampleColor={sampleColor}
                  {...props}
                />
              </Suspense>
            )}
          </ScrollScene>
        </UseCanvas>
      )}
    </div>
  )
}
