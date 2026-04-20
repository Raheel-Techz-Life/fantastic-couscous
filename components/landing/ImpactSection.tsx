'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Card, CardContent } from '@/components/ui/card'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts'

const data = [
  { name: 'Traditional Jobs', value: 50, color: 'var(--color-muted)' },
  { name: 'Informal Economy', value: 450, color: 'var(--color-primary)' },
]

export function ImpactSection() {
  const { impact } = landingConfig

  return (
    <section className="px-6 py-16 md:px-10 lg:px-20 bg-primary-soft/10 relative overflow-hidden" id="impact">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Header & Description */}
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 1.3, y: -100, filter: 'blur(15px)' }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
            >
              Market Scale
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, scale: 1.3, y: -150, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
              className="text-4xl font-bold mb-6 tracking-tight leading-tight"
            >
              {impact.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
            >
              {impact.description}
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {impact.metrics.map((metric, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: -80, scale: 1.2, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.3 + (idx * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-background border border-border shadow-sm group hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Data Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.2, y: -100, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 350, damping: 15, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl border border-border bg-card shadow-premium w-full h-full flex flex-col justify-between hover:shadow-2xl hover:border-primary/50 transition-all duration-500"
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-1">Target Market Scale</h3>
              <p className="text-xs text-muted-foreground">Workers in millions (Informal vs. Traditional)</p>
            </div>
            
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 500, fill: 'currentColor' }}
                    width={100}
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm font-medium text-primary">
                "HAAZRI targets the 90% of the Indian workforce currently excluded from the formal digital economy."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

