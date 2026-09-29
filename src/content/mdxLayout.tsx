import { useContext } from 'react'
import type { ReactNode } from 'react'
import { SectionContext, type ContentSection } from './sectionContext'

type Children = { children?: ReactNode }

function SectionSlot({ name, children }: Children & { name: ContentSection }) {
  const active = useContext(SectionContext)
  return active === name ? <>{children}</> : null
}

/** Generic region for page documents: `<Section name="lead">…</Section>`. */
export const Section = ({
  name,
  children,
}: Children & { name: ContentSection }) => (
  <SectionSlot name={name}>{children}</SectionSlot>
)

export const Intro = ({ children }: Children) => (
  <SectionSlot name="intro">{children}</SectionSlot>
)

export const Gallery = ({ children }: Children) => (
  <SectionSlot name="gallery">
    <div className="mx-auto flex flex-col gap-2">{children}</div>
  </SectionSlot>
)

export const Credits = ({ children }: Children) => (
  <SectionSlot name="credits">{children}</SectionSlot>
)

export const Row = ({ children }: Children) => (
  <div className="flex gap-2">{children}</div>
)

export const Col = ({ children }: Children) => (
  <div className="flex flex-1 flex-col gap-2">{children}</div>
)

export const ListItem = ({ children }: Children) => (
  <li className="text-l">{children}</li>
)
