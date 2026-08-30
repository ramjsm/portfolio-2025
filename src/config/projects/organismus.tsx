import { Organismus } from '../../views/Project/content/Organismus'
import type { Project } from '../projects'

export const organismus: Project = {
  slug: 'organismus',
  category: 'installation',
  title: 'Organismus',
  featured: true,
  date: '2026-04-23',
  thumbnail: {
    src: '/projects/organismus/screenshot-9.webp',
    thresholdWhite: 0.4,
    thresholdGray: 0.3,
    mediaClass: 'brightness-60 contrast-110',
    labelClass: 'label lg:top-3 lg:left-3 top-1 left-2',
    className: 'border-texture row-start-1 row-end-4 col-start-3 col-end-4',
    disableDialog: true,
  },
  hero: {
    src: '/projects/organismus/hero.webm',
    thresholdWhite: 0.4,
    thresholdGray: 0.3,
  },
  videoURL: 'https://vimeo.com/1221778907',
  intro: (
    <>
      <p>
        {' '}
        <em>Organismus</em> is a projection mapping work that reflects on our
        relationship with nature and the systems we build around us. It
        approaches nature as a living system that we are intrinsically a part
        of.{' '}
      </p>

      <p>
        {' '}
        The work brings together graphic elements, architectural patterns,
        organic forms, and natural landscapes. Mechanical structures gradually
        become intertwined with natural forms, connecting the constructed and
        the organic. The movement explores cycles of growth, transformation, and
        renewal, reflecting on the interconnection between different systems and
        forms of existence.{' '}
      </p>

      <p>
        {' '}
        <em>Organismus</em> was developed collaboratively by the team and
        presented as a projection mapping work at the{' '}
        <a
          className="underline"
          href="https://sehsuechte.de/en/programme/projection-mapping-friday/s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sehsüchte Film Festival 2026
        </a>
        , whose 55th edition was centered around the question{' '}
        <em>“What's left?”</em>. In this context, the work reflects on what
        remains when the structures we build begin to change, and on the
        possibility that life, connection, and consciousness might persist
        through their transformation.{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'Team',
      list: [
        <a
          className="underline"
          href="https://sumski.art/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ivan Blazetic Sumski
        </a>,
        <a
          className="underline"
          href="https://www.yangounframed.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yango Unframed
        </a>,
        <a
          className="underline"
          href="https://www.instagram.com/lena_radivoj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lena Radivoj
        </a>,
      ],
    },
    {
      header: 'Tech',
      list: ['TouchDesigner', 'LeonardoAI', 'Premiere Pro'],
    },
    { header: 'Type', list: ['Projection Mapping'] },
  ],
  content: <Organismus />,
  credits: [
    <>
      <a
        className="underline"
        href="https://sehsuechte.de/en/the-festival/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sehsüchte Film Festival 2026
      </a>{' '}
      at{' '}
      <a
        className="underline"
        href="https://www.waschhaus.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Waschhaus Postdam
      </a>
    </>,
    <>
      Concept & Animations /{' '}
      <a
        className="underline"
        href="https://sumski.art/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ivan Blazetic Sumski
      </a>
      ,{' '}
      <a
        className="underline"
        href="https://www.yangounframed.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Yango Unframed
      </a>
      , Ramses Salas
    </>,
    <>
      Graphics & illustrations /{' '}
      <a
        className="underline"
        href="https://sumski.art/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ivan Blazetic Sumski
      </a>
    </>,
    <>
      Footage & Composition /{' '}
      <a
        className="underline"
        href="https://www.yangounframed.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Yango Unframed
      </a>
    </>,
    <>
      Sound Design /{' '}
      <a
        className="underline"
        href="https://www.instagram.com/lena_radivoj/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lena Radivoj
      </a>
    </>,
    <>Video Mapping & VFX / Ramses Salas</>,
  ],
}
