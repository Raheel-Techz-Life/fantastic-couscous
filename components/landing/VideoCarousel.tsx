'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Play, Pause, ChevronRight } from 'lucide-react'

export function VideoCarousel() {
  const [activeTab, setActiveTab] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const { home } = landingConfig
  const demo = home.demo
  const currentTab = demo.tabs[activeTab]

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-premium group">
      {/* Video Main Showcase */}
      <div 
        className="relative aspect-video overflow-hidden transition-all duration-700 ease-in-out"
        style={{ backgroundColor: currentTab.background }}
      >
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-transparent z-10" />
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `radial-gradient(circle at center, white 0%, transparent 70%)`,
          }}
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all p-0 mb-6"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </motion.button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center px-8"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{currentTab.title}</h3>
              <p className="text-white/70 text-sm font-medium tracking-wide uppercase">{currentTab.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Tabs */}
      <div className="flex p-2 bg-secondary/50 backdrop-blur-sm gap-2">
        {demo.tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index)
              setIsPlaying(false)
            }}
            className={`relative flex-1 py-4 px-4 rounded-xl transition-all duration-300 text-left overflow-hidden ${
              activeTab === index ? 'bg-background shadow-sm' : 'hover:bg-background/40'
            }`}
          >
            {activeTab === index && (
              <motion.div 
                layoutId="activeTab"
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
              />
            )}
            <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
              activeTab === index ? 'text-primary' : 'text-muted-foreground'
            }`}>
              Perspective 0{index + 1}
            </div>
            <div className={`text-xs font-bold truncate ${
              activeTab === index ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {tab.title.split(':')[0]}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

