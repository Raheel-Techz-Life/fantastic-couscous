'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { 
  Globe, 
  PhoneCall, 
  Mic, 
  ShieldCheck, 
  MessageSquare, 
  Box, 
  Zap, 
  Database 
} from 'lucide-react'

const icons = [Globe, PhoneCall, Mic, ShieldCheck, MessageSquare, Box, Zap, Database]

export default function FeaturesPage() {
  const { features } = landingConfig

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            Built for <span className="text-primary italic">Inclusion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-2xl leading-relaxed"
          >
            Every feature of HAAZRI is designed to strip away barriers. We've removed literacy requirements, internet dependence, and high-cost hardware.
          </motion.p>
        </div>
      </section>

      {/* Grid Sections */}
      <section className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Worker Features */}
          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mic className="w-5 h-5" />
              </div>
              For Workers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.worker.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl border border-border bg-card group hover:border-primary transition-all shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Employer Features */}
          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-5 h-5" />
              </div>
              For Employers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.employer.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl border border-border bg-card group hover:border-primary transition-all shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="pt-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Breaking the Status Quo</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-6 px-4 text-left font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Feature</th>
                    <th className="py-6 px-4 text-left font-bold text-primary uppercase tracking-widest text-[10px]">HAAZRI Advantage</th>
                    <th className="py-6 px-4 text-left font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Traditional Portals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {features.comparison.map((row, idx) => (
                    <tr key={idx} className="group hover:bg-secondary/30 transition-colors">
                      <td className="py-8 px-4 font-bold">{row.feature}</td>
                      <td className="py-8 px-4 text-primary font-bold">{row.haazri}</td>
                      <td className="py-8 px-4 text-muted-foreground">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
