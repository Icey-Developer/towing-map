import Header from '@/components/header'
import Hero from '@/components/hero'
import QualitySection from '@/components/quality-section'
import Brands from '@/components/brands'
import ExploreParts from '@/components/explore-parts'
import ParallaxBanner from '@/components/parallax-banner'
import SafetyGear from '@/components/safety-gear'
import VisualsGallery from '@/components/visuals-gallery'
import ProductSpotlight from '@/components/product-spotlight'
import Footer from '@/components/footer'
import GlobalModals from '@/components/modals'
import { ModeProvider } from '@/components/mode-context'

export default function Page() {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <QualitySection />
        <Brands />
        <ExploreParts />
        <ParallaxBanner />
        <SafetyGear />
        <VisualsGallery />
        <ProductSpotlight />
        <Footer />
        <GlobalModals />
      </div>
    </ModeProvider>
  )
}
