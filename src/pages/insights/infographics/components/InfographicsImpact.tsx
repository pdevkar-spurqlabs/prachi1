
import { useState, useRef, useEffect } from 'react';
import { impactNumbers } from '../../../../mocks/infographics';

export default function InfographicsImpact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              By The Numbers
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Infographics Impact
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trusted by thousands of QA professionals worldwide as their go-to visual
              resource library.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {impactNumbers.map((item, idx) => (
              <div
                key={idx}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 cursor-default ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 rounded-xl transition-all duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500/10 shrink-0">
                    <i className={`${item.icon} text-2xl text-orange-400`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                    <p className="text-sm font-medium text-gray-300 mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="w-3 h-3 flex items-center justify-center">
                        <i className="ri-arrow-up-line text-[10px] text-emerald-400" />
                      </span>
                      {item.trend}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
