import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { WebGLImageWrapper } from '../../components/WebGLImageWrapper'
import { Link } from 'react-router'

export function CocreationLinkThumbnail({ cocreation }) {
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
      className={`relative text-[#909090] hover:text-white transition ${cocreation.thumbnailClass}`}
    >
      <WebGLImageWrapper {...cocreation.thumbnail} />
      <span
        id={cocreation.slug}
        className={
          'px-3 absolute uppercase text-l font-pp-neue-montreal transition ' +
          cocreation.thumbnail.labelClass
        }
      >{`/${cocreation.title}`}</span>
    </Link>
  )
}
