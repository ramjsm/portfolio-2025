import { Juliette } from '../../views/Project/content/Juliette'
import type { Project } from '../projects'

export const juliette: Project = {
  slug: 'juliette',
  category: 'installation',
  title: 'Juliette',
  featured: false,
  date: '2019',
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
        {' '}
        <em>Juliette</em> is a biomorphic interactive installation exploring the
        tension between desire, dependency, and physical proximity. Combining
        sculpture, projection mapping, and motion tracking, she responds in real
        time to the presence of visitors.{' '}
      </p>

      <p>
        {' '}
        By presenting desire through an abstract, uncanny body, the installation
        plays with the boundary between body and object, attraction and
        discomfort.{' '}
      </p>

      <p>
        {' '}
        Juliette's desire belongs to her, but she cannot fulfil it alone. This
        dependence creates a tension between autonomy and the need for another,
        making physical proximity part of the experience of pleasure.{' '}
      </p>

      <p>
        {' '}
        The installation was created in collaboration with{' '}
        <a
          className="underline"
          href="https://www.iriadocastelo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iria do Castelo
        </a>
        , combining her sculptural work with interactive and technological
        elements developed for the piece. Built in Unity, it uses projection
        mapping and real-time motion tracking, and was presented at{' '}
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
          className="underline"
          href="https://somos-arts.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SomoS Art House Berlin
        </a>{' '}
        in 2019.{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'team',
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
    { header: 'Tools', list: ['Unity', 'Kinect', 'NVIDIA FleX', 'C#'] },
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
      Interaction Design, Projection Mapping & Generative Visuals / Ramses Salas
    </>,
  ],
}
