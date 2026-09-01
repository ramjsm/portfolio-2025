import { Link, useLocation } from 'react-router-dom'
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
import { handleScrambleHover } from '../../utils/scrambleText'

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
      <div className="font-pp-neue-montreal -mt-28 flex w-full justify-center lg:-mt-40">
        <div className="flex w-[930px] justify-end">
          <Link
            to="/archive"
            data-cursor-text="ARCHIVE"
            onMouseEnter={handleScrambleHover}
            className="text-l tracking-[0.2em] text-gray-500 uppercase transition-colors duration-300 hover:text-white"
          >
            <span data-scramble="View full archive →">View full archive →</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
