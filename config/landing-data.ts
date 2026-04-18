// Editable configuration for HAAZRI (Zero-Barrier Jobs) platform
export const landingConfig = {
  branding: {
    name: 'HAAZRI',
    logo: '/logo.jpg', // Path to new logo
    colors: {
      primary: '#FF5400',
      darkAccent: '#0D2344',
      lightBg: '#FFF9F5',
      darkBgAccent: '#1E293B',
    },
  },

  navigation: {
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Features', href: '/features' },
      { label: 'Technology', href: '/technology' },
      { label: 'Impact', href: '/impact' },
      { label: 'Employers', href: '/employers' },
      { label: 'Partners', href: '/partners' },
    ],
    cta: 'Get in touch',
  },

  home: {
    hero: {
      headline: 'The 48-Hour Talent Pipeline for India’s <span className="text-gradient italic">Next 450M</span>',
      description:
        'Stop losing hours on hiring. We solve the discovery gap for B2B informal labor with a zero-barrier, voice-first system that delivers verified workers in 24 hours.',
      buttons: [
        { label: 'Claim your pilot', type: 'primary', icon: '⚡' },
        { label: 'The Logic', type: 'secondary', icon: '💡' },
      ],
      stats: [
        { number: '24h', label: 'Talent match' },
        { number: '100%', label: 'Voice-verified' },
        { number: '₹0', label: 'Worker cost' },
      ],
    },
    demo: {
      tag: 'Live Demo',
      title: 'Experience the Zero-Barrier flow',
      tabs: [
        {
          title: 'Demo: Worker callback',
          subtitle: 'IVR + BHASHINI voice flow in Hindi',
          background: '#085041',
        },
        {
          title: '1-tap SMS flow',
          subtitle: 'Worker confirms with a single digit',
          background: '#0C447C',
        },
        {
          title: 'Employer Dashboard',
          subtitle: 'Instant review on WhatsApp',
          background: '#3C3489',
        },
      ],
    },
  },

  howItWorks: {
    tag: 'Journey',
    title: 'From missed call to milestone',
    description: 'A seamless, end-to-end loop designed for the informal economy.',
    workerJourney: [
      {
        step: 1,
        title: 'Missed call initiation',
        description: 'Toll-free, zero-charge, zero-data. Familiar pattern for rural India.',
        faq: 'What if I have no credit? (It works even with zero balance)',
      },
      {
        step: 2,
        title: 'IVR callback',
        description: 'BHASHINI multilingual voice menu. Speak naturally in your dialect.',
      },
      {
        step: 3,
        title: 'Digital Job ID',
        description: 'Voice biometric as identity. No passwords, no hardware needed.',
      },
      {
        step: 4,
        title: 'SMS confirmation',
        description: '1-digit reply. No typing, no forms, instant confirmation.',
      },
      {
        step: 5,
        title: 'Employer notification',
        description: 'WhatsApp card with your voice note and transcript.',
      },
      {
        step: 6,
        title: 'Credibility loop',
        description: 'Ratings build a portable, digital employment history.',
      },
    ],
    employerJourney: [
      {
        title: 'WhatsApp notifications',
        description: 'Receive applicants where you already live. No new portal to learn.',
      },
      {
        title: 'Applicant cards',
        description: 'Detailed view with voice, transcript, and reputation score.',
      },
      {
        title: '1-tap hiring',
        description: 'Approve, shortlist, or call back with a single button.',
      },
    ],
    faqs: [
      { q: 'What languages are supported?', a: '22+ scheduled Indian languages via BHASHINI.' },
      { q: 'Is it DPDP Act compliant?', a: 'Yes, we use consent-first data handling.' },
      { q: 'How is identity verified?', a: 'Vocal pitch biometrics ensure unique profiles.' },
    ],
  },

  features: {
    worker: [
      { title: 'BHASHINI Voice', desc: '22+ languages, auto-detect' },
      { title: 'Missed Call', desc: 'Zero-cost, feature-phone ready' },
      { title: '1-tap SMS', desc: '<90 sec total application time' },
      { title: 'Voice Biometric', desc: 'Hardware-free identity layer' },
    ],
    employer: [
      { title: 'WhatsApp Dashboard', desc: 'Zero onboarding, mobile-native' },
      { title: 'Instant Card', desc: 'Voice + transcript + score' },
      { title: '1-tap Shortlist', desc: 'Frictionless hiring actions' },
      { title: 'ONEST Bulk Post', desc: 'Broadcast to open network' },
    ],
    comparison: [
      { feature: 'Literacy Required', haazri: 'None', traditional: 'High' },
      { feature: 'Device', haazri: 'Any Phone', traditional: 'Smartphone' },
      { feature: 'Internet', haazri: 'Not Required', traditional: 'Required' },
      { feature: 'Time to Apply', haazri: '<2 min', traditional: '20+ min' },
    ],
  },

  technology: {
    architecture: [
      { item: 'ASR/TTS Engine', tech: 'BHASHINI', purpose: 'Multilingual Voice' },
      { item: 'Identity Layer', tech: 'Voice Biometrics', purpose: 'Secure Portability' },
      { item: 'Message Protocol', tech: 'ONEST / Beckn', purpose: 'Interoperability' },
      { item: 'Interface', tech: 'WhatsApp / SMS', purpose: 'Zero-Friction Access' },
    ],
    compliance: 'Fully DPDP Act 2023 compliant and built on India Stack open standards.',
  },

  impact: {
    metrics: [
      { label: 'Target Workforce', value: '450M+' },
      { label: 'Exclusion Rate', value: '90%' },
      { label: 'Languages', value: '22+' },
      { label: 'Literacy Barrier', value: '0%' },
    ],
    personas: [
      { name: 'Ramu', role: 'Security Guard', context: 'Feature phone user, Hindi speaker.' },
      { name: 'Sunita', role: 'Domestic Worker', context: 'No literacy, Rajasthani dialect.' },
      { name: 'Mahesh', role: 'Construction Labour', context: 'Seasonal migrant, Marathi speaker.' },
    ],
  },

  team: {
    members: [
      { initials: 'VMK', name: 'Vishwanath M Koliwad', role: 'Lead & Full-stack' },
      { initials: 'RH', name: 'Raheel Hosmani', role: 'Voice & IVR' },
      { initials: 'DR', name: 'Disha Raikar', role: 'BHASHINI & NLP' },
      { initials: 'BD', name: 'Bhumika Dalabhanjan', role: 'Employer UX & API' },
    ],
  },

  forms: {
    employer: {
      title: 'Hire from the next 450M',
      fields: ['Company Name', 'Contact Person', 'Phone', 'Email', 'City', 'Monthly Volume'],
    },
    partner: {
      title: 'Join the ecosystem',
      fields: ['Organisation', 'Role', 'Interest Type', 'Message'],
    },
  },

  footer: {
    tagline: 'Voice-first job application system for India\'s informal workforce. Built on ONEST + BHASHINI.',
    columns: [
      {
        title: 'Platform',
        links: [
          { label: 'How it works', href: '/how-it-works' },
          { label: 'Features', href: '/features' },
          { label: 'Technology', href: '/technology' },
          { label: 'Impact', href: '/impact' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'For Employers', href: '/employers' },
          { label: 'For Partners', href: '/partners' },
          { label: 'Newsroom', href: '/blog' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/legal/privacy' },
          { label: 'Terms', href: '/legal/terms' },
          { label: 'Data Handling', href: '/legal/data-handling' },
        ],
      },
    ],
    copyright: '© 2025 HAAZRI',
    location: 'Built in Bengaluru, India',
  },
  cta: {
    title: "Let's bring this to millions",
    description: "We're scaling HAAZRI to reach India's informal workforce.\nInterested in partnering, funding, or piloting?",
    buttons: [
      { label: 'Get in touch', type: 'white' },
      { label: 'View on GitHub', type: 'outline-white' },
    ],
  },
};
