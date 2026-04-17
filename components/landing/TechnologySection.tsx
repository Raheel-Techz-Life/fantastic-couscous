'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="px-6 py-24 md:px-10 lg:px-20 bg-secondary/30 relative" id="technology">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Technology
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-6 tracking-tight"
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
        <div className="relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {technology.architecture.map((item, idx) => {
              const Icon = [Globe, ShieldCheck, Share2, LayoutDashboard][idx] || LayoutDashboard
              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex flex-col p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all group"
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
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

