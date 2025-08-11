import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Cursor = () => {
  const verticalRef = useRef(null)
  const horizontalRef = useRef(null)
  const squareRef = useRef(null)

  useGSAP(() => {
    const fadeDistance = 100

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e

      // Move vertical line
      gsap.to(verticalRef.current, {
        x: clientX,
        duration: 0.2,
        ease: 'power3.out',
      })

      // Move horizontal line
      gsap.to(horizontalRef.current, {
        y: clientY,
        duration: 0.2,
        ease: 'power3.out',
      })

      // Move rotated square (rotation stays constant)
      gsap.to(squareRef.current, {
        x: clientX,
        y: clientY,
        rotation: 45,
        duration: 0.2,
        ease: 'power3.out',
      })

      // Update gradients from cursor position
      const vertGradient = `linear-gradient(to bottom, transparent ${clientY - fadeDistance}px, white ${clientY}px, transparent ${clientY + fadeDistance}px)`
      const horizGradient = `linear-gradient(to right, transparent ${clientX - fadeDistance}px, white ${clientX}px, transparent ${clientX + fadeDistance}px)`

      gsap.set(verticalRef.current, { background: vertGradient })
      gsap.set(horizontalRef.current, { background: horizGradient })
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      {/* Vertical line */}
      <div
        ref={verticalRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '1px',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      {/* Horizontal line */}
      <div
        ref={horizontalRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '1px',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      {/* White rotated square */}
      <div
        ref={squareRef}
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  )
}

export default Cursor
