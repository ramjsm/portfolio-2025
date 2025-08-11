import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { WebGLImageWrapper } from '../../components/WebGLImageWrapper'
import { Link } from 'react-router'
import {
  cocreationsList,
  getProjectsByCategory,
} from '../../router/cocreations'
import { CocreationLinkThumbnail } from './CocreationLinkThumbnail'
import CodeBar from '../../components/Codebar'

export function Cocreations() {
  useGSAP(() => {
    gsap.from('.header1', {
      y: -50,
      autoAlpha: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '#header1',
      },
    })

    gsap.from('.header2', {
      y: -50,
      autoAlpha: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '#header2',
      },
    })
  })

  return (
    <div className="relative flex w-full min-h-dvh items-center justify-center">
      <a id="co-creations" className="absolute -top-30 left-0"></a>
      <div className="h-[120dhv] grid grid-cols-[40%_20%_40%] grid-rows-[10%_20%_5%_30%_25%_10%] gap-2 z-10 w-[930px] transform">
        <div className="flex relative col-span-2 justify justify-items-start">
          <div id="header1" className="flex-1 relative">
            <div className="header1 absolute bottom-20 font-syne text-8xl text-transparent text-stroke-gray-100 text-stroke-1">
              CO-
            </div>
            <div className="header1 absolute bottom-10 font-syne text-8xl text-transparent text-stroke-gray-100 text-stroke-1">
              CO-
            </div>
            <div className="header1 absolute bottom-0 font-syne text-8xl">
              CO-
            </div>
          </div>
          <div className="flex-1 relative">
            <img className="w-full h-full" src="codebar.png" />
            {/* <CodeBar /> */}
          </div>
        </div>
        {getProjectsByCategory('cocreation').map((cocreation) => (
          <CocreationLinkThumbnail
            key={cocreation.slug}
            cocreation={cocreation}
          />
        ))}
        <div className="border-b border-r border-l border-texture row-start-4 row-end-5 col-start-1 col-end-4 -z-1"></div>
        <div
          id="header2"
          className="relative row-start-6 row-end-6 col-start-1 col-end-4"
        >
          <div className="header2 absolute top-0 font-syne text-8xl z-3">
            CREATIONS
          </div>
          <div className="header2 absolute top-10 font-syne text-8xl text-transparent text-stroke-gray-100 text-stroke-1 z-2">
            CREATIONS
          </div>
          <div className="header2 absolute top-20 font-syne text-8xl text-transparent text-stroke-gray-100 text-stroke-1 z-1">
            CREATIONS
          </div>
        </div>
      </div>
    </div>
  )
}
