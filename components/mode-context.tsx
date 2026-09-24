'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type SiteMode = 'wheels' | 'towing'

interface ModeContextType {
  mode: SiteMode
  setMode: (mode: SiteMode) => void
  isTransitioning: boolean
}

const ModeContext = createContext<ModeContextType>({
  mode: 'wheels',
  setMode: () => {},
  isTransitioning: false,
})

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<SiteMode>('wheels')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const setMode = (newMode: SiteMode) => {
    if (newMode === mode) return
    setIsTransitioning(true)
    // Small delay so CSS transitions can start from the "out" state
    setTimeout(() => {
      setModeState(newMode)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  return (
    <ModeContext.Provider value={{ mode, setMode, isTransitioning }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  return useContext(ModeContext)
}
