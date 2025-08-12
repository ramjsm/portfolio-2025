import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const mobileKeywords = [
        'android',
        'iphone',
        'ipad',
        'ipod',
        'blackberry',
        'windows phone',
      ]
      const isMobileDevice = mobileKeywords.some((keyword) =>
        userAgent.includes(keyword)
      )
      const isSmallScreen = window.innerWidth < breakpoint

      setIsMobile(isMobileDevice || isSmallScreen)
    }

    // Check on mount
    checkIsMobile()

    // Check on resize
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [breakpoint])

  return isMobile
}
