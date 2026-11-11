'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { useEffect, useState } from 'react'
import { Phone, Mic, CheckCircle, ArrowRight, Volume2, Globe, Smartphone } from 'lucide-react'
import Link from 'next/link'

import { IVRSimulator } from './IVRSimulator'


/* ─────────── Animated Counter ─────────── */
function AnimatedCounter({ target }: { target: string }) {
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

/* ─────────── Animated Voice Waveform ─────────── */
function VoiceWaveform() {
  return (
    <div className="flex items-center gap-1.5 h-12 px-6 rounded-2xl bg-secondary/30 border border-border/40 backdrop-blur-md shadow-inner my-4 max-w-sm select-none">
      <Volume2 className="w-4 h-4 text-primary shrink-0 mr-2 animate-bounce" />
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] h-6 rounded-full bg-gradient-to-t from-primary to-orange-400 shadow-[0_0_6px_rgba(255,84,0,0.3)] origin-bottom"
          animate={{
            scaleY: [0.2, Math.random() * 0.8 + 0.2, 0.2],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.04,

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
    <div className="hero-ticker border border-primary/20 bg-primary/5 shadow-[0_0_15px_rgba(255,84,0,0.05)]">
      <div className="hero-ticker-dot bg-primary shadow-[0_0_8px_#ff5400] animate-pulse" />
      <span className="hero-ticker-label text-primary">LIVE</span>

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

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 80, mass: 1 },
    },
  }

  return (
    <div className="hero-root">
      {/* Premium animated orbs */}
      <div className="hero-orbs-container">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
      </div>
      
      {/* The 'check box' grid pattern requested by the user */}
      <div className="hero-grid-pattern opacity-100" />
      <div className="hero-radial-fade opacity-70" />
      
      {/* Subtle glassmorphic overlay */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[30px] z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center px-6 md:px-10 z-10 relative"
      >
        {/* Left Column: Branding, Headline, CTAs, Stats */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Top: Live pipeline ticker */}
          <motion.div variants={itemVariants}>
            <PipelineTicker />
          </motion.div>

          {/* Headline Block */}
          <motion.div variants={itemVariants} className="hero-headline-block relative">
            <h1 className="hero-headline relative z-10 drop-shadow-2xl flex flex-wrap gap-x-4 items-center">
              India&apos;s Voice-First{' '}
              <motion.span 
                variants={{
                  hidden: { y: -50, opacity: 0, scale: 0.95 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 15, delay: 0.3 }
                  }
                } as Variants}
                className="hero-headline-gradient inline-block hover:scale-105 transition-transform duration-300 relative z-20 origin-bottom"
              >
                Workforce OS
              </motion.span>
            </h1>
            <p className="text-primary font-black text-lg md:text-2xl mt-4 tracking-widest uppercase italic font-mono drop-shadow-[0_2px_10px_rgba(255,84,0,0.15)]">
              {hero.tagline}
            </p>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={itemVariants} className="hero-subheadline">
            <p>{hero.description}</p>
          </motion.div>

          {/* Voice Waveform (Primary Visual) */}
          <motion.div variants={itemVariants} className="w-full flex justify-start">
            <VoiceWaveform />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-cta-group relative z-20">
            <Link href="/employers" passHref legacyBehavior>
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
            </Link>
            <Link href="/solution" passHref legacyBehavior>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="hero-cta-secondary transition-all cursor-pointer border border-border/80 text-foreground hover:border-primary/50 hover:bg-primary/5"
              >
                💡 Explore Solution
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={itemVariants} className="hero-stats-row !ml-0 w-full md:w-auto border border-border bg-gradient-to-r from-card to-card/50 shadow-lg">
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
        </div>

        {/* Right Column: Live IVR Phone Simulator with Ambient Background Glow */}
        <motion.div 
          className="lg:col-span-5 w-full flex items-center justify-center relative z-20 group"
          variants={itemVariants}
        >
          {/* Ambient Glow behind the Nokia Casing */}
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-60 z-0 animate-pulse pointer-events-none group-hover:opacity-85 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <IVRSimulator />
          </div>
        </motion.div>


      </motion.div>
    </div>
  )
}
