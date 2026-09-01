import { schoolOfBalance } from './projects/schoolOfBalance'
import { theMagicBox } from './projects/theMagicBox'
import { juliette } from './projects/juliette'
import { synthara } from './projects/synthara'
import { asBelowSoAbove } from './projects/asBelowSoAbove'
import { invocation } from './projects/invocation'
import { soberaniaCreativa } from './projects/soberaniaCreativa'
import { irmajoanne } from './projects/irmajoanne'
import { zama } from './projects/zama'
import { radicalTenderness } from './projects/radicalTenderness'
import { thePostHumanShop } from './projects/thePostHumanShop'
import { singOrSink } from './projects/singOrSink'
import { organismus } from './projects/organismus'
import { theTimeMachine } from './projects/theTimeMachine'
import type { ReactNode } from 'react'
import { parseFlexibleDate, formatFlexibleDate } from '../utils/date'

export interface MediaAsset {
  src: string
  thresholdWhite: number
  thresholdGray: number
  mediaClass?: string
  disableDialog?: boolean
  videoURL?: string
}

export interface ThumbnailAsset extends MediaAsset {
  labelClass: string
  className: string
}

export interface InfoSection {
  header: string
  list: Array<string | ReactNode>
}

export type ProjectCategory = 'installation' | 'web'

export type ProjectsListFilter = 'all' | 'featured' | 'non-featured'

export interface Project {
  slug: string
  category: ProjectCategory
  title: string
  /**
   * Controls whether this project gets a hand-placed slot in the homepage
   * "Co-Creations" collage (see views/Home/Installations.tsx), which is a
   * fixed-coordinate grid with a limited number of slots. Non-featured
   * projects still appear in full on the /archive page.
   */
  featured: boolean
  /**
   * When this project was made / exhibited. Accepts a full ISO 8601 date
   * (e.g. "2023-06-15") or a year-only string (e.g. "2023") when the exact
   * date is unknown. Optional — projects without a date sort to the end of
   * the /archive listing.
   */
  date?: string
  thumbnail: ThumbnailAsset
  hero: MediaAsset
  videoURL?: string
  intro: ReactNode
  info: InfoSection[]
  content: ReactNode
  credits?: Array<ReactNode>
}

export const projectsList: Project[] = [
  theMagicBox,
  juliette,
  synthara,
  asBelowSoAbove,
  invocation,
  zama,
  schoolOfBalance,
  radicalTenderness,
  thePostHumanShop,
  singOrSink,
  organismus,
  theTimeMachine,
  soberaniaCreativa,
  irmajoanne,
]

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projectsList.filter((project) => project.category === category)

export const getProjectCategoryLabel = (category: ProjectCategory): string => {
  switch (category) {
    case 'installation':
      return 'Installation'
    case 'web':
      return 'Web'
    default:
      return 'Undefined'
  }
}

/** Comparable timestamp for sorting; undated projects sort last. */
export const getProjectTimestamp = (project: Project): number =>
  project.date ? parseFlexibleDate(project.date) : Number.NEGATIVE_INFINITY

export const formatProjectDate = formatFlexibleDate

/** All projects sorted by date, most recent first; undated projects last. */
export const getProjectsSortedByDate = (): Project[] =>
  [...projectsList].sort(
    (a, b) => getProjectTimestamp(b) - getProjectTimestamp(a)
  )

export const getProjectBySlug = (slug: string): Project | undefined =>
  projectsList.find((project) => project.slug === slug)

export const getNextProjectBySlug = (
  slug: string,
  projectsFilter: ProjectsListFilter
): Project | undefined => {
  const filteredProjects = getFilteredProjects(projectsFilter)
  const currentIndex = filteredProjects.findIndex(
    (project) => project.slug === slug
  )
  console.log(filteredProjects)
  console.log(currentIndex)
  if (currentIndex === -1) return undefined
  if (currentIndex + 1 < filteredProjects.length)
    return filteredProjects[currentIndex + 1]
  return filteredProjects[0]
}

export const getPreviousProjectBySlug = (
  slug: string,
  projectsFilter: ProjectsListFilter
): Project | undefined => {
  const filteredProjects = getFilteredProjects(projectsFilter)
  const currentIndex = filteredProjects.findIndex(
    (project) => project.slug === slug
  )
  if (currentIndex === -1) return undefined
  if (currentIndex - 1 >= 0) return filteredProjects[currentIndex - 1]
  return filteredProjects[projectsList.length - 1]
}

export const getFeaturedProjectByDate = (): Project[] =>
  getProjectsSortedByDate().filter((project) => project.featured)

export const getFilteredProjects = (filter: ProjectsListFilter) => {
  switch (filter) {
    case 'featured':
      return getProjectsSortedByDate().filter((project) => project.featured)
    case 'non-featured':
      return getProjectsSortedByDate().filter((project) => !project.featured)
    default:
      return getProjectsSortedByDate()
  }
}

export const isProjectsListFilter = (
  value: string | null
): value is ProjectsListFilter => {
  return value === 'all' || value === 'featured' || value === 'non-featured'
}
