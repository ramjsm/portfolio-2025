import { useLocation } from 'react-router'
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
    <div className="texture-test w-full">
      <Landing />
      <Services />
      <Cocreations />
      <ClientsWork />
    </div>
  )
}
