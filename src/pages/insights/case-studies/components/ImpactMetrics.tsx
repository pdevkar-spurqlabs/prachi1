
import { useEffect, useRef, useState } from 'react';

const metrics = [
  {
    icon: 'ri-bug-line',
    value: '85%',
    label: 'Average Bug Reduction',
    description: 'Across all client engagements in the past 12 months',
    trend: '+12% vs last year',
  },
  {
    icon: 'ri-speed-line',
    value: '3.2x',
    label: 'Faster Release Cycles',
    description: 'Average improvement in deployment frequency',
    trend: 'Consistent improvement',
  },
  {
    icon: 'ri-money-dollar-circle-line',
    value: '$50M+',
    label: 'Client Cost Savings',
    description: 'Total estimated savings from prevented production issues',
    trend: 'Growing annually',
  },
  {
    icon: 'ri-timer-line',
    value: '72 hrs',
    label: 'Avg Time to First Value',
    description: 'From kickoff to first actionable test results delivered',
    trend: 'Industry-leading speed',
  },
  {
    icon: 'ri-emotion-happy-line',
    value: '98%',
    label: 'Client Satisfaction Score',
    description: 'Based on quarterly NPS surveys across all accounts',
    trend: 'Top 1% in industry',
  },
  {
    icon: 'ri-repeat-line',
    value: '94%',
    label: 'Client Retention Rate',
    description: 'Clients who continue engagement beyond initial contract',
    trend: '3-year average',
  },
];

export default function ImpactMetrics() {
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
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Ensure the observer is cleaned up safely
      try {
        observer.disconnect();
      } catch (e) {
        console.error('Failed to disconnect IntersectionObserver:', e);
      }
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              By The Numbers
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Aggregate Impact Across <span className="text-orange-500">500+ Engagements</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These aren&apos;t vanity metrics — they&apos;re real, measurable outcomes our clients experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: visible ? `${150 + i * 100}ms` : '0ms' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                      <i className={`${m.icon} text-xl text-orange-500`}></i>
                    </div>
                    <span className="text-[11px] text-emerald-600 font-medium bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <i className="ri-arrow-up-line text-xs"></i>
                      {m.trend}
                    </span>
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    {m.value}
                  </p>
                  <p className="font-semibold text-gray-800 text-sm mb-2">{m.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
