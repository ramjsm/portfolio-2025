import { createContext, useCallback, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type IntroContextValue = {
  /** True once the Overlay's first-visit intro timeline has finished. */
  isIntroComplete: boolean
  /** Called by the Overlay when the intro timeline reaches `onComplete`. */
  markIntroComplete: () => void
}

const IntroContext = createContext<IntroContextValue | null>(null)

export function IntroProvider({ children }: { children: ReactNode }) {
  const [isIntroComplete, setIsIntroComplete] = useState(false)

  const markIntroComplete = useCallback(() => {
    setIsIntroComplete(true)
  }, [])

  return (
    <IntroContext.Provider value={{ isIntroComplete, markIntroComplete }}>
      {children}
    </IntroContext.Provider>
  )
}

export function useIntro(): IntroContextValue {
  const ctx = useContext(IntroContext)
  if (!ctx) {
    throw new Error('useIntro must be used within an IntroProvider')
  }
  return ctx
}
