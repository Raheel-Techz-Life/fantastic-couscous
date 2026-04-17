'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-40 pb-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            Privacy Policy
          </motion.h1>
          <div className="text-muted-foreground space-y-6">
            <p><strong>Effective Date:</strong> April 17, 2026</p>
            <p>
              At HAAZRI, we are committed to protecting the privacy of India's informal workforce. This policy explains how we collect, use, and safeguard your voice data and personal information.
            </p>
            <h2 className="text-xl font-bold text-foreground mt-8">1. Data Collected</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Phone number (captured via missed call/SMS)</li>
              <li>Voice recordings (captured via IVR)</li>
              <li>Vocal biometrics (for Digital Job ID signature)</li>
              <li>Inferred location (city level)</li>
            </ul>
            <h2 className="text-xl font-bold text-foreground mt-8">2. Purpose of Collection</h2>
            <p>
              We collect this data solely for job application processing, identity re-verification across the HAAZRI network, and building your portable Digital Job ID history.
            </p>
            <h2 className="text-xl font-bold text-foreground mt-8">3. DPDP Act Compliance</h2>
            <p>
              In accordance with the Digital Personal Data Protection Act (2023), you have the right to access your data, correct it, or request its erasure at any time.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
