'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { Building, Shield, ChevronRight, Key, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState<'employer' | 'government' | null>(null)
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (role === 'employer') {
        router.push('/dashboard/employer')
      } else {
        router.push('/dashboard/government')
      }
    }, 1200)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <Navigation />
      
      <section className="flex-1 flex items-center justify-center pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto relative z-10">
          {!role ? (
            <div className="space-y-12">
              <div className="text-center space-y-4 max-w-lg mx-auto">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">Access HAAZRI Portals</h1>
                <p className="text-muted-foreground text-sm">
                  Select your role to sign into the HAAZRI workforce management dashboard or state welfare intelligence portal.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {/* Employer Option */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => setRole('employer')}
                  className="p-8 rounded-[2.5rem] border border-border bg-card hover:border-primary/50 cursor-pointer shadow-xl transition-all duration-300 flex flex-col justify-between h-80 text-left"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Building className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold">Employer Web Dashboard</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Post job postings via web or WhatsApp, review candidate voice recordings and translated transcripts, and manage digital muster rolls.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mt-4">
                    <span>Enter Dashboard</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>

                {/* B2G Government Option */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => setRole('government')}
                  className="p-8 rounded-[2.5rem] border border-border bg-card hover:border-primary/50 cursor-pointer shadow-xl transition-all duration-300 flex flex-col justify-between h-80 text-left"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Shield className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold">B2G Government Portal</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Monitor state workforce mobility trends, trade-wise wage analytics, download availability reports, and track welfare enrollment metrics.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mt-4">
                    <span>Enter B2G Portal</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md mx-auto p-10 rounded-[3rem] border border-border bg-card shadow-2xl relative"
            >
              <button 
                onClick={() => setRole(null)} 
                className="absolute top-8 left-8 flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
              
              <div className="text-center mt-6 mb-8 space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  {role === 'employer' ? <Building className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold">
                  {role === 'employer' ? 'Employer Login' : 'Government Login'}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {role === 'employer' ? 'Access your SMB / Enterprise dashboard.' : 'Access municipal and state workforce reports.'}
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Username / ID</label>
                    <input 
                      type="text" 
                      required 
                      defaultValue={role === 'employer' ? 'partner_employer_hubli' : 'karnataka_state_planner'} 
                      className="w-full h-12 px-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-sm font-bold text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Password</label>
                    <div className="relative">
                      <input 
                        type="password" 
                        required 
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 pl-4 pr-10 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-sm text-foreground"
                      />
                      <Key className="w-4 h-4 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-14 rounded-xl bg-primary text-white hover:bg-primary/95 text-sm font-bold shadow-lg"
                >
                  {isLoading ? 'Authenticating...' : 'Sign In'}
                </Button>
                
                <p className="text-[9px] text-center text-muted-foreground/60 leading-relaxed uppercase tracking-widest">
                  Secure access bridge powered by HAAZRI biometric lock
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
