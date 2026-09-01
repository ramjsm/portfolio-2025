import { SoberaniaCreativa } from '../../views/Project/content/SoberaniaCreativa'
import type { Project } from '../projects'

export const soberaniaCreativa: Project = {
  slug: 'soberania-creativa',
  category: 'web',
  title: 'Soberania Creativa',
  featured: true,
  date: '2025',
  thumbnail: {
    src: '/projects/soberania-creativa/screenshot-0.webp',
    thresholdWhite: 1,
    thresholdGray: 0.6,
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
        {' '}
        <em>Soberanía Creativa</em> is a digital platform bringing together the
        artistic and facilitation practice of{' '}
        <a
          className="underline"
          href="https://soberaniacreativa.com/raices/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paloma Todd Montes
        </a>
        . Initially developed as a portfolio and blog, the project has grown
        into a space for exploring and sharing her work around cyclical
        consciousness, belonging, ancestral memory, embodiment, and personal
        experience.{' '}
      </p>

      <p>
        {' '}
        The platform has expanded to include a podcast, recorded workshops, and
        an online store for materials related to her practice. Its visual
        language is minimal and tactile, built around digitized paintings,
        photographs, and collage drawn from her artistic work.{' '}
      </p>

      <p>
        {' '}
        The platform is built in WordPress, with custom layouts and content
        structures adapted to its different forms of material. The project also
        extends into print through the design of booklets and books.{' '}
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
    {
      header: 'Team',
      list: [
        <a
          className="underline"
          href="https://bio.site/ecoscomunicacion"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carolina Olmos
        </a>,
      ],
    },
    { header: 'Tools', list: ['Wordpress', 'InDesign', 'Figma', 'Photoshop'] },
    {
      header: 'Type',
      list: ['Website'],
    },
    {
      header: 'Links',
      list: [
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
    <>Web Design, Development & Print / Ramses Salas </>,
  ],
}
