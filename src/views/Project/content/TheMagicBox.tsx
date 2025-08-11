import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function TheMagicBox() {
  return (
    <div className="flex flex-col gap-20 my-20">
      <div className="flex flex-col gap-2 w-[80%] mx-auto">
        <div>
          <WebGLImageWrapper
            src="/projects/the-magic-box/entrance.webp"
            thresholdWhite={0.3}
            thresholdGray={0.5}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 flex-1">
            <div>
              <WebGLImageWrapper
                src="/projects/the-magic-box/instructions.webp"
                thresholdWhite={0.7}
                thresholdGray={0.4}
              />
            </div>
            <div>
              <WebGLImageWrapper
                src="/projects/the-magic-box/loading.webp"
                thresholdWhite={0.7}
                thresholdGray={0.4}
              />
            </div>
          </div>
          <div className="flex-1">
            <WebGLImageWrapper
              src="/projects/the-magic-box/background.webp"
              thresholdWhite={0.5}
              thresholdGray={0.4}
            />
          </div>
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/the-magic-box/warped.webp"
            thresholdWhite={0.3}
            thresholdGray={0.3}
          />
        </div>
      </div>
    </div>
  )
}
