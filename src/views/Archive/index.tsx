import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {
  getProjectsSortedByDate,
  getProjectCategoryLabel,
  type Project,
} from '../../config/projects'
import { handleScrambleHover } from '../../utils/scrambleText'
import { useIsMobile } from '../../hooks/useIsMobile'
import { formatFlexibleDateYear } from '../../utils/date'

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
        <p className="font-pp-neue-montreal text-xs text-gray-600">
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
              to={`/project/${project.slug}?filter=all`}
              data-cursor-text="EXPLORE"
              onMouseEnter={(e) => {
                handleScrambleHover(e)
                showPreview(project)
              }}
              onMouseLeave={hidePreview}
              className="archive-row group flex items-center gap-4 border-t border-white/10 py-3 transition-[padding] duration-300 hover:pl-2"
            >
              <span className="font-pp-neue-montreal w-20 text-xs tracking-wide text-gray-600 uppercase transition-colors duration-300 group-hover:text-gray-300">
                {project.date ? formatFlexibleDateYear(project.date) : '—'}
              </span>
              <span className="font-pp-neue-montreal flex-1 text-base font-light text-white lowercase">
                <span data-scramble={project.slug}>{project.slug}</span>
              </span>
              <span className="font-pp-neue-montreal w-20 text-xs tracking-wide text-gray-600 uppercase transition-colors duration-300 group-hover:text-gray-300 lg:w-auto">
                {project.info.find((info) => info.header === 'Type')?.list ||
                  null}
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
