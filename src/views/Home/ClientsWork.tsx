import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { WebGLImageWrapper } from '../../components/WebGLImageWrapper'
import { Link } from 'react-router'
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
    <div className="relative w-full justify-center mt-100">
      <a id="clients-work" className="absolute -top-30 left-0"></a>
      <div className="clients-work-header relative h-50 z-10">
        <div className="absolute right-0 top-10">
          <div className="client-work-shadow font-syne text-8xl text-transparent text-stroke-gray-100 text-stroke-1 mr-40">
            CLIENTS
          </div>
          <div className="client-work-shadow font-syne text-right text-8xl text-transparent text-stroke-gray-100 text-stroke-1">
            WORK
          </div>
        </div>
        <div className="absolute right-0">
          <div className="client-work font-syne text-8xl mr-40">CLIENTS</div>
          <div className="client-work font-syne text-right text-8xl">WORK</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[80%] mx-auto">
        {projects.map((project) => (
          <Link
            to="/project/soberania-creativa"
            className="border-texture relative w-full h-1/2 aspect-video"
          >
            <WebGLImageWrapper {...project.thumbnail} />
            <span
              id={project.slug}
              className={`absolute text-l text-white text-l font-pp-neue-montreal uppercase ${project.thumbnail.labelClass}`}
            >{`/${project.title}`}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
