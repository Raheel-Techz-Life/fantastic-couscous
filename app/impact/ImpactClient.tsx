'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import dynamic from 'next/dynamic'

const VoiceMesh = dynamic(() => import('@/components/landing/VoiceMesh').then(m => m.VoiceMesh), { ssr: false })
import { Canvas } from '@react-three/fiber'
import { Text, Float, Center } from '@react-three/drei'
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  HelpingHand,
  User,
  Zap,
  Globe,
  ShieldCheck,
  Heart
} from 'lucide-react'

function Headline3D({ text }: { text: string }) {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Center>
            <Text
              fontSize={0.8}
              color="#ffffff"
              maxWidth={8}
              textAlign="center"
              outlineWidth={0.02}
              outlineColor="#FF5400"
            >
              {text}
            </Text>
          </Center>
        </Float>
      </Canvas>
    </div>
  )
}

export function ImpactClient() {
  const { impact } = landingConfig

  return (
    <div className="relative min-h-screen bg-background">
      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-24 px-6 md:px-10 overflow-hidden bg-mesh min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        <VoiceMesh />
        <Headline3D text={impact.title} />
        
        <div className="relative z-30 max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-widest mb-12"
          >
            <Heart className="w-3.5 h-3.5" />
            Social Mission
          </motion.div>
          
          <h1 className="sr-only">{impact.title}</h1>
          
          <div className="h-64 md:h-96 lg:h-[32rem]" /> {/* Extra Large Spacer for 3D Text */}
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {impact.description}
          </motion.p>
        </div>
      </section>

      {/* ──── Metrics Dashboard ──── */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {impact.metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-secondary/5 border border-border text-center group hover:border-primary transition-all shadow-xl"
            >
              <div className="text-5xl font-black text-primary mb-4 tracking-tighter group-hover:scale-110 transition-transform">
                {metric.value}
              </div>
              <div className="text-[10px] uppercase font-black tracking-[0.2em] text-muted-foreground opacity-80">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── Personas ──── */}
      <section className="py-32 px-6 md:px-10 lg:px-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Who we build for</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">The diverse workforce driving India's growth from the ground up.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {impact.personas.map((persona, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-background border border-border relative group hover:border-primary transition-all shadow-premium"
              >
                <div className="absolute top-0 right-0 p-8 text-primary/5 font-black text-7xl select-none">
                  {persona.name[0]}
                </div>
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 text-3xl font-black relative z-10">
                  {persona.name[0]}
                </div>
                <h3 className="text-2xl font-black mb-2 relative z-10">{persona.name}</h3>
                <p className="text-xs uppercase font-black tracking-widest text-primary mb-6 relative z-10">{persona.role}</p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10">{persona.context}</p>
                
                <div className="pt-8 border-t border-dashed border-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                    <Zap className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-muted-foreground italic leading-relaxed">
                    "I give a missed call, I get a job. No forms, no stress."
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Systemic Change ──── */}
      <section className="py-32 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Systemic Change</h2>
            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Building digital footprint</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">For many, HAAZRI is the first time their work history is recorded digitally and portably.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <HelpingHand className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Reducing hiring friction</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">Empowering MSMEs to hire based on verified reputation rather than just word-of-mouth.</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-16 rounded-[4rem] bg-foreground text-background relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 font-black text-[12rem] select-none">90%</div>
            <div className="relative z-10">
              <BarChart3 className="w-16 h-16 text-primary mb-10" />
              <h3 className="text-4xl font-black mb-10 leading-tight">
                "HAAZRI targets the 90% of the Indian workforce currently excluded from the formal digital economy."
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <p className="text-background/50 font-black uppercase tracking-widest text-sm italic">HAAZRI Impact Report 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── Final CTA ──── */}
      <section className="py-32 px-6 text-center border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-1.5 bg-primary/20 mx-auto mb-10 rounded-full" />
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Join the movement</h2>
          <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
            Together, we're building a more inclusive and trusted employment exchange for India.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-primary text-white font-black rounded-full shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              Claim Your Pilot
            </button>
            <button className="px-10 py-5 bg-secondary text-foreground font-black rounded-full hover:bg-secondary/80 transition-all">
              Talk to an Architect
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
