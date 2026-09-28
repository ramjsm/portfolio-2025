import type { AnchorHTMLAttributes } from 'react'

/**
 * Link styling shared by MDX prose and frontmatter strings. Links in project
 * content always point to external sites, so they always open in a new tab.
 */
export function MarkdownLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/
const EMPHASIS = /^\*([^*]+)\*$/

/**
 * Renders the small subset of markdown that appears in frontmatter strings:
 * `[label](url)` links and `*emphasis*`. Plain strings pass through as-is.
 */
export function InlineMarkdown({ children }: { children: string }) {
  return (
    <>
      {children.split(TOKEN).map((part, index) => {
        const link = part.match(LINK)
        if (link) {
          return (
            <MarkdownLink key={index} href={link[2]}>
              {link[1]}
            </MarkdownLink>
          )
        }
        const emphasis = part.match(EMPHASIS)
        if (emphasis) return <em key={index}>{emphasis[1]}</em>
        return part
      })}
    </>
  )
}
