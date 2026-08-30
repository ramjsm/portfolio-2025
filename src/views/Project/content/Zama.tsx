import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'

export function Zama() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>Zama | Ramses Salas</title>
      </Helmet>
      <Image
        src="/projects/zama/screenshot-0.webp"
        thresholdWhite={0.25}
        thresholdGray={0.25}
      />
      <Image
        src="/projects/zama/screenshot-2.webp"
        thresholdWhite={0.25}
        thresholdGray={0.1}
      />
      <Image
        src="/projects/zama/screenshot-1.webp"
        thresholdWhite={0.25}
        thresholdGray={0.25}
      />
      <div className="flex gap-2">
        <Image
          src="/projects/zama/screenshot-4.webp"
          thresholdWhite={0.25}
          thresholdGray={0.1}
        />
        <Image
          src="/projects/zama/screenshot-3.webp"
          thresholdWhite={1}
          thresholdGray={0.2}
        />
        <Image
          src="/projects/zama/screenshot-6.webp"
          thresholdWhite={0.25}
          thresholdGray={0.25}
        />
      </div>
    </div>
  )
}
