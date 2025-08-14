import { Image } from '../../../components/Image'

export function Synthara() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <div className="flex gap-2">
        <Image
          src="/projects/synthara/stairs.webp"
          thresholdWhite={0.3}
          thresholdGray={0.3}
          className="flex-1"
        />
        <Image
          src="/projects/synthara/kombucha.webp"
          thresholdWhite={0.5}
          thresholdGray={0.3}
          className="flex-1"
        />
      </div>
      <Image
        src="/projects/synthara/closeup-wide.webp"
        thresholdWhite={0.6}
        thresholdGray={0.4}
      />
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <Image
            src="/projects/synthara/cartography.webp"
            thresholdWhite={0.4}
            thresholdGray={0.4}
          />
          <Image
            src="/projects/synthara/model.webp"
            thresholdWhite={0.35}
            thresholdGray={0.35}
          />
        </div>
        <Image
          src="/projects/synthara/closeup-portrait.webp"
          thresholdWhite={0.7}
          thresholdGray={0.1}
          className="flex-1"
        />
      </div>
    </div>
  )
}
