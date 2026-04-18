import gsap from 'gsap'
import type { MouseEvent } from 'react'

const CHARS = '!<>-_\\/[]{}=+*^?#&%$@'

/**
 * Animates an element's text by cycling random glyphs into it from left to
 * right, then settles back to the original string. The original text is
 * cached on the element's `data-scramble` attribute so repeated hovers
 * always restore cleanly.
 */
export function scrambleEl(el: HTMLElement, duration = 0.55) {
  const original =
    el.dataset.scramble ?? (el.dataset.scramble = el.textContent ?? '')
  const len = original.length
  const state = { p: 0 }
  gsap.killTweensOf(state)
  gsap.to(state, {
    p: 1,
    duration,
    ease: 'power1.out',
    onUpdate: () => {
      let out = ''
      for (let i = 0; i < len; i++) {
        const ch = original[i]
        if (state.p >= i / len || ch === ' ') {
          out += ch
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      el.textContent = out
    },
    onComplete: () => {
      el.textContent = original
    },
  })
}

/**
 * React `onMouseEnter` handler that scrambles every descendant of the
 * hovered element that carries a `data-scramble` attribute.
 */
export function handleScrambleHover(e: MouseEvent<HTMLElement>) {
  e.currentTarget
    .querySelectorAll<HTMLElement>('[data-scramble]')
    .forEach((el) => scrambleEl(el))
}
