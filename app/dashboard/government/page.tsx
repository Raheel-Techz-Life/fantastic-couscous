'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  AreaChart,
  Area,
  Cell
} from 'recharts'
import {
  Shield,
  FileSpreadsheet,
  Download,
  Activity,
  MapPin,
  TrendingUp,
  Award,
  Layers,
  LogOut,
  FileText,
  TrendingDown
} from 'lucide-react'
import { useRouter } from 'next/navigation'

// Mock B2G Analytics Data
const stateMobilityData = [
  { region: 'Belagavi', count: 1840 },
  { region: 'Gadag', count: 1250 },
  { region: 'Haveri', count: 980 },
  { region: 'Koppal', count: 750 },
  { region: 'Bagalkot', count: 1100 },
  { region: 'Local (Hubli)', count: 4890 }
]

const skillAvailabilityData = [
  { trade: 'Mason', active: 3400, training: 1200 },
  { trade: 'Helper', active: 5600, training: 800 },
  { trade: 'Electrician', active: 1100, training: 400 },
  { trade: 'Plumber', active: 950, training: 350 },
  { trade: 'Bar-bender', active: 1500, training: 600 }
]

const exportableReports = [
  { id: 'R1', title: 'Q2 Karnataka State Migrant Labour Mobility Map', size: '2.4 MB', type: 'PDF', date: '04-Jul-2026' },
  { id: 'R2', title: 'Trade-wise Wage Indices & Regional Disparities (Hubli)', size: '840 KB', type: 'CSV', date: '28-Jun-2026' },
  { id: 'R3', title: 'BOCW Cess Fund Compliance Audit & Muster Log Sheet', size: '1.8 MB', type: 'CSV', date: '20-Jun-2026' },
  { id: 'R4', title: 'Skill India / PMKVY Vocational Dialect Broadcast Reports', size: '4.2 MB', type: 'PDF', date: '15-Jun-2026' }
]

export default function GovernmentDashboard() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<'welfare' | 'mobility' | 'exports'>('welfare')
  const [reports, setReports] = useState(exportableReports)
  const [downloadingId, setDownloadingId] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    router.push('/login')
  }

  const triggerDownload = (id: string) => {
    setDownloadingId(id)
    setTimeout(() => {
      setDownloadingId(null)
    }, 1500)
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <Navigation />

<<<<<<< HEAD
      <section className="flex-1 max-w-7xl w-full mx-auto pt-32 pb-16 px-6 grid md:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="md:col-span-1 p-6 rounded-[2rem] border border-border bg-card shadow-xl flex flex-col justify-between h-[500px]">
          <div className="space-y-6">
            <div className="flex gap-3 items-center border-b border-border pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Karnataka State</h4>
=======
      <section className="flex-1 max-w-7xl w-full mx-auto pt-32 pb-16 px-6 grid md:grid-cols-4 gap-8 relative z-10">
        {/* Ambient Backglow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        {/* Sidebar Nav */}
        <div className="md:col-span-1 p-6 rounded-[2rem] border border-border bg-card/65 backdrop-blur-xl shadow-xl flex flex-col justify-between h-[500px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="space-y-6 relative z-10">
            <div className="flex gap-3 items-center border-b border-border pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-sm text-foreground">Karnataka State</h4>
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                <p className="text-muted-foreground text-[10px] uppercase font-black tracking-wider">Planning & Welfare</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('welfare')}
<<<<<<< HEAD
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all ${
                  activeTab === 'welfare'
                    ? 'bg-primary text-white'
=======
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'welfare'
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <Activity className="w-4 h-4" />
                Welfare Scheme Metrics
              </button>
              <button
                onClick={() => setActiveTab('mobility')}
<<<<<<< HEAD
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all ${
                  activeTab === 'mobility'
                    ? 'bg-primary text-white'
=======
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'mobility'
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Workforce Mobility
              </button>
              <button
                onClick={() => setActiveTab('exports')}
<<<<<<< HEAD
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all ${
                  activeTab === 'exports'
                    ? 'bg-primary text-white'
=======
                className={`flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'exports'
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <Download className="w-4 h-4" />
                Data Exports Center
              </button>
            </nav>
          </div>

<<<<<<< HEAD
          <div className="border-t border-border pt-4">
            <button
              onClick={handleLogout}
              className="flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold text-red-500 hover:bg-red-500/10 transition-all"
=======
          <div className="border-t border-border pt-4 relative z-10">
            <button
              onClick={handleLogout}
              className="flex gap-3 items-center w-full px-4 py-3 rounded-xl text-left text-xs font-bold text-red-500 hover:bg-red-500/10 transition-all cursor-pointer"
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
<<<<<<< HEAD
        <div className="md:col-span-3 p-8 rounded-[2.5rem] border border-border bg-card shadow-2xl min-h-[500px]">
=======
        <div className="md:col-span-3 p-8 rounded-[2.5rem] border border-border bg-card/65 backdrop-blur-xl shadow-2xl min-h-[500px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-44 h-44 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
          <AnimatePresence mode="wait">
            {/* Welfare Tab */}
            {activeTab === 'welfare' && (
              <motion.div
                key="welfare"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
<<<<<<< HEAD
                className="space-y-8"
              >
                <div className="border-b border-border pb-4 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-black">Welfare & Registration Integration</h2>
                    <p className="text-muted-foreground text-xs">Auditing e-Shram linkages, BOCW card verification, and PMKVY upskilling alerts.</p>
                  </div>
                  <span className="text-[10px] font-bold bg-green-500/10 text-green-600 px-3 py-1 rounded-full uppercase">
=======
                className="space-y-8 relative z-10"
              >
                <div className="border-b border-border pb-4 flex justify-between items-center text-left">
                  <div>
                    <h2 className="text-2xl font-black text-foreground">Welfare & Registration Integration</h2>
                    <p className="text-muted-foreground text-xs">Auditing e-Shram linkages, BOCW card verification, and PMKVY upskilling alerts.</p>
                  </div>
                  <span className="text-[10px] font-bold bg-green-500/10 text-green-600 px-3 py-1 rounded-full uppercase border border-green-500/10">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                    Sync Status: OK
                  </span>
                </div>

                {/* Progress bars for Welfare enrollment */}
<<<<<<< HEAD
                <div className="grid md:grid-cols-3 gap-6">
=======
                <div className="grid md:grid-cols-3 gap-6 text-left">
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
                  {/* BOCW Card */}
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/60 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase font-black text-muted-foreground">BOCW Registrations</span>
                      <span className="text-xs font-bold text-primary">84% Verified</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-2xl font-black text-foreground">14,240</h4>
                      <p className="text-muted-foreground text-[10px]">Active workers verified via Voice IVR</p>
                    </div>
                    <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '84%' }} />
                    </div>
                  </div>

                  {/* e-Shram Linkages */}
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/60 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase font-black text-muted-foreground">e-Shram API Bridges</span>
                      <span className="text-xs font-bold text-primary">95% Linked</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-2xl font-black text-foreground">16,100</h4>
                      <p className="text-muted-foreground text-[10px]">Aadhaar demographic consent vaults</p>
                    </div>
                    <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>

                  {/* Skill India Broadcast */}
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/60 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase font-black text-muted-foreground">Upskilling Alerts</span>
                      <span className="text-xs font-bold text-primary">68% Actioned</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-2xl font-black text-foreground">8,930</h4>
                      <p className="text-muted-foreground text-[10px]">Workers registered for PMKVY classes</p>
                    </div>
                    <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                </div>

                {/* Skill supply comparison charts */}
                <div className="p-6 rounded-2xl bg-secondary/20 border border-border/60 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider">Skill Availability Matrix by Trade</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={skillAvailabilityData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis dataKey="trade" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <ChartTooltip contentStyle={{ fontSize: 10 }} />
                        <Bar dataKey="active" fill="var(--color-primary)" radius={[4, 4, 0, 0]} name="Active Workforce Pool" />
                        <Bar dataKey="training" fill="#3b82f6" radius={[4, 4, 0, 0]} name="In Vocational Training (PMKVY)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Mobility Tab */}
            {activeTab === 'mobility' && (
              <motion.div
                key="mobility"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="border-b border-border pb-4">
                  <h2 className="text-2xl font-black">Regional Workforce Mobility</h2>
                  <p className="text-muted-foreground text-xs">Aggregated geographical distribution of workers migrating into Hubballi-Dharwad trade districts.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-secondary/50 border border-border/60">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-1">Peak Migration Source</span>
                    <span className="text-xl font-black">Belagavi Region</span>
                    <span className="text-[10px] text-primary block mt-1">1,840 Active candidates</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/50 border border-border/60">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-1">Hubli Local Density</span>
                    <span className="text-xl font-black">4,890 Candidates</span>
                    <span className="text-[10px] text-green-600 font-bold block mt-1">↑ 4% this quarter</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/50 border border-border/60">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-1">Compliance Standard</span>
                    <span className="text-xl font-black">100% Audited</span>
                    <span className="text-[10px] text-muted-foreground block mt-1">DPDP 2023 Compliant logs</span>
                  </div>
                </div>

                {/* Area chart representing migrant mobility flows */}
                <div className="p-6 rounded-2xl bg-secondary/20 border border-border/60 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider">Mobility Map: Worker Origins (Hubli Hub)</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={stateMobilityData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis dataKey="region" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <ChartTooltip contentStyle={{ fontSize: 10 }} />
                        <defs>
                          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="count" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorCount)" strokeWidth={2} name="Active Workers" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Exports Tab */}
            {activeTab === 'exports' && (
              <motion.div
                key="exports"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-border pb-4">
                  <h2 className="text-2xl font-black">Data Exports Center</h2>
                  <p className="text-muted-foreground text-xs">Download anonymized, aggregated compliance files and trade-wise reports.</p>
                </div>

                <div className="space-y-4">
                  {reports.map((rep) => (
                    <div
                      key={rep.id}
                      className="p-6 rounded-2xl border border-border bg-secondary/15 hover:border-primary/40 transition-all flex items-center justify-between gap-4"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-foreground">{rep.title}</h4>
                          <p className="text-muted-foreground text-[10px] uppercase font-black tracking-wider mt-0.5">
                            {rep.date} • {rep.size} • {rep.type} format
                          </p>
                        </div>
                      </div>

                      <Button
                        onClick={() => triggerDownload(rep.id)}
                        disabled={downloadingId === rep.id}
                        className="h-10 px-4 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary/95 flex gap-1.5 items-center shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        {downloadingId === rep.id ? 'Exporting...' : 'Export'}
                      </Button>
                    </div>
                  ))}
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
