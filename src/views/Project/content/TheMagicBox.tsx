import { Image } from '../../../components/Image'
import { Helmet } from 'react-helmet'

export function TheMagicBox() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Helmet>
        <title>The Magic Box - Futuristic Wisdom Edition | Ramses Salas</title>
      </Helmet>
      <Image
        src="/projects/the-magic-box/entrance.webp"
        thresholdWhite={0.3}
        thresholdGray={0.5}
      />
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <Image
            src="/projects/the-magic-box/instructions.webp"
            thresholdWhite={0.7}
            thresholdGray={0.4}
          />
          <Image
            src="/projects/the-magic-box/loading.webp"
            thresholdWhite={0.7}
            thresholdGray={0.4}
          />
        </div>
        <Image
          src="/projects/the-magic-box/background.webp"
          thresholdWhite={0.5}
          thresholdGray={0.4}
          className="flex-1"
        />
      </div>
      <Image
        src="/projects/the-magic-box/warped.webp"
        thresholdWhite={0.3}
        thresholdGray={0.3}
      />
    </div>
  )
}
