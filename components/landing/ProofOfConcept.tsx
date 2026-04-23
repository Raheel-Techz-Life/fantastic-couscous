'use client'

import { motion } from 'framer-motion'
import { PremiumCard } from '@/components/ui/premium-card'
import { VideoCarousel } from './VideoCarousel'
import { IVRSimulator } from './IVRSimulator'
import { WhatsAppDashboard } from './WhatsAppDashboard'

export function ProofOfConcept() {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/20 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 1.5, y: -100, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 400, damping: 15, mass: 1.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Proof of Concept
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, scale: 1.2, y: -100, filter: 'blur(15px)' }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black tracking-tight"
        >
          Validating the <span className="text-primary italic">Logic</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 350, damping: 15, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto italic text-lg"
        >
          "You are not validating the UI; you are validating that the logic of your solution solves the problem."
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <VideoCarousel />
        </motion.div>
        
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Dual Experience Simulator</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Experience the 48-hour pipeline logic from both the worker's voice-first interaction and the employer's mobile-native review dashboard.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
            <PremiumCard 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center group"
            >
              <div className="mb-8 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Worker Side</span>
                <h4 className="text-xl font-bold">Voice-First IVR</h4>
              </div>
              <IVRSimulator />
            </PremiumCard>
            
            <PremiumCard 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center group"
            >
              <div className="mb-8 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Employer Side</span>
                <h4 className="text-xl font-bold">WhatsApp Dashboard</h4>
              </div>
              <div className="flex justify-center w-full">
                <WhatsAppDashboard />
              </div>
            </PremiumCard>
          </div>
        </div>
      </div>
    </section>
  )
}
