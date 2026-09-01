import { SchoolOfBalance } from '../../views/Project/content/SchoolOfBalance'
import type { Project } from '../projects'

export const schoolOfBalance: Project = {
  slug: 'school-of-balance',
  category: 'web',
  title: 'The School of Balance',
  featured: true,
  date: '2025',
  thumbnail: {
    src: '/projects/school-of-balance/thumbnail.png',
    thresholdWhite: 0.8,
    thresholdGray: 0.3,
    mediaClass: 'brightness-70 contrast-110',
    labelClass: 'lg:top-3 lg:left-5 bottom-1 left-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/school-of-balance/hero.webm',
    thresholdWhite: 0.5,
    thresholdGray: 0.3,
  },
  intro: (
    <>
      <p>
        {' '}
        <em>The School of Balance</em> is a web based experiment exploring
        flocking behavior through sound and interaction. Inspired by{' '}
        <a className="underline" href="https://www.red3d.com/cwr/boids/">
          Reynolds' 1986 Boids algorithm
        </a>
        , the project uses the three basic rules of separation, alignment, and
        cohesion to create a school of koi fish swimming together on
        screen.{' '}
      </p>

      <p>
        {' '}
        The fish respond to sound picked up through the visitor's microphone,
        scattering when noise disturbs the group. At the same time, an evolving
        soundscape responds to both the movement of the fish and the surrounding
        audio, creating a feedback loop between sound and behavior. Visitors can
        adjust the flocking parameters in real time and explore how small
        changes affect the collective movement.{' '}
      </p>

      <p>
        {' '}
        <em>The School of Balance</em> was created for the{' '}
        <a
          className="underline"
          href="https://threejs-journey.com/challenges/019-aquarium#"
        >
          Aquarium Challenge
        </a>
        , a project challenge organized by{' '}
        <a className="underline" href="https://threejs-journey.com/">
          Three.js Journey
        </a>
        . The project was an experiment in combining real time graphics,
        procedural behavior, and interactive sound in the browser.{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'Team',
      list: [
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
      list: ['React', 'Three.js', 'R3F', 'GSAP', 'Tailwind CSS'],
    },
    {
      header: 'Type',
      list: ['Web Experiment'],
    },
    {
      header: 'Links',
      list: [
        <a
          className="underline"
          href="https://schoolofbalance.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website &#8594;
        </a>,
      ],
    },
  ],
  content: <SchoolOfBalance />,
  credits: [
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
    <>Concept, Design & Development / Ramses Salas</>,
  ],
}
