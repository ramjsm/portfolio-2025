import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { VideoDialog } from '../components/VideoDialog'
import { Link } from 'react-router-dom'
import { Info } from './Info'
import {
  getProjectBySlug,
  getNextProjectBySlug,
  getProjectCategoryLabel,
  type InfoSection,
} from '../config/projects'
import { useParams } from 'react-router-dom'
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
    <article className="relative w-full">
      <div className="relative flex min-h-dvh w-full items-center">
        <div className="absolute top-[50%] left-[50%] z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-4 mix-blend-difference">
          <h1 className="header font-syne text-stroke-gray-100 text-stroke-1 text-7xl whitespace-nowrap text-transparent uppercase drop-shadow-xl/50">
            {projectData.title}
          </h1>
        </div>
        <div className="border-texture relative top-[20%] left-0 aspect-video">
          <WebGLVideoWrapper {...projectData.hero} />
          {projectData.videoURL && (
            <div className="absolute right-5 bottom-5">
              <VideoDialog src={projectData.videoURL} />
            </div>
          )}
        </div>
      </div>
      <div className="relative mb-10 flex w-full">
        <div className="info-wrapper flex flex-1 flex-col gap-4">
          {projectData.info.map((info: InfoSection) => (
            <Info key={info.header} header={info.header} list={info.list} />
          ))}
        </div>
        <div className="flex flex-3 flex-col gap-5 text-xl font-[100]">
          {projectData.intro}
        </div>
      </div>
      <div className="my-20">{projectData.body}</div>
      {projectData.credits && (
        <ul className="mb-20 text-center font-[100]">
          {projectData.credits.map((listItem, index: number) => (
            <li key={index} className="text-xl">
              {listItem}
            </li>
          ))}
        </ul>
      )}
      <div className="flex w-full items-center gap-4">
        <div className="border-texture-top h-0 w-full"></div>
        <div className="font-pp-neue-montreal flex flex-1 items-center justify-center gap-3 text-sm">
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
        <div className="border-texture-top h-0 w-full"></div>
      </div>
      <div className="mt-4 mb-16 flex items-end justify-end text-right">
        <Link to={`/project/${nextProject.slug}`}>
          <div className="font-syne text-stroke-gray-100 text-stroke-1 mb-1 text-5xl text-transparent">{`/ ${nextProject.title}`}</div>
          <div className="text-l opacity-50">{`Up Next / ${getProjectCategoryLabel(nextProject.category)}`}</div>
        </Link>
      </div>
    </article>
  )
}
