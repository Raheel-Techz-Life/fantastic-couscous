'use client'

import { landingConfig } from '@/config/landing-data'

export function CTASection() {
  const { branding, cta } = landingConfig

  return (
    <section
      className="px-10 py-16 text-center text-white md:px-5 md:py-10"
      style={{ backgroundColor: branding.colors.darkAccent }}
    >
      <h2 className="mb-3 text-3xl font-medium">{cta.title}</h2>
      <p className="mb-7 text-sm leading-relaxed opacity-70">{cta.description}</p>

      {/* Buttons */}
      <div className="flex justify-center gap-3 flex-wrap">
        {cta.buttons.map((btn) => (
          <button
            key={btn.label}
            className={`rounded-md px-5.5 py-2.75 text-xs font-medium transition-all ${
              btn.type === 'white'
                ? 'bg-white text-gray-900 hover:opacity-90'
                : 'border border-white/40 text-white hover:border-white/60'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </section>
  )
}
