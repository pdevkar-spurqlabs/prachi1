import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function ScalabilityTestingPage() {
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
    { icon: 'ri-line-chart-line', title: 'Growth Readiness', description: 'Validate that your infrastructure can scale seamlessly as your user base grows from thousands to millions.' },
    { icon: 'ri-funds-line', title: 'Cost Efficiency', description: 'Identify optimal scaling strategies that balance performance with infrastructure costs, avoiding over-provisioning.' },
    { icon: 'ri-cloud-line', title: 'Auto-Scaling Validation', description: 'Test cloud auto-scaling configurations to ensure they trigger correctly and scale resources efficiently.' },
    { icon: 'ri-database-2-line', title: 'Database Scaling', description: 'Verify database read replicas, sharding strategies, and connection pooling work effectively under increasing loads.' },
    { icon: 'ri-global-line', title: 'Geographic Distribution', description: 'Test multi-region deployments and CDN configurations to ensure consistent performance across global user bases.' },
    { icon: 'ri-bar-chart-grouped-line', title: 'Capacity Planning', description: 'Get data-driven insights for infrastructure planning, helping you scale proactively rather than reactively.' }
  ];

  const tools = [
    { name: 'Kubernetes', icon: 'ri-ship-line' },
    { name: 'Gatling', icon: 'ri-rocket-line' },
    { name: 'k6', icon: 'ri-speed-line' },
    { name: 'Terraform', icon: 'ri-code-box-line' },
    { name: 'AWS Auto Scaling', icon: 'ri-cloud-line' },
    { name: 'Azure Monitor', icon: 'ri-bar-chart-box-line' },
    { name: 'Grafana', icon: 'ri-dashboard-line' },
    { name: 'Prometheus', icon: 'ri-pie-chart-line' },
    { name: 'Locust', icon: 'ri-bug-line' },
    { name: 'JMeter', icon: 'ri-flashlight-line' }
  ];

  const metrics = [
    { label: 'Scale Factor', value: '10x', icon: 'ri-line-chart-line', color: 'text-orange-600' },
    { label: 'Resource Efficiency', value: '85%', icon: 'ri-dashboard-line', color: 'text-orange-600' },
    { label: 'Auto-scaling Time', value: '&lt;60s', icon: 'ri-timer-line', color: 'text-orange-600' },
    { label: 'Cost Optimization', value: '40%', icon: 'ri-money-dollar-circle-line', color: 'text-orange-600' }
  ];

  const scenarios = [
    {
      title: 'SaaS Platform Growth',
      description: 'Validate your multi-tenant SaaS can scale from 1,000 to 100,000 customers without performance degradation or architectural changes.',
      icon: 'ri-apps-line',
      metrics: ['Horizontal scaling', 'Tenant isolation', 'Resource efficiency']
    },
    {
      title: 'Viral App Launch',
      description: 'Prepare for exponential user growth when your mobile or web app goes viral, ensuring infrastructure scales automatically.',
      icon: 'ri-rocket-2-line',
      metrics: ['Rapid scaling', 'Global CDN', 'Database sharding']
    },
    {
      title: 'Enterprise Expansion',
      description: 'Test enterprise applications as they expand from single-region to multi-region deployments serving global workforces.',
      icon: 'ri-building-line',
      metrics: ['Multi-region', 'Data replication', 'Latency optimization']
    },
    {
      title: 'Marketplace Scaling',
      description: 'Ensure marketplace platforms can handle growing numbers of sellers, buyers, and transactions without bottlenecks.',
      icon: 'ri-store-3-line',
      metrics: ['Transaction volume', 'Search performance', 'Payment scaling']
    }
  ];

  const process = [
    { step: '01', title: 'Current State Analysis', description: 'Assess your current architecture, infrastructure, and performance baselines to understand scaling starting points.', icon: 'ri-search-line' },
    { step: '02', title: 'Growth Projection Modeling', description: 'Work with your team to model realistic growth scenarios based on business projections and market analysis.', icon: 'ri-line-chart-line' },
    { step: '03', title: 'Scaling Strategy Design', description: 'Design horizontal and vertical scaling strategies, including auto-scaling rules and resource allocation policies.', icon: 'ri-layout-grid-line' },
    { step: '04', title: 'Progressive Load Testing', description: 'Execute tests that simulate gradual growth patterns, monitoring how systems scale at each growth milestone.', icon: 'ri-play-circle-line' },
    { step: '05', title: 'Bottleneck Identification', description: 'Identify architectural and infrastructure bottlenecks that prevent efficient scaling at various load levels.', icon: 'ri-error-warning-line' },
    { step: '06', title: 'Optimization Recommendations', description: 'Provide detailed recommendations for architecture improvements, caching strategies, and infrastructure optimization.', icon: 'ri-lightbulb-line' }
  ];

  const faqs = [
    {
      question: 'What is the difference between scalability and performance testing?',
      answer: 'Performance testing measures how fast your system runs under specific loads, while scalability testing measures how well your system handles increasing loads over time. Scalability testing focuses on growth patterns, resource efficiency, and the ability to add capacity. Both are complementary and often performed together.'
    },
    {
      question: 'How do you test horizontal vs vertical scaling?',
      answer: 'We test horizontal scaling by adding more servers/instances and measuring load distribution and performance consistency. For vertical scaling, we increase resources (CPU, RAM) on existing servers and measure performance improvements. We help you determine which approach is more cost-effective for your specific architecture.'
    },
    {
      question: 'Can you test cloud auto-scaling configurations?',
      answer: 'Yes! We validate that your auto-scaling policies trigger at appropriate thresholds, scale up quickly enough to handle load increases, and scale down efficiently to optimize costs. We test AWS Auto Scaling, Azure Scale Sets, Google Cloud Autoscaler, and Kubernetes HPA configurations.'
    },
    {
      question: 'How long does scalability testing take?',
      answer: 'A comprehensive scalability testing engagement typically takes 3-6 weeks, depending on the complexity of your architecture and the number of growth scenarios to test. This includes planning, test execution across multiple scaling levels, analysis, and detailed reporting with recommendations.'
    },
    {
      question: 'Do you test database scalability?',
      answer: 'Absolutely! Database scalability is often the biggest bottleneck. We test read replicas, connection pooling, query optimization, caching strategies, sharding implementations, and NoSQL scaling patterns. We measure query performance, replication lag, and connection handling at scale.'
    },
    {
      question: 'What deliverables do we receive?',
      answer: 'You receive comprehensive reports including current capacity baselines, scaling test results at each growth level, bottleneck analysis, cost projections for different scaling strategies, architecture recommendations, and a capacity planning roadmap aligned with your business growth projections.'
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
              <i className="ri-line-chart-line text-orange-300"></i>
              <span className="text-orange-200 font-semibold text-sm">Performance Testing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Scalability Testing Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Validate your application's ability to scale up or down efficiently as user demand changes, ensuring optimal performance at any size.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Scalability Testing Quote
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
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Why Scalability Testing Matters</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Build for Growth from Day One</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Scalability testing ensures your application can grow with your business without performance degradation or costly re-architecture.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">When You Need Scalability Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Critical scenarios where scalability testing ensures your application can handle growth efficiently.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry-Leading Scalability Testing Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We leverage powerful tools to validate your application's scalability across all dimensions.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Execute Scalability Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A comprehensive approach that validates your application's ability to scale efficiently in all directions.</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build for Scale?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Let's discuss your scalability testing needs and create a strategy that ensures your application grows efficiently with your business.</p>
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
