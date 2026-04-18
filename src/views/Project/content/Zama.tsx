import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'

export function Zama() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>Zama | Ramses Salas</title>
      </Helmet>
      <Image
        src="/projects/zama/zama-values.jpg"
        thresholdWhite={0.25}
        thresholdGray={0.25}
      />
      <Image
        src="/projects/zama/zama-typography.jpg"
        thresholdWhite={0.25}
        thresholdGray={0.25}
      />
    </div>
  )
}
