'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, PhoneOff, Mic, CheckCircle2, Volume2 } from 'lucide-react'

const steps = [
  { text: 'Dials missed call number...', icon: Phone, color: 'text-blue-500' },
  { text: 'Call disconnects (Zero balance ok)', icon: PhoneOff, color: 'text-red-500' },
  { text: 'System calls back in Hindi...', icon: Volume2, color: 'text-primary' },
  { text: '"Namaste, kya aap driver ki naukri chahte hain?"', icon: Mic, color: 'text-purple-500' },
  { text: 'Worker says "Haan" (Captured as Voice ID)', icon: Mic, color: 'text-green-500' },
  { text: 'Application complete!', icon: CheckCircle2, color: 'text-primary' },
]

export function IVRSimulator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: any
    if (isActive) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isActive])

  return (
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
      <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/5 to-transparent opaicty-30" />
    </div>
  )
}
