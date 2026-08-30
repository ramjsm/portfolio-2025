import { Synthara } from '../../views/Project/content/Synthara'
import type { Project } from '../projects'

export const synthara: Project = {
  slug: 'synthara',
  category: 'installation',
  title: 'Synthara',
  featured: true,
  date: '2023',
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
        {' '}
        <em>Synthara</em> is an interactive installation exploring a world where
        organic and synthetic life coexist. A 3D printed mountain landscape
        houses glowing deposits of kombucha SCOBY that respond to the movement
        of visitors.{' '}
      </p>

      <p>
        {' '}
        Developed as a speculative world where nature and technology evolve
        together, <em>Synthara</em> imagines a form of coexistence between the
        organic and the synthetic. The landscape and living materials create a
        space where these different forms of life become part of the same
        ecosystem.{' '}
      </p>

      <p>
        {' '}
        Visitors interact with the installation through motion sensors,
        triggering changes in colour and ambient sound in real time. The
        interactive system was built in TouchDesigner, connecting the physical
        landscape and biomaterials with generative visuals and sound. The
        concept and artistic direction were developed in collaboration with{' '}
        <a
          className="underline"
          href="https://nataliadlh.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Natalia de León Hernández
        </a>
        . <em>Synthara</em> was presented at the{' '}
        <a
          href="https://www.instagram.com/consciousmadness_official"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Concious Madness Festival 2023
        </a>
        .{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'team',
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
    {
      header: 'Tools',
      list: ['UltiMaker Cura', 'TouchDesigner', 'Kinect', 'Blender', 'GLSL'],
    },
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
