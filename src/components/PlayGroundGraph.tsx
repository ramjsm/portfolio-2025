import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react'
import R3fForceGraph from 'r3f-forcegraph';
import { OrbitControls, PresentationControls } from '@react-three/drei';

export function PlaygroundGraph({ ...props }) {
  const fgRef = useRef()
      const N = 10;
      const gData = useMemo(() => ({
          nodes: [...Array(N).keys()].map(i => ({ id: i })),
          links: [...Array(N).keys()]
            .filter(id => id)
            .map(id => ({
              source: id,
              target: Math.round(Math.random() * (id-1))
            }))
        }), [N]);
  
  
      useFrame(() => fgRef.current.tickFrame());
      // TODO: MAYBE CHANGE TO TRACKBALL REVIEW
  return (
    <PresentationControls> 
        <R3fForceGraph
            ref={fgRef}
            graphData={gData}
            nodeColor="rgb(0,0,0,1)"
            nodeOpacity={1}
        />
    </PresentationControls>
  )
}