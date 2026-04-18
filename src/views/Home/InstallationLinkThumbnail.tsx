import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Image } from '../../components/Image'
import { Link } from 'react-router-dom'
import type { Project } from '../../config/projects'

interface InstallationLinkThumbnailProps {
  installation: Project
}

export function InstallationLinkThumbnail({
  installation,
}: InstallationLinkThumbnailProps) {
  const { className, ...thumbnailProps } = installation.thumbnail

  useGSAP(() => {
    gsap.to(`#${installation.slug}`, {
      duration: 2,
      scrambleText: {
        text: `/${installation.slug}`,
        chars: '01',
      },
      scrollTrigger: {
        trigger: `#${installation.slug}`,
        toggleActions: 'restart none none none',
      },
    })
  })

  return (
    <Link
      to={`/project/${installation.slug}`}
      className={`relative transition hover:text-white lg:text-[#909090] ${className}`}
      data-cursor-text="EXPLORE"
    >
      <Image className="h-full w-full" {...thumbnailProps} />
      <span
        id={installation.slug}
        className={
          'font-pp-neue-montreal lg:text-l absolute text-sm lowercase transition ' +
          installation.thumbnail.labelClass
        }
      >{`/${installation.title}`}</span>
    </Link>
  )
}
