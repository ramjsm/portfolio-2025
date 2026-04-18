import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { EventsSection } from '../../components/EventsSection'
import { getPastEvents, getUpcomingEvents } from '../../config/events'

export function Events() {
  const location = useLocation()
  const { scrollTo } = useScrollbar()

  const upcoming = getUpcomingEvents()
  const past = getPastEvents()

  useEffect(() => {
    if (location.hash) scrollTo(location.hash)
    else scrollTo(0)
  }, [location, scrollTo])

  return (
    <div className="flex min-h-screen w-full flex-col gap-30 pt-30 lg:gap-40 lg:pt-40">
      <Helmet>
        <title>Events | Ramses Salas</title>
      </Helmet>

      {upcoming.length > 0 && (
        <EventsSection
          id="upcoming-events"
          events={upcoming}
          heading={{ front: 'EVENTS', back: 'UPCOMING' }}
          headingAlign="left"
        />
      )}

      {past.length > 0 && (
        <EventsSection
          id="past-events"
          events={past}
          heading={{ front: 'EVENTS', back: 'PAST' }}
          headingAlign="left"
        />
      )}
    </div>
  )
}
