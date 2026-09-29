import type { Project } from '../projects'

// Copy, info, credits and gallery layout live in content/projects/radical-tenderness/.

export const radicalTenderness: Project = {
  slug: 'radical-tenderness',
  category: 'installation',
  title: 'Radical Tenderness',
  featured: false,
  date: '2026-02-08',
  thumbnail: {
    src: '/projects/radical-tenderness/screenshot-0.webp',
    thresholdWhite: 0.15,
    thresholdGray: 0.15,
    mediaClass: 'brightness-70 contrast-110',
    labelClass: 'lg:top-3 lg:left-5 bottom-1 left-2',
    className: 'border-texture row-start-5 col-span-2',
    disableDialog: true,
  },
  hero: {
    src: '/projects/radical-tenderness/hero.webm',
    thresholdWhite: 0.25,
    thresholdGray: 0.25,
  },
}
