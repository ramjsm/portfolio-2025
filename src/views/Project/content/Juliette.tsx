import { Image } from '../../../components/Image'

export function Juliette() {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <Image
        src="/projects/juliette/juliette-ramses.webp"
        thresholdWhite={0.3}
        thresholdGray={0.3}
      />
      <div className="flex gap-2">
        <Image
          src="/projects/juliette/juelitte-top-side.webp"
          thresholdWhite={0.3}
          thresholdGray={0.3}
          className="flex-1"
        />
        <div className="flex flex-1 flex-col gap-2">
          <Image
            src="/projects/juliette/juelitte-bottom.webp"
            thresholdWhite={0.35}
            thresholdGray={0.35}
            className="flex-1"
          />
          <Image
            src="/projects/juliette/juelitte-bottom-hair.webp"
            thresholdWhite={0.3}
            thresholdGray={0.3}
            className="flex-1"
          />
        </div>
      </div>
      <Image
        src="/projects/juliette/juliette-iria.webp"
        thresholdWhite={0.3}
        thresholdGray={0.3}
      />
    </div>
  )
}
