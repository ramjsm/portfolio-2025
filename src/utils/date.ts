/**
 * Parses a flexible date string into a comparable timestamp. Accepts a
 * full ISO 8601 date (e.g. "2026-05-12") or a year-only string
 * (e.g. "2023"), treating year-only values as January 1st of that year.
 */
export function parseFlexibleDate(date: string): number {
  if (/^\d{4}$/.test(date))
    return new Date(`${date}-01-01T00:00:00Z`).getTime()
  return new Date(date).getTime()
}

/**
 * Formats a flexible date string for display. Year-only values are
 * returned as-is; full dates are formatted as e.g. "12 May 2026".
 */
export function formatFlexibleDate(
  date: string,
  locale: string = 'en-US'
): string {
  if (/^\d{4}$/.test(date)) return date
  const d = new Date(date)
  return d.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
