import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function SoberaniaCreativa() {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <div className="mx-auto flex w-[80%] flex-col gap-2">
        <div>
          <WebGLImageWrapper
            src="/projects/soberania-creativa/sitemap.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/soberania-creativa/wireframes.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/soberania-creativa/styles.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/soberania-creativa/mockups.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
        </div>
        <div className="flex gap-2">
          <div>
            <WebGLImageWrapper
              src="/projects/soberania-creativa/player.webp"
              thresholdWhite={0.25}
              thresholdGray={0.25}
            />
          </div>
          <div>
            <WebGLImageWrapper
              src="/projects/soberania-creativa/altares.webp"
              thresholdWhite={0.25}
              thresholdGray={0.25}
            />
          </div>
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/soberania-creativa/blog.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
        </div>
      </div>
    </div>
  )
}
