import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function Juliette() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[80%] mx-auto gap-2">
        <div className="row-start-1 row-end-1 col-start-1 col-end-3">
          <WebGLImageWrapper
            src="/projects/juliette/juliette-ramses.webp"
            thresholdWhite={0.3}
            thresholdGray={0.3}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <WebGLImageWrapper
              src="/projects/juliette/juelitte-top-side.webp"
              thresholdWhite={0.3}
              thresholdGray={0.3}
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex-1">
              <WebGLImageWrapper
                src="/projects/juliette/juelitte-bottom.webp"
                thresholdWhite={0.35}
                thresholdGray={0.35}
              />
            </div>
            <div className="flex-1">
              <WebGLImageWrapper
                src="/projects/juliette/juelitte-bottom-hair.webp"
                thresholdWhite={0.3}
                thresholdGray={0.3}
              />
            </div>
          </div>
        </div>
        <div className="row-start-3 row-end-3 col-start-1 col-end-3">
          <WebGLImageWrapper
            src="/projects/juliette/juliette-iria.webp"
            thresholdWhite={0.3}
            thresholdGray={0.3}
          />
        </div>
      </div>
    </div>
  )
}
