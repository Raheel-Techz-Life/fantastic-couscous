export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  description: string;
  location: string;
  image: string;
  avatarColor: string;
  badge: string;
  socials: Array<{ name: string; url: string }>;
}

export interface LandingConfig {
  branding: {
    name: string;
    logo: string;
    colors: Record<string, string>;
  };
  navigation: {
    links: Array<{ label: string; href: string }>;
    cta: string;
  };
  home: {
    hero: {
      headline: string;
      description: string;
      buttons: Array<{ label: string; type: string; icon: string }>;
      stats: Array<{ number: string; label: string }>;
    };
    demo: {
      tag: string;
      title: string;
      tabs: Array<{ title: string; subtitle: string; background: string }>;
    };
  };
  problemStatement: {
    tag: string;
    headline: string;
    subheadline: string;
    painPoints: Array<{ who: string; icon: string; title: string; body: string }>;
    verdict: { label: string; quote: string };
  };
  howItWorks: {
    tag: string;
    title: string;
    description: string;
    workerJourney: Array<{ step: number; title: string; description: string; faq?: string }>;
    employerJourney: Array<{ title: string; description: string }>;
    faqs: Array<{ q: string; a: string }>;
  };
  features: {
    worker: Array<{ title: string; desc: string }>;
    employer: Array<{ title: string; desc: string }>;
    comparison: Array<{ feature: string; haazri: string; traditional: string }>;
  };
  technology: {
    architecture: Array<{ item: string; tech: string; purpose: string }>;
    compliance: string;
  };
  impact: {
    title: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
    personas: Array<{ name: string; role: string; context: string }>;
  };
  team: {
    title: string;
    tag: string;
    description: string;
    members: TeamMember[];
  };
  differentiators?: {
    monotonicWage: {
      title: string;
      description: string;
      badge: string;
    };
    nightBeforeAlerts: {
      title: string;
      description: string;
      badge: string;
    };
  };
  forms: Record<string, { title: string; fields: string[] }>;
  footer: {
    tagline: string;
    columns: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
    copyright: string;
    location: string;
  };
  cta: {
    title: string;
    description: string;
    buttons: Array<{ label: string; type: string }>;
  };
}

// Editable configuration for HAAZRI (Zero-Barrier Jobs) platform
export const landingConfig: LandingConfig = {
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
      { label: 'Home', href: '/' },
      { label: 'For Employers (B2B)', href: '/employers' },
      { label: 'For Government (B2G)', href: '/government' },
      { label: 'About Us / Team', href: '/about' },
      { label: 'Login / Dashboards', href: '/login' },
    ],
    cta: 'Get in touch',
  },

  home: {
    hero: {
      headline: "India's Voice-First Workforce OS",
      description:
        "Tier-2 India faces a massive market failure: employers spend weeks searching informal networks while 50% of ex-workers stay jobless. HAAZRI is a voice-first employment exchange built to solve trust, not just tech.",
      buttons: [
        { label: 'Claim your pilot', type: 'primary', icon: '⚡' },
        { label: 'See the problem', type: 'secondary', icon: '💡' },
      ],
      stats: [
        { number: '24h', label: 'Talent match' },
        { number: '90%', label: 'Retention rate' },
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
    tag: 'The Broken Reality',
    headline: 'The informal labour market is fundamentally disconnected.',
    subheadline:
      'Word-of-mouth is unscalable, leaving employers short-handed and workers in perpetual uncertainty.',
    painPoints: [
      {
        who: 'Employer (Shivanand)',
        icon: '🏭',
        title: 'Hiring is an exhausting, continuous crisis',
        body:
          'Spends weeks searching personal networks to find even one reliable worker. "Hiring itself is a very difficult task — we keep asking the same people again and again." After 15 years, the problem remains unresolved.',
      },
      {
        who: 'Employer (M Mahajan)',
        icon: '📦',
        title: 'Floods of applicants, but zero commitment',
        body:
          'Receives floods of irrelevant applications. Shortlisted candidates frequently no-show, wasting time and stalling operations. "Too many apply but none are serious — and the ones we call, they just don\'t come."',
      },
      {
        who: 'Worker (Suresh B.)',
        icon: '👷',
        title: "Invisible to the formal economy",
        body:
          'Trained but no platform to connect with employers. Relies entirely on word-of-mouth. "I don\'t know where to go — I keep running around but nothing happens." ~50% of workers stay jobless between gigs.',
      },
    ],
    verdict: {
      label: 'Unverified · Fragile · Exclusionary',
      quote:
        '"Informal sector employers and blue-collar workers have no trusted, accessible, and structured way to find each other — making every hire a costly, repeated, and mostly failed effort."',
    },
  },

  howItWorks: {
    tag: 'The Solution',
    title: 'Voice-First Frictionless Recruitment',
    description: 'Moving from "channel chaos" to a structured, trust-based employment exchange.',
    workerJourney: [
      {
        step: 1,
        title: 'Voice-First Onboarding',
        description: 'Toll-free IVR sign-up in 22+ languages. A spoken conversation is converted into a structured Job ID.',
        faq: 'Does it work on basic phones? (Yes, no smartphone or internet required)',
      },
      {
        step: 2,
        title: 'Verified Trust Engine',
        description: 'Unique Job Codes and digital trails track reliability, attendance, and behaviour.',
      },
      {
        step: 3,
        title: '30-Second Voice Pitch',
        description: 'Record a spoken intro. Employers hear your fit before calling, eliminating wasted visits.',
      },
      {
        step: 4,
        title: 'Targeted SMS Match',
        description: 'System sends targeted alerts based on location and skill match. Apply with a single tap.',
      },
      {
        step: 5,
        title: 'Candidate Backup System',
        description: 'If a worker fails to show up, the system auto-notifies the verified pool to recover the process.',
      },
      {
        step: 6,
        title: 'Economic Portability',
        description: 'Ratings build a portable digital record, opening doors to Govt. schemes like PM Vishwakarma.',
      },
    ],
    employerJourney: [
      {
        title: 'WhatsApp Job Post',
        description: 'Post requirements where you already live. No complex dashboards to learn.',
      },
      {
        title: 'Voice-Screened Review',
        description: 'Review verified transcripts and audio recordings of the 30-second pitches.',
      },
      {
        title: '24-Hour Guarantee',
        description: 'Get a verified, location-matched candidate within 24 hours or we find a replacement for free.',
      },
    ],
    faqs: [
      { q: 'How does it handle low literacy?', a: 'Entirely voice-based interaction via BHASHINI AI; no reading or writing required.' },
      { q: 'What is the "Mafia Offer"?', a: 'Verified candidates in 24h or we find a replacement at no extra cost.' },
      { q: 'Is it built for Tier-2 cities?', a: 'Yes, specifically engineered for the labor paradoxes of cities like Hubballi-Dharwad.' },
    ],
  },

  features: {
    worker: [
      { title: 'Literacy-Free', desc: 'Register via voice in 22+ languages' },
      { title: 'Trust Builder', desc: 'Build a verified work record' },
      { title: 'Zero Cost', desc: 'No agent fees, no internet needed' },
      { title: 'Govt. Bridge', desc: 'Access Mudra & Vishwakarma schemes' },
    ],
    employer: [
      { title: '24h Velocity', desc: 'Verified candidates in one day' },
      { title: 'No-Show Recovery', desc: 'Automated backup pool notifications' },
      { title: 'Voice Screening', desc: 'Hear the candidate before you call' },
      { title: 'WhatsApp Integrated', desc: 'Zero learning curve infrastructure' },
    ],
    comparison: [
      { feature: 'Hiring Channel', haazri: 'Structured Voice', traditional: 'Fragile Word-of-Mouth' },
      { feature: 'Trust Layer', haazri: 'Verified Ratings', traditional: 'Blind Referral / Gut' },
      { feature: 'Recovery', haazri: 'Auto-Backup Pool', traditional: 'Restart from Zero' },
      { feature: 'Worker Access', haazri: 'Any Phone / Voice', traditional: 'Smartphone / Literacy' },
    ],
  },

  differentiators: {
    monotonicWage: {
      title: 'Monotonic Wage System',
      description: 'Prioritizes continuous, stable daily income over maximum temporary wages. Helps workers maintain steady food on the table and builds employer reliability.',
      badge: 'Continuous Income'
    },
    nightBeforeAlerts: {
      title: 'Automated Night-Before Work Alerts',
      description: 'System automatically calls scheduled workers the night before to confirm their shift attendance, allowing immediate replacement routing if they decline.',
      badge: 'Zero No-Shows'
    }
  },

  technology: {
    architecture: [
      { item: 'ASR/TTS Engine', tech: 'BHASHINI', purpose: 'Multilingual Voice' },
      { item: 'Onboarding', tech: 'Toll-free IVR', purpose: 'Literacy-Free Access' },
      { item: 'Message Protocol', tech: 'ONEST / Beckn', purpose: 'Interoperable Exchange' },
      { item: 'Matching Engine', tech: 'Location-Aware AI', purpose: 'High Velocity Placement' },
    ],
    compliance: 'Fully DPDP Act 2023 compliant. Built on ONDC/ONEST and BHASHINI open standards.',
  },

  impact: {
    title: 'Solving a 15-Year Market Failure',
    description: 'HAAZRI targets the labour paradox where employers are desperate to hire while 50% of ex-workers remain jobless.',
    metrics: [
      { label: 'Worker Attrition', value: '90%' },
      { label: 'Problem Duration', value: '15+ yrs' },
      { label: 'Unclaimed Schemes', value: '₹Crores' },
      { label: 'Placement Target', value: '24 Hours' },
    ],
    personas: [
      { name: 'Shivanand', role: 'CEO, Uday Ikas', context: 'Desperate for reliable workers; tired of informal chaos.' },
      { name: 'M Mahajan', role: 'CEO, Shree Manjunath', context: 'Wastes hours on no-shows and irrelevant applicants.' },
      { name: 'Suresh B.', role: 'ITI Graduate', context: 'Jobless despite skills; no platform to reach employers.' },
    ],
  },

  team: {
    title: 'THE SQUAD',
    tag: 'The Builders',
    description: 'Just 4 young builders pushing unapologetically cool tech for the unorganized labor sector. Shipping fast, breaking barriers, and replacing ancient hiring loops with slick, modern infrastructure.',
    members: [
      {
        initials: 'VK',
        name: 'Vishwanath Koliwad',
        role: 'Principal Architect & Logic Lead',
        description: 'Cooking the core infrastructure that keeps HAAZRI breathing. Low-level optimization and high-performance server logic so things stay strictly no-cap when it actually matters.',
        location: 'Hubballi, Karnataka',
        image: '/vishwanath.jpg',
        avatarColor: 'blue',
        badge: 'Lead Builder',
        socials: [
          { name: 'PORTFOLIO', url: 'https://vk.vishwadev.tech/' }
        ]
      },
      {
        initials: 'BD',
        name: 'Bhumika Dalabhanjan',
        role: 'Chief of Ops & Strategy',
        description: 'Keeping the squad locked in and orchestrating the timeline. Making sure we don’t just write code, but actually deploy it seamlessly when the stakes are high.',
        location: 'Hubballi, Karnataka',
        image: '/bhumika.jpg',
        avatarColor: 'coral',
        badge: 'Strategist',
        socials: [
          { name: 'PORTFOLIO', url: 'https://brd.vishwadev.tech/' }
        ]
      },
      {
        initials: 'DR',
        name: 'Disha Raikar',
        role: 'Aesthetic Lead & Visionary',
        description: 'Bridging the gap between raw functionality and insanely slick interfaces. Bringing clean, next-gen visual systems to a sector that desperately needs a UI glow-up.',
        location: 'Hubballi, Karnataka',
        image: '/disha.jpg',
        avatarColor: 'purple',
        badge: 'Visionary',
        socials: [
          { name: 'PORTFOLIO', url: 'https://dr.vishwadev.tech/' }
        ]
      },
      {
        initials: 'RH',
        name: 'Raheel Hosmani',
        role: 'AI Systems & Speedrunner',
        description: 'High-frequency code shipper. Hooking up the autonomous AI systems and making sure our intelligence engines run blazing fast. If it ain’t quick, he don’t want it.',
        location: 'Hubballi, Karnataka',
        image: '/raheel.jpg',
        avatarColor: 'teal',
        badge: 'Shipper',
        socials: [
          { name: 'PORTFOLIO', url: 'https://rhlz.vishwadev.tech/' }
        ]
      },
    ],
  },

  forms: {
    employer: {
      title: 'Hire from the next 400M',
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
          { label: 'How it works', href: '/' },
          { label: 'For Employers', href: '/employers' },
          { label: 'For Government', href: '/government' },
          { label: 'About Us', href: '/about' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'For Employers', href: '/employers' },
          { label: 'Login Portal', href: '/login' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/legal/privacy' },
          { label: 'Terms of Service', href: '/legal/terms' },
        ],
      },
    ],
    copyright: '© 2026 HAAZRI',
    location: 'Built in Hubballi-Dharwad, India',
  },
  cta: {
    title: "Let's bring this to millions",
    description: "We're scaling HAAZRI to reach India's informal workforce.\nInterested in partnering, funding, or piloting?",
    buttons: [
      { label: 'Get in touch', type: 'white' },
      { label: 'View Portal', type: 'outline-white' },
    ],
  },
};
