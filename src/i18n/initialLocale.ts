import { DEFAULT_LOCALE, localeFromPath, type Locale } from './locales'

/**
 * The language of this document, read once from the URL when the page loads.
 *
 * It is a constant on purpose: the router is mounted with the matching
 * basename (see `main.tsx`), so links inside the app never change language.
 * Changing language is a full page navigation to the other locale's URL, which
 * loads a new document and recomputes this value.
 */
export const INITIAL_LOCALE: Locale =
  typeof window === 'undefined'
    ? DEFAULT_LOCALE
    : localeFromPath(window.location.pathname)
