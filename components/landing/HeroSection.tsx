'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const { branding, home } = landingConfig
  const { hero } = home

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center max-w-4xl mx-auto"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Next-Gen Inclusion
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div variants={itemVariants} className="space-y-4 mb-10">
        <h1 
          className="text-4xl sm:text-7xl font-black tracking-tight text-foreground leading-[1.05]"
          dangerouslySetInnerHTML={{ __html: hero.headline }}
        />
        <p className="text-xl sm:text-2xl font-bold text-primary/80 italic">
          Stop hiring. Start building a pipeline.
        </p>
      </motion.div>

      {/* Description */}
      <motion.p 
        variants={itemVariants} 
        className="mb-10 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
      >
        {hero.description}
      </motion.p>

      {/* Buttons */}
      <motion.div variants={itemVariants} className="mb-16 flex flex-col sm:flex-row gap-6 items-center justify-center">
        {hero.buttons.map((btn, idx) => (
          <Button 
            key={idx}
            size="lg" 
            variant={btn.type === 'primary' ? 'default' : 'outline'}
            className={`rounded-full px-10 h-16 text-lg font-black transition-all gap-3 ${
              btn.type === 'primary' 
                ? 'bg-primary text-white shadow-2xl shadow-primary/30 hover:scale-105' 
                : 'border-2 border-primary/20 hover:bg-primary/5'
            }`}
          >
            <span className="text-2xl">{btn.icon}</span>
            {btn.label}
          </Button>
        ))}
      </motion.div>


      {/* Stats */}
      <motion.div 
        variants={itemVariants} 
        className="grid grid-cols-3 gap-4 sm:gap-12 w-full max-w-3xl pt-10 border-t border-border"
      >
        {hero.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 group">
            <span className="text-2xl sm:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
              {stat.number}
            </span>
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-muted-foreground line-clamp-1">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
