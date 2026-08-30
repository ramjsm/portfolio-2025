import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'

export function SchoolOfBalance() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>The School of Balance | Ramses Salas</title>
      </Helmet>
      <Image
        src="/projects/school-of-balance/screenshot-1.webp"
        thresholdWhite={0.8}
        thresholdGray={0.4}
      />
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <Image
            src="/projects/school-of-balance/screenshot-5.webp"
            thresholdWhite={0.8}
            thresholdGray={0.4}
            className="flex-1"
          />
          <Image
            src="/projects/school-of-balance/screenshot-4.webp"
            thresholdWhite={0.8}
            thresholdGray={0.4}
            className="flex-1"
          />
        </div>
        <Image
          src="/projects/school-of-balance/screenshot-3.webp"
          thresholdWhite={0.8}
          thresholdGray={0.4}
          className="flex-1"
        />
      </div>
      <div className="flex gap-2">
        <Image
          src="/projects/school-of-balance/screenshot-2.webp"
          thresholdWhite={0.8}
          thresholdGray={0.4}
          className="flex-1"
        />
      </div>
    </div>
  )
}
