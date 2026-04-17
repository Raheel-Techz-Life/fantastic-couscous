'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  HelpingHand,
  User 
} from 'lucide-react'

export default function ImpactPage() {
  const { impact } = landingConfig

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Social Impact
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            Scaling <span className="text-primary italic">Dignity</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-2xl leading-relaxed"
          >
            We're building the first-ever digital employment record for the 450 million workers currently hidden in India's informal economy.
          </motion.p>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="text-4xl font-black text-primary mb-2">{metric.value}</div>
                <div className="text-xs uppercase font-bold tracking-widest text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Persona Showcases */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Who we build for</h2>
            <p className="text-muted-foreground">The diverse workforce driving India's growth from the ground up.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impact.personas.map((persona, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] border border-border bg-card hover:border-primary transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 text-2xl font-bold">
                  {persona.name[0]}
                </div>
                <h3 className="text-xl font-bold mb-1">{persona.name}</h3>
                <p className="text-xs uppercase font-bold tracking-widest text-primary/70 mb-4">{persona.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{persona.context}</p>
                
                <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs italic text-muted-foreground">"I give a missed call, I get a job. No forms, no stress."</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Outcomes */}
      <section className="py-24 px-6 md:px-10 lg:px-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">Systemic Change</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Building digital footprint</h3>
                    <p className="text-muted-foreground text-sm">For many, HAAZRI is the first time their work history is recorded digitally and portably.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <HelpingHand className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Reducing hiring friction</h3>
                    <p className="text-muted-foreground text-sm">Empowering MSMEs to hire based on verified reputation rather than just word-of-mouth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 rounded-[3rem] bg-foreground text-background">
              <BarChart3 className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-3xl font-bold mb-6">"HAAZRI targets the 90% of the Indian workforce currently excluded from the formal digital economy."</h3>
              <p className="text-background/50 text-sm italic">— HAAZRI Impact Report 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
