import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'
import { Video } from '../../../components/Video'

export function RadicalTenderness() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>Radical Tenderness: Transmutation | Ramses Salas</title>
      </Helmet>
      <Video
        src="/projects/radical-tenderness/website.webm"
        thresholdWhite={0.2}
        thresholdGray={0.2}
        videoURL="https://vimeo.com/1014313543"
      />
      <Image
        src="/projects/radical-tenderness/screenshot-1.webp"
        thresholdWhite={0.15}
        thresholdGray={0.15}
      />
      <div className="flex gap-2">
        <Image
          src="/projects/radical-tenderness/screenshot-3.webp"
          thresholdWhite={0.25}
          thresholdGray={0.1}
        />
        <Image
          src="/projects/radical-tenderness/screenshot-4.webp"
          thresholdWhite={1}
          thresholdGray={0.2}
        />
        <Image
          src="/projects/radical-tenderness/screenshot-5.webp"
          thresholdWhite={0.25}
          thresholdGray={0.25}
        />
      </div>
      <div className="flex gap-2">
        <Image
          src="/projects/radical-tenderness/screenshot-2.webp"
          thresholdWhite={0.15}
          thresholdGray={0.15}
          className="flex-1"
        />
      </div>
    </div>
  )
}
