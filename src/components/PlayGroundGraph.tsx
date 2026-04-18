import { useFrame, useThree } from '@react-three/fiber'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import R3fForceGraph from 'r3f-forcegraph'
import {
  OrbitControls,
  PresentationControls,
  TrackballControls,
} from '@react-three/drei'
import * as THREE from 'three'
import ThresholdMaterial from './shaders/thresholdShader'
import SpriteText from 'three-spritetext'
import { projectsList } from '../config/projects'

interface NodeData {
  id: string
  name?: string
  link?: string
  img?: string
  parent?: string
}

// Playground-only projects (not in config)
const PLAYGROUND_NODES: NodeData[] = [
  {
    id: 'pg-0',
    name: 'The Post Human Shop',
    img: '/playground/the-posthuman-shop-ramsessalas.webp',
    link: 'https://posthumanshop.ramsessalas.com/',
    parent: 'installation',
  },
  {
    id: 'pg-1',
    name: 'Radical Tenderness',
    img: '/playground/radical-tenderness-ramsessalas.webp',
    link: 'https://radicaltenderness.ramsessalas.com/',
    parent: 'installation',
  },
  {
    id: 'pg-2',
    name: 'School of Balance',
    img: '/playground/school-of-balance-ramsessalas.webp',
    link: 'https://schoolofbalance.netlify.app/',
    parent: 'web',
  },
  {
    id: 'pg-3',
    name: 'School of Balance',
    img: '/playground/school-of-balance-ramsessalas.webp',
    link: 'https://schoolofbalance.netlify.app/',
    parent: 'motion',
  },
  {
    id: 'pg-4',
    name: 'School of Balance',
    img: '/playground/school-of-balance-ramsessalas.webp',
    link: 'https://schoolofbalance.netlify.app/',
    parent: 'motion',
  },
  {
    id: 'pg-5',
    name: 'School of Balance',
    img: '/playground/school-of-balance-ramsessalas.webp',
    link: 'https://schoolofbalance.netlify.app/',
    parent: 'motion',
  },
  {
    id: 'pg-6',
    name: 'School of Balance',
    img: '/playground/school-of-balance-ramsessalas.webp',
    link: 'https://schoolofbalance.netlify.app/',
    parent: 'motion',
  },
]

// Map config categories to graph categories
const CATEGORY_MAP: Record<string, string> = {
  web: 'web',
  installation: 'installation',
}

const CATEGORY_NODES: NodeData[] = [
  { id: 'web', name: 'Web & Design' },
  { id: 'installation', name: 'Installation' },
  { id: 'motion', name: 'Motion' },
]

const PROJECT_NODES: NodeData[] = projectsList.map((p) => ({
  id: `project-${p.slug}`,
  name: p.title,
  img: p.thumbnail.src,
  link: `/projects/${p.slug}`,
  parent: CATEGORY_MAP[p.category] || p.category,
}))

const textureLoader = new THREE.TextureLoader()

export function PlaygroundGraph() {
  const fgRef = useRef<any>(null)
  const { camera } = useThree()
  const nodeMeshes = useRef<Map<string, THREE.Mesh>>(new Map())
  const ALL_NODES = [...PLAYGROUND_NODES, ...PROJECT_NODES]

  // Cross-links between projects and additional categories
  const EXTRA_LINKS = [
    // { source: 'pg-1', target: 'web' }, // Radical Tenderness → Installation
    // { source: 'pg-0', target: 'web' }, // The Post Human Shop → Web
  ]

  const gData = useMemo(
    () => ({
      nodes: [{ id: 'root' } as NodeData, ...CATEGORY_NODES, ...ALL_NODES],
      links: [
        // Categories radiate from root
        ...CATEGORY_NODES.map((c) => ({ source: c.id, target: 'root' })),
        // Projects radiate from their parent category
        ...ALL_NODES.map((n) => ({ source: n.id, target: n.parent! })),
        // Cross-links
        ...EXTRA_LINKS,
      ],
    }),
    []
  )

  const nodeThreeObject = useCallback((node: NodeData) => {
    // Leaf nodes with images → circular thumbnail
    if (node.img) {
      const mat = new ThresholdMaterial()
      mat.transparent = true
      mat.uThresholdWhite = 0.3
      mat.uThresholdGray = 0.3
      mat.uNoise = 1.0

      textureLoader.load(node.img, (texture) => {
        mat.uImage = texture
        mat.uResolution.set(texture.image.width, texture.image.height)
      })

      const geometry = new THREE.CircleGeometry(24, 64)
      const mesh = new THREE.Mesh(geometry, mat)
      nodeMeshes.current.set(node.id, mesh)
      return mesh
    }

    // Category text nodes → SpriteText
    if (node.name) {
      const sprite = new SpriteText(node.name)
      sprite.color = 'white'
      sprite.textHeight = 8
      sprite.fontFace = 'Syne, sans-serif'
      return sprite
    }

    return false // root node → default sphere
  }, [])

  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const isHoveringNode = useRef(false)

  useEffect(() => {
    const tooltip = document.createElement('div')
    tooltip.className =
      'font-syne pointer-events-none fixed z-50 whitespace-nowrap rounded bg-black px-2 py-1 text-sm text-white'
    tooltip.style.display = 'none'
    document.body.appendChild(tooltip)
    tooltipRef.current = tooltip

    const onMouseMove = (e: MouseEvent) => {
      if (tooltip.style.display !== 'none') {
        tooltip.style.left = `${e.clientX}px`
        tooltip.style.top = `${e.clientY - 32}px`
      }
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.body.removeChild(tooltip)
    }
  }, [])

  const hideTooltip = useCallback(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none'
    }
    document.body.style.cursor = 'default'
    isHoveringNode.current = false
  }, [])

  const handleNodeHover = useCallback(
    (node: NodeData | null) => {
      if (node?.name && tooltipRef.current) {
        tooltipRef.current.textContent = node.name
        tooltipRef.current.style.display = 'block'
        document.body.style.cursor = 'pointer'
        isHoveringNode.current = true
      } else {
        hideTooltip()
      }
    },
    [hideTooltip]
  )

  const handleNodeClick = useCallback((node: NodeData) => {
    if (node.link) {
      window.open(node.link, '_blank')
    }
  }, [])

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force('charge').strength(-5000)
    }
  }, [])

  useFrame(({ clock }) => {
    // Billboard node meshes to face camera & update shader time
    nodeMeshes.current.forEach((mesh) => {
      mesh.lookAt(camera.position)
      ;(mesh.material as any).uTime = clock.getElapsedTime()
    })

    if (fgRef.current) {
      fgRef.current.tickFrame()
    }
  })
  // TODO: MAYBE CHANGE TO TRACKBALL REVIEW
  return (
    <PresentationControls>
      <group scale={2.5} onPointerLeave={hideTooltip}>
        <R3fForceGraph
          ref={fgRef}
          graphData={gData}
          nodeThreeObject={nodeThreeObject}
          onNodeHover={handleNodeHover}
          onNodeClick={handleNodeClick}
          numDimensions={3}
          // d3VelocityDecay={0.5}
          //d3AlphaTarget={0.01}
          linkCurvature={0.1}
          nodeRelSize={30}
          dagMode="radialout"
          nodeResolution={64}
          nodeOpacity={0.1}
          nodeColor="#fff"
        />
      </group>
    </PresentationControls>
  )
}
