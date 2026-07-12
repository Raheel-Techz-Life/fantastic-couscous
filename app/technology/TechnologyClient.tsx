'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { VoiceMesh } from '@/components/landing/VoiceMesh'
import { 
  Database, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Network,
  Zap,
  Box,
  Fingerprint,
  ArrowRight
} from 'lucide-react'

export function TechnologyClient() {
  const { technology } = landingConfig

  return (
    <div className="relative min-h-screen bg-background">
      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-24 px-6 md:px-10 overflow-hidden bg-mesh">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        <VoiceMesh />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-widest mb-8"
          >
            <Cpu className="w-3.5 h-3.5" />
            System Architecture
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05] text-foreground"
          >
            Our Technical <span className="text-primary italic">Stack</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
          >
            HAAZRI is built on the pillars of India's open digital infrastructure—specifically ONEST and BHASHINI—to ensure industrial-grade scalability and inclusivity.
          </motion.p>
        </div>
      </section>

      {/* ──── Tech Breakdown ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Architecture Flow */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Network className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black tracking-tight">Core Pipeline</h2>
            </div>
            
            <div className="relative space-y-8">
              {/* Vertical Line */}
              <div className="absolute left-10 top-0 bottom-0 w-px bg-dashed border-l border-border" />
              
              {technology.architecture.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex items-center gap-8 pl-2"
                >
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary font-black text-xl shadow-xl">
                    {idx + 1}
                  </div>
                  <div className="flex-1 p-5 sm:p-6 md:p-8 rounded-3xl bg-secondary/5 border border-border group hover:border-primary transition-all">
                    <h3 className="text-xl font-black mb-2">{item.item}</h3>
                    <div className="flex flex-wrap gap-3 items-center mt-3">
                      <span className="text-[10px] uppercase font-black tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{item.tech}</span>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">— {item.purpose}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Detailed Deep-dives */}
          <div className="space-y-16 lg:pt-28">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Globe className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-black tracking-tight">BHASHINI Integration</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We leverage Digital India's language AI stack for Automatic Speech Recognition (ASR) and Natural Language Understanding (NLU). This allows workers to interact with HAAZRI in their native dialects without any manual language selection.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Cpu className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-black tracking-tight">ONEST Framework</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our platform is ONEST-native (Open Network for Education and Skilling), using Beckn-based protocols to ensure that every Digital Job ID created is interoperable with government job boards and private staffing aggregators.
              </p>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-6 sm:p-8 md:p-10 rounded-[3rem] bg-foreground text-background shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-8xl">DPDP</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  Security & Compliance
                </h3>
                <p className="text-background/70 text-lg leading-relaxed mb-8">
                  {technology.compliance} We use end-to-end encryption for voice biometric data and adhere to the right-to-erasure and data-minimization principles.
                </p>
                <div className="flex items-center gap-3 text-primary text-sm font-black uppercase tracking-widest">
                  <Fingerprint className="w-4 h-4" />
                  Biometric Privacy Protocol Active
                </div>
              </div>
            </motion.div>

            <div className="pt-10">
              <a 
                href="https://github.com/haazri" 
                className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-secondary text-foreground font-black hover:bg-secondary/80 transition-all group"
              >
                <Code2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Explore Documentation on GitHub
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Footer CTA ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 text-center border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-1.5 bg-primary/20 mx-auto mb-10 rounded-full" />
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Ready to integrate?</h2>
          <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
            HAAZRI is built on open standards for seamless ecosystem integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-primary text-white font-black rounded-full shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              Claim Your Pilot
            </button>
            <button className="px-10 py-5 bg-secondary text-foreground font-black rounded-full hover:bg-secondary/80 transition-all">
              Talk to an Architect
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
