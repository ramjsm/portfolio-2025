import { Invocation } from '../../views/Project/content/Invocation'
import type { Project } from '../projects'

export const invocation: Project = {
  slug: 'invocation',
  category: 'installation',
  title: 'Invocation',
  featured: false,
  date: '2019',
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
        {' '}
        <em>Invocation</em> is a live audiovisual experiment exploring the
        relationship between movement, sound, and light. Using motion tracking
        and generative graphics, the piece creates an evolving abstract
        structure that responds to movement and live audio.{' '}
      </p>

      <p>
        {' '}
        The piece was inspired by earlier research into genetic algorithms and{' '}
        <a
          className="underline"
          href="http://www.foibg.com/ijitk/ijitk-vol10/ijitk10-03-p03.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dawkins' biomorphs
        </a>
        , exploring how ideas from evolutionary computation could be translated
        into an audiovisual performance. Through movement and sound, the
        performer appears to invoke an evolving form, giving the abstract
        structure the quality of something being brought to life.{' '}
      </p>

      <p>
        {' '}
        Developed in OpenFrameworks and C++, the experiment uses a motion sensor
        to track movement and drive the generative visual system.{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'Team',
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
    { header: 'Tools', list: ['OpenFrameworks', 'Kinect', 'C++'] },
    { header: 'Type', list: ['Interactive Experiment'] },
  ],
  content: <Invocation />,
  credits: [
    <>
      Choreography & Performance /{' '}
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
    <>
      Related Research /{' '}
      <a
        className="underline"
        href="http://www.foibg.com/ijitk/ijitk-vol10/ijitk10-03-p03.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Towards a Dawkins’ Genetic Algorithm
      </a>
    </>,
  ],
}
