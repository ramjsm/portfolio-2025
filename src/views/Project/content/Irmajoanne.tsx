import { WebGLImageWrapper } from '../../../components/WebGLImageWrapper'

export function Irmajoanne() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col gap-2 h-[120hdv] w-[80%] mx-auto">
        <div>
          <WebGLImageWrapper
            src="/projects/irmajoanne/design_system.png"
            thresholdWhite={0.25}
            thresholdGray={0.25}
            noise={2}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/irmajoanne/landing.webp"
            thresholdWhite={0.9}
            thresholdGray={0.6}
            noise={2}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/irmajoanne/projects.webp"
            thresholdWhite={0.3}
            thresholdGray={0.3}
            noise={2}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/irmajoanne/project.webp"
            thresholdWhite={0.17}
            thresholdGray={0.17}
            noise={2}
          />
        </div>
        <div>
          <WebGLImageWrapper
            src="/projects/irmajoanne/gallery.webp"
            thresholdWhite={0.17}
            thresholdGray={0.17}
            noise={2}
          />
        </div>
      </div>
    </div>
  )
}
