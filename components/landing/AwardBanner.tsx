'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'

export function AwardBanner() {
  const { award, branding } = landingConfig

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-6 md:mx-20 -mt-px flex flex-col md:flex-row items-center justify-between rounded-2xl border px-8 py-4 gap-4 md:gap-8 backdrop-blur-md bg-card/40 shadow-premium group transition-all hover:bg-card/60"
      style={{
        borderColor: branding.colors.primary + '30',
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
          {award.emoji}
        </div>
        <div>
          <div className="text-sm font-black uppercase tracking-widest text-primary">
            Field Validated 2024-25
          </div>
          <div className="text-xs font-medium text-muted-foreground">Hubballi-Dharwad Region, Karnataka</div>
        </div>
      </div>
      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] md:text-right">
        Solution Validation Assignment · Field Research
      </div>
    </motion.div>
  )
}
