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
  Building,
  UserCheck,
  TrendingUp,
  FileSpreadsheet,
  Layers,
  PhoneCall,
  ShieldAlert
} from 'lucide-react'
import Link from 'next/link'

export default function EmployersPage() {
  const { forms } = landingConfig

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
              >
                For Employers (B2B)
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tight leading-none"
              >
                Hire from the next <span className="text-primary italic">400M</span>
              </motion.h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Ditch the unverified no-shows. HAAZRI links employers of all sizes to a verified, local workforce using a voice-first OS that works on any basic phone.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">WhatsApp & Web Job Postings</h3>
                    <p className="text-muted-foreground text-sm">Post requirements instantly from WhatsApp or your web dashboard. Local workers get called immediately.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">24-Hour Talent pipeline</h3>
                    <p className="text-muted-foreground text-sm">Review 30-second voice pitches from verified workers and hire in one click.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[3rem] border border-border bg-card shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                Start a Local Pilot
              </div>
              <h2 className="text-2xl font-bold mb-8">Claim Your Pilot</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {forms.employer.fields.map((field) => (
                    <div key={field} className="space-y-2">
                      <Label htmlFor={field} className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">{field}</Label>
                      <Input id={field} placeholder={field} className="rounded-2xl h-14 bg-secondary/50 border-none focus-visible:ring-primary" />
                    </div>
                  ))}
                </div>
                <Button className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 bg-primary hover:bg-primary/95 text-white">
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

      {/* Tiered Features & Offerings */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black tracking-tight">Structured B2B Offerings</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Custom structures designed to serve local SMB contractors as well as national enterprise firms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* SMB Tier Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 md:p-12 rounded-[2.5rem] border border-border bg-card flex flex-col justify-between shadow-xl relative"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Small Contractors & Local Businesses
                  </span>
                  <h3 className="text-3xl font-black mt-4 mb-2">SMB Tier</h3>
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

              <div className="mt-12">
                <Button asChild className="w-full h-14 rounded-2xl font-bold bg-primary hover:bg-primary/95 text-white">
                  <Link href="/login">Access SMB Portal</Link>
                </Button>
              </div>
            </motion.div>

            {/* Enterprise Tier Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 md:p-12 rounded-[2.5rem] border-2 border-primary bg-card flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                RECOMMENDED FOR SCALE
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Large Employers & Infrastructure Firms
                  </span>
                  <h3 className="text-3xl font-black mt-4 mb-2">Enterprise Tier</h3>
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

              <div className="mt-12">
                <Button asChild className="w-full h-14 rounded-2xl font-bold bg-primary hover:bg-primary/95 text-white">
                  <Link href="/login">Access Enterprise Dashboard</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Analytics Showcase */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              Interactive Preview
            </span>
            <h2 className="text-4xl font-black tracking-tight">Compliance & Analytics Infrastructure</h2>
            <p className="text-muted-foreground">
              Take control of your workforce operations. View real-time digital muster rolls and compliance reports.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Muster Roll Mockup */}
            <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">BOCW Digital Muster Roll</span>
                </div>
                <span className="text-[9px] font-bold bg-green-500/10 text-green-600 px-2 py-1 rounded-full uppercase">Compliant</span>
              </div>
              <div className="overflow-x-auto">
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
                      <td className="py-4 pr-2 font-bold flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">MR</div>
                        Manoj Rawat
                      </td>
                      <td className="py-4 px-2">Mason</td>
                      <td className="py-4 px-2 text-green-600 font-medium">✓ Linked</td>
                      <td className="py-4 px-2">08:00 AM - 05:00 PM</td>
                      <td className="py-4 pl-2 text-right"><span className="px-2 py-0.5 rounded bg-green-500/15 text-green-600 text-[10px] font-bold">Present</span></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 pr-2 font-bold flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">SK</div>
                        Sunita Kurmi
                      </td>
                      <td className="py-4 px-2">Helper</td>
                      <td className="py-4 px-2 text-green-600 font-medium">✓ Linked</td>
                      <td className="py-4 px-2">08:00 AM - 05:00 PM</td>
                      <td className="py-4 pl-2 text-right"><span className="px-2 py-0.5 rounded bg-green-500/15 text-green-600 text-[10px] font-bold">Present</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-2 font-bold flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">KS</div>
                        Kartik Singh
                      </td>
                      <td className="py-4 px-2">Electrician</td>
                      <td className="py-4 px-2 text-yellow-600 font-medium">⚠ Pending Verification</td>
                      <td className="py-4 px-2">—</td>
                      <td className="py-4 pl-2 text-right"><span className="px-2 py-0.5 rounded bg-red-500/15 text-red-600 text-[10px] font-bold">No-Show</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-[10px] text-muted-foreground italic bg-secondary/50 p-3 rounded-xl border border-border/60">
                * Generates automatically from Voice IVR night-before confirmations and digital site check-ins.
              </div>
            </div>

            {/* Analytics Mockup */}
            <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">Workforce Analytics Panel</span>
                </div>
                <span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-1 rounded-full">Live Stats</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
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
              
              <div className="flex gap-4 items-center justify-between text-xs bg-primary/5 p-4 rounded-2xl border border-primary/20">
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
