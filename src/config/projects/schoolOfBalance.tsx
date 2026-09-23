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
        <a
          className="underline"
          href="https://www.red3d.com/cwr/boids/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reynolds' 1986 Boids algorithm
        </a>
        , the project uses the three basic rules of separation, alignment, and
        cohesion to create a school of koi fish swimming together on screen,
        with{' '}
        <a
          className="underline"
          href="https://wawasensei.dev/tuto/boid-flocking-simulation-threejs-and-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wawa Sensei’s Boid tutorial
        </a>{' '}
        as a starting point.{' '}
      </p>

      <p>
        {' '}
        The fish respond to audio captured through the visitor's microphone,
        scattering when noise disturbs the group. In collaboration with{' '}
        <a
          className="underline"
          href="https://www.karde.me/thibautbournazac"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thibaut Bournazac
        </a>
        , we developed an evolving soundscape that explored states of tension
        and release, shaped by the movement of the flock and the the audio
        input.{' '}
      </p>

      <p>
        {' '}
        <em>The School of Balance</em> was submitted as an entry to the{' '}
        <a
          className="underline"
          href="https://threejs-journey.com/challenges/019-aquarium#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aquarium Challenge
        </a>
        , part of the{' '}
        <a
          className="underline"
          href="https://threejs-journey.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Three.js Journey
        </a>{' '}
        student challenges. The project explores balance as a process of
        returning to harmony after disruption.{' '}
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
    <>Interaction, Design & Development / Ramses Salas</>,
  ],
}
