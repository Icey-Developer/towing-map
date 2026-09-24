'use client'

import Image from 'next/image'
import { useMode } from './mode-context'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { mode, setMode } = useMode()
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

  return (
    <section className="relative w-full pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white overflow-hidden border-b border-neutral-100 min-h-[700px] lg:min-h-[820px] xl:min-h-[920px] flex items-center">
      <div className="relative z-10 w-full mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* Main Grid: Editorial Typography on Left + 10x Scaled Pure White Seamless Vehicle/Wheel on Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Big Editorial Typography + Paragraph + Mode Switcher */}
          <div
            className="lg:col-span-5 z-20 relative transition-all duration-400"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(16px)',
            }}
          >
            {isWheels ? (
              <div>
                {/* 3 Tier Typography: MAKE / SELL / EARN (vertical tags removed as requested) */}
                <h1
                  className="text-editorial text-7xl sm:text-8xl xl:text-9xl text-neutral-950 font-black select-none mb-6"
                  style={{ letterSpacing: '-0.04em', lineHeight: '0.88' }}
                >
                  <span className="block">MAKE</span>
                  <span className="block mt-1">SELL</span>
                  <span className="block mt-1">EARN</span>
                </h1>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                  Your premier destination for high-performance forged wheels,
                  bespoke motorsport fitments, and certified spares tailored for
                  the world’s elite automobiles.
                </p>

                {/* Mode Switcher: Relocated here as requested by green arrow */}
                <div className="pt-1">
                  <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 bg-neutral-100/90 p-2 sm:px-4 sm:py-2 rounded-2xl sm:rounded-full border border-neutral-200/80 shadow-xs">
                    <span
                      className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-bold"
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
                </div>
              </div>
            ) : (
              <div>
                {/* 3 Tier Typography in Towing Mode: FAST / SAFE / MOVE (vertical tags removed) */}
                <h1
                  className="text-editorial text-7xl sm:text-8xl xl:text-9xl text-neutral-950 font-black select-none mb-6"
                  style={{ letterSpacing: '-0.04em', lineHeight: '0.88' }}
                >
                  <span className="block">FAST</span>
                  <span className="block mt-1">SAFE</span>
                  <span className="block mt-1">MOVE</span>
                </h1>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                  State-of-the-art flatbed towing, rapid highway recovery, and
                  damage-free wheel-lift service. Day or night, our GPS fleet arrives
                  in 30 minutes or less.
                </p>

                {/* Mode Switcher: Relocated here as requested by green arrow */}
                <div className="pt-1">
                  <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 bg-neutral-100/90 p-2 sm:px-4 sm:py-2 rounded-2xl sm:rounded-full border border-neutral-200/80 shadow-xs">
                    <span
                      className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-bold"
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
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Hero Showcase on Pure Seamless White Background - 10x Scaled to Fill Entire Space */}
          <div className="lg:col-span-7 relative w-full h-[540px] sm:h-[660px] lg:h-[780px] xl:h-[900px] 2xl:h-[1000px] flex items-center justify-center lg:justify-end bg-white">
            <div className="relative w-full h-full lg:w-[145%] xl:w-[170%] 2xl:w-[190%] lg:-mr-24 xl:-mr-44 2xl:-mr-64 pointer-events-none crossfade-container flex items-center justify-center lg:justify-end">
              {/* Wheels Service: Wheel with skid mark on pure solid white background */}
              <div
                className={`crossfade-layer flex items-center justify-center lg:justify-end ${
                  isWheels ? 'active' : 'inactive'
                }`}
              >
                <div className="relative w-full h-full transform scale-150 sm:scale-175 lg:scale-215 xl:scale-245 2xl:scale-270 origin-center lg:origin-[68%_52%] transition-transform duration-700">
                  <Image
                    src="/hero-wheel-skidmark.jpg"
                    alt="Forged performance wheel with tyre and rubber skid mark on pure white background"
                    fill
                    sizes="(max-width: 1024px) 100vw, 90vw"
                    className="object-contain object-center lg:object-right"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Towing Service: Elite Commercial Tow Truck on pure solid white background */}
              <div
                className={`crossfade-layer flex items-center justify-center lg:justify-end ${
                  !isWheels ? 'active' : 'inactive'
                }`}
              >
                <div className="relative w-full h-full transform scale-140 sm:scale-165 lg:scale-195 xl:scale-220 2xl:scale-240 origin-center lg:origin-[72%_50%] transition-transform duration-700">
                  <Image
                    src="/hero-tow-truck-white.jpg"
                    alt="Elite Towing & Recovery flatbed commercial tow truck on pure white background"
                    fill
                    sizes="(max-width: 1024px) 100vw, 90vw"
                    className="object-contain object-center lg:object-right"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
