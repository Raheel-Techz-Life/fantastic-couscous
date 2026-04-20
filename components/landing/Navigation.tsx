'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { landingConfig } from '@/config/landing-data'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const { branding, navigation } = landingConfig
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        isScrolled ? 'top-4 px-4' : 'top-0 px-6 sm:px-10'
      }`}
    >
      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'max-w-6xl bg-background/85 backdrop-blur-xl border border-border/60 shadow-2xl shadow-primary/5 rounded-full px-6 py-3' 
            : 'max-w-7xl py-6 bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-xl font-black tracking-tighter group">
          <motion.img 
            whileHover={{ rotate: 10, scale: 1.1 }}
            src={branding.logo} 
            alt={branding.name} 
            className="h-10 w-auto object-contain transition-transform" 
          />
          <span className="text-foreground hidden sm:block group-hover:text-primary transition-colors">{branding.name}</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-1 px-2 py-1.5 rounded-full bg-secondary/30 border border-border/30 backdrop-blur-sm">
          {navigation.links.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className={`text-[13px] font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                pathname === link.href 
                  ? 'bg-background text-primary shadow-sm scale-105' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/60 hover:scale-105'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="rounded-full px-6 font-bold text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
            Partner Login
          </Button>
          <Button size="sm" className="rounded-full px-6 font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all border border-primary/50 relative overflow-hidden group">
            <span className="relative z-10">{navigation.cta}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-border p-6 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            {navigation.links.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`text-lg font-medium transition-colors ${
                  pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full rounded-full py-6 text-lg font-semibold">
              {navigation.cta}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


