'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Shield, Sparkles, Building2, Landmark, Check } from 'lucide-react'

export function EcosystemSection() {
  const { ecosystem } = landingConfig

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  } as const

  const icons = [Sparkles, Building2, Landmark]

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/5 relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-mesh opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            Deployment Tiers
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
            {ecosystem.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {ecosystem.description}
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {ecosystem.tiers.map((tier, idx) => {
            const Icon = icons[idx]
            return (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-8 rounded-[2.5rem] bg-gradient-to-b from-card to-card/90 border border-border/80 flex flex-col justify-between hover:border-primary/60 hover:shadow-[0_20px_50px_rgba(255,84,0,0.12)] transition-all duration-500 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/25 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-black text-foreground tracking-tight">{tier.name}</h3>
                    {tier.highlight && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[9px] font-bold uppercase tracking-widest shadow-inner">
                        {tier.highlight}
                      </span>
                    )}
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border/60 text-[10px] font-black uppercase tracking-widest mb-8 text-muted-foreground">
                    {tier.target}
                  </div>

                  <ul className="space-y-4">
                    {tier.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-3 items-start text-xs text-muted-foreground leading-relaxed group/item">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="group-hover/item:text-foreground transition-colors duration-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
