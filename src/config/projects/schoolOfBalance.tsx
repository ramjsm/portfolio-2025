import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/school-of-balance/.

export const schoolOfBalance: Project = {
  slug: 'school-of-balance',
  category: 'web',
  title: 'The School of Balance',
  featured: true,
  date: '2025',
  thumbnail: {
    src: '/projects/school-of-balance/thumbnail.png',
    thresholdWhite: 0.8,
    thresholdGray: 0.3,
    mediaClass: 'brightness-70 contrast-110',
    labelClass: 'lg:top-3 lg:left-5 bottom-1 left-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/school-of-balance/hero.webm',
    thresholdWhite: 0.5,
    thresholdGray: 0.3,
  },
}
