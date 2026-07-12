'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { TrendingUp, Bell, Check } from 'lucide-react'

export function DifferentiatorsSection() {
  const { differentiators } = landingConfig

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
          >
            Why We Win
          </motion.div>
          <h2 className="text-4xl font-black tracking-tight">Key Differentiators</h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Eliminating the structural root causes of worker churn and last-minute employer no-shows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Monotonic Wage Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                {differentiators.monotonicWage.badge}
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-4">{differentiators.monotonicWage.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {differentiators.monotonicWage.description}
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-2">The Formula: Steady Income &gt; Spot Wage</h4>
              <ul className="space-y-2">
                <li className="flex gap-2 items-center text-xs text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Guarantees high-density recurring contracts.</span>
                </li>
                <li className="flex gap-2 items-center text-xs text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Reduces worker search friction from 60 days to 0.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Night-Before Alerts Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                <Bell className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                {differentiators.nightBeforeAlerts.badge}
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-4">{differentiators.nightBeforeAlerts.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {differentiators.nightBeforeAlerts.description}
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-2">The Loop: Confirm Attendance at 8:00 PM</h4>
              <ul className="space-y-2">
                <li className="flex gap-2 items-center text-xs text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Automated voice check-ins in local languages.</span>
                </li>
                <li className="flex gap-2 items-center text-xs text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Auto-routes replacements instantly upon declines.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
