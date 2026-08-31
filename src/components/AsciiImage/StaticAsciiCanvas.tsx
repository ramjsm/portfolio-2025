import { useEffect, useRef, type RefObject } from 'react'
import { ASCII_GLYPHS } from '../../utils/asciiAtlas'

interface StaticAsciiCanvasProps {
  imgRef: RefObject<HTMLImageElement | null>
  cellSize: number
  spacing: number
  exposure: number
  color: string
  sampleColor: boolean
  onReady?: () => void
}

/**
 * Lightweight, non-WebGL stand-in for `WebGLAsciiImage`, used on mobile
 * where the smooth scrollbar (and therefore the WebGL twin) is disabled.
 * Draws the same luminance -> glyph mapping once onto a 2D canvas and never
 * re-renders after that (only a resize/orientation change redraws it) — no
 * WebGL context, no per-frame render loop, so it doesn't carry the desktop
 * effect's continuous GPU/battery cost.
 */
export function StaticAsciiCanvas({
  imgRef,
  cellSize,
  spacing,
  exposure,
  color,
  sampleColor,
  onReady,
}: StaticAsciiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const img = imgRef.current
    const canvas = canvasRef.current
    if (!img || !canvas) return

    let cancelled = false

    const draw = () => {
      if (cancelled) return

      // Measure the actual rendered <img> box, not the wrapper div's own
      // box (which can report 0 even though the image renders at a real
      // visible size, depending on ancestor layout).
      const rect = img.getBoundingClientRect()
      const width = Math.round(rect.width)
      const height = Math.round(rect.height)
      if (!width || !height) {
        // Layout hasn't settled yet — retry next frame instead of leaving
        // the canvas permanently blank.
        requestAnimationFrame(draw)
        return
      }

      // Crop the source like `object-cover` so glyphs sample the same
      // region the visible <img> would show.
      const naturalW = img.naturalWidth || width
      const naturalH = img.naturalHeight || height
      const scale = Math.max(width / naturalW, height / naturalH)
      const drawW = naturalW * scale
      const drawH = naturalH * scale
      const dx = (width - drawW) / 2
      const dy = (height - drawH) / 2

      const offscreen = document.createElement('canvas')
      offscreen.width = width
      offscreen.height = height
      const offCtx = offscreen.getContext('2d')
      if (!offCtx) return
      offCtx.drawImage(img, dx, dy, drawW, drawH)

      let pixels: ImageData
      try {
        pixels = offCtx.getImageData(0, 0, width, height)
      } catch {
        // Unreadable pixels (e.g. cross-origin) — leave the plain photo up.
        return
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // The real <img> underneath can't reliably be hidden on mobile (the
      // library forces it visible with `!important` there), so paint an
      // opaque backdrop first to fully cover it regardless of glyph gaps.
      ctx.fillStyle = '#0f0f0f'
      ctx.fillRect(0, 0, width, height)

      const cols = Math.max(1, Math.floor(width / cellSize))
      const rows = Math.max(1, Math.floor(height / cellSize))
      const fontSize = cellSize * (1 - Math.min(Math.max(spacing, 0), 0.49))

      ctx.font = `${fontSize}px monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const px = Math.min(width - 1, Math.floor(col * cellSize))
          const py = Math.min(height - 1, Math.floor(row * cellSize))
          const i = (py * width + px) * 4
          const r = pixels.data[i]
          const g = pixels.data[i + 1]
          const b = pixels.data[i + 2]
          const a = pixels.data[i + 3]
          if (a < 10) continue

          const luma = Math.min(
            1,
            Math.max(0, ((0.299 * r + 0.587 * g + 0.114 * b) / 255) * exposure)
          )
          const glyph =
            ASCII_GLYPHS[Math.floor(luma * (ASCII_GLYPHS.length - 1))]
          if (glyph === ' ') continue

          ctx.fillStyle = sampleColor ? `rgb(${r}, ${g}, ${b})` : color
          ctx.fillText(
            glyph,
            col * cellSize + cellSize / 2,
            row * cellSize + cellSize / 2
          )
        }
      }

      onReady?.()
    }

    if (img.complete && img.naturalWidth > 0) {
      draw()
    } else {
      img.addEventListener('load', draw, { once: true })
    }

    window.addEventListener('resize', draw)

    // Layout can settle after mount for reasons unrelated to this image
    // (fonts, sibling content, orientation change) — watch the img's own
    // box directly instead of relying only on the load/resize events.
    const resizeObserver = new ResizeObserver(() => draw())
    resizeObserver.observe(img)

    return () => {
      cancelled = true
      img.removeEventListener('load', draw)
      window.removeEventListener('resize', draw)
      resizeObserver.disconnect()
    }
  }, [imgRef, cellSize, spacing, exposure, color, sampleColor, onReady])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute top-0 left-0"
      aria-hidden="true"
    />
  )
}
