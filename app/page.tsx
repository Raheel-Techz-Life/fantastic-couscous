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
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/landing/Footer'
import { IVRSimulator } from '@/components/landing/IVRSimulator'
import { WhatsAppDashboard } from '@/components/landing/WhatsAppDashboard'

export default function Home() {
  const { branding } = landingConfig

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Live Demo Showcase */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Live Demo
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight">Experience the Zero-Barrier flow</h2>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <VideoCarousel />
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Interactive Previews</h3>
            <p className="text-muted-foreground leading-relaxed">
              Explore both the worker's voice-first interaction and the employer's mobile-native review dashboard.
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

      {/* Page Sections */}
      <HowItWorks />
      <ImpactSection />
      <FeaturesSection />
      <TechnologySection />
      <TeamSection />
      <CTASection />

      <Footer />
    </main>
  )
}
