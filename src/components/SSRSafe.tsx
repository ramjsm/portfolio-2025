import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface SSRSafeProps {
  children: ReactNode
  fallback?: ReactNode
}

export function SSRSafe({ children, fallback = null }: SSRSafeProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
