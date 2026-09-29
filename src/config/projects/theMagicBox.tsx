import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/the-magic-box/.

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
}
