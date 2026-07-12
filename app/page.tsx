'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { VernacularPreloader } from '@/components/ui/vernacular-preloader'
import { Navigation } from '@/components/landing/Navigation'
import { HeroSection } from '@/components/landing/HeroSection'
import { ProblemStatement } from '@/components/landing/ProblemStatement'
import { InformalLabor } from '@/components/landing/InformalLabor'
import { MafiaOffer } from '@/components/landing/MafiaOffer'
<<<<<<< HEAD
=======
import { EcosystemSection } from '@/components/landing/EcosystemSection'
import { MarketDynamicsSection } from '@/components/landing/MarketDynamicsSection'
import { RoadmapSection } from '@/components/landing/RoadmapSection'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { PremiumCard } from '@/components/ui/premium-card'
import { ArrowRight, Cpu, HelpCircle, ShieldCheck, Play } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 22 } },
  } as const

  return (
    <>
      <VernacularPreloader show={showPreloader} onComplete={() => setShowPreloader(false)} />
      
      {!showPreloader && (
        <main className="min-h-screen bg-background animate-in fade-in duration-1000">
          <Navigation />
          
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Solution Preview Section */}
<<<<<<< HEAD
          <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/10 relative overflow-hidden border-b border-border/40">
            <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
              <div className="space-y-6 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                  <HelpCircle className="w-3.5 h-3.5" />
                  How HAAZRI Works
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
=======
          <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/15 relative overflow-hidden border-b border-border/40">
            {/* Ambient Background Spotlights */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-mesh opacity-[0.03] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
              <div className="space-y-6 max-w-2xl text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                  <HelpCircle className="w-3.5 h-3.5" />
                  How HAAZRI Works
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-foreground">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                  Voice-First Frictionless <span className="text-primary italic">Recruitment</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Moving from channel chaos to a structured, trust-based employment exchange. Our solution operates entirely via voice callback (IVR) and SMS—requiring no smartphone or literacy from workers.
                </p>
              </div>
<<<<<<< HEAD
              <Button size="lg" asChild className="rounded-full px-8 h-14 text-base font-black bg-primary text-white hover:scale-105 active:scale-95 transition-all shrink-0 shadow-lg shadow-primary/15 gap-2">
=======
              <Button size="lg" asChild className="rounded-full px-8 h-14 text-base font-black bg-primary text-white hover:scale-105 active:scale-95 transition-all shrink-0 shadow-lg shadow-primary/15 gap-2 cursor-pointer">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                <Link href="/solution">
                  Explore the Solution
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* 3. Technology Preview Section */}
          <section className="py-24 px-6 md:px-10 lg:px-20 bg-background relative overflow-hidden border-b border-border/40">
<<<<<<< HEAD
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center justify-between relative z-10">
              <div className="space-y-6 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                  <Cpu className="w-3.5 h-3.5" />
                  System Standards
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
=======
            {/* Spotlight */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center justify-between relative z-10">
              <div className="space-y-6 max-w-2xl text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                  <Cpu className="w-3.5 h-3.5" />
                  System Standards
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-foreground">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                  Built on Open <span className="text-primary italic">Standards</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Engineered with state-of-the-art multilingual translation and open protocols. Utilizing ONEST/Beckn network contracts and BHASHINI AI APIs to unlock scale and portability.
                </p>
              </div>
<<<<<<< HEAD
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-14 text-base font-black border-2 border-border text-foreground hover:bg-secondary transition-all shrink-0 gap-2">
=======
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-14 text-base font-black border-2 border-border text-foreground hover:bg-secondary transition-all shrink-0 gap-2 cursor-pointer">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                <Link href="/technology">
                  Explore Tech Stack
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* 4. Broken Reality (Pain Statement) */}
          <ProblemStatement />

          {/* 5. Informal Labor (Quote + Badges) */}
          <InformalLabor />

          {/* 6. Build Your Local Workforce (Mafia Offer with upgraded UI) */}
          <MafiaOffer />

<<<<<<< HEAD
          {/* 7 & 8. Validation Logic & Dual Experience Simulator Teasers */}
          <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/15 relative overflow-hidden border-b border-border/40">
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verification & Testing
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Trust & Simulator Sandboxes</h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
=======
          {/* 6a. Ecosystem Architecture (B2C, B2B, B2G Tiers) */}
          <EcosystemSection />

          {/* 6b. Market Dynamics & Policy Tailwinds */}
          <MarketDynamicsSection />

          {/* 6c. Strategic Roadmap */}
          <RoadmapSection />

          {/* 7 & 8. Validation Logic & Dual Experience Simulator Teasers */}
          <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/10 relative overflow-hidden border-b border-border/40">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verification & Testing
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">Trust & Simulator Sandboxes</h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                  Offloaded to dedicated pages for fast loading, explore our field validation videos and play with our interactive sandbox modules.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* 7. Validation Logic Card */}
<<<<<<< HEAD
                <PremiumCard className="p-8 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between group shadow-lg">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Accessible as a separate page</span>
                    <h3 className="text-2xl font-bold">Validation Logic</h3>
=======
                <PremiumCard className="p-8 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between group shadow-lg hover:border-primary/45 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="space-y-4 text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">Accessible as a separate page</span>
                    <h3 className="text-2xl font-extrabold text-foreground">Validation Logic</h3>
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Watch real-time worker interactions and employer dashboards recorded during regional pilots, validating that the platform resolves the core market failures.
                    </p>
                  </div>
<<<<<<< HEAD
                  <div className="pt-8">
                    <Button size="sm" asChild className="rounded-full px-6 h-11 bg-primary text-white font-black hover:scale-105 active:scale-95 transition-all gap-1.5">
=======
                  <div className="pt-8 text-left">
                    <Button size="sm" asChild className="rounded-full px-6 h-11 bg-primary text-white font-black hover:scale-105 active:scale-95 transition-all gap-1.5 cursor-pointer">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                      <Link href="/validation-logic">
                        <Play className="w-3.5 h-3.5 fill-white" />
                        Watch Field Proof
                      </Link>
                    </Button>
                  </div>
                </PremiumCard>

                {/* 8. Dual Experience Simulator Card */}
<<<<<<< HEAD
                <PremiumCard className="p-8 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between group shadow-lg">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Accessible as a separate page</span>
                    <h3 className="text-2xl font-bold">Dual Experience Simulator</h3>
=======
                <PremiumCard className="p-8 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between group shadow-lg hover:border-primary/45 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="space-y-4 text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">Accessible as a separate page</span>
                    <h3 className="text-2xl font-extrabold text-foreground">Dual Experience Simulator</h3>
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Test both sides of the recruitment pipeline interactively. Experience the worker voice onboarding call and view matched candidates inside the WhatsApp employer portal.
                    </p>
                  </div>
<<<<<<< HEAD
                  <div className="pt-8">
                    <Button size="sm" variant="outline" asChild className="rounded-full px-6 h-11 border border-border text-foreground hover:bg-secondary font-black hover:scale-105 active:scale-95 transition-all gap-1.5">
=======
                  <div className="pt-8 text-left">
                    <Button size="sm" variant="outline" asChild className="rounded-full px-6 h-11 border border-border text-foreground hover:bg-secondary font-black hover:scale-105 active:scale-95 transition-all gap-1.5 cursor-pointer">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                      <Link href="/dual-experience-simulator">
                        Launch Simulator
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </PremiumCard>
              </div>
            </div>
          </section>

          {/* 9. Let's Bring This to Millions */}
          <CTASection />

          {/* 10. Get in Touch (Footer) */}
          <Footer />
        </main>
      )}
    </>
  )
}
