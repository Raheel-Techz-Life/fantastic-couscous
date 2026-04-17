'use client'

import { landingConfig } from '@/config/landing-data'

export function FeaturesSection() {
  const { branding, features } = landingConfig

  return (
    <section className="px-10 py-16 md:px-5 md:py-10" id="features">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: branding.colors.primary }}>
          {features.tag}
        </div>
        <h2 className="mb-3 text-2xl font-medium">{features.title}</h2>
        <p className="max-w-lg text-sm text-gray-600 leading-relaxed">{features.description}</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        {features.items.map((feature, idx) => (
          <div key={idx} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="text-lg">{feature.icon}</div>
            <h3 className="mb-1.5 mt-2.5 text-sm font-medium">{feature.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
