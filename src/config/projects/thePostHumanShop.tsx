import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/the-post-human-shop/.

export const thePostHumanShop: Project = {
  slug: 'the-post-human-shop',
  category: 'installation',
  title: 'The Post Human Shop',
  featured: true,
  date: '2026-02-18',
  thumbnail: {
    src: '/projects/the-post-human-shop/thumbnail.webp',
    thresholdWhite: 0.26,
    thresholdGray: 0.26,
    mediaClass: 'brightness-70 contrast-110',
    labelClass: 'label top-1 left-2 lg:top-3 lg:left-3',
    className: 'border-texture row-start-5 col-start-1 row-span-2',
    disableDialog: true,
  },
  videoURL: 'https://vimeo.com/1221764974',
  hero: {
    src: '/projects/the-post-human-shop/hero.webm',
    thresholdWhite: 0.3,
    thresholdGray: 0.3,
  },
}
