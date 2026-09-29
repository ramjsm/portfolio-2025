import { createContext } from 'react'

/**
 * An MDX document holds several regions that the page places in different
 * spots. The page renders the same document once per region, and only the
 * wrapper for the active region shows its children.
 *
 * Projects use `<Intro>`, `<Gallery>` and `<Credits>` (intro beside the info
 * column, gallery in the middle, credits at the bottom). Page documents use
 * the generic `<Section name="...">`.
 */
export type ProjectSection = 'intro' | 'gallery' | 'credits'
export type PageSection =
  | 'services'
  | 'lead'
  | 'intro'
  | 'exploration'
  | 'background'
export type ContentSection = ProjectSection | PageSection

export const SectionContext = createContext<ContentSection | null>(null)
