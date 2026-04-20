'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'

const cardAccents = [
  { border: '#ff5400', glow: 'rgba(255,84,0,0.12)', badge: '#ff5400' },
  { border: '#0d2344', glow: 'rgba(13,35,68,0.12)',  badge: '#0d2344' },
  { border: '#6b21a8', glow: 'rgba(107,33,168,0.12)', badge: '#6b21a8' },
]

export function ProblemStatement() {
  const { problemStatement: ps } = landingConfig

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className="problem-root">
      {/* Ambient crack line across top */}
      <div className="problem-crack" />

      <motion.div
        className="problem-inner"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Tag */}
        <motion.div variants={item} className="problem-tag-row">
          <span className="problem-tag">
            <span className="problem-tag-dot" />
            {ps.tag}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={item} className="problem-headline-block">
          <h2 className="problem-headline">{ps.headline}</h2>
          <p className="problem-subheadline">{ps.subheadline}</p>
        </motion.div>

        {/* Three Pain Cards */}
        <motion.div variants={item} className="problem-cards">
          {ps.painPoints.map((point, idx) => {
            const accent = cardAccents[idx]
            return (
              <motion.div
                key={point.who}
                className="problem-card"
                style={{
                  '--card-border': accent.border,
                  '--card-glow': accent.glow,
                } as React.CSSProperties}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Who badge */}
                <span
                  className="problem-card-badge"
                  style={{ background: accent.border }}
                >
                  {point.icon} {point.who}
                </span>

                <h3 className="problem-card-title">{point.title}</h3>
                <p className="problem-card-body">{point.body}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Friction Cost CTA block */}
        <motion.div variants={item} className="mt-16 sm:mt-20 w-full relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/5 rounded-[2rem] md:rounded-[3rem] blur-2xl z-0" />
          
          <div className="relative p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-primary/20 bg-card overflow-hidden z-10 shadow-xl shadow-primary/5">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 text-foreground">The True Cost of Friction</h3>
              <p className="text-primary uppercase tracking-widest text-xs font-bold">Why the status quo is unsustainable</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: 'Avg. time-to-fill a vacancy', value: '3–6 weeks', icon: '⏳' },
                { label: 'Manual calls per hire',         value: '40–80',    icon: '📞' },
                { label: 'Worker idle time between jobs', value: '2–4 months', icon: '💤' },
                { label: 'Govt. schemes unclaimed',       value: '₹Lakhs',   icon: '🏛️' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center p-6 rounded-3xl bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group">
                  <span className="text-3xl mb-4 group-hover:scale-125 transition-transform origin-bottom block">{stat.icon}</span>
                  <span className="text-2xl md:text-3xl font-black text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">{stat.value}</span>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Verdict Quote */}
        <motion.div variants={item} className="problem-verdict">
          <div className="problem-verdict-label">
            {ps.verdict.label.split(' · ').map((chip, i) => (
              <span key={i} className="problem-verdict-chip">{chip}</span>
            ))}
          </div>
          <blockquote className="problem-verdict-quote">
            {ps.verdict.quote}
          </blockquote>
          <p className="problem-verdict-attribution">— HAAZRI Problem Brief, 2025</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
