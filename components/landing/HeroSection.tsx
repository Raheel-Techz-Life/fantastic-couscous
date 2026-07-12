'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { useEffect, useState } from 'react'
import { Phone, Mic, CheckCircle, ArrowRight, Volume2, Globe, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { HeroScene } from './HeroScene'

/* ─────────── Animated Counter ─────────── */
function AnimatedCounter({ target }: { target: string }) {
  // Split "24h" → prefix="", number=24, suffix="h"
  // Split "₹0" → prefix="₹", number=0, suffix=""
  // Split "100%" → prefix="", number=100, suffix="%"
  const match = target.match(/^([^0-9]*)(\d+)([^0-9]*)$/)
  const prefix = match ? match[1] : ''
  const targetNum = match ? parseInt(match[2]) : 0
  const suffix = match ? match[3] : ''
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (targetNum === 0) { setCount(0); return }
    const duration = 2000
    const steps = 60
    const increment = targetNum / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= targetNum) {
        setCount(targetNum)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [targetNum])

  if (!match) return <span>{target}</span>
  return <span>{prefix}{count}{suffix}</span>
}

/* ─────────── Floating Orbs Background ─────────── */
function FloatingOrbs() {
  return (
    <div className="hero-orbs-container">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-orb hero-orb-4" />
    </div>
  )
}

/* ─────────── Animated Voice Waveform ─────────── */
function VoiceWaveform() {
  return (
    <div className="hero-waveform">
      {Array.from({ length: 32 }).map((_, i) => (
        <motion.div
          key={i}
          className="hero-waveform-bar"
          animate={{
            scaleY: [0.3, Math.random() * 0.7 + 0.3, 0.3],
          }}
          transition={{
            duration: 0.6 + Math.random() * 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  )
}

/* ─────────── Live Pipeline Ticker ─────────── */
function PipelineTicker() {
  const events = [
    { icon: Phone, text: 'Missed call from Hubli, KA', time: '2s ago', color: 'var(--color-primary)' },
    { icon: Mic, text: 'Voice profile created — Hindi', time: '8s ago', color: '#22c55e' },
    { icon: CheckCircle, text: 'Worker verified ✓ Pune, MH', time: '15s ago', color: '#3b82f6' },
    { icon: Globe, text: 'BHASHINI translating Marathi→EN', time: '22s ago', color: '#a855f7' },
    { icon: Smartphone, text: 'WhatsApp card sent to employer', time: '31s ago', color: '#f59e0b' },
  ]

  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % events.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [events.length])

  return (
    <div className="hero-ticker">
      <div className="hero-ticker-dot" />
      <span className="hero-ticker-label">LIVE</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="hero-ticker-event"
        >
          {(() => {
            const Icon = events[currentIdx].icon
            return <Icon className="hero-ticker-icon" style={{ color: events[currentIdx].color }} />
          })()}
          <span className="hero-ticker-text">{events[currentIdx].text}</span>
          <span className="hero-ticker-time">{events[currentIdx].time}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ─────────── Floating Feature Cards ─────────── */
function FloatingCards() {
  const cards = [
    { icon: Phone, label: 'Missed Call', detail: 'Zero-cost entry', delay: 0 },
    { icon: Mic, label: 'Voice AI', detail: '22+ languages', delay: 0.15 },
    { icon: Volume2, label: 'BHASHINI', detail: 'Real-time TTS', delay: 0.3 },
    { icon: Globe, label: 'ONEST', detail: 'Open network', delay: 0.45 },
  ]

  return (
    <div className="hero-floating-cards">
      {cards.map((card, idx) => (
        <motion.div
          key={card.label}
          className="hero-floating-card"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.2 + card.delay,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{ scale: 1.05, y: -8, rotate: idx % 2 === 0 ? 2 : -2 }}
          whileTap={{ scale: 0.95 }}
          style={{ position: 'relative' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[1.25rem] pointer-events-none" />
          <div className="hero-floating-card-icon" style={{ '--card-idx': idx } as React.CSSProperties}>
            <card.icon size={18} />
          </div>
          <div className="hero-floating-card-text">
            <span className="hero-floating-card-label">{card.label}</span>
            <span className="hero-floating-card-detail">{card.detail}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════
   ███ HERO SECTION ███
   ═══════════════════════════════════════════════ */
export function HeroSection() {
  const { home } = landingConfig
  const { hero } = home

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: 'blur(12px)', scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', damping: 20, stiffness: 80, mass: 1 },
    },
  }

  return (
    <div className="hero-root">
      {/* Background Effects */}
      <HeroScene />
      <div className="hero-grid-pattern" />
      <div className="hero-radial-fade" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content"
      >
        {/* Top: Live pipeline ticker */}
        <motion.div variants={itemVariants}>
          <PipelineTicker />
        </motion.div>

        {/* Headline Block */}
        <motion.div variants={itemVariants} className="hero-headline-block relative">
          {/* Animated Tech Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[160%] max-w-[800px] border-[1px] border-primary/20 rounded-full border-dashed pointer-events-none mix-blend-screen opacity-50"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[130%] max-w-[600px] border-[1px] border-primary/10 rounded-full border-dotted pointer-events-none mix-blend-screen opacity-40"
          />
          
          <h1 className="hero-headline relative z-10 drop-shadow-2xl flex flex-wrap justify-center gap-x-4 items-center">
            The 
            <motion.span 
              variants={{
                hidden: { y: -400, opacity: 0, scale: 2, filter: 'blur(20px)' },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  scale: 1, 
                  filter: 'blur(0px)', 
                  transition: { type: 'spring', stiffness: 400, damping: 12, mass: 1.2, delay: 0.4 } 
                }
              }}
              className="hero-headline-accent inline-block hover:scale-105 transition-transform duration-300 relative z-20 origin-bottom"
            >
              48-Hour
            </motion.span> 
            Talent Pipeline
          </h1>
          <h1 className="hero-headline hero-headline-second relative z-10 drop-shadow-2xl mt-2 flex flex-wrap justify-center gap-x-4 items-center">
            for India&apos;s Next 
            <motion.span 
              variants={{
                hidden: { y: -400, opacity: 0, scale: 2, filter: 'blur(20px)' },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  scale: 1, 
                  filter: 'blur(0px)', 
                  transition: { type: 'spring', stiffness: 400, damping: 12, mass: 1.2, delay: 0.6 } 
                }
              }}
              className="hero-headline-gradient inline-block hover:hue-rotate-15 transition-all duration-500 relative z-20 origin-bottom"
            >
              450M
            </motion.span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div variants={itemVariants} className="hero-subheadline">
          <p>{hero.description}</p>
        </motion.div>

        {/* Voice Waveform Divider */}
        <motion.div variants={itemVariants}>
          <VoiceWaveform />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="hero-cta-group relative z-20">
          <Link href="/login" passHref legacyBehavior>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="hero-cta-primary group overflow-hidden cursor-pointer"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{ x: ['-150%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <span className="hero-cta-primary-content relative z-10">
                ⚡ Claim your pilot
                <ArrowRight size={18} className="hero-cta-arrow group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          <Link href="/employers" passHref legacyBehavior>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' }} 
              whileTap={{ scale: 0.95 }}
              className="hero-cta-secondary transition-all cursor-pointer"
            >
              💡 B2B Solutions
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div variants={itemVariants} className="hero-stats-row">
          {hero.stats.map((stat, idx) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-number">
                <AnimatedCounter target={stat.number} />
              </span>
              <span className="hero-stat-label">{stat.label}</span>
              {idx < hero.stats.length - 1 && <div className="hero-stat-divider" />}
            </div>
          ))}
        </motion.div>

        {/* Floating Feature Cards */}
        <FloatingCards />

        {/* Scroll Indicator */}
        <motion.div
          className="hero-scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="hero-scroll-mouse">
            <div className="hero-scroll-wheel" />
          </div>
          <span className="hero-scroll-text">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
