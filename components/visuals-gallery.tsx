'use client'

import Image from 'next/image'
import { useMode } from './mode-context'
import { useEffect, useState } from 'react'

export default function VisualsGallery() {
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

  // User request: In tow trucking mode, remove visuals
  if (!isWheels) {
    return null
  }

  const wheelVisuals = [
    {
      src: '/site-images/gallery-speedo.jpg',
      alt: 'Precision motorsport speedometer',
      caption: 'Cockpit Analytics',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/site-images/gallery-green-car.jpg',
      alt: 'Aggressive track stance supercar',
      caption: 'Aero Dynamics',
      aspect: 'aspect-[4/5]',
    },
    {
      src: '/site-images/gallery-wheel-close.jpg',
      alt: 'Bespoke alloy wheel with neon caliper',
      caption: 'Forged Precision',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/site-images/gallery-rim-detail.jpg',
      alt: 'Monoblock wheel finish closeup',
      caption: 'Anodized Texture',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/site-images/gallery-dark-wheel.jpg',
      alt: 'Deep dish racing rim',
      caption: 'Staggered Fitment',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/site-images/gallery-track.jpg',
      alt: 'Circuit racing sports car',
      caption: 'Track Ready',
      aspect: 'aspect-[4/3]',
    },
  ]

  const towVisuals = [
    {
      src: '/site-images/tow-service-1.jpg',
      alt: 'Flatbed zero clearance loading',
      caption: 'Zero Incline Bed',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/site-images/tow-service-2.jpg',
      alt: 'Heavy wrecker commercial fleet',
      caption: 'Commercial Power',
      aspect: 'aspect-[4/5]',
    },
    {
      src: '/site-images/highway-night.jpg',
      alt: 'Night highway patrol dispatch',
      caption: '24/7 Coverage',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/site-images/tow-service-3.jpg',
      alt: 'Underground parking recovery',
      caption: 'Low Clearance Rig',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/site-images/tow-service-4.jpg',
      alt: 'Off-road recovery winch equipment',
      caption: 'Hydraulic Winching',
      aspect: 'aspect-[3/4]',
    },
    {
      src: '/site-images/article-battery.jpg',
      alt: 'Roadside diagnostic and battery test',
      caption: 'Mobile Tech',
      aspect: 'aspect-[4/3]',
    },
  ]

  const visuals = isWheels ? wheelVisuals : towVisuals

  return (
    <section id="gallery" className="w-full py-20 lg:py-28 bg-white">
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
              {isWheels ? 'Editorial Portfolio' : 'Live Incident Archive'}
            </span>
            <span className="w-8 h-[1px] bg-neutral-300" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.05' }}
          >
            VISUALS
          </h2>
        </div>

        {/* Gallery Grid with rounded corners matching screenshot */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 transition-all duration-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          {visuals.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-neutral-100 ${item.aspect} shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span
                  className="text-white text-xs font-bold uppercase tracking-wider block drop-shadow"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
