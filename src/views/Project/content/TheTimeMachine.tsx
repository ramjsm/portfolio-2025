import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'
import { Video } from '../../../components/Video'

export function TheTimeMachine() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>The Time Machine | Ramses Salas</title>
      </Helmet>
      <Video
        src="/projects/the-time-machine/AIDApress.webm"
        thresholdWhite={0.2}
        thresholdGray={0.2}
        videoURL="https://www.youtube.com/watch?v=Dar4oxy87e4"
      />
      <Image
        src="/projects/the-time-machine/screenshot-12.webp"
        thresholdWhite={0.4}
        thresholdGray={0.4}
        className="flex-1"
      />

      <div className="flex gap-2">
        <Image
          src="/projects/the-time-machine/screenshot-11.webp"
          thresholdWhite={0.5}
          thresholdGray={0.3}
          className="flex-1"
        />

        <Image
          src="/projects/the-time-machine/screenshot-10.webp"
          thresholdWhite={0.5}
          thresholdGray={0.3}
          className="flex-1"
        />
      </div>
      <Image
        src="/projects/the-time-machine/screenshot-4.webp"
        thresholdWhite={0.5}
        thresholdGray={0.3}
        className="flex-1"
      />
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <Image
            src="/projects/the-time-machine/screenshot-16.webp"
            thresholdWhite={0.3}
            thresholdGray={0.3}
          />
          <Image
            src="/projects/the-time-machine/screenshot-17.webp"
            thresholdWhite={0.3}
            thresholdGray={0.3}
          />
        </div>
        <Image
          src="/projects/the-time-machine/screenshot-18.webp"
          thresholdWhite={0.3}
          thresholdGray={0.3}
          className="flex-1"
        />
      </div>
    </div>
  )
}
