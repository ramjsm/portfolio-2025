import { TheMagicBox } from '../../views/Project/content/TheMagicBox'
import type { Project } from '../projects'

export const theMagicBox: Project = {
  slug: 'the-magic-box',
  category: 'installation',
  title: 'The Magic Box',
  featured: false,
  date: '2023',
  thumbnail: {
    src: '/projects/the-magic-box/thumbnail.webp',
    thresholdWhite: 0.1,
    thresholdGray: 0.2,
    mediaClass: 'brightness-65 contrast-100',
    labelClass: 'label bottom-1 lg:bottom-3 left-2 lg:left-3',
    className: 'border-texture row-start-2 row-end-4 col-start-1 col-end-3',
    disableDialog: true,
  },
  hero: {
    src: '/projects/the-magic-box/hero.webm',
    thresholdWhite: 0.2,
    thresholdGray: 0.2,
  },
  videoURL: 'https://vimeo.com/908160267',
  intro: (
    <>
      <p>
        {' '}
        <em>The Magic Box: Futuristic Wisdom Edition</em> is an interactive
        installation that transforms Xueh Magrini Troll's sculpture and
        performative device into a talking oracle. The original work invites
        visitors to have a personal conversation with Xueh, who listens from
        behind the sculpture and creates a drawing inspired by their
        interaction.{' '}
      </p>

      <p>
        {' '}
        For the <em>Futuristic Wisdom Edition</em>, the conversation shifts from
        the artist to the sculpture itself. Visitors ask questions directly to
        it, while their voices are recorded, transcribed, and processed through
        an AI system to generate a spoken response. The sculpture becomes an
        interface between the visitor and an artificial voice, extending the
        original idea into a playful and mysterious encounter.{' '}
      </p>

      <p>
        {' '}
        The installation was developed in collaboration with{' '}
        <a
          className="underline"
          href="https://www.instagram.com/xuehka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xueh Magrini Troll
        </a>{' '}
        and built in TouchDesigner, combining voice interaction, AI-generated
        responses, and the physical sculpture. The{' '}
        <em>Futuristic Wisdom Edition</em> was presented at{' '}
        <a
          className="underline"
          href="https://raw-skpz.de/bwh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beamtenwohnhaus Open Studios 2023
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
          href="https://www.instagram.com/xuehka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xueh Magrini Troll
        </a>,
      ],
    },
    { header: 'tools', list: ['TouchDesigner', 'OpenAI', 'Python'] },
    { header: 'Type', list: ['Interactive Installation'] },
  ],
  content: <TheMagicBox />,
  credits: [
    <>
      <a
        className="underline"
        href="https://raw-skpz.de/bwh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Beamtenwohnhaus Open Studios 2023
      </a>
    </>,
    <>
      Concept & Sculpture /{' '}
      <a
        className="underline"
        href="https://raw-skpz.de/bwh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Xueh Magrini Troll
      </a>
    </>,
    <>Interaction Design & Generative Visuals / Ramses Salas</>,
  ],
}
