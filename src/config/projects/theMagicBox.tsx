import { TheMagicBox } from '../../views/Project/content/TheMagicBox'
import type { Project } from '../projects'

export const theMagicBox: Project = {
  slug: 'the-magic-box',
  category: 'cocreation',
  title: 'The Magic Box',
  isRecent: true,
  thumbnail: {
    src: '/projects/the-magic-box/thumbnail.webp',
    thresholdWhite: 0.5,
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
        The Magic Box is an original project by{' '}
        <a
          className="underline"
          href="https://www.instagram.com/xuehka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xueh Magrini Troll
        </a>
        . People are invited to sit in front of a mysterious, handmade box and
        have a personal conversation with it. Xueh is listening from behind
        creating a unique drawing inspired by what she heard.
      </p>
      <p>
        The Futuristic Wisdom Edition builds on this idea by turning the Magic
        Box into a talking oracle. Instead of speaking with Xueh, visitors ask
        questions directly to the box. Their voice is recorded, transcribed,
        and sent to an AI system, offering playful and witty replies.
      </p>
      <p>
        This version was built using TouchDesigner and combines sculpture,
        voice interaction, and artificial intelligence to create a playful and
        mysterious experience.
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
    { header: 'Tech', list: ['TouchDesigner', 'OpenAI', 'Python'] },
    { header: 'Type', list: ['Interactive Installation'] },
  ],
  content: <TheMagicBox />,
  credits: [
    <>
      <a className="underline" href="https://raw-skpz.de/bwh/">
        Beamtenwohnhaus Open Studios 2023
      </a>
    </>,
    <>
      Concept & Sculpture /{' '}
      <a className="underline" href="https://raw-skpz.de/bwh/">
        Xueh Magrini Troll
      </a>
    </>,
    <>Interaction Design & Generative Visuals / Ramses Salas</>,
  ],
}
