'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Building2, 
  Handshake, 
  BarChart, 
  ExternalLink 
} from 'lucide-react'

export default function PartnersPage() {
  const { forms } = landingConfig

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
              >
                Inclusion Ecosystem
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
              >
                Join the <span className="text-primary italic">Movement</span>
              </motion.h1>
              <p className="text-background/60 text-xl leading-relaxed max-w-xl">
                We're not just building an app. We're building a network. Connect your skilling platform, staffing agency, or funding initiative to HAAZRI.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2.5rem] border border-background/20 bg-background/5 backdrop-blur-md"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">{forms.partner.title}</h2>
              <form className="space-y-4">
                {forms.partner.fields.map((field) => (
                  <div key={field} className="space-y-2">
                    <Label className="text-[10px] uppercase font-bold tracking-widest text-background/40">{field}</Label>
                    {field === 'Message' ? (
                      <Textarea placeholder="How can we collaborate?" className="bg-background/10 border-background/20 text-white rounded-xl h-32" />
                    ) : (
                      <Input placeholder={field} className="bg-background/10 border-background/20 text-white rounded-xl h-12" />
                    )}
                  </div>
                ))}
                <Button className="w-full h-14 rounded-full bg-primary text-white font-bold text-lg hover:opacity-90">
                  Submit Expression of Interest
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Thesis */}
      <section className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="p-12 rounded-[3rem] border border-border bg-card shadow-premium flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Why Partner with us?</h2>
            <div className="space-y-6">
              {[
                'ONEST-native architecture for total interoperability',
                'BHASHINI-integrated for massive linguistic scale',
                'DPDP-compliant data handling protocols',
                'Direct access to 450M informal workers'
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <p className="font-medium text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Investment Opportunity</h3>
              <p className="text-muted-foreground leading-relaxed">
                HAAZRI is currently scaling pilots in Hubli and Bengaluru. We are seeking partners and seed funders who want to contribute to the world's most accessible employment infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-secondary/30">
                <BarChart className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-1">Scale</h4>
                <p className="text-xs text-muted-foreground">Targeting 1M job IDs in 18 months.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30">
                <Building2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-1">Network</h4>
                <p className="text-xs text-muted-foreground">Plugged into the India Digital Stack.</p>
              </div>
            </div>
            <Button variant="outline" className="rounded-full px-8 h-12 gap-2">
              <ExternalLink className="w-4 h-4" />
              Download Pitch Deck (0.8MB)
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
