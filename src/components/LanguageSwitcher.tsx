import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { dismissLanguageBanner } from '../i18n/languageBanner'
import { LOCALES, localizePath, type Locale } from '../i18n/locales'
import { useLocale } from '../i18n/useLocale'

const CODES: Record<Locale, string> = { en: 'EN', es: 'ES' }

/**
 * Switches language by loading the same page in the other language. These are
 * plain links (a full page load), not router links: the router is mounted
 * for one language per document, and a fresh document also lets every page
 * animation initialise from scratch.
 */
export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale()
  const { t } = useTranslation()
  // Router paths exclude the language prefix, so it is added back per target.
  const { pathname, search, hash } = useLocation()
  const path = `${pathname}${search}${hash}`

  return (
    <nav
      aria-label={t('language.label')}
      className={`flex items-center gap-2 ${className}`}
    >
      {LOCALES.map((target, index) => (
        <Fragment key={target}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {target === locale ? (
            <span aria-current="true" lang={target} className="text-white">
              {CODES[target]}
            </span>
          ) : (
            <a
              href={localizePath(path, target)}
              hrefLang={target}
              lang={target}
              // Choosing a language explicitly means the banner has done its job.
              onClick={dismissLanguageBanner}
              className="transition-colors duration-300 hover:text-white"
            >
              {CODES[target]}
            </a>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
