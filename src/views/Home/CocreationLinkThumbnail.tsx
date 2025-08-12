import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { WebGLImageWrapper } from '../../components/WebGLImageWrapper'
import { Link } from 'react-router-dom'
import type { Project } from '../../config/projects'

interface CocreationLinkThumbnailProps {
  cocreation: Project
}

export function CocreationLinkThumbnail({
  cocreation,
}: CocreationLinkThumbnailProps) {
  useGSAP(() => {
    gsap.to(`#${cocreation.slug}`, {
      duration: 2,
      scrambleText: {
        text: `/${cocreation.title}`,
        chars: '01',
      },
      scrollTrigger: {
        trigger: `#${cocreation.slug}`,
        toggleActions: 'restart none none none',
      },
    })
  })

  return (
    <Link
      to={`/project/${cocreation.slug}`}
      className={`relative transition hover:text-white lg:text-[#909090] ${cocreation.thumbnail.className}`}
    >
      <WebGLImageWrapper {...cocreation.thumbnail} />
      <span
        id={cocreation.slug}
        className={
          'font-pp-neue-montreal lg:text-l absolute text-sm uppercase transition ' +
          cocreation.thumbnail.labelClass
        }
      >{`/${cocreation.title}`}</span>
    </Link>
  )
}
