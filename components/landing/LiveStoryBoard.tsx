'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, PhoneCall, Mic, FileText, CheckCircle } from 'lucide-react'

interface WorkerProfile {
  name: string
  trade: string
  location: string
  avatarEmoji: string
  steps: Array<{
    title: string
    status: string
    details: string
    icon: any
    color: string
  }>
}

const workers: WorkerProfile[] = [
  {
    name: 'Suresh Kumar',
    trade: 'Concrete Mixer Operator',
    location: 'Hubballi Chowk, KA',
    avatarEmoji: '👷',
    steps: [
      {
        title: 'Chowk Struggle',
        status: 'Waiting since 5:00 AM',
        details: 'No contacts, high daily-wage volatility.',
        icon: MapPin,
        color: 'border-red-500 text-red-500 bg-red-500/10'
      },
      {
        title: 'Zero-Cost Dial',
        status: 'Dialing HAAZRI Toll-Free...',
        details: 'Missed call registered, system disconnects to save balance.',
        icon: PhoneCall,
        color: 'border-blue-500 text-blue-500 bg-blue-500/10'
      },
      {
        title: 'Voice Profiling',
        status: 'Spoken Pitch (Hindi)',
        details: '"Mujhe concrete mixer chalane ka 5 saal ka anubhav hai..."',
        icon: Mic,
        color: 'border-orange-500 text-orange-500 bg-orange-500/10'
      },
      {
        title: 'Match & Hired!',
        status: 'Work Order Sent via SMS',
        details: 'Hired at Smart City Project. ₹480/day locked. Aadhaar verified.',
        icon: CheckCircle,
        color: 'border-emerald-500 text-emerald-500 bg-emerald-500/10 animate-pulse'
      }
    ]
  },
  {
    name: 'Ramesh Gowda',
    trade: 'Bricklayer / Mason',
    location: 'Dharwad Chowk, KA',
    avatarEmoji: '🛠️',
    steps: [
      {
        title: 'Chowk Struggle',
        status: 'Unemployed for 3 Days',
        details: 'Sparsely active word-of-mouth networks fail.',
        icon: MapPin,
        color: 'border-red-500 text-red-500 bg-red-500/10'
      },
      {
        title: 'IVR callback',
        status: 'Receives Callback in Kannada',
        details: 'HAAZRI robot speaks to Ramesh to capture location & wage.',
        icon: PhoneCall,
        color: 'border-blue-500 text-blue-500 bg-blue-500/10'
      },
      {
        title: 'Speech Translation',
        status: 'BHASHINI AI Processing',
        details: 'Spoken Kannada profile auto-transcribed into English resume.',
        icon: FileText,
        color: 'border-orange-500 text-orange-500 bg-orange-500/10'
      },
      {
        title: 'Site Routing',
        status: 'Dispatched to Builder',
        details: 'Contractor accepts profile via WhatsApp. Dispatching site coordinates.',
        icon: CheckCircle,
        color: 'border-emerald-500 text-emerald-500 bg-emerald-500/10 animate-pulse'
      }
    ]
  }
]

/* ─────────── Full-Body Animated Story Theater ─────────── */
function StoryTheater({ stepIdx }: { stepIdx: number }) {
  const isWalking = stepIdx === 0
  const isCalling = stepIdx === 1
  const isConnecting = stepIdx === 2
  const isPlaced = stepIdx === 3

  return (
    <div className="w-full h-44 bg-slate-950 border-2 border-border/80 rounded-2xl relative overflow-hidden select-none shadow-inner mb-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none" />

      {/* Hubli Labor Chowk Board (Left Scenery) */}
      <div className="absolute left-4 top-10 border-2 border-slate-700 bg-slate-800/80 px-2 py-1 rounded text-[7px] font-mono text-slate-400 font-bold">
        📍 HUBLI CHOWK
      </div>

      {/* Smart City Construction Site Scenery (Right Scenery) */}
      <AnimatePresence>
        {isPlaced && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-4 top-6 flex flex-col items-end gap-1.5"
          >
            {/* Construction Crane Silhouette */}
            <div className="w-16 h-12 border-b-2 border-r-2 border-primary/20 relative">
              <div className="absolute top-0 right-0 w-12 h-0.5 bg-primary/20 rotate-12 origin-right" />
            </div>
            <span className="font-mono text-[8px] font-black text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full animate-bounce">
              PLACED!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HAAZRI Server Node (Top Center) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 flex flex-col items-center">
        <motion.div
          animate={isConnecting ? { scale: [1, 1.15, 1], shadow: '0 0 15px #ff5400' } : {}}
          transition={{ repeat: Infinity, duration: 1 }}
          className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
            isConnecting 
              ? 'border-primary bg-primary/20 text-primary shadow-[0_0_15px_rgba(255,84,0,0.4)]' 
              : 'border-slate-800 bg-slate-900/60 text-slate-500'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </motion.div>
        <span className="font-mono text-[7px] text-slate-500 mt-1">HAAZRI AI SERVER</span>
      </div>

      {/* Connection Data Streams */}
      <AnimatePresence>
        {(isConnecting || isPlaced) && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Dotted path from Phone to Server */}
            <motion.path
              d="M 50 115 Q 70 85 96 35" // Target path from phone position to server
              stroke={isPlaced ? '#22c55e' : '#ff5400'}
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              fill="none"
              className="origin-center"
            />
          </svg>
        )}
      </AnimatePresence>

      {/* Full Body Worker Character */}
      <motion.g
        animate={
          isWalking 
            ? { x: [10, 50] } 
            : isCalling || isConnecting 
              ? { x: 50 } 
              : { x: [50, 70] }
        }
        transition={
          isWalking 
            ? { duration: 4, ease: 'linear', repeat: Infinity } 
            : isPlaced 
              ? { duration: 1.5, ease: 'easeOut' }
              : { type: 'spring' }
        }
        className="absolute bottom-4 left-0 flex flex-col items-center origin-bottom z-20"
        style={{ left: 0 }}
      >
        <svg className="w-20 h-28" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          {/* Left Leg Walking Animation */}
          <motion.g
            animate={isWalking ? { rotate: [25, -25, 25] } : {}}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
            className="origin-top"
            style={{ transformOrigin: '45px 95px' }}
          >
            {/* Left Leg */}
            <line x1="45" y1="95" x2="40" y2="125" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
            {/* Boot */}
            <path d="M37,125 L45,125 L45,128 Z" fill="#475569" />
          </motion.g>

          {/* Right Leg Walking Animation */}
          <motion.g
            animate={isWalking ? { rotate: [-25, 25, -25] } : {}}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
            className="origin-top"
            style={{ transformOrigin: '55px 95px' }}
          >
            {/* Right Leg */}
            <line x1="55" y1="95" x2="60" y2="125" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
            {/* Boot */}
            <path d="M57,125 L65,125 L65,128 Z" fill="#475569" />
          </motion.g>

          {/* Torso & Shirt */}
          <path d="M35,65 C35,55 65,55 65,65 L60,95 L40,95 Z" fill="#1E293B" />
          
          {/* Neon Safety Vest */}
          <path d="M40,63 L60,63 L58,95 L42,95 Z" fill="#EAB308" />
          {/* Reflective silver tape stripes */}
          <rect x="44" y="65" width="3" height="30" fill="#E2E8F0" />
          <rect x="53" y="65" width="3" height="30" fill="#E2E8F0" />

          {/* Left Arm showing Thumbs-Up on Placed state */}
          <motion.g
            animate={isPlaced ? { rotate: [0, -30, 0] } : {}}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="origin-top-left"
            style={{ transformOrigin: '35px 60px' }}
          >
            <line x1="35" y1="60" x2="25" y2="85" stroke="#F3B685" strokeWidth="5.5" strokeLinecap="round" />
            {isPlaced && (
              <circle cx="23" cy="85" r="4.5" fill="#F3B685" /> // Thumbs up hand
            )}
          </motion.g>

          {/* Right Arm Lifting Phone during Calling / Connecting State */}
          <motion.g
            animate={isCalling || isConnecting ? { rotate: [0, 45, 0] } : {}}
            transition={{ duration: 1 }}
            className="origin-top-right"
            style={{ transformOrigin: '65px 60px' }}
          >
            <line x1="65" y1="60" x2="75" y2="85" stroke="#F3B685" strokeWidth="5.5" strokeLinecap="round" />
            {(isCalling || isConnecting) && (
              <>
                <rect x="73" y="80" width="4" height="8" rx="1" fill="#334155" /> {/* Nokia Phone */}
                <circle cx="75" cy="85" r="4.5" fill="#F3B685" />
              </>
            )}
          </motion.g>

          {/* Neck */}
          <rect x="47" y="52" width="6" height="8" fill="#E5A675" />

          {/* Head & Face */}
          <circle cx="50" cy="42" r="12" fill="#F3B685" />
          {/* Smiling mouth on success */}
          {isPlaced ? (
            <path d="M46,45 Q50,51 54,45" stroke="#1A0D05" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          ) : (
            <line x1="46" y1="46" x2="54" y2="46" stroke="#1A0D05" strokeWidth="1.5" strokeLinecap="round" />
          )}
          {/* Eyes */}
          <circle cx="46" cy="40" r="1.5" fill="#1A0D05" />
          <circle cx="54" cy="40" r="1.5" fill="#1A0D05" />

          {/* Orange Hard Hat */}
          <path d="M36,36 C36,20 64,20 64,36 Z" fill="#FF5400" />
          <rect x="32" y="34" width="36" height="3" rx="1.5" fill="#EA580C" />
          
        </svg>

        {/* Dynamic Status Tag above Worker */}
        <div className="absolute top-[-10px] whitespace-nowrap bg-background border border-border px-2 py-0.5 rounded-full text-[6px] font-bold text-foreground shadow uppercase tracking-wider">
          {isWalking && 'Trudging to Chowk...'}
          {isCalling && 'Ringing HAAZRI...'}
          {isConnecting && 'Connected to Server'}
          {isPlaced && 'Work Order Dispatched'}
        </div>
      </motion.g>
    </div>
  )
}

export function LiveStoryBoard() {
  const [workerIdx, setWorkerIdx] = useState(0)
  const [stepIdx, setStepIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIdx((prev) => {
        if (prev === 3) {
          // Switch worker after showing the final step for a bit
          setTimeout(() => {
            setWorkerIdx((w) => (w + 1) % workers.length)
          }, 1500)
          return 0
        }
        return prev + 1
      })
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const currentWorker = workers[workerIdx]

  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-border/80 bg-gradient-to-b from-card to-card/90 p-6 shadow-2xl relative overflow-hidden group select-none">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      {/* Live tracking badge */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">
            Live Worker Journey
          </span>
        </div>
        <span className="font-mono text-[9px] font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 uppercase tracking-widest">
          Hubballi Pilot
        </span>
      </div>

      {/* Story Stage Theater */}
      <StoryTheater stepIdx={stepIdx} />

      {/* Worker info block */}
      <div className="flex gap-4 items-center mb-6 border-b border-border/40 pb-4">
        <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-xl shadow-inner group-hover:scale-105 transition-transform duration-300">
          {currentWorker.avatarEmoji}
        </div>
        <div>
          <h4 className="font-bold text-sm text-foreground">{currentWorker.name}</h4>
          <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-0.5">{currentWorker.trade}</p>
          <p className="text-[9px] text-muted-foreground flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            {currentWorker.location}
          </p>
        </div>
      </div>

      {/* Animated timeline steps */}
      <div className="space-y-4">
        {currentWorker.steps.map((step, idx) => {
          const isActive = idx === stepIdx
          const isCompleted = idx < stepIdx
          const Icon = step.icon

          return (
            <div 
              key={idx} 
              className={`flex gap-4 items-start transition-all duration-500 relative ${
                isActive 
                  ? 'scale-102 opacity-100' 
                  : isCompleted 
                    ? 'opacity-60 scale-98' 
                    : 'opacity-30 scale-95'
              }`}
            >
              {/* Connector line */}
              {idx < 3 && (
                <div 
                  className={`absolute left-[17px] top-[34px] bottom-[-16px] w-[2px] transition-all duration-1000 ${
                    isCompleted ? 'bg-primary' : 'bg-border/30'
                  }`}
                />
              )}

              {/* Indicator Circle */}
              <div 
                className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${
                  isActive 
                    ? step.color + ' shadow-[0_0_15px_rgba(255,84,0,0.15)] scale-110' 
                    : isCompleted 
                      ? 'border-primary text-primary bg-primary/5' 
                      : 'border-border text-muted-foreground bg-card'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              {/* Step info block */}
              <div>
                <h5 className={`font-bold text-xs ${isActive ? 'text-foreground' : 'text-muted-foreground/80'}`}>
                  {step.title}
                </h5>
                <p className="font-mono text-[9px] font-bold text-primary mt-0.5 leading-none">
                  {step.status}
                </p>
                <p className="text-[10px] text-muted-foreground leading-relaxed mt-1">
                  {step.details}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
