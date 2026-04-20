'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  Building2, 
  Users, 
  BarChart4, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react'

export function StakeholderProof() {
  const [active, setActive] = useState(0)

  const stakeholders = [
    {
      role: "The Payer (Employer)",
      goal: "Hiring Velocity & Cost Reduction",
      pain: "It takes 2 weeks to hire one person who might quit in 2 days.",
      solution: "Instant locally-sourced pool with voice-verified reputation. Hire in 24 hours.",
      icon: Building2,
      stat: "40% lower turnover"
    },
    {
      role: "The End-User (Worker)",
      goal: "Zero-Barrier Access",
      pain: "No internet, no smartphone, cannot fill out online forms.",
      solution: "Missed call + Voice AI. No reading or writing required. Job ID is your portable CV.",
      icon: Users,
      stat: "Applied in 90s"
    },
    {
      role: "The Data Seeker (Manager)",
      goal: "Visibility & Compliance",
      pain: "Informal work has zero digital footprint. Cannot verify history or ratings.",
      solution: "Real-time analytics on worker performance, attendance, and network reliability.",
      icon: BarChart4,
      stat: "100% data fidelity"
    }
  ]

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -200, scale: 1.3, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 400, damping: 15, mass: 1.2 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight">One Solution. <span className="text-primary italic inline-block hover:scale-105 hover:-rotate-2 transition-transform">Three Wins.</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            HAAZRI bridges the gap between those who hire, those who work, and those who manage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {stakeholders.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                  active === idx 
                    ? 'bg-background border-primary shadow-lg' 
                    : 'bg-transparent border-transparent grayscale hover:grayscale-0 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex gap-4 items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    active === idx ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'
                  }`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight">{s.role}</h4>
                    <p className="text-[10px] uppercase font-bold text-primary tracking-widest">{s.stat}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.1, y: -60, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, y: 20, filter: 'blur(10px)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 1 }}
                className="h-full"
              >
                <Card className="h-full border-none shadow-premium bg-background p-10 md:p-16 rounded-[2.5rem] flex flex-col justify-center">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">The Goal</div>
                        <h3 className="text-3xl font-black leading-tight underline decoration-primary/30 underline-offset-8">
                          {stakeholders[active].goal}
                        </h3>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase text-red-500/70 tracking-widest">Pain Point</p>
                          <p className="text-muted-foreground italic">"{stakeholders[active].pain}"</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase text-primary tracking-widest">HAAZRI Outcome</p>
                          <div className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                            <p className="font-medium text-foreground">{stakeholders[active].solution}</p>
                          </div>
                        </div>
                      </div>
                      
                      <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        Learn more about {stakeholders[active].role.split('(')[1].replace(')', '')} path <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-150" />
                      <div className="relative aspect-square rounded-[2rem] border border-border bg-secondary/50 flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                        {(() => {
                          const StakeholderIcon = stakeholders[active].icon
                          return <StakeholderIcon className="w-20 h-20 text-primary mb-6 opacity-20" />
                        })()}
                        <div className="text-5xl font-black text-primary mb-2">{stakeholders[active].stat.split(' ')[0]}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Validated Threshold</div>
                        
                        {/* Simulation Logic Indicator */}
                        <div className="mt-12 w-full p-4 rounded-xl bg-background/50 border border-border">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[8px] font-bold uppercase">Confidence</span>
                            <span className="text-[8px] font-bold">12/12 Confirmations</span>
                          </div>
                          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
