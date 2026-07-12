import type { Metadata } from 'next'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { ImpactClient } from './ImpactClient'

export const metadata: Metadata = {
  title: 'Impact | Scaling Dignity for India\'s Informal Workforce',
  description: 'Discover how HAAZRI is building digital work history and reducing friction for the 450 million workers in India\'s informal economy.',
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ImpactClient />
      <Footer />
    </main>
  )
}
