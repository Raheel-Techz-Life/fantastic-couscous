'use client'

import { useState } from 'react'
import { landingConfig } from '@/config/landing-data'

export function VideoCarousel() {
  const [activeTab, setActiveTab] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const { videoCarousel, branding } = landingConfig
  const currentTab = videoCarousel.tabs[activeTab]

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
      {/* Video Main */}
      <div
        className="relative flex aspect-video flex-col items-center justify-center overflow-hidden"
        style={{ background: currentTab.background }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)',
          }}
        />

        {/* Play Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative z-10 mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 transition-all hover:bg-white/25"
        >
          {!isPlaying ? (
            <div className="ml-1 flex h-0 w-0 border-l-4 border-b-2.5 border-t-2.5 border-l-white border-b-transparent border-t-transparent" />
          ) : (
            <div className="relative flex h-3 w-2.5 items-center justify-center gap-1">
              <div className="h-3 w-1 rounded bg-white" />
              <div className="h-3 w-1 rounded bg-white" />
            </div>
          )}
        </button>

        {/* Text Content */}
        <h3 className="relative z-10 text-center text-base font-medium text-white">{currentTab.title}</h3>
        <p className="relative z-10 mt-1 text-xs text-white/80">{currentTab.subtitle}</p>
      </div>

      {/* Tabs */}
      <div className="flex border-t border-gray-200 bg-white">
        {videoCarousel.tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index)
              setIsPlaying(false)
            }}
            className={`flex-1 border-r border-gray-200 px-2 py-2.5 text-center text-xs transition-all last:border-r-0 ${
              activeTab === index
                ? 'font-medium'
                : 'text-gray-500 hover:bg-gray-50'
            }`}
            style={
              activeTab === index
                ? {
                    backgroundColor: branding.colors.lightBg,
                    color: branding.colors.darkBgAccent,
                  }
                : {}
            }
          >
            <div
              className="mb-1 h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: activeTab === index ? branding.colors.darkBgAccent : '#d1d5db',
                margin: '0 auto 2px',
              }}
            />
            {tab.title.split(':')[0]}
          </button>
        ))}
      </div>
    </div>
  )
}
