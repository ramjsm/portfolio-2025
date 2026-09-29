import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { getArticles, getPageContent } from '../../content/loader'
import { intlLocale } from '../../i18n/locales'
import { useLocale } from '../../i18n/useLocale'
import { useDocumentHead } from '../../i18n/useDocumentHead'
import { handleScrambleHover } from '../../utils/scrambleText'
import { formatFlexibleDate } from '../../utils/date'

type ScrollToTop = (y: number, options?: { immediate?: boolean }) => void

const ROW_CLASS =
  'devblog-row group flex flex-col gap-1 border-t border-white/10 py-4 lg:flex-row lg:items-baseline lg:gap-4'

export function Devblog() {
  const { t } = useTranslation()
  const locale = useLocale()
  useDocumentHead(getPageContent('devblog', locale)?.frontmatter.seo)
  const { scrollTo } = useScrollbar()
  const articles = getArticles(locale)

  useLayoutEffect(() => {
    ;(scrollTo as ScrollToTop)(0, { immediate: true })
  }, [scrollTo])

  useGSAP(() => {
    gsap.from('.devblog-row', {
      autoAlpha: 0,
      y: 10,
      stagger: 0.05,
      scrollTrigger: { trigger: '.devblog-list' },
    })
  })

  return (
    <div className="flex min-h-screen w-full flex-col gap-10">
      <div className="mt-20 flex flex-col gap-4">
        <p className="font-pp-neue-montreal text-xs text-gray-600">
          {'> ls -la ./devblog --sort=date'}
          <br />
          {t('devblog.total', { n: articles.length })}
        </p>
      </div>

      <div className="devblog-list mb-20 flex flex-col">
        {articles.map(({ slug, frontmatter }) => {
          const date = (
            <span className="font-pp-neue-montreal w-28 shrink-0 text-xs tracking-wide text-gray-600 uppercase transition-colors duration-300 group-hover:text-gray-300">
              {formatFlexibleDate(frontmatter.date, intlLocale(locale))}
            </span>
          )
          const body = (
            <span className="flex flex-1 flex-col gap-1">
              <span className="font-pp-neue-montreal text-base font-light text-white">
                <span data-scramble={frontmatter.title}>
                  {frontmatter.title}
                </span>
              </span>
              <span className="font-pp-neue-montreal max-w-2xl text-sm font-light text-gray-500">
                {frontmatter.summary}
              </span>
            </span>
          )

          if (frontmatter.status === 'soon') {
            return (
              <div key={slug} className={`${ROW_CLASS} cursor-default`}>
                {date}
                {body}
                <span className="font-pp-neue-montreal text-xs tracking-wide text-gray-600 uppercase">
                  {t('devblog.soon')}
                </span>
              </div>
            )
          }

          return (
            <Link
              key={slug}
              to={`/devblog/${slug}`}
              data-cursor-text="READ"
              onMouseEnter={handleScrambleHover}
              className={`${ROW_CLASS} transition-[padding] duration-300 hover:pl-2`}
            >
              {date}
              {body}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
