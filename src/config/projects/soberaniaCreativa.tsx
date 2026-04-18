import { SoberaniaCreativa } from '../../views/Project/content/SoberaniaCreativa'
import type { Project } from '../projects'

export const soberaniaCreativa: Project = {
  slug: 'soberania-creativa',
  category: 'web',
  title: 'Soberania Creativa',
  isRecent: true,
  thumbnail: {
    src: '/projects/soberania-creativa/thumbnail.webp',
    thresholdWhite: 0.8,
    thresholdGray: 0.5,
    mediaClass: 'brightness-60 contrast-115',
    labelClass: 'lg:top-3 lg:left-5 bottom-1 left-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/soberania-creativa/hero.webm',
    mediaClass: 'brightness-75 contrast-90',
    thresholdWhite: 0.3,
    thresholdGray: 0.3,
  },
  intro: (
    <>
      <p>
        Soberanía Creativa is a platform dedicated to somatic-spiritual healing
        through creative expression.
      </p>
      <p>
        Designed and implemented in WordPress, the site was envisioned as a
        digital oasis for reading and learning. It offers a familiar space that
        invites reflection and exploration.
      </p>
      <p>
        It reflects the vision of Paloma Todd Montes, an artist and facilitator
        whose work arises from a personal landscape of exile, hybridity, and
        embodied memory. The site showcases her illustrations, portfolio, blog,
        and podcast, offering a window into her creative world.
      </p>
      <p>
        Rooted in ancestral wisdom, narrative sovereignty, and the cyclical
        mystery of the body, the platform provides a grounded and responsive
        experience that holds space for oral and embodied storytelling.
      </p>
    </>
  ),
  info: [
    {
      header: 'Client',
      list: [
        <a
          className="underline"
          href="https://www.instagram.com/_soberaniacreativa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paloma Todd Montes
        </a>,
      ],
    },
    { header: 'Tools', list: ['Figma', 'Wordpress', 'Adobe Photoshop'] },
    {
      header: 'Type',
      list: [
        'Website',
        <a
          className="underline"
          href="https://soberaniacreativa.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website &#8594;
        </a>,
      ],
    },
  ],
  content: <SoberaniaCreativa />,
  credits: [
    <>
      Branding & Marketing /{' '}
      <a
        className="underline"
        href="https://bio.site/ecoscomunicacion"
        target="_blank"
        rel="noopener noreferrer"
      >
        Carolina Olmos
      </a>
    </>,
    <>Web Design & Development / Ramses Salas </>,
  ],
}
