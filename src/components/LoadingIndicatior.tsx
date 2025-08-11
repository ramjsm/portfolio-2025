import { Box } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface LoadingIndicatorProps {
  scale: any
}

export function LoadingIndicator({ scale }: LoadingIndicatorProps) {
  const box = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (box.current) {
      box.current.rotation.x = box.current.rotation.y += delta * Math.PI
    }
  })

  return (
    <Box ref={box} scale={scale.xy.min() * 0.25}>
      <meshNormalMaterial />
    </Box>
  )
}
