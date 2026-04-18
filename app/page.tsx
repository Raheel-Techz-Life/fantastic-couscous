'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { HeroSection } from '@/components/landing/HeroSection'
import { VideoCarousel } from '@/components/landing/VideoCarousel'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { ImpactSection } from '@/components/landing/ImpactSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { TechnologySection } from '@/components/landing/TechnologySection'
import { TeamSection } from '@/components/landing/TeamSection'
import { MafiaOffer } from '@/components/landing/MafiaOffer'
import { StakeholderProof } from '@/components/landing/StakeholderProof'
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/landing/Footer'
import { IVRSimulator } from '@/components/landing/IVRSimulator'
import { WhatsAppDashboard } from '@/components/landing/WhatsAppDashboard'

export default function Home() {
  const { branding } = landingConfig

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* 1. HeroSection (The Hook) */}
      <HeroSection />

      {/* 2. MafiaOffer (The Core Commitment) */}
      <MafiaOffer />

      {/* 3. StakeholderProof (The Logic for 3 Personas) */}
      <StakeholderProof />

      {/* 4. Live Demo Showcase (The Solution in Principle) */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Proof of Concept
          </motion.div>
          <h2 className="text-4xl font-black tracking-tight underline decoration-primary/30 underline-offset-8">Validating the logic</h2>
          <p className="text-muted-foreground max-w-xl mx-auto italic">"You are not validating the UI; you are validating that the logic of your solution solves the problem."</p>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <VideoCarousel />
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Dual Experience Simulator</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experience the 48-hour pipeline logic from both the worker's voice-first interaction and the employer's mobile-native review dashboard.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-3xl border border-border bg-card shadow-premium overflow-hidden">
                <IVRSimulator />
              </div>
              <WhatsAppDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works (The Narrative Flow) */}
      <HowItWorks />

      {/* 6. Impact Numbers (Quantitative Thresholds) */}
      <ImpactSection />

      {/* 7. Technology Stack (The Unique Mechanism) */}
      <TechnologySection />

      {/* 8. Team Section (The Verification) */}
      <TeamSection />

      {/* 9. Footer CTA (The Monetization Gate) */}
      <CTASection />

      <Footer />
    </main>
  )
}

