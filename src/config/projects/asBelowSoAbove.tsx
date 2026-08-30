import { AsBelowSoAbove } from '../../views/Project/content/AsBelowSoAbove'
import type { Project } from '../projects'

export const asBelowSoAbove: Project = {
  slug: 'as-below-so-above',
  category: 'installation',
  title: 'As Below So Above',
  featured: true,
  date: '2021',
  thumbnail: {
    src: '/projects/as-below-so-above/thumbnail.webp',
    thresholdWhite: 0.5,
    thresholdGray: 0.4,
    mediaClass: 'brightness-70 contrast-110',
    labelClass: 'label top-1 left-2 lg:top-3 lg:left-3',
    className: 'border-texture row-start-5 col-start-1 row-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/as-below-so-above/hero.webm',
    thresholdWhite: 0.4,
    thresholdGray: 0.4,
  },
  videoURL: 'https://vimeo.com/791477640',
  intro: (
    <>
      <p>
        {' '}
        <em>As Below, So Above</em> is a collective exhibition by Tangible
        Collective, exploring the relationship between nature, technology, and
        different scales of perception. The exhibition brings together natural
        grass, generative sculptures, paintings, interactive projections, and
        ambient sound within a shared environment.{' '}
      </p>

      <p>
        {' '}
        Inspired by Hermetic philosophy and inverting the phrase “as above, so
        below”, the exhibition explores the idea that everything, from the
        microscopic to the cosmic, is composed of the same fundamental building
        blocks. By bringing organic and technological elements into the same
        environment, it invites visitors to question the relationship between
        nature and technology.{' '}
      </p>
      <p>
        {' '}
        An interactive live performance extends this exploration through
        interactive visuals that respond to the music in real time, moving
        between microscopic textures and larger forms across the surrounding
        environment. <em>As Below, So Above</em> was presented at{' '}
        <a
          className="underline"
          href="https://www.instagram.com/willowsp_/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Willow Gallery
        </a>{' '}
        in 2021.{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'team',
      list: [
        <a
          className="underline"
          href="https://juanguerrero.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Juan Guerrero
        </a>,
        <a
          className="underline"
          href="https://nataliadlh.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Natalia de León Hernández
        </a>,
        <a
          className="underline"
          href="https://de.linkedin.com/in/nathaly-al-gindi-607206156/de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nathaly Al Gindi
        </a>,
      ],
    },
    { header: 'Tech', list: ['TouchDesigner'] },
    { header: 'Type', list: ['Interactive Installation', 'Performance'] },
  ],
  content: <AsBelowSoAbove />,
  credits: [
    <>
      <a
        className="underline"
        href="https://www.instagram.com/p/CW565AIM1VW/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        As Below So Above 2021
      </a>{' '}
      at{' '}
      <a
        className="underline"
        href="https://www.instagram.com/willowsp_/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Willow Gallery
      </a>
    </>,
    <>
      Generative Design & Sculptures /{' '}
      <a
        className="underline"
        href="https://nataliadlh.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Natalia de León Hernández
      </a>
    </>,
    <>
      Paintings, Floor & Sound Design /{' '}
      <a
        className="underline"
        href="https://juanguerrero.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Juan Guerrero
      </a>
    </>,
    <>
      Live Concert /{' '}
      <a
        className="underline"
        href="https://de.linkedin.com/in/nathaly-al-gindi-607206156/de"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nathaly Al Gindi
      </a>
    </>,
    <>
      Interaction Design, Projection Mapping & Generative Visuals / Ramses Salas
    </>,
  ],
}
