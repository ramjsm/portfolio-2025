import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/soberania-creativa/.

export const soberaniaCreativa: Project = {
  slug: 'soberania-creativa',
  category: 'web',
  title: 'Soberania Creativa',
  featured: true,
  date: '2025',
  thumbnail: {
    src: '/projects/soberania-creativa/screenshot-0.webp',
    thresholdWhite: 1,
    thresholdGray: 0.6,
    mediaClass: 'brightness-60 contrast-115',
    labelClass: 'lg:top-3 lg:left-5 bottom-1 left-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/soberania-creativa/hero.webm',
    mediaClass: 'brightness-75 contrast-90',
    thresholdWhite: 0.3,
    thresholdGray: 0.3,
  },
}
