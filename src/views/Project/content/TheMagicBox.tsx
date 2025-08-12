import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function TheMagicBox() {
  return (
    <div className="my-20 flex flex-col gap-20">
      <div className="mx-auto flex flex-col gap-2">
        <div>
          <WebGLImageWrapper
            src="/projects/the-magic-box/entrance.webp"
            thresholdWhite={0.3}
            thresholdGray={0.5}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-2">
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
