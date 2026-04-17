'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const { branding, navigation } = landingConfig
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 sm:px-10 py-4 ${
        isScrolled ? 'glass py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
          <div className="h-4 w-4 rounded-full bg-primary" />
          <span className="text-foreground">{branding.name}</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s+/g, '')}`} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" className="rounded-full px-6 font-semibold">
            {navigation.cta}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-border p-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navigation.links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '')}`} 
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
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

