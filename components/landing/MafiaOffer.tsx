'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, ShieldCheck, Zap, TrendingUp, Star, PhoneCall } from 'lucide-react'
import { ShieldScene } from './ShieldScene'
import Link from 'next/link'

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

  const mockWorkers = [
<<<<<<< HEAD
    { name: "Suresh B.", role: "Machinist / ITI", rating: "4.9", status: "Active Pitch", id: "HZ-9921", initial: "SB", color: "from-blue-500 to-indigo-600" },
    { name: "Manjunath K.", role: "Forklift Operator", rating: "4.8", status: "Verified", id: "HZ-4831", initial: "MK", color: "from-emerald-500 to-teal-600" },
    { name: "Somesh H.", role: "CNC Operator", rating: "4.7", status: "Matched", id: "HZ-3109", initial: "SH", color: "from-orange-500 to-red-600" },
=======
    { name: "Suresh B.", role: "Mason / ITI", rating: "4.9", status: "Active Pitch", id: "HZ-9921", initial: "SB", color: "from-blue-500 to-indigo-600" },
    { name: "Manjunath K.", role: "Mixer Operator", rating: "4.8", status: "Verified", id: "HZ-4831", initial: "MK", color: "from-emerald-500 to-teal-600" },
    { name: "Somesh H.", role: "Loader / Helper", rating: "4.7", status: "Matched", id: "HZ-3109", initial: "SH", color: "from-orange-500 to-red-600" },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
  ]

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden bg-background">
      <ShieldScene />
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="rounded-[3rem] bg-slate-950 text-white p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Subtle grid in background of the card */}
          <div className="absolute inset-0 opacity-[0.03] bg-mesh pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                The Mafia Offer
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                  Build your local <span className="text-primary italic inline-block hover:scale-105 transition-transform duration-300">workforce dominance</span>
                </h2>
                <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
                  We don't sell features. We sell a 24-hour talent pipeline. If we don't deliver verified applicants in 1 day, your next 5 hires are on us.
                </p>
              </motion.div>

              <div className="space-y-5">
                {points.map((point, idx) => {
                  const Icon = point.icon
                  return (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg text-slate-100">{point.title}</h4>
                        <p className="text-slate-400 text-sm max-w-lg leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="pt-2">
                <Button size="lg" asChild className="h-14 px-8 rounded-full text-base font-black bg-primary text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                  <Link href="/login">
                    Claim Your Risk-Free Pilot
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Mockup Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-primary/25 blur-3xl rounded-full opacity-40 pointer-events-none" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-6 md:p-8 shadow-2xl overflow-hidden"
              >
                {/* Simulated Glass Reflection */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent rotate-45 pointer-events-none" />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">Verified Dashboard</span>
                </div>
                
                <div className="space-y-4 relative z-10">
                  {mockWorkers.map((worker, idx) => (
                    <motion.div 
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex gap-4 items-center hover:border-primary/40 transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      {/* Avatar */}
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${worker.color} flex items-center justify-center text-white font-black text-sm shadow-inner`}>
                        {worker.initial}
                      </div>
                      
                      {/* Worker Details */}
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-100 group-hover:text-primary transition-colors">{worker.name}</span>
                          <span className="text-[9px] font-mono text-slate-500">{worker.id}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          <span>{worker.role}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-700" />
                          <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {worker.rating}
                          </span>
                        </div>
                      </div>

                      {/* Matching Status */}
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-wider">
                        {worker.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-primary/5 border border-primary/10 text-center relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <PhoneCall className="w-3.5 h-3.5 text-primary" />
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">Active Callback Protocol</p>
                  </div>
                  <p className="text-[11px] text-slate-400">IVR Screening & Bhashini Translation Engines Active</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
