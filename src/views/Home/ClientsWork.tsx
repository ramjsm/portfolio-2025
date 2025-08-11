import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { WebGLImageWrapper } from '../../components/WebGLImageWrapper'
import { Link } from 'react-router-dom'
import { getProjectsByCategory } from '../../config/projects'

export function ClientsWork() {
  const projects = getProjectsByCategory('client')

  useGSAP(() => {
    gsap.from('.client-work', {
      y: -200,
      autoAlpha: 0,
      stagger: 0.15,
      scrollTrigger: '.clients-work-header',
    })
    gsap.from('.client-work-shadow', {
      y: -50,
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
    <div className="relative mt-100 w-full justify-center">
      <a id="clients-work" className="absolute -top-30 left-0"></a>
      <div className="clients-work-header relative z-10 h-50">
        <div className="absolute top-10 right-0">
          <div className="client-work-shadow font-syne text-stroke-gray-100 text-stroke-1 mr-40 text-8xl text-transparent">
            CLIENTS
          </div>
          <div className="client-work-shadow font-syne text-stroke-gray-100 text-stroke-1 text-right text-8xl text-transparent">
            WORK
          </div>
        </div>
        <div className="absolute right-0">
          <div className="client-work font-syne mr-40 text-8xl">CLIENTS</div>
          <div className="client-work font-syne text-right text-8xl">WORK</div>
        </div>
      </div>
      <div className="mx-auto flex w-[80%] flex-col gap-4">
        {projects.map((project) => (
          <Link
            to="/project/soberania-creativa"
            className="border-texture relative aspect-video h-1/2 w-full"
          >
            <WebGLImageWrapper {...project.thumbnail} />
            <span
              id={project.slug}
              className={`text-l text-l font-pp-neue-montreal absolute text-white uppercase ${project.thumbnail.labelClass}`}
            >{`/${project.title}`}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
