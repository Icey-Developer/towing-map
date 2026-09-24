'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Phone, Search, User, ShieldAlert } from 'lucide-react'
import { useMode } from './mode-context'

export default function Header() {
  const {
    mode,
    setMode,
    cartCount,
    setIsCartOpen,
    setIsDispatchModalOpen,
  } = useMode()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems =
    mode === 'wheels'
      ? [
          { name: 'Wheels', href: '#wheels' },
          { name: 'Brands', href: '#brands' },
          { name: 'Spares', href: '#spares' },
          { name: 'Gallery', href: '#gallery' },
          { name: 'Contact', href: '#contact' },
        ]
      : [
          { name: 'Towing', href: '#services' },
          { name: 'Fleet', href: '#brands' },
          { name: 'Roadside', href: '#spares' },
          { name: 'Coverage', href: '#gallery' },
          { name: 'Contact', href: '#contact' },
        ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4 lg:py-5'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo with slanted editorial slash mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-9 h-9">
              <div
                className={`w-[4px] h-7 rounded-sm transform -skew-x-12 transition-colors duration-300 ${
                  mode === 'towing' ? 'bg-amber-500' : 'bg-neutral-950'
                }`}
              />
              <div
                className={`w-[3px] h-5 rounded-sm transform -skew-x-12 ml-1 opacity-60 transition-colors duration-300 ${
                  mode === 'towing' ? 'bg-amber-400' : 'bg-neutral-600'
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-neutral-950 font-black text-xl tracking-[0.12em] uppercase leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                ELITE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-bold mt-0.5">
                {mode === 'wheels' ? 'Wheels & Performance' : 'Towing & Recovery'}
              </span>
            </div>
          </Link>

          {/* Sticky Mode Toggle in Header (Always Accessible) */}
          <div className="hidden sm:inline-flex items-center bg-neutral-100 p-1 rounded-full border border-neutral-200/80 text-[11px] font-bold">
            <button
              onClick={() => setMode('wheels')}
              className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                mode === 'wheels'
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Wheels
            </button>
            <button
              onClick={() => setMode('towing')}
              className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                mode === 'towing'
                  ? 'bg-amber-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Towing 24/7
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 text-xs font-semibold uppercase tracking-[0.16em] hover:text-neutral-950 transition-colors duration-200 relative group py-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] rounded-full group-hover:w-full transition-all duration-300 ${
                    mode === 'towing' ? 'bg-amber-500' : 'bg-neutral-950'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {mode === 'towing' ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsDispatchModalOpen(true)}
                  className="hidden md:inline-flex items-center gap-1.5 bg-neutral-950 hover:bg-neutral-800 text-white px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get ETA & Quote</span>
                </button>
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-colors shadow-xs"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>24/7 Dispatch</span>
                </a>
              </div>
            ) : (
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-neutral-950 text-white text-[9px] font-bold flex items-center justify-center animate-in zoom-in">
                    {cartCount}
                  </span>
                )}
              </button>
            )}

            {/* Mobile menu trigger */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 border-b border-neutral-200 bg-white' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {/* Mobile mode switcher */}
          <div className="flex bg-neutral-100 p-1 rounded-full text-xs font-bold mb-2">
            <button
              onClick={() => {
                setMode('wheels')
                setMenuOpen(false)
              }}
              className={`flex-1 py-2 rounded-full text-center ${
                mode === 'wheels' ? 'bg-neutral-950 text-white' : 'text-neutral-600'
              }`}
            >
              Wheels & Spares
            </button>
            <button
              onClick={() => {
                setMode('towing')
                setMenuOpen(false)
              }}
              className={`flex-1 py-2 rounded-full text-center ${
                mode === 'towing' ? 'bg-amber-500 text-neutral-950' : 'text-neutral-600'
              }`}
            >
              Tow Truck 24/7
            </button>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-neutral-700 text-sm font-semibold uppercase tracking-wider py-2 border-b border-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
