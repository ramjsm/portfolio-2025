import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { VideoDialog } from '../components/VideoDialog'
import { Link } from 'react-router'
import { Info } from './Info'
import {
  getProjectBySlug,
  getNextProjectBySlug,
  getProjectCategoryLabel,
  type InfoSection,
} from '../config/projects'
import { useParams } from 'react-router'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { useLayoutEffect } from 'react'
import { WebGLVideoWrapper } from '../components/WebGLVideoWrapper'
import { projectsList } from '../config/projects'

export function ProjectTemplate() {
  const { slug } = useParams<{ slug: string }>()
  const projects = projectsList
  const projectData = getProjectBySlug(slug!)
  const nextProject = getNextProjectBySlug(slug!)
  const { scrollTo } = useScrollbar()

  useLayoutEffect(() => {
    scrollTo(0)
  }, [scrollTo])

  useGSAP(() => {
    document.fonts.ready.then(() => {
      SplitText.create('h1', {
        type: 'chars',
        smartWrap: true,
        onSplit: (self) => {
          gsap.from(self.chars, {
            y: -100,
            autoAlpha: 0,
            stagger: 0.075,
            scrollTrigger: {
              trigger: 'h1',
            },
          })
        },
      })
    })

    gsap.to('.next', {
      x: '100%',
      ease: 'none',
      repeat: -1,
      duration: 10,
    })

    gsap.to('.previous', {
      x: '-100%',
      ease: 'none',
      repeat: -1,
      duration: 5,
    })

    gsap.from('.info', {
      autoAlpha: 0,
      x: -100,
      stagger: 0.25,
      scrollTrigger: '.info-wrapper',
    })
  })

  if (!projectData || !nextProject) {
    return <div>Project not found</div>
  }

  return (
    <article className="w-full relative">
      <div className="relative flex w-full min-h-dvh items-center">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] flex flex-col items-center gap-4 z-10 mix-blend-difference">
          <h1 className="header font-syne uppercase text-7xl drop-shadow-xl/50 text-transparent text-stroke-gray-100 text-stroke-1 whitespace-nowrap">
            {projectData.title}
          </h1>
        </div>
        <div className="relative top-[20%] left-0 border-texture aspect-video">
          <WebGLVideoWrapper {...projectData.hero} />
          {projectData.videoURL && (
            <div className="absolute bottom-5 right-5">
              <VideoDialog src={projectData.videoURL} />
            </div>
          )}
        </div>
      </div>
      <div className="relative flex w-full mb-10">
        <div className="info-wrapper flex flex-col flex-1 gap-4">
          {projectData.info.map((info: InfoSection) => (
            <Info key={info.header} header={info.header} list={info.list} />
          ))}
        </div>
        <div className="flex-3 text-xl font-[100] flex flex-col gap-5">
          {projectData.intro}
        </div>
      </div>
      <div className="my-20">{projectData.body}</div>
      {projectData.credits && (
        <ul className="text-center font-[100] mb-20">
          {projectData.credits.map((listItem, index: number) => (
            <li key={index} className="text-xl">
              {listItem}
            </li>
          ))}
        </ul>
      )}
      <div className="flex w-full items-center gap-4">
        <div className="border-texture-top w-full h-0"></div>
        <div className="flex flex-1 items-center justify-center gap-3 font-pp-neue-montreal text-sm">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className={
                projectData.slug === project.slug ? 'text-xl' : 'opacity-50'
              }
            >
              {`/0${index + 1}`}
            </Link>
          ))}
        </div>
        <div className="border-texture-top w-full h-0"></div>
      </div>
      <div className="flex items-end justify-end mt-4 mb-16 text-right">
        <Link to={`/project/${nextProject.slug}`}>
          <div className="text-5xl font-syne text-transparent text-stroke-gray-100 text-stroke-1 mb-1">{`/ ${nextProject.title}`}</div>
          <div className="text-l opacity-50">{`Up Next / ${getProjectCategoryLabel(nextProject.category)}`}</div>
        </Link>
      </div>
    </article>
  )
}
