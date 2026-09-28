import { createContext } from 'react'

/**
 * A project's MDX document holds three regions that the page template places
 * in different spots (intro beside the info column, gallery in the middle,
 * credits at the bottom). The template renders the same document once per
 * region; the `<Intro>`, `<Gallery>` and `<Credits>` wrappers only render
 * their children when their region is the active one.
 */
export type ProjectSection = 'intro' | 'gallery' | 'credits'

export const SectionContext = createContext<ProjectSection | null>(null)
