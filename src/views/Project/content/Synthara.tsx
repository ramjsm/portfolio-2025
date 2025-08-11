import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function Synthara() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col gap-2 w-[80%] mx-auto">
        <div className="flex gap-2">
          <div className="flex-1">
            <WebGLImageWrapper
              src="/projects/synthara/stairs.webp"
              thresholdWhite={0.3}
              thresholdGray={0.3}
            />
          </div>
          <div className="flex-1">
            <WebGLImageWrapper
              src="/projects/synthara/kombucha.webp"
              thresholdWhite={0.5}
              thresholdGray={0.3}
            />
          </div>
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/synthara/closeup-wide.webp"
            thresholdWhite={0.6}
            thresholdGray={0.4}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col flex-1 gap-2">
            <div>
              <WebGLImageWrapper
                src="/projects/synthara/cartography.webp"
                thresholdWhite={0.4}
                thresholdGray={0.4}
              />
            </div>
            <div>
              <WebGLImageWrapper
                src="/projects/synthara/model.webp"
                thresholdWhite={0.35}
                thresholdGray={0.35}
              />
            </div>
          </div>
          <div className="flex-1">
            <WebGLImageWrapper
              src="/projects/synthara/closeup-portrait.webp"
              thresholdWhite={0.7}
              thresholdGray={0.1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
