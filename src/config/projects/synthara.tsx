import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/synthara/.

export const synthara: Project = {
  slug: 'synthara',
  category: 'installation',
  title: 'Synthara',
  featured: true,
  date: '2023',
  thumbnail: {
    src: '/projects/synthara/thumbnail.webp',
    thresholdWhite: 0.6,
    thresholdGray: 0.4,
    mediaClass: 'brightness-90 contrast-110',
    labelClass: 'label top-[20%] lg:right-4 right-2',
    className: 'row-start-3 row-end-5 col-start-1 col-end-4',
    disableDialog: true,
  },
  hero: {
    src: '/projects/synthara/hero.webm',
    thresholdWhite: 0.25,
    thresholdGray: 0.25,
  },
  videoURL: 'https://vimeo.com/864873849',
}
