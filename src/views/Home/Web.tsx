import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Image } from '../../components/Image'
import { Link } from 'react-router-dom'
import { getProjectsByCategory } from '../../config/projects'

export function Web() {
  const projects = getProjectsByCategory('web')

  useGSAP(() => {
    gsap.from('.web-work', {
      y: '-20%',
      autoAlpha: 0,
      stagger: 0.15,
      scrollTrigger: '.web-header',
    })
    gsap.from('.web-work-shadow', {
      y: '-20%',
      autoAlpha: 0,
      stagger: 0.15,
      delay: 0.5,
      scrollTrigger: '.web-header',
    })
    projects.forEach((project) => {
      gsap.to(`#${project.slug}`, {
        duration: 2,
        scrambleText: {
          text: `/${project.slug}`,
          // oldClass: 'font-ark-es text-transparent text-stroke-gray-100 text-stroke-1',
          speed: 2,
          chars: '01',
        },
        scrollTrigger: `#${project.slug}`,
      })
    })
  })

  return (
    <div className="relative flex w-full items-center justify-center">
      <a id="web" className="absolute -top-30 left-0"></a>
      <div className="w-[930px]">
        <div className="web-header relative z-10 h-[16vw] lg:h-50">
          <div className="absolute top-[40%] right-0">
            <div className="web-work-shadow font-syne text-stroke-gray-300 text-stroke-1 text-right text-[8vw]/[8.2vw] text-transparent lg:text-8xl">
              WORK
            </div>
          </div>
          <div className="absolute top-[0%] right-0">
            <div className="web-work font-syne text-right text-[8vw]/[8.2vw] lg:text-8xl">
              WEB.
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="relative aspect-video"
              data-cursor-text="EXPLORE"
            >
              <Image {...project.thumbnail} />
              <span
                id={project.slug}
                className={`lg:text-l text-l font-pp-neue-montreal absolute text-sm text-white lowercase ${project.thumbnail.labelClass}`}
              >{`/${project.slug}`}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
