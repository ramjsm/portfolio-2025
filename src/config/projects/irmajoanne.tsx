import { Irmajoanne } from '../../views/Project/content/Irmajoanne'
import type { Project } from '../projects'

export const irmajoanne: Project = {
  slug: 'irmajoanne',
  category: 'web',
  title: 'Irma Joanne',
  isRecent: true,
  thumbnail: {
    src: '/projects/irmajoanne/thumbnail.webp',
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
        Irma Joanne is an interdisciplinary artist based in Rotterdam. Her work
        focuses on the human body and how we experience it through both physical
        and psychological states.
      </p>
      <p>
        This portfolio, built with React and Three.js, showcases her
        installations, performances, and collaborations across visual art,
        theater, and festivals.
      </p>
      <p>
        Irma works with plaster body casts and video projections to create
        life-sized figures that question what it means to live in a body. Her
        research looks at how the separation of body and mind in science and
        culture affects our sense of self.
      </p>
      <p>
        By freezing the body in material and layering it with moving images, she
        explores how people react to their own physical form.
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
