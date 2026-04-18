export interface Event {
  slug: string
  title: string
  /**
   * Either a full ISO 8601 date (e.g. "2026-05-12") or a year-only string
   * (e.g. "2023") when exact dates are unknown.
   */
  date: string
  /**
   * Optional start time (and optional range) in 24h format, e.g. "19:00"
   * or "19:00 – 22:00". Rendered under the date when present.
   */
  time?: string
  /** City / country, e.g. "Berlin, DE". */
  location?: string
  /** Specific venue / space name, e.g. "Hotel Continental". */
  venue?: string
  link?: string
}

export const eventsList: Event[] = [
  {
    slug: 'organism-sehsuechte-2026-04-23',
    title: 'Organism',
    date: '2026-04-23',
    time: '20:30 – 21:30',
    location: 'Potsdam, DE',
    venue: 'Sehsüchte Festival',
    link: 'https://sehsuechte.de/en/programme/projection-mapping-thursday/',
  },
  {
    slug: 'experimental-commons-2026-04-30',
    title: 'Experimental Commons | Residency Showcase',
    date: '2026-04-30',
    time: '14:00 – 15:00',
    location: 'Berlin, DE',
    venue: 'CCCberlin × A MAZE.',
    link: 'https://www.instagram.com/p/DXKYLtNijKE/',
  },
  // Past events sourced from the About page "Participations" list.
  {
    slug: 'posthuman-shop-2026',
    title: 'Posthuman Shop — Vorspiel 2026',
    date: '2026',
    location: 'Berlin, DE',
    venue: 'Hotel Continental — Art Space in Exile',
    link: 'https://www.instagram.com/p/DTIhNZeDdHl/?hl=en',
  },
  {
    slug: 'radical-tenderness-2026',
    title: 'Radical Tenderness',
    venue: 'Supersoft WTF',
    location: 'Berlin, DE',
    date: '2026',
    link: 'https://www.instagram.com/p/DUdH-tWjHGB/',
  },
  {
    slug: 'myths-of-tomorrow-2025',
    title: 'Myths of Tomorrow — Award project',
    date: '2025',
    venue: 'Hotel Continental - Art Space in Exile',
    location: 'Berlin, DE',
    link: 'https://www.instagram.com/p/DPCVxdIjIAN/?img_index=5',
  },
  {
    slug: 'acid-reflux-2024',
    title: 'Acid Reflux — Series Parties Visuals',
    date: '2024',
    venue: 'ACID REFLUX',
    location: 'Berlin, DE',
    link: 'https://www.instagram.com/p/C_lHBO1t_Yd/?hl=en',
  },
  {
    slug: 'raw-skpz-open-studios-2023',
    title: 'Open Studios',
    venue: 'RAW SKPZ ',
    location: 'Berlin, DE',
    date: '2023',
    link: 'https://www.instagram.com/raw_skpz/',
  },
  {
    slug: 'paula-fraile-open-studios-2023',
    title: 'Open Studios',
    venue: 'Studios Illux',
    location: 'Leipzig, DE',
    date: '2023',
    link: 'https://www.instagram.com/stories/highlights/18053552674947801/?hl=en',
  },
  {
    slug: 'synthara-conscious-madness-2023',
    title: 'Synthara',
    date: '2023',
    venue: 'Conscious Madness Festival',
    location: 'Brandenburg, DE',
    link: 'https://www.instagram.com/p/CvuVcOmM4dp/?img_index=3',
  },
  {
    slug: 'as-below-so-above-willow-2020',
    title: 'As Below So Above',
    date: '2020',
    venue: 'Willow Gallery',
    location: 'Berlin, DE',
    link: 'https://www.instagram.com/p/CW565AIM1VW/?hl=en',
  },
  {
    slug: 'juliette-un-real-desires-2019',
    title: 'Juliette — Un_Real Desires',
    date: '2019',
    location: 'Berlin, DE',
    venue: 'SomoS Art House',
    link: 'https://somos-arts.org/un_real-desires-group-exhibition/',
  },
  {
    slug: 'tracking-injuve-2018',
    title: 'Tracking — INJUVE',
    date: '2018',
    location: 'León, ES',
    venue: 'Universidad de León',
    link: 'https://actividadesculturales.unileon.es/123',
  },
  {
    slug: 'tracking-danzamos-2017',
    title: 'Tracking — Festival Internacional Danzamos',
    date: '2017',
    location: 'Madrid, ES',
    venue: 'Centro Cultural Conde Duque',
    link: 'https://www.facebook.com/auladelasartes.uc3m/videos/el-pasado-viernes-nuestro-compa%C3%B1ero-alfredo-miralles-benito-present%C3%B3-la-pieza-so/1657182337638908/',
  },
]

/**
 * Returns a comparable Date for an event, treating year-only entries as
 * January 1st of that year.
 */
export const getEventTimestamp = (date: string): number => {
  if (/^\d{4}$/.test(date)) return new Date(`${date}-01-01T00:00:00Z`).getTime()
  return new Date(date).getTime()
}

export const getUpcomingEvents = (now: Date = new Date()): Event[] =>
  eventsList
    .filter((event) => getEventTimestamp(event.date) >= now.getTime())
    .sort((a, b) => getEventTimestamp(a.date) - getEventTimestamp(b.date))

export const getPastEvents = (now: Date = new Date()): Event[] =>
  eventsList
    .filter((event) => getEventTimestamp(event.date) < now.getTime())
    .sort((a, b) => getEventTimestamp(b.date) - getEventTimestamp(a.date))

export const formatEventDate = (
  date: string,
  locale: string = 'en-US'
): string => {
  if (/^\d{4}$/.test(date)) return date
  const d = new Date(date)
  return d.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
