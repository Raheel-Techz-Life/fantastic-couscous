'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { landingConfig } from '@/config/landing-data'
import { Button } from '@/components/ui/button'
import { Mail, ArrowRight } from 'lucide-react'

export function CTASection() {
  const { cta } = landingConfig

  return (
    <section className="px-6 py-24 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Background with Gradient & Mesh */}
      <div className="absolute inset-0 bg-slate-900 z-0" />
      <div className="absolute inset-0 bg-mesh opacity-20 z-0 bg-fixed" />
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-0"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          // Lighter blur radius than the original (25px -> 8px) — this only
          // fires once (viewport: { once: true }), but 25px was still an
          // expensive single repaint; 8px keeps the same visual beat.
          initial={{ opacity: 0, scale: 1.3, y: -150, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 450, damping: 18, mass: 1.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {cta.title}
          </h2>
          
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              asChild
              className="rounded-full px-10 h-16 text-lg font-bold bg-white text-slate-900 hover:bg-white/90 shadow-2xl shadow-black/20 gap-2 group cursor-pointer"
              aria-label="Contact HAAZRI team"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5" />
                Get in touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="rounded-full px-10 h-16 text-lg font-bold border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white gap-2 cursor-pointer"
              aria-label="Email HAAZRI team"
            >
              <a href="mailto:contact@haazri.co.in">
                <Mail className="w-5 h-5" />
                contact@haazri.co.in
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

