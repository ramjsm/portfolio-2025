import { useTranslation } from 'react-i18next'
import { EventsSection } from '../../components/EventsSection'
import { getUpcomingEvents } from '../../config/events'

export function UpcomingEvents() {
  const { t } = useTranslation()
  const events = getUpcomingEvents()

  return (
    <EventsSection
      id="upcoming-events"
      events={events}
      heading={{ front: t('events.front'), back: t('events.upcoming') }}
      headingAlign="left"
    />
  )
}
