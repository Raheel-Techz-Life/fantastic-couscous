'use client'

import { landingConfig } from '@/config/landing-data'

export function AwardBanner() {
  const { award, branding } = landingConfig

  return (
    <div
      className="mx-10 -mt-px flex items-center justify-between rounded-md border px-6 py-3.5 md:mx-5 md:flex-col md:gap-2 md:text-center"
      style={{
        backgroundColor: '#F5F5F5',
        borderColor: branding.colors.primary + '80',
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{award.emoji}</span>
        <div>
          <div className="text-xs font-medium" style={{ color: branding.colors.darkBgAccent }}>
            {award.title}
          </div>
          <div className="text-xs text-gray-600">{award.subtitle}</div>
        </div>
      </div>
      <div className="text-xs text-gray-600 md:max-w-none">{award.organizers}</div>
    </div>
  )
}
