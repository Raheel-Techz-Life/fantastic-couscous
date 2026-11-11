'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { landingConfig } from '@/config/landing-data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Menu, X, Circle } from 'lucide-react'

const MotionImage = motion.create(Image)

export function Navigation() {
  const { branding, navigation } = landingConfig
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] flex flex-col pointer-events-none">
      {/* Website Under Development Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-gradient-to-r from-amber-600 via-primary to-orange-600 text-white pointer-events-auto border-b border-white/20 shadow-md"
          >
            <div className="max-w-7xl mx-auto py-1.5 px-4 sm:px-6 flex items-center justify-between gap-3 text-[11px] sm:text-xs font-semibold tracking-wide">
              <div className="flex items-center gap-2 mx-auto text-center truncate">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="truncate">
                  🚧 <strong>Under Development</strong> — HAAZRI is currently undergoing active pilot trials in Hubballi-Dharwad, Karnataka.
                </span>
              </div>
              <button 
                onClick={() => setShowBanner(false)}
                className="text-white/80 hover:text-white p-0.5 rounded-full hover:bg-white/20 transition-colors shrink-0 cursor-pointer"
                aria-label="Dismiss development banner"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav 
        className={`w-full px-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform pointer-events-auto ${
          isScrolled ? 'translate-y-2' : 'translate-y-0 py-3'
        }`}
      >
      <div 
        className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled 
            ? 'bg-background/70 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-full px-8 py-3' 
            : 'py-4 bg-transparent px-4'

        }`}
      >
        {/* Left: Logo & Live Status */}
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-xl font-black tracking-tighter group relative z-10"
            aria-label="HAAZRI Home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all duration-500" />
              <MotionImage
                whileHover={{ rotate: -10, scale: 1.15 }}
                src={branding.logo}
                alt={branding.name}
                width={40}
                height={40}
                priority
                className="h-10 w-auto object-contain transition-transform relative z-10 rounded-xl shadow-sm"
              />
            </div>
            <span className="text-foreground hidden md:block font-black tracking-tight group-hover:text-primary transition-colors">{branding.name}</span>
          </Link>

          {!isScrolled && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/40 backdrop-blur-md"
            >
              <Circle className="w-1.5 h-1.5 fill-green-500 text-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">Live Pipeline</span>
            </motion.div>
          )}
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden xl:flex items-center gap-0.5 transition-all duration-700">
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-secondary/35 border border-border/40 backdrop-blur-md shadow-inner whitespace-nowrap">

            {navigation.links.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${

                  pathname === link.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                {pathname === link.href && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-background border border-border/40 shadow-[0_2px_10px_rgba(255,84,0,0.05)] rounded-full -z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />

              </Link>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-4 whitespace-nowrap">
            <Link 
              href="/login" 
              className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary hover:scale-105 transition-all px-2 whitespace-nowrap"
            >
              Partner Login
            </Link>
            <Button size="sm" asChild className="rounded-full px-6 h-10 font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/15 hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all bg-primary text-white border-none group overflow-hidden relative whitespace-nowrap">
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">

                  {navigation.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full bg-secondary/80 text-foreground hover:bg-secondary border border-border/50 transition-all shadow-sm active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-md z-[-1] xl:hidden"

            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute top-full left-4 right-4 mt-4 glass border border-white/20 p-6 flex flex-col gap-6 xl:hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] rounded-[2rem]"

            >
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Navigation</span>
                {navigation.links.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    className={`text-xl font-bold transition-all ${
                      pathname === link.href ? 'text-primary scale-105' : 'text-foreground hover:text-primary hover:translate-x-2'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-border/50 flex flex-col gap-4">
                <Button asChild className="w-full rounded-full py-7 text-lg font-black shadow-2xl shadow-primary/30">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>

                    {navigation.cta}
                  </Link>
                </Button>
                <Link 
                  href="/login" 
                  className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partner Login
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </nav>
    </div>
  )
}


