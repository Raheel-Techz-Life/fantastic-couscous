'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
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
        <div className="text-center mb-20">
          {team.tag && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-bold uppercase tracking-widest mb-4"
            >
              {team.tag}
            </motion.div>
          )}
          {team.title && (
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold mb-10 tracking-tight uppercase"
            >
              {team.title}
            </motion.h2>
          )}
          {team.description && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-6"
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
                className="group relative p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary transition-all duration-500 text-center flex flex-col items-center"
              >
                {/* Profile Avatar */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                  <Avatar className={`w-24 h-24 text-xl font-bold ${colorClass} relative z-10 border-4 border-background transition-transform duration-500 group-hover:scale-110`}>
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                </div>

                {/* Info */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">{member.role}</p>
                  
                  {member.badge && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold text-[10px] uppercase px-3 py-1">
                      {member.badge}
                    </Badge>
                  )}
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary scale-x-0 group-hover:scale-x-50 transition-transform duration-500 rounded-full" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

