import { Image } from '../../../components/Image'
import { Video } from '../../../components/Video'
import { Helmet } from 'react-helmet'

export function AsBelowSoAbove() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>As Below So Above | Ramses Salas</title>
      </Helmet>
      <Video
        src="/projects/as-below-so-above/as-below-so-above-live-cam.webm"
        thresholdWhite={0.13}
        thresholdGray={0.13}
        videoURL="https://vimeo.com/1014313543"
      />
      <div className="flex gap-2">
        <Image
          src="/projects/as-below-so-above/video-mapping.webp"
          thresholdWhite={0.6}
          thresholdGray={0.4}
          className="flex-1"
        />
        <Image
          src="/projects/as-below-so-above/sculpture-top.webp"
          thresholdWhite={0.3}
          thresholdGray={0.3}
          className="flex-1"
        />
      </div>
      <Image
        src="/projects/as-below-so-above/wall-people.webp"
        thresholdWhite={0.5}
        thresholdGray={0.4}
      />
      <div className="flex gap-2">
        <Image
          src="/projects/as-below-so-above/sculpture.webp"
          thresholdWhite={0.5}
          thresholdGray={0.5}
          className="flex-1"
        />
        <Image
          src="/projects/as-below-so-above/paintings.webp"
          thresholdWhite={0.35}
          thresholdGray={0.35}
          className="flex-1"
        />
      </div>
      <Image
        src="/projects/as-below-so-above/after-performance.webp"
        thresholdWhite={0.5}
        thresholdGray={0.4}
      />
    </div>
  )
}
