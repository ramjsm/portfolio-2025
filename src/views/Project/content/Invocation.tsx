import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'

export function Invocation() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>Invocation | Ramses Salas</title>
      </Helmet>
      <Image
        src="/projects/invocation/invocation-front-wide.webp"
        thresholdWhite={0.1}
        thresholdGray={0.1}
        className="col-start-1 col-end-3 row-start-1 row-end-1"
      />
      <div className="flex gap-2">
        <Image
          src="/projects/invocation/invocation-graphics-1.webp"
          thresholdWhite={0.3}
          thresholdGray={0.1}
          className="col-start-1 col-end-2 row-start-2 row-end-2"
        />
        <Image
          src="/projects/invocation/invocation-graphics-2.webp"
          thresholdWhite={0.65}
          thresholdGray={0.6}
          className="col-start-2 col-end-3 row-start-2 row-end-2"
        />
      </div>
      <Image
        src="/projects/invocation/invocation-front-side-wide.webp"
        thresholdWhite={0.65}
        thresholdGray={0.6}
        className="col-start-1 col-end-3 row-start-3 row-end-3"
      />
    </div>
  )
}
