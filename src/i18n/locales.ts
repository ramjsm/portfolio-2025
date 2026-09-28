/**
 * Locale primitives. Everything here is pure (no browser globals) so it can
 * be used from the router, components, and unit-style scripts alike.
 *
 * URL scheme: the default locale (English) lives at the bare path
 * (`/about`); every other locale is mounted under its own prefix (`/es/about`).
 */

export type Locale = 'en' | 'es'

export const LOCALES: readonly Locale[] = ['en', 'es']
export const DEFAULT_LOCALE: Locale = 'en'

const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE)

/** Splits `/path?query#hash` into `['/path', '?query#hash']`. */
function splitSuffix(path: string): [string, string] {
  const index = path.search(/[?#]/)
  return index === -1 ? [path, ''] : [path.slice(0, index), path.slice(index)]
}

/** Returns the locale encoded in a pathname, or the default locale. */
export function localeFromPath(pathname: string): Locale {
  const [, first] = splitSuffix(pathname)[0].split('/')
  return (
    NON_DEFAULT_LOCALES.find((locale) => locale === first) ?? DEFAULT_LOCALE
  )
}

/** Removes a leading locale prefix: `/es/about` -> `/about`, `/es` -> `/`. */
export function stripLocale(path: string): string {
  const [pathname, suffix] = splitSuffix(path)
  const segments = pathname.split('/')
  const first = segments[1]
  const isPrefixed = NON_DEFAULT_LOCALES.some((locale) => locale === first)
  const stripped = isPrefixed ? `/${segments.slice(2).join('/')}` : pathname
  return `${stripped || '/'}${suffix}`
}

/**
 * Re-targets a path (query and hash preserved) to `locale`:
 * `localizePath('/about', 'es')` -> `/es/about`,
 * `localizePath('/es/about', 'en')` -> `/about`,
 * `localizePath('/', 'es')` -> `/es`.
 */
export function localizePath(path: string, locale: Locale): string {
  const [pathname, suffix] = splitSuffix(stripLocale(path))
  if (locale === DEFAULT_LOCALE) return `${pathname}${suffix}`
  const prefixed = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  return `${prefixed}${suffix}`
}

/**
 * Router basename for a locale: none for the default locale, `/es` for
 * Spanish. With a basename, every in-app link and `navigate()` call stays
 * inside the locale on its own, so links are written without any prefix.
 */
export function basenameFor(locale: Locale): string | undefined {
  return locale === DEFAULT_LOCALE ? undefined : `/${locale}`
}
