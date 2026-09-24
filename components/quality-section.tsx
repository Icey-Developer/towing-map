'use client'

import Image from 'next/image'
import { ShieldCheck, Headphones, Award, Zap, Clock, Truck, Wrench, ShieldAlert } from 'lucide-react'
import { useMode } from './mode-context'
import { useEffect, useState } from 'react'

export default function QualitySection() {
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

  const content = isWheels
    ? {
        title1: 'DRIVEN TO DELIVER',
        title2: 'QUALITY',
        left: [
          {
            icon: ShieldCheck,
            title: 'GUARANTEED QUALITY',
            subtitle: 'of Auto Parts',
            desc: 'Every alloy wheel and performance tyre is TUV certified and stress tested for ultra high load limits.',
          },
          {
            icon: Headphones,
            title: 'GREAT CUSTOMER',
            subtitle: 'SUPPORT',
            desc: 'Expert automotive technicians available to calculate precise offset, PCD, and fender clearances.',
          },
        ],
        right: [
          {
            icon: Award,
            title: 'BEST QUALITY',
            subtitle: 'Spare Parts',
            desc: 'Precision engineered motorsport components crafted from forged aeronautical grade aluminum.',
          },
          {
            icon: Zap,
            title: 'SUPER PROMPT',
            subtitle: 'DELIVERY',
            desc: 'Express dispatch nationwide with secure protective wheel packaging and tracking included.',
          },
        ],
      }
    : {
        title1: 'BUILT TO RESCUE',
        title2: 'RELIABLY',
        left: [
          {
            icon: Clock,
            title: '30-MIN AVERAGE',
            subtitle: 'ARRIVAL TIME',
            desc: 'GPS tracked dispatch finds the closest tow unit to your breakdown location in seconds.',
          },
          {
            icon: ShieldAlert,
            title: 'DAMAGE-FREE',
            subtitle: 'TOW GUARANTEE',
            desc: 'Modern soft-strap flatbed and wheel-lift systems ensure luxury, exotic, and daily cars remain immaculate.',
          },
        ],
        right: [
          {
            icon: Truck,
            title: 'CERTIFIED FLEET',
            subtitle: '& OPERATORS',
            desc: 'Fully insured, background-checked recovery specialists equipped for all vehicle classifications.',
          },
          {
            icon: Wrench,
            title: '24/7/365 ROADSIDE',
            subtitle: 'ASSISTANCE',
            desc: 'Battery boosts, tire changes, fuel delivery, and lockout services anywhere on the road.',
          },
        ],
      }

  return (
    <section className="w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Editorial Heading */}
        <div
          className="text-center mb-16 lg:mb-20 transition-all duration-400"
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
              {isWheels ? 'Strict Standards' : 'Rapid Response'}
            </span>
            <span className="w-8 h-[1px] bg-neutral-300" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-950 uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.05' }}
          >
            {content.title1}{' '}
            <span className={isWheels ? 'text-neutral-400' : 'text-amber-500'}>
              {content.title2}
            </span>
          </h2>
        </div>

        {/* 3 Column Layout matching screenshot: Left features, Center wheel/truck, Right features */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left Feature Column */}
          <div
            className="lg:col-span-3 space-y-10 lg:space-y-14 transition-all duration-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            {content.left.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group text-center lg:text-right">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white text-neutral-800 mb-3 transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-base font-extrabold text-neutral-950 uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Center Column: The Large Alloy Wheel / Tow Truck */}
          <div className="lg:col-span-6 relative aspect-square max-w-[420px] mx-auto w-full flex items-center justify-center">
            {/* Soft drop shadow */}
            <div className="absolute bottom-6 w-3/4 h-8 bg-black/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative w-full h-full crossfade-container">
              {/* Wheels Centerpiece: Alloy Wheel */}
              <div
                className={`crossfade-layer flex items-center justify-center ${
                  isWheels ? 'active' : 'inactive'
                }`}
              >
                <div className="relative w-full h-full max-h-[380px]">
                  <Image
                    src="/alloy-wheel-new.jpg"
                    alt="Forged multi-spoke alloy wheel in gunmetal grey"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Towing Centerpiece: Heavy Tow Truck */}
              <div
                className={`crossfade-layer flex items-center justify-center ${
                  !isWheels ? 'active' : 'inactive'
                }`}
              >
                <div className="relative w-full h-full max-h-[380px]">
                  <Image
                    src="/tow-truck-hero.png"
                    alt="Elite 24/7 recovery tow truck"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Feature Column */}
          <div
            className="lg:col-span-3 space-y-10 lg:space-y-14 transition-all duration-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            {content.right.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white text-neutral-800 mb-3 transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-base font-extrabold text-neutral-950 uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto lg:mr-auto lg:ml-0">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
