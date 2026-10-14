'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { PremiumCard } from '@/components/ui/premium-card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, CheckCircle, Building2, HelpCircle, Network, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'employer' | 'partner'>('employer')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Form states
  const [employerForm, setEmployerForm] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    city: '',
    volume: ''
  })

  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    contactName: '',
    phone: '',
    email: '',
    role: '',
    message: ''
  })

  const handleEmployerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployerForm({ ...employerForm, [e.target.name]: e.target.value })
  }

  const handlePartnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPartnerForm({ ...partnerForm, [e.target.name]: e.target.value })
  }

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const payload = activeTab === 'employer' ? employerForm : partnerForm

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
      toast.success("Request registered! Our Hubballi-Dharwad pilot team will reach out via WhatsApp.")
    } catch {
      toast.error("Network issue. Please email us at vidyut@vishwadev.tech")
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-secondary/10 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-mesh opacity-5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
            <Network className="w-3.5 h-3.5" />
            Connect With HAAZRI
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
            Let's build the <span className="text-primary italic">workforce OS</span> together
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Whether you are looking to hire verified workers at scale or integrate your welfare/skilling platform with the ONEST protocol, we are ready to deploy.
          </p>
        </div>
      </section>

      {/* Main Interactive Form & Info Grid */}
      <section className="py-20 px-6 md:px-10 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left / Main form - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-orange-600" />
              
              {/* Custom Form Tabs */}
              <div className="flex gap-2 p-1.5 bg-secondary/30 rounded-full border border-border/40 mb-10 max-w-md">
                <button
                  id="tab-employer-trigger"
                  onClick={() => { setActiveTab('employer'); setSubmitted(false); }}
                  className={`flex-1 text-[10px] font-black uppercase tracking-widest py-3 px-4 rounded-full transition-all ${
                    activeTab === 'employer'
                      ? 'bg-background text-primary shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-border/40'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Hire Workers
                </button>
                <button
                  id="tab-partner-trigger"
                  onClick={() => { setActiveTab('partner'); setSubmitted(false); }}
                  className={`flex-1 text-[10px] font-black uppercase tracking-widest py-3 px-4 rounded-full transition-all ${
                    activeTab === 'partner'
                      ? 'bg-background text-primary shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-border/40'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Partners & Orgs
                </button>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto border border-green-500/25">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
                      Your inquiry has been received. One of our regional deployment managers will reach out to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full px-6 h-11 border border-border font-black text-xs uppercase tracking-wider"
                    >
                      Send another request
                    </Button>
                  </motion.div>
                ) : activeTab === 'employer' ? (
                  <motion.form
                    key="employer-form"
                    id="form-employer"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={submitForm}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-xl font-bold mb-2">Hire from India's 400M Informal Workforce</h2>
                      <p className="text-xs text-muted-foreground">Fill in your requirements to kickstart a zero-cost matching pilot.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Company Name</label>
                        <Input 
                          id="input-company-name"
                          name="companyName"
                          placeholder="e.g. Mahajan Infrastructures"
                          value={employerForm.companyName}
                          onChange={handleEmployerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Contact Person</label>
                        <Input 
                          id="input-contact-name-emp"
                          name="contactName"
                          placeholder="e.g. Shivanand M."
                          value={employerForm.contactName}
                          onChange={handleEmployerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone Number</label>
                        <Input 
                          id="input-phone-emp"
                          name="phone"
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={employerForm.phone}
                          onChange={handleEmployerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address</label>
                        <Input 
                          id="input-email-emp"
                          name="email"
                          type="email"
                          placeholder="e.g. build@company.com"
                          value={employerForm.email}
                          onChange={handleEmployerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Operating City</label>
                        <Input 
                          id="input-city"
                          name="city"
                          placeholder="e.g. Hubballi, Bengaluru"
                          value={employerForm.city}
                          onChange={handleEmployerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Estimated Monthly Hiring Volume</label>
                        <Select onValueChange={(value) => setEmployerForm({...employerForm, volume: value})}>
                          <SelectTrigger id="select-volume" className="bg-secondary/20 border-border rounded-xl">
                            <SelectValue placeholder="Select hiring tier" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1–10 workers / month</SelectItem>
                            <SelectItem value="11-50">11–50 workers / month</SelectItem>
                            <SelectItem value="51-200">51–200 workers / month</SelectItem>
                            <SelectItem value="200+">200+ workers / month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button 
                      id="button-submit-emp"
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full rounded-full h-14 bg-primary text-white hover:scale-105 transition-all text-xs font-black uppercase tracking-widest gap-2 shadow-lg shadow-primary/15"
                    >
                      {isSubmitting ? "Sending Request..." : "Initiate Pilot Onboarding"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.form
                    key="partner-form"
                    id="form-partner"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={submitForm}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-xl font-bold mb-2">Joint Ecosystem Integration</h2>
                      <p className="text-xs text-muted-foreground">For NGO skilling platforms, state welfare programs, or investment inquiries.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Organization Name</label>
                        <Input 
                          id="input-org-name"
                          name="organization"
                          placeholder="e.g. Skill India / Deshpande Foundation"
                          value={partnerForm.organization}
                          onChange={handlePartnerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Name</label>
                        <Input 
                          id="input-contact-name-part"
                          name="contactName"
                          placeholder="e.g. Dr. Rajesh Kumar"
                          value={partnerForm.contactName}
                          onChange={handlePartnerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2 md:col-span-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Role / Position</label>
                        <Input 
                          id="input-role"
                          name="role"
                          placeholder="e.g. Director"
                          value={partnerForm.role}
                          onChange={handlePartnerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</label>
                        <Input 
                          id="input-email-part"
                          name="email"
                          type="email"
                          placeholder="e.g. partner@org.gov"
                          value={partnerForm.email}
                          onChange={handlePartnerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone Number</label>
                        <Input 
                          id="input-phone-part"
                          name="phone"
                          type="tel"
                          placeholder="e.g. +91 99999 88888"
                          value={partnerForm.phone}
                          onChange={handlePartnerChange}
                          required
                          className="bg-secondary/20 border-border rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Tell us about your collaboration interest</label>
                      <Textarea 
                        id="textarea-message"
                        name="message"
                        placeholder="Detail your goals: welfare delivery bridge, regional pilots, Beckn integration nodes, or institutional investment opportunities."
                        value={partnerForm.message}
                        onChange={handlePartnerChange}
                        required
                        rows={4}
                        className="bg-secondary/20 border-border rounded-2xl resize-none"
                      />
                    </div>

                    <Button 
                      id="button-submit-part"
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full rounded-full h-14 bg-primary text-white hover:scale-105 transition-all text-xs font-black uppercase tracking-widest gap-2 shadow-lg shadow-primary/15"
                    >
                      {isSubmitting ? "Sending Request..." : "Request Ecosystem Consultation"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right sidebar - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info */}
            <PremiumCard className="p-8 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Direct Communication</span>
                <h3 className="text-2xl font-bold">Contact Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-wider text-muted-foreground">HAAZRI Pilot Line</p>
                      <p className="text-sm font-bold text-foreground">7011329518</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-wider text-muted-foreground">Email Correspondence</p>
                      <p className="text-sm font-bold text-foreground">Haazri@vihwadev.tech</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-wider text-muted-foreground">Development Headquarters</p>
                      <p className="text-sm font-bold text-foreground leading-relaxed">
                        Hubli KA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </PremiumCard>

            {/* Platform Integration Badge */}
            <PremiumCard className="p-8 rounded-[2.5rem] bg-card border border-border shadow-lg relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-green-500">API Status</span>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Integration Ready
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Our system endpoints fully support ONEST/Beckn protocol schema contracts and BHASHINI translation callbacks.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[9px] font-black uppercase tracking-widest bg-secondary/80 text-foreground border border-border px-2.5 py-1 rounded-full">
                    ONEST / Beckn
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest bg-secondary/80 text-foreground border border-border px-2.5 py-1 rounded-full">
                    BHASHINI AI
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest bg-secondary/80 text-foreground border border-border px-2.5 py-1 rounded-full">
                    DPDP COMPLIANT
                  </span>
                </div>
              </div>
            </PremiumCard>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
