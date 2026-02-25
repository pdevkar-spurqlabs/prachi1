import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function EnduranceTestingPage() {
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
    { icon: 'ri-time-line', title: 'Memory Leak Detection', description: 'Identify memory leaks and resource exhaustion issues that only appear after extended operation periods.' },
    { icon: 'ri-database-2-line', title: 'Database Degradation', description: 'Discover database performance degradation caused by growing data volumes, fragmentation, or connection pool issues.' },
    { icon: 'ri-file-list-3-line', title: 'Log File Management', description: 'Validate that logging, archiving, and cleanup processes work correctly over extended periods without filling disk space.' },
    { icon: 'ri-refresh-line', title: 'Session Management', description: 'Test session handling, token refresh mechanisms, and connection pooling under sustained load conditions.' },
    { icon: 'ri-cpu-line', title: 'Resource Stability', description: 'Ensure CPU, memory, and disk usage remain stable over time without gradual degradation or resource creep.' },
    { icon: 'ri-shield-check-line', title: 'Production Confidence', description: 'Gain confidence that your application can run continuously in production without requiring frequent restarts.' }
  ];

  const tools = [
    { name: 'Apache JMeter', icon: 'ri-flashlight-line' },
    { name: 'Gatling', icon: 'ri-rocket-line' },
    { name: 'k6', icon: 'ri-speed-line' },
    { name: 'LoadRunner', icon: 'ri-dashboard-line' },
    { name: 'New Relic', icon: 'ri-pulse-line' },
    { name: 'Datadog', icon: 'ri-bar-chart-box-line' },
    { name: 'Grafana', icon: 'ri-dashboard-line' },
    { name: 'Prometheus', icon: 'ri-pie-chart-line' },
    { name: 'AppDynamics', icon: 'ri-line-chart-line' },
    { name: 'Dynatrace', icon: 'ri-radar-line' }
  ];

  const metrics = [
    { label: 'Test Duration', value: '24-72hrs', icon: 'ri-timer-line', color: 'text-orange-600' },
    { label: 'Memory Stability', value: '&lt;5% drift', icon: 'ri-cpu-line', color: 'text-orange-600' },
    { label: 'Response Time', value: 'Consistent', icon: 'ri-speed-line', color: 'text-orange-600' },
    { label: 'Zero Crashes', value: '100%', icon: 'ri-checkbox-circle-line', color: 'text-orange-600' }
  ];

  const scenarios = [
    {
      title: 'SaaS Platform Reliability',
      description: 'Validate that your SaaS application maintains consistent performance over weeks of continuous operation without memory leaks or degradation.',
      icon: 'ri-cloud-line',
      metrics: ['24/7 uptime', 'Stable memory', 'No restarts needed']
    },
    {
      title: 'Financial Trading Systems',
      description: 'Ensure trading platforms can operate continuously during market hours over extended periods without performance degradation.',
      icon: 'ri-stock-line',
      metrics: ['Multi-day testing', 'Transaction accuracy', 'Connection stability']
    },
    {
      title: 'IoT Backend Services',
      description: 'Test backend systems that process continuous streams of IoT device data 24/7 without resource exhaustion.',
      icon: 'ri-sensor-line',
      metrics: ['Continuous ingestion', 'Data processing', 'Storage management']
    },
    {
      title: 'Healthcare Monitoring',
      description: 'Validate that patient monitoring systems maintain reliability and accuracy during extended continuous operation.',
      icon: 'ri-heart-pulse-line',
      metrics: ['Critical uptime', 'Data integrity', 'Alert reliability']
    }
  ];

  const process = [
    { step: '01', title: 'Baseline Performance', description: 'Establish baseline metrics for response times, resource usage, and throughput under normal sustained load conditions.', icon: 'ri-line-chart-line' },
    { step: '02', title: 'Test Duration Planning', description: 'Define appropriate test duration based on your production patterns, typically 24-72 hours or longer for critical systems.', icon: 'ri-calendar-line' },
    { step: '03', title: 'Monitoring Setup', description: 'Deploy comprehensive monitoring for memory usage, CPU, disk I/O, database connections, and application-specific metrics.', icon: 'ri-radar-line' },
    { step: '04', title: 'Extended Load Execution', description: 'Run sustained load tests over extended periods while continuously monitoring for degradation patterns and anomalies.', icon: 'ri-play-circle-line' },
    { step: '05', title: 'Trend Analysis', description: 'Analyze performance trends over time to identify gradual degradation, memory leaks, or resource exhaustion patterns.', icon: 'ri-line-chart-line' },
    { step: '06', title: 'Stability Validation', description: 'Verify that all metrics remain stable within acceptable ranges throughout the entire test duration without intervention.', icon: 'ri-checkbox-circle-line' }
  ];

  const faqs = [
    {
      question: 'How long should endurance testing run?',
      answer: 'Typical endurance tests run 24-72 hours, but duration depends on your production patterns. For systems that run continuously, we recommend at least 48 hours. For applications with weekly cycles, testing should span a full week. Critical systems may require even longer test periods to catch subtle degradation issues.'
    },
    {
      question: 'What is the difference between endurance and load testing?',
      answer: 'Load testing validates performance under specific user loads for shorter periods (minutes to hours), while endurance testing runs sustained loads over extended periods (days to weeks) to identify issues that only appear over time, like memory leaks, resource exhaustion, or gradual performance degradation.'
    },
    {
      question: 'Can endurance testing detect memory leaks?',
      answer: 'Yes! Endurance testing is specifically designed to detect memory leaks and resource exhaustion. We monitor memory usage patterns over extended periods and identify gradual increases that indicate leaks. We also use profiling tools to pinpoint the exact code causing memory issues.'
    },
    {
      question: 'Do you test in production or staging environments?',
      answer: 'We conduct endurance testing in production-like staging environments to avoid any risk to live users. The staging environment must closely mirror production in terms of infrastructure, data volumes, and configuration to ensure test results are meaningful and actionable.'
    },
    {
      question: 'What happens if issues are found during testing?',
      answer: 'When we detect degradation or issues, we document the exact conditions, timing, and metrics. We provide detailed analysis including memory dumps, performance profiles, and log analysis. We can pause testing to investigate critical issues or continue to gather more data, depending on your needs.'
    },
    {
      question: 'How do you simulate realistic sustained load?',
      answer: 'We create load patterns based on your actual production traffic, including user behavior, transaction types, and timing patterns. We simulate realistic think times, session durations, and data variations. The goal is to mirror your production environment as closely as possible over extended periods.'
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
              <i className="ri-time-line text-orange-300"></i>
              <span className="text-orange-200 font-semibold text-sm">Performance Testing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Endurance Testing Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Validate your application's stability over extended periods with comprehensive endurance testing that detects memory leaks, resource exhaustion, and performance degradation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Endurance Testing Quote
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
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Why Endurance Testing Matters</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ensure Long-Term Stability</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Endurance testing reveals issues that only appear after extended operation, preventing production failures.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">When You Need Endurance Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Critical scenarios where long-term stability testing prevents costly production issues.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Long-Duration Testing Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We use specialized tools for extended testing periods with comprehensive monitoring capabilities.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Execute Endurance Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to validate long-term stability and detect time-based degradation issues.</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Validate Long-Term Stability?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Let's discuss your endurance testing needs and create a strategy that ensures your application runs reliably 24/7.</p>
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
