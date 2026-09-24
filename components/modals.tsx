'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  X,
  Star,
  Check,
  PhoneCall,
  ShoppingBag,
  ArrowRight,
  ShieldAlert,
  Clock,
  MapPin,
  Car,
  Truck,
  Trash2,
} from 'lucide-react'
import { useMode } from './mode-context'

export default function GlobalModals() {
  const {
    mode,
    quickViewItem,
    setQuickViewItem,
    addToCart,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    isDispatchModalOpen,
    setIsDispatchModalOpen,
  } = useMode()

  // Quick view sizing state
  const [selectedSize, setSelectedSize] = useState('20"')
  const [selectedFinish, setSelectedFinish] = useState('Gunmetal Grey')

  // Dispatch calculator state
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [vehicleType, setVehicleType] = useState('luxury')
  const [isCalculating, setIsCalculating] = useState(false)
  const [estimateResult, setEstimateResult] = useState<{
    eta: string
    price: string
    distance: string
  } | null>(null)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsCalculating(true)
    setTimeout(() => {
      setIsCalculating(false)
      const base = vehicleType === 'heavy' ? 140 : vehicleType === 'exotic' ? 110 : 85
      setEstimateResult({
        eta: '18 - 24 Minutes',
        price: `$${base}.00`,
        distance: '8.4 Miles',
      })
    }, 400)
  }

  return (
    <>
      {/* 1. Quick-View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden">
            <button
              onClick={() => setQuickViewItem(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl bg-neutral-50 border border-neutral-100 p-6 flex items-center justify-center overflow-hidden">
                <Image
                  src={quickViewItem.image}
                  alt={quickViewItem.name}
                  fill
                  sizes="300px"
                  className="object-contain p-2"
                />
                {quickViewItem.badge && (
                  <span className="absolute top-3 left-3 bg-neutral-950 text-white px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                    {quickViewItem.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs text-neutral-400 ml-1">
                    ({quickViewItem.reviews} reviews)
                  </span>
                </div>

                <h3
                  className="text-2xl font-black text-neutral-950 uppercase tracking-tight mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {quickViewItem.name}
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  {quickViewItem.spec}
                </p>

                <div className="text-3xl font-black text-neutral-950 mb-5">
                  {quickViewItem.price}
                </div>

                {/* Sizing selection for wheels */}
                {mode === 'wheels' ? (
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-700 block mb-2">
                        Diameter:
                      </span>
                      <div className="flex gap-2">
                        {['19"', '20"', '21"'].map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                              selectedSize === size
                                ? 'bg-neutral-950 text-white border-neutral-950'
                                : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-700 block mb-2">
                        Finish:
                      </span>
                      <div className="flex gap-2">
                        {['Gunmetal', 'Satin Bronze', 'Gloss Black'].map(
                          (fin) => (
                            <button
                              key={fin}
                              onClick={() => setSelectedFinish(fin)}
                              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold border transition-all ${
                                selectedFinish === fin
                                  ? 'bg-neutral-100 text-neutral-900 border-neutral-800'
                                  : 'bg-white text-neutral-500 border-neutral-200'
                              }`}
                            >
                              {fin}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs mb-6 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      <span>Immediate Dispatch Available</span>
                    </div>
                    <p className="text-[11px] text-amber-800">
                      GPS-tracked operator ready to deploy with soft-strap loading equipment.
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      addToCart(quickViewItem)
                      setQuickViewItem(null)
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{mode === 'wheels' ? 'Add to Cart' : 'Request Dispatch'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Instant Tow Dispatch Calculator Modal */}
      {isDispatchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden">
            <button
              onClick={() => setIsDispatchModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-neutral-950">
                <Truck className="w-4 h-4" />
              </div>
              <h3
                className="text-xl font-black text-neutral-950 uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Instant Tow ETA & Upfront Quote
              </h3>
            </div>
            <p className="text-xs text-neutral-500 mb-6">
              Enter pickup details for real-time fleet ETA and transparent guaranteed pricing.
            </p>

            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Pickup Location / Cross Streets</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mile 42, Highway 101 or 742 Evergreen Terr"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Destination / Repair Shop</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Home, Dealer, or Elite Motorsport Center"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block mb-1.5">
                  Vehicle Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'sedan', label: 'Standard' },
                    { id: 'exotic', label: 'Exotic / AWD' },
                    { id: 'heavy', label: 'Truck / SUV' },
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVehicleType(v.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all ${
                        vehicleType === v.id
                          ? 'bg-neutral-950 text-white border-neutral-950'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isCalculating}
                className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-widest transition-colors shadow-md mt-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {isCalculating ? 'Locating Closest Unit...' : 'Calculate Live ETA & Price'}
              </button>
            </form>

            {estimateResult && (
              <div className="mt-5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                      Estimated Arrival
                    </span>
                    <span className="text-base font-extrabold text-neutral-950">
                      {estimateResult.eta}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                      Guaranteed Rate
                    </span>
                    <span className="text-xl font-black text-amber-600">
                      {estimateResult.price}
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex gap-2">
                  <a
                    href="tel:+18005551234"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Confirm Dispatch (1-800-555-1234)</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 border-l border-neutral-200">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <div className="flex items-center gap-2 font-black text-lg text-neutral-950 uppercase">
                <ShoppingBag className="w-5 h-5" />
                <span>Your Order ({cartItems.length})</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center text-center text-neutral-400">
                  <ShoppingBag className="w-10 h-10 mb-2 opacity-30" />
                  <p className="text-xs uppercase tracking-wider font-semibold">
                    Your cart is currently empty
                  </p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-50 border border-neutral-200/60"
                  >
                    <div className="relative w-14 h-14 rounded-xl bg-white p-1 border border-neutral-100 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-neutral-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400 truncate">
                        {item.spec}
                      </p>
                      <div className="text-xs font-black text-neutral-950 mt-0.5">
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>Shipping / Dispatch Fee</span>
                  <span className="font-bold text-emerald-600">Calculated at Step 2</span>
                </div>
                <button
                  onClick={() => alert('Proceeding to secure checkout...')}
                  className="w-full py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest transition-colors shadow-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
