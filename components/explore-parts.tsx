'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Heart, Star, ChevronLeft, ChevronRight, Eye, ShoppingBag } from 'lucide-react'
import { useMode, type ProductItem } from './mode-context'

export default function ExploreParts() {
  const {
    mode,
    selectedCategory,
    setSelectedCategory,
    setQuickViewItem,
    addToCart,
    setIsDispatchModalOpen,
  } = useMode()
  const [visible, setVisible] = useState(true)
  const [displayMode, setDisplayMode] = useState(mode)
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

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

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const isWheels = displayMode === 'wheels'

  // Trending Wheels data
  const trendingWheels: ProductItem[] = [
    {
      id: 'w-1',
      name: 'Vortex Forged 20"',
      spec: 'Gunmetal Machined Face • 5x112',
      price: '$389.00',
      rating: 5,
      reviews: 42,
      image: '/site-images/wheel-1.jpg',
      badge: 'Hot Drop',
      category: 'wheels',
    },
    {
      id: 'w-2',
      name: 'Apex RS Monoblock 19"',
      spec: 'Satin Bronze 5-Spoke • 5x120',
      price: '$420.00',
      rating: 5,
      reviews: 58,
      image: '/site-images/wheel-2.jpg',
      badge: 'Bestseller',
      category: 'wheels',
    },
    {
      id: 'w-3',
      name: 'Carbon Matrix 21"',
      spec: 'Gloss Black Concave • Centerlock',
      price: '$485.00',
      rating: 5,
      reviews: 31,
      image: '/site-images/wheel-3.jpg',
      category: 'wheels',
    },
    {
      id: 'w-4',
      name: 'Stealth Aero 20"',
      spec: 'Matte Titanium Multi-Spoke • 5x130',
      price: '$349.00',
      rating: 5,
      reviews: 64,
      image: '/site-images/wheel-4.jpg',
      badge: 'Sale',
      category: 'wheels',
    },
  ]

  // Trending Spares data
  const trendingSpares: ProductItem[] = [
    {
      id: 's-1',
      name: 'Ceramic Brake Disc Kit',
      spec: '6-Piston Brembo Caliper System',
      price: '$649.00',
      rating: 5,
      reviews: 29,
      image: '/site-images/part-brake.jpg',
      badge: 'Track Spec',
      category: 'brakes',
    },
    {
      id: 's-2',
      name: 'Coilover Suspension System',
      spec: '32-Way Damping Adjustable Monotube',
      price: '$890.00',
      rating: 5,
      reviews: 47,
      image: '/site-images/part-suspension.jpg',
      category: 'suspension',
    },
    {
      id: 's-3',
      name: 'Billet Alternator Unit',
      spec: 'High-Output 250 Amp Racing Spec',
      price: '$320.00',
      rating: 5,
      reviews: 19,
      image: '/site-images/part-engine.jpg',
      badge: 'Heavy Duty',
      category: 'brakes',
    },
    {
      id: 's-4',
      name: 'Competition Performance Tyres',
      spec: 'Semi-Slick R-Compound 265/35R19',
      price: '$280.00',
      rating: 5,
      reviews: 53,
      image: '/site-images/spotlight-tyres.jpg',
      category: 'tyres',
    },
  ]

  // Towing Services
  const towingServices: ProductItem[] = [
    {
      id: 't-1',
      name: 'Zero-Angle Flatbed Tow',
      spec: 'For lowered & exotic sports cars',
      price: 'From $85.00',
      rating: 5,
      reviews: 184,
      image: '/site-images/tow-service-1.jpg',
      badge: 'Most Popular',
      category: 'flatbed',
    },
    {
      id: 't-2',
      name: 'Heavy-Duty Recovery',
      spec: 'Commercial, RV & Box truck towing',
      price: 'From $140.00',
      rating: 5,
      reviews: 92,
      image: '/site-images/tow-service-2.jpg',
      badge: '24/7 Fleet',
      category: 'heavy',
    },
    {
      id: 't-3',
      name: 'Rapid Wheel-Lift Towing',
      spec: 'Underground parking garage safe',
      price: 'From $70.00',
      rating: 5,
      reviews: 210,
      image: '/site-images/tow-service-3.jpg',
      category: 'flatbed',
    },
    {
      id: 't-4',
      name: 'Accident Winch-Out Rescue',
      spec: 'Off-road, snow & ditch recovery',
      price: 'From $95.00',
      rating: 5,
      reviews: 77,
      image: '/site-images/tow-service-4.jpg',
      badge: 'Emergency',
      category: 'heavy',
    },
  ]

  // Towing Roadside Assistance
  const roadsideServices: ProductItem[] = [
    {
      id: 'r-1',
      name: 'Battery Boost / Jumpstart',
      spec: 'Commercial 12V/24V booster truck',
      price: '$45.00',
      rating: 5,
      reviews: 312,
      image: '/site-images/article-battery.jpg',
      badge: '15 min ETA',
      category: 'battery',
    },
    {
      id: 'r-2',
      name: 'Emergency Tire Replacement',
      spec: 'Spare mount & bead reseat on-site',
      price: '$55.00',
      rating: 5,
      reviews: 145,
      image: '/site-images/wheel-1.jpg',
      category: 'battery',
    },
    {
      id: 'r-3',
      name: 'Emergency Fuel Delivery',
      spec: 'Premium 93 octane & Ultra-Low Diesel',
      price: '$35.00',
      rating: 5,
      reviews: 88,
      image: '/site-images/article-oil.jpg',
      category: 'lockout',
    },
    {
      id: 'r-4',
      name: 'Vehicle Lockout Service',
      spec: 'Non-destructive air wedge door unlock',
      price: '$50.00',
      rating: 5,
      reviews: 203,
      image: '/site-images/article-engine.jpg',
      badge: 'Fast',
      category: 'lockout',
    },
  ]

  const topItems = (isWheels ? trendingWheels : towingServices).filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  )
  const bottomItems = (isWheels ? trendingSpares : roadsideServices).filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  )

  const filterTabs = isWheels
    ? [
        { id: 'all', label: 'All Items' },
        { id: 'wheels', label: 'Forged Wheels' },
        { id: 'suspension', label: 'Suspension' },
        { id: 'brakes', label: 'Brakes' },
        { id: 'tyres', label: 'Tyres' },
      ]
    : [
        { id: 'all', label: 'All Services' },
        { id: 'flatbed', label: 'Flatbed Tow' },
        { id: 'heavy', label: 'Heavy Duty' },
        { id: 'battery', label: 'Battery / Jump' },
        { id: 'lockout', label: 'Lockout' },
      ]

  return (
    <section id="wheels" className="w-full py-20 lg:py-28 bg-white border-b border-neutral-200/60">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Main Section Heading */}
        <div
          className="text-center mb-12 transition-all duration-400"
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
              — 02 // {isWheels ? 'CURATED FITMENTS' : 'LIVE FLEET UNITS'} —
            </span>
            <span className="w-8 h-[1px] bg-neutral-300" />
          </div>

          <h2
            className="text-editorial text-6xl sm:text-7xl lg:text-8xl text-neutral-950 uppercase tracking-wide"
            style={{ lineHeight: '0.92' }}
          >
            {isWheels ? 'EXPLORE PARTS' : 'EXPLORE SERVICES'}
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === tab.id
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section 1: Trending Wheels / Towing Services */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200/80">
            <div>
              <h3
                className="text-editorial-headline text-3xl sm:text-4xl text-neutral-950 uppercase"
              >
                {isWheels ? 'Trending Wheels' : 'Towing & Hauling'}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {isWheels
                  ? 'Precision forged alloy wheels engineered for ultimate stance and grip'
                  : 'Licensed, bonded flatbed and wheel-lift tow services dispatched 24/7'}
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Cards Grid - Light styled like screenshot */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            {topItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col bg-[#f7f7f8] hover:bg-white rounded-3xl p-5 border border-neutral-200/60 hover:border-neutral-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Showcase */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white mb-5 flex items-center justify-center border border-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-neutral-950 text-white px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </div>
                  )}

                  {/* Wishlist button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-rose-500 transition-colors shadow-sm"
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites[item.id] ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                  </button>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                    <button
                      onClick={() => setQuickViewItem(item)}
                      className="inline-flex items-center gap-1.5 bg-white text-neutral-950 text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-neutral-100 uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isWheels ? 'Quick View' : 'Service Specs'}</span>
                    </button>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-[11px] text-neutral-400 font-semibold ml-1.5">
                    ({item.reviews})
                  </span>
                </div>

                {/* Title & Spec */}
                <h4
                  className="text-base font-extrabold text-neutral-900 group-hover:text-black uppercase tracking-tight mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-500 mb-3">{item.spec}</p>

                {/* Price & Action */}
                <div className="mt-auto pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                  <span className="text-lg font-black text-neutral-950 tracking-tight">
                    {item.price}
                  </span>
                  <button
                    onClick={() => {
                      if (isWheels) {
                        addToCart(item)
                      } else {
                        setIsDispatchModalOpen(true)
                      }
                    }}
                    className="inline-flex items-center gap-1 text-[11px] uppercase font-bold text-neutral-600 hover:text-black transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{isWheels ? 'Add to Cart' : 'Dispatch'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Trending Spares / Roadside Assist */}
        <div id="spares">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200/80">
            <div>
              <h3
                className="text-editorial-headline text-3xl sm:text-4xl text-neutral-950 uppercase"
              >
                {isWheels ? 'Trending Spares' : 'Roadside Assistance'}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {isWheels
                  ? 'High-performance motorsport accessories, cooling, brakes and suspension'
                  : 'Emergency fast-response roadside recovery services delivered right to you'}
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Spares Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            {bottomItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col bg-[#f7f7f8] hover:bg-white rounded-3xl p-5 border border-neutral-200/60 hover:border-neutral-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Showcase */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white mb-5 flex items-center justify-center border border-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-neutral-950 text-white px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </div>
                  )}

                  {/* Wishlist button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-rose-500 transition-colors shadow-sm"
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites[item.id] ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                  </button>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                    <button
                      onClick={() => setQuickViewItem(item)}
                      className="inline-flex items-center gap-1.5 bg-white text-neutral-950 text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-neutral-100 uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isWheels ? 'Quick View' : 'Service Specs'}</span>
                    </button>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-[11px] text-neutral-400 font-semibold ml-1.5">
                    ({item.reviews})
                  </span>
                </div>

                {/* Title & Spec */}
                <h4
                  className="text-base font-extrabold text-neutral-900 group-hover:text-black uppercase tracking-tight mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-500 mb-3">{item.spec}</p>

                {/* Price & Action */}
                <div className="mt-auto pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                  <span className="text-lg font-black text-neutral-950 tracking-tight">
                    {item.price}
                  </span>
                  <button
                    onClick={() => {
                      if (isWheels) {
                        addToCart(item)
                      } else {
                        setIsDispatchModalOpen(true)
                      }
                    }}
                    className="inline-flex items-center gap-1 text-[11px] uppercase font-bold text-neutral-600 hover:text-black transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{isWheels ? 'Add to Cart' : 'Dispatch'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
