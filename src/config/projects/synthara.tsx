import { Synthara } from '../../views/Project/content/Synthara'
import type { Project } from '../projects'

export const synthara: Project = {
  slug: 'synthara',
  category: 'cocreation',
  title: 'Synthara',
  isRecent: true,
  thumbnail: {
    src: '/projects/synthara/thumbnail.webp',
    thresholdWhite: 0.6,
    thresholdGray: 0.4,
    mediaClass: 'brightness-90 contrast-110',
    labelClass: 'label top-[20%] lg:right-4 right-2',
    className: 'row-start-3 row-end-5 col-start-1 col-end-4',
    disableDialog: true,
  },
  hero: {
    src: '/projects/synthara/hero.webm',
    thresholdWhite: 0.25,
    thresholdGray: 0.25,
  },
  videoURL: 'https://vimeo.com/864873849',
  intro: (
    <>
      <p>
        Synthara is an interactive installation that explores the intersection
        of organic and synthetic life. A 3D printed mountain landscape houses
        glowing kombucha scoby deposits that react to human movement.
      </p>
      <p>
        Visitors interact with the piece through motion sensors, triggering
        ripples of color and ambient sound projected in real-time using
        TouchDesigner.
      </p>
      <p>
        The concept and artistic direction were developed in collaboration
        with{' '}
        <a
          className="underline"
          href="https://nataliadlh.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Natalia de León Hernandez
        </a>
        , whose vision shaped the world of Synthara, blending ecological
        symbolism with speculative design.
      </p>
      <p>
        This project brings together digital fabrication, biomaterials,
        generative visuals, and interactive systems to imagine a future where
        nature and technology evolve together.
      </p>
    </>
  ),
  info: [
    {
      header: 'Artist',
      list: [
        <a
          className="underline"
          href="https://nataliadlh.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Natalia de León Hernández
        </a>,
      ],
    },
    { header: 'Tech', list: ['Blender', 'TouchDesigner', 'GLSL'] },
    { header: 'Type', list: ['Interactive Installation'] },
  ],
  content: <Synthara />,
  credits: [
    <>
      <a
        href="https://www.instagram.com/consciousmadness_official"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Concious Madness Festival 2023
      </a>
    </>,
    <>
      Concept & 3D Modeling /{' '}
      <a
        className="underline"
        href="https://nataliadlh.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Natalia de León Hernández
      </a>
    </>,
    <>Interaction Design, Projection Mapping & Fabrication / Ramses Salas </>,
  ],
}
