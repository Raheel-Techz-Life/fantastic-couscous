import { Navigation } from '@/components/landing/Navigation'
import { HeroSection } from '@/components/landing/HeroSection'
import { VideoCarousel } from '@/components/landing/VideoCarousel'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { TechnologySection } from '@/components/landing/TechnologySection'
import { ImpactSection } from '@/components/landing/ImpactSection'
import { TeamSection } from '@/components/landing/TeamSection'
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/landing/Footer'
import { IVRSimulator } from '@/components/landing/IVRSimulator'
import { WhatsAppDashboard } from '@/components/landing/WhatsAppDashboard'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background bg-mesh">
      <Navigation />
      
      <main>
        {/* Full-width Hero */}
        <section className="relative z-10 px-6 pt-32 pb-24 md:px-10 lg:px-20 overflow-hidden">
          <HeroSection />
        </section>

        {/* Cinematic Video Showcase */}
        <section className="px-6 py-20 bg-linear-to-b from-transparent to-black/5 dark:to-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-3xl font-bold mb-12">See it in action</h2>
            <VideoCarousel />
          </div>
        </section>

        {/* Interactive Experience Section */}
        <section className="px-6 py-24 md:px-10 lg:px-20 bg-mesh relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">The Dual Experience</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Simple for the worker, powerful for the employer. Experience both sides of the zero-barrier ecosystem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Worker Side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                    Worker Perspective
                  </div>
                  <h3 className="text-3xl font-bold">The Missed Call Flow</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed for 100% digital accessibility. No internet, no literacy, no smartphone required. Just a simple dial and voice responses.
                  </p>
                </div>
                <IVRSimulator />
              </div>

              {/* Employer Side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest">
                    Employer Perspective
                  </div>
                  <h3 className="text-3xl font-bold">WhatsApp Dashboard</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Instantly review applications on the world's most popular messaging app. No new portals to learn—just your existing workflow.
                  </p>
                </div>
                <WhatsAppDashboard />
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <FeaturesSection />
        <TechnologySection />
        <ImpactSection />
        <TeamSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
