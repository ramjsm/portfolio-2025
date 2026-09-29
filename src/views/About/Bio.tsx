import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getPageContent } from '../../content/loader'
import { MdxSection } from '../../content/MdxSection'
import { useLocale } from '../../i18n/useLocale'
import { handleScrambleHover } from '../../utils/scrambleText'

interface BioBlock {
  /** Names the rail label (`about.bio.<key>`) and the MDX section. */
  key: 'exploration' | 'background'
  /** Optional CTA rendered below the paragraphs. */
  cta?: { to: string }
}

const blocks: BioBlock[] = [
  { key: 'exploration' },
  { key: 'background', cta: { to: '/archive' } },
]

export function Bio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const locale = useLocale()
  const { t } = useTranslation()
  const about = getPageContent('about', locale)

  useGSAP(
    () => {
      gsap.from('.bio-block', {
        y: '10%',
        autoAlpha: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#bio',
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      id="bio"
      className="flex w-full flex-col gap-14 lg:gap-20"
    >
      {blocks.map((block) => (
        <div
          key={block.key}
          className="bio-block flex flex-col gap-5 lg:flex-row lg:gap-10"
        >
          <h2 className="font-pp-neue-montreal shrink-0 text-xl lowercase lg:w-1/7 lg:text-base">
            <span className="border-texture inline-block px-3 py-1">
              {`/${t(`about.bio.${block.key}`)}`}
            </span>
          </h2>
          <div className="flex flex-1 flex-col gap-4 text-xl lg:max-w-[55ch] lg:gap-3 lg:text-base">
            {about && (
              <MdxSection Content={about.Content} section={block.key} />
            )}
            {block.cta && (
              <Link
                to={block.cta.to}
                data-cursor-text="ARCHIVE"
                onMouseEnter={handleScrambleHover}
                className="font-pp-neue-montreal text-xs tracking-wide text-gray-500 uppercase transition-colors duration-300 hover:text-white"
              >
                <span data-scramble={t('about.bio.viewProjects')}>
                  {t('about.bio.viewProjects')}
                </span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
