import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../home/components/Footer';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo: string;
  heroImage: string;
  challenge: string;
  solution: string;
  results: { metric: string; description: string }[];
  testimonial: { quote: string; name: string; role: string; avatar: string };
  tags: string[];
}

export default function StoriesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedStory, setExpandedStory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filters = ['All', 'FinTech', 'Healthcare', 'E-commerce', 'SaaS', 'Enterprise'];

  const caseStudies: CaseStudy[] = [
    {
      id: 'fintech-payments',
      company: 'PayFlow Technologies',
      industry: 'FinTech',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20fintech%20company%20logo%20icon%20abstract%20geometric%20shape%20in%20orange%20and%20dark%20gray%20colors%20on%20white%20background%20clean%20vector%20style&width=120&height=120&seq=logo1&orientation=squarish',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20fintech%20mobile%20payment%20application%20interface%20on%20smartphone%20screen%20showing%20transaction%20dashboard%20with%20charts%20and%20payment%20buttons%20clean%20minimal%20design%20warm%20lighting%20professional%20product%20photography&width=800&height=500&seq=case1&orientation=landscape',
      challenge: 'PayFlow was experiencing critical bugs in production that were causing payment failures for 3% of transactions. Their small internal QA team couldn\'t keep up with the rapid development pace, and each release felt like a gamble. Customer complaints were rising, and they were losing merchant trust.',
      solution: 'We embedded a dedicated 5-person QA team that specialized in payment systems testing. We implemented comprehensive API testing, built an automated regression suite covering 2,000+ test cases, and established a rigorous security testing protocol. Our team worked in sync with their sprint cycles, providing same-day feedback on new features.',
      results: [
        { metric: '99.97%', description: 'Transaction success rate (up from 97%)' },
        { metric: '85%', description: 'Reduction in production incidents' },
        { metric: '4 hours', description: 'Regression cycle (down from 3 days)' },
        { metric: '$2.1M', description: 'Saved in potential chargebacks annually' }
      ],
      testimonial: {
        quote: 'SpurQLabs didn\'t just find bugs—they transformed how we think about quality. Our merchants now trust us completely, and we\'ve seen a 40% increase in transaction volume since partnering with them.',
        name: 'James Mitchell',
        role: 'CTO, PayFlow Technologies',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Caucasian%20man%20executive%20in%20his%2040s%20wearing%20a%20navy%20suit%20with%20confident%20smile%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait&width=100&height=100&seq=avatar1&orientation=squarish'
      },
      tags: ['Payment Systems', 'API Testing', 'Security Testing', 'Automation']
    },
    {
      id: 'healthcare-platform',
      company: 'MedConnect Health',
      industry: 'Healthcare',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20healthcare%20company%20logo%20icon%20abstract%20medical%20cross%20shape%20in%20teal%20and%20dark%20gray%20colors%20on%20white%20background%20clean%20vector%20style&width=120&height=120&seq=logo2&orientation=squarish',
      heroImage: 'https://readdy.ai/api/search-image?query=Healthcare%20telemedicine%20platform%20interface%20on%20laptop%20screen%20showing%20patient%20dashboard%20with%20appointment%20scheduling%20and%20medical%20records%20clean%20modern%20design%20soft%20lighting%20professional%20product%20photography&width=800&height=500&seq=case2&orientation=landscape',
      challenge: 'MedConnect\'s telehealth platform was struggling with HIPAA compliance concerns and intermittent video call failures during patient consultations. With lives potentially at stake, they needed a QA partner who understood healthcare regulations and could ensure 100% reliability.',
      solution: 'Our healthcare-specialized QA team conducted a comprehensive compliance audit and implemented HIPAA-focused testing protocols. We built automated accessibility testing, stress-tested the video infrastructure under various network conditions, and created a continuous monitoring system for real-time quality metrics.',
      results: [
        { metric: '100%', description: 'HIPAA compliance audit pass rate' },
        { metric: '99.9%', description: 'Video call reliability (up from 94%)' },
        { metric: '0', description: 'Compliance violations in 18 months' },
        { metric: '60%', description: 'Faster feature releases' }
      ],
      testimonial: {
        quote: 'In healthcare, there\'s no room for error. SpurQLabs gave us the confidence to scale our platform knowing every feature meets the highest standards of quality and compliance. They\'re not just testers—they\'re healthcare quality experts.',
        name: 'Dr. Sarah Patel',
        role: 'CEO, MedConnect Health',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20woman%20doctor%20executive%20in%20her%2030s%20wearing%20a%20white%20coat%20with%20warm%20smile%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait&width=100&height=100&seq=avatar2&orientation=squarish'
      },
      tags: ['HIPAA Compliance', 'Accessibility', 'Performance Testing', 'Healthcare']
    },
    {
      id: 'ecommerce-scale',
      company: 'ShopNova',
      industry: 'E-commerce',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20ecommerce%20company%20logo%20icon%20abstract%20shopping%20bag%20shape%20in%20coral%20and%20dark%20gray%20colors%20on%20white%20background%20clean%20vector%20style&width=120&height=120&seq=logo3&orientation=squarish',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20ecommerce%20website%20interface%20on%20desktop%20monitor%20showing%20product%20catalog%20with%20shopping%20cart%20and%20checkout%20flow%20clean%20minimal%20design%20warm%20ambient%20lighting%20professional%20product%20photography&width=800&height=500&seq=case3&orientation=landscape',
      challenge: 'ShopNova\'s platform crashed during their biggest Black Friday sale, resulting in $500K in lost revenue. Their checkout flow had multiple friction points causing 68% cart abandonment. They needed to ensure their platform could handle 10x traffic spikes without breaking.',
      solution: 'We deployed a performance testing team that simulated Black Friday-level traffic and identified 47 bottlenecks. Our automation engineers rebuilt their checkout test suite, and we implemented continuous load testing in their CI/CD pipeline. We also conducted comprehensive UX testing to optimize the purchase flow.',
      results: [
        { metric: '0', description: 'Downtime during next Black Friday' },
        { metric: '42%', description: 'Reduction in cart abandonment' },
        { metric: '10x', description: 'Traffic capacity increase' },
        { metric: '$3.2M', description: 'Additional Black Friday revenue' }
      ],
      testimonial: {
        quote: 'After the Black Friday disaster, we were desperate. SpurQLabs not only fixed our performance issues but helped us build a platform that now handles our biggest sales days without breaking a sweat. Best investment we ever made.',
        name: 'Marcus Chen',
        role: 'VP of Engineering, ShopNova',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Asian%20man%20engineer%20in%20his%2030s%20wearing%20a%20casual%20blazer%20with%20friendly%20expression%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait&width=100&height=100&seq=avatar3&orientation=squarish'
      },
      tags: ['Performance Testing', 'Load Testing', 'E-commerce', 'Automation']
    },
    {
      id: 'saas-startup',
      company: 'CloudSync Pro',
      industry: 'SaaS',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20SaaS%20company%20logo%20icon%20abstract%20cloud%20sync%20shape%20in%20sky%20blue%20and%20dark%20gray%20colors%20on%20white%20background%20clean%20vector%20style&width=120&height=120&seq=logo4&orientation=squarish',
      heroImage: 'https://readdy.ai/api/search-image?query=Modern%20SaaS%20dashboard%20interface%20on%20laptop%20screen%20showing%20data%20analytics%20charts%20and%20team%20collaboration%20features%20clean%20minimal%20design%20soft%20natural%20lighting%20professional%20product%20photography&width=800&height=500&seq=case4&orientation=landscape',
      challenge: 'As a fast-growing SaaS startup, CloudSync Pro was releasing features weekly but had no dedicated QA team. Bugs were slipping into production, causing customer churn. They needed to scale quality without slowing down their aggressive roadmap.',
      solution: 'We provided a flexible Testing-as-a-Service model that scaled with their sprint velocity. Our team integrated directly into their Slack and Jira workflows, providing real-time feedback. We built a comprehensive automation framework from scratch and established quality gates in their deployment pipeline.',
      results: [
        { metric: '73%', description: 'Reduction in customer-reported bugs' },
        { metric: '2x', description: 'Faster release velocity' },
        { metric: '15%', description: 'Improvement in customer retention' },
        { metric: '40%', description: 'Cost savings vs. in-house team' }
      ],
      testimonial: {
        quote: 'SpurQLabs became our secret weapon. We ship twice as fast with half the bugs. Our customers noticed the quality improvement immediately, and our NPS score jumped 25 points in just three months.',
        name: 'Emily Rodriguez',
        role: 'Head of Product, CloudSync Pro',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Hispanic%20woman%20product%20manager%20in%20her%2030s%20wearing%20a%20teal%20blouse%20with%20confident%20smile%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait&width=100&height=100&seq=avatar4&orientation=squarish'
      },
      tags: ['SaaS', 'Agile Testing', 'CI/CD Integration', 'Automation']
    },
    {
      id: 'enterprise-migration',
      company: 'GlobalBank Corp',
      industry: 'Enterprise',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20enterprise%20bank%20company%20logo%20icon%20abstract%20building%20columns%20shape%20in%20navy%20and%20gold%20colors%20on%20white%20background%20clean%20vector%20style&width=120&height=120&seq=logo5&orientation=squarish',
      heroImage: 'https://readdy.ai/api/search-image?query=Enterprise%20banking%20software%20interface%20on%20multiple%20monitors%20showing%20financial%20dashboard%20with%20security%20features%20and%20transaction%20monitoring%20clean%20professional%20design%20office%20lighting%20product%20photography&width=800&height=500&seq=case5&orientation=landscape',
      challenge: 'GlobalBank was migrating their legacy core banking system to a modern cloud platform—a $50M project with zero tolerance for errors. They needed a QA partner with enterprise experience who could validate millions of data records and ensure regulatory compliance.',
      solution: 'We assembled a 20-person specialized team for the 18-month migration. Our approach included automated data validation scripts that verified 50M+ records, comprehensive regression testing across 500+ banking scenarios, and parallel run testing to ensure zero discrepancies between old and new systems.',
      results: [
        { metric: '100%', description: 'Data migration accuracy' },
        { metric: '0', description: 'Critical defects in production' },
        { metric: '3 months', description: 'Ahead of schedule delivery' },
        { metric: '$8M', description: 'Saved in potential rework costs' }
      ],
      testimonial: {
        quote: 'This was the most complex project in our bank\'s history. SpurQLabs\' meticulous approach and deep banking expertise gave our board the confidence to proceed. The flawless go-live was a testament to their exceptional quality standards.',
        name: 'Robert Thompson',
        role: 'CIO, GlobalBank Corp',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Caucasian%20man%20senior%20executive%20in%20his%2050s%20wearing%20a%20dark%20suit%20with%20distinguished%20expression%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait&width=100&height=100&seq=avatar5&orientation=squarish'
      },
      tags: ['Enterprise', 'Data Migration', 'Banking', 'Compliance']
    },
    {
      id: 'mobile-app',
      company: 'FitTrack',
      industry: 'Healthcare',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20fitness%20app%20company%20logo%20icon%20abstract%20heartbeat%20pulse%20shape%20in%20coral%20and%20dark%20gray%20colors%20on%20white%20background%20clean%20vector%20style&width=120&height=120&seq=logo6&orientation=squarish',
      heroImage: 'https://readdy.ai/api/search-image?query=Fitness%20tracking%20mobile%20app%20interface%20on%20smartphone%20showing%20workout%20dashboard%20with%20health%20metrics%20and%20progress%20charts%20clean%20modern%20design%20natural%20lighting%20professional%20product%20photography&width=800&height=500&seq=case6&orientation=landscape',
      challenge: 'FitTrack\'s mobile app had a 2.8-star rating due to crashes, sync issues with wearables, and battery drain problems. User reviews were brutal, and they were losing ground to competitors. They needed to turn around their app quality fast.',
      solution: 'Our mobile testing specialists conducted device compatibility testing across 200+ device/OS combinations. We identified and helped fix critical memory leaks, optimized background sync processes, and established automated testing for all major wearable integrations. We also implemented crash analytics monitoring.',
      results: [
        { metric: '4.7★', description: 'App store rating (up from 2.8★)' },
        { metric: '94%', description: 'Reduction in crash rate' },
        { metric: '200+', description: 'Devices tested and certified' },
        { metric: '3x', description: 'Increase in daily active users' }
      ],
      testimonial: {
        quote: 'Our app went from being roasted in reviews to being featured by Apple. SpurQLabs\' mobile expertise saved our product and probably our company. The turnaround was remarkable.',
        name: 'Alex Kim',
        role: 'Founder & CEO, FitTrack',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Korean%20man%20startup%20founder%20in%20his%2030s%20wearing%20a%20casual%20shirt%20with%20energetic%20smile%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait&width=100&height=100&seq=avatar6&orientation=squarish'
      },
      tags: ['Mobile Testing', 'Device Compatibility', 'Wearables', 'Performance']
    }
  ];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter);

  const stats = [
    { value: '500+', label: 'Success Stories' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '85%', label: 'Avg. Bug Reduction' },
    { value: '$50M+', label: 'Client Savings' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img src="https://static.readdy.ai/image/cdee2fbcd80bfdec9cf50d230218aedf/6ff8a31bd7fff894feba2270c48bbbe9.webp" alt="SpurQLabs" className="h-8 lg:h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/about" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">About</Link>
              <Link to="/services" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Services</Link>
              <Link to="/#how-we-work" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">How We Work</Link>
              <Link to="/#why-choose-us" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Why Choose Us</Link>
              <Link to="/stories" className="text-sm font-medium transition-colors cursor-pointer text-orange-500">Stories</Link>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md shadow-orange-500/20 whitespace-nowrap cursor-pointer">Book a Call</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer text-gray-700 hover:bg-gray-100" aria-label="Toggle menu">
                <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-1 bg-white border-t border-gray-100">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">About</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Services</Link>
            <Link to="/#how-we-work" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">How We Work</Link>
            <Link to="/#why-choose-us" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Why Choose Us</Link>
            <Link to="/stories" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-orange-500 bg-orange-50">Stories</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400"></span>
              Client Success Stories
              <span className="w-8 h-px bg-orange-400"></span>
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Real Problems. <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Real Solutions.</span> Real Results.
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped companies like yours overcome quality challenges, ship faster, and build products their customers love.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10">
                  <p className="text-2xl lg:text-3xl font-bold text-orange-400 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 lg:py-12 bg-gray-50 sticky top-16 lg:top-20 z-40 border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center flex-wrap gap-4">
             
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      activeFilter === filter
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                        : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500 border border-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 lg:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12 lg:space-y-16">
              {filteredStudies.map((study, index) => (
                <article 
                  key={study.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="lg:flex">
                    {/* Image Section */}
                    <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative h-64 lg:h-full min-h-[400px]">
                        <img 
                          src={study.heroImage} 
                          alt={study.company}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-lg">
                              <img src={study.logo} alt={study.company} className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{study.company}</h3>
                              <span className="text-sm text-orange-300">{study.industry}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {study.tags.slice(0, 3).map((tag, i) => (
                              <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`lg:w-1/2 p-6 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {/* Challenge */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-lg">
                            <i className="ri-error-warning-line text-red-500"></i>
                          </div>
                          <h4 className="font-bold text-gray-900">The Challenge</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {expandedStory === study.id ? study.challenge : `${study.challenge.slice(0, 150)}...`}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 flex items-center justify-center bg-orange-100 rounded-lg">
                            <i className="ri-lightbulb-line text-orange-500"></i>
                          </div>
                          <h4 className="font-bold text-gray-900">Our Solution</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {expandedStory === study.id ? study.solution : `${study.solution.slice(0, 150)}...`}
                        </p>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg">
                            <i className="ri-bar-chart-box-line text-green-500"></i>
                          </div>
                          <h4 className="font-bold text-gray-900">The Results</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {study.results.map((result, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xl font-bold text-orange-500">{result.metric}</p>
                              <p className="text-xs text-gray-600">{result.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      {expandedStory === study.id && (
                        <div className="bg-orange-50 rounded-xl p-5 mb-6 border-l-4 border-orange-400">
                          <i className="ri-double-quotes-l text-3xl text-orange-300 mb-2 block"></i>
                          <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">
                            &ldquo;{study.testimonial.quote}&rdquo;
                          </p>
                          <div className="flex items-center gap-3">
                            <img 
                              src={study.testimonial.avatar} 
                              alt={study.testimonial.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-semibold text-gray-900 text-sm">{study.testimonial.name}</p>
                              <p className="text-xs text-gray-500">{study.testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Toggle Button */}
                      <button
                        onClick={() => setExpandedStory(expandedStory === study.id ? null : study.id)}
                        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors cursor-pointer"
                      >
                        {expandedStory === study.id ? (
                          <>
                            Show Less <i className="ri-arrow-up-s-line"></i>
                          </>
                        ) : (
                          <>
                            Read Full Story <i className="ri-arrow-down-s-line"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
     <div className="text-center mb-12">
  <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider -mt-4 mb-3">
    What Clients Say
  </p>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
    Trusted by Industry Leaders
  </h2>
</div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.slice(0, 3).map((study) => (
                <div key={study.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-amber-400"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{study.testimonial.quote.slice(0, 150)}...&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img 
                      src={study.testimonial.avatar} 
                      alt={study.testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{study.testimonial.name}</p>
                      <p className="text-xs text-gray-500">{study.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
  <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider -mt-6 mb-3">
    Our Expertise
  </p>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
    Industries We Transform
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    Deep domain expertise across the industries that matter most.
  </p>
</div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'FinTech', icon: 'ri-bank-card-line', count: '120+' },
                { name: 'Healthcare', icon: 'ri-heart-pulse-line', count: '85+' },
                { name: 'E-commerce', icon: 'ri-shopping-bag-line', count: '150+' },
                { name: 'SaaS', icon: 'ri-cloud-line', count: '200+' },
                { name: 'Enterprise', icon: 'ri-building-line', count: '45+' },
                { name: 'Mobile', icon: 'ri-smartphone-line', count: '90+' }
              ].map((industry, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-orange-50 group-hover:bg-orange-100 rounded-xl mx-auto mb-4 transition-colors duration-300">
                    <i className={`${industry.icon} text-2xl text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-sm text-orange-500 font-medium">{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ companies who've transformed their quality assurance with SpurQLabs. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap"
              >
                Book Your Free Consultation
              </a>
              <Link 
                to="/#services" 
                className="px-8 py-4 border border-gray-600 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
