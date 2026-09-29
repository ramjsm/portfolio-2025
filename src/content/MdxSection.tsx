import type { ComponentType } from 'react'
import type { MDXProps } from 'mdx/types'
import { mdxComponents } from './mdxComponents'
import { SectionContext, type ContentSection } from './sectionContext'

export function MdxSection({
  Content,
  section,
}: {
  Content: ComponentType<MDXProps>
  section: ContentSection
}) {
  return (
    <SectionContext.Provider value={section}>
      <Content components={mdxComponents} />
    </SectionContext.Provider>
  )
}
