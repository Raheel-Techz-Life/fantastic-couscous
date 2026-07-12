'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { landingConfig } from '@/config/landing-data'
import { VernacularPreloader } from '@/components/ui/vernacular-preloader'
import { Navigation } from '@/components/landing/Navigation'
import { HeroSection } from '@/components/landing/HeroSection'
import { ProofOfConcept } from '@/components/landing/ProofOfConcept'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { ImpactSection } from '@/components/landing/ImpactSection'
import { TechnologySection } from '@/components/landing/TechnologySection'
import { TeamSection } from '@/components/landing/TeamSection'
import { ProblemStatement } from '@/components/landing/ProblemStatement'
import { MafiaOffer } from '@/components/landing/MafiaOffer'
import { StakeholderProof } from '@/components/landing/StakeholderProof'
import { FieldInsights } from '@/components/landing/FieldInsights'
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/landing/Footer'
import { DifferentiatorsSection } from '@/components/landing/DifferentiatorsSection'

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  return (
    <>
      <VernacularPreloader show={showPreloader} onComplete={() => setShowPreloader(false)} />
      
      {!showPreloader && (
        <main className="min-h-screen bg-background animate-in fade-in duration-1000">
          <Navigation />
          
          {/* 1. HeroSection (The Hook) */}
          <HeroSection />

          {/* 2. The One Big Problem (The Tension) */}
          <ProblemStatement />

          {/* 3. MafiaOffer (The Core Commitment) */}
          <MafiaOffer />

          {/* 4. StakeholderProof (The Logic for 3 Personas) */}
          <StakeholderProof />

          {/* 5. Field Insights (The Intelligence) */}
          <FieldInsights />

          {/* 5.5 Key Differentiators */}
          <DifferentiatorsSection />

          {/* 6. Proof of Concept (Validation) */}
          <ProofOfConcept />

          {/* 7. How It Works (The Narrative Flow) */}
          <HowItWorks />

          {/* 8. Impact Numbers (Quantitative Thresholds) */}
          <ImpactSection />

          {/* 9. Technology Stack (The Unique Mechanism) */}
          <TechnologySection />

          {/* 10. Team Section (The Verification) */}
          <TeamSection />

          {/* 11. Footer CTA (The Monetization Gate) */}
          <CTASection />

          <Footer />
        </main>
      )}
    </>
  )
}

