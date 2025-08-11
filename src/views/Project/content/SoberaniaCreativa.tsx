import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function SoberaniaCreativa() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col w-[80%] mx-auto gap-2">
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
            noise={2}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/soberania-creativa/styles.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
            noise={2}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/soberania-creativa/mockups.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
            noise={2}
          />
        </div>
        <div className="flex gap-2">
          <div>
            <WebGLImageWrapper
              src="/projects/soberania-creativa/player.webp"
              thresholdWhite={0.25}
              thresholdGray={0.25}
              noise={2}
            />
          </div>
          <div>
            <WebGLImageWrapper
              src="/projects/soberania-creativa/altares.webp"
              thresholdWhite={0.25}
              thresholdGray={0.25}
              noise={2}
            />
          </div>
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/soberania-creativa/blog.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
            noise={2}
          />
        </div>
      </div>
    </div>
  )
}
