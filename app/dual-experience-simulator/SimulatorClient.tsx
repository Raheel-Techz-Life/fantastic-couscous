'use client'

import { motion } from 'framer-motion'
import { PremiumCard } from '@/components/ui/premium-card'
import { IVRSimulator } from '@/components/landing/IVRSimulator'
import { WhatsAppDashboard } from '@/components/landing/WhatsAppDashboard'
import { VoiceMesh } from '@/components/landing/VoiceMesh'
import { Terminal, Smartphone, Sparkles } from 'lucide-react'

export function SimulatorClient() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-24 px-6 md:px-10 overflow-hidden bg-mesh border-b border-border/40">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        <VoiceMesh />
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Sandbox
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground"
          >
            Dual Experience <span className="text-primary italic">Simulator</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Test the HAAZRI recruitment protocol. Simulate how a worker applies via voice callback, and how the employer receives verification immediately.
          </motion.p>
        </div>
      </section>

      {/* ──── Side-by-Side Simulator Panels ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Worker Side */}
          <PremiumCard 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between group shadow-xl"
          >
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
                <Smartphone className="w-3.5 h-3.5" />
                Worker Interface
              </span>
              <h4 className="text-2xl font-black">Voice-First IVR</h4>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs mx-auto">
                No app install. Worker answers spoken questions in native dialects.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <IVRSimulator />
            </div>
          </PremiumCard>
          
          {/* Employer Side */}
          <PremiumCard 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between group shadow-xl"
          >
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
                <Terminal className="w-3.5 h-3.5" />
                Employer Interface
              </span>
              <h4 className="text-2xl font-black">WhatsApp Dashboard</h4>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs mx-auto">
                Received in 24h. Transcripts and verified voice clips ready for 1-tap review.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <WhatsAppDashboard />
            </div>
          </PremiumCard>
          
        </div>
      </section>
    </div>
  )
}
