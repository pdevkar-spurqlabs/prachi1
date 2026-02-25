import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function APIAutomationPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      icon: 'ri-rocket-line',
      title: 'Faster Feedback',
      description: 'API tests run 10x faster than UI tests, providing immediate feedback on code changes and accelerating development cycles.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Backend Validation',
      description: 'Test business logic, data integrity, and security at the API layer before UI implementation begins.'
    },
    {
      icon: 'ri-loop-left-line',
      title: 'CI/CD Integration',
      description: 'Seamlessly integrate API tests into your pipeline for automated validation on every commit and deployment.'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Contract Testing',
      description: 'Ensure API contracts remain consistent between services, preventing integration failures in microservices architectures.'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Data-Driven Testing',
      description: 'Execute thousands of test scenarios with different data combinations to validate edge cases and boundary conditions.'
    },
    {
      icon: 'ri-bug-line',
      title: 'Early Bug Detection',
      description: 'Catch critical backend issues before they reach the UI, reducing debugging time and production incidents.'
    }
  ];

  const tools = [
    { name: 'Postman', category: 'API Testing', icon: 'ri-send-plane-line' },
    { name: 'REST Assured', category: 'Java Framework', icon: 'ri-code-s-slash-line' },
    { name: 'Karate DSL', category: 'BDD Testing', icon: 'ri-file-text-line' },
    { name: 'SoapUI', category: 'SOAP/REST', icon: 'ri-bubble-chart-line' },
    { name: 'Pact', category: 'Contract Testing', icon: 'ri-file-shield-line' },
    { name: 'Newman', category: 'CLI Runner', icon: 'ri-terminal-line' },
    { name: 'JMeter', category: 'Performance', icon: 'ri-speed-line' },
    { name: 'Swagger', category: 'API Documentation', icon: 'ri-book-open-line' },
    { name: 'GraphQL', category: 'Query Testing', icon: 'ri-git-repository-line' },
    { name: 'Insomnia', category: 'API Client', icon: 'ri-moon-line' }
  ];

  const useCases = [
    {
      industry: 'Microservices',
      scenarios: ['Service-to-service communication', 'Contract validation', 'API versioning', 'Service mesh testing'],
      icon: 'ri-apps-2-line',
      color: 'emerald'
    },
    {
      industry: 'E-Commerce',
      scenarios: ['Payment gateway APIs', 'Inventory management', 'Order processing', 'Third-party integrations'],
      icon: 'ri-shopping-cart-2-line',
      color: 'orange'
    },
    {
      industry: 'Financial Services',
      scenarios: ['Transaction APIs', 'Account management', 'Compliance validation', 'Real-time data feeds'],
      icon: 'ri-exchange-dollar-line',
      color: 'violet'
    },
    {
      industry: 'SaaS Platforms',
      scenarios: ['RESTful APIs', 'GraphQL endpoints', 'Webhook testing', 'Rate limiting validation'],
      icon: 'ri-cloud-line',
      color: 'red'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'API Discovery',
      description: 'Analyze API documentation, endpoints, authentication methods, and data models to understand the API landscape.',
      icon: 'ri-compass-3-line'
    },
    {
      step: '02',
      title: 'Test Strategy',
      description: 'Define test coverage including functional, security, performance, and contract testing requirements.',
      icon: 'ri-file-list-line'
    },
    {
      step: '03',
      title: 'Framework Setup',
      description: 'Build automation framework with request builders, response validators, and reusable test utilities.',
      icon: 'ri-tools-line'
    },
    {
      step: '04',
      title: 'Test Development',
      description: 'Create comprehensive test suites covering positive/negative scenarios, edge cases, and error handling.',
      icon: 'ri-code-box-line'
    },
    {
      step: '05',
      title: 'Pipeline Integration',
      description: 'Integrate API tests into CI/CD pipeline with parallel execution and detailed reporting.',
      icon: 'ri-git-branch-line'
    },
    {
      step: '06',
      title: 'Monitoring & Maintenance',
      description: 'Continuous test maintenance, performance monitoring, and expansion as APIs evolve.',
      icon: 'ri-line-chart-line'
    }
  ];

  const faqs = [
    {
      question: 'What types of APIs can you test?',
      answer: 'We test REST APIs, SOAP services, GraphQL endpoints, gRPC services, WebSocket connections, and custom protocols. Our expertise covers both synchronous and asynchronous API patterns.'
    },
    {
      question: 'How do you handle API authentication?',
      answer: 'We support all authentication methods including OAuth 2.0, JWT tokens, API keys, Basic Auth, SAML, and custom authentication schemes. We securely manage credentials and implement token refresh mechanisms.'
    },
    {
      question: 'Can you test APIs without documentation?',
      answer: 'Yes, we can reverse-engineer APIs by analyzing network traffic, examining client code, and using API discovery tools. However, having documentation significantly accelerates the testing process.'
    },
    {
      question: 'How do you validate API responses?',
      answer: 'We perform comprehensive validation including status codes, response schemas, data types, business logic, error messages, and response times. We use JSON Schema validation and custom assertion libraries.'
    },
    {
      question: 'What about testing third-party APIs?',
      answer: 'We test integrations with external APIs including payment gateways, social media platforms, and cloud services. We use mocking and stubbing for reliable testing without depending on external services.'
    },
    {
      question: 'How long does API automation setup take?',
      answer: 'Initial framework setup takes 1-2 weeks. First test suites are typically running within the first week, with comprehensive coverage achieved in 4-6 weeks depending on API complexity and number of endpoints.'
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
              API Automation Testing
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Validate your APIs with comprehensive automation testing. Ensure reliability, performance, and security of your REST, GraphQL, and SOAP services with fast, maintainable test suites.
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why API Automation?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Fast, reliable, and comprehensive testing at the API layer.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">API Testing Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Industry-leading tools for comprehensive API test automation.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">API Testing Across Industries</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized API automation for your business needs.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">API Automation Delivery</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Structured approach to building robust API test automation.</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Automate Your API Testing?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's build fast, reliable API test automation that accelerates your development.</p>
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
