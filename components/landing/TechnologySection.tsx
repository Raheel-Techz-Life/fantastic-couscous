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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            {technology.tag}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-6 tracking-tight"
          >
            {technology.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            {technology.description}
          </motion.p>
        </div>

        {/* Tech Stack Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {technology.pills.map((pill, idx) => (
            <Badge 
              key={idx} 
              variant="secondary" 
              className="rounded-full px-4 py-1.5 text-xs font-semibold bg-background border-border hover:border-primary/50 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full mr-2 bg-primary`} />
              {pill.text}
            </Badge>
          ))}
        </motion.div>

        {/* Architecture Flow */}
        <div className="relative">
          {/* Background Line */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-border to-transparent z-0" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 relative z-10"
          >
            {technology.architecture.map((item, idx) => {
              const Icon = icons[idx] || LayoutDashboard
              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex flex-col items-center group"
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    item.highlight 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-110' 
                      : 'bg-card border border-border group-hover:border-primary/50 shadow-sm'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <h4 className={`text-sm font-bold mb-1 ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {item.label}
                    </h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium italic">
                      {item.sublabel}
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

