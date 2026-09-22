import { TheTimeMachine } from '../../views/Project/content/TheTimeMachine'
import type { Project } from '../projects'

export const theTimeMachine: Project = {
  slug: 'the-time-machine',
  category: 'installation',
  title: 'The Time Machine',
  featured: true,
  date: '2026-06-27',
  thumbnail: {
    src: '/projects/the-time-machine/thumbnail.webp',
    thresholdWhite: 0.15,
    thresholdGray: 0.15,
    mediaClass: 'brightness-90 contrast-110',
    labelClass: 'label bottom-2 left-1 lg:bottom-3 lg:left-3',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/the-time-machine/hero.webm',
    thresholdWhite: 0.2,
    thresholdGray: 0.2,
  },
  videoURL: 'https://vimeo.com/1222051604',
  intro: (
    <>
      <p>
        {' '}
        <em>The Time Machine</em> is a restaurant aboard{' '}
        <a className="underline" href="https://aida.de/schiffe/aidanova">
          AIDAnova
        </a>
        , where several synchronized monitors form a continuous visual
        environment around the space. The displays show shifting environments
        that evolve throughout the dining experience, creating the illusion of
        looking out from inside a machine traveling through different worlds and
        eras.{' '}
      </p>

      <p>
        {' '}
        The visual environments were built in Unreal Engine and synchronized
        across the installation using custom media server integration. The
        production combined 3D rendering workflows with a custom production
        pipeline developed to support the requirements of the multi display
        setup.{' '}
      </p>

      <p>
        {' '}
        I was brought onto <em>The Time Machine</em> by{' '}
        <a className="underline" href="https://ziggynova.com/">
          ZiggyNova
        </a>{' '}
        to handle the virtual production, 3D environment design, and motion
        graphics for the installation. This included developing the environments
        and creating Python tools to prepare the content for integration into
        the system.{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'Client',
      list: [
        <a
          className="underline"
          href="https://www.ziggynova.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZiggyNova
        </a>,
      ],
    },
    {
      header: 'Team',
      list: [
        <a
          className="underline"
          href="https://www.inner-leaf.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inner Leaf
        </a>,
        <a
          className="underline"
          href="https://studio22.berlin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Studio22
        </a>,
        <a
          className="underline"
          href="https://www.karde.me/thibautbournazac"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thibaut Bournazac
        </a>,
      ],
    },
    {
      header: 'Tools',
      list: ['Unreal Engine', 'Blender', 'Premiere Pro', 'Python'],
    },
    { header: 'Type', list: ['Immersive Installation'] },
  ],
  content: <TheTimeMachine />,
  credits: [
    <>
      Currently presented at <em>The Time Machine</em> restaurant aboard{' '}
      <a className="underline" href="https://aida.de/schiffe/aidanova">
        AIDAnova
      </a>
    </>,
    <>
      Concept & AI Creation /{' '}
      <a
        className="underline"
        href="https://www.ziggynova.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ZiggyNova
      </a>
    </>,
    <>
      3D Modeling /{' '}
      <a
        className="underline"
        href="https://www.inner-leaf.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Inner Leaf
      </a>
    </>,
    <>
      Spatial Mixing & Sound Design /{' '}
      <a
        className="underline"
        href="https://studio22.berlin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Studio22
      </a>
    </>,
    <>
      Sound Design /{' '}
      <a
        className="underline"
        href="https://www.karde.me/thibautbournazac"
        target="_blank"
        rel="noopener noreferrer"
      >
        Thibaut Bournazac
      </a>
    </>,
    <>
      Virtual Production, 3D Environment Design & Motion Graphics / Ramses Salas
    </>,
  ],
}
