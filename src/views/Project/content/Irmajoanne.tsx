import { Image } from '../../../components/Image'

export function Irmajoanne() {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <div className="mx-auto flex flex-col gap-2">
        <Image
          src="/projects/irmajoanne/design_system.png"
          thresholdWhite={0.25}
          thresholdGray={0.25}
        />
        <Image
          src="/projects/irmajoanne/landing.webp"
          thresholdWhite={0.9}
          thresholdGray={0.6}
        />
        <Image
          src="/projects/irmajoanne/projects.webp"
          thresholdWhite={0.3}
          thresholdGray={0.3}
        />
        <Image
          src="/projects/irmajoanne/project.webp"
          thresholdWhite={0.17}
          thresholdGray={0.17}
        />
        <Image
          src="/projects/irmajoanne/gallery.webp"
          thresholdWhite={0.17}
          thresholdGray={0.17}
        />
      </div>
    </div>
  )
}
