import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { getProjectsByCategory } from '../../config/projects'
import { InstallationLinkThumbnail } from './InstallationLinkThumbnail'
import { handleScrambleHover } from '../../utils/scrambleText'

// This collage is a fixed-coordinate grid (see the grid-cols/grid-rows below
// and each project's thumbnail.className) with exactly 5 hand-placed slots
// today. Only `featured` installations render here. Adding a new installation
// either means designing it a slot + marking it `featured: true`, or leaving
// it `featured: false` so it only shows up on the /archive page.
const featuredInstallations = getProjectsByCategory('installation').filter(
  (project) => project.featured
)

export function Installations() {
  useGSAP(() => {
    gsap.from('.header1', {
      y: '-20%',
      autoAlpha: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '#header1',
      },
    })

    gsap.from('.header2', {
      y: '-20%',
      autoAlpha: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '#header2',
      },
    })
  })

  return (
    <>
      <div className="relative flex w-full items-center justify-center">
        <a id="installations" className="absolute -top-30 left-0"></a>
        <div className="z-10 grid w-[930px] transform grid-cols-[40%_20%_40%] grid-rows-[10%_20%_5%_30%_25%_10%] gap-2">
          <div className="justify relative col-span-2 flex justify-items-start">
            <div id="header1" className="relative flex-1">
              <div className="header1 font-syne text-stroke-gray-100 text-stroke-1 absolute bottom-[40%] left-[50%] -translate-x-1/2 text-[8vw] text-transparent xl:text-8xl">
                CO-
              </div>
              <div className="header1 font-syne text-stroke-gray-100 text-stroke-1 absolute bottom-[15%] left-[50%] -translate-x-1/2 text-[8vw] text-transparent lg:text-8xl">
                CO-
              </div>
              <div className="header1 font-syne absolute -bottom-[10%] left-[50%] -translate-x-1/2 text-[8vw] lg:text-8xl">
                CO-
              </div>
            </div>
            <div className="relative flex-1">
              <img className="h-full w-full" src="codebar.png" />
              {/* <CodeBar /> */}
            </div>
          </div>
          {featuredInstallations.map((installation) => (
            <InstallationLinkThumbnail
              key={installation.slug}
              installation={installation}
            />
          ))}
          <div className="border-texture -z-1 col-start-1 col-end-4 row-start-4 row-end-5 border-r border-b border-l"></div>
          <div
            id="header2"
            className="relative col-start-1 col-end-4 row-start-6 row-end-6"
          >
            <div className="header2 font-syne absolute top-[20%] left-[50%] z-3 -translate-x-1/2 -translate-y-1/2 text-[8vw] lg:text-8xl">
              CREATIONS
            </div>
            <div className="header2 font-syne text-stroke-gray-100 text-stroke-1 absolute top-[45%] left-[50%] z-2 -translate-x-1/2 -translate-y-1/2 text-[8vw] text-transparent lg:text-8xl">
              CREATIONS
            </div>
            <div className="header2 font-syne text-stroke-gray-300 text-stroke-1 absolute top-[70%] left-[50%] z-1 -translate-x-1/2 -translate-y-1/2 text-[8vw] text-transparent lg:text-8xl">
              CREATIONS
            </div>
          </div>
        </div>
      </div>
      <div className="font-pp-neue-montreal flex w-full justify-center">
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
    </>
  )
}
