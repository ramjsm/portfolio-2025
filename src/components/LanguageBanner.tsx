import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useIntro } from '../contexts/IntroContext'
import { i18nByLocale } from '../i18n/instances'
import {
  dismissLanguageBanner,
  isLanguageBannerDismissed,
} from '../i18n/languageBanner'
import {
  DEFAULT_LOCALE,
  localizePath,
  preferredLocale,
  type Locale,
} from '../i18n/locales'
import { useLocale } from '../i18n/useLocale'

/**
 * Offers the Spanish version to visitors whose browser prefers it, on the
 * default-language pages only. It never navigates by itself: the visitor
 * always lands on the URL they asked for, and the banner is not part of the
 * prerendered HTML, so it has no effect on crawlers.
 */
export function LanguageBanner() {
  const locale = useLocale()
  const { pathname, search, hash } = useLocation()
  const { isIntroComplete } = useIntro()
  const [target, setTarget] = useState<Locale | undefined>()

  useEffect(() => {
    if (locale !== DEFAULT_LOCALE || isLanguageBannerDismissed()) return
    const preferred = preferredLocale(
      navigator.languages?.length ? navigator.languages : [navigator.language]
    )
    if (preferred && preferred !== locale) setTarget(preferred)
  }, [locale])

  // Wait for the intro animation so the banner does not sit over the loader.
  if (!target || !isIntroComplete) return null

  // Written in the language being offered, not the page's language.
  const t = i18nByLocale[target].getFixedT(target)

  const dismiss = () => {
    dismissLanguageBanner()
    setTarget(undefined)
  }

  return (
    <div
      role="region"
      aria-label={t('language.label')}
      lang={target}
      className="font-pp-neue-montreal border-texture fixed right-28 bottom-5 left-5 z-[10001] flex items-center justify-between gap-4 bg-black/70 px-4 py-3 text-xs tracking-[0.3em] text-gray-300 uppercase backdrop-blur lg:right-auto lg:justify-start"
    >
      <a
        href={localizePath(`${pathname}${search}${hash}`, target)}
        hrefLang={target}
        onClick={dismissLanguageBanner}
        className="transition-colors duration-300 hover:text-white"
      >
        {t('language.banner')}
      </a>
      <button
        type="button"
        aria-label={t('language.dismiss')}
        onClick={dismiss}
        className="text-base leading-none text-gray-500 transition-colors duration-300 hover:text-white"
      >
        &times;
      </button>
    </div>
  )
}
