import { Zama } from '../../views/Project/content/Zama'
import type { Project } from '../projects'

export const zama: Project = {
  slug: 'zama',
  category: 'web',
  title: 'Zama',
  featured: true,
  date: '2026',
  thumbnail: {
    src: '/projects/zama/screenshot-0.webp',
    thresholdWhite: 1,
    thresholdGray: 0.6,
    mediaClass: 'brightness-60 contrast-115',
    labelClass: 'lg:top-3 lg:left-5 bottom-1 left-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/zama/hero.webm',
    mediaClass: 'brightness-100 contrast-90',
    thresholdWhite: 1,
    thresholdGray: 0.7,
  },
  intro: (
    <>
      <p>
        {' '}
        <em>Zama</em> is a digital portfolio developed for artist{' '}
        <a
          className="underline"
          href="https://www.instagram.com/zama.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zama
        </a>
        , bringing together her work across tattooing, painting, and
        performance. The site translates her practice into a digital space
        through a visual language shaped by gesture, materiality, and
        imperfection.{' '}
      </p>

      <p>
        {' '}
        The project grew from a series of conversations and sessions exploring
        her practice and how it could translate into a digital space. Ideas
        around beauty, imperfection, and vulnerability led to a raw, minimal,
        and handmade visual language influenced by wabi-sabi and organic forms.
        Strokes and gestures drawn from her tattooing and painting become part
        of the site's visual language, appearing as transitions between
        different parts of her practice.{' '}
      </p>

      <p>
        {' '}
        The site was designed in Figma and developed with Next.js, using GSAP
        for animations and interactions. Visual elements were created in After
        Effects and integrated into the site.{' '}
      </p>
    </>
  ),
  info: [
    {
      header: 'Client',
      list: [
        <a
          className="underline"
          href="https://www.instagram.com/zama.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zama
        </a>,
      ],
    },
    { header: 'Tools', list: ['Next.js', 'GSAP', 'After Effects', 'Figma'] },
    {
      header: 'Type',
      list: [
        'Website',
        <a
          className="underline"
          href="https://www.aboutzama.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website &#8594;
        </a>,
      ],
    },
  ],
  content: <Zama />,
  credits: [<>Web Design & Development / Ramses Salas </>],
}
