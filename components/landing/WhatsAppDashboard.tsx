'use client'

import { motion } from 'framer-motion'
import { Send, User, MapPin, Mic, MoreVertical, CheckCheck } from 'lucide-react'

export function WhatsAppDashboard() {
  return (
    <div className="w-full max-w-md mx-auto aspect-[10/12] bg-[#E5DDD5] rounded-2xl border border-border shadow-xl overflow-hidden flex flex-col font-sans">
      {/* WA Header */}
      <div className="bg-[#075E54] p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Zero-Barrier Notifications</h4>
            <p className="text-[10px] opacity-80">Online</p>
          </div>
        </div>
        <MoreVertical className="w-5 h-5 opacity-80" />
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]">
        
        {/* Date Marker */}
        <div className="self-center px-2 py-1 bg-white/50 backdrop-blur-sm rounded text-[10px] uppercase font-bold text-slate-500 mb-2">
          Today
        </div>

        {/* System Message */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="self-start max-w-[85%] bg-white p-3 rounded-lg rounded-tl-none shadow-sm relative"
        >
          <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent" />
          <h5 className="font-bold text-primary text-xs mb-1">NEW APPLICANT: RAMU S.</h5>
          <p className="text-[11px] text-slate-700 leading-normal">
            New application received for <span className="font-bold">Security Guard</span> position in <span className="font-bold">Bengaluru East</span>.
          </p>
          
          <div className="mt-3 p-2 bg-slate-50 rounded border border-slate-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mic className="w-4 h-4" />
            </div>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-primary/40"
              />
            </div>
            <span className="text-[10px] font-mono text-slate-500">0:12</span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-primary/5 p-2 rounded text-center">
              <p className="text-[9px] text-muted-foreground">Reputation</p>
              <p className="text-xs font-bold text-primary">4.8 / 5.0</p>
            </div>
            <div className="bg-primary/5 p-2 rounded text-center">
              <p className="text-[9px] text-muted-foreground">Last Work</p>
              <p className="text-xs font-bold text-primary">Reliable</p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 py-1.5 bg-primary text-white text-[10px] font-bold rounded">
              Call Ramu
            </button>
            <button className="flex-1 py-1.5 border border-primary text-primary text-[10px] font-bold rounded">
              View Profile
            </button>
          </div>

          <div className="mt-1 flex justify-end items-center gap-1">
            <span className="text-[9px] text-slate-400">10:42 AM</span>
            <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
          </div>
        </motion.div>

        {/* Response */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="self-end max-w-[85%] bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm relative"
        >
          <div className="absolute top-0 -right-2 w-0 h-0 border-t-[10px] border-t-[#DCF8C6] border-r-[10px] border-r-transparent" />
          <p className="text-[11px] text-slate-700 leading-normal">
            Scheduled a callback for tomorrow 10 AM.
          </p>
          <div className="mt-1 flex justify-end items-center gap-1">
            <span className="text-[9px] text-slate-400">10:45 AM</span>
            <CheckCheck className="w-3 h-3 text-[#34B7F1]" />
          </div>
        </motion.div>

      </div>

      {/* WA Input */}
      <div className="bg-[#F0F2F5] p-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full py-1.5 px-4 text-xs text-slate-400">
          Type a message
        </div>
        <div className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center text-white">
          <Send className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}
