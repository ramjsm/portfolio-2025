import { useLayoutEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import type { MDXComponents } from 'mdx/types'
import { getArticleContent } from '../../content/loader'
import { mdxComponents } from '../../content/mdxComponents'
import { intlLocale } from '../../i18n/locales'
import { useLocale } from '../../i18n/useLocale'
import { useDocumentHead } from '../../i18n/useDocumentHead'
import { formatFlexibleDate } from '../../utils/date'

type Children = { children?: ReactNode }
type ScrollToTop = (y: number, options?: { immediate?: boolean }) => void

// Long-form prose styling, on top of the components every MDX file gets.
const articleComponents: MDXComponents = {
  ...mdxComponents,
  h2: ({ children }: Children) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold text-white">{children}</h2>
  ),
  h3: ({ children }: Children) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-white">{children}</h3>
  ),
  p: ({ children }: Children) => (
    <p className="mb-4 text-base leading-relaxed font-light">{children}</p>
  ),
  pre: ({ children }: Children) => (
    <pre className="mb-4 overflow-x-auto bg-white/5 p-4 text-sm">
      {children}
    </pre>
  ),
  code: ({ children }: Children) => (
    <code className="font-mono text-sm">{children}</code>
  ),
  ul: ({ children }: Children) => (
    <ul className="mb-5 ml-10 list-disc">{children}</ul>
  ),
  table: ({ children }: Children) => (
    <table className="mb-4 border-collapse overflow-x-auto border border-gray-700">
      <thead className="bg-gray-800">
        <tr>
          <th className="px-4 py-2 text-left text-white">Header 1</th>
          <th className="px-4 py-2 text-left text-white">Header 2</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  ),
}

export function Article() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const locale = useLocale()
  const { scrollTo } = useScrollbar()
  const mdx = slug ? getArticleContent(slug, locale) : undefined
  useDocumentHead(mdx?.frontmatter.seo)

  useLayoutEffect(() => {
    ;(scrollTo as ScrollToTop)(0, { immediate: true })
  }, [scrollTo])

  if (!mdx) return <Navigate to="/devblog" replace />

  const { Content, frontmatter } = mdx

  return (
    <article className="mb-20 flex min-h-screen w-full flex-col">
      <Link
        to="/devblog"
        data-cursor-text="BACK"
        className="font-pp-neue-montreal mt-20 mb-10 text-xs tracking-wide text-gray-600 uppercase transition-colors duration-300 hover:text-white"
      >
        {t('devblog.back')}
      </Link>
      <header className="mb-10 flex flex-col gap-3">
        <span className="font-pp-neue-montreal text-xs tracking-wide text-gray-600 uppercase">
          {formatFlexibleDate(frontmatter.date, intlLocale(locale))}
        </span>
        <h1 className="font-syne text-4xl text-white lg:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="text-xl text-gray-400 italic">{frontmatter.summary}</p>
      </header>
      <div className="">
        <Content components={articleComponents} />
      </div>
    </article>
  )
}
