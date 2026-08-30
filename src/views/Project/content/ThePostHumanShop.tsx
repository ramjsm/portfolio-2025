import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'
import { Video } from '../../../components/Video'

export function ThePostHumanShop() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>The Post Human Shop | Ramses Salas</title>
      </Helmet>
      <Image
        src="/projects/the-post-human-shop/screenshot-5.webp"
        thresholdWhite={0.3}
        thresholdGray={0.3}
      />
      <Video
        src="/projects/the-post-human-shop/the post human shop performance.webm"
        thresholdWhite={0.2}
        thresholdGray={0.2}
        videoURL="https://vimeo.com/1221763025"
      />
      <Image
        src="/projects/the-post-human-shop/screenshot-1.webp"
        thresholdWhite={0.5}
        thresholdGray={0.3}
        className="flex-1"
      />
      <div className="flex gap-2">
        <Image
          src="/projects/the-post-human-shop/screenshot-2.webp"
          thresholdWhite={0.15}
          thresholdGray={0.15}
          className="flex-1"
        />
        <Image
          src="/projects/the-post-human-shop/screenshot-3.webp"
          thresholdWhite={0.5}
          thresholdGray={0.3}
          className="flex-1"
        />
      </div>
      <Image
        src="/projects/the-post-human-shop/screenshot-0.webp"
        thresholdWhite={0.15}
        thresholdGray={0.15}
      />
    </div>
  )
}
