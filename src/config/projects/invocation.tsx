import { Invocation } from '../../views/Project/content/Invocation'
import type { Project } from '../projects'

export const invocation: Project = {
  slug: 'invocation',
  category: 'cocreation',
  title: 'Invocation',
  isRecent: true,
  thumbnail: {
    src: '/projects/invocation/thumbnail.webp',
    thresholdWhite: 0.16,
    thresholdGray: 0.8,
    mediaClass: 'brightness-90 contrast-110',
    labelClass: 'label bottom-2 left-1 lg:bottom-3 lg:left-3',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/invocation/invocation_hero_animation.webm',
    thresholdWhite: 0.2,
    thresholdGray: 0.2,
  },
  videoURL: 'https://vimeo.com/377457311',
  intro: (
    <>
      <p>
        Invocation is a live audiovisual experiment developed with
        OpenFrameworks and a motion sensor.
      </p>
      <p>
        Using head and hand tracking,{' '}
        <a
          className="underline"
          href="https://www.instagram.com/xuehka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xueh Magrini Troll
        </a>{' '}
        manipulates a generative light structure in real time. The algorithm
        simulates organic growth, producing an evolving abstract form.
      </p>
      <p>
        Movement data drives rotation and translation of the visuals. Live
        audio input modulates the graphics, adding effects such as pulses and
        flickers.
      </p>
      <p>
        The piece explore the relationship between movement, sound, and light.
      </p>
    </>
  ),
  info: [
    {
      header: 'Artist',
      list: [
        <a
          className="underline"
          href="https://www.instagram.com/xuehka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xueh Magrini Troll
        </a>,
      ],
    },
    { header: 'Tech', list: ['OpenFrameworks', 'C++'] },
    { header: 'Type', list: ['Interactive Installation'] },
  ],
  content: <Invocation />,
  credits: [
    <>
      Choreography /{' '}
      <a
        className="underline"
        href="https://www.instagram.com/xuehka"
        target="_blank"
        rel="noopener noreferrer"
      >
        Xueh Magrini Troll
      </a>
    </>,
    <>Interaction Design & Generative Visuals / Ramses Salas </>,
  ],
}
