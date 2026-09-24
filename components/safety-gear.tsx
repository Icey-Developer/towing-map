'use client'

import Image from 'next/image'
import { useMode } from './mode-context'
import { useEffect, useState } from 'react'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

export default function SafetyGear() {
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

  const wheelArticles = [
    {
      id: 'a-1',
      image: '/site-images/article-engine.jpg',
      category: 'Motorsport Tech',
      date: 'OCTOBER 18, 2025',
      title: 'OPTIMIZING WHEEL OFFSET & TRACK STANCE',
      desc: 'Discover how negative offset and staggered fitments enhance lateral cornering g-forces and braking stability.',
    },
    {
      id: 'a-2',
      image: '/site-images/article-oil.jpg',
      category: 'Maintenance',
      date: 'NOVEMBER 04, 2025',
      title: 'CERAMIC BRAKE ROTOR INSPECTION PROTOCOL',
      desc: 'Crucial steps for checking thermal micro-fractures, pad bedding wear, and caliper piston pressure balance.',
    },
    {
      id: 'a-3',
      image: '/site-images/article-battery.jpg',
      category: 'Tire Science',
      date: 'DECEMBER 12, 2025',
      title: 'HEAT CYCLES & TREAD COMPOUND LONGEVITY',
      desc: 'Understanding the glass transition temperature of competition semi-slicks on track days and road drives.',
    },
  ]

  const towArticles = [
    {
      id: 't-1',
      image: '/site-images/article-battery.jpg',
      category: 'Roadside Guide',
      date: 'OCTOBER 15, 2025',
      title: 'WHAT TO DO IN A HIGHWAY BREAKDOWN EMERGENCY',
      desc: 'Key survival steps: pulling onto the shoulder, activating hazards, deploying triangles, and calling dispatch.',
    },
    {
      id: 't-2',
      image: '/site-images/article-engine.jpg',
      category: 'Fleet Safety',
      date: 'NOVEMBER 10, 2025',
      title: 'WHY FLATBED TOWING PROTECTS AWD & EV DRIVETRAINS',
      desc: 'Electric motors and all-wheel-drive differentials require zero ground friction transit to prevent motor drag.',
    },
    {
      id: 't-3',
      image: '/site-images/article-oil.jpg',
      category: 'Recovery',
      date: 'DECEMBER 02, 2025',
      title: 'WINTER WINCH-OUTS & SUB-ZERO BATTERY BOOSTS',
      desc: 'How our heavy-duty hydraulic winches safely extract vehicles from black ice ditches without frame damage.',
    },
  ]

  const articles = isWheels ? wheelArticles : towArticles

  return (
    <section className="w-full py-20 lg:py-28 bg-[#fafafa] border-b border-neutral-200/60">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Header with Bebas Neue font */}
        <div
          className="text-center mb-16 transition-all duration-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-neutral-300" />
            <span
              className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              — 05 // {isWheels ? 'EDITORIAL KNOWLEDGE' : 'DISPATCH PROTOCOLS'} —
            </span>
            <span className="w-8 h-[1px] bg-neutral-300" />
          </div>

          <h2
            className="text-editorial text-6xl sm:text-7xl lg:text-8xl text-neutral-950 uppercase tracking-wide"
            style={{ lineHeight: '0.92' }}
          >
            {isWheels ? 'PERFORMANCE JOURNAL' : 'RESCUE DISPATCH LOGS'}
          </h2>
        </div>

        {/* 3 Editorial Cards matching screenshot layout */}
        <div
          className="grid md:grid-cols-3 gap-8 transition-all duration-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          {articles.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-600"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-1.5 shadow-xs">
                  <Tag className="w-3 h-3 text-neutral-600" />
                  <span>{item.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>

                <h3
                  className="text-lg font-black text-neutral-950 group-hover:text-black uppercase tracking-tight leading-snug mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-500 leading-relaxed mb-6 line-clamp-3">
                  {item.desc}
                </p>

                {/* Read more button styled like the screenshot */}
                <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 ${
                      isWheels
                        ? 'bg-neutral-950 text-white hover:bg-neutral-800'
                        : 'bg-amber-500 text-neutral-950 hover:bg-amber-400'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
