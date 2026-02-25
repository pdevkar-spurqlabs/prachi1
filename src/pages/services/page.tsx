import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../home/components/Footer';

interface ServiceType {
  name: string;
  description: string;
  icon: string;
  slug: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  types: ServiceType[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'automation',
    title: 'Test Automation',
    description: 'End-to-end automation solutions that accelerate your release cycles and ensure consistent quality across all platforms.',
    icon: 'ri-robot-line',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    types: [
      { name: 'Web Automation', description: 'Selenium, Cypress, Playwright-based testing for web applications with cross-browser compatibility.', icon: 'ri-global-line', slug: 'web-automation' },
      { name: 'Mobile Automation', description: 'Appium and native framework testing for iOS and Android applications.', icon: 'ri-smartphone-line', slug: 'mobile-automation' },
      { name: 'Desktop App Automation', description: 'WinAppDriver, TestComplete solutions for Windows and macOS desktop applications.', icon: 'ri-computer-line', slug: 'desktop-automation' },
      { name: 'IoT Automation', description: 'Specialized testing for connected devices, sensors, and smart home ecosystems.', icon: 'ri-cpu-line', slug: 'iot-automation' },
      { name: 'API Automation', description: 'REST, GraphQL, and SOAP API testing with Postman, RestAssured, and custom frameworks.', icon: 'ri-code-s-slash-line', slug: 'api-automation' },
      { name: 'Database Automation', description: 'Automated data validation, migration testing, and database integrity checks.', icon: 'ri-database-2-line', slug: 'database-automation' }
    ]
  },
  {
    id: 'performance',
    title: 'Performance Testing',
    description: 'Ensure your applications handle real-world loads with comprehensive performance, load, and stress testing.',
    icon: 'ri-speed-line',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    types: [
      { name: 'Load Testing', description: 'Simulate thousands of concurrent users to validate system capacity and response times.', icon: 'ri-group-line', slug: 'load-testing' },
      { name: 'Stress Testing', description: 'Push systems beyond normal limits to identify breaking points and recovery behavior.', icon: 'ri-flashlight-line', slug: 'stress-testing' },
      { name: 'Scalability Testing', description: 'Validate horizontal and vertical scaling capabilities for cloud-native applications.', icon: 'ri-bar-chart-grouped-line', slug: 'scalability-testing' },
      { name: 'Endurance Testing', description: 'Long-duration tests to detect memory leaks and performance degradation over time.', icon: 'ri-timer-line', slug: 'endurance-testing' },
      { name: 'Spike Testing', description: 'Sudden traffic surge simulation to test auto-scaling and failover mechanisms.', icon: 'ri-line-chart-line', slug: 'spike-testing' }
    ]
  },
  {
    id: 'security',
    title: 'Security Testing',
    description: 'Protect your applications and data with comprehensive security assessments and penetration testing.',
    icon: 'ri-shield-check-line',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    types: [
      { name: 'Penetration Testing', description: 'Ethical hacking to identify vulnerabilities before malicious actors do.', icon: 'ri-spy-line', slug: 'penetration-testing' },
      { name: 'Vulnerability Assessment', description: 'Systematic scanning and analysis of security weaknesses across your stack.', icon: 'ri-search-eye-line', slug: 'vulnerability-assessment' },
      { name: 'OWASP Compliance', description: 'Testing against OWASP Top 10 and other security standards and frameworks.', icon: 'ri-file-shield-2-line', slug: 'owasp-compliance' },
      { name: 'API Security Testing', description: 'Authentication, authorization, and data exposure testing for APIs.', icon: 'ri-lock-line', slug: 'api-security-testing' },
      { name: 'Compliance Audits', description: 'HIPAA, PCI-DSS, SOC 2, and GDPR compliance verification testing.', icon: 'ri-checkbox-circle-line', slug: 'compliance-audits' }
    ]
  },
  {
    id: 'manual',
    title: 'Manual Testing',
    description: 'Expert human testing for complex scenarios, usability validation, and exploratory testing that automation cannot replace.',
    icon: 'ri-user-search-line',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    types: [
      { name: 'Exploratory Testing', description: 'Creative, unscripted testing to discover edge cases and unexpected behaviors.', icon: 'ri-compass-3-line', slug: 'exploratory-testing' },
      { name: 'Usability Testing', description: 'Real user experience evaluation for intuitive interfaces and workflows.', icon: 'ri-emotion-happy-line', slug: 'usability-testing' },
      { name: 'Accessibility Testing', description: 'WCAG compliance testing to ensure inclusive experiences for all users.', icon: 'ri-eye-line', slug: 'accessibility-testing' },
      { name: 'Localization Testing', description: 'Multi-language and regional adaptation testing for global markets.', icon: 'ri-translate-2', slug: 'localization-testing' },
      { name: 'Regression Testing', description: 'Systematic verification that new changes do not break existing functionality.', icon: 'ri-refresh-line', slug: 'regression-testing' }
    ]
  },
  {
    id: 'specialized',
    title: 'Specialized Testing',
    description: 'Industry-specific and technology-focused testing services for unique requirements and compliance needs.',
    icon: 'ri-microscope-line',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    types: [
      { name: 'AI/ML Testing', description: 'Model validation, bias detection, and accuracy testing for AI-powered applications.', icon: 'ri-brain-line', slug: '' },
      { name: 'Blockchain Testing', description: 'Smart contract audits, DApp testing, and distributed ledger validation.', icon: 'ri-links-line', slug: '' },
      { name: 'Healthcare Testing', description: 'FDA, HIPAA compliant testing for medical devices and health applications.', icon: 'ri-heart-pulse-line', slug: '' },
      { name: 'FinTech Testing', description: 'PCI-DSS, SOX compliance testing for financial applications and payment systems.', icon: 'ri-bank-card-line', slug: '' },
      { name: 'Gaming Testing', description: 'Gameplay, performance, and compatibility testing across platforms and devices.', icon: 'ri-gamepad-line', slug: '' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    description: 'Integrate quality into your development pipeline with continuous testing and DevOps best practices.',
    icon: 'ri-git-merge-line',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    types: [
      { name: 'CI/CD Integration', description: 'Seamless test automation integration with Jenkins, GitLab, GitHub Actions, and Azure DevOps.', icon: 'ri-loop-left-line', slug: '' },
      { name: 'Test Environment Management', description: 'Docker, Kubernetes-based test environments for consistent and scalable testing.', icon: 'ri-server-line', slug: '' },
      { name: 'Shift-Left Testing', description: 'Early-stage testing integration to catch defects before they become expensive.', icon: 'ri-arrow-left-double-line', slug: '' },
      { name: 'Test Data Management', description: 'Synthetic data generation and data masking for secure, realistic test scenarios.', icon: 'ri-folder-shield-2-line', slug: '' },
      { name: 'Quality Metrics & Reporting', description: 'Real-time dashboards and analytics for test coverage, defect trends, and quality KPIs.', icon: 'ri-pie-chart-line', slug: '' }
    ]
  },
  {
    id: 'consulting',
    title: 'Consulting & Advisory Services',
    description: 'Expert guidance to elevate your QA maturity — from strategy definition and process optimization to tool selection and team enablement.',
    icon: 'ri-lightbulb-line',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    types: [
      { name: 'Test Process Improvement', description: 'Analyzing and optimizing your existing testing processes to eliminate bottlenecks and maximize efficiency.', icon: 'ri-settings-3-line', slug: '' },
      { name: 'Test Strategy Definition', description: 'Developing comprehensive, risk-based testing strategies aligned with your business goals and release cadence.', icon: 'ri-file-list-3-line', slug: '' },
      { name: 'Tool Evaluation & Implementation', description: 'Assisting with the selection, proof-of-concept, and implementation of the right testing tools for your stack.', icon: 'ri-tools-line', slug: '' },
      { name: 'Quality Assurance Consulting', description: 'Providing expert advice on overall quality assurance practices, governance, and organizational QA maturity.', icon: 'ri-medal-line', slug: '' },
      { name: 'Training & Mentoring', description: 'Offering hands-on training on various testing methodologies, tools, and best practices to upskill your team.', icon: 'ri-graduation-cap-line', slug: '' },
      { name: 'Test Automation Consulting', description: 'Providing guidance on building and implementing effective, maintainable test automation strategies and frameworks.', icon: 'ri-robot-line', slug: '' },
      { name: 'IoT Testing Strategy', description: 'Assisting with the unique challenges and strategies for testing IoT solutions, connected devices, and edge systems.', icon: 'ri-cpu-line', slug: '' }
    ]
  }
];

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

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
              <Link to="/services" className="text-sm font-medium transition-colors cursor-pointer text-orange-500">Services</Link>
              <Link to="/stories" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Stories</Link>
              <Link to="/#why-choose-us" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Why Teams Choose Us</Link>
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
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-orange-500 bg-orange-50">Services</Link>
            <Link to="/stories" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Stories</Link>
            <Link to="/#why-choose-us" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Why Teams Choose Us</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-orange-400"></span>
              Our Services
              <span className="w-8 h-px bg-orange-400"></span>
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive QA Solutions <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Tailored to Your Needs</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              From test automation to security audits, we offer a complete suite of quality assurance services that integrate seamlessly into your development lifecycle.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white">7</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Service Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white">35+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Specialized Services</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Tools & Frameworks</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Navigation */}
      <section className="py-8 bg-gray-50 border-b border-gray-100 sticky top-16 lg:top-20 z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Jump to:</span>
              {serviceCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500 border border-gray-200'
                  }`}
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.id} id={category.id} className="scroll-mt-40">
                {/* Category Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 flex items-center justify-center ${category.bgColor} rounded-2xl shrink-0`}>
                      <i className={`${category.icon} text-3xl ${category.color}`}></i>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Category {categoryIndex + 1}</span>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">{category.title}</h2>
                      <p className="text-gray-600 mt-2 max-w-2xl">{category.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      expandedCategories.includes(category.id)
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {expandedCategories.includes(category.id) ? 'Collapse' : 'Expand All'}
                    <i className={`ri-arrow-${expandedCategories.includes(category.id) ? 'up' : 'down'}-s-line`}></i>
                  </button>
                </div>

                {/* Service Types Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.types.map((type, typeIndex) => {
                    const hasDetailPage = type.slug !== '';
                    const CardWrapper = hasDetailPage ? Link : 'div';
                    const cardProps = hasDetailPage ? { to: `/services/${type.slug}` } : {};
                    
                    return (
                      <CardWrapper
                        key={typeIndex}
                        {...cardProps}
                        className={`group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 ${hasDetailPage ? 'cursor-pointer' : ''}`}
                      >
                        {/* Hover gradient overlay */}
                        <div className={`absolute inset-0 ${category.bgColor} opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-300`}></div>
                        
                        <div className="relative">
                          <div className={`w-12 h-12 flex items-center justify-center ${category.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <i className={`${type.icon} text-xl ${category.color}`}></i>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-900">{type.name}</h3>
                          <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${
                            expandedCategories.includes(category.id) ? 'line-clamp-none' : 'line-clamp-2'
                          }`}>
                            {type.description}
                          </p>
                          
                          {/* Learn more link */}
                          {hasDetailPage ? (
                            <span className={`inline-flex items-center gap-1 mt-4 text-sm font-medium ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                              Learn More
                              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                            </span>
                          ) : (
                            <a
                              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={`inline-flex items-center gap-1 mt-4 text-sm font-medium ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`}
                            >
                              Contact Us
                              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                            </a>
                          )}
                        </div>
                      </CardWrapper>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Deliver Excellence</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A proven methodology that ensures quality at every step of your development journey.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', description: 'We analyze your product, tech stack, and quality goals to create a tailored testing strategy.', icon: 'ri-search-line' },
                { step: '02', title: 'Planning', description: 'Detailed test plans, resource allocation, and timeline creation aligned with your sprints.', icon: 'ri-draft-line' },
                { step: '03', title: 'Execution', description: 'Our expert team executes comprehensive testing with real-time reporting and communication.', icon: 'ri-play-circle-line' },
                { step: '04', title: 'Optimization', description: 'Continuous improvement through metrics analysis, feedback loops, and process refinement.', icon: 'ri-line-chart-line' }
              ].map((item, index) => (
                <div key={index} className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <span className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center bg-orange-500 text-white text-sm font-bold rounded-full">{item.step}</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-xl mb-4 mt-2">
                    <i className={`${item.icon} text-xl text-orange-500`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Tech Stack</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tools & Technologies We Master</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We leverage industry-leading tools to deliver exceptional testing results.</p>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
              {[
                'Selenium', 'Cypress', 'Playwright', 'Appium', 'JMeter', 'Postman',
                'Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Azure',
                'TestRail', 'Jira', 'Confluence', 'Grafana', 'Datadog', 'BrowserStack'
              ].map((tool, index) => (
                <div key={index} className="flex items-center justify-center px-4 py-4 bg-gray-50 rounded-xl hover:bg-orange-50 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-medium text-gray-700">{tool}</span>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let our experts analyze your requirements and recommend the perfect testing strategy for your product.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get a Free Consultation
                <i className="ri-arrow-right-line"></i>
              </a>
              <Link to="/stories" className="px-8 py-4 border border-gray-600 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
