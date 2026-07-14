'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, MapPin, Mic, MoreVertical, CheckCheck, Play, Pause, X, PhoneCall, Check } from 'lucide-react'

export function WhatsAppDashboard() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackProgress, setPlaybackProgress] = useState(0)
  const [isCalling, setIsCalling] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [showProfile, setShowProfile] = useState(false)

  // Voice note player simulation
  useEffect(() => {
    let animationFrame: number
    if (isPlaying) {
      const startTime = Date.now() - (playbackProgress * 3000) // 3 seconds total voice length
      const update = () => {
        const elapsed = Date.now() - startTime
        const pct = Math.min(elapsed / 3000, 1)
        setPlaybackProgress(pct)
        if (pct >= 1) {
          setIsPlaying(false)
          setPlaybackProgress(0)
        } else {
          animationFrame = requestAnimationFrame(update)
        }
      }
      animationFrame = requestAnimationFrame(update)
    }
    return () => cancelAnimationFrame(animationFrame)
  }, [isPlaying])

  // Call simulation timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isCalling) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
    } else {
      setCallDuration(0)
    }
    return () => clearInterval(interval)
  }, [isCalling])

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <div className="w-full max-w-md mx-auto aspect-[10/12] bg-[#efeae2] rounded-2xl border border-border shadow-xl overflow-hidden flex flex-col font-sans relative select-none">
      
      {/* WA Header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between text-white z-10 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center text-white font-bold border border-white/10">
            H
          </div>
          <div>
            <h4 className="font-bold text-sm">HAAZRI Protocol</h4>
            <p className="text-[10px] opacity-80">Verified Dispatch Loop</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <PhoneCall 
            onClick={() => setIsCalling(true)} 
            className="w-4 h-4 opacity-80 hover:opacity-100 cursor-pointer active:scale-95 transition-all" 
          />
          <MoreVertical className="w-5 h-5 opacity-80" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto relative bg-[#e5ddd5]/60">
        
        {/* Date Marker */}
        <div className="self-center px-3 py-1 bg-white/80 backdrop-blur-xs rounded-full text-[9px] uppercase font-bold text-slate-500 shadow-xs mb-2">
          Today
        </div>

        {/* System Message (Applicant Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="self-start max-w-[85%] bg-white p-3 rounded-xl rounded-tl-none shadow-md relative"
        >
          {/* Bubble tail */}
          <div className="absolute top-0 -left-1.5 w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent" />
          
          <div className="flex justify-between items-start mb-2 border-b border-slate-100 pb-1.5">
            <div>
              <span className="text-[8px] font-black text-primary tracking-widest uppercase block">Verified Match</span>
              <h5 className="font-bold text-slate-900 text-xs mt-0.5">Ramu S. (Security Guard)</h5>
            </div>
            <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">HZ-8921</span>
          </div>

          <p className="text-[10px] text-slate-600 leading-relaxed mb-3">
            Dialect matched: <span className="font-black text-slate-800">Kannada → English (AI Transcribed)</span>. Available for immediate dispatch.
          </p>
          
          {/* Interactive Voice Note Player */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer shadow-sm"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
            </button>
            
            {/* Waveform Visualization */}
            <div className="flex-1 flex gap-0.5 items-center h-6 overflow-hidden">
              {Array.from({ length: 24 }).map((_, i) => {
                const heightPct = [40, 60, 20, 80, 50, 90, 30, 70, 40, 85, 20, 60, 30, 75, 45, 90, 25, 65, 35, 80, 50, 70, 30, 40][i];
                const active = (i / 24) <= playbackProgress;
                return (
                  <div 
                    key={i} 
                    className={`w-[2px] rounded-full transition-all duration-300 ${
                      active ? 'bg-emerald-500 h-[80%]' : 'bg-slate-300 h-[40%]'
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                )
              })}
            </div>
            <span className="text-[9px] font-mono text-slate-500 shrink-0">
              {isPlaying ? formatTime(Math.floor(playbackProgress * 12)) : '0:12'}
            </span>
          </div>

          {/* Verification Badges */}
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-2.5">
            <div className="bg-slate-50 border border-slate-100 p-1.5 rounded text-center">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Reputation</p>
              <p className="text-xs font-black text-slate-800 mt-0.5">4.9 / 5.0 ★</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-1.5 rounded text-center">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Aadhaar Status</p>
              <p className="text-xs font-black text-emerald-600 mt-0.5 flex items-center justify-center gap-1">
                <Check className="w-3 h-3 stroke-[3]" /> Verified
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-3 flex gap-2">
            <button 
              onClick={() => setIsCalling(true)}
              className="flex-1 py-2 bg-emerald-600 text-white text-[10px] font-bold rounded-lg hover:bg-emerald-700 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              📞 Call Ramu
            </button>
            <button 
              onClick={() => setShowProfile(true)}
              className="flex-1 py-2 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-lg hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
            >
              📋 View Profile
            </button>
          </div>

          <div className="mt-2.5 flex justify-end items-center gap-1">
            <span className="text-[8px] text-slate-400 font-mono">10:42 AM</span>
            <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1] stroke-[2.5]" />
          </div>
        </motion.div>

        {/* Response Bubble */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="self-end max-w-[85%] bg-[#d9fdd3] p-3 rounded-xl rounded-tr-none shadow-md relative"
        >
          {/* Bubble tail */}
          <div className="absolute top-0 -right-1.5 w-0 h-0 border-t-[8px] border-t-[#d9fdd3] border-r-[8px] border-r-transparent" />
          <p className="text-[11px] text-slate-800 leading-normal">
            Aadhaar verified. Ramu scheduled to visit Site-C tomorrow 9:00 AM.
          </p>
          <div className="mt-1 flex justify-end items-center gap-1">
            <span className="text-[8px] text-slate-400 font-mono">10:45 AM</span>
            <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1] stroke-[2.5]" />

          </div>
        </motion.div>

      </div>

      {/* WA Input */}
      <div className="bg-[#f0f2f5] p-3 flex items-center gap-2 border-t border-slate-200">
        <div className="flex-1 bg-white rounded-full py-2 px-4 text-xs text-slate-400 border border-slate-200">
          Type a message
        </div>
        <div className="w-9 h-9 rounded-full bg-[#075E54] flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer shadow-sm">
          <Send className="w-4 h-4 ml-0.5" />
        </div>
      </div>

      {/* Call Simulator Screen Modal */}
      <AnimatePresence>
        {isCalling && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute inset-0 bg-[#075E54] text-white flex flex-col justify-between p-8 z-30 font-sans"
          >
            <div className="text-center pt-10 space-y-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Outgoing HAAZRI Call</span>
              <h4 className="text-2xl font-black">Ramu S.</h4>
              <p className="text-sm opacity-80">
                {callDuration === 0 ? 'Ringing...' : `Connected (${formatTime(callDuration)})`}
              </p>
            </div>

            {/* Simulated sound waves */}
            {callDuration > 0 && (
              <div className="flex justify-center items-end gap-1.5 h-16">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-1 bg-emerald-400 rounded-full h-8"
                    animate={{ height: [12, Math.random() * 48 + 12, 12] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                  />
                ))}
              </div>
            )}

            <div className="flex justify-center pb-12">
              <button 
                onClick={() => setIsCalling(false)}
                className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer border-2 border-white/20"
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Detail Drawer Modal */}
      <AnimatePresence>
        {showProfile && (
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            className="absolute inset-x-0 bottom-0 bg-white rounded-t-[2.5rem] border-t-2 border-primary/20 p-6 z-25 text-slate-800 shadow-2xl font-sans text-left"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[9px] font-black text-primary uppercase tracking-widest block">Detailed Resume Card</span>
                <h4 className="text-xl font-black mt-0.5">Ramu S.</h4>
              </div>
              <button 
                onClick={() => setShowProfile(false)}
                className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-90 transition-transform cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 font-bold uppercase block text-[8px]">Job Role</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">Security Guard</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 font-bold uppercase block text-[8px]">Experience</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">4 Years</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold uppercase text-[8px]">Location Preference</span>
                  <span className="font-bold text-slate-900">Whitefield, Bengaluru</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold uppercase text-[8px]">Last Verification</span>
                  <span className="font-bold text-emerald-600">Aadhaar Success</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold uppercase text-[8px]">HAAZRI Trust Score</span>
                  <span className="font-bold text-primary">4.9 / 5.0 (No walkouts)</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowProfile(false)}
              className="w-full mt-6 py-3 bg-primary text-white font-bold rounded-full text-center hover:opacity-90 active:scale-95 transition-transform cursor-pointer shadow-lg shadow-primary/10"
            >
              Verify & Approve Dispatch
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
