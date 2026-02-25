import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function LoadTestingPage() {
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
    { icon: 'ri-group-line', title: 'Concurrent User Simulation', description: 'Simulate thousands to millions of concurrent users to validate your system capacity under realistic traffic conditions.' },
    { icon: 'ri-timer-line', title: 'Response Time Analysis', description: 'Measure and optimize response times across all endpoints to ensure fast, responsive user experiences.' },
    { icon: 'ri-line-chart-line', title: 'Bottleneck Identification', description: 'Pinpoint performance bottlenecks in your infrastructure, database queries, and application code.' },
    { icon: 'ri-server-line', title: 'Infrastructure Validation', description: 'Verify that your servers, databases, and cloud resources can handle expected and peak loads.' },
    { icon: 'ri-money-dollar-circle-line', title: 'Cost Optimization', description: 'Right-size your infrastructure investments by understanding actual capacity needs and usage patterns.' },
    { icon: 'ri-shield-check-line', title: 'Pre-Launch Confidence', description: 'Launch with confidence knowing your application can handle real-world traffic without crashes or slowdowns.' }
  ];

  const tools = [
    { name: 'Apache JMeter', icon: 'ri-flashlight-line' },
    { name: 'Gatling', icon: 'ri-rocket-line' },
    { name: 'k6', icon: 'ri-speed-line' },
    { name: 'LoadRunner', icon: 'ri-dashboard-line' },
    { name: 'BlazeMeter', icon: 'ri-fire-line' },
    { name: 'Locust', icon: 'ri-bug-line' },
    { name: 'Artillery', icon: 'ri-sword-line' },
    { name: 'Grafana', icon: 'ri-bar-chart-box-line' },
    { name: 'Prometheus', icon: 'ri-pie-chart-line' },
    { name: 'New Relic', icon: 'ri-pulse-line' }
  ];

  const metrics = [
    { label: 'Response Time', value: '&lt;2s', icon: 'ri-time-line', color: 'text-orange-600' },
    { label: 'Throughput', value: '10K req/s', icon: 'ri-speed-up-line', color: 'text-orange-600' },
    { label: 'Error Rate', value: '&lt;0.1%', icon: 'ri-error-warning-line', color: 'text-orange-600' },
    { label: 'Concurrent Users', value: '50K+', icon: 'ri-group-line', color: 'text-orange-600' }
  ];

  const scenarios = [
    {
      title: 'E-commerce Flash Sales',
      description: 'Validate your platform can handle sudden traffic spikes during promotional events without crashes or slowdowns.',
      icon: 'ri-shopping-cart-line',
      metrics: ['10x normal traffic', '99.9% uptime', 'Sub-second checkout']
    },
    {
      title: 'SaaS Platform Scaling',
      description: 'Ensure your multi-tenant application maintains performance as your customer base grows exponentially.',
      icon: 'ri-cloud-line',
      metrics: ['1M+ daily users', 'Consistent latency', 'Auto-scaling validation']
    },
    {
      title: 'Financial Trading Systems',
      description: 'Test high-frequency trading platforms under extreme transaction volumes with microsecond precision requirements.',
      icon: 'ri-stock-line',
      metrics: ['100K+ TPS', 'Ultra-low latency', 'Zero data loss']
    },
    {
      title: 'Media Streaming Launch',
      description: 'Verify your streaming infrastructure can deliver content to millions of viewers simultaneously without buffering.',
      icon: 'ri-live-line',
      metrics: ['5M concurrent streams', 'CDN optimization', 'Adaptive bitrate']
    }
  ];

  const process = [
    { step: '01', title: 'Requirements Analysis', description: 'Define performance goals, SLAs, and expected user loads based on business objectives and traffic projections.', icon: 'ri-file-list-3-line' },
    { step: '02', title: 'Test Design', description: 'Create realistic user scenarios, transaction flows, and load profiles that mirror actual usage patterns.', icon: 'ri-draft-line' },
    { step: '03', title: 'Environment Setup', description: 'Configure test environments, load generators, and monitoring tools to match production infrastructure.', icon: 'ri-settings-3-line' },
    { step: '04', title: 'Test Execution', description: 'Run progressive load tests from baseline to peak capacity while monitoring all system metrics in real-time.', icon: 'ri-play-circle-line' },
    { step: '05', title: 'Analysis & Reporting', description: 'Analyze results, identify bottlenecks, and provide detailed reports with actionable optimization recommendations.', icon: 'ri-file-chart-line' },
    { step: '06', title: 'Optimization Support', description: 'Work with your team to implement fixes, then retest to validate improvements and capacity gains.', icon: 'ri-refresh-line' }
  ];

  const faqs = [
    {
      question: 'How many concurrent users should we test for?',
      answer: 'We recommend testing for 2-3x your expected peak traffic to ensure headroom for growth and unexpected spikes. We analyze your historical traffic patterns, business projections, and industry benchmarks to determine optimal test loads.'
    },
    {
      question: 'How long does a load testing engagement take?',
      answer: 'A typical load testing project takes 2-4 weeks, including planning, test design, execution, and reporting. Complex applications or multiple test scenarios may require additional time. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Can you test our production environment?',
      answer: 'We strongly recommend testing in a production-like staging environment to avoid any risk to live users. However, we can perform controlled production testing during off-peak hours if necessary, with proper safeguards and monitoring in place.'
    },
    {
      question: 'What metrics do you measure during load testing?',
      answer: 'We track response times, throughput, error rates, CPU/memory usage, database performance, network latency, and custom business metrics. All data is visualized in real-time dashboards and included in comprehensive reports.'
    },
    {
      question: 'Do you provide recommendations after testing?',
      answer: 'Yes! We deliver detailed analysis reports with specific, prioritized recommendations for infrastructure optimization, code improvements, database tuning, and caching strategies. We can also support implementation and retest to validate improvements.'
    },
    {
      question: 'How do you simulate realistic user behavior?',
      answer: 'We create test scripts based on actual user journeys, think times, and transaction patterns from your analytics data. This includes varied user types, geographic distribution, device types, and realistic data variations to mirror production traffic accurately.'
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
              <i className="ri-speed-line text-orange-300"></i>
              <span className="text-orange-200 font-semibold text-sm">Performance Testing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Load Testing Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Validate your application's capacity to handle thousands of concurrent users with comprehensive load testing that identifies bottlenecks before they impact your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Load Testing Quote
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
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Why Load Testing Matters</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ensure Peak Performance Under Any Load</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive load testing validates your system capacity and identifies performance bottlenecks before they impact users.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">When You Need Load Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Critical scenarios where load testing prevents costly downtime and ensures exceptional user experiences.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry-Leading Load Testing Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We leverage the most powerful performance testing tools to deliver accurate, actionable insights.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Execute Load Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach that ensures comprehensive coverage and actionable results.</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Validate Your System Capacity?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Let's discuss your load testing needs and create a strategy that ensures your application performs flawlessly under any traffic volume.</p>
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
