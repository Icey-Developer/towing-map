'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Phone, Search, User } from 'lucide-react'
import { useMode } from './mode-context'

export default function Header() {
  const { mode, setMode } = useMode()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = mode === 'wheels'
    ? [
        { name: 'Wheels', href: '#wheels' },
        { name: 'Spares', href: '#spares' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
      ]
    : [
        { name: 'Towing', href: '#services' },
        { name: 'Fleet', href: '#fleet' },
        { name: 'Roadside', href: '#roadside' },
        { name: 'Coverage', href: '#coverage' },
        { name: 'Contact', href: '#contact' },
      ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo with slanted editorial slash mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-9 h-9">
              <div
                className={`w-[4px] h-7 rounded-sm transform -skew-x-12 transition-colors duration-400 ${
                  mode === 'towing' ? 'bg-amber-500' : 'bg-neutral-900'
                }`}
              />
              <div
                className={`w-[3px] h-5 rounded-sm transform -skew-x-12 ml-1 opacity-60 transition-colors duration-400 ${
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
              <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 font-semibold mt-0.5">
                {mode === 'wheels' ? 'Wheels & Performance' : 'Towing & Recovery'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 text-xs font-semibold uppercase tracking-[0.18em] hover:text-neutral-950 transition-colors duration-200 relative group py-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] rounded-full group-hover:w-full transition-all duration-300 ${
                    mode === 'towing' ? 'bg-amber-500' : 'bg-neutral-900'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              className="w-9 h-9 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 rounded-full"
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
          menuOpen ? 'max-h-80 border-b border-neutral-200 bg-white/95' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
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
