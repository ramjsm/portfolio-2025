/**
 * Static content for the About page: published research and the
 * experience / training / residencies timelines. Kept here (rather than
 * inline in the views) to match the `events` / `projects` config pattern.
 */

export interface Publication {
  slug: string
  title: string
  /**
   * Publication date as a year (e.g. "2016") or year-month
   * (e.g. "2016-10"). Rendered via `formatPublicationDate`.
   */
  date: string
  link?: string
}

export interface TimelineEntry {
  slug: string
  /** Role / title, e.g. "Researcher, Natural Computing Department". */
  role: string
  /** Institution or company, e.g. "Polytechnic University of Madrid". */
  organization: string
  /** First year of the entry. Omit when unknown. */
  start?: number
  /** Last year of the entry. Omit when unknown. */
  end?: number
  /** Optional URL, e.g. a course page or event listing. */
  link?: string
  /**
   * Individually-linkable sub-items rendered inline after `role` (e.g.
   * several workshops grouped under one entry). Mutually exclusive with `link`.
   */
  subLinks?: { label: string; url?: string }[]
}

/** Formats "2016" / "2016-10" for display, e.g. "Oct 2016". */
export function formatPublicationDate(
  date: string,
  locale: string = 'en-US'
): string {
  const [year, month] = date.split('-')
  if (!month) return year
  return new Date(Number(year), Number(month) - 1).toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  })
}

/** Formats an entry's years as a period label, e.g. "2015–2017". */
export function formatPeriod({
  start,
  end,
}: Pick<TimelineEntry, 'start' | 'end'>): string {
  if (start && end) return start === end ? `${end}` : `${start}–${end}`
  return `${start ?? end ?? '—'}`
}

export const publicationsList: Publication[] = [
  {
    slug: 'eye-evolution-simulation',
    title:
      'Eye Evolution Simulation with a Genetic Algorithm Based on the Hypothesis of Nilsson and Pelger',
    date: '2017-12',
    link: 'http://www.foibg.com/ijita/vol24/ijita24-03-p02.pdf',
  },
  {
    slug: 'towards-dawkins-genetic-algorithm',
    title:
      "Towards a Dawkins' Genetic Algorithm: Transforming an Interactive Evolutionary Algorithm into a Genetic Algorithm",
    date: '2016-10',
    link: 'http://www.foibg.com/ijitk/ijitk-vol10/ijitk10-03-p03.pdf',
  },
  {
    slug: 'evolutionary-synthesis-qca-circuits',
    title:
      'Evolutionary Synthesis of QCA Circuits: A Critique of Evolutionary Search Methods Based on the Hamming Oracle',
    date: '2016-10',
    link: 'http://www.foibg.com/ijitk/ijitk-vol10/ijitk10-03-p01.pdf',
  },
]

/** Reverse-chronological; entries without dates are listed last. */
export const experienceList: TimelineEntry[] = [
  {
    slug: 'plan-a-engineering',
    role: 'Senior Frontend Developer, Frontend Technical Lead & Engineering Manager',
    organization: 'Plan A',
    start: 2021,
    end: 2024,
  },
  {
    slug: 'charly-education',
    role: 'Frontend Developer, Frontend Lead Engineer',
    organization: 'Charly Education',
    start: 2019,
    end: 2021,
  },
  {
    slug: 'blindside-fullstack',
    role: 'Fullstack Developer',
    organization: 'Blindside',
    start: 2018,
    end: 2019,
  },
  {
    slug: 'nit-organizing-committee',
    role: 'Member, NIT Organizing Committee',
    organization:
      'Natural Information Technologies VII & VIII International Conference',
    start: 2016,
    end: 2017,
  },
  {
    slug: 'dance-technology-laboratory',
    role: 'Member, Dance and Technology Laboratory',
    organization: 'Universidad Carlos III de Madrid',
    start: 2016,
    end: 2017,
  },
  {
    slug: 'natural-computing-researcher',
    role: 'Researcher, Natural Computing Department',
    organization: 'Polytechnic University of Madrid',
    start: 2015,
    end: 2017,
  },
  {
    slug: 'upm-junior-web-android-developer',
    role: 'Junior Web and Android Developer (Internship, concurrent with research)',
    organization: 'Polytechnic University of Madrid',
    start: 2015,
    end: 2017,
  },
]

/** Reverse-chronological; entries without dates are listed last. */
export const trainingList: TimelineEntry[] = [
  {
    slug: 'scripting-sound-live-coding',
    role: 'Scripting Sound: Artistic Practices in Live Coding',
    organization: 'MotionLab.Berlin',
    start: 2025,
    end: 2025,
    link: 'https://berlinnewmediaweek.com/en/program-schedule/alexandra-cardenas-scripting-sound-artistic-practices-in-live-coding',
  },
  {
    slug: 'advanced-prototyping-awwwards',
    role: 'Advanced Prototyping: From Early Ideas to Rich Interactions',
    organization: 'Awwwards Academy',
    start: 2025,
    end: 2025,
    link: 'https://www.awwwards.com/academy/course/advanced-prototyping-from-early-ideas-to-rich-interactions',
  },
  {
    slug: 'visual-noise-school-of-machines',
    role: 'Visualizing Noise',
    organization: 'School of Machines, Making & Make-Believe',
    start: 2025,
    end: 2025,
    link: 'https://www.instagram.com/p/DUnrBH0FNxB/',
  },
  {
    slug: 'threejs-journey',
    role: 'Three.js Course',
    organization: 'Three.js Journey',
    start: 2024,
    end: 2025,
    link: 'https://threejs-journey.com/lessons/introduction#'
  },
  {
    slug: 'figd-3d-specialist',
    role: '3D Specialist: 3D-Design, Modeling & Rendering',
    organization: 'FIGD Fachinstitut für Informatik und Grafikdesign',
    start: 2025,
    end: 2025,
    link: 'https://www.figd-akademie.de/visual-artist-3d-specialist/'
  },
  {
    slug: 'creative-coding-2-domestika',
    role: 'Creative Coding 2.0 in JS: Animation, Sound & Color',
    organization: 'Domestika',
    start: 2024,
    end: 2024,
    link: 'https://www.domestika.org/en/courses/3862-creative-coding-2-0-in-js-animation-sound-color',
  },
  {
    slug: 'motionlab-fabrication-workshops',
    role: 'Fabrication Workshops',
    organization: 'MotionLab.Berlin',
    start: 2024,
    end: 2024,
    subLinks: [
      {
        label: 'Laser Cutting & Engraving',
        url: 'https://www.eventbrite.com/e/workshop-introduction-to-laser-cutting-and-engraving-tickets-344635563247',
      },
      { label: '3-Axis CNC Machining',
        url: 'https://www.eventbrite.com/e/workshop-introduction-to-3-axis-cnc-machining-tickets-671318410437?aff=eemailordconf&ref=eemailordconf&utm_campaign=order_confirm&utm_medium=email&utm_source=eventbrite&utm_term=viewevent',
       },
      { label: '3D Printing (FDM & SLA)',
        url: 'https://www.eventbrite.com/e/workshop-introduction-to-3d-printing-with-fdm-sla-technology-tickets-637955049727',
       },
      { label: 'Würth Elektronik-Lab',
        url: 'https://www.eventbrite.com/e/intro-to-the-wurth-elektronik-lab-tickets-949795994387',
       },
      { label: 'Wood Lab',
        url: 'https://www.eventbrite.com/e/workshop-introduction-to-wood-lab-tickets-637952241327?utm_source=eventbrite&utm_medium=email&utm_campaign=reminder_attendees_48hour_email&utm_term=eventname&ref=eemaileventremind',
       },
    ],
  },
  {
    slug: 'uc3m-computer-science',
    role: "Bachelor's Degree in Computer Science and Engineering",
    organization: 'Universidad Carlos III de Madrid',
    start: 2011,
    end: 2017,
    link: 'https://www.uc3m.es/bachelor-degree/computer-science',
  },
]

/** Reverse-chronological; entries without dates are listed last. */
export const residenciesList: TimelineEntry[] = [
  {
    slug: 'experimental-commons-residency',
    role: 'Working Residency — Sing or Sink',
    organization: 'Experimental Commons (CCCBerlin × A MAZE.)',
    start: 2026,
    end: 2026,
  },
  {
    slug: 'art-space-in-exile-hotel-continental',
    role: 'Artist Residency — The Post Human Shop',
    organization: 'Art Space in Exile · Hotel Continental',
    start: 2026,
    end: 2026,
  },
]
