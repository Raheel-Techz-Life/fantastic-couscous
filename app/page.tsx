'use client'

import { useEffect, useState } from 'react'
import { VernacularPreloader } from '@/components/ui/vernacular-preloader'
import { Navigation } from '@/components/landing/Navigation'
import { HeroSection } from '@/components/landing/HeroSection'
import { ProblemStatement } from '@/components/landing/ProblemStatement'
import { InformalLabor } from '@/components/landing/InformalLabor'
import { MafiaOffer } from '@/components/landing/MafiaOffer'
import { EcosystemSection } from '@/components/landing/EcosystemSection'
import { MarketDynamicsSection } from '@/components/landing/MarketDynamicsSection'
import { RoadmapSection } from '@/components/landing/RoadmapSection'
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/landing/Footer'

const PRELOADER_SESSION_KEY = 'haazri-preloader-shown'

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(PRELOADER_SESSION_KEY)) {
        // Already greeted this session — skip straight to the real page.
        setShowPreloader(false)
      } else {
        sessionStorage.setItem(PRELOADER_SESSION_KEY, '1')
      }
    } catch {
      // sessionStorage unavailable (privacy mode, etc.) — just let it play once
    }
  }, [])

  return (
    <>
      <VernacularPreloader show={showPreloader} onComplete={() => setShowPreloader(false)} />

      {/* Content mounts immediately and renders underneath the preloader
          overlay (z-[100000], opaque background) instead of waiting for it,
          so the page is ready the instant the greeting animation finishes. */}
      <main className="min-h-screen bg-background animate-in fade-in duration-1000">
        <Navigation />

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Broken Reality (Pain Statement) */}
        <ProblemStatement />

        {/* 3. Informal Labor (Quote + Badges) */}
        <InformalLabor />

        {/* 4. Build Your Local Workforce (Mafia Offer) */}
        <MafiaOffer />

        {/* 5. Ecosystem Architecture (B2C, B2B, B2G Tiers) */}
        <EcosystemSection />

        {/* 6. Market Dynamics & Policy Tailwinds */}
        <MarketDynamicsSection />

        {/* 7. Strategic Roadmap */}
        <RoadmapSection />

        {/* 8. Call To Action */}
        <CTASection />

        {/* 9. Footer */}
        <Footer />
      </main>
    </>
  )
}
