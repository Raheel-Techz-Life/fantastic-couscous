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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(255,84,0,0.2)]"
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
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[4rem] blur-3xl -z-10" />
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
              <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-muted-foreground px-4 py-2 border border-border rounded-full bg-background shadow-sm">For the End-User (Worker)</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {features.worker.map((feature, idx) => {
                const Icon = [Globe, Send, ShieldCheck, MessageSquare][idx] || Box
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group relative p-8 rounded-3xl border border-border bg-gradient-to-br from-card to-background hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 mb-6 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="relative z-10 text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Employer Features */}
          <div className="relative mt-24">
            <div className="absolute inset-0 bg-secondary/5 rounded-[4rem] blur-3xl -z-10" />
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
              <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary px-4 py-2 border border-primary/30 rounded-full bg-primary/5 shadow-sm">For the Payer & Data Seeker</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
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
                    className="group relative p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] to-transparent hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 mb-6 w-14 h-14 rounded-2xl bg-primary border border-primary/50 shadow-lg text-primary-foreground flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="relative z-10 text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                    <p className="relative z-10 text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
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

