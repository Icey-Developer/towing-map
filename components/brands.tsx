'use client'

import Image from 'next/image'
import { useMode } from './mode-context'
import { useEffect, useState } from 'react'

export default function Brands() {
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

  const wheelBrands = [
    {
      name: 'Ferrari',
      tag: 'Scuderia Spec',
      image: '/site-images/ferrari-red.jpg',
      fontStyle: 'italic',
      logoText: 'Ferrari',
    },
    {
      name: 'Lamborghini',
      tag: 'V10 & V12 Fitment',
      image: '/yellow-car.jpg',
      fontStyle: 'italic',
      logoText: 'Lamborghini',
    },
    {
      name: 'Porsche',
      tag: 'GT3 & Turbo Fitment',
      image: '/site-images/porsche-green.jpg',
      fontStyle: 'normal',
      logoText: 'PORSCHE',
    },
  ]

  const towFleets = [
    {
      name: 'Flatbed Carrier',
      tag: 'Zero-Angle Ramp',
      image: '/site-images/tow-service-1.jpg',
      fontStyle: 'normal',
      logoText: 'FLATBED ELITE',
    },
    {
      name: 'Heavy Wrecker',
      tag: 'Semi & Commercial',
      image: '/site-images/tow-service-2.jpg',
      fontStyle: 'normal',
      logoText: 'HEAVY RECOVERY',
    },
    {
      name: 'Rapid Response',
      tag: 'GPS Dispatched',
      image: '/site-images/tow-service-3.jpg',
      fontStyle: 'normal',
      logoText: '24/7 DISPATCH',
    },
  ]

  const cards = isWheels ? wheelBrands : towFleets

  return (
    <section id="brands" className="w-full py-20 lg:py-28 bg-[#fafafa] border-y border-neutral-200/80">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Heading */}
        <div
          className="text-center mb-16 transition-all duration-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-neutral-300" />
            <span
              className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {isWheels ? 'Certified Partnerships' : 'Specialized Equipment'}
            </span>
            <span className="w-8 h-[1px] bg-neutral-300" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.05' }}
          >
            {isWheels ? 'PREMIUM BRANDS' : 'FLEET CAPABILITIES'}
          </h2>
        </div>

        {/* 3 Showcase Cards matching the screenshot */}
        <div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          {cards.map((item, index) => (
            <div
              key={item.name}
              className="group flex flex-col items-center bg-white rounded-3xl p-4 sm:p-5 border border-neutral-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Rounded Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-800">
                  {item.tag}
                </div>
              </div>

              {/* Brand Typography Logo under each card - exactly like the screenshot */}
              <div className="py-2 text-center w-full">
                <span
                  className={`text-2xl sm:text-3xl text-neutral-900 group-hover:text-black transition-colors ${
                    item.fontStyle === 'italic' ? 'italic font-serif' : 'font-black tracking-widest'
                  }`}
                  style={{ fontFamily: item.fontStyle === 'italic' ? 'serif' : 'var(--font-heading)' }}
                >
                  {item.logoText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
