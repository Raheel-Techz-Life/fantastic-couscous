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
      headline: 'The 48-Hour Talent Pipeline for India\'s <span className="text-gradient italic">Next 450M</span>',
      description:
        'Informal sector employers and blue-collar workers have no trusted, accessible way to find each other — making every hire a costly, repeated, and mostly failed effort. HAAZRI fixes the broken connection.',
      buttons: [
        { label: 'Claim your pilot', type: 'primary', icon: '⚡' },
        { label: 'See the problem', type: 'secondary', icon: '💡' },
      ],
      stats: [
        { number: '24h', label: 'Talent match' },
        { number: '90%', label: 'Attrition rate' },
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

  problemStatement: {
    tag: 'The One Big Problem',
    headline: 'Every hire is a costly, repeated, mostly failed effort.',
    subheadline:
      'Informal sector employers and blue-collar workers have no trusted, accessible, or structured way to find each other.',
    painPoints: [
      {
        who: 'Employer',
        icon: '🏭',
        title: 'The search restarts from zero — every time',
        body:
          '90% of informal workers leave within weeks. There is no platform, no pipeline, no system. Every vacancy means hours of phone calls, asking contacts, and failed screen calls — all over again. For 15 years, the same painful loop.',
      },
      {
        who: 'Worker',
        icon: '👷',
        title: "Months unemployed between jobs they can't reach",
        body:
          'Workers are locked out of every existing job platform — no smartphone, no literacy, no data. Government schemes worth lakhs go unclaimed. The right job exists. The right worker exists. They never meet.',
      },
      {
        who: 'System',
        icon: '🔗',
        title: 'Word-of-mouth is the only "solution" — and it\'s broken',
        body:
          'Naukri, LinkedIn, and every major platform are built for white-collar India. The ₹450M informal workforce is completely invisible to them. The only existing solution is unreliable, unscalable, and exclusionary.',
      },
    ],
    verdict: {
      label: 'Frequent · Costly · Poorly Solved',
      quote:
        '"Informal sector employers and blue-collar workers have no trusted, accessible, and structured way to find each other — making every hire a costly, repeated, and mostly failed effort."',
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
    title: 'The ₹450M Informal Economy',
    description: 'HAAZRI acts as the digital bridge, connecting the unorganized sector to modern work opportunities at an unprecedented scale.',
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
    title: 'KNOW THE TEAM',
    tag: '',
    description: '',
    members: [
      { 
        initials: 'VK', 
        name: 'Vishwanath Koliwad', 
        role: 'System Architect & Tactical Lead', 
        description: 'Architecting high-performance system logic and engineering the core infrastructure that powers Team Vidyut\'s winning builds. Focused on low-level optimization and scalable backend systems under pressure.',
        location: 'Hubballi, Karnataka',
        image: '/vishwanath.jpg',
        avatarColor: 'blue', 
        badge: '' 
      },
      { 
        initials: 'RH', 
        name: 'Raheel Hosmani', 
        role: 'Rapid Deployment Engineer', 
        description: 'Driving peak development velocity with high-frequency code output. Specializes in rapid prototyping and deploying autonomous AI systems and intelligence engines.',
        location: 'Hubballi, Karnataka',
        image: '/raheel.jpg',
        avatarColor: 'teal', 
        badge: '' 
      },
      { 
        initials: 'DR', 
        name: 'Disha Raikar', 
        role: 'UX Architecture & Visual Systems', 
        description: 'Bridging the gap between raw functional logic and high-fidelity human interfaces. Designing the visual systems that make Team Vidyut\'s prototypes stand out in the arena.',
        location: 'Hubballi, Karnataka',
        image: '/disha.jpg',
        avatarColor: 'purple', 
        badge: '' 
      },
      { 
        initials: 'BD', 
        name: 'Bhumika Dalabhanjan', 
        role: 'Operations & Strategic Lead', 
        description: 'Managing the roadmap for elite execution. Ensuring all technical pipelines are optimized for 100% uptime and seamless deployment during high-stakes hackathon events.',
        location: 'Hubballi, Karnataka',
        image: '/bhumika.jpg',
        avatarColor: 'coral', 
        badge: '' 
      },
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
