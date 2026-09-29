import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/as-below-so-above/.

export const asBelowSoAbove: Project = {
  slug: 'as-below-so-above',
  category: 'installation',
  title: 'As Below So Above',
  featured: false,
  date: '2021',
  thumbnail: {
    src: '/projects/as-below-so-above/thumbnail.webp',
    thresholdWhite: 0.5,
    thresholdGray: 0.4,
    mediaClass: 'brightness-70 contrast-110',
    labelClass: 'label top-1 left-2 lg:top-3 lg:left-3',
    className: 'border-texture row-start-5 col-start-1 row-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/as-below-so-above/hero.webm',
    thresholdWhite: 0.4,
    thresholdGray: 0.4,
  },
  videoURL: 'https://vimeo.com/791477640',
}
