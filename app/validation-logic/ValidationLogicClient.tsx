'use client'

import { motion } from 'framer-motion'
import { VideoCarousel } from '@/components/landing/VideoCarousel'
import dynamic from 'next/dynamic'

const VoiceMesh = dynamic(() => import('@/components/landing/VoiceMesh').then(m => m.VoiceMesh), { ssr: false })
import { ShieldAlert, CheckCircle2, Play } from 'lucide-react'

export function ValidationLogicClient() {
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
            <ShieldAlert className="w-3.5 h-3.5" />
            Verification protocol
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground"
          >
            Validating the <span className="text-primary italic">Logic</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic"
          >
            "You are not validating the UI; you are validating that the logic of your solution solves the problem."
          </motion.p>
        </div>
      </section>

      {/* ──── Video Gallery Section ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
        
        <div className="relative z-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Field Pilot Proof of Concept</h2>
            <p className="text-muted-foreground leading-relaxed">
              Watch real-time worker calls and employer dashboards recorded during our regional pilots in Hubballi-Dharwad.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <VideoCarousel />
          </motion.div>
        </div>
      </section>

      {/* ──── Core Logic Highlights ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-20 bg-secondary/10 border-t border-border/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Linguistic Literacy Barrier",
              desc: "Eliminated the need to type or read. Workers interact purely via voice callback (IVR) translating dialects dynamically."
            },
            {
              title: "Frictionless Matching",
              desc: "Traditional job applications take days of search. HAAZRI alerts local workers via SMS instantly, matching in 24h."
            },
            {
              title: "Attendance Commitment",
              desc: "Mitigated no-shows by auto-requesting confirmations the evening before, triggering backup matches immediately on decline."
            }
          ].map((point, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-card border border-border space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
