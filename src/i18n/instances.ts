import { createInstance, type i18n } from 'i18next'
import en from './resources/en.json'
import es from './resources/es.json'
import { DEFAULT_LOCALE, LOCALES, type Locale } from './locales'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

function createLocaleInstance(locale: Locale): i18n {
  const instance = createInstance()
  // Resources are bundled, so initialization completes synchronously and
  // translations are available on the very first render.
  instance.init({
    lng: locale,
    fallbackLng: DEFAULT_LOCALE,
    resources,
    initAsync: false,
    interpolation: { escapeValue: false }, // React already escapes output
  })
  return instance
}

/**
 * One instance per locale, picked from the URL by `LocaleProvider`. Using a
 * separate instance for each locale means a language change never depends on
 * the async `changeLanguage` call.
 */
export const i18nByLocale = Object.fromEntries(
  LOCALES.map((locale) => [locale, createLocaleInstance(locale)])
) as Record<Locale, i18n>
