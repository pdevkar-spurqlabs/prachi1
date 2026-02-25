import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function WebAutomationPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const processRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProcessVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: 'ri-speed-up-line',
      title: 'Faster Release Cycles',
      description: 'Reduce testing time by up to 70% with parallel test execution across multiple browsers and environments.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cross-Browser Compatibility',
      description: 'Ensure flawless user experience across Chrome, Firefox, Safari, Edge, and legacy browsers.'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Continuous Testing',
      description: 'Integrate seamlessly with CI/CD pipelines for automated testing on every code commit.'
    },
    {
      icon: 'ri-bug-line',
      title: 'Early Bug Detection',
      description: 'Catch critical issues before production with comprehensive regression and smoke testing.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Cost Efficiency',
      description: 'Reduce manual testing costs by 60% while improving test coverage and reliability.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scalable Testing',
      description: 'Scale test execution effortlessly as your application grows with cloud-based infrastructure.'
    }
  ];

  const tools = [
    { name: 'Selenium WebDriver', category: 'Core Framework', icon: 'ri-window-line' },
    { name: 'Cypress', category: 'Modern Testing', icon: 'ri-flashlight-line' },
    { name: 'Playwright', category: 'Cross-Browser', icon: 'ri-global-line' },
    { name: 'TestNG', category: 'Test Management', icon: 'ri-organization-chart' },
    { name: 'JUnit', category: 'Assertions', icon: 'ri-checkbox-circle-line' },
    { name: 'Cucumber', category: 'BDD Framework', icon: 'ri-file-text-line' },
    { name: 'Jenkins', category: 'CI/CD', icon: 'ri-git-merge-line' },
    { name: 'Docker', category: 'Containerization', icon: 'ri-server-line' },
    { name: 'BrowserStack', category: 'Cloud Testing', icon: 'ri-cloud-line' },
    { name: 'Allure', category: 'Reporting', icon: 'ri-bar-chart-box-line' }
  ];

  const useCases = [
    {
      industry: 'E-Commerce',
      scenarios: ['Shopping cart workflows', 'Payment gateway integration', 'Product search and filters', 'User account management'],
      icon: 'ri-shopping-cart-line',
      color: 'orange'
    },
    {
      industry: 'SaaS Platforms',
      scenarios: ['User authentication flows', 'Dashboard functionality', 'Data visualization', 'Multi-tenant testing'],
      icon: 'ri-cloud-line',
      color: 'emerald'
    },
    {
      industry: 'Financial Services',
      scenarios: ['Transaction processing', 'Account management', 'Compliance validation', 'Security testing'],
      icon: 'ri-bank-line',
      color: 'violet'
    },
    {
      industry: 'Healthcare',
      scenarios: ['Patient portals', 'Appointment scheduling', 'Medical records access', 'HIPAA compliance'],
      icon: 'ri-heart-pulse-line',
      color: 'red'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'We analyze your application architecture, user flows, and testing requirements to create a comprehensive test strategy.',
      icon: 'ri-search-line'
    },
    {
      step: '02',
      title: 'Framework Setup',
      description: 'Design and implement a robust automation framework tailored to your tech stack with best practices and design patterns.',
      icon: 'ri-tools-line'
    },
    {
      step: '03',
      title: 'Test Development',
      description: 'Create maintainable, reusable test scripts with data-driven and keyword-driven approaches for maximum coverage.',
      icon: 'ri-code-s-slash-line'
    },
    {
      step: '04',
      title: 'CI/CD Integration',
      description: 'Integrate automated tests into your deployment pipeline for continuous feedback and quality gates.',
      icon: 'ri-git-merge-line'
    },
    {
      step: '05',
      title: 'Execution & Monitoring',
      description: 'Run tests across multiple environments with real-time monitoring, detailed reporting, and failure analysis.',
      icon: 'ri-play-circle-line'
    },
    {
      step: '06',
      title: 'Maintenance & Optimization',
      description: 'Continuous test suite maintenance, performance optimization, and expansion as your application evolves.',
      icon: 'ri-refresh-line'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to set up web automation?',
      answer: 'Initial framework setup typically takes 2-3 weeks, with first test scripts running within the first week. Full coverage depends on application complexity but usually achieved within 6-8 weeks.'
    },
    {
      question: 'Can you automate legacy web applications?',
      answer: 'Yes, we have extensive experience with legacy systems. We use specialized tools and techniques to handle older technologies, dynamic elements, and complex DOM structures.'
    },
    {
      question: 'What is your test maintenance approach?',
      answer: 'We follow the Page Object Model and other design patterns to minimize maintenance. Our team provides ongoing support to update tests as your application changes, typically requiring 10-15% of initial development effort.'
    },
    {
      question: 'How do you handle dynamic content and AJAX calls?',
      answer: 'We implement smart wait strategies, explicit waits, and custom synchronization methods to handle dynamic content reliably. Our frameworks are designed to be resilient to timing issues.'
    },
    {
      question: 'Can automated tests run on our existing infrastructure?',
      answer: 'Absolutely. We can deploy tests on your on-premise servers, cloud infrastructure, or hybrid environments. We also offer cloud-based execution through BrowserStack, Sauce Labs, or AWS Device Farm.'
    },
    {
      question: 'What kind of reporting do you provide?',
      answer: 'We provide comprehensive HTML reports with screenshots, video recordings of failures, execution trends, and integration with tools like Allure, ExtentReports, and your existing dashboards.'
    }
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
        {mobileMenuOpen && (
          <div className="lg:hidden transition-all duration-300 bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-1">
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">About</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-orange-500 bg-orange-50">Services</Link>
              <Link to="/stories" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Stories</Link>
              <Link to="/#why-choose-us" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Why Teams Choose Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium mb-6 cursor-pointer transition-colors">
              <i className="ri-arrow-left-line"></i>
              Back to Services
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <i className="ri-robot-line"></i>
              Test Automation
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Web Automation Testing
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Accelerate your release cycles with comprehensive web automation testing. We deliver reliable, maintainable test suites that ensure consistent quality across all browsers and platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Started
                <i className="ri-arrow-right-line"></i>
              </a>
              <a href="#process" className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Benefits</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Web Automation?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Transform your testing process with automation that delivers speed, reliability, and comprehensive coverage.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${benefit.icon} text-2xl text-orange-500`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Technology Stack</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tools We Master</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Industry-leading frameworks and tools for robust web automation testing.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-lg mb-3">
                    <i className={`${tool.icon} text-lg text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Use Cases</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Tailored web automation solutions for diverse industry needs.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 flex items-center justify-center bg-${useCase.color}-50 rounded-xl mb-5`}>
                    <i className={`${useCase.icon} text-2xl text-${useCase.color}-500`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.scenarios.map((scenario, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="ri-checkbox-circle-fill text-orange-500 mt-0.5"></i>
                        <span>{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Deliver Web Automation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A proven methodology that ensures quality, maintainability, and scalability.</p>
            </div>
            
            {/* Timeline Layout */}
            <div ref={processRef} className="relative">
              {/* Vertical Line */}
              <div className={`absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 transform lg:-translate-x-1/2 ${processVisible ? 'process-line animate' : 'process-line'}`}></div>
              
              <div className="space-y-12">
                {process.map((item, index) => (
                  <div key={index} className={`relative flex items-start gap-6 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Node */}
                    <div 
                      className={`absolute left-8 lg:left-1/2 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-full transform -translate-x-1/2 shadow-lg shadow-orange-500/30 z-10 ${
                        processVisible ? 'process-node animate' : 'process-node'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                      <div 
                        className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} ${
                          processVisible ? (index % 2 === 0 ? 'process-item animate-right' : 'process-item animate-left') : 'process-item'
                        }`}
                        style={{ animationDelay: `${index * 200 + 100}ms` }}
                      >
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-lg shrink-0">
                            <i className={`${item.icon} text-lg text-orange-500`}></i>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900">
                    {faq.question}
                    <i className="ri-arrow-down-s-line text-xl text-gray-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Automate Your Web Testing?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how our web automation solutions can accelerate your release cycles and improve quality.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Schedule a Consultation
                <i className="ri-arrow-right-line"></i>
              </a>
              <Link to="/services" className="px-8 py-4 border border-gray-600 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
