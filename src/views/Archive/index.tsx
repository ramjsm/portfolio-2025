import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {
  getProjectsSortedByDate,
  formatProjectDate,
  getProjectCategoryLabel,
  type Project,
} from '../../config/projects'
import { handleScrambleHover } from '../../utils/scrambleText'
import { useIsMobile } from '../../hooks/useIsMobile'

export function Archive() {
  const isMobile = useIsMobile()
  const previewRef = useRef<HTMLDivElement>(null)
  const previewImgRef = useRef<HTMLImageElement>(null)
  const { contextSafe } = useGSAP()
  const projects = getProjectsSortedByDate()

  useGSAP(() => {
    if (!previewRef.current) return
    gsap.set(previewRef.current, { xPercent: -50, yPercent: -50 })

    gsap.from('.archive-row', {
      autoAlpha: 0,
      y: 10,
      stagger: 0.03,
      scrollTrigger: { trigger: '.archive-list' },
    })
  })

  const showPreview = contextSafe((project: Project) => {
    if (isMobile || !previewRef.current || !previewImgRef.current) return
    previewImgRef.current.src = project.thumbnail.src
    gsap.to(previewRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.35,
      ease: 'power3.out',
    })
  })

  const hidePreview = contextSafe(() => {
    if (isMobile || !previewRef.current) return
    gsap.to(previewRef.current, {
      autoAlpha: 0,
      scale: 0.92,
      duration: 0.25,
      ease: 'power3.out',
    })
  })

  const trackPreview = contextSafe((e: MouseEvent) => {
    if (isMobile || !previewRef.current) return
    gsap.to(previewRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: 'power3.out',
    })
  })

  return (
    <div
      className="flex min-h-screen w-full flex-col gap-10"
      onMouseMove={trackPreview}
    >
      <Helmet>
        <title>Archive | Ramses Salas</title>
      </Helmet>

      <div className="mt-20 flex flex-col gap-4">
        <h1 className="font-syne text-stroke-gray-100 text-stroke-1 text-[14vw] text-transparent uppercase lg:text-8xl">
          Archive
        </h1>
        <p className="font-pp-neue-montreal text-sm text-gray-500">
          {'> ls -la ./work --sort=date'}
          <br />
          {`total ${projects.length} projects`}
        </p>
      </div>

      <div className="archive-list mb-20 flex flex-col">
        {projects.map((project, i) => {
          const num = String(i + 1).padStart(2, '0')

          return (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              data-cursor-text="EXPLORE"
              onMouseEnter={(e) => {
                handleScrambleHover(e)
                showPreview(project)
              }}
              onMouseLeave={hidePreview}
              className="archive-row group border-texture-top flex items-center gap-4 py-3 transition-[padding] duration-300 hover:pl-2"
            >
              <span className="w-8 text-xs tracking-widest text-gray-500 uppercase transition-colors duration-300 group-hover:text-white/80">
                /{num}
              </span>
              <span className="w-20 text-xs tracking-widest text-gray-500 uppercase transition-colors duration-300 group-hover:text-white/80">
                {project.date ? formatProjectDate(project.date) : '—'}
              </span>
              {isMobile && (
                <img
                  src={project.thumbnail.src}
                  alt={project.title}
                  className="h-10 w-16 flex-shrink-0 object-cover"
                />
              )}
              <span className="font-pp-neue-montreal flex-1 text-base font-light text-white lowercase">
                <span data-scramble={project.slug}>{project.slug}</span>
              </span>
              <span className="text-xs text-gray-500 uppercase">
                {getProjectCategoryLabel(project.category)}
              </span>
            </Link>
          )
        })}
      </div>

      {!isMobile && (
        <div
          ref={previewRef}
          className="pointer-events-none fixed top-0 left-0 z-[9998] aspect-video w-64 overflow-hidden opacity-0"
        >
          <img
            ref={previewImgRef}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  )
}
