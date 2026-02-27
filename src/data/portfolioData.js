/**
 * Project data for the portfolio
 */
export const PROJECTS = [
  {
    id: 'finemart',
    category: 'company',
    name: 'Finemart',
    subtitle: 'E-Commerce Platform',
    summary: 'Full-featured e-commerce app with secure payments, cart management, and order tracking.',
    description:
      'A full-featured e-commerce application delivering seamless shopping experiences with secure payments, intelligent cart management, and real-time order tracking.',
    tags: ['Flutter', 'BLoC', 'REST API', 'Payment Gateway'],
    filterTags: ['Flutter', 'Payments'],
    bullets: ['Secure Payments', 'Order Tracking', 'Cart Management', 'Real-time Updates'],
    metricsBadge: null,
  },
  {
    id: 'ryba',
    category: 'company',
    name: 'Ryba',
    subtitle: 'Real-Time Messaging',
    summary: 'Real-time messaging platform with offline support and push notifications.',
    description:
      'A powerful real-time messaging platform built for seamless communication with offline support, push notifications, and robust message persistence.',
    tags: ['Flutter', 'Ably', 'BLoC', 'SQLite'],
    filterTags: ['Flutter', 'Realtime'],
    bullets: ['Real-time Chat', 'Push Notifications', 'Offline Support', 'Message Persistence'],
    metricsBadge: null,
  },
  {
    id: 'medlearning',
    category: 'freelance',
    name: 'MedLearning',
    subtitle: 'E-Learning Platform',
    summary: 'Subscription-based e-learning platform with video content and progress tracking.',
    description:
      'A subscription-based e-learning platform featuring video streaming, Stripe payment integration, and comprehensive progress tracking for educational content.',
    tags: ['Flutter', 'Video Streaming', 'Stripe', 'Firebase'],
    filterTags: ['Flutter', 'Video', 'Payments'],
    bullets: ['Video Streaming', 'Progress Tracking', 'Subscription Management', 'Offline Caching'],
    metricsBadge: '95%+ coverage',
    link: null,
    caseStudy: {
      problem: 'Client needed a scalable e-learning app with payments and offline access.',
      solution: 'Built a Flutter app with Stripe subscriptions, video streaming, and Hive for offline caching.',
      architecture: 'Clean Architecture, BLoC, modular feature structure.',
      challenges: 'Video buffering and subscription state sync; solved with queue-based downloads and webhook handling.',
      results: 'Delivered on schedule with 95%+ test coverage; smooth offline experience.',
    },
  },
  {
    id: 'empower',
    category: 'company',
    name: 'Empower',
    subtitle: 'Workflow Management',
    summary: 'Workflow-based assistance management system with complex state orchestration.',
    description:
      'An intelligent workflow-based assistance management system featuring complex state orchestration and clean architecture for enterprise-grade task automation.',
    tags: ['Flutter', 'Workflow Engine', 'Clean Architecture'],
    filterTags: ['Flutter', 'Backend'],
    bullets: ['Workflow Engine', 'Task Automation', 'State Orchestration', 'Clean Architecture'],
    metricsBadge: null,
  },
  {
    id: 'moura',
    category: 'company',
    name: 'Moura',
    subtitle: 'Online E-Learning Platform',
    summary: 'Online e-learning platform with course management and progress tracking.',
    description:
      'An online e-learning platform enabling educational content delivery, course management, and progress tracking for learners.',
    tags: ['Flutter', 'E-Learning', 'REST API', 'Clean Architecture'],
    filterTags: ['Flutter', 'Backend'],
    bullets: ['Course Management', 'Content Delivery', 'Progress Tracking', 'User Management'],
    metricsBadge: null,
  },
  {
    id: 'envoy',
    category: 'company',
    name: 'Envoy',
    subtitle: 'Lead Management System',
    summary: 'Lead management system for finance and insurance; Django backend.',
    description:
      'A lead management system for finance and insurance companies, built with Django backend to capture, qualify, and track leads through the sales pipeline.',
    tags: ['Django', 'Python', 'REST API', 'Lead Management'],
    filterTags: ['Backend'],
    bullets: ['Lead Capture & Qualification', 'Sales Pipeline', 'Backend API', 'Finance & Insurance'],
    metricsBadge: null,
  },
  {
    id: 'tuty',
    category: 'company',
    name: 'Tuty',
    subtitle: 'AI-Powered English Learning',
    summary: 'AI-powered online English learning platform mobile application.',
    description:
      'An AI-powered online English learning platform delivered as a mobile application, helping learners improve their English with personalized, intelligent lessons and practice.',
    tags: ['Flutter', 'AI', 'English Learning', 'Mobile'],
    filterTags: ['Flutter', 'Backend'],
    bullets: ['AI-Powered Lessons', 'Personalized Learning', 'Online Platform', 'Mobile App'],
    metricsBadge: null,
  },
  {
    id: 'finzo',
    category: 'personal',
    name: 'Finzo',
    subtitle: 'Money Manager',
    summary: 'Personal finance and notes app with local storage (Hive).',
    description:
      'A personal finance management app to track expenses, manage budgets, and monitor savings with intuitive charts and detailed financial insights.',
    tags: ['Flutter', 'Provider', 'Charts', 'Local Storage'],
    filterTags: ['Flutter'],
    bullets: ['Expense Tracking', 'Budget Management', 'Savings Goals', 'Financial Reports'],
    link: 'https://github.com/umakaranuma/moneyman',
    metricsBadge: null,
  },
  {
    id: 'snapchamp',
    category: 'personal',
    name: 'Snap Champ',
    subtitle: 'Photo Editor',
    summary: 'Photo editing app with filters, adjustments, and export.',
    description:
      'A powerful photo editing application with filters, adjustments, and creative tools to enhance and transform your photos with ease.',
    tags: ['Flutter', 'Image Processing', 'Filters', 'Canvas'],
    filterTags: ['Flutter'],
    bullets: ['Photo Filters', 'Image Adjustments', 'Creative Tools', 'Export Options'],
    link: 'https://gitlab.com/fynux.bussiness-group/snap_champ',
    metricsBadge: null,
  },
  {
    id: 'tunee',
    category: 'personal',
    name: 'Tunee',
    subtitle: 'MP3 Player',
    summary: 'Music player with playlist management and equalizer.',
    description:
      'A sleek and feature-rich music player with playlist management, equalizer controls, and seamless audio playback experience.',
    tags: ['Flutter', 'Audio Player', 'Equalizer', 'Playlist'],
    filterTags: ['Flutter'],
    bullets: ['MP3 Playback', 'Playlist Management', 'Equalizer', 'Background Playback'],
    link: 'https://gitlab.com/umakaran/mp3_player',
    metricsBadge: null,
  },
];

/**
 * Statistics data for the portfolio
 */
export const STATS = [
  { id: 'apps', label: 'Production Apps', value: '5+' },
  { id: 'experience', label: 'Years Experience', value: '3+' },
  { id: 'oss', label: 'Open Source Packages', value: '3' },
];

/**
 * Skills by category (name + proficiency)
 */
export const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'Dart', level: 'Expert' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Kotlin', level: 'Basic' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Flutter', level: 'Expert' },
      { name: 'Django REST Framework', level: 'Intermediate' },
    ],
  },
  {
    category: 'Architecture',
    items: [
      { name: 'Clean Architecture', level: 'Expert' },
      { name: 'MVVM', level: 'Advanced' },
      { name: 'SOLID Principles', level: 'Advanced' },
      { name: 'Modular Design', level: 'Advanced' },
    ],
  },
  {
    category: 'State Management',
    items: [
      { name: 'BLOC', level: 'Expert' },
      { name: 'Provider', level: 'Advanced' },
      { name: 'Riverpod', level: 'Intermediate' },
      { name: 'GetX', level: 'Intermediate' },
    ],
  },
  {
    category: 'Networking',
    items: [
      { name: 'REST APIs', level: 'Expert' },
      { name: 'GraphQL', level: 'Intermediate' },
      { name: 'Dio', level: 'Expert' },
      { name: 'HTTP', level: 'Advanced' },
      { name: 'JSON Serialization', level: 'Advanced' },
    ],
  },
  {
    category: 'Local Storage',
    items: [
      { name: 'Hive', level: 'Advanced' },
      { name: 'SQLite', level: 'Advanced' },
      { name: 'SharedPreferences', level: 'Advanced' },
      { name: 'Drift', level: 'Intermediate' },
    ],
  },
  {
    category: 'Firebase',
    items: [
      { name: 'Auth', level: 'Advanced' },
      { name: 'Firestore', level: 'Intermediate' },
      { name: 'FCM', level: 'Advanced' },
      { name: 'Crashlytics', level: 'Advanced' },
      { name: 'Analytics', level: 'Intermediate' },
      { name: 'Cloud Functions', level: 'Intermediate' },
    ],
  },
  {
    category: 'Testing',
    items: [
      { name: 'Unit Tests', level: 'Advanced' },
      { name: 'Widget Tests', level: 'Advanced' },
      { name: 'Integration Tests', level: 'Intermediate' },
      { name: 'Mocking', level: 'Advanced' },
    ],
  },
  {
    category: 'CI/CD & Tools',
    items: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub Actions', level: 'Intermediate' },
      { name: 'Codemagic', level: 'Intermediate' },
      { name: 'Bitrise', level: 'Intermediate' },
      { name: 'Fastlane', level: 'Intermediate' },
    ],
  },
  {
    category: 'Dev & Release',
    items: [
      { name: 'Build Flavors', level: 'Advanced' },
      { name: 'App Signing', level: 'Advanced' },
      { name: 'Play Store Publishing', level: 'Advanced' },
      { name: 'App Store Publishing', level: 'Intermediate' },
    ],
  },
];

/**
 * Social links data
 */
export const SOCIAL_LINKS = {
  github: 'https://github.com/umakaranuma',
  linkedin: 'https://linkedin.com/in/your-linkedin',
  instagram: 'https://instagram.com/your-instagram',
  twitter: 'https://twitter.com/your-twitter',
  email: 'mailto:umakaranuma1126@gmail.com',
  whatsapp: 'https://wa.me/94769214278',
  phone: '0769214278',
  cv: '/assets/cv.pdf',
};

/**
 * Portfolio owner information
 */
export const PORTFOLIO_INFO = {
  name: 'Uma',
  fullName: 'Umakaran Ampigaipagan',
  initials: 'UA',
  role: 'Senior Flutter Developer',
  titleLine: 'Senior Flutter Developer | Django/DRF',
  valueStatement: [
    'I build production-grade mobile apps and backends that scale.',
    'Clean Architecture, measurable impact, and team growth.',
  ],
  location: 'Jaffna, Sri Lanka',
  availability: 'Available for full-time, freelance & contract',
  experience: '3+ years experience',
  tagline: 'Building production-grade Flutter applications with clean architecture, beautiful UI, and a strong focus on performance and developer experience.',
  badge: 'Featured Work',
  about:
    'I am a dedicated professional with a strong background in software engineering who thrives on challenging projects that leverage my skills and expertise. Committed to driving organizational growth, I am deeply engaged in contributing my knowledge and talents to make a meaningful impact in the field of software development. I am a self-motivated learner, continuously seeking innovative solutions to solve complex problems in the realm of software engineering.',
};

/**
 * Trust strip – credibility row (above the fold impact)
 */
export const TRUST_STRIP = [
  '3+ years',
  '5+ production apps',
  '95%+ test coverage',
  'Published packages',
  'CI/CD & release',
];

/**
 * Highlights / impact cards (numbers that get attention)
 */
export const HIGHLIGHTS = [
  { value: '40%', label: 'Bug reduction (state management)' },
  { value: '30%', label: 'Faster startup (optimization)' },
  { value: '3', label: 'Juniors mentored' },
  { value: '95%+', label: 'Test coverage' },
  { value: '3', label: 'Packages published' },
];

/**
 * Open source / packages
 */
export const PACKAGES = [
  { name: 'Flutter packages', platform: 'Pub.dev', count: 2, description: 'Reusable Flutter packages for common patterns and utilities.' },
  { name: 'Python package', platform: 'PyPI', count: 1, description: 'Open source tooling for backend and automation.' },
];

/**
 * Professional experience (timeline)
 */
export const EXPERIENCE = [
  {
    role: 'Flutter Developer',
    company: 'Apptimus Tech (Pvt) Ltd.',
    dates: 'Jan 2023 - Present',
    location: 'Jaffna, Sri Lanka',
    tools: ['Flutter', 'BLoC', 'Dio', 'Firebase', 'Clean Architecture'],
    bullets: [
      'Architected and developed multiple production-grade Flutter applications using Clean Architecture and BLOC pattern, ensuring scalable and maintainable codebases',
      'Implemented comprehensive state management solutions using BLOC and Provider, reducing app state bugs by 40%',
      'Integrated REST APIs with Dio HTTP client, implementing robust error handling, token refresh mechanisms, and secure authentication flows',
      'Optimized app performance achieving 30% faster startup times and reduced memory footprint through efficient widget rendering and lazy loading',
      'Established code review workflows and coding standards, mentoring junior developers and improving team code quality',
      'Implemented Firebase services including Authentication, Cloud Messaging, Crashlytics monitoring, and Analytics tracking',
    ],
  },
  {
    role: 'Flutter Developer (Contract)',
    company: 'Code94 Labs',
    dates: 'Nov 2024 - Jan 2025',
    location: 'Remote',
    tools: ['Flutter', 'Stripe', 'Hive', 'Video streaming'],
    bullets: [
      'Developed MedLearning e-learning platform with video streaming, subscription management via Stripe, and offline content caching',
      'Implemented local data persistence using Hive and SharedPreferences for seamless offline-first user experience',
      'Delivered all milestones on schedule while maintaining 95%+ code coverage through unit and widget testing',
    ],
  },
];

/**
 * Key projects summary (for resume section)
 */
export const KEY_PROJECTS = [
  {
    name: 'Finemart',
    tags: 'Flutter | BLOC | REST API | Payment Gateway',
    description: 'Full-featured e-commerce app with secure payments, cart management, and order tracking',
  },
  {
    name: 'Ryba',
    tags: 'Flutter | Ably | BLOC | SQLite',
    description: 'Real-time messaging platform with offline support and push notifications',
  },
  {
    name: 'MedLearning',
    tags: 'Flutter | Video Streaming | Stripe | Firebase',
    description: 'Subscription-based e-learning platform with video content and progress tracking',
  },
  {
    name: 'Empower',
    tags: 'Flutter | Workflow Engine | Clean Architecture',
    description: 'Workflow-based assistance management system with complex state orchestration',
  },
  {
    name: 'Moura',
    tags: 'Flutter | E-Learning | REST API',
    description: 'Online e-learning platform with course management and progress tracking',
  },
  {
    name: 'Envoy',
    tags: 'Django | Python | Lead Management',
    description: 'Lead management system for finance and insurance companies; Django backend developer',
  },
  {
    name: 'Tuty',
    tags: 'Flutter | AI | English Learning | Mobile',
    description: 'AI-powered online English learning platform mobile application',
  },
];

/**
 * Education
 */
export const EDUCATION = {
  degree: 'National Diploma in Technology (IT)',
  institution: 'University of Moratuwa',
};

/**
 * Certifications
 */
export const CERTIFICATIONS = [
  'Flutter & Dart - The Complete Guide',
  'Google Associate Android Developer',
];

/**
 * Achievements
 */
export const ACHIEVEMENTS = [
  'Published 2 Flutter packages on Pub.dev',
  'Published 1 Python package on PyPI',
  'Delivered 5+ production-grade applications',
  'Mentored 3 junior developers',
];
