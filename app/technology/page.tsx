'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { PremiumCard } from '@/components/ui/premium-card'
import { 
  Database, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Network 
} from 'lucide-react'

export default function TechnologyPage() {
  const { technology } = landingConfig

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            Our Technical <span className="text-primary italic">Stack</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-2xl leading-relaxed"
          >
            HAAZRI is built on the pillars of India's open digital infrastructure—specifically ONEST and BHASHINI—to ensure industrial-grade scalability and inclusivity.
          </motion.p>
        </div>
      </section>

      {/* Tech Breakdown */}
      <section className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Diagramish view */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <Network className="w-8 h-8 text-primary" />
                System Architecture
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {technology.architecture.map((item, idx) => (
                  <PremiumCard 
                    key={idx}
                    delay={idx * 0.1}
                    className="flex items-center gap-6 p-6 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.item}</h3>
                      <div className="flex gap-2 items-center mt-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">{item.tech}</span>
                        <span className="text-xs text-muted-foreground">— {item.purpose}</span>
                      </div>
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </div>

            {/* Right: Detailed text */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  BHASHINI Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We leverage Digital India's language AI stack for Automatic Speech Recognition (ASR) and Natural Language Understanding (NLU). This allows workers to interact with HAAZRI in their native dialects without any manual language selection.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-primary" />
                  ONEST Framework
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform is ONEST-native (Open Network for Education and Skilling), using Beckn-based protocols to ensure that every Digital Job ID created is interoperable with government job boards and private staffing aggregators.
                </p>
              </div>

               <div className="p-8 rounded-3xl glass border border-primary/20 shadow-premium">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  Security & Compliance
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {technology.compliance} We use end-to-end encryption for voice biometric data and adhere to the right-to-erasure and data-minimization principles.
                </p>
              </div>

              <div className="pt-8">
                <a 
                  href="https://github.com/haazri" 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity"
                >
                  <Code2 className="w-5 h-5" />
                  Explore on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
