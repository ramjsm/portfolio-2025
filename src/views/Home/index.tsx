import { useLocation } from 'react-router-dom'
import { Web } from './Web'
import { Installations } from './Installations'
import { Landing } from './Landing'
import { Services } from './Services'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Playground } from './Playground'
import { UpcomingEvents } from './UpcomingEvents'
import { getUpcomingEvents } from '../../config/events'

export function Home() {
  const location = useLocation()
  const { scrollTo } = useScrollbar()
  const hasUpcomingEvents = getUpcomingEvents().length > 0

  useEffect(() => {
    if (location.hash) scrollTo(location.hash)
    else scrollTo(0)
  }, [location, scrollTo])

  return (
    <div className="flex w-full flex-col gap-40 landscape:gap-60">
      <Helmet>
        <title>Ramses Salas | Creative Technologist</title>
      </Helmet>
      <Landing />
      <Services />
      {hasUpcomingEvents && <UpcomingEvents />}
      <Installations />
      <Web />
    </div>
  )
}
