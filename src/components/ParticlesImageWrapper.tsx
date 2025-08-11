import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from '@14islands/r3f-scroll-rig'
import { Suspense, useRef } from 'react'
import { ParticlesImage } from './ParticlesImage'
import { LoadingIndicator } from './LoadingIndicatior'

export function ParticlesImageWrapper({ src, loading = 'eager' }) {
  const el = useRef(null)
  const img = useRef(null)
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
                <ParticlesImage imgRef={img} {...props} />
              </Suspense>
            )}
          </ScrollScene>
        </UseCanvas>
      )}
    </>
  )
}
