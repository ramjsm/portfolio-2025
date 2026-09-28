const STORAGE_KEY = 'language-banner-dismissed'

/** Whether the visitor already dismissed the banner or chose a language. */
export function isLanguageBannerDismissed(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false // storage unavailable, e.g. blocked or private mode
  }
}

export function dismissLanguageBanner(): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // Storage unavailable: the banner will simply show again next visit.
  }
}
