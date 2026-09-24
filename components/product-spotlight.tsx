'use client'

import Image from 'next/image'
import { useMode } from './mode-context'
import { useEffect, useState } from 'react'
import { ArrowRight, PhoneCall, ShieldCheck, Zap } from 'lucide-react'

export default function ProductSpotlight() {
  const { mode } = useMode()
  const [visible, setVisible] = useState(true)
  const [displayMode, setDisplayMode] = useState(mode)

  useEffect(() => {
    if (mode !== displayMode) {
      setVisible(false)
      const timer = setTimeout(() => {
        setDisplayMode(mode)
        setTimeout(() => setVisible(true), 40)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [mode, displayMode])

  const isWheels = displayMode === 'wheels'

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-3xl bg-[#f4f5f7] border border-neutral-200/80 p-8 sm:p-12 lg:p-16 transition-all duration-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/80 via-transparent to-transparent rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-6 shadow-sm">
                {isWheels ? (
                  <>
                    <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>Special Feature Offer</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Instant Guarantee Service</span>
                  </>
                )}
              </div>

              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 uppercase tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.02' }}
              >
                {isWheels ? 'FORMULA ONE TYRES' : '24/7 HIGHWAY RESCUE'}
              </h2>

              {/* Price Callout matching screenshot */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight">
                  {isWheels ? '$31.32' : 'FROM $89.00'}
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">
                  {isWheels ? '/ Per Tyre Unit' : '/ Local Tow Service'}
                </span>
              </div>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                {isWheels
                  ? 'Engineered with synthetic silica racing compounds for instantaneous wet and dry grip. Rated for high heat thresholds and aggressive track-day performance.'
                  : 'Stuck on the road or locked out? Our emergency dispatch unit arrives in 30 minutes with flatbed and wheel-lift options. Fully licensed, insured, and damage-free.'}
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {(isWheels
                  ? ['Ultra Grip Rubber', 'Speed Rated Y (186mph)', 'Low Noise Tread', 'Rim Protector']
                  : ['30-Min Arrival', 'Soft-Strap Loading', 'Zero Vehicle Damage', 'Direct Insurance Billing']
                ).map((spec) => (
                  <span
                    key={spec}
                    className="bg-white border border-neutral-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 shadow-xs"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Call to action button */}
              <div className="flex flex-wrap items-center gap-4">
                {isWheels ? (
                  <a
                    href="#wheels"
                    className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-200 shadow-md group"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <span>SHOP NOW</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <a
                    href="tel:+18005551234"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-200 shadow-md group"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>CALL DISPATCH NOW</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 relative aspect-square max-w-[440px] mx-auto w-full flex items-center justify-center">
              {/* Soft shadow */}
              <div className="absolute bottom-6 w-3/4 h-8 bg-black/10 rounded-full blur-xl pointer-events-none" />

              <div className="relative w-full h-full crossfade-container">
                {/* Wheels Spotlight Image */}
                <div
                  className={`crossfade-layer flex items-center justify-center ${
                    isWheels ? 'active' : 'inactive'
                  }`}
                >
                  <div className="relative w-full h-full max-h-[380px]">
                    <Image
                      src="/site-images/spotlight-tyres.jpg"
                      alt="Formula one performance stacked tyres with alloy rim"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Towing Spotlight Image */}
                <div
                  className={`crossfade-layer flex items-center justify-center ${
                    !isWheels ? 'active' : 'inactive'
                  }`}
                >
                  <div className="relative w-full h-full max-h-[380px]">
                    <Image
                      src="/tow-truck-hero.png"
                      alt="Elite 24/7 rescue tow vehicle"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
