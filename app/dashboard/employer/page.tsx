'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts'
import {
  Mic,
  Play,
  Pause,
  Check,
  X,
  FileSpreadsheet,
  PlusCircle,
  TrendingUp,
  Briefcase,
  Users,
  Settings,
  LogOut,
  MapPin,
  Volume2,
  CalendarCheck
} from 'lucide-react'
import { useRouter } from 'next/navigation'

// Mock Data
const initialCandidates = [
  {
    id: 1,
    name: 'Manoj Rawat',
    trade: 'Mason (राजमिस्त्री)',
    experience: '6 Years',
    dialect: 'Hindi (Bundelkhandi)',
    rating: 4.8,
    audioLength: '0:22',
    transcript: 'मुझे हुबली में निर्माण कार्यों का ६ साल का अनुभव है। मैं प्लास्टरिंग और ईंट बिछाने में माहिर हूँ। मैं तुरंत काम शुरू कर सकता हूँ।',
    translation: 'I have 6 years of experience in construction in Hubli. I specialize in plastering and brick-laying. I can start immediately.',
    isPlaying: false,
    status: 'pending'
  },
  {
    id: 2,
    name: 'Sunita Kurmi',
    trade: 'Helper (मददगार)',
    experience: '2 Years',
    dialect: 'Hindi (Deccani)',
    rating: 4.6,
    audioLength: '0:18',
    transcript: 'मैंने पहले दो साइटों पर काम किया है। मैं सीमेंट मिक्सिंग और सामान ढोने का सारा काम अच्छे से कर सकती हूँ। काम की तलाश है।',
    translation: 'I have worked on two sites previously. I can handle cement mixing and materials hauling well. Looking for work.',
    isPlaying: false,
    status: 'pending'
  },
  {
    id: 3,
    name: 'Ganesh Naik',
    trade: 'Electrician (बिजली मिस्त्री)',
    experience: '4 Years',
    dialect: 'Kannada (Dharwad)',
    rating: 4.9,
    audioLength: '0:26',
    transcript: 'ಹುಬ್ಬಳ್ಳಿ ಸುತ್ತಮುತ್ತಲಿನ ವೈರಿಂಗ್ ಮತ್ತು ಪ್ಯಾನಲ್ ಬೋರ್ಡ್ ಕೆಲಸಗಳಲ್ಲಿ ನನಗೆ ಉತ್ತಮ ಅನುಭವವಿದೆ. ಯಾವುದೇ ಗುತ್ತಿಗೆಗೂ ಲಭ್ಯನಿದ್ದೇನೆ.',
    translation: 'I have good experience in wiring and panel board installations around Hubli. Ready for any contract.',
    isPlaying: false,
    status: 'pending'
  }
]

const initialMusterRoll = [
  { id: 1, name: 'Manoj Rawat', trade: 'Mason', eShram: 'Linked ✓', attendance: 'Present', wage: 650, verified: true },
  { id: 2, name: 'Sunita Kurmi', trade: 'Helper', eShram: 'Linked ✓', attendance: 'Present', wage: 450, verified: true },
  { id: 3, name: 'Ganesh Naik', trade: 'Electrician', eShram: 'Linked ✓', attendance: 'Present', wage: 750, verified: true },
  { id: 4, name: 'Ramesh Sawant', trade: 'Bar-bender', eShram: 'Linked ✓', attendance: 'Pending', wage: 680, verified: true },
  { id: 5, name: 'Abdul Khan', trade: 'Mason', eShram: 'Failed ✗', attendance: 'No-Show', wage: 650, verified: false }
]

const analyticsData = [
  { day: 'Mon', masonry: 620, helper: 420, electrical: 720 },
  { day: 'Tue', masonry: 630, helper: 430, electrical: 730 },
  { day: 'Wed', masonry: 640, helper: 430, electrical: 740 },
  { day: 'Thu', masonry: 650, helper: 440, electrical: 740 },
  { day: 'Fri', masonry: 650, helper: 450, electrical: 750 },
  { day: 'Sat', masonry: 650, helper: 450, electrical: 750 }
]

const fillRateData = [
  { trade: 'Mason', fill: 95 },
  { trade: 'Helper', fill: 98 },
  { trade: 'Electrician', fill: 92 },
  { trade: 'Bar-bender', fill: 88 }
]

export default function EmployerDashboard() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<'candidates' | 'post-job' | 'muster' | 'analytics'>('candidates')
  const [candidates, setCandidates] = useState(initialCandidates)
  const [musterRoll, setMusterRoll] = useState(initialMusterRoll)
  const [isEnglishText, setIsEnglishText] = useState<Record<number, boolean>>({})

  // Form Fields
  const [jobRole, setJobRole] = useState('')
  const [jobLocation, setJobLocation] = useState('')
  const [workerCount, setWorkerCount] = useState('')
  const [dailyWage, setDailyWage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    router.push('/login')
  }

  const togglePlay = (id: number) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isPlaying: !c.isPlaying } : { ...c, isPlaying: false }))
    )
  }

  const handleHire = (id: number, status: 'hired' | 'rejected') => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    )
    if (status === 'hired') {
      const candidate = candidates.find((c) => c.id === id)
      if (candidate) {
        setMusterRoll((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            name: candidate.name,
            trade: candidate.trade.split(' ')[0],
            eShram: 'Linked ✓',
            attendance: 'Pending',
            wage: candidate.trade.includes('Mason') ? 650 : candidate.trade.includes('Electrician') ? 750 : 450,
            verified: true
          }
        ])
      }
    }
  }

  const handleAttendanceChange = (id: number, status: string) => {
    setMusterRoll((prev) =>
      prev.map((m) => (m.id === id ? { ...m, attendance: status } : m))
    )
  }

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setJobRole('')
      setJobLocation('')
      setWorkerCount('')
      setDailyWage('')
      setActiveTab('candidates')
    }, 2000)
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <Navigation />

      <section className="flex-1 max-w-7xl w-full mx-auto pt-32 pb-16 px-6 grid md:grid-cols-4 gap-8 relative z-10">
        {/* Ambient Backglow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

        {/* Sidebar Nav */}
        <div className="md:col-span-1 p-6 rounded-[2rem] border border-border bg-card/65 backdrop-blur-xl shadow-xl flex flex-col justify-between h-[500px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="space-y-6 relative z-10">
            <div className="flex gap-3 items-center border-b border-border pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black border border-primary/10">
                B2B
              </div>
              <div className="text-left">
                <h4 className="font-bold text-sm text-foreground">Vidyut Infra Corp</h4>

                <p className="text-muted-foreground text-[10px] uppercase font-black tracking-wider">SMB Contractor</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('candidates')}
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'candidates'
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'

                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <Mic className="w-4 h-4" />
                Candidate Pitches
              </button>
              <button
                onClick={() => setActiveTab('post-job')}
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'post-job'
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'

                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <PlusCircle className="w-4 h-4" />
                Post Job Requirement
              </button>
              <button
                onClick={() => setActiveTab('muster')}
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'muster'
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'

                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                Digital Muster Roll
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'analytics'
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'

                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Workforce Analytics
              </button>
            </nav>
          </div>

          <div className="border-t border-border pt-4 relative z-10">
            <button
              onClick={handleLogout}
              className="flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold text-red-500 hover:bg-red-500/10 transition-all cursor-pointer"

            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="md:col-span-3 p-8 rounded-[2.5rem] border border-border bg-card/65 backdrop-blur-xl shadow-2xl min-h-[500px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-44 h-44 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <AnimatePresence mode="wait">
            {/* Candidates Pitch Panel */}
            {activeTab === 'candidates' && (
              <motion.div
                key="candidates"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 relative z-10"
              >
                <div className="border-b border-border pb-4 flex justify-between items-center text-left">
                  <div>
                    <h2 className="text-2xl font-black text-foreground">Candidate Voice Pitches</h2>
                    <p className="text-muted-foreground text-xs">Review 30-second candidate audio introductions and translated transcripts.</p>
                  </div>
                  <span className="text-[10px] font-black bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider border border-primary/10">

                    {candidates.filter(c => c.status === 'pending').length} New Pitches
                  </span>
                </div>

                <div className="space-y-6 text-left">
                  {candidates.map((cand) => (
                    <div
                      key={cand.id}
                      className={`p-6 rounded-[2rem] border transition-all duration-500 ${

                        cand.status === 'hired'
                          ? 'border-green-500 bg-green-500/5'
                          : cand.status === 'rejected'
                          ? 'border-border opacity-60'
                          : 'border-border bg-secondary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(255,84,0,0.03)]'

                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex gap-3 items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary border border-primary/10">
                            {cand.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground">{cand.name}</h4>

                            <p className="text-muted-foreground text-xs">{cand.trade} • Exp: {cand.experience}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-md border border-border">

                            {cand.dialect}
                          </span>
                          <span className="text-xs font-bold text-primary">★ {cand.rating}</span>
                        </div>
                      </div>

                      {/* Playable Waveform Simulator */}
                      <div className="p-4 rounded-2xl bg-background/50 border border-border flex items-center gap-4 mb-4">
                        <button
                          onClick={() => togglePlay(cand.id)}
                          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-md shadow-primary/10"
                        >
                          {cand.isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}

                        </button>
                        
                        {/* CSS Audio Waveform Animation */}
                        <div className="flex-1 flex items-center gap-1 h-8">
                          {Array.from({ length: 30 }).map((_, idx) => (
                            <motion.div
                              key={idx}
                              animate={
                                cand.isPlaying
                                  ? { scaleY: [0.3, Math.random() * 0.9 + 0.1, 0.3] }
                                  : { scaleY: 0.2 }
                              }
                              transition={{
                                duration: 0.5 + Math.random() * 0.5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                              }}
                              className="h-full w-1 rounded bg-primary/40 origin-center"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">{cand.audioLength}</span>
                      </div>

                      {/* Transcript & Translation Switch */}
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex gap-1.5 items-center">
                            <Volume2 className="w-3.5 h-3.5" />
                            {isEnglishText[cand.id] ? 'Translated Transcript (English)' : 'Original Voice Recording'}
                          </span>
                          <button
                            onClick={() =>
                              setIsEnglishText((prev) => ({ ...prev, [cand.id]: !prev[cand.id] }))
                            }
                            className="text-[10px] font-bold text-primary uppercase hover:underline cursor-pointer"

                          >
                            {isEnglishText[cand.id] ? 'Show Original Dialect' : 'Translate to English'}
                          </button>
                        </div>
                        <p className="text-xs italic bg-background/40 p-4 rounded-xl border border-border/65 text-foreground/90 leading-relaxed">

                          {isEnglishText[cand.id] ? cand.translation : cand.transcript}
                        </p>
                      </div>

                      {/* Hiring CTA buttons */}
                      <div className="flex justify-end gap-3">
                        {cand.status === 'pending' ? (
                          <>
                            <Button
                              variant="outline"
                              onClick={() => handleHire(cand.id, 'rejected')}
                              className="h-10 px-4 rounded-xl text-xs font-bold text-red-500 border border-red-500/20 hover:bg-red-500/10 cursor-pointer"

                            >
                              <X className="w-3.5 h-3.5 mr-1" /> Decline
                            </Button>
                            <Button
                              onClick={() => handleHire(cand.id, 'hired')}
                              className="h-10 px-4 rounded-xl text-xs font-bold bg-green-600 hover:bg-green-700 text-white cursor-pointer"

                            >
                              <Check className="w-3.5 h-3.5 mr-1" /> Approve & Hire
                            </Button>
                          </>
                        ) : (
                          <span className={`text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider ${
                            cand.status === 'hired' ? 'bg-green-500/15 text-green-600' : 'bg-red-500/15 text-red-600'
                          }`}>
                            {cand.status}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Post Job Panel */}
            {activeTab === 'post-job' && (
              <motion.div
                key="post-job"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-border pb-4">
                  <h2 className="text-2xl font-black">Post Job Vacancy</h2>
                  <p className="text-muted-foreground text-xs">Requirement broadcasted automatically to local labor channels via voice call alerts.</p>
                </div>

                {formSubmitted && (
                  <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-600 text-xs font-bold flex gap-2 items-center">
                    <Check className="w-4 h-4" /> Requirement broadcasted to local workers via IVR dialing logs!
                  </div>
                )}

                <form onSubmit={handlePostJob} className="space-y-6 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="job-role">Trade / Category</Label>
                    <Input
                      id="job-role"
                      placeholder="e.g. Mason, Concrete Mixer, Electrician Helper"
                      value={jobRole}
                      onChange={(e) => setJobRole(e.target.value)}
                      required
                      className="rounded-xl h-12 bg-secondary/50 border-none focus-visible:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-location">Location (Area in Hubli)</Label>
                      <Input
                        id="job-location"
                        placeholder="e.g. Gokul Road, Vidyanagar"
                        value={jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}
                        required
                        className="rounded-xl h-12 bg-secondary/50 border-none focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="worker-count">Required Count</Label>
                      <Input
                        id="worker-count"
                        type="number"
                        placeholder="e.g. 5"
                        value={workerCount}
                        onChange={(e) => setWorkerCount(e.target.value)}
                        required
                        className="rounded-xl h-12 bg-secondary/50 border-none focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="daily-wage">Daily Wage Rate (₹ / Day)</Label>
                    <Input
                      id="daily-wage"
                      type="number"
                      placeholder="e.g. 550"
                      value={dailyWage}
                      onChange={(e) => setDailyWage(e.target.value)}
                      required
                      className="rounded-xl h-12 bg-secondary/50 border-none focus-visible:ring-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full h-14 rounded-xl bg-primary text-white hover:bg-primary/95 font-bold text-sm shadow-lg">
                    Launch Interactive Broadcast
                  </Button>
                </form>
              </motion.div>
            )}

            {/* Muster Roll Panel */}
            {activeTab === 'muster' && (
              <motion.div
                key="muster"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-border pb-4 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-black">Digital Muster Roll</h2>
                    <p className="text-muted-foreground text-xs">Track attendance and verify compliance logs (BOCW cess pools and e-Shram linkages).</p>
                  </div>
                  <span className="text-[10px] font-bold bg-green-500/10 text-green-600 px-3 py-1 rounded-full uppercase">
                    Audit Compliant
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground font-bold">
                        <th className="pb-3 pr-2">Worker Name</th>
                        <th className="pb-3 px-2">Trade</th>
                        <th className="pb-3 px-2">e-Shram Status</th>
                        <th className="pb-3 px-2">Daily Wage</th>
                        <th className="pb-3 px-2">Attendance Check</th>
                        <th className="pb-3 pl-2 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {musterRoll.map((row) => (
                        <tr key={row.id} className="border-b border-border/50">
                          <td className="py-4 pr-2 font-bold flex items-center gap-2 text-foreground">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                              {row.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            {row.name}
                          </td>
                          <td className="py-4 px-2">{row.trade}</td>
                          <td className={`py-4 px-2 font-bold ${row.verified ? 'text-green-600' : 'text-red-500'}`}>
                            {row.eShram}
                          </td>
                          <td className="py-4 px-2 font-bold text-foreground">₹{row.wage}</td>
                          <td className="py-4 px-2">
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleAttendanceChange(row.id, 'Present')}
                                className={`px-2.5 py-1 rounded-lg font-bold text-[10px] transition-all ${
                                  row.attendance === 'Present'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                                }`}
                              >
                                Present
                              </button>
                              <button
                                onClick={() => handleAttendanceChange(row.id, 'No-Show')}
                                className={`px-2.5 py-1 rounded-lg font-bold text-[10px] transition-all ${
                                  row.attendance === 'No-Show'
                                    ? 'bg-red-500 text-white'
                                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                                }`}
                              >
                                No-Show
                              </button>
                            </div>
                          </td>
                          <td className="py-4 pl-2 text-right">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              row.attendance === 'Present'
                                ? 'bg-green-500/15 text-green-600'
                                : row.attendance === 'No-Show'
                                ? 'bg-red-500/15 text-red-600'
                                : 'bg-yellow-500/15 text-yellow-600'
                            }`}>
                              {row.attendance}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Analytics Panel */}
            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="border-b border-border pb-4">
                  <h2 className="text-2xl font-black">Workforce Analytics Reports</h2>
                  <p className="text-muted-foreground text-xs">Visualizing regional wage trends, fill rates, and retention factors.</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/60">
                    <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider block">Average Fill Rate</span>
                    <span className="text-2xl font-black text-primary">94.8%</span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/60">
                    <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider block">Total Wage Disbursed</span>
                    <span className="text-2xl font-black text-primary">₹34,800</span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/60">
                    <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider block">Retention Score</span>
                    <span className="text-2xl font-black text-primary">87.2%</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Wage Trend Line Chart */}
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/60 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider">Wage Trends by Trade (₹/Day)</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={analyticsData}>
                          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                          <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                          <YAxis tick={{ fontSize: 10 }} />
                          <ChartTooltip contentStyle={{ fontSize: 10 }} />
                          <Line type="monotone" dataKey="masonry" stroke="var(--color-primary)" strokeWidth={2} name="Mason" />
                          <Line type="monotone" dataKey="helper" stroke="#3b82f6" strokeWidth={2} name="Helper" />
                          <Line type="monotone" dataKey="electrical" stroke="#a855f7" strokeWidth={2} name="Electrician" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Fill Rate Bar Chart */}
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/60 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider">Active Pipeline Fill Rates (%)</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={fillRateData}>
                          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                          <XAxis dataKey="trade" tick={{ fontSize: 10 }} />
                          <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                          <ChartTooltip contentStyle={{ fontSize: 10 }} />
                          <Bar dataKey="fill" fill="var(--color-primary)" radius={[4, 4, 0, 0]}>
                            {fillRateData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={index === 1 ? '#3b82f6' : 'var(--color-primary)'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}
