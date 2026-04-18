import { Link } from 'react-router-dom'
import { handleScrambleHover } from '../utils/scrambleText'

interface FooterLink {
  label: string
  href: string
  cursorText: string
  external?: boolean
}

const NAV_LINKS: FooterLink[] = [
  { label: 'Home', href: '/', cursorText: 'HOME' },
  { label: 'About', href: '/about', cursorText: 'ABOUT' },
  { label: 'Events', href: '/events', cursorText: 'EVENTS' },
  {
    label: 'Installations',
    href: '/#installations',
    cursorText: 'INSTALLATIONS',
  },
  { label: 'Web', href: '/#web', cursorText: 'WEB.WORK' },
]

const CONTACT_LINKS: FooterLink[] = [
  {
    label: 'Email',
    href: 'mailto:hello@ramsessalas.com',
    cursorText: 'CONTACT',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/ramsessalas/',
    cursorText: 'OPEN',
    external: true,
  },
  {
    label: 'Github',
    href: 'https://github.com/ramjsm',
    cursorText: 'OPEN',
    external: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ramsessalas_',
    cursorText: 'OPEN',
    external: true,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/ramsessalas',
    cursorText: 'OPEN',
    external: true,
  },
]

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = 'transition-colors duration-300 hover:text-white'
  const content = <span data-scramble={link.label}>{link.label}</span>

  if (link.external || link.href.startsWith('mailto:')) {
    return (
      <a
        href={link.href}
        {...(link.external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        data-cursor-text={link.cursorText}
        onMouseEnter={handleScrambleHover}
        className={className}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      to={link.href}
      data-cursor-text={link.cursorText}
      onMouseEnter={handleScrambleHover}
      className={className}
    >
      {content}
    </Link>
  )
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string
  links: FooterLink[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-white">{heading}</span>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLinkItem link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <div className="font-pp-neue-montreal mt-16 mb-2 flex w-full gap-4 px-5 pt-10 pb-5 text-xs tracking-[0.3em] text-gray-500 uppercase">
      <div className="flex flex-1 flex-wrap gap-10">
        <FooterColumn heading="Contact" links={CONTACT_LINKS} />
      </div>
      <div className="flex flex-1 flex-col items-center justify-end">
        <div>All Rights Reserved</div>
        <div>© Ramses Salas 2026</div>
      </div>
      <div className="flex-1"></div>
    </div>
  )
}
