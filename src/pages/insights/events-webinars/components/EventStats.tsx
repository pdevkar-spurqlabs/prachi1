
import { useState, useEffect, useRef } from 'react';

const stats = [
  { icon: 'ri-calendar-event-line', value: '30+', label: 'Events Hosted', trend: '+8 this year' },
  { icon: 'ri-group-line', value: '5,000+', label: 'Total Attendees', trend: '+40% YoY' },
  { icon: 'ri-mic-line', value: '85+', label: 'Expert Speakers', trend: 'From 12 countries' },
  { icon: 'ri-video-line', value: '200+', label: 'Hours of Content', trend: 'All recorded' },
  { icon: 'ri-global-line', value: '15+', label: 'Countries Reached', trend: 'Growing globally' },
  { icon: 'ri-thumb-up-line', value: '97%', label: 'Satisfaction Rate', trend: 'Consistently high' },
];

export default function EventStats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
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
              Our Event Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              Numbers that reflect our commitment to building a thriving QA community.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: visible ? `${100 + i * 80}ms` : '0ms' }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-lg mb-4 group-hover:bg-orange-100 transition-colors">
                  <i className={`${stat.icon} text-orange-500 text-lg`}></i>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-gray-700 mb-2">{stat.label}</p>
                <p className="text-xs text-orange-500 font-medium flex items-center gap-1">
                  <span className="w-3 h-3 flex items-center justify-center"><i className="ri-arrow-up-line text-xs"></i></span>
                  {stat.trend}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
