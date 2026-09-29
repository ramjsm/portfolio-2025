import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/organismus/.

export const organismus: Project = {
  slug: 'organismus',
  category: 'installation',
  title: 'Organismus',
  featured: true,
  date: '2026-04-23',
  thumbnail: {
    src: '/projects/organismus/screenshot-9.webp',
    thresholdWhite: 0.4,
    thresholdGray: 0.3,
    mediaClass: 'brightness-60 contrast-110',
    labelClass: 'label lg:top-3 lg:left-3 top-1 left-2',
    className: 'border-texture row-start-1 row-end-4 col-start-3 col-end-4',
    disableDialog: true,
  },
  hero: {
    src: '/projects/organismus/hero.webm',
    thresholdWhite: 0.4,
    thresholdGray: 0.3,
  },
  videoURL: 'https://vimeo.com/1221778907',
}
