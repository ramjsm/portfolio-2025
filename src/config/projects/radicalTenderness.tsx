import { RadicalTenderness } from '../../views/Project/content/RadicalTenderness'
import type { Project } from '../projects'

export const radicalTenderness: Project = {
  slug: 'radical-tenderness',
  category: 'installation',
  title: 'Radical Tenderness',
  featured: false,
  date: '2026-02-08',
  thumbnail: {
    src: '/projects/radical-tenderness/screenshot-0.webp',
    thresholdWhite: 0.15,
    thresholdGray: 0.15,
    mediaClass: 'brightness-70 contrast-110',
    labelClass: 'lg:top-3 lg:left-5 bottom-1 left-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/radical-tenderness/hero.webm',
    thresholdWhite: 0.25,
    thresholdGray: 0.25,
  },
  intro: (
    <>
      <p>
        <em>Radical Tenderness: Transmutation</em> is an interactive
        installation that creates space for sharing repressed thoughts and
        emotions. Through a real time chat, visitors can share what they might
        otherwise leave unspoken. Their words are transformed into glyphs and
        revealed within the shared installation space, shifting a private
        experience into something that can be witnessed.
      </p>

      <p>
        It proposes vulnerability as a radical gesture in a world that often
        rewards detachment. By reclaiming emotional expression as something
        shared and political, the installation imagines a space where the
        boundaries between the private and the collective can temporarily
        dissolve, exploring how personal honesty can become a catalyst for
        collective transformation.
      </p>

      <p>
        <em>Radical Tenderness: Transmutation</em> was presented as part of{' '}
        <a
          className="underline"
          href="https://www.instagram.com/p/DUdH-tWjHGB/"
        >
          Songs of Uprising
        </a>
        , a group exhibition by the{' '}
        <a className="underline" href="https://supersoft.wtf/">
          Supersoft.wtf
        </a>{' '}
        collective exploring rebellion, resistance, grief, care, and
        transformation. Within this context, the work approaches activism not
        through confrontation, but through openness, proposing vulnerability and
        emotional expression as a condition for social transformation.
      </p>
    </>
  ),
  info: [
    {
      header: 'Tools',
      list: ['React', 'Three.js', 'R3F', 'Superbase', 'GLSL'],
    },
    {
      header: 'Type',
      list: [
        'Interactive Installation',
        <a
          className="underline"
          href="https://radicaltenderness.ramsessalas.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website &#8594;
        </a>,
      ],
    },
  ],
  content: <RadicalTenderness />,
  credits: [
    <>
      <a className="underline" href="https://www.instagram.com/p/DUdH-tWjHGB/">
        Songs of Uprising
      </a>{' '}
      at{' '}
      <a
        className="underline"
        href="https://pandora-berlin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pandora Art Gallery
      </a>
    </>,
    <>Concept, Design & Development / Ramses Salas</>,
  ],
}
