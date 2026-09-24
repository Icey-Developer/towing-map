'use client'

import Image from 'next/image'
import { useMode } from './mode-context'

export default function ParallaxBanner() {
  const { mode } = useMode()
  const isWheels = mode === 'wheels'

  return (
    <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-neutral-100">
      {/* Background Images Crossfade */}
      <div className="absolute inset-0 crossfade-container">
        {/* Wheels Parallax Banner */}
        <div
          className={`crossfade-layer ${isWheels ? 'active' : 'inactive'}`}
        >
          <Image
            src="/site-images/drift-smoke.jpg"
            alt="Track drift car in tire smoke"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Towing Parallax Banner */}
        <div
          className={`crossfade-layer ${!isWheels ? 'active' : 'inactive'}`}
        >
          <Image
            src="/site-images/highway-night.jpg"
            alt="Highway transit and tow fleet route"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Light gradient overlays for editorial finish */}
      <div className="absolute inset-0 bg-black/35 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 z-10" />

      {/* Content overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <span
          className="text-white/90 text-xs sm:text-sm uppercase tracking-[0.3em] font-bold mb-3 drop-shadow-md"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {isWheels
            ? 'HIGH-OCTANE MOTORSPORT HERITAGE'
            : 'RAPID NATIONWIDE HIGHWAY PATROL'}
        </span>

        <h2
          className="text-white text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-3xl drop-shadow-lg mb-6"
          style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.1' }}
        >
          {isWheels
            ? 'SAFETY GEAR FOR SMOKY DRIVES'
            : 'HEAVY RESCUE WHEN YOU NEED IT MOST'}
        </h2>

        <a
          href={isWheels ? '#spares' : 'tel:+18005551234'}
          className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-950 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest shadow-xl transition-transform hover:scale-105"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {isWheels ? 'EXPLORE CATALOG' : 'CALL TOW DISPATCH'}
        </a>
      </div>
    </section>
  )
}
