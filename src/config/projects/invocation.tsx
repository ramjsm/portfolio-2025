import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/invocation/.

export const invocation: Project = {
  slug: 'invocation',
  category: 'installation',
  title: 'Invocation',
  featured: false,
  date: '2020',
  thumbnail: {
    src: '/projects/invocation/thumbnail.webp',
    thresholdWhite: 0.16,
    thresholdGray: 0.8,
    mediaClass: 'brightness-90 contrast-110',
    labelClass: 'label bottom-2 left-1 lg:bottom-3 lg:left-3',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/invocation/invocation_hero_animation.webm',
    thresholdWhite: 0.2,
    thresholdGray: 0.2,
  },
  videoURL: 'https://vimeo.com/377457311',
}
