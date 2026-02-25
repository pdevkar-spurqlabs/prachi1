
export const podcastStats = [
  { label: 'Episodes', value: 48, suffix: '+', icon: 'ri-mic-line' },
  { label: 'Total Views', value: 120, suffix: 'K+', icon: 'ri-eye-line' },
  { label: 'Subscribers', value: 15, suffix: 'K+', icon: 'ri-user-heart-line' },
  { label: 'Avg Duration', value: 35, suffix: ' min', icon: 'ri-time-line' },
];

export interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  duration: string;
  views: string;
  season: number;
  category: string;
  guest: string;
  guestRole: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 1,
    title: 'The Future of AI in Software Testing',
    description:
      'We explore how artificial intelligence is revolutionizing the QA landscape, from self-healing test scripts to predictive defect analysis. Our guest shares real-world examples of AI-driven testing transformations.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Jan 15, 2025',
    duration: '42:18',
    views: '12.4K',
    season: 2,
    category: 'AI & Automation',
    guest: 'Dr. Sarah Mitchell',
    guestRole: 'AI Research Lead, TestAI Labs',
  },
  {
    id: 2,
    title: 'Shift-Left Testing: Why Early QA Wins',
    description:
      'Discover why integrating testing earlier in the development lifecycle dramatically reduces costs and improves product quality. Real metrics and strategies from industry leaders.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Jan 8, 2025',
    duration: '38:45',
    views: '9.8K',
    season: 2,
    category: 'Best Practices',
    guest: 'James Rodriguez',
    guestRole: 'VP of Engineering, CloudScale',
  },
  {
    id: 3,
    title: 'Performance Testing at Scale: Lessons from Netflix',
    description:
      'An inside look at how top streaming platforms handle performance testing for millions of concurrent users. Chaos engineering, load simulation, and resilience patterns discussed.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Dec 20, 2024',
    duration: '51:30',
    views: '18.2K',
    season: 2,
    category: 'Performance',
    guest: 'Priya Sharma',
    guestRole: 'Senior SRE, StreamTech',
  },
  {
    id: 4,
    title: 'Security Testing in the Age of Zero Trust',
    description:
      'With cyber threats evolving daily, learn how modern security testing frameworks adapt to zero-trust architectures. Penetration testing, SAST, DAST, and beyond.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Dec 12, 2024',
    duration: '44:55',
    views: '14.1K',
    season: 2,
    category: 'Security',
    guest: 'Marcus Chen',
    guestRole: 'CISO, FinGuard Systems',
  },
  {
    id: 5,
    title: 'Building a World-Class QA Team from Scratch',
    description:
      'From hiring your first tester to scaling a 50-person QA department. Culture, processes, tools, and the leadership mindset needed to build quality-first teams.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Dec 5, 2024',
    duration: '36:20',
    views: '11.7K',
    season: 2,
    category: 'Leadership',
    guest: 'Emily Watson',
    guestRole: 'QA Director, SpurQLabs',
  },
  {
    id: 6,
    title: 'Mobile Testing Strategies for 2025',
    description:
      'Cross-platform testing, device farms, real device vs emulator debates, and the latest in mobile automation frameworks. Everything you need for flawless mobile apps.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Nov 28, 2024',
    duration: '40:10',
    views: '8.5K',
    season: 2,
    category: 'AI & Automation',
    guest: 'Alex Kim',
    guestRole: 'Mobile QA Lead, AppForge',
  },
  {
    id: 7,
    title: 'CI/CD Pipelines: Testing in the Fast Lane',
    description:
      'How to design test suites that keep up with rapid deployment cycles. Parallel execution, smart test selection, and pipeline optimization techniques.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Nov 15, 2024',
    duration: '33:42',
    views: '10.3K',
    season: 1,
    category: 'Best Practices',
    guest: 'David Park',
    guestRole: 'DevOps Architect, PipelineIO',
  },
  {
    id: 8,
    title: 'Accessibility Testing: Building for Everyone',
    description:
      'Why accessibility testing is not optional anymore. WCAG compliance, assistive technology testing, and creating inclusive digital experiences for all users.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Nov 1, 2024',
    duration: '37:15',
    views: '7.9K',
    season: 1,
    category: 'Best Practices',
    guest: 'Lisa Thompson',
    guestRole: 'Accessibility Consultant',
  },
  {
    id: 9,
    title: 'API Testing Deep Dive: Beyond Status Codes',
    description:
      'Contract testing, schema validation, performance benchmarks, and security scanning for APIs. A comprehensive guide to ensuring your APIs are bulletproof.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Oct 20, 2024',
    duration: '45:08',
    views: '13.6K',
    season: 1,
    category: 'Performance',
    guest: 'Raj Patel',
    guestRole: 'API Architect, DataBridge',
  },
  {
    id: 10,
    title: 'From Manual to Automation: A Tester\'s Journey',
    description:
      "A candid conversation about transitioning from manual testing to automation engineering. Skills to learn, mindset shifts, and career growth opportunities.",
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Oct 10, 2024',
    duration: '39:22',
    views: '16.8K',
    season: 1,
    category: 'Leadership',
    guest: 'Nina Kowalski',
    guestRole: 'Senior SDET, SpurQLabs',
  },
  {
    id: 11,
    title: 'Test Data Management: The Hidden Challenge',
    description:
      'Managing test data at scale is one of the biggest pain points in QA. Learn about synthetic data generation, data masking, and environment provisioning strategies.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Sep 25, 2024',
    duration: '34:50',
    views: '6.2K',
    season: 1,
    category: 'Best Practices',
    guest: 'Tom Bradley',
    guestRole: 'Data Engineer, TestVault',
  },
  {
    id: 12,
    title: 'The ROI of Quality: Making the Business Case',
    description:
      'How to quantify the value of QA to stakeholders. Cost of defects, release velocity metrics, and building dashboards that executives actually care about.',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'Sep 12, 2024',
    duration: '41:35',
    views: '9.1K',
    season: 1,
    category: 'Leadership',
    guest: 'Catherine Lee',
    guestRole: 'CTO, QualityFirst Inc.',
  },
];

export const categories = ['All', 'AI & Automation', 'Best Practices', 'Performance', 'Security', 'Leadership'];
