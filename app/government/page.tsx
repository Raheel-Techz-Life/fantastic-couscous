'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Map, 
  BookOpen, 
  Link2, 
  ChevronRight, 
  BarChart4, 
  FileCheck,
  ShieldCheck,
  SmartphoneNfc
} from 'lucide-react'
import Link from 'next/link'

export default function GovernmentPage() {
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
                For Government (B2G)
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tight leading-none"
              >
                Last-Mile Welfare & <span className="text-primary italic">Workforce Insights</span>
              </motion.h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                HAAZRI acts as the digital infrastructure for state welfare deployment, vocational skilling distribution, and compliant municipal hiring—without requiring internet or smartphones.
              </p>
              <div className="flex gap-4">
                <Button asChild className="h-14 px-8 rounded-2xl font-bold bg-primary text-white hover:bg-primary/95 shadow-xl shadow-primary/20">
                  <Link href="/login">Access B2G Portal</Link>
                </Button>
                <Button asChild variant="outline" className="h-14 px-8 rounded-2xl font-bold">
                  <Link href="/about">Learn About Our Team</Link>
                </Button>
              </div>
            </div>

            {/* Interactive Aadhaar / e-Shram Bridge Mock */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2.5rem] border border-border bg-card shadow-2xl relative overflow-hidden space-y-6"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Verification Engine
                </span>
                <span className="text-[10px] font-bold text-muted-foreground">e-Shram Aadhaar Bridge</span>
              </div>
              
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/60 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Aadhaar Vault Verification</h4>
                    <p className="text-muted-foreground text-xs">Biometric & demographic match completed via voice consent.</p>
                  </div>
                </div>
                
                <div className="h-px bg-border" />
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Match Rate:</span>
                  <span className="font-bold text-foreground">99.2% accuracy</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>BOCW Registration Status:</span>
                  <span className="font-bold text-green-600">✓ Registered and Active</span>
                </div>
              </div>
              
              {/* Dynamic Step visualizer */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80">Active Welfare Campaigns</h4>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-[10px] font-bold">BOCW Cess Pools</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-[10px] font-bold">PMKVY Upskilling</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-lg text-[10px] font-bold">e-Shram Sync</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-black tracking-tight">The Four B2G Pillars</h2>
            <p className="text-muted-foreground">
              How HAAZRI solves key access and reporting challenges for municipal and state administrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pillar 1 */}
            <div className="p-8 rounded-[2rem] border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Link2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Welfare & Registration Integration</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Acts as a last-mile infrastructure for migrant workers. Integrates a custom voice-based IVR flow to check, register, and sync workers with the state Building and Other Construction Workers (BOCW) board and the national e-Shram database.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-[2rem] border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Skill India Partner</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Delivers customized vocational upskilling alerts and Pradhan Mantri Kaushal Vikas Yojana (PMKVY) scheme details directly to feature phones in local dialects. Workers receive learning updates and matching assessments over a simple call.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-[2rem] border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Data Partnerships</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Provides aggregated, anonymized mobility insights, regional wage trends by trade, and skill availability heatmaps to state planning and economic development departments to inform localized training and infra allocations.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-[2rem] border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Municipal Hiring</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Supplies pre-verified, audit-compliant local labor pools directly to state infrastructure projects, Smart City initiatives, and AMRUT water/drainage developments, ensuring fair wages and digital muster transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill India & Mobility Visualizers */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Active B2G Operations Dashboard</h2>
            <p className="text-muted-foreground">
              Mock analytics displaying trade-wise labor deployment and Skill India program alerts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upskilling Alert simulator */}
            <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <SmartphoneNfc className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">Skill India IVR Broadcast (Mock)</span>
                </div>
                <span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-1 rounded-full">Audio Transcript</span>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/60">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">IVR Prompt (Hindi)</p>
                  <p className="text-xs italic text-foreground">"नमस्ते! कौशल भारत योजना के तहत, हुबली में राजमिस्त्री (Mason) प्रशिक्षण शिविर शुरू हो रहा है। भाग लेने के लिए 1 दबाएं।"</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/60">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">English Translation</p>
                  <p className="text-xs italic text-muted-foreground">"Hello! Under the Skill India Scheme, a Masonry Training Camp is starting in Hubli. Press 1 to join."</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-xs flex justify-between items-center">
                <span className="font-bold text-green-700">Broadcast Success Rate:</span>
                <span className="font-bold text-green-700">92.4% callbacks completed</span>
              </div>
            </div>

            {/* Mobility Insights Mock */}
            <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BarChart4 className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">Mobility & Planning Data</span>
                </div>
                <span className="text-[9px] font-bold bg-green-500/10 text-green-600 px-2 py-1 rounded-full uppercase">Updated Live</span>
              </div>
              
              {/* Dummy CSS visual heatmap */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Hubli-Dharwad Smart City (AMRUT Projects)</span>
                    <span className="text-primary">1,240 Mason/Helpers</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Vocational Training Registrations</span>
                    <span className="text-primary">4,890 Workers</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '62%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>e-Shram Verification Auditing</span>
                    <span className="text-primary">15,230 Audited Logs</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
              
              <div className="text-[10px] text-muted-foreground italic bg-secondary/50 p-3 rounded-xl border border-border/60">
                * All planning data is aggregated, strictly anonymized, and DPDP Act 2023 compliant.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
