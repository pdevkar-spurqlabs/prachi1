
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function InfographicsCTA() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Guard against browsers that do not support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const benefits = [
    { icon: 'ri-mail-send-line', text: 'New infographics delivered weekly' },
    { icon: 'ri-team-line', text: 'Trusted by 50K+ QA professionals' },
    { icon: 'ri-download-cloud-line', text: 'Free to download and share' },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Animated icon */}
            <div className="relative w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <div className="absolute inset-0 bg-orange-100 rounded-2xl animate-pulse" />
              <i className="ri-bar-chart-box-line text-3xl text-orange-500 relative z-10" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Want More Visual Insights?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our team creates new data-driven infographics every week. Explore our full
              resource library or get in touch to discuss custom visual content for your
              organization.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-50">
                    <i className={`${b.icon} text-base text-orange-500`} />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{b.text}</span>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <a
                href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-base" />
                </span>
                Book a Free Call
              </a>

              <Link
                to="/services"
                className="px-8 py-3.5 border-2 border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-500 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-base" />
                </span>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
