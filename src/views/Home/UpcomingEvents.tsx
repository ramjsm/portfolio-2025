import { EventsSection } from '../../components/EventsSection'
import { getUpcomingEvents } from '../../config/events'

export function UpcomingEvents() {
  const events = getUpcomingEvents()

  return (
    <EventsSection
      id="upcoming-events"
      events={events}
      heading={{ front: 'EVENTS', back: 'UPCOMING' }}
      headingAlign="left"
    />
  )
}
