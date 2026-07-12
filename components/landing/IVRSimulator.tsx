'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
<<<<<<< HEAD
import { Phone, PhoneOff, Mic, CheckCircle2, Volume2 } from 'lucide-react'

const steps = [
  { text: 'Dials missed call number...', icon: Phone, color: 'text-blue-500' },
  { text: 'Call disconnects (Zero balance ok)', icon: PhoneOff, color: 'text-red-500' },
  { text: 'System calls back in Hindi...', icon: Volume2, color: 'text-primary' },
  { text: '"Namaste, kya aap driver ki naukri chahte hain?"', icon: Mic, color: 'text-purple-500' },
  { text: 'Worker says "Haan" (Captured as Voice ID)', icon: Mic, color: 'text-green-500' },
  { text: 'Application complete!', icon: CheckCircle2, color: 'text-primary' },
=======
import { Phone, PhoneOff, Mic, CheckCircle, Volume2, ArrowLeftRight } from 'lucide-react'

const steps = [
  { text: 'Dials HAAZRI toll-free number...', sub: '080-XXXX-XXXX', icon: Phone, color: 'text-emerald-700' },
  { text: 'Call disconnects (Zero cost, no balance needed)', sub: 'Disconnecting...', icon: PhoneOff, color: 'text-red-700' },
  { text: 'System calls back in native language', sub: 'Incoming Callback...', icon: Volume2, color: 'text-orange-700' },
  { text: '"Namaste, kya aap mason (rajmistry) ka kaam chahte hain?"', sub: 'Press 1 to Apply', icon: Mic, color: 'text-indigo-700' },
  { text: 'Worker presses 1 key (Captured on IVR)', sub: 'Keypress Registered', icon: CheckCircle, color: 'text-emerald-700' },
  { text: 'Application sent to nearby contractors!', sub: 'HZ-ID Created', icon: CheckCircle, color: 'text-emerald-700' },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
]

export function IVRSimulator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isActive) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
<<<<<<< HEAD
      }, 3000)
=======
      }, 3500)
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    }
    return () => clearInterval(interval)
  }, [isActive])

  return (
<<<<<<< HEAD
    <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden group">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />

      {/* Screen Content */}
      <div className="relative h-full w-full bg-linear-to-b from-slate-800 to-slate-950 p-6 pt-12 flex flex-col items-center justify-between">
        {!isActive ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6"
            >
              <Phone className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Experience the Flow</h3>
            <p className="text-slate-400 text-sm mb-8 px-4">See how a worker applies in 30 seconds without an app.</p>
            <button 
              onClick={() => setIsActive(true)}
              className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform"
            >
              Start Demo
            </button>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between items-start pt-4">
              <div className="text-xs font-medium text-slate-400">9:41</div>
              <div className="flex gap-1">
                <div className="w-4 h-1 bg-slate-600 rounded-full" />
                <div className="w-4 h-1 bg-slate-600 rounded-full" />
                <div className="w-4 h-1 bg-primary rounded-full" />
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className={`p-6 rounded-full bg-slate-800 mb-8 border border-slate-700 ${steps[currentStep].color}`}>
                    {(() => {
                      const Icon = steps[currentStep].icon
                      return <Icon className="w-12 h-12" />
                    })()}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4 line-clamp-2">
                    {steps[currentStep].text}
                  </h4>
                  <div className="flex gap-1 justify-center">
                  {steps.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentStep ? 'w-8 bg-primary' : 'w-2 bg-slate-700'
                      }`} 
                    />
                  ))}
                </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={() => setIsActive(false)}
              className="mb-8 w-14 h-14 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all"
            >
              <PhoneOff className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Reflections */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/5 to-transparent opacity-30" />

=======
    <div className="relative w-full max-w-[280px] mx-auto p-4 rounded-[2rem] bg-slate-900 border-4 border-slate-800 shadow-2xl flex flex-col items-center">
      {/* Retro Nokia Earpiece Speaker Grill */}
      <div className="w-16 h-1.5 bg-slate-800 rounded-full mb-4 shadow-inner" />

      {/* Retro LCD Screen */}
      <div className="w-full aspect-[4/3] bg-[#c3cdb3] border-4 border-slate-800 rounded-lg p-3 flex flex-col justify-between font-mono text-slate-900 shadow-inner relative overflow-hidden select-none">
        {/* Signal & Battery Status Bar */}
        <div className="flex justify-between items-center text-[8px] font-bold border-b border-slate-900/20 pb-1">
          <div className="flex gap-0.5 items-end">
            <div className="w-0.5 h-1 bg-slate-900" />
            <div className="w-0.5 h-1.5 bg-slate-900" />
            <div className="w-0.5 h-2 bg-slate-900" />
            <div className="w-0.5 h-2.5 bg-slate-900" />
            <span className="ml-1 tracking-tight">HAAZRI_NET</span>
          </div>
          <div className="flex items-center gap-1">
            <span>[||||]</span>
          </div>
        </div>

        {/* Dynamic Display Text */}
        <div className="flex-1 flex flex-col justify-center items-center py-2 text-center">
          {!isActive ? (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider block">HAAZRI VOICE OS</span>
              <span className="text-[9px] block text-slate-800/80">Press Start button below to simulate</span>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-1 w-full"
              >
                <span className="text-[9px] font-bold text-slate-800 block uppercase tracking-wider">
                  {steps[currentStep].sub}
                </span>
                <p className="text-[10px] leading-tight font-black text-slate-950">
                  {steps[currentStep].text}
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Screen Bottom Menu */}
        <div className="flex justify-between items-center text-[8px] font-bold border-t border-slate-900/20 pt-1">
          <span>{isActive ? 'STEP ' + (currentStep + 1) + '/6' : 'MENU'}</span>
          <span>{isActive ? 'EXIT' : 'START'}</span>
        </div>
      </div>

      {/* Physical Keys Grid */}
      <div className="w-full mt-4 space-y-2">
        {/* Soft Keys Row */}
        <div className="grid grid-cols-3 gap-2 px-1">
          <button 
            onClick={() => setIsActive(true)}
            className="h-6 rounded-md bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all text-[8px] font-black tracking-widest text-emerald-500 shadow border-b border-slate-950"
          >
            START
          </button>
          <div className="h-6 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-slate-400">
            <div className="w-3 h-3 rounded-full bg-slate-950" />
          </div>
          <button 
            onClick={() => { setIsActive(false); setCurrentStep(0); }}
            className="h-6 rounded-md bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all text-[8px] font-black tracking-widest text-red-500 shadow border-b border-slate-950"
          >
            STOP
          </button>
        </div>

        {/* Number Keypad Grid */}
        <div className="grid grid-cols-3 gap-1.5 px-2 pt-2 border-t border-slate-800/80">
          {[
            { label: '1', sub: '⚡' }, { label: '2', sub: 'ABC' }, { label: '3', sub: 'DEF' },
            { label: '4', sub: 'GHI' }, { label: '5', sub: 'JKL' }, { label: '6', sub: 'MNO' },
            { label: '7', sub: 'PQRS' }, { label: '8', sub: 'TUV' }, { label: '9', sub: 'WXYZ' },
            { label: '*', sub: 'a/A' }, { label: '0', sub: '␣' }, { label: '#', sub: '⇧' }
          ].map((keyItem) => {
            const isKey1Active = isActive && currentStep === 4 && keyItem.label === '1';
            return (
              <div 
                key={keyItem.label}
                className={`h-9 rounded-lg flex flex-col items-center justify-center font-mono select-none transition-all border-b-2 border-slate-950 shadow-md ${
                  isKey1Active 
                    ? 'bg-orange-500 text-white border-orange-700 animate-pulse scale-105' 
                    : 'bg-slate-800 text-slate-300 border-slate-900'
                }`}
              >
                <span className="text-xs font-black leading-none">{keyItem.label}</span>
                <span className="text-[6px] text-slate-500 uppercase leading-none mt-0.5">{keyItem.sub}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Brand Watermark */}
      <div className="mt-4 text-[9px] font-black tracking-widest text-slate-600 uppercase font-mono select-none">
        MODEL 1100 · VOICE OS
      </div>
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    </div>
  )
}
