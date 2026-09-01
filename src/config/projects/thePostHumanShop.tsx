import { ThePostHumanShop } from '../../views/Project/content/ThePostHumanShop'
import type { Project } from '../projects'

export const thePostHumanShop: Project = {
  slug: 'the-post-human-shop',
  category: 'installation',
  title: 'The Post Human Shop',
  featured: false,
  date: '2026-02-18',
  thumbnail: {
    src: '/projects/the-post-human-shop/screenshot-1.webp',
    thresholdWhite: 0.1,
    thresholdGray: 0.1,
    mediaClass: 'brightness-70 contrast-110',
    labelClass: 'lg:top-3 lg:left-5 bottom-1 left-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  videoURL: 'https://vimeo.com/1221764974',
  hero: {
    src: '/projects/the-post-human-shop/hero.webm',
    thresholdWhite: 0.3,
    thresholdGray: 0.3,
  },
  intro: (
    <>
      <p>
        {' '}
        <em>The Post Human Shop</em> is a speculative biotech shop presented
        through both a physical exhibition and an online platform. Promising to
        “transcend biological limitations”, it offers visitors the possibility
        of transforming the human body through a range of imagined genetic
        modifications.{' '}
      </p>

      <p>
        {' '}
        The website provides the entry point into the fictional shop, where
        visitors browse AI-generated mutations, select a desired transformation,
        and book an appointment for a physical scan. The exhibition continues
        this process in space, materializing the shop's products through
        sculptures and extending its world through interactive works and
        performances.{' '}
      </p>

      <p>
        {' '}
        The project explores the intersections of posthumanism, capitalism, and
        the human body through digital experimentation, interactive media, and
        material transformation.{' '}
      </p>
      <p>
        {' '}
        <em>The Post Human Shop</em> was conceptualized and developed by the
        team within the{' '}
        <a className="underline" href="https://www.instagram.com/54artsquat/">
          54H Art Squat
        </a>{' '}
        art creation rave and awarded a week long residency in 2026 to further
        develop the project. The work was presented during{' '}
        <a
          className="underline"
          href="https://www.instagram.com/p/DO6R3EODFWS/"
        >
          Myths of Tomorrow
        </a>{' '}
        and{' '}
        <a
          className="underline"
          href="https://www.instagram.com/p/DTIhNZeDdHl/"
        >
          Vorspiel 2026
        </a>{' '}
        .
      </p>
    </>
  ),
  info: [
    {
      header: 'Team',
      list: [
        <a
          className="underline"
          href="https://www.instagram.com/alekunstler/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alejandra Kunstler
        </a>,
        <a
          className="underline"
          href="https://linktr.ee/jeanflexing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jean-Flex
        </a>,

        <a
          className="underline"
          href="https://www.instagram.com/pedrozarapt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedro Carapeto
        </a>,
      ],
    },
    {
      header: 'Tools',
      list: ['TouchDesigner', 'Kinect', 'React', 'After Effects', 'Midjourney'],
    },
    {
      header: 'Type',
      list: ['Exhibition'],
    },
    {
      header: 'Links',
      list: [
        <a
          className="underline"
          href="https://posthumanshop.ramsessalas.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website &#8594;
        </a>,
      ],
    },
  ],
  content: <ThePostHumanShop />,
  credits: [
    <>
      <a
        className="underline"
        href="https://www.instagram.com/alekunstler/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Myths of Tomorrow
      </a>{' '}
      &{' '}
      <a
        className="underline"
        href="https://www.instagram.com/alekunstler/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vorspiel 2026
      </a>{' '}
    </>,
    <>
      at{' '}
      <a
        className="underline"
        href="https://www.instagram.com/alekunstler/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Art Space in Exile - Hotel Continental
      </a>
    </>,
    <>
      Store Manager, Dancer & Performance /{' '}
      <a
        className="underline"
        href="https://www.instagram.com/alekunstler/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alejandra Kunstler
      </a>
    </>,
    <>
      Sound Design & Performance /{' '}
      <a
        className="underline"
        href="https://linktr.ee/jeanflexing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jean-Flex
      </a>
    </>,
    <>
      Material Experimentantion & Sculptures /{' '}
      <a
        className="underline"
        href="https://www.instagram.com/pedrozarapt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pedro Carapeto
      </a>
    </>,
    <>Interactive Installation, Visuals & Website / Ramses Salas</>,
  ],
}
