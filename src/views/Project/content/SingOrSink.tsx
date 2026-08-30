import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'

export function SingOrSink() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>Sing or Sink | Ramses Salas</title>
      </Helmet>
      <Image
        src="/projects/sing-or-sink/screenshot-0.webp"
        thresholdWhite={0.3}
        thresholdGray={0.3}
      />
      <div className="flex gap-2">
        <Image
          src="/projects/sing-or-sink/screenshot-2.webp"
          thresholdWhite={0.5}
          thresholdGray={0.3}
          className="flex-1"
        />
        <Image
          src="/projects/sing-or-sink/screenshot-4.webp"
          thresholdWhite={0.3}
          thresholdGray={0.3}
          className="flex-1"
        />
      </div>
      <Image
        src="/projects/sing-or-sink/screenshot-5.webp"
        thresholdWhite={0.15}
        thresholdGray={0.15}
      />
    </div>
  )
}
