import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function Invocation() {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <div className="mx-auto flex w-[80%] flex-col gap-2">
        <div className="col-start-1 col-end-3 row-start-1 row-end-1">
          <WebGLImageWrapper
            src="/projects/invocation/invocation-front-wide.webp"
            thresholdWhite={0.1}
            thresholdGray={0.1}
          />
        </div>
        <div className="flex gap-2">
          <div className="col-start-1 col-end-2 row-start-2 row-end-2">
            <WebGLImageWrapper
              src="/projects/invocation/invocation-graphics-1.webp"
              thresholdWhite={0.3}
              thresholdGray={0.1}
            />
          </div>
          <div className="col-start-2 col-end-3 row-start-2 row-end-2">
            <WebGLImageWrapper
              src="/projects/invocation/invocation-graphics-2.webp"
              thresholdWhite={0.65}
              thresholdGray={0.6}
            />
          </div>
        </div>
        <div className="col-start-1 col-end-3 row-start-3 row-end-3">
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
