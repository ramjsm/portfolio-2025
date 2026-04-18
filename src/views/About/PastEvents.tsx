import { EventsSection } from '../../components/EventsSection'
import { getPastEvents } from '../../config/events'

export function PastEvents() {
  const events = getPastEvents()

  if (events.length === 0) return null

  return (
    <EventsSection
      id="past-events"
      events={events}
      heading={{ front: 'EVENTS', back: 'PAST' }}
      headingAlign="left"
    />
  )
}
