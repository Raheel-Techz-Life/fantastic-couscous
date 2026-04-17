'use client'

import { landingConfig } from '@/config/landing-data'

export function HowItWorks() {
  const { branding, howItWorks } = landingConfig

  return (
    <section className="bg-gray-50 px-10 py-16 md:px-5 md:py-10" id="howitworks">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: branding.colors.primary }}>
          {howItWorks.tag}
        </div>
        <h2 className="mb-3 text-2xl font-medium">{howItWorks.title}</h2>
        <p className="max-w-lg text-sm text-gray-600 leading-relaxed">{howItWorks.description}</p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-3 gap-5 md:grid-cols-1">
        {howItWorks.steps.map((step) => (
          <div
            key={step.number}
            className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6"
          >
            {/* Background Number */}
            <div
              className="absolute -right-2 -top-1 text-6xl font-medium opacity-5"
              style={{ color: branding.colors.primary }}
            >
              {step.number}
            </div>

            {/* Step Number Badge */}
            <div
              className="mb-3 inline-flex h-5.5 w-5.5 items-center justify-center rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: branding.colors.primary }}
            >
              {step.number}
            </div>

            {/* Icon */}
            <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-md text-lg" style={{ backgroundColor: step.iconBg }}>
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="mb-2 text-sm font-medium">{step.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
