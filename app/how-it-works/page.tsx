import type { Metadata } from 'next'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { HowItWorksClient } from './HowItWorksClient'

export const metadata: Metadata = {
  title: 'How It Works | Voice-First Job Application Flow',
  description: 'Learn how HAAZRI simplifies the job application process for informal workers using missed calls and BHASHINI-powered IVR callback.',
}

export default function HowItWorksPage() {
  const { howItWorks } = landingConfig

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': howItWorks.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <HowItWorksClient />
      <Footer />
    </main>
  )
}

