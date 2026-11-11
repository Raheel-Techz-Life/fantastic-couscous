'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import dynamic from 'next/dynamic'

const VoiceMesh = dynamic(() => import('@/components/landing/VoiceMesh').then(m => m.VoiceMesh), { ssr: false })
import { 
  Mic, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  ChevronDown,
  ArrowRight,
  Globe,
  Database,
  Smartphone,
  Fingerprint
} from 'lucide-react'

const icons = [Mic, MessageSquare, Zap, ShieldCheck, Globe, Database, Smartphone, Fingerprint]

export function FeaturesClient() {
  const { features } = landingConfig

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
            <Zap className="w-3.5 h-3.5" />
            Core Infrastructure
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05] text-foreground"
          >
            Built for <span className="text-primary italic">Inclusion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Every feature of HAAZRI is designed to strip away barriers. We've removed literacy requirements, internet dependence, and high-cost hardware.
          </motion.p>
        </div>
      </section>

      {/* ──── Feature Sections ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="space-y-20 sm:space-y-24 md:space-y-32">
          
          {/* Worker Features */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Mic className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black tracking-tight">For Workers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.worker.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 sm:p-8 md:p-10 rounded-[2.5rem] bg-secondary/5 border border-border group hover:border-primary transition-all hover:bg-secondary/10"
                >
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-6">Module: 0x{idx + 1}W</div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Employer Features */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black tracking-tight">For Employers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.employer.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 sm:p-8 md:p-10 rounded-[2.5rem] bg-secondary/5 border border-border group hover:border-primary transition-all hover:bg-secondary/10"
                >
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-6">Module: 0x{idx + 1}E</div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="pt-10">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tight">Breaking the Status Quo</h2>
            <div className="overflow-hidden rounded-[3rem] border border-border bg-secondary/5 backdrop-blur-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/10">
                    <th className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 text-left font-black text-muted-foreground uppercase tracking-widest text-xs">Capability</th>
                    <th className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 text-left font-black text-primary uppercase tracking-widest text-xs">HAAZRI Protocol</th>
                    <th className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 text-left font-black text-muted-foreground uppercase tracking-widest text-xs">Traditional Systems</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {features.comparison.map((row, idx) => (
                    <tr key={idx} className="group hover:bg-primary/5 transition-all">
                      <td className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 font-black text-lg md:text-xl">{row.feature}</td>
                      <td className="py-6 sm:py-8 px-4 sm:px-6 md:px-8">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-primary font-black text-base md:text-lg">{row.haazri}</span>
                        </div>
                      </td>
                      <td className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 text-muted-foreground text-base md:text-lg">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Final CTA ──── */}
      <section className="py-16 sm:py-20 md:py-24 px-6 text-center border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-1.5 bg-primary/20 mx-auto mb-10 rounded-full" />
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Ready to deploy the protocol?</h2>
          <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
            Experience the frictionless recruitment infrastructure built for the next 450M.
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
