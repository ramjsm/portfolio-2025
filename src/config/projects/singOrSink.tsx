import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/sing-or-sink/.

export const singOrSink: Project = {
  slug: 'sing-or-sink',
  category: 'installation',
  title: 'Sing or Sink',
  featured: true,
  date: '2026-04-30',
  thumbnail: {
    src: '/projects/sing-or-sink/thumbnail.webp',
    thresholdWhite: 0.6,
    thresholdGray: 0.6,
    mediaClass: 'brightness-65 contrast-100',
    labelClass: 'label bottom-1 lg:bottom-3 left-2 lg:left-3',
    className: 'border-texture row-start-2 row-end-4 col-start-1 col-end-3',
    disableDialog: true,
  },
  videoURL: 'https://vimeo.com/1221304208',
  hero: {
    src: '/projects/sing-or-sink/hero.webm',
    thresholdWhite: 0.5,
    thresholdGray: 0.5,
  },
}
