import { Juliette } from '../../views/Project/content/Juliette'
import type { Project } from '../projects'

export const juliette: Project = {
  slug: 'juliette',
  category: 'installation',
  title: 'Juliette',
  isRecent: true,
  thumbnail: {
    src: '/projects/juliette/thumbnail.webp',
    thresholdWhite: 0.8,
    thresholdGray: 0.5,
    mediaClass: 'brightness-60 contrast-110',
    labelClass: 'label lg:top-3 lg:left-3 top-1 left-2',
    className: 'border-texture row-start-1 row-end-4 col-start-3 col-end-4',
    disableDialog: true,
  },
  hero: {
    src: '/projects/juliette/Juliette_hero_animation.webm',
    thresholdWhite: 0.2,
    thresholdGray: 0.2,
  },
  videoURL: 'https://vimeo.com/371266714',
  intro: (
    <>
      <p>
        Juliette is a biomorphic art installation that explores what it means
        to be an object of desire. Combining sculpture, projection, and motion
        tracking, Juliette responds in real time to the presence of viewers.
      </p>
      <p>
        As people come closer, her reactions intensify; she breathes, moans,
        and eventually reaches climax, but only when someone is near enough.
        This dependency on closeness turns desire into something physical and
        interactive.
      </p>
      <p>
        Created in collaboration with{' '}
        <a
          className="underline"
          href="https://www.iriadocastelo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iria do Castelo
        </a>
        , who sculpted her bodily form, Juliette comes alive through Unity and
        real-time motion sensors.
      </p>
      <p>
        Juliette may be an object, but she cannot climax alone. She needs to
        be seen, approached, felt. Her pleasure depends on others, exposing
        the vulnerability beneath objectification and the longing for
        recognition at the heart of desire.
      </p>
    </>
  ),
  info: [
    {
      header: 'Artist',
      list: [
        <a
          className="underline"
          href="https://www.iriadocastelo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iria do Castelo
        </a>,
      ],
    },
    { header: 'Tech', list: ['Unity', 'NVIDIA FleX', 'C#'] },
    { header: 'Type', list: ['Interactive Installation'] },
  ],
  content: <Juliette />,
  credits: [
    <>
      <a
        href="https://somos-arts.org/un_real-desires-group-exhibition/"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Un_Real Desires 2019
      </a>{' '}
      at{' '}
      <a
        href="https://somos-arts.org/"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        SomoS Art House Berlin
      </a>
    </>,
    <>
      Concept & Sculpture /{' '}
      <a
        className="underline"
        href="https://www.iriadocastelo.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Iria do Castelo
      </a>
    </>,
    <>
      Interaction Design, Projection Mapping & Generative Visuals / Ramses
      Salas
    </>,
  ],
}
