'use client'

import { landingConfig } from '@/config/landing-data'

const avatarColors: Record<string, { bg: string; text: string }> = {
  teal: { bg: '#E1F5EE', text: '#0F6E56' },
  blue: { bg: '#E6F1FB', text: '#185FA5' },
  purple: { bg: '#EEEDFE', text: '#534AB7' },
  coral: { bg: '#FAECE7', text: '#993C1D' },
}

export function TeamSection() {
  const { branding, team } = landingConfig

  return (
    <section className="bg-gray-50 px-10 py-16 md:px-5 md:py-10" id="team">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: branding.colors.primary }}>
          {team.tag}
        </div>
        <h2 className="mb-3 text-2xl font-medium">{team.title}</h2>
        <p className="max-w-lg text-sm text-gray-600 leading-relaxed">{team.description}</p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
        {team.members.map((member, idx) => {
          const avatarColor = avatarColors[member.avatarColor as keyof typeof avatarColors]
          return (
            <div key={idx} className="rounded-lg border border-gray-200 bg-white p-5 text-center">
              {/* Avatar */}
              <div
                className="mx-auto mb-2.5 flex h-12 w-12 items-center justify-center rounded-full text-xs font-medium"
                style={{
                  backgroundColor: avatarColor.bg,
                  color: avatarColor.text,
                }}
              >
                {member.initials}
              </div>

              {/* Name */}
              <h4 className="mb-0.75 text-xs font-medium">{member.name}</h4>

              {/* Role */}
              <p className="text-xs text-gray-600">{member.role}</p>

              {/* Badge */}
              {member.badge && (
                <div
                  className="mt-1.5 inline-block rounded-full px-2 py-0.5 text-xs"
                  style={{
                    backgroundColor: avatarColors.teal.bg,
                    color: avatarColors.teal.text,
                  }}
                >
                  {member.badge}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
