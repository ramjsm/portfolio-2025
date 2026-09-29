import type { ComponentType } from 'react'
import type { MDXProps } from 'mdx/types'
import { DEFAULT_LOCALE, type Locale } from '../i18n/locales'
import { parseFlexibleDate } from '../utils/date'

export interface SeoFrontmatter {
  title: string
  description: string
}

export interface ProjectInfoFrontmatter {
  header: string
  /** Strings may use `[label](url)` links and `*emphasis*`. */
  list: string[]
}

export interface ProjectFrontmatter {
  title: string
  info: ProjectInfoFrontmatter[]
  seo: SeoFrontmatter
}

export interface PageFrontmatter {
  seo: SeoFrontmatter
}

export type ArticleStatus = 'soon' | 'published'

export interface ArticleFrontmatter {
  title: string
  /** ISO 8601 date ("2026-11-15") or a year ("2026"). */
  date: string
  summary: string
  /** `soon` articles are listed but not linked until they are `published`. */
  status: ArticleStatus
  seo: SeoFrontmatter
}

export type PageName = 'home' | 'about' | 'archive' | 'events' | 'devblog'

interface MdxModule<Frontmatter> {
  default: ComponentType<MDXProps>
  frontmatter: Frontmatter
}

export interface MdxDocument<Frontmatter> {
  Content: ComponentType<MDXProps>
  frontmatter: Frontmatter
}

// Eager so lookups stay synchronous. Files live outside `src/`, in `content/`.
const projectModules = import.meta.glob<MdxModule<ProjectFrontmatter>>(
  '/content/projects/*/*.mdx',
  { eager: true }
)
const pageModules = import.meta.glob<MdxModule<PageFrontmatter>>(
  '/content/pages/*/*.mdx',
  { eager: true }
)
const articleModules = import.meta.glob<MdxModule<ArticleFrontmatter>>(
  '/content/articles/*/*.mdx',
  { eager: true }
)

function resolve<Frontmatter>(
  modules: Record<string, MdxModule<Frontmatter>>,
  directory: string,
  name: string,
  locale: Locale
): MdxDocument<Frontmatter> | undefined {
  const module =
    modules[`/content/${directory}/${name}/${locale}.mdx`] ??
    modules[`/content/${directory}/${name}/${DEFAULT_LOCALE}.mdx`]
  return module && { Content: module.default, frontmatter: module.frontmatter }
}

/**
 * The MDX document for a project, falling back to the default locale when the
 * requested translation is missing. `undefined` for a slug with no document.
 */
export function getProjectContent(
  slug: string,
  locale: Locale
): MdxDocument<ProjectFrontmatter> | undefined {
  return resolve(projectModules, 'projects', slug, locale)
}

export function getPageContent(
  page: PageName,
  locale: Locale
): MdxDocument<PageFrontmatter> | undefined {
  return resolve(pageModules, 'pages', page, locale)
}

export function getArticleContent(
  slug: string,
  locale: Locale
): MdxDocument<ArticleFrontmatter> | undefined {
  return resolve(articleModules, 'articles', slug, locale)
}

export interface ArticleEntry {
  slug: string
  frontmatter: ArticleFrontmatter
}

/**
 * Every article, newest first. Slugs come from the `content/articles/<slug>`
 * folders; a locale without a translation falls back to the default language.
 */
export function getArticles(locale: Locale): ArticleEntry[] {
  const slugs = new Set(
    Object.keys(articleModules).map((path) => path.split('/')[3])
  )
  return [...slugs]
    .flatMap((slug) => {
      const document = getArticleContent(slug, locale)
      return document ? [{ slug, frontmatter: document.frontmatter }] : []
    })
    .sort(
      (a, b) =>
        parseFlexibleDate(b.frontmatter.date) -
        parseFlexibleDate(a.frontmatter.date)
    )
}
