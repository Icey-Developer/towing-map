'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type SiteMode = 'wheels' | 'towing'

export interface ProductItem {
  id: string
  name: string
  spec: string
  price: string
  rating: number
  reviews: number
  image: string
  badge?: string
  category?: string
  sizes?: string[]
}

interface ModeContextType {
  mode: SiteMode
  setMode: (mode: SiteMode) => void
  isTransitioning: boolean
  selectedCategory: string
  setSelectedCategory: (cat: string) => void
  cartCount: number
  cartItems: ProductItem[]
  addToCart: (item: ProductItem) => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  quickViewItem: ProductItem | null
  setQuickViewItem: (item: ProductItem | null) => void
  isDispatchModalOpen: boolean
  setIsDispatchModalOpen: (open: boolean) => void
}

const ModeContext = createContext<ModeContextType>({
  mode: 'wheels',
  setMode: () => {},
  isTransitioning: false,
  selectedCategory: 'all',
  setSelectedCategory: () => {},
  cartCount: 0,
  cartItems: [],
  addToCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  quickViewItem: null,
  setQuickViewItem: () => {},
  isDispatchModalOpen: false,
  setIsDispatchModalOpen: () => {},
})

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<SiteMode>('wheels')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [cartItems, setCartItems] = useState<ProductItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [quickViewItem, setQuickViewItem] = useState<ProductItem | null>(null)
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false)

  const setMode = (newMode: SiteMode) => {
    if (newMode === mode) return
    setIsTransitioning(true)
    setSelectedCategory('all')
    setTimeout(() => {
      setModeState(newMode)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 250)
  }

  const addToCart = (item: ProductItem) => {
    setCartItems((prev) => [...prev, item])
    setIsCartOpen(true)
  }

  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
        isTransitioning,
        selectedCategory,
        setSelectedCategory,
        cartCount: cartItems.length,
        cartItems,
        addToCart,
        isCartOpen,
        setIsCartOpen,
        quickViewItem,
        setQuickViewItem,
        isDispatchModalOpen,
        setIsDispatchModalOpen,
      }}
    >
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  return useContext(ModeContext)
}
