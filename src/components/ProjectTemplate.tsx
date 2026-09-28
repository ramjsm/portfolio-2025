import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Info } from './Info'
import {
  getProjectBySlug,
  getProjectInfo,
  type InfoSection,
  getNextProjectBySlug,
  getFilteredProjects,
  type ProjectsListFilter,
  isProjectsListFilter,
} from '../config/projects'
import { useParams } from 'react-router-dom'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { useLayoutEffect } from 'react'
import { Video } from './Video'
import { useIsMobile } from '../hooks/useIsMobile'
import { getProjectContent } from '../content/loader'
import { MdxSection } from '../content/MdxSection'
import { useLocale } from '../i18n/useLocale'
import { useDocumentHead } from '../i18n/useDocumentHead'

export function ProjectTemplate() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const filterParam = searchParams.get('filter')
  const filter: ProjectsListFilter = isProjectsListFilter(filterParam)
    ? filterParam
    : 'all'
  const projects = getFilteredProjects(filter)
  const project = getProjectBySlug(slug!)
  const nextProject = getNextProjectBySlug(slug!, filter)
  const { scrollTo } = useScrollbar()
  const isMobile = useIsMobile()
  const locale = useLocale()
  const { t } = useTranslation()
  // Projects migrated to MDX render from content/projects/<slug>/<locale>.mdx;
  // the rest still use their legacy TSX fields.
  const mdx = slug ? getProjectContent(slug, locale) : undefined
  useDocumentHead(mdx?.frontmatter.seo)

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
            autoAlpha: 0,
            stagger: 0.1,
            scrollTrigger: {
              trigger: 'h1',
            },
            ease: 'power4',
          })
        },
      })
    })

    gsap.from('.intro', {
      duration: 5,
      // y: 100,
      autoAlpha: 0,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.intro',
      },
    })

    gsap.from('.credits', {
      duration: 4,
      autoAlpha: 0,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.credits',
      },
    })

    gsap.from('.info', {
      autoAlpha: 0,
      x: -10,
      stagger: 0.1,
      scrollTrigger: '.info-wrapper',
    })

    const tl = gsap.timeline({ scrollTrigger: '.pagination' })
    tl.from('.page-line', {
      duration: 0.5,
      width: 0,
    }).from('.page-number', {
      autoAlpha: 0,
      stagger: 0.1,
      y: -10,
    })
  })

  if (!project) {
    // Return to home page
    navigate('/')
    return
  }

  const title = mdx?.frontmatter.title ?? project.title
  const info = getProjectInfo(project, locale)

  return (
    <article className="w-full">
      <div className="relative flex min-h-screen w-full flex-col justify-center">
        {isMobile && (
          <div className="mt-20 -mr-2 mb-5 flex flex-col items-end justify-end text-right lg:hidden">
            <div className="text-l opacity-50">
              {t(`categories.${project.category}`)}
            </div>
            <h1 className="header font-syne text-stroke-gray-100 text-stroke-1 mb-1 text-5xl text-transparent">{`${title}`}</h1>
          </div>
        )}
        {!isMobile && (
          <>
            <h1 className="header font-syne text-stroke-gray-100 text-stroke-1 absolute top-[50%] left-[50%] mb-1 -translate-x-1/2 -translate-y-1/2 text-7xl text-nowrap text-transparent uppercase">
              {`${title}`}
            </h1>
          </>
        )}
        <Video
          {...project.hero}
          videoURL={project.videoURL}
          className="border-texture mb-10 flex aspect-video items-center justify-center lg:mb-0 lg:max-h-2/3"
        ></Video>
        {/* Responsive Info*/}
        {isMobile && (
          <div className="info-wrapper flex flex-col gap-4 lg:mb-0 lg:hidden lg:flex-col landscape:hidden">
            {info.map((section: InfoSection) => (
              <Info
                key={section.header}
                header={section.header}
                list={section.list}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-10 flex w-full flex-col md:mb-10 lg:mt-0 lg:flex-row landscape:flex-row">
        {!isMobile && (
          <div className="info-wrapper flex flex-1 flex-col gap-4">
            {info.map((section: InfoSection) => (
              <Info
                key={section.header}
                header={section.header}
                list={section.list}
              />
            ))}
          </div>
        )}
        <div className="intro flex flex-col gap-2 text-xl font-[100] lg:flex-3 lg:text-base landscape:flex-4">
          {mdx ? (
            <MdxSection Content={mdx.Content} section="intro" />
          ) : (
            project.intro
          )}
        </div>
      </div>
      <div className="mx-auto my-20 lg:w-[80%]">
        {mdx ? (
          <MdxSection Content={mdx.Content} section="gallery" />
        ) : (
          project.content
        )}
      </div>
      {mdx ? (
        <div className="credits mb-20 text-center font-[100]">
          <MdxSection Content={mdx.Content} section="credits" />
        </div>
      ) : (
        <ul className="credits mb-20 text-center font-[100]">
          {project.credits &&
            project.credits.map((listItem, index: number) => (
              <li key={index} className="text-l">
                {listItem}
              </li>
            ))}
        </ul>
      )}
      {isMobile && filter === 'all' ? null : (
        <div className="flex w-full items-center gap-4">
          <div className="page-line border-texture-top h-0 w-full"></div>
          <div className="pagination font-pp-neue-montreal flex flex-1 items-center justify-center gap-3 text-sm">
            {projects.map((p, index) => (
              <Link
                key={p.slug}
                to={`/project/${p.slug}`}
                className={
                  p.slug === project.slug
                    ? 'page-number text-xl'
                    : 'page-number opacity-50'
                }
              >
                {`/0${index + 1}`}
              </Link>
            ))}
          </div>
          <div className="page-line border-texture-top h-0 w-full"></div>
        </div>
      )}
      {nextProject && (
        <div className="mt-4 mb-16 flex items-end justify-end text-right">
          <Link to={`/project/${nextProject.slug}?filter=${filter}`}>
            <div className="font-syne text-stroke-gray-100 text-stroke-1 mb-1 text-5xl text-transparent">{`${nextProject.title}`}</div>
            <div className="text-l opacity-50">{`${t('project.upNext')} ${t(`categories.${nextProject.category}`)}`}</div>
          </Link>
        </div>
      )}
    </article>
  )
}
