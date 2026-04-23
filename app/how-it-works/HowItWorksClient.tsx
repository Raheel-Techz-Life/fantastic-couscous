'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { IVRSimulator } from '@/components/landing/IVRSimulator'
import { PremiumCard } from '@/components/ui/premium-card'
import { 
  CheckCircle2, 
  HelpCircle, 
  PhoneCall, 
  Mic, 
  Fingerprint, 
  MessageSquare, 
  Smartphone, 
  Star 
} from 'lucide-react'

const icons = [PhoneCall, Mic, Fingerprint, MessageSquare, Smartphone, Star]

export function HowItWorksClient() {
  const { howItWorks } = landingConfig

  return (
    <>
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            {howItWorks.tag}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            {howItWorks.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-2xl leading-relaxed"
          >
            {howItWorks.description}
          </motion.p>
        </div>
      </section>

      {/* Worker Journey */}
      <section className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Mic className="w-5 h-5" />
            </div>
            Worker Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.workerJourney.map((step, idx) => {
              const Icon = icons[idx] || Star
              return (
                <PremiumCard 
                  key={idx}
                  delay={idx * 0.1}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 text-8xl font-black text-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {step.faq && (
                    <div className="pt-4 border-t border-border flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs font-medium italic text-primary/80">{step.faq}</p>
                    </div>
                  )}
                </PremiumCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience it now</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interact with our IVR simulator to see how easy it is for a worker to apply.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <IVRSimulator />
        </div>
      </section>

      {/* Employer Journey */}
      <section className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Employer Experience</h2>
              <div className="space-y-8">
                {howItWorks.employerJourney.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-3xl border border-border glass shadow-premium">
              <div className="aspect-square bg-primary/5 rounded-2xl flex items-center justify-center border border-dashed border-primary/20">
                <p className="text-xs text-primary font-bold tracking-widest">WhatsApp UI Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 md:px-10 lg:px-20 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {howItWorks.faqs.map((faq, idx) => (
              <details key={idx} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors cursor-pointer">
                <summary className="font-bold list-none flex justify-between items-center text-lg">
                  {faq.q}
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-muted-foreground group-open:rotate-180 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
