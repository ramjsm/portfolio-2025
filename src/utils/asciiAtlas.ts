import * as THREE from 'three'

/**
 * Density ramp from "empty" to "dense". Rendered into a horizontal strip
 * texture; the ASCII fragment shader picks a column based on per-cell
 * luminance and samples that glyph.
 */
export const ASCII_GLYPHS = ' .:-=+*#%@'

interface AsciiAtlas {
  texture: THREE.CanvasTexture
  glyphCount: number
}

let cachedAtlas: AsciiAtlas | null = null

/**
 * Lazily builds a horizontal strip of glyphs (white text on a transparent
 * background) and caches it for reuse across every AsciiImage instance.
 */
export function getAsciiAtlas(cellPx = 64): AsciiAtlas {
  if (cachedAtlas) return cachedAtlas

  const glyphCount = ASCII_GLYPHS.length
  const canvas = document.createElement('canvas')
  canvas.width = cellPx * glyphCount
  canvas.height = cellPx

  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#ffffff'
  ctx.font = `${Math.floor(cellPx * 0.82)}px monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  for (let i = 0; i < glyphCount; i++) {
    const x = i * cellPx + cellPx / 2
    const y = cellPx / 2 + cellPx * 0.05
    ctx.fillText(ASCII_GLYPHS[i], x, y)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.wrapS = THREE.ClampToEdgeWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.needsUpdate = true

  cachedAtlas = { texture, glyphCount }
  return cachedAtlas
}
