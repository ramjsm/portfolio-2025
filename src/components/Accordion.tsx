import { useEffect, useRef, useState, type ReactNode } from 'react'
import gsap from 'gsap'

/** Minimal open/closed state for an accordion section. */
export function useAccordion(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const toggle = () => setIsOpen((prev) => !prev)
  return { isOpen, toggle }
}

interface AccordionContentProps {
  isOpen: boolean
  children: ReactNode
  className?: string
}

/**
 * Animates its children open/closed (height + fade). Presentation-only —
 * pair it with `useAccordion` for state and `AccordionToggle` for the
 * trigger. Safe to reuse anywhere a section's body should collapse under a
 * static header (e.g. IndexList rows, Events rows).
 */
export function AccordionContent({
  isOpen,
  children,
  className = '',
}: AccordionContentProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const hasMountedRef = useRef(false)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const inner = innerRef.current
    if (!wrapper || !inner) return

    // Set initial state instantly on mount instead of animating it in.
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      gsap.set(wrapper, { height: isOpen ? 'auto' : 0 })
      gsap.set(inner, { autoAlpha: isOpen ? 1 : 0 })
      return
    }

    const targetHeight = inner.scrollHeight

    if (isOpen) {
      gsap.fromTo(
        wrapper,
        { height: 0 },
        {
          height: targetHeight,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            wrapper.style.height = 'auto'
          },
        }
      )
      gsap.to(inner, { autoAlpha: 1, duration: 0.4, delay: 0.05 })
    } else {
      gsap.fromTo(
        wrapper,
        { height: targetHeight },
        { height: 0, duration: 0.4, ease: 'power2.in' }
      )
      gsap.to(inner, { autoAlpha: 0, duration: 0.2 })
    }
  }, [isOpen])

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}

interface AccordionToggleProps {
  isOpen: boolean
  onToggle: () => void
  ariaLabel: string
  className?: string
}

/** A minimal +/− toggle button matching the site's bordered/mono look. */
export function AccordionToggle({
  isOpen,
  onToggle,
  ariaLabel,
  className = '',
}: AccordionToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={ariaLabel}
      className={`border-texture flex h-8 w-8 shrink-0 items-center justify-center font-pp-neue-montreal text-lg text-gray-400 transition-colors duration-300 hover:text-white ${className}`}
    >
      {isOpen ? '\u2212' : '+'}
    </button>
  )
}
