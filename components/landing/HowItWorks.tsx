'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { PhoneCall, Mic, Fingerprint, MessageSquare, Smartphone, Star } from 'lucide-react'

const icons = [PhoneCall, Mic, Fingerprint, MessageSquare, Smartphone, Star]

export function HowItWorks() {
  const { howItWorks } = landingConfig

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
    <section className="px-6 py-16 md:px-10 lg:px-20 bg-background overflow-hidden" id="howitworks">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-bold uppercase tracking-widest mb-4"
        >
          {howItWorks.tag}
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold mb-6 tracking-tight"
        >
          {howItWorks.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {howItWorks.description}
        </motion.p>
      </div>

      {/* Steps Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {howItWorks.workerJourney.map((step, idx) => {
          const Icon = icons[idx] || Star
          return (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl border border-border bg-card hover:bg-primary-soft/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Step Number Background */}
              <div className="absolute -right-2 top-0 text-[120px] font-black opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                {step.step}
              </div>

              {/* Icon Container */}
              <div 
                className="mb-8 w-14 h-14 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 bg-primary/10"
              >
                <Icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-primary font-bold text-sm mb-2 block tracking-widest uppercase">Step {step.step}</span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

