'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Sparkles } from 'lucide-react'

export function MarketDynamicsSection() {
  const { marketDynamics } = landingConfig

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  } as const

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-background relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-[radial-gradient(#ff540003_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Market & Regulation
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
            {marketDynamics.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {marketDynamics.description}
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {marketDynamics.drivers.map((driver, idx) => (
            <motion.div
              key={driver.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-8 rounded-[2.5rem] bg-gradient-to-b from-card/80 to-card/40 border border-border/80 flex flex-col justify-between hover:border-primary/50 hover:bg-card/90 transition-all duration-300 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-primary/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="space-y-6 relative z-10">
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 leading-none block group-hover:scale-105 transition-transform duration-300 origin-left select-none">
                  {driver.stat}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{driver.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{driver.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
