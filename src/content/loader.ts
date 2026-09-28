import type { ComponentType } from 'react'
import type { MDXProps } from 'mdx/types'
import { DEFAULT_LOCALE, type Locale } from '../i18n/locales'

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

export type PageName = 'home' | 'about'

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
 * requested translation is missing. `undefined` for projects that have not been
 * migrated to MDX yet.
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
