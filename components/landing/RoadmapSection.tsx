'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Calendar } from 'lucide-react'

export function RoadmapSection() {
  const { roadmap } = landingConfig

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 15 } },
  } as const

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/5 relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-mesh opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            Execution Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
            {roadmap.title}
          </h2>
        </div>

        <motion.div 
          className="relative max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Vertical Timeline Bar on Desktop */}
          <div className="absolute left-[39px] md:left-[179px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent pointer-events-none shadow-[0_0_8px_rgba(255,84,0,0.5)] animate-pulse" />

          {roadmap.phases.map((phase, idx) => (
            <motion.div
              key={phase.phase}
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-6 md:gap-12 relative items-start group"
            >
              {/* Timeline Indicator / Date */}
              <div className="flex items-center gap-4 w-full md:w-[180px] shrink-0 justify-start md:justify-end text-left md:text-right pt-2 relative z-10">
                <span className="font-mono text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 select-none shadow-sm shadow-primary/5">
                  {phase.timeline}
                </span>
                {/* Desktop Circle with Glow */}
                <div className="hidden md:block w-3 h-3 rounded-full bg-primary border-4 border-background shrink-0 translate-x-[47px] group-hover:scale-150 group-hover:shadow-[0_0_12px_#ff5400] transition-all duration-300 relative">
                  <div className="absolute -inset-1 rounded-full bg-primary/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Phase Content Box */}
              <div className="flex-1 p-6 md:p-8 rounded-[2rem] bg-gradient-to-b from-card to-card/90 border border-border/80 hover:border-primary/55 hover:shadow-[0_15px_35px_rgba(255,84,0,0.06)] hover:bg-card transition-all duration-300 shadow-lg relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-20 h-20 bg-primary/5 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  {phase.phase}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">{phase.objective}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
