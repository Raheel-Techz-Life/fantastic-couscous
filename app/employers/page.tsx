'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  Users 
} from 'lucide-react'

export default function EmployersPage() {
  const { forms } = landingConfig

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-primary-soft/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
              >
                Hire from the next <span className="text-primary italic">450M</span>
              </motion.h1>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Zero Onboarding</h3>
                    <p className="text-muted-foreground text-sm">Review resumes and voice pitches directly on WhatsApp.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Instant Callback</h3>
                    <p className="text-muted-foreground text-sm">Connect with local talent in seconds with one tap.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[3rem] border border-border bg-card shadow-premium relative"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                Start a Local Pilot
              </div>
              <h2 className="text-2xl font-bold mb-8">{forms.employer.title}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {forms.employer.fields.map((field) => (
                    <div key={field} className="space-y-2">
                      <Label htmlFor={field} className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">{field}</Label>
                      <Input id={field} placeholder={field} className="rounded-2xl h-14 bg-secondary/30 border-none focus-visible:ring-primary" />
                    </div>
                  ))}
                </div>
                <Button className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
                  Submit Expression of Interest
                </Button>
                <p className="text-[10px] text-center text-muted-foreground italic">
                  * By clicking submit, you agree to our privacy policy and consent to a 24-hour callback window.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tiered Features */}
      <section className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Enterprise Options</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl border border-border bg-card">
              <h3 className="text-xl font-bold mb-2">Pilot</h3>
              <p className="text-2xl font-black mb-6 text-primary">Free</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Up to 50 applicants</li>
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> WhatsApp Dashboard</li>
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> ONES-native integration</li>
              </ul>
              <Button variant="outline" className="w-full rounded-xl">Selected</Button>
            </div>
            <div className="p-8 rounded-3xl border-2 border-primary bg-card relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full">Recommended</div>
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <p className="text-2xl font-black mb-6 text-primary">Custom</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Unlimited applicants</li>
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Real-time analytics</li>
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Bulk job posting</li>
              </ul>
              <Button className="w-full rounded-xl">Contact Us</Button>
            </div>
            <div className="p-8 rounded-3xl border border-border bg-card">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-2xl font-black mb-6 text-primary">Quote</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> API integration</li>
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> HRMS sync</li>
                <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Custom voice config</li>
              </ul>
              <Button variant="outline" className="w-full rounded-xl">Inquire</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
