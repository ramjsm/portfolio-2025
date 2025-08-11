import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function Invocation() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col w-[80%] mx-auto gap-2">
        <div className="row-start-1 row-end-1 col-start-1 col-end-3">
          <WebGLImageWrapper
            src="/projects/invocation/invocation-front-wide.webp"
            thresholdWhite={0.1}
            thresholdGray={0.1}
            noise={2}
          />
        </div>
        <div className="flex gap-2">
          <div className="row-start-2 row-end-2 col-start-1 col-end-2">
            <WebGLImageWrapper
              src="/projects/invocation/invocation-graphics-1.webp"
              thresholdWhite={0.3}
              thresholdGray={0.1}
            />
          </div>
          <div className="row-start-2 row-end-2 col-start-2 col-end-3">
            <WebGLImageWrapper
              src="/projects/invocation/invocation-graphics-2.webp"
              thresholdWhite={0.65}
              thresholdGray={0.6}
            />
          </div>
        </div>
        <div className="row-start-3 row-end-3 col-start-1 col-end-3">
          <WebGLImageWrapper
            src="/projects/invocation/invocation-front-side-wide.webp"
            thresholdWhite={0.65}
            thresholdGray={0.6}
          />
        </div>
      </div>
    </div>
  )
}
