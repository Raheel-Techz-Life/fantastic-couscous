'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { landingConfig } from '@/config/landing-data'
import { VernacularPreloader } from '@/components/ui/vernacular-preloader'
import { Navigation } from '@/components/landing/Navigation'
import { HeroSection } from '@/components/landing/HeroSection'
import { VideoCarousel } from '@/components/landing/VideoCarousel'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { ImpactSection } from '@/components/landing/ImpactSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { TechnologySection } from '@/components/landing/TechnologySection'
import { TeamSection } from '@/components/landing/TeamSection'
import { ProblemStatement } from '@/components/landing/ProblemStatement'
import { MafiaOffer } from '@/components/landing/MafiaOffer'
import { StakeholderProof } from '@/components/landing/StakeholderProof'
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/landing/Footer'
import { IVRSimulator } from '@/components/landing/IVRSimulator'
import { WhatsAppDashboard } from '@/components/landing/WhatsAppDashboard'

export default function Home() {
  const { branding } = landingConfig
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

      {/* 3. StakeholderProof (The Logic for 3 Personas) */}
      <StakeholderProof />

      {/* 4. Live Demo Showcase (The Solution in Principle) */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 1.5, y: -100, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 400, damping: 15, mass: 1.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Proof of Concept
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 1.2, y: -100, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
            className="text-4xl font-black tracking-tight underline decoration-primary/30 underline-offset-8"
          >
            Validating the logic
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 350, damping: 15, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto italic"
          >
            "You are not validating the UI; you are validating that the logic of your solution solves the problem."
          </motion.p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="w-full max-w-5xl mx-auto">
            <VideoCarousel />
          </div>
          
          <div className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h3 className="text-3xl font-bold">Dual Experience Simulator</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Experience the 48-hour pipeline logic from both the worker's voice-first interaction and the employer's mobile-native review dashboard.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
              <div className="p-6 rounded-3xl border border-border bg-card shadow-premium overflow-hidden flex justify-center">
                <IVRSimulator />
              </div>
              <div className="flex justify-center w-full">
                <WhatsAppDashboard />
              </div>
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
      )}
    </>
  )
}

