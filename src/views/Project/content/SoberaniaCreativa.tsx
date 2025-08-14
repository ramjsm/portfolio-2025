import { Image } from '../../../components/Image'

export function SoberaniaCreativa() {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <div className="mx-auto flex flex-col gap-2">
        <Image
          src="/projects/soberania-creativa/sitemap.webp"
          thresholdWhite={0.25}
          thresholdGray={0.25}
        />
        <Image
          src="/projects/soberania-creativa/wireframes.webp"
          thresholdWhite={0.25}
          thresholdGray={0.25}
        />
        <Image
          src="/projects/soberania-creativa/styles.webp"
          thresholdWhite={0.25}
          thresholdGray={0.25}
        />
        <Image
          src="/projects/soberania-creativa/mockups.webp"
          thresholdWhite={0.25}
          thresholdGray={0.25}
        />
        <div className="flex gap-2">
          <Image
            src="/projects/soberania-creativa/player.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
          <Image
            src="/projects/soberania-creativa/altares.webp"
            thresholdWhite={0.25}
            thresholdGray={0.25}
          />
        </div>
        <Image
          src="/projects/soberania-creativa/blog.webp"
          thresholdWhite={0.25}
          thresholdGray={0.25}
        />
      </div>
    </div>
  )
}
