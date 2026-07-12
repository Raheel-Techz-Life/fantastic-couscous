'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { MapPin, Shield, Star, Users2 } from 'lucide-react'

const avatarColors: Record<string, string> = {
  teal: 'bg-primary/10 text-primary',
  blue: 'bg-blue-500/10 text-blue-600',
  purple: 'bg-purple-500/10 text-purple-600',
  coral: 'bg-orange-500/10 text-orange-600',
}

export default function AboutPage() {
  const { team } = landingConfig

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero / Vision Section */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
            >
              Our Vision
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tight"
            >
              Zero Barriers to <span className="text-primary italic">Dignified Income</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are on a mission to provide every informal worker in India with a portable work identity, fair access to income opportunities, and a pathway to upward mobility. Crucially, HAAZRI requires **no smartphone, no internet connection, and no literacy** from the worker. By turning simple voice commands and missed calls into structured career profiles, we are scaling digital inclusion at the grass roots.
            </p>
          </div>
        </div>
      </section>

      {/* Team Vidyut Section */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-background" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              Founders
            </span>
            <h2 className="text-4xl font-black tracking-tight">{team.title}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Meet Team Vidyut—the engineers, architects, and operators building HAAZRI.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.members.map((member, idx) => {
              const colorClass = avatarColors[member.avatarColor] || avatarColors.teal
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary transition-all duration-500 text-center flex flex-col items-center shadow-md hover:shadow-2xl"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                    <Avatar className={`w-32 h-32 text-2xl font-bold ${colorClass} relative z-10 border-4 border-background transition-transform duration-500 group-hover:scale-110`}>
                      {member.image && <AvatarImage src={member.image} alt={member.name} className="object-cover" />}
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                    <p className="text-[11px] text-primary mb-4 font-black uppercase tracking-wider">{member.role}</p>
                    
                    {member.description && (
                      <p className="text-[13px] text-muted-foreground mb-6 leading-relaxed text-balance">
                        {member.description}
                      </p>
                    )}

                    <div className="mt-auto flex flex-col items-center">
                      {member.location && (
                        <div className="inline-flex items-center gap-1 text-[10px] text-muted-foreground/70 font-bold uppercase tracking-widest mb-3">
                          <MapPin className="w-3 h-3" />
                          {member.location}
                        </div>
                      )}
                      
                      {member.badge && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold text-[10px] uppercase px-3 py-1">
                          {member.badge}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary scale-x-0 group-hover:scale-x-50 transition-transform duration-500 rounded-full" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-secondary/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              Roots & Backing
            </span>
            <h2 className="text-4xl font-black tracking-tight">The Hubballi-Dharwad Ecosystem</h2>
            <p className="text-muted-foreground">
              Anchored in Karnataka's tech hub, supported by grassroots networks and startup institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-card border border-border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Deshpande Startups</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Advisory backing, incubation, and mentorship from one of India's largest grassroots incubation ecosystems, providing HAAZRI with access to regional SMB employer links and pilot opportunities.
              </p>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-card border border-border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">KLE Institute of Technology</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Research support and academic cooperation, driving voice biometric experiments and ML translation pipelines using the open stacks of the BHASHINI framework.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-card border border-border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Grassroots networks</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Direct integration with local labour contractors, rural welfare hubs, and trade associations in North Karnataka, ensuring consent-driven trust and rapid onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
