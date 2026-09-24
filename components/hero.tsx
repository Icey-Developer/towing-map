'use client'

import Image from 'next/image'
import { useMode } from './mode-context'
import { useEffect, useState } from 'react'
import {
  Car,
  CircleDot,
  Wrench,
  Gauge,
  Disc,
  Truck,
  ShieldAlert,
  BatteryCharging,
  Key,
  ArrowRight,
  PhoneCall,
  Calculator,
} from 'lucide-react'

export default function Hero() {
  const {
    mode,
    setMode,
    selectedCategory,
    setSelectedCategory,
    setIsDispatchModalOpen,
  } = useMode()
  const [contentVisible, setContentVisible] = useState(true)
  const [displayMode, setDisplayMode] = useState(mode)

  useEffect(() => {
    if (mode !== displayMode) {
      setContentVisible(false)
      const timer = setTimeout(() => {
        setDisplayMode(mode)
        setTimeout(() => setContentVisible(true), 40)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [mode, displayMode])

  const isWheels = displayMode === 'wheels'

  const categoriesWheels = [
    { id: 'all', label: 'All Parts', icon: Car },
    { id: 'wheels', label: 'Alloy Wheels', icon: CircleDot },
    { id: 'suspension', label: 'Suspension', icon: Gauge },
    { id: 'brakes', label: 'Brakes & Spares', icon: Wrench },
    { id: 'tyres', label: 'Performance Tyres', icon: Disc },
  ]

  const categoriesTowing = [
    { id: 'all', label: 'All Services', icon: Truck },
    { id: 'flatbed', label: 'Flatbed Tow', icon: ShieldAlert },
    { id: 'heavy', label: 'Heavy Duty', icon: Truck },
    { id: 'battery', label: 'Battery Boost', icon: BatteryCharging },
    { id: 'lockout', label: 'Lockout Assist', icon: Key },
  ]

  const categories = isWheels ? categoriesWheels : categoriesTowing

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id)
    const el = document.getElementById('wheels')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full pt-28 pb-14 lg:pt-36 lg:pb-20 bg-[#fafafa] overflow-hidden border-b border-neutral-200/60">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-neutral-200/50 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-neutral-200/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Dual Mode Switcher - Prominent Light Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-3">
            <span
              className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Select Service Mode:
            </span>
            <div className="mode-toggle-light">
              <div
                className={`toggle-pill ${
                  mode === 'wheels' ? 'left' : 'right'
                }`}
              />
              <button
                type="button"
                onClick={() => setMode('wheels')}
                className={mode === 'wheels' ? 'active' : ''}
              >
                Wheels & Parts
              </button>
              <button
                type="button"
                onClick={() => setMode('towing')}
                className={mode === 'towing' ? 'active' : ''}
              >
                Tow Truck & 24/7
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-neutral-500">
            <span
              className={`w-2 h-2 rounded-full ${
                mode === 'towing' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'
              }`}
            />
            <span>
              {mode === 'towing'
                ? 'Tow Dispatch Active: Average 22 min ETA'
                : 'Over 500+ Luxury Wheel Sets in Stock'}
            </span>
          </div>
        </div>

        {/* Hero Main Grid: Massive Typography on Left + Vehicle on Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[460px] lg:min-h-[500px]">
          {/* Left Column: Big Editorial Condensed Typography matching reference */}
          <div
            className="lg:col-span-6 transition-all duration-400"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(16px)',
            }}
          >
            {isWheels ? (
              <div>
                {/* 3 Tier Condensed Typography: MAKE / SELL / EARN with vertical labels */}
                <div className="space-y-0.5 mb-8 select-none">
                  {/* Line 1: MAKE STORE */}
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-editorial text-8xl sm:text-9xl xl:text-[140px] text-neutral-950 font-normal leading-none"
                    >
                      MAKE
                    </span>
                    <span
                      className="text-editorial-vertical text-neutral-400 uppercase font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      STORE
                    </span>
                  </div>

                  {/* Line 2: SELL PARTS */}
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-editorial text-8xl sm:text-9xl xl:text-[140px] text-neutral-950 font-normal leading-none"
                    >
                      SELL
                    </span>
                    <span
                      className="text-editorial-vertical text-neutral-400 uppercase font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      PARTS
                    </span>
                  </div>

                  {/* Line 3: EARN MONEY */}
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-editorial text-8xl sm:text-9xl xl:text-[140px] text-neutral-950 font-normal leading-none"
                    >
                      EARN
                    </span>
                    <span
                      className="text-editorial-vertical text-neutral-400 uppercase font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      MONEY
                    </span>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                  Your premier destination for high-performance forged wheels,
                  bespoke motorsport fitments, and certified spares tailored for
                  the world’s elite automobiles.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#wheels"
                    className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md group"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <span>Browse Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#brands"
                    className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    View Brands
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {/* 3 Tier Condensed Typography in Towing Mode: FAST / SAFE / MOVE */}
                <div className="space-y-0.5 mb-8 select-none">
                  {/* Line 1: FAST 24/7 */}
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-editorial text-8xl sm:text-9xl xl:text-[140px] text-neutral-950 font-normal leading-none"
                    >
                      FAST
                    </span>
                    <span
                      className="text-editorial-vertical text-amber-500 uppercase font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      24/7
                    </span>
                  </div>

                  {/* Line 2: SAFE HAUL */}
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-editorial text-8xl sm:text-9xl xl:text-[140px] text-neutral-950 font-normal leading-none"
                    >
                      SAFE
                    </span>
                    <span
                      className="text-editorial-vertical text-amber-500 uppercase font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      HAUL
                    </span>
                  </div>

                  {/* Line 3: MOVE RESCUE */}
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-editorial text-8xl sm:text-9xl xl:text-[140px] text-neutral-950 font-normal leading-none"
                    >
                      MOVE
                    </span>
                    <span
                      className="text-editorial-vertical text-amber-500 uppercase font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      RESCUE
                    </span>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                  State-of-the-art flatbed towing, rapid highway recovery, and
                  damage-free wheel-lift service. Day or night, our GPS fleet arrives
                  in 25 minutes or less.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="tel:+18005551234"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md group"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call 24/7 Dispatch</span>
                  </a>
                  <button
                    onClick={() => setIsDispatchModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Instant ETA & Rate</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Hero Vehicle Showcase (Porsche vs Tow Truck) */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[480px] flex items-center justify-center">
            {/* Soft shadow platform */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/15 rounded-full blur-xl pointer-events-none" />

            <div className="relative w-full h-full crossfade-container">
              {/* Wheels Vehicle: Silver Sports Car */}
              <div
                className={`crossfade-layer flex items-center justify-center ${
                  isWheels ? 'active' : 'inactive'
                }`}
              >
                <div className="relative w-full h-full max-h-[460px]">
                  <Image
                    src="/hero-car.jpg"
                    alt="Silver luxury sports car on clean white editorial background"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Towing Vehicle: Heavy Duty Tow Truck */}
              <div
                className={`crossfade-layer flex items-center justify-center ${
                  !isWheels ? 'active' : 'inactive'
                }`}
              >
                <div className="relative w-full h-full max-h-[460px]">
                  <Image
                    src="/tow-truck-hero.png"
                    alt="Professional heavy duty flatbed tow truck"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Category Selector Strip - Interactively wired to Explore Parts */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-neutral-200/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-4">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  key={cat.label}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border transition-all duration-200 text-left ${
                    isSelected
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-md'
                      : 'bg-white border-neutral-200/80 hover:border-neutral-900/40 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-colors duration-200 ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : !isWheels
                        ? 'bg-amber-50 group-hover:bg-amber-100 text-amber-700'
                        : 'bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white text-neutral-700'
                    }`}
                  >
                    <IconComp className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-white' : 'text-neutral-800'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {cat.label}
                  </span>
                  <span
                    className={`text-[10px] mt-0.5 ${
                      isSelected ? 'text-white/60' : 'text-neutral-400'
                    }`}
                  >
                    {isWheels ? `Filter Parts →` : `Filter Service →`}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
