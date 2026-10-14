'use client'

import { useState } from 'react'
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
  Building,
  UserCheck,
  TrendingUp,
  FileSpreadsheet,
  Layers,
  PhoneCall,
  ShieldAlert,
  Sparkles,
  Loader2
} from 'lucide-react'
import Link from 'next/link'
import { B2BDashboardPreview } from '@/components/landing/B2BDashboardPreview'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function EmployersPage() {
  const { forms } = landingConfig
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitPilot = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'waitlist',
          fullName: formData['Contact Person'] || formData['Company Name'] || 'Employer Partner',
          organization: formData['Company Name'] || '',
          email: formData['Email'] || '',
          phone: formData['Phone'] || '',
          category: 'Employer B2B Pilot',
          projectScale: formData['Monthly Volume'] || '10-50 workers',
          notes: `City: ${formData['City'] || 'N/A'}. Submitted via Employers Page B2B Pilot modal.`,
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to submit pilot request. Please try again.')
      }

      setSubmitted(true)
    } catch (err: any) {
      setSubmitError(err?.message || 'Something went wrong. Please check your connection or contact contact@haazri.co.in')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-20 lg:pb-24 px-6 md:px-10 lg:px-20 bg-secondary/15 relative overflow-hidden border-b border-border/40">

        {/* Decorative modern mesh/grid details */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest w-fit border border-primary/10"

              >
                <Building className="w-3.5 h-3.5" />
                Enterprise Solutions (B2B)
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-foreground"
              >
                Build and Manage Your <span className="text-primary">Trusted</span> Local Workforce.
              </motion.h1>
              
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                HAAZRI connects builders, contractors, and HR teams to a verified local workforce through a multilingual voice-first OS. Access 100% Aadhaar & e-Shram compliant talent and eliminate hiring unreliability.
              </p>
              
              {/* Structured Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/80 pt-6">
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-foreground">Zero-Barrier IVR</h4>

                    <p className="text-muted-foreground text-xs mt-0.5">Workers register using speech in their native dialect.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-foreground">e-Shram Auditing</h4>

                    <p className="text-muted-foreground text-xs mt-0.5">Full compliance reporting and digital muster rolls.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-foreground">24h Replacement SLA</h4>

                    <p className="text-muted-foreground text-xs mt-0.5">Instant matching within 5-10km via backup worker pools.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-foreground">Voice Screened</h4>

                    <p className="text-muted-foreground text-xs mt-0.5">Hear 30-second audio pitches before you call or dispatch.</p>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="h-14 px-8 rounded-full text-xs font-black uppercase tracking-widest bg-primary hover:bg-primary/95 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all cursor-pointer">
                      Start a Local Pilot
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-xl rounded-3xl p-8 border border-border bg-card shadow-2xl overflow-hidden">
                    <DialogHeader className="space-y-2 mb-6">
                      <div className="inline-flex w-fit items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest">
                        B2B Pilot Program
                      </div>
                      <DialogTitle className="text-2xl font-black text-foreground">Claim Your B2B Pilot</DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground">
                        Configure your local pilot requirements. Our team will contact you within a 24-hour window to review site specifications.
                      </DialogDescription>
                    </DialogHeader>
                    {submitted ? (
                      <div className="py-8 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Pilot Request Received!</h3>
                        <p className="text-sm text-muted-foreground max-w-md mx-auto">
                          Thank you for partnering with HAAZRI. Our pilot coordinator in Hubballi-Dharwad will review your workforce parameters and contact you within 24 hours.
                        </p>
                        <Button 
                          onClick={() => { setSubmitted(false); setFormData({}); }}
                          variant="outline" 
                          className="rounded-full mt-4 text-xs font-bold uppercase tracking-wider"
                        >
                          Submit Another Request
                        </Button>
                      </div>
                    ) : (
                      <form className="space-y-6" onSubmit={handleSubmitPilot}>
                        {submitError && (
                          <div className="p-3 rounded-xl bg-destructive/10 text-destructive text-xs border border-destructive/20">
                            {submitError}
                          </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {forms.employer.fields.map((field) => (
                            <div key={field} className="space-y-1.5 text-left">
                              <Label htmlFor={field} className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">{field}</Label>
                              <Input 
                                id={field} 
                                placeholder={field} 
                                value={formData[field] || ''}
                                onChange={(e) => handleInputChange(field, e.target.value)}
                                className="rounded-xl h-12 bg-secondary/40 border border-border/80 focus-visible:ring-primary text-sm" 
                                required 
                              />
                            </div>
                          ))}
                        </div>
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full h-14 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/15 bg-primary hover:bg-primary/95 text-white cursor-pointer mt-4 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Submitting Expression of Interest...
                            </>
                          ) : (
                            'Submit Expression of Interest'
                          )}
                        </Button>
                        <p className="text-[10px] text-center text-muted-foreground italic">
                          * By clicking submit, you agree to our B2B privacy terms and consent to digital attendance roll audits.
                        </p>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>

                <Button asChild variant="outline" className="h-14 px-8 rounded-full text-xs font-black uppercase tracking-widest border border-border/80 hover:bg-secondary/40 transition-colors cursor-pointer text-foreground">
                  <Link href="#b2b-offerings">
                    Explore B2B Offerings
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Dashboard Preview with Glow Backing */}
            <div className="lg:col-span-7 w-full flex justify-center relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-60 z-0 animate-pulse pointer-events-none group-hover:opacity-85 transition-opacity duration-500" />
              

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', damping: 20 }}
                className="w-full relative z-10"

              >
                <B2BDashboardPreview />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiered Features & Offerings */}
      <section id="b2b-offerings" className="py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-20 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">Structured B2B Offerings</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">

              Custom structures designed to serve local SMB contractors as well as national enterprise firms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* SMB Tier Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 md:p-12 rounded-[2.5rem] border border-border bg-card flex flex-col justify-between shadow-xl relative hover:border-primary/45 transition-all duration-500 overflow-hidden group text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-6 relative z-10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
                    Small Contractors & Local Businesses
                  </span>
                  <h3 className="text-3xl font-black mt-4 mb-2 text-foreground">SMB Tier</h3>

                  <p className="text-primary font-bold text-lg">Pay-Per-Hire or Low Monthly Subscription</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Perfect for local factories, retail outlets, and residential developers needing instant access to a reliable, local verified workforce pool.
                </p>
                
                <hr className="border-border" />
                
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Job Posting via Web/WhatsApp:</strong> Launch automated worker calling templates.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Local Verified Pool:</strong> Match immediately with labor within 5-10km radius.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>30s Voice Pitches:</strong> Hear candidates explain their skills in their local dialects.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>BOCW Muster Rolls:</strong> Access basic digital attendance logs to track active labor.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 relative z-10">
                <Button asChild className="w-full h-14 rounded-2xl font-bold bg-primary hover:bg-primary/95 text-white cursor-pointer shadow-lg shadow-primary/10">

                  <Link href="/login">Access SMB Portal</Link>
                </Button>
              </div>
            </motion.div>

            {/* Enterprise Tier Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 md:p-12 rounded-[2.5rem] border-2 border-primary bg-card flex flex-col justify-between shadow-2xl relative overflow-hidden group text-left"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full z-20">
                RECOMMENDED FOR SCALE
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-60 z-0 animate-pulse pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-6 relative z-10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/15">
                    Large Employers & Infrastructure Firms
                  </span>
                  <h3 className="text-3xl font-black mt-4 mb-2 text-foreground">Enterprise Tier</h3>

                  <p className="text-primary font-bold text-lg">Annual SaaS License + API Usage Fee</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built for major construction companies, government contractors, and enterprise recruitment pipelines requiring robust compliance and software integrations.
                </p>
                
                <hr className="border-border" />
                
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>HRMS & ERP Sync:</strong> Custom APIs connect directly into existing corporate HR tools.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Bulk Hiring Campaigns:</strong> Call and screen 1,000+ candidates simultaneously via IVR.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>SLA Replacement Guarantees:</strong> Automatic instant replacement routing if a worker cancels.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Real-time Analytics:</strong> Track labor fill rates, wage trends, and worker ratings.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Full Compliance reports:</strong> Detailed e-Shram linkages, BOCW status, and audit-ready wage disbursement logs.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 relative z-10">
                <Button asChild className="w-full h-14 rounded-2xl font-bold bg-primary hover:bg-primary/95 text-white cursor-pointer shadow-lg shadow-primary/20">

                  <Link href="/login">Access Enterprise Dashboard</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Analytics Showcase */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
              Interactive Preview
            </span>
            <h2 className="text-4xl font-black tracking-tight text-foreground">Compliance & Analytics Infrastructure</h2>

            <p className="text-muted-foreground">
              Take control of your workforce operations. View real-time digital muster rolls and compliance reports.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Muster Roll Mockup */}
            <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6 hover:border-primary/45 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">BOCW Digital Muster Roll</span>
                </div>
                <span className="text-[9px] font-bold bg-green-500/10 text-green-600 px-2 py-1 rounded-full uppercase">Compliant</span>
              </div>
              <div className="overflow-x-auto relative z-10">

                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground font-bold">
                      <th className="pb-3 pr-2">Worker Name</th>
                      <th className="pb-3 px-2">Trade</th>
                      <th className="pb-3 px-2">Aadhaar (e-Shram)</th>
                      <th className="pb-3 px-2">Shift Attendance</th>
                      <th className="pb-3 pl-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-4 pr-2 font-bold flex items-center gap-2 text-foreground">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">MR</div>
                        Manoj Rawat
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">Mason</td>
                      <td className="py-4 px-2 text-green-600 font-medium">✓ Linked</td>
                      <td className="py-4 px-2 text-muted-foreground">08:00 AM - 05:00 PM</td>
                      <td className="py-4 pl-2 text-right"><span className="px-2 py-0.5 rounded bg-green-500/15 text-green-600 text-[10px] font-bold">Present</span></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 pr-2 font-bold flex items-center gap-2 text-foreground">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">SK</div>
                        Sunita Kurmi
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">Helper</td>
                      <td className="py-4 px-2 text-green-600 font-medium">✓ Linked</td>
                      <td className="py-4 px-2 text-muted-foreground">08:00 AM - 05:00 PM</td>
                      <td className="py-4 pl-2 text-right"><span className="px-2 py-0.5 rounded bg-green-500/15 text-green-600 text-[10px] font-bold">Present</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-2 font-bold flex items-center gap-2 text-foreground">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">KS</div>
                        Kartik Singh
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">Electrician</td>
                      <td className="py-4 px-2 text-yellow-600 font-medium">⚠ Pending Verification</td>
                      <td className="py-4 px-2 text-muted-foreground">—</td>

                      <td className="py-4 pl-2 text-right"><span className="px-2 py-0.5 rounded bg-red-500/15 text-red-600 text-[10px] font-bold">No-Show</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-[10px] text-muted-foreground italic bg-secondary/50 p-3 rounded-xl border border-border/60 relative z-10">

                * Generates automatically from Voice IVR night-before confirmations and digital site check-ins.
              </div>
            </div>

            {/* Analytics Mockup */}
            <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6 hover:border-primary/45 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">Workforce Analytics Panel</span>

                </div>
                <span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-1 rounded-full">Live Stats</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">

                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1">Fill Rate</span>
                  <span className="text-2xl font-black text-foreground">94.8%</span>
                  <span className="text-[10px] text-green-600 font-bold block mt-1">↑ 12% vs Local Market</span>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1">Avg Time-To-Fill</span>
                  <span className="text-2xl font-black text-foreground">2.4 Hours</span>
                  <span className="text-[10px] text-primary font-bold block mt-1">Instant SMS/IVR matching</span>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1">Retention (30 Days)</span>
                  <span className="text-2xl font-black text-foreground">87.2%</span>
                  <span className="text-[10px] text-green-600 font-bold block mt-1">Driven by Monotonic Wages</span>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1">e-Shram Integration</span>
                  <span className="text-2xl font-black text-foreground">100%</span>
                  <span className="text-[10px] text-green-600 font-bold block mt-1">Aadhaar Secure linkage</span>
                </div>
              </div>
              
              <div className="flex gap-4 items-center justify-between text-xs bg-primary/5 p-4 rounded-2xl border border-primary/20 relative z-10">

                <div className="flex gap-2 items-center">
                  <UserCheck className="w-4 h-4 text-primary" />
                  <span className="font-bold text-foreground">SLA-Backed No-Show Guarantee Active</span>
                </div>
                <span className="text-[9px] font-black bg-primary text-white px-2 py-0.5 rounded">100% Filled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
