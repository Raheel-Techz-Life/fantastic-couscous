'use client'

import { landingConfig } from '@/config/landing-data'

const pillColors: Record<string, { bg: string; text: string; border: string }> = {
  teal: { bg: '#E1F5EE', text: '#0F6E56', border: '#5DCAA5' },
  blue: { bg: '#E6F1FB', text: '#185FA5', border: '#85B7EB' },
  purple: { bg: '#EEEDFE', text: '#534AB7', border: '#AFA9EC' },
  amber: { bg: '#FAEEDA', text: '#854F0B', border: '#EF9F27' },
  gray: { bg: '#F5F5F5', text: '#6B7280', border: '#D1D5DB' },
}

export function TechnologySection() {
  const { branding, technology } = landingConfig

  return (
    <section className="bg-gray-50 px-10 py-16 md:px-5 md:py-10" id="technology">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: branding.colors.primary }}>
          {technology.tag}
        </div>
        <h2 className="mb-3 text-2xl font-medium">{technology.title}</h2>
        <p className="max-w-lg text-sm text-gray-600 leading-relaxed">{technology.description}</p>
      </div>

      {/* Pills */}
      <div className="mb-8 flex flex-wrap gap-2.5">
        {technology.pills.map((pill, idx) => {
          const colors = pillColors[pill.color as keyof typeof pillColors]
          return (
            <span
              key={idx}
              className="rounded-full border px-3.5 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: colors.bg,
                color: colors.text,
                borderColor: colors.border,
              }}
            >
              {pill.text}
            </span>
          )
        })}
      </div>

      {/* Architecture Flow */}
      <div className="flex items-center gap-0 overflow-x-auto py-4">
        {technology.architecture.map((item, idx) => (
          <div key={idx} className="flex items-center gap-0">
            {/* Box */}
            <div
              className="flex flex-shrink-0 flex-col items-center justify-center rounded-md border px-4 py-3 text-center"
              style={
                item.highlight
                  ? {
                      borderColor: branding.colors.primary,
                      backgroundColor: 'white',
                    }
                  : {
                      borderColor: '#D1D5DB',
                      backgroundColor: 'white',
                    }
              }
            >
              <div className="text-base">{item.icon}</div>
              <div
                className="mt-1 text-xs font-medium"
                style={item.highlight ? { color: branding.colors.darkBgAccent } : { color: '#374151' }}
              >
                {item.label}
              </div>
              <div className="mt-0.5 text-xs text-gray-600">{item.sublabel}</div>
            </div>

            {/* Arrow */}
            {idx < technology.architecture.length - 1 && (
              <div className="flex-shrink-0 px-1.5 text-sm text-gray-600">→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
