'use client'

import { landingConfig } from '@/config/landing-data'

export function Footer() {
  const { branding, footer } = landingConfig

  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* Main Footer */}
      <div className="grid grid-cols-3 gap-8 px-10 py-10 md:grid-cols-1 md:gap-4 md:px-5 md:py-8">
        {/* Brand Column */}
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: branding.colors.primary }} />
            {branding.name}
          </div>
          <p className="text-xs leading-relaxed text-gray-600">{footer.tagline}</p>
        </div>

        {/* Link Columns */}
        {footer.columns.map((col, idx) => (
          <div key={idx}>
            <h5 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-600">{col.title}</h5>
            <div className="space-y-1.5">
              {col.links.map((link) => (
                <a key={link} href="#" className="block text-xs text-gray-600 hover:text-gray-900">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 px-10 py-4 text-xs text-gray-600 md:px-5 md:flex-col md:gap-1 md:text-center">
        <div className="flex justify-between md:flex-col md:gap-1">
          <span>{footer.copyright}</span>
          <span>{footer.location}</span>
        </div>
      </div>
    </footer>
  )
}
