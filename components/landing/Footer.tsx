'use client'

import Link from 'next/link'
import { landingConfig } from '@/config/landing-data'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const { branding, footer } = landingConfig

  return (
    <footer className="bg-card/40 relative border-t border-border/40 overflow-hidden pt-16 pb-8 px-6 md:px-10 lg:px-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-primary/5 rounded-b-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 text-2xl font-black tracking-tighter">
              <img src={branding.logo} alt={branding.name} className="h-10 w-auto object-contain rounded-xl" />
              <span>{branding.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              {footer.tagline}
            </p>
            <div className="text-xs text-muted-foreground">
              An initiative by{' '}
              <a 
                href="https://cognistruct.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-foreground hover:text-primary transition-colors underline underline-offset-2"
              >
                CogniStruct Pvt. Ltd.
              </a>
            </div>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:scale-110 shadow-sm">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footer.columns.map((col, idx) => (
            <div key={idx} className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">{col.title}</h5>
              <div className="flex flex-col gap-4">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith('http')
                  return isExternal ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors scale-0 group-hover:scale-100" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors scale-0 group-hover:scale-100" />
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated One-Line Domain Strip for Mobile & Desktop */}
        <div className="py-4 border-t border-border/60 flex items-center justify-center">
          <div className="inline-flex items-center justify-center flex-row flex-nowrap whitespace-nowrap gap-3 text-xs sm:text-sm font-semibold tracking-tight">
            <a 
              href="http://haazri.co.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              haazri.co.in
            </a>
            <span className="text-primary font-bold text-xs">•</span>
            <a 
              href="https://cognistruct.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              cognistruct.in
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <span>{footer.copyright}</span>
            <div className="w-1 h-1 rounded-full bg-border" />
            <span>{footer.location}</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-row flex-nowrap whitespace-nowrap">
            <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/legal/data-handling" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


