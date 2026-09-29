import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/the-time-machine/.

export const theTimeMachine: Project = {
  slug: 'the-time-machine',
  category: 'installation',
  title: 'The Time Machine',
  featured: true,
  date: '2026-06-27',
  thumbnail: {
    src: '/projects/the-time-machine/thumbnail.webp',
    thresholdWhite: 0.15,
    thresholdGray: 0.15,
    mediaClass: 'brightness-90 contrast-110',
    labelClass: 'label bottom-2 left-1 lg:bottom-3 lg:left-3',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/the-time-machine/hero.webm',
    thresholdWhite: 0.2,
    thresholdGray: 0.2,
  },
  videoURL: 'https://vimeo.com/1222051604',
}
