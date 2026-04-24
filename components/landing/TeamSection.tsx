'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SquadScene } from './SquadScene'

const avatarColors: Record<string, string> = {
  teal: 'bg-primary/10 text-primary',
  blue: 'bg-blue-500/10 text-blue-600',
  purple: 'bg-purple-500/10 text-purple-600',
  coral: 'bg-orange-500/10 text-orange-600',
}

export function TeamSection() {
  const { team } = landingConfig

  return (
    <section className="px-6 py-32 md:px-10 lg:px-20 bg-background relative overflow-hidden" id="team">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,84,0,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none mix-blend-screen" />
      <SquadScene />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Funky Story Header */}
        <div className="text-center mb-32 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 150, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black mb-8 tracking-tighter uppercase relative z-10"
          >
            MEET THE <br className="md:hidden" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-tr from-primary to-orange-400 italic pr-2">
              SQUAD
              <div className="absolute -bottom-4 left-0 w-full h-3 bg-primary rounded-full blur-[2px]" />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 350, damping: 20, delay: 0.1 }}
            className="text-xl md:text-3xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Just four rogue builders ignoring the rules and rewiring the informal economy from the ground up.
          </motion.p>
        </div>

        {/* The Funky Story Cards */}
        <div className="space-y-32 md:space-y-48 relative">
          {/* A chaotic vertical line that runs behind everything loosely */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -z-10 hidden md:block" />

          {team.members.map((member, idx) => {
            const isEven = idx % 2 === 0
            const colorClass = avatarColors[member.avatarColor] || avatarColors.teal
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 150, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 1.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full group ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                
                {/* 1. Behind-the-scenes GIANT text (Editorial watermark) */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none flex ${isEven ? 'justify-end pr-20' : 'justify-start pl-20'} z-0`}>
                  <h1 className="text-[150px] md:text-[250px] font-black uppercase whitespace-nowrap tracking-tighter leading-none">
                    {member.name.split(' ')[0]}
                  </h1>
                </div>

                {/* 2. Overlapping funky image container */}
                <div className={`relative z-10 w-full md:w-1/2 flex ${isEven ? 'justify-end md:pr-8' : 'justify-start md:pl-8'}`}>
                  <div className="relative">
                    {/* The funky distorted borders (Layers) */}
                    <div className="absolute inset-0 border-2 border-primary/50 rotate-6 group-hover:rotate-12 transition-transform duration-500 rounded-[3rem]" />
                    <div className="absolute inset-0 bg-primary/20 -rotate-3 group-hover:-rotate-6 transition-transform duration-500 rounded-[3rem] backdrop-blur-xl" />
                    
                    <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] border-[6px] border-background relative z-20 shadow-2xl group-hover:scale-105 transition-transform duration-500 object-cover bg-background">
                      {member.image && <AvatarImage src={member.image} alt={member.name} className="object-cover hover:scale-110 transition-transform duration-700" />}
                      <AvatarFallback className={`text-6xl md:text-8xl font-black ${colorClass}`}>{member.initials}</AvatarFallback>
                    </Avatar>

                    {/* Funky Role Badge popping out */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3 + idx, repeat: Infinity, ease: 'easeInOut' }}
                      className={`absolute -bottom-8 ${isEven ? '-left-8' : '-right-8'} z-30 p-4 border border-border bg-background/90 backdrop-blur-xl rounded-2xl shadow-xl flex items-center gap-3`}
                    >
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce shadow-[0_0_10px_rgba(255,84,0,0.8)]" />
                      <div className="text-xs font-black uppercase tracking-widest whitespace-nowrap text-foreground">{member.role}</div>
                    </motion.div>
                  </div>
                </div>

                {/* 3. Story / Text Content block */}
                <div className={`relative z-10 w-full md:w-1/2 flex flex-col ${isEven ? 'items-start text-left md:pl-8' : 'items-end text-left md:text-right md:pr-8'}`}>
                  {/* Small identifier branch */}
                  <div className={`inline-flex gap-2 items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-inner ${isEven ? '' : 'flex-row-reverse'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Chapter 0{idx + 1}
                  </div>
                  
                  <h3 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-none text-foreground group-hover:text-primary transition-colors duration-500">
                    {member.name}
                  </h3>
                  
                  {/* Story Speech Bubble Box */}
                  <div className={`relative p-8 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-md hover:bg-card/80 transition-colors shadow-premium w-full ${isEven ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
                    {/* Quotation mark ambient */}
                    <div className={`absolute top-2 ${isEven ? 'left-4' : 'right-4'} text-6xl text-primary/10 font-serif leading-none pointer-events-none`}>"</div>
                    <p className="text-lg text-muted-foreground leading-relaxed italic relative z-10 font-medium">
                      {member.description}
                    </p>
                  </div>

                  {/* Footers for the card (location, socials, badge) */}
                  <div className={`flex flex-wrap items-center gap-4 mt-8 ${isEven ? 'justify-start' : 'justify-end'}`}>
                    {member.location && (
                      <div className="px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-xs font-bold font-mono text-foreground/80 shadow-sm flex items-center gap-2">
                        <span className="text-base leading-none">📍</span> {member.location.split(',')[0]}
                      </div>
                    )}
                    {member.badge && (
                      <div className="px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-xs font-bold text-primary font-mono uppercase tracking-widest shadow-sm">
                        {member.badge}
                      </div>
                    )}
                    {member.socials && (
                      <div className="flex gap-2">
                        {member.socials.map((social, sIdx) => (
                          <a 
                            key={sIdx} 
                            href={social.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="w-11 h-11 rounded-xl bg-background border border-border/80 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                            title={social.name}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
