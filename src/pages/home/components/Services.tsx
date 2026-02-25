import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const featuredService = {
    icon: 'ri-service-line',
    title: 'Testing‑as‑a‑Service',
    description: 'End-to-end QA coverage with dedicated teams that integrate into your workflow seamlessly. Scale up or down based on your sprint needs.',
    tags: ['Dedicated Teams', 'Flexible Scaling', '24/7 Support'],
    stats: { value: '500+', label: 'Projects Delivered' },
    highlights: ['Seamless Integration', 'Sprint-Based Scaling', 'Dedicated QA Teams']
  };

  const services = [
    {
      icon: 'ri-robot-line',
      title: 'Test Automation',
      description: 'Intelligent automation frameworks that reduce regression time and increase release confidence.',
      tags: ['Selenium', 'Cypress', 'Playwright'],
      stats: { value: '85%', label: 'Faster Releases' }
    },
    {
      icon: 'ri-speed-line',
      title: 'Performance Testing',
      description: 'Ensure your application scales under load and handles peak traffic without breaking.',
      tags: ['Load Testing', 'Stress Testing', 'Scalability'],
      stats: { value: '10M+', label: 'Users Simulated' }
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security Testing',
      description: 'Identify vulnerabilities before hackers do. OWASP-compliant penetration testing.',
      tags: ['Pen Testing', 'OWASP', 'Compliance'],
      stats: { value: '99.9%', label: 'Threat Detection' }
    },
    {
      icon: 'ri-git-merge-line',
      title: 'DevOps & CI/CD',
      description: 'Integrate testing into your pipeline for faster feedback and deployment cycles.',
      tags: ['Jenkins', 'GitHub Actions', 'Azure DevOps'],
      stats: { value: '4x', label: 'Faster Deployments' }
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Testing',
      description: 'Comprehensive testing across devices, platforms, and real-world usage scenarios.',
      tags: ['iOS', 'Android', 'Cross-Platform'],
      stats: { value: '200+', label: 'Device Coverage' }
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Consulting & Advisory',
      description: 'Expert guidance on test strategy, process improvement, tool selection, and building effective QA practices.',
      tags: ['Strategy', 'Process Optimization', 'Training'],
      stats: { value: '100+', label: 'Teams Advised' }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-stone-50 via-white to-orange-50/40 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Testing services that{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">plug into your SDLC</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Flexible, scalable testing solutions that seamlessly integrate with your development workflow.
            </p>
          </div>

          {/* Main Layout: Featured + Grid */}
          <div className="flex flex-col lg:flex-row gap-6 mb-16">
            {/* Featured Service - Left Side */}
            <div 
              className={`lg:w-[420px] lg:flex-shrink-0 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              onMouseEnter={() => setHoveredIndex(-1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-500 cursor-pointer ${hoveredIndex === -1 ? 'shadow-2xl shadow-orange-500/20 scale-[1.01]' : 'shadow-xl'}`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-2xl"></div>
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-8">
                  <i className="ri-star-fill text-white text-xs"></i>
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Most Popular</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-6 transition-transform duration-500 ${hoveredIndex === -1 ? 'rotate-3 scale-110' : ''}`}>
                  <i className={`${featuredService.icon} text-3xl text-white`}></i>
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{featuredService.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-8">{featuredService.description}</p>

                {/* Stats */}
                <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-white/10">
                  <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {featuredService.stats.value}
                  </span>
                  <span className="text-gray-400 text-sm">{featuredService.stats.label}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {featuredService.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500/20">
                        <i className="ri-check-line text-orange-400 text-sm"></i>
                      </div>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {featuredService.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/10 text-gray-300 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${hoveredIndex === -1 ? 'shadow-lg shadow-orange-500/30' : ''}`}
                >
                  <span>Get Started</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>

            {/* Services Grid - Right Side */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to="/services"
                  className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`relative h-full bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-400 cursor-pointer ${hoveredIndex === index ? 'shadow-xl shadow-orange-100 border-orange-200 -translate-y-1' : 'shadow-sm hover:shadow-md'}`}>
                    {/* Top Row: Icon + Stats */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-400 ${hoveredIndex === index ? 'bg-gradient-to-br from-orange-500 to-amber-500' : 'bg-orange-50'}`}>
                        <i className={`${service.icon} text-xl transition-colors duration-400 ${hoveredIndex === index ? 'text-white' : 'text-orange-500'}`}></i>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-orange-500' : 'text-gray-900'}`}>
                          {service.stats.value}
                        </div>
                        <div className="text-xs text-gray-400">{service.stats.label}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${hoveredIndex === index ? 'text-orange-600' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 ${hoveredIndex === index ? 'bg-orange-100 text-orange-600' : 'bg-gray-50 text-gray-500'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div className={`absolute bottom-5 right-5 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-400 ${hoveredIndex === index ? 'bg-orange-500 text-white opacity-100 translate-x-0' : 'bg-gray-100 text-gray-400 opacity-0 translate-x-2'}`}>
                      <i className="ri-arrow-right-up-line text-sm"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <span>Discuss Your Testing Needs</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium transition-colors duration-300 cursor-pointer">
                <i className="ri-file-list-3-line"></i>
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
