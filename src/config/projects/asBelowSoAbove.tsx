import { AsBelowSoAbove } from '../../views/Project/content/AsBelowSoAbove'
import type { Project } from '../projects'

export const asBelowSoAbove: Project = {
  slug: 'as-below-so-above',
  category: 'cocreation',
  title: 'As Below So Above',
  isRecent: true,
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
        As Below, So Above is an immersive exhibition where nature and
        technology exist in the same space. Organic textures and technological
        creations are brought together to create a sensory experience that
        moves between the microscopic and the perceived physical.
      </p>
      <p>
        Inspired by Hermetic philosophy and the phrase "As above, so below",
        the project reflects on the idea that everything in the universe, from
        the atomic to the cosmic, is made of the same fundamental matter. The
        experience invites visitors to zoom in and out and question how we
        relate to both nature and technology in a shared, encoded reality.
      </p>
      <p>
        The exhibition blends digital projections, sound, and physical
        elements to explore how we understand the world around us. Whose
        utopia, whose dystopia?
      </p>
    </>
  ),
  info: [
    {
      header: 'Artist',
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
      Interaction Design, Projection Mapping & Generative Visuals / Ramses
      Salas
    </>,
  ],
}
