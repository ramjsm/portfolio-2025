import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { EventsSection } from '../../components/EventsSection'
import { getPastEvents, getUpcomingEvents } from '../../config/events'
import { getPageContent } from '../../content/loader'
import { useLocale } from '../../i18n/useLocale'
import { useDocumentHead } from '../../i18n/useDocumentHead'

export function Events() {
  const location = useLocation()
  const { t } = useTranslation()
  const locale = useLocale()
  useDocumentHead(getPageContent('events', locale)?.frontmatter.seo)
  const { scrollTo } = useScrollbar()

  const upcoming = getUpcomingEvents()
  const past = getPastEvents()

  useEffect(() => {
    if (location.hash) scrollTo(location.hash)
    else scrollTo(0)
  }, [location, scrollTo])

  return (
    <div className="flex min-h-screen w-full flex-col gap-30 pt-30 lg:gap-40 lg:pt-40">
      {upcoming.length > 0 && (
        <EventsSection
          id="upcoming-events"
          events={upcoming}
          heading={{ front: t('events.front'), back: t('events.upcoming') }}
          headingAlign="left"
        />
      )}

      {past.length > 0 && (
        <EventsSection
          id="past-events"
          events={past}
          heading={{ front: t('events.front'), back: t('events.past') }}
          headingAlign="left"
        />
      )}
    </div>
  )
}
