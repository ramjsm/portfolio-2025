import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_LOCALE, LOCALES, localizePath } from './locales'
import { useLocale } from './useLocale'

export const SITE_URL = 'https://ramsessalas.com'

export interface DocumentHead {
  title: string
  description?: string
}

/**
 * Canonical path for a pathname: no trailing slash, except the root and the
 * bare locale roots (`/`, `/es/`), which match the prerendered files.
 */
export function canonicalPath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '') || '/'
  const isLocaleRoot = LOCALES.some(
    (locale) => locale !== DEFAULT_LOCALE && trimmed === `/${locale}`
  )
  return isLocaleRoot ? `${trimmed}/` : trimmed
}

function upsert(
  selector: string,
  tag: 'meta' | 'link',
  attributes: Record<string, string>,
  valueAttribute: string,
  value: string
) {
  let element = document.head.querySelector<HTMLElement>(selector)
  if (!element) {
    element = document.createElement(tag)
    for (const [name, attribute] of Object.entries(attributes)) {
      element.setAttribute(name, attribute)
    }
    document.head.appendChild(element)
  }
  element.setAttribute(valueAttribute, value)
}

/**
 * Keeps `<title>`, the description and the canonical URL in sync with the
 * current route. The prerender script writes the same values into the static
 * HTML for crawlers; this hook keeps them right after client-side navigation.
 * `<html lang>` is handled by `LocaleProvider`.
 */
export function useDocumentHead(head: DocumentHead | undefined) {
  // Under the router basename this pathname has no locale prefix (`/about`
  // for both `/about` and `/es/about`), so it is re-added for the canonical.
  const { pathname } = useLocation()
  const locale = useLocale()
  const title = head?.title
  const description = head?.description

  useEffect(() => {
    if (title) document.title = title
    if (description) {
      upsert(
        'meta[name="description"]',
        'meta',
        { name: 'description' },
        'content',
        description
      )
    }
    if (title) {
      upsert(
        'link[rel="canonical"]',
        'link',
        { rel: 'canonical' },
        'href',
        `${SITE_URL}${canonicalPath(localizePath(pathname, locale))}`
      )
    }
  }, [title, description, pathname, locale])
}
