import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function StressTestingPage() {
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
    { icon: 'ri-alert-line', title: 'Breaking Point Discovery', description: 'Identify the exact threshold where your system fails, allowing you to plan capacity and set realistic limits.' },
    { icon: 'ri-shield-cross-line', title: 'Failure Mode Analysis', description: 'Understand how your application fails under extreme stress and whether it degrades gracefully or crashes catastrophically.' },
    { icon: 'ri-restart-line', title: 'Recovery Validation', description: 'Test your system\'s ability to recover automatically after stress-induced failures without data loss or corruption.' },
    { icon: 'ri-alarm-warning-line', title: 'Alert System Testing', description: 'Verify that monitoring and alerting systems trigger appropriately before critical failures occur.' },
    { icon: 'ri-database-2-line', title: 'Data Integrity Checks', description: 'Ensure data remains consistent and uncorrupted even when systems are pushed beyond normal operating limits.' },
    { icon: 'ri-shield-check-line', title: 'Disaster Preparedness', description: 'Prepare for worst-case scenarios by understanding system behavior under extreme conditions before they happen in production.' }
  ];

  const tools = [
    { name: 'Apache JMeter', icon: 'ri-flashlight-line' },
    { name: 'Gatling', icon: 'ri-rocket-line' },
    { name: 'k6', icon: 'ri-speed-line' },
    { name: 'LoadRunner', icon: 'ri-dashboard-line' },
    { name: 'Locust', icon: 'ri-bug-line' },
    { name: 'Taurus', icon: 'ri-fire-line' },
    { name: 'Artillery', icon: 'ri-sword-line' },
    { name: 'Grafana', icon: 'ri-bar-chart-box-line' },
    { name: 'Prometheus', icon: 'ri-pie-chart-line' },
    { name: 'Datadog', icon: 'ri-pulse-line' }
  ];

  const metrics = [
    { label: 'Breaking Point', value: '150%', icon: 'ri-alert-line', color: 'text-orange-600' },
    { label: 'Recovery Time', value: '&lt;30s', icon: 'ri-restart-line', color: 'text-orange-600' },
    { label: 'Resource Usage', value: '95%', icon: 'ri-cpu-line', color: 'text-orange-600' },
    { label: 'Failure Modes', value: '12+', icon: 'ri-bug-line', color: 'text-orange-600' }
  ];

  const scenarios = [
    {
      title: 'Black Friday Preparation',
      description: 'Test your e-commerce platform beyond expected peak loads to ensure it survives unprecedented traffic spikes without losing transactions.',
      icon: 'ri-shopping-bag-3-line',
      metrics: ['15x normal load', 'Graceful degradation', 'Zero data loss']
    },
    {
      title: 'Banking System Resilience',
      description: 'Validate that financial systems maintain data integrity and security even when transaction volumes exceed all projections.',
      icon: 'ri-bank-line',
      metrics: ['Extreme TPS', 'ACID compliance', 'Audit trail intact']
    },
    {
      title: 'Healthcare System Reliability',
      description: 'Ensure critical healthcare applications remain operational during emergencies when usage spikes unexpectedly.',
      icon: 'ri-heart-pulse-line',
      metrics: ['Patient data safe', 'Core functions up', 'Fast recovery']
    },
    {
      title: 'Gaming Launch Stress',
      description: 'Test multiplayer game servers beyond launch day projections to prevent crashes during viral growth moments.',
      icon: 'ri-gamepad-line',
      metrics: ['Massive concurrency', 'State consistency', 'Auto-scaling limits']
    }
  ];

  const process = [
    { step: '01', title: 'Baseline Establishment', description: 'Measure normal operating capacity and performance metrics to establish a baseline for comparison during stress tests.', icon: 'ri-line-chart-line' },
    { step: '02', title: 'Stress Scenario Design', description: 'Create progressive load patterns that gradually increase beyond normal capacity to identify breaking points systematically.', icon: 'ri-draft-line' },
    { step: '03', title: 'Infrastructure Monitoring', description: 'Deploy comprehensive monitoring across all system layers to capture detailed metrics during stress conditions.', icon: 'ri-radar-line' },
    { step: '04', title: 'Progressive Stress Execution', description: 'Execute tests with incrementally increasing loads while monitoring for failures, bottlenecks, and degradation patterns.', icon: 'ri-play-circle-line' },
    { step: '05', title: 'Failure Analysis', description: 'Document failure modes, breaking points, error patterns, and system behavior under extreme stress conditions.', icon: 'ri-file-damage-line' },
    { step: '06', title: 'Recovery Testing', description: 'Validate system recovery capabilities, data integrity, and time-to-recovery after stress-induced failures.', icon: 'ri-refresh-line' }
  ];

  const faqs = [
    {
      question: 'What is the difference between load testing and stress testing?',
      answer: 'Load testing validates performance under expected traffic, while stress testing pushes systems beyond normal capacity to find breaking points. Load testing asks "Can we handle our expected users?" while stress testing asks "Where and how do we break?" Both are essential for comprehensive performance validation.'
    },
    {
      question: 'Will stress testing damage our production environment?',
      answer: 'We conduct stress testing in isolated staging environments that mirror production. We never stress test production systems directly. Our controlled approach ensures we can safely push systems to failure without impacting real users or data.'
    },
    {
      question: 'How do you determine the stress levels to test?',
      answer: 'We start from your normal peak capacity and progressively increase load in controlled increments. We monitor system behavior continuously and stop when we identify clear breaking points or when predetermined safety thresholds are reached. The goal is to find limits, not cause unnecessary damage.'
    },
    {
      question: 'What happens if our system fails during stress testing?',
      answer: 'System failure is expected and valuable in stress testing! We document exactly how, when, and why failures occur. This information helps you implement safeguards, improve error handling, and plan capacity. We also test recovery procedures to ensure your system can bounce back quickly.'
    },
    {
      question: 'How often should we perform stress testing?',
      answer: 'We recommend stress testing before major releases, infrastructure changes, or anticipated traffic events. For rapidly growing applications, quarterly stress testing helps you stay ahead of capacity needs. After implementing optimizations, retest to validate improvements.'
    },
    {
      question: 'Do you test recovery and failover mechanisms?',
      answer: 'Yes! Recovery testing is a critical component. We validate automatic failover, database recovery, cache rebuilding, and service restoration. We measure recovery time and verify data integrity post-recovery to ensure your disaster recovery plans actually work under stress.'
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full mb-6">
              <i className="ri-alert-line text-orange-300"></i>
              <span className="text-orange-200 font-semibold text-sm">Performance Testing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Stress Testing Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Push your application beyond normal operating capacity to identify breaking points, resource limitations, and recovery capabilities under extreme conditions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Stress Testing Quote
                <i className="ri-arrow-right-line"></i>
              </a>
              <Link to="/services" className="px-8 py-4 border border-orange-400/30 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-orange-50 border-b border-orange-100">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center border border-orange-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-xl mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <i className={`${metric.icon} text-2xl ${metric.color}`}></i>
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Why Stress Testing Matters</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Discover Your System's Breaking Point</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Stress testing reveals how your application behaves under extreme conditions and helps you plan for worst-case scenarios.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl mb-4 group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
                    <i className={`${benefit.icon} text-2xl text-orange-500`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Use Cases</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">When You Need Stress Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Critical scenarios where stress testing prevents catastrophic failures and ensures system resilience.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                      <i className={`${scenario.icon} text-2xl text-orange-500`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{scenario.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {scenario.metrics.map((metric, idx) => (
                      <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Tech Stack</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry-Leading Stress Testing Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We leverage powerful performance testing tools to push your system to its limits and beyond.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                    <i className={`${tool.icon} text-xl text-orange-500`}></i>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Methodology</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Execute Stress Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach that safely pushes your system to its limits while capturing critical performance data.</p>
            </div>
            
            {/* Timeline Layout */}
            <div ref={processRef} className="relative">
              {/* Vertical Line */}
              <div className={`absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600 transform lg:-translate-x-1/2 ${processVisible ? 'process-line animate' : 'process-line'}`}></div>
              
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-all duration-300">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <i className="ri-arrow-down-s-line text-2xl text-orange-500 group-open:rotate-180 transition-transform shrink-0"></i>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Test Your System's Limits?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Let's discuss your stress testing needs and create a strategy that ensures your application can handle extreme conditions.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white hover:bg-gray-100 text-orange-900 font-semibold rounded-xl transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Schedule Free Consultation
                <i className="ri-calendar-line"></i>
              </a>
              <Link to="/services" className="px-8 py-4 border border-orange-400/30 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
