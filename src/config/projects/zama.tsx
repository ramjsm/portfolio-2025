import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/zama/.

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
}
