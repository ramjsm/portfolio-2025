import { SingOrSink } from '../../views/Project/content/SingOrSink'
import type { Project } from '../projects'

export const singOrSink: Project = {
  slug: 'sing-or-sink',
  category: 'installation',
  title: 'Sing or Sink',
  featured: true,
  date: '2026-04-30',
  thumbnail: {
    src: '/projects/sing-or-sink/thumbnail.webp',
    thresholdWhite: 0.6,
    thresholdGray: 0.6,
    mediaClass: 'brightness-65 contrast-100',
    labelClass: 'label bottom-1 lg:bottom-3 left-2 lg:left-3',
    className: 'border-texture row-start-2 row-end-4 col-start-1 col-end-3',
    disableDialog: true,
  },
  videoURL: 'https://vimeo.com/1221304208',
  hero: {
    src: '/projects/sing-or-sink/hero.webm',
    thresholdWhite: 0.5,
    thresholdGray: 0.5,
  },
  intro: (
    <>
      <p>
        {' '}
        <em>Sing or Sink</em> is a real time interactive installation developed
        as an experiment with voice and interaction. Created during a three day
        working residency, the piece uses a 360° dome to create a landscape that
        moves from a dense, dark underworld at the bottom toward an open sky
        above. As visitors sing, their voices carry them upward through the
        environment. When the voices stop, they sink back down, making sustained
        singing necessary to reach the sky.{' '}
      </p>

      <p>
        {' '}
        The installation was built in Unity, using NDI to stream real time
        interactive graphics onto the 360° dome projection. The project was
        developed collaboratively by the team during{' '}
        <a
          className="underline"
          href="https://www.instagram.com/p/DX6p_ukKs_Y/"
        >
          Experimental Commons
        </a>{' '}
        working residency organized by{' '}
        <a
          className="underline"
          href="https://www.creative-cross-collaborations.de/home"
        >
          CCCBerlin
        </a>{' '}
        and{' '}
        <a className="underline" href="https://2026.amaze-berlin.de/">
          A MAZE.
        </a>
      </p>
    </>
  ),
  info: [
    {
      header: 'Team',
      list: [
        <a
          className="underline"
          href="https://franziskaharnisch.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Franziska Harnisch
        </a>,
        <a
          className="underline"
          href="https://www.lisakaschubat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lisa Kaschubat
        </a>,
        <a
          className="underline"
          href="https://wearedeadanimals.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tote Tiere Maarten
        </a>,
        <a
          className="underline"
          href="https://linktr.ee/wakeupurmind"
          target="_blank"
          rel="noopener noreferrer"
        >
          Veronica Carli
        </a>,
      ],
    },
    { header: 'Tools', list: ['Unity', 'NDI', 'Blender', 'C#'] },
    {
      header: 'Type',
      list: ['360° Dome Projection', 'Interactive Installation'],
    },
  ],
  content: <SingOrSink />,
  credits: [
    <>
      <a
        className="underline"
        href="https://www.instagram.com/p/DX6p_ukKs_Y/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Experimental Commons Residency 2026
      </a>{' '}
      at{' '}
      <a
        className="underline"
        href="https://b-dome.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        B-dome
      </a>
    </>,
    <>
      Interaction Design /{' '}
      <a
        className="underline"
        href="https://franziskaharnisch.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Franziska Harnisch
      </a>
    </>,
    <>
      Environment Design & 3D Modeling /{' '}
      <a
        className="underline"
        href="https://linktr.ee/wakeupurmind"
        target="_blank"
        rel="noopener noreferrer"
      >
        Veronica Carli
      </a>{' '}
      &{' '}
      <a
        className="underline"
        href="https://wearedeadanimals.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tote Tiere Maarten
      </a>
    </>,
    <>
      Interaction Development /{' '}
      <a
        className="underline"
        href="https://www.lisakaschubat.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lisa Kaschubat
      </a>{' '}
      & Ramses Salas
    </>,
  ],
}
