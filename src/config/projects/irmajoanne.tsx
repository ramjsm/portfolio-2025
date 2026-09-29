import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/irmajoanne/.

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
}
