
export const caseStudies = [
  {
    id: 'fintech-payments',
    company: 'PayFlow Technologies',
    industry: 'FinTech',
    duration: '6 Months',
    teamSize: '5 Engineers',
    heroImage:
      'https://readdy.ai/api/search-image?query=A%20modern%20fintech%20digital%20payment%20platform%20dashboard%20displayed%20on%20a%20sleek%20monitor%20screen%20showing%20transaction%20analytics%20graphs%20and%20secure%20payment%20processing%20interface%20with%20warm%20orange%20accent%20lighting%20on%20dark%20background%20minimalist%20professional%20product%20photography&width=800&height=500&seq=cs-fintech-1&orientation=landscape',
    challenge:
      'PayFlow was experiencing critical bugs in production causing payment failures for 3% of transactions. Their small internal QA team could not keep up with rapid development, and each release felt like a gamble. Customer complaints were rising and merchant trust was eroding fast.',
    solution:
      'We embedded a dedicated 5-person QA team specializing in payment systems. We implemented comprehensive API testing, built an automated regression suite covering 2,000+ test cases, and established rigorous security testing protocols aligned with PCI-DDS standards. Our team worked in sync with their sprint cycles.',
    approach: [
      'API Test Automation',
      'PCI-DDS Compliance Testing',
      'CI/CD Pipeline Integration',
      'Real-time Monitoring Setup',
    ],
    results: [
      { metric: '99.97%', label: 'Transaction Success Rate', prev: 'from 97%' },
      { metric: '85%', label: 'Fewer Production Incidents', prev: 'quarter over quarter' },
      { metric: '4 hrs', label: 'Regression Cycle', prev: 'down from 3 days' },
      { metric: '$2.1M', label: 'Saved in Chargebacks', prev: 'annually' },
    ],
    testimonial: {
      quote:
        "SpurQLabs didn't just find bugs — they transformed how we think about quality. Our merchants now trust us completely, and we've seen a 40% increase in transaction volume since partnering with them.",
      name: 'James Mitchell',
      role: 'CTO, PayFlow Technologies',
      avatar:
        'https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20portrait%20of%20a%20confident%20Caucasian%20man%20in%20his%20early%2040s%20wearing%20a%20tailored%20navy%20blue%20suit%20with%20subtle%20smile%20against%20a%20soft%20light%20gray%20gradient%20studio%20background%20high%20quality%20business%20photography&width=100&height=100&seq=cs-avatar-1&orientation=squarish',
    },
    tags: ['Payment Systems', 'API Testing', 'Security', 'Automation'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'healthcare-platform',
    company: 'MedConnect Health',
    industry: 'Healthcare',
    duration: '12 Months',
    teamSize: '8 Engineers',
    heroImage:
      'https://readdy.ai/api/search-image?query=A%20modern%20healthcare%20telemedicine%20platform%20interface%20displayed%20on%20a%20laptop%20and%20tablet%20showing%20patient%20dashboard%20with%20appointment%20scheduling%20medical%20records%20and%20video%20consultation%20features%20warm%20soft%20lighting%20clean%20professional%20product%20photography%20on%20light%20background&width=800&height=500&seq=cs-health-2&orientation=landscape',
    challenge:
      "MedConnect's telehealth platform struggled with HIPAA compliance concerns and intermittent video call failures during patient consultations. With lives potentially at stake, they needed a QA partner who understood healthcare regulations and could ensure 100% reliability.",
    solution:
      'Our healthcare-specialized QA team conducted a comprehensive compliance audit and implemented HIPAA-focused testing protocols. We built automated accessibility testing, stress-tested the video infrastructure under various network conditions, and created a continuous monitoring system.',
    approach: [
      'HIPAA Compliance Audit',
      'Accessibility Testing (WCAG 2.1)',
      'Video Infrastructure Stress Testing',
      'Continuous Quality Monitoring',
    ],
    results: [
      { metric: '100%', label: 'HIPAA Audit Pass Rate', prev: 'zero violations' },
      { metric: '99.9%', label: 'Video Call Reliability', prev: 'up from 94%' },
      { metric: '0', label: 'Compliance Violations', prev: 'in 18 months' },
      { metric: '60%', label: 'Faster Feature Releases', prev: 'sprint velocity' },
    ],
    testimonial: {
      quote:
        "In healthcare, there's no room for error. SpurQLabs gave us the confidence to scale our platform knowing every feature meets the highest standards of quality and compliance.",
      name: 'Dr. Sarah Patel',
      role: 'CEO, MedConnect Health',
      avatar:
        'https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20portrait%20of%20an%20Indian%20woman%20doctor%20in%20her%20mid%2030s%20wearing%20a%20crisp%20white%20medical%20coat%20with%20warm%20genuine%20smile%20against%20a%20soft%20light%20gray%20gradient%20studio%20background%20high%20quality%20business%20photography&width=100&height=100&seq=cs-avatar-2&orientation=squarish',
    },
    tags: ['HIPAA', 'Accessibility', 'Performance', 'Healthcare'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'ecommerce-scale',
    company: 'ShopNova',
    industry: 'E-commerce',
    duration: '4 Months',
    teamSize: '6 Engineers',
    heroImage:
      'https://readdy.ai/api/search-image?query=A%20modern%20ecommerce%20website%20interface%20displayed%20on%20a%20large%20desktop%20monitor%20showing%20a%20product%20catalog%20with%20shopping%20cart%20checkout%20flow%20and%20order%20management%20dashboard%20warm%20ambient%20lighting%20clean%20minimal%20design%20professional%20product%20photography%20on%20neutral%20background&width=800&height=500&seq=cs-ecom-3&orientation=landscape',
    challenge:
      "ShopNova's platform crashed during their biggest Black Friday sale, resulting in $500K in lost revenue. Their checkout flow had multiple friction points causing 68% cart abandonment. They needed to ensure their platform could handle 10x traffic spikes.",
    solution:
      'We deployed a performance testing team that simulated Black Friday-level traffic and identified 47 bottlenecks. Our automation engineers rebuilt their checkout test suite, and we implemented continuous load testing in their CI/CD pipeline with comprehensive UX testing.',
    approach: [
      'Load & Stress Testing at Scale',
      'Checkout Flow Optimization',
      'CI/CD Performance Gates',
      'UX & Conversion Testing',
    ],
    results: [
      { metric: '0', label: 'Downtime on Black Friday', prev: 'zero seconds' },
      { metric: '42%', label: 'Less Cart Abandonment', prev: 'conversion boost' },
      { metric: '10x', label: 'Traffic Capacity', prev: 'infrastructure scale' },
      { metric: '$3.2M', label: 'Additional Revenue', prev: 'Black Friday alone' },
    ],
    testimonial: {
      quote:
        'After the Black Friday disaster, we were desperate. SpurQLabs not only fixed our performance issues but helped us build a platform that handles our biggest sales days without breaking a sweat.',
      name: 'Marcus Chen',
      role: 'VP of Engineering, ShopNova',
      avatar:
        'https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20portrait%20of%20an%20Asian%20man%20engineer%20in%20his%20early%2030s%20wearing%20a%20smart%20casual%20dark%20blazer%20with%20friendly%20confident%20expression%20against%20a%20soft%20light%20gray%20gradient%20studio%20background%20high%20quality%20business%20photography&width=100&height=100&seq=cs-avatar-3&orientation=squarish',
    },
    tags: ['Performance', 'Load Testing', 'E-commerce', 'Automation'],
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'saas-startup',
    company: 'CloudSync Pro',
    industry: 'SaaS',
    duration: '8 Months',
    teamSize: '4 Engineers',
    heroImage:
      'https://readdy.ai/api/search-image?query=A%20modern%20SaaS%20cloud%20platform%20dashboard%20interface%20displayed%20on%20a%20laptop%20screen%20showing%20real%20time%20data%20analytics%20team%20collaboration%20tools%20and%20project%20management%20features%20with%20clean%20minimal%20design%20soft%20natural%20lighting%20professional%20product%20photography%20on%20neutral%20background&width=800&height=500&seq=cs-saas-4&orientation=landscape',
    challenge:
      'As a fast-growing SaaS startup, CloudSync Pro was releasing features weekly but had no dedicated QA team. Bugs were slipping into production causing customer churn. They needed to scale quality without slowing down their aggressive roadmap.',
    solution:
      'We provided a flexible Testing-as-a-Service model that scaled with their sprint velocity. Our team integrated directly into their Slack and Jira workflows, providing real-time feedback. We built a comprehensive automation framework from scratch and established quality gates.',
    approach: [
      'Testing-as-a-Service Model',
      'Agile Sprint Integration',
      'Automation Framework Build',
      'Quality Gate Implementation',
    ],
    results: [
      { metric: '73%', label: 'Fewer Customer Bugs', prev: 'reported issues' },
      { metric: '2x', label: 'Faster Release Velocity', prev: 'sprint throughput' },
      { metric: '15%', label: 'Better Retention', prev: 'customer churn reduced' },
      { metric: '40%', label: 'Cost Savings', prev: 'vs in-house team' },
    ],
    testimonial: {
      quote:
        'SpurQLabs became our secret weapon. We ship twice as fast with half the bugs. Our customers noticed the quality improvement immediately, and our NPS score jumped 25 points.',
      name: 'Emily Rodriguez',
      role: 'Head of Product, CloudSync Pro',
      avatar:
        'https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20portrait%20of%20a%20Hispanic%20woman%20product%20manager%20in%20her%20early%2030s%20wearing%20a%20teal%20blouse%20with%20confident%20warm%20smile%20against%20a%20soft%20light%20gray%20gradient%20studio%20background%20high%20quality%20business%20photography&width=100&height=100&seq=cs-avatar-4&orientation=squarish',
    },
    tags: ['SaaS', 'Agile Testing', 'CI/CD', 'Automation'],
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 'enterprise-migration',
    company: 'GlobalBank Corp',
    industry: 'Enterprise',
    duration: '18 Months',
    teamSize: '20 Engineers',
    heroImage:
      'https://readdy.ai/api/search-image?query=Enterprise%20banking%20software%20platform%20interface%20displayed%20on%20multiple%20large%20monitors%20in%20a%20modern%20office%20showing%20financial%20dashboard%20with%20security%20features%20transaction%20monitoring%20and%20compliance%20reporting%20clean%20professional%20design%20warm%20office%20lighting%20product%20photography%20on%20neutral%20background&width=800&height=500&seq=cs-bank-5&orientation=landscape',
    challenge:
      "GlobalBank was migrating their legacy core banking system to a modern cloud platform — a $50M project with zero tolerance for errors. They needed a QA partner with enterprise experience who could validate millions of data records and ensure regulatory compliance.",
    solution:
      'We assembled a 20-person specialized team for the 18-month migration. Our approach included automated data validation scripts verifying 50M+ records, comprehensive regression testing across 500+ banking scenarios, and parallel run testing to ensure zero discrepancies.',
    approach: [
      'Data Migration Validation',
      'Parallel Run Testing',
      'Regulatory Compliance Testing',
      'End-to-End Banking Scenarios',
    ],
    results: [
      { metric: '100%', label: 'Data Migration Accuracy', prev: '50M+ records' },
      { metric: '0', label: 'Critical Production Defects', prev: 'at go-live' },
      { metric: '3 mo', label: 'Ahead of Schedule', prev: 'early delivery' },
      { metric: '$8M', label: 'Saved in Rework Costs', prev: 'estimated savings' },
    ],
    testimonial: {
      quote:
        "This was the most complex project in our bank's history. SpurQLabs' meticulous approach and deep banking expertise gave our board the confidence to proceed. The flawless go-live was a testament to their quality.",
      name: 'Robert Thompson',
      role: 'CIO, GlobalBank Corp',
      avatar:
        'https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20portrait%20of%20a%20distinguished%20Caucasian%20man%20senior%20executive%20in%20his%20early%2050s%20wearing%20a%20dark%20formal%20suit%20with%20authoritative%20expression%20against%20a%20soft%20light%20gray%20gradient%20studio%20background%20high%20quality%20business%20photography&width=100&height=100&seq=cs-avatar-5&orientation=squarish',
    },
    tags: ['Enterprise', 'Data Migration', 'Banking', 'Compliance'],
    color: 'from-cyan-500 to-sky-500',
  },
  {
    id: 'mobile-fitness',
    company: 'FitTrack',
    industry: 'Mobile',
    duration: '5 Months',
    teamSize: '4 Engineers',
    heroImage:
      'https://readdy.ai/api/search-image?query=A%20modern%20fitness%20tracking%20mobile%20application%20interface%20displayed%20on%20a%20smartphone%20showing%20workout%20dashboard%20with%20health%20metrics%20progress%20charts%20and%20wearable%20device%20sync%20features%20clean%20modern%20design%20natural%20warm%20lighting%20professional%20product%20photography%20on%20neutral%20background&width=800&height=500&seq=cs-mobile-6&orientation=landscape',
    challenge:
      "FitTrack's mobile app had a 2.8-star rating due to crashes, sync issues with wearables, and battery drain problems. User reviews were brutal, and they were losing ground to competitors. They needed to turn around app quality fast.",
    solution:
      'Our mobile testing specialists conducted device compatibility testing across 200+ device/OS combinations. We identified and helped fix critical memory leaks, optimized background sync processes, and established automated testing for all major wearable integrations.',
    approach: [
      '200+ Device Compatibility Testing',
      'Memory Leak Detection',
      'Wearable Integration Testing',
      'Crash Analytics & Monitoring',
    ],
    results: [
      { metric: '4.7★', label: 'App Store Rating', prev: 'up from 2.8★' },
      { metric: '94%', label: 'Crash Rate Reduction', prev: 'stability boost' },
      { metric: '200+', label: 'Devices Certified', prev: 'full coverage' },
      { metric: '3x', label: 'Daily Active Users', prev: 'user growth' },
    ],
    testimonial: {
      quote:
        "Our app went from being roasted in reviews to being featured by Apple. SpurQLabs' mobile expertise saved our product and probably our company. The turnaround was remarkable.",
      name: 'Alex Kim',
      role: 'Founder & CEO, FitTrack',
      avatar:
        'https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20portrait%20of%20a%20Korean%20man%20startup%20founder%20in%20his%20early%2030s%20wearing%20a%20casual%20smart%20shirt%20with%20energetic%20confident%20smile%20against%20a%20soft%20light%20gray%20gradient%20studio%20background%20high%20quality%20business%20photography&width=100&height=100&seq=cs-avatar-6&orientation=squarish',
    },
    tags: ['Mobile Testing', 'Device Compatibility', 'Wearables', 'Performance'],
    color: 'from-violet-500 to-indigo-500',
  },
];

export const industries = [
  { name: 'FinTech', icon: 'ri-bank-card-line', count: '120+', color: 'bg-orange-50 text-orange-500' },
  { name: 'Healthcare', icon: 'ri-heart-pulse-line', count: '85+', color: 'bg-emerald-50 text-emerald-500' },
  { name: 'E-commerce', icon: 'ri-shopping-bag-line', count: '150+', color: 'bg-rose-50 text-rose-500' },
  { name: 'SaaS', icon: 'ri-cloud-line', count: '200+', color: 'bg-amber-50 text-amber-500' },
  { name: 'Enterprise', icon: 'ri-building-line', count: '45+', color: 'bg-cyan-50 text-cyan-500' },
  { name: 'Mobile', icon: 'ri-smartphone-line', count: '90+', color: 'bg-violet-50 text-violet-500' },
];

export const aggregateStats = [
  { value: 500, suffix: '+', label: 'Projects Delivered', icon: 'ri-folder-check-line' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: 'ri-emotion-happy-line' },
  { value: 85, suffix: '%', label: 'Avg Bug Reduction', icon: 'ri-bug-line' },
  { value: 50, suffix: 'M+', label: 'Client Savings', prefix: '$', icon: 'ri-money-dollar-circle-line' },
];

export const clientLogos = [
  { name: 'PayFlow', industry: 'FinTech' },
  { name: 'MedConnect', industry: 'Healthcare' },
  { name: 'ShopNova', industry: 'E-commerce' },
  { name: 'CloudSync', industry: 'SaaS' },
  { name: 'GlobalBank', industry: 'Enterprise' },
  { name: 'FitTrack', industry: 'Mobile' },
];
