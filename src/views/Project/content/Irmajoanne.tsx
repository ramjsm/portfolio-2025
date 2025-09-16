import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'

export function Irmajoanne() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>Irmajoanne | Ramses Salas</title>
      </Helmet>
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
  )
}
