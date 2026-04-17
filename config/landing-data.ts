// Editable configuration for Zero-Barrier Jobs landing page
export const landingConfig = {
  branding: {
    name: 'Zero-Barrier Jobs',
    logo: '●', // Teal dot
    colors: {
      primary: '#1D9E75',
      darkAccent: '#085041',
      lightBg: '#E1F5EE',
      darkBgAccent: '#0F6E56',
    },
  },

  navigation: {
    links: ['How it works', 'Features', 'Technology', 'Impact', 'Team'],
    cta: 'Get in touch',
  },

  hero: {
    headline: 'Job applications as simple as a <span>missed call</span>',
    description:
      'Voice-first, language-inclusive platform enabling anyone to apply for jobs in under 2 minutes — no literacy, no smartphone, no barriers.',
    buttons: [
      {
        label: 'Try a demo call',
        type: 'primary',
        icon: '📞',
      },
      {
        label: 'Watch the pitch',
        type: 'secondary',
        icon: '▶',
      },
    ],
    stats: [
      { number: '2 min', label: 'To apply for a job' },
      { number: '22+', label: 'Indian languages' },
      { number: '0', label: 'Literacy required' },
    ],
  },

  videoCarousel: {
    tabs: [
      {
        title: 'Demo: Worker applies via missed call',
        subtitle: 'IVR + BHASHINI voice flow in Hindi',
        background: '#085041',
      },
      {
        title: '1-tap SMS application flow',
        subtitle: 'Worker confirms with a single digit reply',
        background: '#0C447C',
      },
      {
        title: 'Employer WhatsApp dashboard',
        subtitle: 'Instant review and direct callback',
        background: '#3C3489',
      },
    ],
  },

  howItWorks: {
    tag: 'How it works',
    title: 'Six steps from zero to hired',
    description: 'No app. No internet. No literacy. Just a phone — and a voice.',
    steps: [
      {
        number: 1,
        icon: '📞',
        iconBg: '#E1F5EE',
        title: 'Worker gives a missed call',
        description:
          'A low-tech worker in rural India dials a toll-free number and disconnects. No charge, no data needed — the system initiates the callback automatically.',
      },
      {
        number: 2,
        icon: '🎙️',
        iconBg: '#E6F1FB',
        title: 'IVR captures voice in local language',
        description:
          'Our BHASHINI-powered IVR calls back and guides the worker through a multilingual voice menu. They speak naturally in Hindi, Kannada, Tamil, or 22+ languages.',
      },
      {
        number: 3,
        icon: '🪪',
        iconBg: '#EEEDFE',
        title: 'Digital Job ID is created',
        description:
          "A unique Digital Job ID is assigned. The worker's voice pitch becomes their biometric signature — enabling re-identification across future applications without passwords.",
      },
      {
        number: 4,
        icon: '💬',
        iconBg: '#FAECE7',
        title: 'SMS confirmation is sent',
        description:
          'A simple SMS lands on the worker\'s phone with a 1-tap reply code. They respond with a single digit to confirm their application — no typing required.',
      },
      {
        number: 5,
        icon: '📲',
        iconBg: '#E1F5EE',
        title: 'Employer reviews on WhatsApp',
        description:
          "Employers receive instant WhatsApp notifications with the worker's voice pitch, transcript, and profile. They can approve or schedule a callback with a single tap.",
      },
      {
        number: 6,
        icon: '⭐',
        iconBg: '#FAEEDA',
        title: 'Feedback builds digital credibility',
        description:
          "Post-job ratings and reviews accumulate on the worker's Digital Job ID — building a verifiable employment history that travels with them across every future application.",
      },
    ],
  },

  features: {
    tag: 'Key features',
    title: 'Built for real inclusion',
    description:
      'Every design decision was made for workers who have never used a smartphone — and employers who need efficiency.',
    items: [
      {
        icon: '🌐',
        title: 'BHASHINI multilingual voice flows',
        description:
          "Integrated with Digital India's language translation stack. Supports 22+ Indian languages — workers are heard in the language they grew up speaking.",
      },
      {
        icon: '📩',
        title: '1-tap SMS application',
        description:
          'A single SMS reply triggers an automated IVR callback. No forms, no data entry — the entire application happens over a voice call lasting under 90 seconds.',
      },
      {
        icon: '🔐',
        title: 'Voice pitch authentication',
        description:
          "The worker's unique vocal biometric serves as a password-free identity layer — enabling secure, portable Digital Job IDs without any hardware or app.",
      },
      {
        icon: '💼',
        title: 'WhatsApp employer dashboard',
        description:
          'Employers use a familiar interface. Applicant voice notes, transcripts, and ratings appear as WhatsApp messages for instant review and direct callback.',
      },
      {
        icon: '🏗️',
        title: 'Built on ONEST framework',
        description:
          "Fully compliant with India's Open Network for Education and Skilling — enabling interoperability with government skilling platforms and job marketplaces.",
      },
      {
        icon: '📊',
        title: 'Worker credibility system',
        description:
          'Post-job feedback and ratings accumulate into a portable reputation score — giving informal workers the digital employment history they\'ve never had access to before.',
      },
    ],
  },

  technology: {
    tag: 'Technology',
    title: 'Architecture at a glance',
    description:
      "Built on India's open digital infrastructure — scalable, standards-compliant, and designed for zero-connectivity edge cases.",
    pills: [
      { text: 'ONEST', color: 'teal' },
      { text: 'BHASHINI', color: 'teal' },
      { text: 'IVR', color: 'blue' },
      { text: 'WhatsApp Business API', color: 'blue' },
      { text: 'Voice Biometrics', color: 'purple' },
      { text: 'NLP / ASR', color: 'purple' },
      { text: 'Python', color: 'amber' },
      { text: 'Node.js', color: 'amber' },
      { text: 'SMS Gateway', color: 'gray' },
      { text: 'REST APIs', color: 'gray' },
    ],
    architecture: [
      { icon: '📞', label: 'Missed call', sublabel: 'Any phone', highlight: true },
      { icon: '🔁', label: 'IVR system', sublabel: 'Callback' },
      { icon: '🌐', label: 'BHASHINI', sublabel: 'ASR + NLU', highlight: true },
      { icon: '🪪', label: 'ONEST', sublabel: 'Job ID' },
      { icon: '💬', label: 'SMS / WA', sublabel: 'Confirm' },
      { icon: '✅', label: 'Employer', sublabel: 'Dashboard', highlight: true },
    ],
  },

  impact: {
    tag: 'Impact',
    title: 'Democratizing the Indian job market',
    description:
      'India has over 450 million informal workers. We\'re building the infrastructure to bring them into the formal economy — one missed call at a time.',
    stats: [
      { number: '450M+', label: 'Target user base — informal workers in India' },
      { number: '<2 min', label: 'End-to-end application time' },
      { number: '22+', label: 'Indian languages supported via BHASHINI' },
      { number: '0%', label: 'Literacy or smartphone required' },
    ],
  },

  team: {
    tag: 'Team',
    title: 'Built by four engineers',
    description:
      'Bringing voice-first job applications to India\'s informal workforce.',
    members: [
      {
        initials: 'VMK',
        name: 'Vishwanath M Koliwad',
        role: 'Full-stack development',
        badge: 'Team lead',
        avatarColor: 'teal',
      },
      {
        initials: 'RH',
        name: 'Raheel Hosmani',
        role: 'Voice & IVR integration',
        avatarColor: 'blue',
      },
      {
        initials: 'DR',
        name: 'Disha Raikar',
        role: 'BHASHINI & NLP',
        avatarColor: 'purple',
      },
      {
        initials: 'BD',
        name: 'Bhumika Dalabhanjan',
        role: 'Employer UX & WhatsApp API',
        avatarColor: 'coral',
      },
    ],
  },

  cta: {
    title: "Let's bring this to millions",
    description:
      "We're scaling Zero-Barrier Jobs to reach India's informal workforce.\nInterested in partnering, funding, or piloting?",
    buttons: [
      { label: 'Get in touch', type: 'white' },
      { label: 'View on GitHub', type: 'outline-white' },
    ],
  },

  footer: {
    tagline: 'Voice-first job application system for India\'s informal workforce. Built on ONEST + BHASHINI.',
    columns: [
      {
        title: 'Navigation',
        links: ['How it works', 'Features', 'Technology', 'Impact', 'Team'],
      },
      {
        title: 'Legal',
        links: ['Privacy policy', 'Terms of service', 'Accessibility statement', 'Data handling (DPDP Act 2023)'],
      },
    ],
    copyright: '© 2025 Zero-Barrier Jobs',
    location: 'Built in Bengaluru, India',
  },
};
