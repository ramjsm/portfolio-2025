import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, type MutableRefObject } from 'react'
import * as THREE from 'three'
import colormap from 'colormap'
import {
  createCopyMaterial,
  createGameOfLifeRenderMaterial,
  createGameOfLifeSimulationMaterial,
} from './shaders/gameOfLifeShader'

interface GameOfLifeProps {
  /** Plane size in world units — comes straight from `ScrollScene`. */
  scale: vec3
  /** DOM element the scene is tracking, used to size the grid. */
  track?: MutableRefObject<HTMLElement>
  inViewport?: boolean
  /** Approximate size of one cell in CSS pixels. Bigger = chunkier. */
  cellSize?: number
  /** Simulation speed, independent from the render framerate. */
  generationsPerSecond?: number
  /** Share of cells alive in the initial random seed. */
  density?: number
  color?: string
  /** Colormap used to colour the cells based on their age. */
  colorMap?: string
  opacity?: number
  /** Gap around each cell, in cell units (0 = touching, 0.49 = tiny dot). */
  gap?: number
  /** Brush radius in cell units — how big a splash the cursor paints. */
  brushRadius?: number
  /**
   * Amount of the board randomly mutated during a mutation burst.
   * 0.02 = roughly 2% of cells flipped per generation.
   */
  mutationAmount?: number
  /**
   * 'normal' discards fully transparent pixels so dead cells blend straight
   * into the page background. 'additive' instead makes overlapping/dense
   * cells glow brighter — nice for a bright accent on a dark background.
   */
  blendMode?: 'normal' | 'additive'
}

const MIN_CELLS = 8
const MAX_CELLS = 220

const RENDER_TARGET_OPTIONS: THREE.RenderTargetOptions = {
  minFilter: THREE.NearestFilter,
  magFilter: THREE.NearestFilter,
  format: THREE.RGBAFormat,
  type: THREE.UnsignedByteType,
  wrapS: THREE.RepeatWrapping,
  wrapT: THREE.RepeatWrapping,
  depthBuffer: false,
  stencilBuffer: false,
  generateMipmaps: false,
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

/**
 * Creates a 1D colormap texture.
 *
 * The palette is generated once on the CPU and then sampled by the
 * render shader on the GPU.
 */
function createColorMapTexture(name: string, size = 256) {
  const colors = colormap({
    colormap: name,
    nshades: size,
    format: 'float',
    alpha: 10,
  })

  const data = new Float32Array(size * 4)

  for (let i = 0; i < size; i++) {
    const color = colors[i]

    data[i * 4] = color[0]
    data[i * 4 + 1] = color[1]
    data[i * 4 + 2] = color[2]
    data[i * 4 + 3] = color[3]
  }

  const texture = new THREE.DataTexture(
    data,
    size,
    1,
    THREE.RGBAFormat,
    THREE.FloatType
  )

  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.wrapS = THREE.ClampToEdgeWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.needsUpdate = true

  return texture
}

function createSeedTexture(columns: number, rows: number, density: number) {
  const data = new Uint8Array(columns * rows * 4)

  for (let i = 0; i < columns * rows; i++) {
    const alive = Math.random() < density ? 255 : 0

    data[i * 4] = alive
    data[i * 4 + 1] = alive
    data[i * 4 + 2] = 0
    data[i * 4 + 3] = 255
  }

  const texture = new THREE.DataTexture(data, columns, rows, THREE.RGBAFormat)

  texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.needsUpdate = true

  return texture
}

export function GameOfLife({
  scale,
  track,
  inViewport = true,
  cellSize = 18,
  generationsPerSecond = 9,
  density = 0.5,
  color = '#fff',
  colorMap = 'magma',
  opacity = 0.1,
  gap = 0.1,
  brushRadius = 5,
  mutationAmount = 0.038,
  blendMode = 'normal',
}: GameOfLifeProps) {
  const size = useThree((state) => state.size)

  const mouseUv = useRef(new THREE.Vector2(0.5, 0.5))
  const mouseActive = useRef(0)

  // Number of generations remaining in the current mutation burst.
  const mutationActive = useRef(0)
  const colorMapIndex = useRef(0)
  const colorMaps = ['salinity', 'oxygen', 'velocity-green']

  const handleInteract = () => {
    mutationActive.current = 5

    colorMapIndex.current = (colorMapIndex.current + 1) % colorMaps.length

    renderMaterial.uniforms.uColorMap.value = createColorMapTexture(
      colorMaps[colorMapIndex.current]
    )
  }

  const [columns, rows] = useMemo(() => {
    const rect = track?.current?.getBoundingClientRect()
    const width = rect?.width || size.width
    const height = rect?.height || size.height

    return [
      clamp(Math.round(width / cellSize), MIN_CELLS, MAX_CELLS),
      clamp(Math.round(height / cellSize), MIN_CELLS, MAX_CELLS),
    ]
  }, [track, size, cellSize])

  const simulationMaterial = useMemo(createGameOfLifeSimulationMaterial, [])

  const renderMaterial = useMemo(createGameOfLifeRenderMaterial, [])

  const copyMaterial = useMemo(createCopyMaterial, [])

  const colorMapTexture = useMemo(
    () => createColorMapTexture(colorMap),
    [colorMap]
  )

  const { fullscreenScene, fullscreenCamera, fullscreenQuad } = useMemo(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2))

    scene.add(quad)

    return {
      fullscreenScene: scene,
      fullscreenCamera: camera,
      fullscreenQuad: quad,
    }
  }, [])

  const targets = useMemo(
    () => [
      new THREE.WebGLRenderTarget(columns, rows, RENDER_TARGET_OPTIONS),
      new THREE.WebGLRenderTarget(columns, rows, RENDER_TARGET_OPTIONS),
    ],
    [columns, rows]
  )

  const seedTexture = useMemo(
    () => createSeedTexture(columns, rows, density),
    [columns, rows, density]
  )

  const readIndex = useRef(0)
  const accumulator = useRef(0)
  const needsSeed = useRef(true)

  useEffect(() => {
    needsSeed.current = true
  }, [targets, seedTexture])

  useEffect(() => {
    const grid = new THREE.Vector2(columns, rows)

    simulationMaterial.uniforms.uGrid.value = grid
    renderMaterial.uniforms.uGrid.value = grid
  }, [columns, rows, simulationMaterial, renderMaterial])

  useEffect(() => {
    renderMaterial.uniforms.uColorMap.value = colorMapTexture
  }, [colorMapTexture, renderMaterial])

  useEffect(() => {
    renderMaterial.uniforms.uColor.value.set(color)
    renderMaterial.uniforms.uOpacity.value = opacity
    renderMaterial.uniforms.uGap.value = gap
  }, [color, opacity, gap, renderMaterial])

  useEffect(() => {
    renderMaterial.blending =
      blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending

    renderMaterial.needsUpdate = true
  }, [blendMode, renderMaterial])

  useEffect(() => {
    simulationMaterial.uniforms.uBrushRadius.value = brushRadius
    simulationMaterial.uniforms.uMutation.value = mutationAmount
  }, [brushRadius, mutationAmount, simulationMaterial])

  useEffect(() => {
    return () => {
      targets.forEach((target) => target.dispose())
      seedTexture.dispose()
      colorMapTexture.dispose()
    }
  }, [targets, seedTexture, colorMapTexture])

  useEffect(() => {
    return () => {
      simulationMaterial.dispose()
      renderMaterial.dispose()
      copyMaterial.dispose()
      fullscreenQuad.geometry.dispose()
    }
  }, [
    simulationMaterial,
    renderMaterial,
    copyMaterial,
    fullscreenQuad,
    fullscreenScene,
  ])

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return false
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useFrame(({ gl, clock }, delta) => {
    const renderPass = (
      material: THREE.Material,
      target: THREE.WebGLRenderTarget
    ) => {
      fullscreenQuad.material = material

      const previousTarget = gl.getRenderTarget()

      gl.setScissorTest(false)
      gl.setRenderTarget(target)
      gl.clear()
      gl.render(fullscreenScene, fullscreenCamera)
      gl.setRenderTarget(previousTarget)
    }

    if (needsSeed.current) {
      copyMaterial.uniforms.uTexture.value = seedTexture

      renderPass(copyMaterial, targets[0])

      renderPass(copyMaterial, targets[1])

      readIndex.current = 0

      renderMaterial.uniforms.uState.value = targets[0].texture

      needsSeed.current = false
    }

    if (!inViewport || prefersReducedMotion) {
      return
    }

    simulationMaterial.uniforms.uMouse.value.copy(mouseUv.current)

    accumulator.current += Math.min(delta, 0.1)

    const step = 1 / generationsPerSecond

    let generations = 0

    while (accumulator.current >= step && generations < 3) {
      accumulator.current -= step
      generations++

      simulationMaterial.uniforms.uMouseActive.value = mouseActive.current

      mouseActive.current *= 0.8

      // Keep the global mutation active for several generations
      // instead of applying one large mutation all at once.
      simulationMaterial.uniforms.uMutation.value =
        mutationActive.current > 0 ? mutationAmount : 0

      if (mutationActive.current > 0) {
        mutationActive.current--
      }

      const read = targets[readIndex.current]
      const write = targets[1 - readIndex.current]

      simulationMaterial.uniforms.uState.value = read.texture

      simulationMaterial.uniforms.uTime.value = clock.elapsedTime

      renderPass(simulationMaterial, write)

      readIndex.current = 1 - readIndex.current

      renderMaterial.uniforms.uState.value = write.texture
    }
  })

  return (
    <mesh
      scale={scale}
      material={renderMaterial}
      renderOrder={-1}
      onClick={handleInteract}
    >
      <planeGeometry args={[1, 1]} />
    </mesh>
  )
}
