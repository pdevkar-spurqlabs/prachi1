'use client';
import { useState, useEffect } from 'react';

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, uptime: 0, satisfaction: 0, faster: 0 });

  const reasons = [
    {
      icon: 'ri-medal-line',
      title: 'Specialist QA partner, not generalist vendor',
      description: 'We live and breathe quality assurance. Our entire focus is on testing excellence, not spreading thin across multiple services.',
      stat: '100%',
      statLabel: 'QA Focused'
    },
    {
      icon: 'ri-team-line',
      title: 'Embedded, high‑ownership teams',
      description: 'Our QA engineers integrate directly with your team, taking full ownership of quality outcomes like internal team members.',
      stat: '4.9/5',
      statLabel: 'Team Rating'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Data‑driven, outcome‑oriented',
      description: 'We measure what matters and continuously optimize based on real metrics, not vanity numbers or activity reports.',
      stat: '67%',
      statLabel: 'Fewer Bugs'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Flexible, transparent collaboration',
      description: 'Clear communication, adaptable engagement models, and no hidden costs. We work the way you work.',
      stat: '0',
      statLabel: 'Hidden Fees'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: 'ri-shield-check-line', color: 'from-amber-400 to-amber-600' },
    { name: 'SOC 2 Type II', icon: 'ri-lock-line', color: 'from-emerald-400 to-emerald-600' },
    { name: 'GDPR Ready', icon: 'ri-global-line', color: 'from-sky-400 to-sky-600' },
    { name: 'AWS Partner', icon: 'ri-cloud-line', color: 'from-orange-400 to-orange-600' }
  ];

  const clientLogos = [
    'TechFlow', 'DataSync', 'CloudNine', 'ScaleUp', 'DevOps Pro', 'AgileHub'
  ];

  // Observe when the section becomes visible to start counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('why-choose-us');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Animate counters once they are visible
  useEffect(() => {
    if (!countersVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts({
        clients: Math.round(150 * eased),
        uptime: Math.round(99.9 * eased * 10) / 10,
        satisfaction: Math.round(98 * eased),
        faster: Math.round(3 * eased * 10) / 10
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [countersVisible]);

  // Auto‑rotate the reason cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReason(prev => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400"></span>
              Why SpurQLabs
              <span className="w-8 h-px bg-orange-400"></span>
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
              Why product teams{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">stick with us</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              The difference that keeps teams coming back, release after release
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Left: Interactive Stats Dashboard */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[450px]">
                {/* Main stat card */}
                <div className={`absolute top-0 left-0 lg:left-4 w-[280px] bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-2xl transform transition-all duration-700 ${countersVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transform: 'rotate(-3deg)' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Live Stats</span>
                  </div>
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-1">
                    {counts.clients}+
                  </div>
                  <div className="text-gray-300 font-medium">Product Teams Served</div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                    <i className="ri-arrow-up-line"></i>
                    <span>23% this quarter</span>
                  </div>
                </div>

                {/* Secondary stat card */}
                <div className={`absolute top-20 right-0 lg:right-4 w-[240px] bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 shadow-2xl transform transition-all duration-700 delay-200 ${countersVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transform: 'rotate(5deg)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Uptime</span>
                    <div className="w-12 h-12 relative">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
                        <circle
                          cx="24" cy="24" r="20"
                          stroke="url(#uptimeGradient)"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={`${counts.uptime * 1.256} 126`}
                          strokeLinecap="round"
                          className="transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient id="uptimeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-emerald-400">{counts.uptime}%</div>
                  <div className="text-gray-400 text-sm">Service Reliability</div>
                </div>

                {/* Third stat card */}
                <div className={`absolute bottom-20 left-4 lg:left-12 w-[220px] bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 shadow-2xl transform transition-all duration-700 delay-300 ${countersVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transform: 'rotate(2deg)' }}>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">Client Satisfaction</div>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-bold text-sky-400">{counts.satisfaction}%</div>
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <i key={star} className="ri-star-fill text-amber-400 text-sm"></i>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">Would recommend us</div>
                </div>

                {/* Fourth stat card */}
                <div className={`absolute bottom-0 right-8 lg:right-16 w-[200px] bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 shadow-2xl transform transition-all duration-700 delay-400 ${countersVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transform: 'rotate(-4deg)' }}>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">Release Speed</div>
                  <div className="text-4xl font-bold text-orange-400">{counts.faster}x</div>
                  <div className="text-gray-400 text-sm">Faster to production</div>
                  <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-1000"
                      style={{ width: `${counts.faster * 33}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Reasons with interactive cards */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-r ${activeReason === index ? 'from-gray-800/80 to-gray-800/40 border-orange-500/50' : 'from-gray-800/40 to-transparent border-gray-700/30'} backdrop-blur-sm rounded-xl p-5 border transition-all duration-500 cursor-pointer group`}
                  onMouseEnter={() => setActiveReason(index)}
                >
                  {/* Active indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-orange-400 to-amber-500 transition-opacity duration-300 ${activeReason === index ? 'opacity-100' : 'opacity-0'}`}></div>

                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 ${activeReason === index ? 'bg-gradient-to-br from-orange-500 to-amber-500' : 'bg-gray-700/50'}`}>
                      <i className={`${reason.icon} text-xl ${activeReason === index ? 'text-white' : 'text-gray-400'}`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base lg:text-lg font-semibold text-white">{reason.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${activeReason === index ? 'bg-orange-500/20 text-orange-400 scale-100' : 'bg-gray-700/50 text-gray-500 scale-90'}`}>
                          {reason.stat} {reason.statLabel}
                        </div>
                      </div>
                      <p className={`text-sm transition-all duration-300 ${activeReason === index ? 'text-gray-300' : 'text-gray-500'}`}>
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar for active item */}
                  {activeReason === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700 rounded-b-xl overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 animate-progress"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {/* Removed certifications section */}

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://calendly.com/nickhildebrant-spurqlabs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 cursor-pointer whitespace-nowrap group"
            >
              Experience the SpurQLabs Difference
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 4s linear;
        }
      `}</style>
    </section>
  );
}
