'use client'

import Link from 'next/link'
import { landingConfig } from '@/config/landing-data'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const { branding, footer } = landingConfig

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span>{branding.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              {footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footer.columns.map((col, idx) => (
            <div key={idx} className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">{col.title}</h5>
              <div className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
          <div className="flex items-center gap-6">
            <span>{footer.copyright}</span>
            <div className="w-1 h-1 rounded-full bg-border" />
            <span>{footer.location}</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/legal/data-handling" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


