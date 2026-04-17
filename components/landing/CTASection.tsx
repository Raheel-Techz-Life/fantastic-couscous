'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Button } from '@/components/ui/button'
import { Github, Mail, ArrowRight } from 'lucide-react'

export function CTASection() {
  const { cta } = landingConfig

  return (
    <section className="px-6 py-24 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Background with Gradient & Mesh */}
      <div className="absolute inset-0 bg-[#085041] z-0" />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              className="rounded-full px-10 h-16 text-lg font-bold bg-white text-[#085041] hover:bg-white/90 shadow-2xl shadow-black/20 gap-2 group"
            >
              <Mail className="w-5 h-5" />
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-10 h-16 text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
          </div>

          {/* Social Proof / Footer bit */}
          <div className="pt-16 border-t border-white/10 flex flex-col items-center gap-4">
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.3em]">
              Partnering with India's Open Networks
            </p>
            <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-white font-bold tracking-tighter text-xl">ONEST</span>
              <span className="text-white font-bold tracking-tighter text-xl">BHASHINI</span>
              <span className="text-white font-bold tracking-tighter text-xl">DIGITAL INDIA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

