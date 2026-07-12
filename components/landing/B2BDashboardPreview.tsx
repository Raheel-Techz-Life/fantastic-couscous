'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  UserCheck, 
  Check, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Volume2, 
  Phone, 
  Clock, 
  Database,
  Building,
  User,
  Shield,
  Activity,
  FileSpreadsheet
} from 'lucide-react'

// Animated Waveform Bar Sub-component
function WaveformBar({ isPlaying, delay }: { isPlaying: boolean; delay: number }) {
  return (
    <motion.div
      className="w-0.5 rounded-full bg-primary/90"
      initial={{ height: 4 }}
      animate={
        isPlaying
          ? {
              height: [4, Math.random() * 12 + 6, 4],
            }
          : { height: 4 }
      }
      transition={
        isPlaying
          ? {
              duration: 0.6 + Math.random() * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay,
            }
          : { duration: 0.3 }
      }
    />
  )
}

export function B2BDashboardPreview() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'verification' | 'analytics'>('pipeline')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHired, setIsHired] = useState(false)
  const [hiredCount, setHiredCount] = useState(42)
  const [fillRate, setFillRate] = useState(94.8)

  // Handle mock hiring approval
  const handleApprove = () => {
    setIsHired(true)
    setIsPlaying(false)
    // Dynamic stat increment to make the UI feel alive
    setHiredCount(43)
    setFillRate(97.2)
  }

  // Handle reset to let the user play with it multiple times
  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsHired(false)
    setIsPlaying(false)
    setHiredCount(42)
    setFillRate(94.8)
  }

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl border border-border bg-card/65 backdrop-blur-xl shadow-2xl overflow-hidden relative group">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Header Mock Browser Bar */}
      <div className="px-6 py-4 border-b border-border/80 bg-secondary/30 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="px-4 py-1 rounded-full bg-secondary/80 border border-border/60 text-[10px] font-mono text-muted-foreground/80 flex items-center gap-1.5 max-w-[200px] sm:max-w-xs truncate">
          <ShieldCheck className="w-3 h-3 text-green-500" />
          <span>b2b.haazri.in/hubli-site-a</span>
        </div>
        <div className="w-8" /> {/* Spacer */}
      </div>

      <div className="flex flex-col sm:flex-row min-h-[420px]">
        {/* Sidebar Mockup */}
        <div className="w-full sm:w-40 border-b sm:border-b-0 sm:border-r border-border/60 p-4 bg-secondary/15 flex sm:flex-col gap-2">
          <div className="hidden sm:flex items-center gap-2 px-2 py-1.5 mb-2">
            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-xs font-black">H</div>
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground">HAAZRI B2B</span>
          </div>

          <button 
            onClick={() => setActiveTab('pipeline')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-bold transition-all ${
              activeTab === 'pipeline' 
                ? 'bg-primary/10 text-primary' 
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/40'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Hiring Pipeline</span>
          </button>

          <button 
            onClick={() => setActiveTab('verification')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-bold transition-all ${
              activeTab === 'verification' 
                ? 'bg-primary/10 text-primary' 
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/40'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Trust Check</span>
          </button>

          <button 
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-bold transition-all ${
              activeTab === 'analytics' 
                ? 'bg-primary/10 text-primary' 
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/40'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Analytics</span>
          </button>

          {isHired && (
            <button 
              onClick={handleReset}
              className="mt-auto hidden sm:flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-border/80 text-[10px] text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              Reset Simulation
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-5 sm:p-6 bg-card/40 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {/* TAB 1: PIPELINE */}
            {activeTab === 'pipeline' && (
              <motion.div
                key="pipeline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                {/* Active Job Order header */}
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <div>
                    <h4 className="text-[11px] uppercase font-bold tracking-widest text-muted-foreground">Active Hiring Order</h4>
                    <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                      Hubli Logistics Center B
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-bold text-primary border border-primary/20">
                    Masonry Trade
                  </span>
                </div>

                {/* Pipeline columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-2 flex-1">
                  {/* Column 1: Applied */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Applied</span>
                      <span className="text-[9px] font-bold bg-secondary px-1.5 py-0.5 rounded-sm">2</span>
                    </div>
                    
                    <div className="p-2.5 rounded-xl border border-border/60 bg-secondary/35 space-y-1.5">
                      <div className="flex flex-wrap justify-between items-center gap-1.5">
                        <span className="text-xs font-bold text-foreground">Suresh B.</span>
                        <span className="text-[9px] font-black text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded-xs shrink-0">95% Match</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">ITI Graduate · Helper</p>
                    </div>

                    <div className="p-2.5 rounded-xl border border-border/60 bg-secondary/35 space-y-1.5 opacity-70">
                      <div className="flex flex-wrap justify-between items-center gap-1.5">
                        <span className="text-xs font-bold text-foreground">Amit Sharma</span>
                        <span className="text-[9px] font-black text-primary bg-primary/10 px-1.5 py-0.5 rounded-xs shrink-0">90% Match</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">General Helper</p>
                    </div>
                  </div>

                  {/* Column 2: Voice Screening */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Voice Screening</span>
                      <span className="text-[9px] font-bold bg-secondary px-1.5 py-0.5 rounded-sm">
                        {isHired ? '0' : '1'}
                      </span>
                    </div>

                    <AnimatePresence mode="wait">
                      {!isHired ? (
                        <motion.div 
                          key="screening-card"
                          exit={{ opacity: 0, scale: 0.9, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="p-2.5 rounded-xl border border-primary/30 bg-secondary/65 space-y-2 relative shadow-sm"
                        >
                          <div className="flex flex-wrap justify-between items-center gap-1.5">
                            <div>
                              <span className="text-xs font-black block text-foreground">Ramesh Patil</span>
                              <span className="text-[8.5px] text-muted-foreground/95">Concrete Mason · 4.9★</span>
                            </div>
                            <span className="text-[8px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-md border border-primary/20 shrink-0">
                              e-Shram Verified
                            </span>
                          </div>

                          {/* Interactive Audio Player block */}
                          <div className="p-1.5 rounded-xl bg-card border border-border/50 flex items-center gap-2">
                            <button 
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/95 transition-all active:scale-90 shrink-0"
                              title={isPlaying ? "Pause Voice Pitch" : "Play Voice Pitch"}
                            >
                              {isPlaying ? <Pause className="w-2.5 h-2.5 fill-white" /> : <Play className="w-2.5 h-2.5 fill-white translate-x-0.5" />}
                            </button>

                            {/* Custom animated audio waveform - reduced width & centered */}
                            <div className="flex items-center gap-1 h-5 flex-1 justify-center max-w-[120px] mx-auto">
                              {Array.from({ length: 12 }).map((_, i) => (
                                <WaveformBar key={i} isPlaying={isPlaying} delay={i * 0.03} />
                              ))}
                            </div>
                          </div>

                          <div className="text-[9px] leading-snug text-muted-foreground/85 italic bg-card/30 p-1.5 rounded-lg border border-border/30">
                            &ldquo;I have 4 years of experience in structural masonry... ready to join tomorrow.&rdquo;
                          </div>

                          <button 
                            onClick={handleApprove}
                            className="w-[85%] mx-auto py-1.5 rounded-lg bg-primary text-white text-[10px] font-bold tracking-wider uppercase hover:bg-primary/95 shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all flex items-center justify-center gap-1.5 mt-2 mb-1"
                          >
                            <UserCheck className="w-3 h-3" />
                            Approve & Hire
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="h-28 rounded-2xl border border-dashed border-border/80 flex items-center justify-center p-4 text-center"
                        >
                          <span className="text-[10px] text-muted-foreground italic">Screening queue cleared!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Column 3: Dispatched */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Dispatched</span>
                      <span className="text-[9px] font-bold bg-secondary px-1.5 py-0.5 rounded-sm">
                        {isHired ? '3' : '2'}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl border border-border/60 bg-secondary/35 space-y-1">
                      <div className="flex flex-wrap justify-between items-center gap-1.5">
                        <span className="text-xs font-bold text-foreground">Manoj Rawat</span>
                        <span className="text-[9px] font-bold text-green-600 bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20 shrink-0">
                          On Site
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">Concrete Mason</p>
                    </div>

                    <div className="p-2.5 rounded-xl border border-border/60 bg-secondary/35 space-y-1">
                      <div className="flex flex-wrap justify-between items-center gap-1.5">
                        <span className="text-xs font-bold text-foreground">Sunita Kurmi</span>
                        <span className="text-[9px] font-bold text-green-600 bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20 shrink-0">
                          On Site
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">General Helper</p>
                    </div>

                    <AnimatePresence>
                      {isHired && (
                        <motion.div 
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                          className="p-2.5 rounded-xl border-2 border-green-500/30 bg-green-500/5 space-y-1 relative"
                        >
                          <div className="flex flex-wrap justify-between items-center gap-1.5">
                            <span className="text-xs font-black text-foreground">Ramesh Patil</span>
                            <span className="text-[9px] font-bold text-green-600 bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20 shrink-0">Dispatched</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground">Concrete Mason</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: VERIFICATION */}
            {activeTab === 'verification' && (
              <motion.div
                key="verification"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <div>
                    <h4 className="text-[11px] uppercase font-bold tracking-widest text-muted-foreground">Trust Profile Audit</h4>
                    <h3 className="text-sm font-bold text-foreground">Ramesh Patil (Concrete Mason)</h3>
                  </div>
                  <span className="text-[9px] font-bold bg-green-500/10 text-green-500 border border-green-500/20 px-2 py-0.5 rounded-full">
                    98.3% Attendance
                  </span>
                </div>

                <div className="space-y-2.5 my-2 flex-1">
                  {/* Verification Rows */}
                  <div className="flex justify-between items-center p-2.5 rounded-xl bg-secondary/35 border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold block">Aadhaar Identity Verification</span>
                        <span className="text-[9px] text-muted-foreground">UIDAI Secure token verified successfully</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">Linked</span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-xl bg-secondary/35 border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold block">e-Shram Portal Compliance</span>
                        <span className="text-[9px] text-muted-foreground">Registered UAN: **** 8934 check passed</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">Compliant</span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-xl bg-secondary/35 border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold block">PM Vishwakarma Certification</span>
                        <span className="text-[9px] text-muted-foreground">Level-2 Skill credential authenticated</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Level-2</span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-xl bg-secondary/35 border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold block">BOCW Muster Roll Compatibility</span>
                        <span className="text-[9px] text-muted-foreground">Site log matching is enabled for digital audits</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">Audit-Ready</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: ANALYTICS */}
            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <div>
                    <h4 className="text-[11px] uppercase font-bold tracking-widest text-muted-foreground">Operational Intelligence</h4>
                    <h3 className="text-sm font-bold text-foreground">Real-time Performance</h3>
                  </div>
                  <span className="text-[10px] font-black uppercase text-green-500 bg-green-500/10 px-2.5 py-0.5 rounded-full animate-pulse flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Live Dashboard
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 my-2 flex-1">
                  <div className="p-3.5 rounded-2xl bg-secondary/45 border border-border/60 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-muted-foreground block mb-1">Worker Fill Rate</span>
                      <span className="text-2xl font-black text-foreground">{fillRate}%</span>
                    </div>
                    <span className="text-[9px] text-green-500 font-bold block mt-1">
                      {isHired ? '↑ 14.2% over local avg' : '↑ 12% over local avg'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-secondary/45 border border-border/60 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-muted-foreground block mb-1">Avg Time-To-Fill</span>
                      <span className="text-2xl font-black text-foreground">2.2 Hours</span>
                    </div>
                    <span className="text-[9px] text-primary font-bold block mt-1">SLA replacement active</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-secondary/45 border border-border/60 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-muted-foreground block mb-1">Active Site Placements</span>
                      <span className="text-2xl font-black text-foreground">{hiredCount} Workers</span>
                    </div>
                    <span className="text-[9px] text-muted-foreground block mt-1">Across 3 construction sites</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-secondary/45 border border-border/60 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-muted-foreground block mb-1">Compliance Score</span>
                      <span className="text-2xl font-black text-foreground">100%</span>
                    </div>
                    <span className="text-[9px] text-green-500 font-bold block mt-1">BOCW + e-Shram compliant</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Footer Interactive Hint */}
          <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground italic">
            <span>
              {activeTab === 'pipeline' && !isHired && "💡 Action: Try clicking 'Approve & Hire' to dispatch Ramesh Patil."}
              {activeTab === 'pipeline' && isHired && "✓ रमेश पाटिल is dispatched! Click 'Trust Check' to see audit files."}
              {activeTab === 'verification' && "✓ Verification uses ONEST / Beckn protocol logs for compliance."}
              {activeTab === 'analytics' && "✓ Metrics generate dynamically from voice IVR check-ins."}
            </span>
            {isHired && activeTab === 'pipeline' && (
              <button 
                onClick={handleReset}
                className="text-xs text-primary font-bold not-italic hover:underline cursor-pointer sm:hidden"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
