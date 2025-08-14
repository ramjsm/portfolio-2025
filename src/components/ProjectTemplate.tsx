import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
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
import { Video } from './Video'
import { projectsList } from '../config/projects'

export function ProjectTemplate() {
  const { slug } = useParams<{ slug: string }>()
  const projects = projectsList
  const project = getProjectBySlug(slug!)
  const nextProject = getNextProjectBySlug(slug!)
  const { scrollTo } = useScrollbar()

  useLayoutEffect(() => {
    ;(scrollTo as any)(0, { immediate: true })
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

  if (!project || !nextProject) {
    return <div>Project not found</div>
  }

  return (
    <article className="relative w-full">
      <div className="relative flex min-h-screen w-full flex-col justify-center">
        <div className="mt-20 -mr-2 mb-5 flex flex-col items-end justify-end text-right">
          <div className="text-l opacity-50">{`${getProjectCategoryLabel(project.category)}`}</div>
          <h1 className="header font-syne text-stroke-gray-100 text-stroke-1 mb-1 text-5xl text-transparent">{`${project.title}`}</h1>
        </div>
        <Video
          {...project.hero}
          videoURL={project.videoURL}
          className="border-texture relative mb-10 flex aspect-video items-center justify-center"
        />
        {/* Responsive Info*/}
        <div className="info-wrapper flex flex-col gap-4 lg:invisible lg:mb-0 lg:flex-col landscape:invisible">
          {project.info.map((info: InfoSection) => (
            <Info key={info.header} header={info.header} list={info.list} />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col md:mb-10 lg:flex-row landscape:flex-row">
        <div className="info-wrapper invisible mb-10 flex-1 gap-4 lg:visible lg:mb-0 lg:flex-col landscape:visible">
          {project.info.map((info: InfoSection) => (
            <Info key={info.header} header={info.header} list={info.list} />
          ))}
        </div>
        <div className="flex flex-col gap-5 text-xl font-[100] lg:flex-3">
          {project.intro}
        </div>
      </div>
      <div className="mx-auto my-20 lg:w-[80%]">{project.content}</div>
      {project.credits && (
        <ul className="mb-20 text-center font-[100]">
          {project.credits.map((listItem, index: number) => (
            <li key={index} className="text-l">
              {listItem}
            </li>
          ))}
        </ul>
      )}
      <div className="flex w-full items-center gap-4">
        <div className="border-texture-top h-0 w-full"></div>
        <div className="font-pp-neue-montreal flex flex-1 items-center justify-center gap-3 text-sm">
          {projects.map((p, index) => (
            <Link
              key={p.slug}
              to={`/project/${p.slug}`}
              className={p.slug === project.slug ? 'text-xl' : 'opacity-50'}
            >
              {`/0${index + 1}`}
            </Link>
          ))}
        </div>
        <div className="border-texture-top h-0 w-full"></div>
      </div>
      <div className="mt-4 mb-16 flex items-end justify-end text-right">
        <Link to={`/project/${nextProject.slug}`}>
          <div className="font-syne text-stroke-gray-100 text-stroke-1 mb-1 text-5xl text-transparent">{`${nextProject.title}`}</div>
          <div className="text-l opacity-50">{`Up Next / ${getProjectCategoryLabel(nextProject.category)}`}</div>
        </Link>
      </div>
    </article>
  )
}
