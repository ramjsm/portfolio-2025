import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, type ReactNode } from 'react'
import { handleScrambleHover } from '../utils/scrambleText'
import { AccordionContent, useAccordion } from './Accordion'

export interface IndexListSubLink {
  label: string
  url?: string
}

export interface IndexListItem {
  /** Stable key, also used as the scramble cache key. */
  slug: string
  /** Left metadata column, e.g. a date or a year range. */
  meta?: string
  /** Primary label — the only white, full-size text in the row. */
  label: string
  /** Right metadata column, e.g. a category or an institution. */
  tag?: string
  link?: string
  /**
   * Individually-linkable items rendered inline after `label` (e.g. several
   * workshops grouped under one row). When present, the row itself is not
   * wrapped in a link — only sub-items with a `url` are clickable. Mutually
   * exclusive with `link`.
   */
  subLinks?: IndexListSubLink[]
}

interface IndexListProps {
  /** Used for the anchor, the GSAP triggers, and the `/id` folder label. */
  id: string
  /** Accessible name only (e.g. for the toggle's aria-label) — not rendered. */
  title: string
  /** Terminal-style caption shown once expanded, e.g. "> ls -la ./research". */
  command: string
  /** Second caption line, e.g. "total 3 papers". */
  count: string
  /** Custom cursor label shown over linked rows. */
  cursorText?: string
  items: IndexListItem[]
  /** Optional trailing content rendered below the list, aligned right. */
  footer?: ReactNode
  /** Whether the list starts expanded. Defaults to false (collapsed). */
  defaultOpen?: boolean
}

/**
 * One "folder" in the About page's terminal-style CV tree: a `/id` path
 * header (always visible, doubles as the accordion trigger) followed by a
 * collapsible branch of dense monospaced rows. Multiple IndexLists are meant
 * to sit directly next to each other (see `About/index.tsx`) so they read as
 * a single continuous terminal listing rather than separate blocks.
 */
export function IndexList({
  id,
  title,
  command,
  count,
  cursorText = 'OPEN',
  items,
  footer,
  defaultOpen = false,
}: IndexListProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isOpen, toggle } = useAccordion(defaultOpen)

  useGSAP(
    () => {
      gsap.from(`.${id}-header-line`, {
        autoAlpha: 0,
        y: -6,
        scrollTrigger: { trigger: `#${id}-header` },
      })
    },
    { scope: containerRef }
  )

  if (items.length === 0) return null

  const metaClassName =
    'font-pp-neue-montreal text-xs tracking-wide text-gray-600 uppercase transition-colors duration-300 group-hover:text-gray-300'

  return (
    <div ref={containerRef} className="relative w-full">
      <a id={id} className="absolute -top-30 left-0"></a>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={`Toggle ${title} list`}
        id={`${id}-header`}
        className={`${id}-header-line group flex w-full items-center justify-between gap-4 py-5 text-left`}
      >
        <span className="font-pp-neue-montreal text-xl text-gray-300 lowercase transition-colors duration-300 group-hover:text-white lg:text-base">
          /{id}
        </span>
        <span className="flex items-center gap-4">
          <span className="font-pp-neue-montreal text-xs tracking-wide text-gray-600 uppercase">
            {count}
          </span>
          <span className="font-pp-neue-montreal w-4 text-center text-base text-gray-500 transition-colors duration-300 group-hover:text-white">
            {isOpen ? '\u2212' : '+'}
          </span>
        </span>
      </button>

      <AccordionContent isOpen={isOpen}>
        <div className="flex flex-col gap-4 border-l border-white/10 py-1 pb-8 pl-5 lg:pl-8">
          <p className="font-pp-neue-montreal text-xs text-gray-600">
            {command}
          </p>

          <ul
            id={`${id}-list`}
            className="flex flex-col lg:grid lg:grid-cols-[8rem_minmax(0,1fr)_minmax(0,16rem)]"
          >
            {items.map((item) => {
              const rowContent = (
                <>
                  <span className={metaClassName}>{item.meta ?? '—'}</span>
                  <span className="font-pp-neue-montreal text-base font-light text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {item.subLinks && item.subLinks.length > 0 ? (
                      <>
                        {item.label}:{' '}
                        {item.subLinks.map((sub, index) => (
                          <span key={sub.label}>
                            {sub.url ? (
                              <a
                                href={sub.url}
                                target="_blank"
                                rel="noreferrer"
                                data-cursor-text={cursorText}
                                className="underline decoration-dotted underline-offset-2 transition-colors duration-300 hover:text-white"
                              >
                                {sub.label}
                              </a>
                            ) : (
                              sub.label
                            )}
                            {index < item.subLinks!.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </>
                    ) : (
                      <span data-scramble={item.label}>{item.label}</span>
                    )}
                  </span>
                  {item.tag && (
                    <span className={`${metaClassName} lg:text-right`}>
                      {item.tag}
                    </span>
                  )}
                </>
              )

              const rowClassName =
                'group flex flex-col gap-1 py-3 transition-colors duration-300 lg:col-span-full lg:grid lg:grid-cols-subgrid lg:items-baseline lg:gap-x-4 lg:gap-y-0'

              return (
                <li
                  key={item.slug}
                  className={`${id}-row border-t border-white/10 lg:col-span-full lg:grid lg:grid-cols-subgrid`}
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-text={cursorText}
                      onMouseEnter={handleScrambleHover}
                      className={rowClassName}
                    >
                      {rowContent}
                    </a>
                  ) : (
                    <div
                      onMouseEnter={handleScrambleHover}
                      className={rowClassName}
                    >
                      {rowContent}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          {footer && <div className="flex justify-start">{footer}</div>}
        </div>
      </AccordionContent>
    </div>
  )
}
