'use client'

import { landingConfig } from '@/config/landing-data'

export function ImpactSection() {
  const { branding, impact } = landingConfig

  return (
    <section className="px-10 py-16 md:px-5 md:py-10" id="impact">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: branding.colors.primary }}>
          {impact.tag}
        </div>
        <h2 className="mb-3 text-2xl font-medium">{impact.title}</h2>
        <p className="max-w-lg text-sm text-gray-600 leading-relaxed">{impact.description}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
        {impact.stats.map((stat, idx) => (
          <div key={idx} className="rounded-md border border-gray-200 bg-gray-50 px-5 py-5 text-center">
            <div className="text-2xl font-medium" style={{ color: branding.colors.primary }}>
              {stat.number}
            </div>
            <div className="mt-1 text-xs text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
