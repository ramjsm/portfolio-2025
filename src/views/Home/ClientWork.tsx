import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Image } from '../../components/Image'
import { Link } from 'react-router-dom'
import { getProjectsByCategory } from '../../config/projects'

export function ClientWork() {
  const projects = getProjectsByCategory('client')

  useGSAP(() => {
    gsap.from('.client-work', {
      y: '-20%',
      autoAlpha: 0,
      stagger: 0.15,
      scrollTrigger: '.clients-work-header',
    })
    gsap.from('.client-work-shadow', {
      y: '-20%',
      autoAlpha: 0,
      stagger: 0.15,
      delay: 0.5,
      scrollTrigger: '.clients-work-header',
    })
    projects.forEach((project) => {
      gsap.to(`#${project.slug}`, {
        duration: 2,
        scrambleText: {
          text: `/${project.title}`,
          // oldClass: 'font-ark-es text-transparent text-stroke-gray-100 text-stroke-1',
          speed: 2,
          chars: '01',
        },
        scrollTrigger: `#${project.slug}`,
      })
    })
  })

  return (
    <div className="relative w-full justify-center">
      <a id="clients-work" className="absolute -top-30 left-0"></a>
      <div className="clients-work-header h- relative z-10 h-[16vw] lg:h-50">
        <div className="absolute top-[20%] right-0">
          <div className="client-work-shadow font-syne text-stroke-gray-100 text-stroke-1 mr-[10vw] text-[8vw]/[8.2vw] text-transparent lg:text-8xl">
            CLIENT
          </div>
          <div className="client-work-shadow font-syne text-stroke-gray-100 text-stroke-1 text-right text-[8vw]/[8.2vw] text-transparent lg:text-8xl">
            WORK
          </div>
        </div>
        <div className="absolute top-[0%] right-0">
          <div className="client-work font-syne mr-[10vw] text-[8vw]/[8.2vw] lg:text-8xl">
            CLIENT
          </div>
          <div className="client-work font-syne text-right text-[8vw]/[8.2vw] lg:text-8xl">
            WORK
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-4 lg:w-[80%]">
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
              className={`lg:text-l text-l font-pp-neue-montreal absolute text-sm text-white uppercase ${project.thumbnail.labelClass}`}
            >{`/${project.title}`}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
