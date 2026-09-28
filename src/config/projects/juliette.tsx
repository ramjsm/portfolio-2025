import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/juliette/.

export const juliette: Project = {
  slug: 'juliette',
  category: 'installation',
  title: 'Juliette',
  featured: false,
  date: '2019',
  thumbnail: {
    src: '/projects/juliette/thumbnail.webp',
    thresholdWhite: 0.8,
    thresholdGray: 0.5,
    mediaClass: 'brightness-60 contrast-110',
    labelClass: 'label lg:top-3 lg:left-3 top-1 left-2',
    className: 'border-texture row-start-1 row-end-4 col-start-3 col-end-4',
    disableDialog: true,
  },
  hero: {
    src: '/projects/juliette/Juliette_hero_animation.webm',
    thresholdWhite: 0.2,
    thresholdGray: 0.2,
  },
  videoURL: 'https://vimeo.com/371266714',
}
