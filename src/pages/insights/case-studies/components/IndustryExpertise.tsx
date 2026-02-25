
import { useEffect, useRef, useState } from 'react';
import { industries } from '../../../../mocks/caseStudies';

export default function IndustryExpertise() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      try {
        observer.disconnect();
      } catch (e) {
        // Silently ignore – observer may have been already disconnected
        console.error('IntersectionObserver disconnect error:', e);
      }
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Domain Expertise
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industries We <span className="text-orange-500">Transform</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep domain knowledge across the industries that matter most — so we understand your
              challenges before we even start.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
            {industries.map((ind, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 text-center cursor-default overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: visible ? `${150 + i * 80}ms` : '0ms' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-all duration-500"></div>
                <div className="relative">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl ${ind.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`${ind.icon} text-2xl`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{ind.name}</h3>
                  <p className="text-orange-500 font-semibold text-xs">{ind.count} projects</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div
            className={`mt-14 flex flex-wrap justify-center items-center gap-6 lg:gap-10 transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { icon: 'ri-shield-check-line', label: 'ISO 27001 Certified' },
              { icon: 'ri-award-line', label: 'ISTQB Certified Team' },
              { icon: 'ri-lock-line', label: 'SOC 2 Compliant' },
              { icon: 'ri-verified-badge-line', label: 'HIPAA Ready' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2.5 text-gray-500">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100">
                  <i className={`${badge.icon} text-gray-500`}></i>
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
