'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { PremiumCard } from '@/components/ui/premium-card'
import { Badge } from '@/components/ui/badge'
import { 
  PhoneIncoming, 
  RefreshCw, 
  Globe, 
  ShieldCheck, 
  Share2, 
  LayoutDashboard 
} from 'lucide-react'

const icons = [PhoneIncoming, RefreshCw, Globe, ShieldCheck, Share2, LayoutDashboard]

export function TechnologySection() {
  const { technology } = landingConfig

  return (
    <section className="px-6 py-24 md:px-10 lg:px-20 bg-secondary/30 relative" id="technology">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 1.3, y: -100, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Technology
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 1.2, y: -150, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Built on Open Standards
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            HAAZRI leverages India's top-tier digital infrastructure—BHASHINI and ONEST—to deliver massive scale with zero friction.
          </motion.p>
        </div>

        {/* Architecture Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {technology.architecture.map((item, idx) => {
            const Icon = [Globe, ShieldCheck, Share2, LayoutDashboard][idx] || LayoutDashboard
            return (
              <PremiumCard 
                key={idx} 
                initial={{ scale: 1.2, opacity: 0, y: -150, filter: 'blur(15px)' }}
                whileInView={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15, mass: 1.2, delay: idx * 0.1 }}
                className="flex flex-col p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-1">{item.item}</h4>
                  <p className="text-[10px] text-primary uppercase font-black tracking-widest mb-4">{item.tech}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.purpose}
                  </p>
                </div>
              </PremiumCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

