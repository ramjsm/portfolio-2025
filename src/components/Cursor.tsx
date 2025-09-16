import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import CircularText from './CircularText'

const Cursor = () => {
  const squareRef = useRef(null)
  const textRef = useRef(null)
  const [currentText, setCurrentText] = useState('')
  const { contextSafe } = useGSAP()

  useGSAP(() => {
    // Set initial properties with GSAP to ensure smooth interpolation
    gsap.set(squareRef.current, {
      width: '20px',
      height: '20px',
      rotation: 45,
    })

    // Set initial text properties
    gsap.set(textRef.current, {
      opacity: 0,
      scale: 0.8,
    })

    // Start continuous rotation for the text
    gsap.to(textRef.current, {
      rotation: 360,
      duration: 3,
      ease: 'none',
      repeat: -1,
    })

    let isHovered = false
    const hoverSelectors =
      'a, button, [role="button"], input, textarea, select, .cursor-hover'

    // Function to get text based on data attribute or return empty
    const getTextForElement = (element: Element): string => {
      // Check for custom data attribute on element
      const customText = element.getAttribute('data-cursor-text')
      if (customText) return customText

      // Check closest parent for data attribute
      const parentWithText = element.closest('[data-cursor-text]')
      if (parentWithText) {
        return parentWithText.getAttribute('data-cursor-text') || ''
      }

      // Return empty string if no data-cursor-text found
      return ''
    }

    const scaleCursorUp = contextSafe(() => {
      if (!isHovered) {
        isHovered = true
        gsap.to(squareRef.current, {
          height: '60px',
          width: '60px',
          duration: 0.3,
          ease: 'power2.out',
        })
        // Show and scale up the text
        gsap.to(textRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    })

    const scaleCursorDown = contextSafe(() => {
      if (isHovered) {
        isHovered = false
        // Reset to default text
        setCurrentText('')

        gsap.to(squareRef.current, {
          height: '20px',
          width: '20px',
          duration: 0.3,
          ease: 'power2.out',
        })
        // Hide and scale down the text
        gsap.to(textRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    })

    const checkHoverState = (e: MouseEvent) => {
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
      const targetElement = elementUnderCursor?.matches(hoverSelectors)
        ? elementUnderCursor
        : elementUnderCursor?.closest(hoverSelectors)

      if (targetElement && !isHovered) {
        // Get text from the element and update state
        const textToShow = getTextForElement(targetElement)
        setCurrentText(textToShow)
        scaleCursorUp()
      } else if (!targetElement && isHovered) {
        scaleCursorDown()
      } else if (targetElement && isHovered) {
        // Update text if moving between different elements
        const newText = getTextForElement(targetElement)
        if (newText !== currentText) {
          setCurrentText(newText)
        }
      }
    }

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e

      // Move rotated square (rotation stays constant)
      gsap.to(squareRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      })

      // Move text to follow cursor
      gsap.to(textRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      })

      // Check hover state on every mouse move
      checkHoverState(e)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      {/* White rotated square */}
      <div
        ref={squareRef}
        className="border-texture"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />

      {/* Rotating text around cursor */}
      <div
        ref={textRef}
        className="font-helvetica-neue"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        {/* <CircularText
          text={`/ ${currentText} / ${currentText} / ${currentText} `}
          spinDuration={60}
          className="font-pp-neue-montreal"
        /> */}
      </div>
    </>
  )
}

export default Cursor
