import { Irmajoanne } from '../../views/Project/content/Irmajoanne'
import type { Project } from '../projects'

export const irmajoanne: Project = {
  slug: 'irmajoanne',
  category: 'web',
  title: 'Irma Joanne',
  featured: true,
  date: '2020',
  thumbnail: {
    src: '/projects/irmajoanne/screenshot-0.webp',
    thresholdWhite: 0.8,
    thresholdGray: 0.2,
    mediaClass: 'brightness-60 contrast-100',
    labelClass: 'lg:top-3 lg:right-5 bottom-1 right-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/irmajoanne/hero.webm',
    thresholdWhite: 0.25,
    thresholdGray: 0.25,
  },
  intro: (
    <>
      <p>
        {' '}
        <em>Irma Joanne</em> is a digital portfolio bringing together the
        interdisciplinary artist's work across installations, performances, and
        collaborations in visual art, theatre, and festivals. Her practice
        explores the consciousness of the human body, often through plaster body
        masks, video-objects, and installations. The website brings these
        material and physical qualities into a digital space.{' '}
      </p>

      <p>
        {' '}
        The design places her photography at the centre of the experience,
        extending the feeling of her physical installations into a modern,
        futuristic environment somewhere between a digital laboratory and an
        exhibition space.{' '}
      </p>

      <p>
        {' '}
        The site was designed in Figma and developed with React Three Fiber and
        GLSL, using custom shader effects to alter the photographs as visitors
        navigate through the projects.{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'Client',
      list: [
        <a
          className="underline"
          href="https://www.instagram.com/xuehka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Irma Joanne
        </a>,
      ],
    },
    { header: 'Tools', list: ['Figma', 'React', 'Three.js', 'Contentful CMS'] },
    {
      header: 'Type',
      list: [
        'Website',
        <a
          className="underline"
          href="https://www.irmajoanne.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website &#8594;
        </a>,
      ],
    },
  ],
  content: <Irmajoanne />,
  credits: [
    <>
      Photography /{' '}
      <a
        className="underline"
        href="https://www.instagram.com/xuehka"
        target="_blank"
        rel="noopener noreferrer"
      >
        Irma Joanne
      </a>
    </>,
    <>Web Design & Development / Ramses Salas </>,
  ],
}
