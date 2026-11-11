'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { IVRSimulator } from '@/components/landing/IVRSimulator'
import { 
  PhoneCall, 
  Mic, 
  Fingerprint, 
  MessageSquare, 
  Smartphone, 
  Star,
  Zap,
  ShieldCheck,
  ChevronDown,
  LayoutGrid,
  Bot
} from 'lucide-react'
import dynamic from 'next/dynamic'

const VoiceMesh = dynamic(() => import('@/components/landing/VoiceMesh').then(m => m.VoiceMesh), { ssr: false })

const icons = [PhoneCall, Mic, Fingerprint, MessageSquare, Smartphone, Star]

export function HowItWorksClient() {
  const { howItWorks } = landingConfig
  const [activeJourney, setActiveJourney] = useState<'worker' | 'employer'>('worker')

  return (
    <div className="relative min-h-screen bg-background">
      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden bg-mesh">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        <VoiceMesh />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-bold text-red-500 uppercase tracking-[0.2em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Intelligence Engine Live
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-widest mb-8"
          >
            <Zap className="w-3.5 h-3.5" />
            {howItWorks.tag}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05] text-foreground"
          >
            {howItWorks.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {howItWorks.description}
          </motion.p>
        </div>
      </section>

      {/* ──── Journey Toggle ──── */}
      <section className="relative z-30 -mt-10 px-6">
        <div className="flex justify-center">
          <div className="flex p-1.5 rounded-[2rem] bg-card border border-border shadow-2xl backdrop-blur-xl">
            <button 
              onClick={() => setActiveJourney('worker')}
              className={`px-8 py-3.5 rounded-[1.5rem] text-sm font-black transition-all duration-500 cursor-pointer ${

                activeJourney === 'worker' 
                  ? 'bg-foreground text-background shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Worker Journey
            </button>
            <button 
              onClick={() => setActiveJourney('employer')}
              className={`px-8 py-3.5 rounded-[1.5rem] text-sm font-black transition-all duration-500 cursor-pointer ${

                activeJourney === 'employer' 
                  ? 'bg-foreground text-background shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Employer Journey
            </button>
          </div>
        </div>
      </section>

      {/* ──── Journey Steps ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeJourney === 'worker' ? (
            <motion.div 
              key="worker"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {howItWorks.workerJourney.map((step, idx) => {
                const Icon = icons[idx] || Star
                return (
                  <div key={idx} className="hiw-step-card group relative p-6 sm:p-8 md:p-10 rounded-[2.5rem] bg-card border border-border transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,84,0,0.1)] duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-8 text-8xl font-black text-foreground/[0.02] pointer-events-none">{step.step}</div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm">{step.description}</p>

                    
                    <div className="pt-6 border-t border-dashed border-border flex items-center gap-3">
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">Protocol: 0x{idx + 1}F</div>
                      <div className="w-1 h-1 rounded-full bg-primary/30" />
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">Status: Verified</div>
                    </div>

                    {step.faq && (
                      <div className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4">
                        <Bot className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs font-bold text-primary/70 leading-relaxed italic text-left">

                          "{step.faq}"
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </motion.div>
          ) : (
            <motion.div 
              key="employer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="grid lg:grid-cols-2 gap-16 items-center text-left"

            >
              <div className="space-y-10">
                {howItWorks.employerJourney.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(255,84,0,0.5)]" />
                    <div>
                      <h3 className="text-2xl font-black mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">{step.description}</p>

                    </div>
                  </motion.div>
                ))}
                
                <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <span className="font-black uppercase tracking-[0.2em] text-xs text-primary">Mafia Offer Guarantee</span>
                  </div>
                  <p className="text-muted-foreground italic text-lg leading-relaxed">
                    "We find you a verified, location-matched candidate within 24 hours or the process is free."
                  </p>
                </div>
              </div>

              <div className="relative aspect-square rounded-[3rem] bg-card border border-border flex items-center justify-center overflow-hidden group shadow-xl">
                {/* Background overlay glow */}
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-60 z-0 animate-pulse pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 bg-radial-gradient(from 50% 50%, circle, transparent, rgba(0,0,0,0.1))" />
                <div className="text-center p-12 relative z-10">
                  <LayoutGrid className="w-16 h-16 text-primary/30 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-primary/60">

                    Proprietary Interface [HAAZRI_CORE_v1]
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ──── Simulator ──── */}
      <section className="py-16 sm:py-20 md:py-24 bg-secondary/10 border-y border-border relative overflow-hidden">
        {/* Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black mb-6 text-foreground"

            >
              Experience the Intelligence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-xl max-w-2xl mx-auto"
            >
              Interact with our live IVR simulator to see how BHASHINI converts voice to structured talent data.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto relative group">
            {/* Ambient Casing Glow */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-60 z-0 animate-pulse pointer-events-none group-hover:opacity-85 transition-opacity duration-500" />
            <div className="relative z-10">
              <IVRSimulator />
            </div>

          </div>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 text-foreground">Technical Briefing (FAQ)</h2>

        <div className="space-y-4">
          {howItWorks.faqs.map((faq, idx) => (
            <motion.details 
              key={idx} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-[2rem] bg-card border border-border overflow-hidden transition-all hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,84,0,0.03)]"
            >
              <summary className="p-5 sm:p-6 md:p-8 flex justify-between items-center cursor-pointer font-black text-xl list-none text-foreground text-left">
                {faq.q}
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center group-open:rotate-180 transition-transform shrink-0 ml-4">
                  <ChevronDown className="w-5 h-5 text-foreground" />
                </div>
              </summary>
              <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 text-muted-foreground text-base md:text-lg leading-relaxed text-left border-t border-border/40 pt-4">

                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* ──── Final CTA ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 text-center border-t border-border bg-gradient-to-b from-transparent to-secondary/10">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-1.5 bg-primary/20 mx-auto mb-10 rounded-full" />
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-foreground">Ready to scale your talent pipeline?</h2>

          <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
            Join the elite circle of employers leveraging voice-first recruitment infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-primary text-white font-black rounded-full shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Claim Your Pilot
            </button>
            <button className="px-10 py-5 bg-card border border-border text-foreground font-black rounded-full hover:bg-secondary/50 transition-all cursor-pointer">

              Talk to an Architect
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
