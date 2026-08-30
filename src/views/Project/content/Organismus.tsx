import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'

export function Organismus() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>Organismus | Ramses Salas</title>
      </Helmet>
      <Image
        src="/projects/organismus/screenshot-6.webp"
        thresholdWhite={0.3}
        thresholdGray={0.3}
        className="flex-1"
      />
      <div className="flex gap-2">
        <Image
          src="/projects/organismus/screenshot-9.webp"
          thresholdWhite={0.25}
          thresholdGray={0.25}
          className="flex-1"
        />
        <Image
          src="/projects/organismus/screenshot-16.webp"
          thresholdWhite={0.3}
          thresholdGray={0.3}
          className="flex-1"
        />
      </div>
      <Image
        src="/projects/organismus/screenshot-15.webp"
        thresholdWhite={0.3}
        thresholdGray={0.3}
      />
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <Image
            src="/projects/organismus/screenshot-13.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
          <Image
            src="/projects/organismus/screenshot-12.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
        </div>
        <Image
          src="/projects/organismus/screenshot-10.webp"
          thresholdWhite={0.2}
          thresholdGray={0.2}
          className="flex-1"
        />
      </div>
    </div>
  )
}
