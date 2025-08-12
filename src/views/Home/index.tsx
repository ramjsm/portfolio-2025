import { useLocation } from 'react-router-dom'
import { ClientsWork } from './ClientsWork'
import { Cocreations } from './Cocreations'
import { Landing } from './Landing'
import { Services } from './Services'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { useEffect } from 'react'

export function Home() {
  const location = useLocation()
  const { scrollTo } = useScrollbar()

  useEffect(() => {
    if (location.hash) scrollTo(location.hash)
    else scrollTo(0)
  }, [location, scrollTo])

  return (
    <div className="flex w-full flex-col gap-30 landscape:gap-60">
      <Landing />
      <Services />
      <Cocreations />
      <div className="border-texture-top h-1"></div>
      <ClientsWork />
    </div>
  )
}
