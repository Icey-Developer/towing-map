'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react'
import { useMode } from './mode-context'

export default function Footer() {
  const { mode } = useMode()
  const isWheels = mode === 'wheels'

  return (
    <footer className="w-full bg-[#f8f9fa] border-t border-neutral-200/80 pt-16 pb-12 text-neutral-800">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-neutral-200">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8">
                <div
                  className={`w-[4px] h-7 rounded-sm transform -skew-x-12 transition-colors duration-400 ${
                    !isWheels ? 'bg-amber-500' : 'bg-neutral-950'
                  }`}
                />
                <div
                  className={`w-[3px] h-5 rounded-sm transform -skew-x-12 ml-1 opacity-60 transition-colors duration-400 ${
                    !isWheels ? 'bg-amber-400' : 'bg-neutral-600'
                  }`}
                />
              </div>
              <span
                className="text-neutral-950 font-black text-xl tracking-[0.12em] uppercase"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                ELITE
              </span>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              {isWheels
                ? 'Curators of world-class forged wheels, performance tyres, and precision automotive engineering. Built for the track, styled for the street.'
                : 'Premier 24/7 towing and heavy vehicle recovery service. Rapid dispatch, GPS fleet tracking, and damage-free vehicle transport nationwide.'}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                {isWheels
                  ? 'Certified OEM & Aftermarket Fitment Guarantee'
                  : 'Licensed, Bonded & Insured Professional Operators'}
              </span>
            </div>
          </div>

          {/* Column 1: Services / Catalog */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className="text-xs font-black uppercase tracking-[0.15em] text-neutral-950"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {isWheels ? 'Catalog' : 'Towing Fleet'}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              {(isWheels
                ? [
                    'Forged Monoblock',
                    'Multi-Piece Wheels',
                    'Competition Tyres',
                    'Ceramic Brakes',
                    'Coilovers & Stance',
                  ]
                : [
                    'Flatbed Towing',
                    'Wheel-Lift Rescue',
                    'Heavy Duty Wrecker',
                    'Accident Recovery',
                    'Motorcycle Transport',
                  ]
              ).map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-neutral-950 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className="text-xs font-black uppercase tracking-[0.15em] text-neutral-950"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              {[
                'About Our Brand',
                'Fitment Calculator',
                'Warranty & Returns',
                'Commercial Accounts',
                'Customer Reviews',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-neutral-950 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hotline */}
          <div className="lg:col-span-4 space-y-4">
            <h4
              className="text-xs font-black uppercase tracking-[0.15em] text-neutral-950"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {isWheels ? 'VIP Support & Orders' : 'Emergency 24/7 Dispatch'}
            </h4>

            <div className="space-y-2 text-xs text-neutral-600">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2.5 font-bold text-neutral-950 hover:text-amber-600 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-neutral-200 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>1-800-555-1234 (Toll-Free Dispatch)</span>
              </a>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-neutral-200 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>support@elitemotorsport.com</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-neutral-200 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>100 Motor Speedway Blvd, Performance City</span>
              </div>
            </div>

            {/* Newsletter / Quick Request */}
            <div className="pt-2">
              <div className="flex items-center rounded-full bg-white border border-neutral-300 p-1 shadow-xs focus-within:border-neutral-950 transition-colors">
                <input
                  type="email"
                  placeholder={
                    isWheels
                      ? 'Enter your email for wheel drops'
                      : 'Enter email for corporate dispatch'
                  }
                  className="bg-transparent px-3.5 py-1.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none flex-1"
                />
                <button
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-white transition-colors ${
                    !isWheels
                      ? 'bg-amber-500 hover:bg-amber-600 text-neutral-950'
                      : 'bg-neutral-950 hover:bg-neutral-800'
                  }`}
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ELITE. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-neutral-950 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neutral-950 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-neutral-950 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
