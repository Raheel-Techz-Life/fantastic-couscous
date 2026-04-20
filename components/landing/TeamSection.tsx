'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const avatarColors: Record<string, string> = {
  teal: 'bg-primary/10 text-primary',
  blue: 'bg-blue-500/10 text-blue-600',
  purple: 'bg-purple-500/10 text-purple-600',
  coral: 'bg-orange-500/10 text-orange-600',
}

export function TeamSection() {
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any,
      },
    },
  }

  return (
    <section className="px-6 py-24 md:px-10 lg:px-20 bg-background" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          {team.tag && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/80 text-secondary-foreground text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6 border border-border/50 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
              {team.tag}
            </motion.div>
          )}
          {team.title && (
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase relative z-10"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70">
                {team.title}
              </span>
            </motion.h2>
          )}
          {team.description && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6 font-medium"
            >
              {team.description}
            </motion.p>
          )}
        </div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.members.map((member, idx) => {
            const colorClass = avatarColors[member.avatarColor] || avatarColors.teal
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative p-6 sm:p-8 rounded-[2rem] bg-card/40 backdrop-blur-md border border-border/60 hover:border-primary/40 transition-all duration-500 text-center flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                {/* Background Grid Accent */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Profile Avatar */}
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                  <Avatar className={`w-40 h-40 md:w-48 md:h-48 text-3xl font-bold ${colorClass} relative z-10 border-4 border-background/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 shadow-xl`}>
                    {(member as any).image && <AvatarImage src={(member as any).image} alt={member.name} className="object-cover" />}
                    <AvatarFallback className="font-mono">{member.initials}</AvatarFallback>
                  </Avatar>
                </div>

                {/* Info */}
                <div className="relative z-10 flex flex-col items-center flex-1 w-full">
                  <h4 className="text-xl font-black mb-2 tracking-tight group-hover:text-primary transition-colors">{member.name}</h4>
                  
                  <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border/50 px-3 py-1 rounded-md mb-5 whitespace-nowrap">
                    <span className="text-primary opacity-70 font-mono text-xs animate-pulse">{'>'}</span>
                    <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-foreground/80 truncate">
                      {member.role}
                    </p>
                  </div>
                  
                  {(member as any).description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-[260px] mx-auto text-balance">
                      {(member as any).description}
                    </p>
                  )}

                  {/* Socials / Contact */}
                  {(member as any).socials && (
                    <div className="flex items-center gap-3 mb-5 mt-2">
                      {((member as any).socials as any[]).map((social, sIdx) => (
                        <a 
                          key={sIdx} 
                          href={social.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-xs font-mono font-bold text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                        >
                          [{social.name}]
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto w-full pt-5 border-t border-border/40 flex flex-row items-center justify-between">
                    {(member as any).location && (
                      <div className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-3 h-3 text-primary/70"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {((member as any).location as string).split(',')[0]}
                      </div>
                    )}
                    
                    {(member as any).badge && (
                      <Badge variant="outline" className="bg-background/50 border-primary/20 text-primary font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded shadow-sm backdrop-blur-sm group-hover:bg-primary/10 transition-colors">
                        {(member as any).badge}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

