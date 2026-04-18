import { theMagicBox } from './projects/theMagicBox'
import { juliette } from './projects/juliette'
import { synthara } from './projects/synthara'
import { asBelowSoAbove } from './projects/asBelowSoAbove'
import { invocation } from './projects/invocation'
import { soberaniaCreativa } from './projects/soberaniaCreativa'
import { irmajoanne } from './projects/irmajoanne'
import type { ReactNode } from 'react'
import { zama } from './projects/zama'

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

export type ProjectCategory = 'cocreation' | 'client'

export interface Project {
  slug: string
  category: ProjectCategory
  title: string
  isRecent: boolean
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
  soberaniaCreativa,
  irmajoanne,
]

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projectsList.filter((project) => project.category === category)

export const getProjectCategoryLabel = (category: ProjectCategory): string => {
  switch (category) {
    case 'cocreation':
      return 'Co-Creation'
    case 'client':
      return 'Client Work'
    default:
      return 'Undefined'
  }
}

export const getProjectBySlug = (slug: string): Project | undefined =>
  projectsList.find((project) => project.slug === slug)

export const getNextProjectBySlug = (slug: string): Project | undefined => {
  const currentIndex = projectsList.findIndex(
    (project) => project.slug === slug
  )
  if (currentIndex === -1) return undefined
  if (currentIndex + 1 < projectsList.length)
    return projectsList[currentIndex + 1]
  return projectsList[0]
}

export const getPreviousProjectBySlug = (slug: string): Project | undefined => {
  const currentIndex = projectsList.findIndex(
    (project) => project.slug === slug
  )
  if (currentIndex === -1) return undefined
  if (currentIndex - 1 >= 0) return projectsList[currentIndex - 1]
  return projectsList[projectsList.length - 1]
}
