import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18nByLocale } from './instances'
import { INITIAL_LOCALE } from './initialLocale'
import { LocaleContext } from './useLocale'

/**
 * Provides the document's locale to the app and to i18next, and keeps
 * `<html lang>` in sync. The locale is fixed at load (see `initialLocale`).
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = INITIAL_LOCALE

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={locale}>
      <I18nextProvider i18n={i18nByLocale[locale]}>{children}</I18nextProvider>
    </LocaleContext.Provider>
  )
}
