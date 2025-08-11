import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { WebGLImageWrapper } from '../../components/WebGLImageWrapper'
import { Link } from 'react-router'
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
      className={`relative text-[#909090] transition hover:text-white ${cocreation.thumbnail.className}`}
    >
      <WebGLImageWrapper {...cocreation.thumbnail} />
      <span
        id={cocreation.slug}
        className={
          'text-l font-pp-neue-montreal absolute px-3 uppercase transition ' +
          cocreation.thumbnail.labelClass
        }
      >{`/${cocreation.title}`}</span>
    </Link>
  )
}
