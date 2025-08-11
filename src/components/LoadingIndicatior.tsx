import { Box } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function LoadingIndicator({ scale }) {
  const box = useRef()

  useFrame((_, delta) => {
    box.current.rotation.x = box.current.rotation.y += delta * Math.PI
  })

  return (
    <Box ref={box} scale={scale.xy.min() * 0.25}>
      <meshNormalMaterial />
    </Box>
  )
}
