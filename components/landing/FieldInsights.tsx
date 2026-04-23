'use client'

import { motion } from 'framer-motion'
import { Lightbulb, ShieldCheck, Users, Search } from 'lucide-react'
import { PremiumCard } from '@/components/ui/premium-card'

const insights = [
  {
    title: "Informal Networks Are Broken",
    desc: "Existing trust mechanisms (word-of-mouth) are fragile and limit reach. We replace this with a verified, scalable digital trust layer.",
    icon: ShieldCheck,
  },
  {
    title: "Workers Are Available but Invisible",
    desc: "A large pool of semi-skilled workers exists but literacy and digital barriers hide them. Our voice interface makes them visible.",
    icon: Search,
  },
  {
    title: "Untapped Govt. Potential",
    desc: "Schemes like PM Vishwakarma and Mudra go unused due to zero awareness. HAAZRI acts as the last-mile delivery bridge.",
    icon: Lightbulb,
  },
  {
    title: "Missing Accountability Layer",
    desc: "Employers want stay-guarantees; workers want wage-assurance. Our rating system introduces the first real accountability mechanism.",
    icon: Users,
  }
]

export function FieldInsights() {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Field Intelligence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight"
          >
            Insights from <span className="text-primary italic">Hubballi-Dharwad</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            "The first problem to solve is trust, not technology." — HAAZRI Field Report 2024-25
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, idx) => (
            <PremiumCard 
              key={idx}
              delay={idx * 0.1}
              className="p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <insight.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-3">{insight.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {insight.desc}
              </p>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  )
}
