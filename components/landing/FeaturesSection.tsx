'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Globe, Send, ShieldCheck, MessageSquare, Box, BarChart3 } from 'lucide-react'

const icons = [Globe, Send, ShieldCheck, MessageSquare, Box, BarChart3]

export function FeaturesSection() {
  const { features } = landingConfig

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
    <section className="px-6 py-24 md:px-10 lg:px-20 bg-background" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            The Non-Negotiables
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-6 tracking-tight"
          >
            "Must-Have" Solutions for B2B Success
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We don't build "nice-to-haves." HAAZRI solves the fundamental exclusion and data gaps in the informal economy.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="space-y-20">
          {/* Worker Features */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-border" />
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">For the End-User (Worker)</h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.worker.map((feature, idx) => {
                const Icon = [Globe, Send, ShieldCheck, MessageSquare][idx] || Box
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="mb-6 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Employer Features */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-border" />
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">For the Payer & Data Seeker</h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.employer.map((feature, idx) => {
                const Icon = [MessageSquare, Box, Send, BarChart3][idx] || BarChart3
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group p-8 rounded-3xl border border-primary/10 bg-primary/5 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="mb-6 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

