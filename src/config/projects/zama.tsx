import { Zama } from '../../views/Project/content/Zama'
import type { Project } from '../projects'

export const zama: Project = {
  slug: 'zama',
  category: 'web',
  title: 'Zama',
  isRecent: true,
  thumbnail: {
    src: '/projects/zama/zama-thumbnail.webp',
    thresholdWhite: 0.5,
    thresholdGray: 0.3,
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
        Zama is the website of{' '}
        <a
          className="underline"
          href="https://www.instagram.com/zama.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          María Ángelica Mártinez
        </a>
        , an artist whose work explores emotion, energy, and human experience
        through painting, performance and tattoos.
      </p>
      <p>
        The project began with a series of collaborative sessions to define the
        conceptual and visual direction for the site. This research informed the
        design and structure, resulting in a cohesive experience that reflects
        her artistic practice.
      </p>
      <p>
        The site was designed to create a calm and accessible space that
        reflects her artistic practice. It organizes her statement, portfolio,
        and booking process in a way that is intuitive and easy to navigate.
      </p>
    </>
  ),
  info: [
    {
      header: 'Client',
      list: [
        <a
          className="underline"
          href="https://www.instagram.com/zama.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          María Ángelica Mártinez
        </a>,
      ],
    },
    { header: 'Tools', list: ['Figma', 'Next.js', 'Adobe After Effects'] },
    {
      header: 'Type',
      list: [
        'Website',
        <a
          className="underline"
          href="https://www.aboutzama.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website &#8594;
        </a>,
      ],
    },
  ],
  content: <Zama />,
  credits: [<>Web Design & Development / Ramses Salas </>],
}
