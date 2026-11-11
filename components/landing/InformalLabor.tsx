'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'

export function InformalLabor() {
  const { problemStatement: ps } = landingConfig

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  } as const

  const itemVariants = {
    // Lighter blur radius than the original (10px -> 6px).
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 300, damping: 20 } },
  } as const

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-background relative overflow-hidden border-b border-border/40">
      {/* Ambient background accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* 1. Quote */}
        <motion.blockquote 
          variants={itemVariants} 
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold italic text-foreground tracking-tight leading-relaxed max-w-4xl mx-auto mb-10 text-balance"
        >
          {ps.verdict.quote}
        </motion.blockquote>

        {/* 2. Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-6">
          {ps.verdict.label.split(' · ').map((chip, i) => (
            <span 
              key={i} 
              className="px-4 py-1.5 rounded-full bg-foreground text-background dark:bg-card dark:text-foreground border border-border/60 text-xs font-black uppercase tracking-widest shadow-sm hover:scale-105 transition-transform duration-300"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* 3. Attribution */}
        <motion.p 
          variants={itemVariants} 
          className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest leading-relaxed"
        >
          — HAAZRI Field Research, Hubballi-Dharwad 2024-25
        </motion.p>
      </motion.div>
    </section>
  )
}
