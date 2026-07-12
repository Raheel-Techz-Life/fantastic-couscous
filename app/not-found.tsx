'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThreeScene } from '@/components/landing/ThreeScene'
import { Float, TorusKnot } from '@react-three/drei'
import { ArrowLeft, Home, HelpCircle } from 'lucide-react'

function WarningObject() {
  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <TorusKnot args={[2, 0.3, 120, 16]} scale={1.2}>
        <meshStandardMaterial 
          color="#FF5400" 
          roughness={0.1} 
          metalness={0.9} 
          emissive="#FF5400"
          emissiveIntensity={0.2}
        />
      </TorusKnot>
    </Float>
  )
}

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden px-6">
      {/* 3D background using optimized ThreeScene wrapper */}
      <ThreeScene 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        cameraPosition={[0, 0, 8]}
        includeSpotLight={true}
      >
        <WarningObject />
      </ThreeScene>

      <div className="absolute inset-0 bg-mesh opacity-5 pointer-events-none" />

      {/* Center card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="relative z-10 max-w-lg w-full text-center space-y-8 bg-card/65 backdrop-blur-2xl border border-border p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
      >
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            404 Error
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-primary leading-none">
            404
          </h1>
          <h2 className="text-2xl font-black tracking-tight leading-none text-foreground">
            Route Stalled
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto text-balance">
            Like a missing worker on a construction site, this page has failed to report for duty. Let's route you back to coordinates.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="rounded-full bg-primary text-white hover:scale-105 active:scale-95 transition-all text-xs font-black uppercase tracking-widest gap-2 shadow-lg shadow-primary/15 h-12 px-6">
            <Link href="/">
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border border-border text-foreground hover:bg-secondary hover:scale-105 active:scale-95 transition-all text-xs font-black uppercase tracking-widest gap-2 h-12 px-6">
            <Link href="/contact">
              Support Desk
            </Link>
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
