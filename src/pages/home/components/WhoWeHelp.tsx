
import { useState } from 'react';

export default function WhoWeHelp() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const audiences = [
    {
      icon: 'ri-rocket-2-line',
      title: 'VC‑backed & Growth‑stage Startups',
      description: 'Ship features quickly while we protect critical customer journeys and revenue flows.',
      gradient: 'from-orange-500 to-orange-600',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)',
      number: '01'
    },
    {
      icon: 'ri-building-4-line',
      title: 'Established Product & SaaS Companies',
      description: 'Modernize QA, stabilize releases, and optimize existing automation and processes.',
      gradient: 'from-gray-800 to-gray-900',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
      number: '02'
    },
    {
      icon: 'ri-code-box-line',
      title: 'Agencies & Development Partners',
      description: 'You focus on building; we ensure what you deliver performs reliably across devices, browsers, and environments.',
      gradient: 'from-orange-400 to-orange-500',
      bgPattern: 'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.12) 0%, transparent 50%)',
      number: '03'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              <span className="text-orange-600 text-sm font-semibold uppercase tracking-wider">Our Clients</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              Built for fast‑moving
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">product teams.</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SpurQLabs is the preferred testing partner for startups and product companies that need to move fast without compromising quality.
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div 
                  className={`relative h-full bg-white rounded-2xl p-8 lg:p-10 border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                    hoveredIndex === index 
                      ? 'border-orange-500 shadow-2xl shadow-orange-500/10 -translate-y-2' 
                      : 'border-gray-100 shadow-lg hover:shadow-xl'
                  }`}
                  style={{ background: hoveredIndex === index ? audience.bgPattern : undefined }}
                >
                  {/* Number badge */}
                  <div className={`absolute top-6 right-6 text-5xl font-bold transition-all duration-500 ${
                    hoveredIndex === index ? 'text-orange-500/20' : 'text-gray-100'
                  }`}>
                    {audience.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-500 ${
                    hoveredIndex === index 
                      ? `bg-gradient-to-br ${audience.gradient} shadow-lg` 
                      : 'bg-orange-50'
                  }`}>
                    <i className={`${audience.icon} text-2xl transition-colors duration-500 ${
                      hoveredIndex === index ? 'text-white' : 'text-orange-500'
                    }`}></i>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight pr-12">
                    {audience.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {audience.description}
                  </p>
                  
                  {/* Hover arrow */}
                  <div className={`mt-6 flex items-center gap-2 text-orange-500 font-semibold transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}>
                    <span className="text-sm">Learn more</span>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.gradient} transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-gray-800/30 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              See if we're a fit for your team
              <span className="w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full group-hover:bg-orange-400 transition-colors">
                <i className="ri-arrow-right-line text-white"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
