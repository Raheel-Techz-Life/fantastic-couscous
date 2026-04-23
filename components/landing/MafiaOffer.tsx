'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, ShieldCheck, Zap, TrendingUp } from 'lucide-react'

export function MafiaOffer() {
  const points = [
    {
      icon: Zap,
      title: "Verified Talent in 24h",
      desc: "Stop losing days to empty calls. Get a verified, voice-screened candidate within 24 hours — or we find a replacement for free."
    },
    {
      icon: ShieldCheck,
      title: "The Trust Engine",
      desc: "Unique Job Codes and digital trails track reliability and behavior. Know if a worker is trustworthy before they arrive."
    },
    {
      icon: TrendingUp,
      title: "No-Show Recovery",
      desc: "If a worker walkout happens, our backup candidate pool ensures zero downtime. Your hiring recovers instantly."
    }
  ]

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[3rem] bg-foreground text-background p-12 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative Mesh Background */}
          <div className="absolute inset-0 opacity-10 bg-mesh pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: -200, scale: 1.5, filter: 'blur(20px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 400, damping: 12, mass: 1.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-black uppercase tracking-widest border border-primary/30"
              >
                The Mafia Offer
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, mass: 1, delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                  Build your local <span className="text-primary italic inline-block hover:scale-105 hover:rotate-1 transition-transform">workforce dominance</span>
                </h2>
                <p className="text-background/60 text-lg md:text-xl max-w-xl leading-relaxed">
                  We don't sell features. We sell a 24-hour talent pipeline. If we don't deliver verified applicants in 1 day, your next 5 hires are on us.
                </p>
              </motion.div>

              <div className="space-y-6">
                {points.map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Check className="w-4 h-4 stroke-[3px]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{point.title}</h4>
                      <p className="text-background/40 text-sm">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="h-16 px-10 rounded-full text-lg font-black bg-primary text-white hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                Claim Your Risk-Free Pilot
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50" />
              <motion.div 
                initial={{ rotate: 5, y: 20 }}
                whileInView={{ rotate: 0, y: 0 }}
                className="relative bg-background/5 backdrop-blur-xl border border-background/10 rounded-[2.5rem] p-8 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-background/30">Verified Dashboard</div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-background/5 border border-background/5 flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-24 bg-background/20 rounded" />
                      <div className="h-2 w-16 bg-background/10 rounded" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary text-white text-[8px] font-black uppercase">Verified</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-background/5 border border-background/5 flex gap-4 items-center opacity-50">
                    <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-20 bg-background/20 rounded" />
                      <div className="h-2 w-12 bg-background/10 rounded" />
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-background/5 border border-background/5 flex gap-4 items-center opacity-30">
                    <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-28 bg-background/20 rounded" />
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Logic: Solution in Principle</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
