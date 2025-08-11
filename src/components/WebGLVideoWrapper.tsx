import { ScrollScene, UseCanvas, useScrollRig, styles} from "@14islands/r3f-scroll-rig"
import { Suspense, useRef } from "react"
import { LoadingIndicator } from "./LoadingIndicatior"
import { WebGLVideo } from "./WebGLVideo"

export function WebGLVideoWrapper({ src, thresholdWhite, thresholdGray, noise, loading = 'eager' }) {
  const el = useRef()
  const videoRef = useRef()
  const { hasSmoothScrollbar } = useScrollRig()

  return (
    <>
      <div ref={el} className="Placeholder ScrollScene aspect-video">
        <video
          ref={videoRef}
          className={styles.hiddenWhenSmooth}
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
                <WebGLVideo videoRef={videoRef} src={src} thresholdWhite={thresholdWhite} thresholdGray={thresholdGray} noise={noise} {...props} />
              </Suspense>
            )}
          </ScrollScene>
        </UseCanvas>
      )}
    </>
  )
}