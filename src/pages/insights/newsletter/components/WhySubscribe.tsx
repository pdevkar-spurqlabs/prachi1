
import { useState, useRef, useEffect } from 'react';

export default function WhySubscribe() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: 'ri-flashlight-line',
      title: 'Actionable Insights',
      description: 'Every article includes practical takeaways you can implement in your QA workflow immediately.',
      stat: '92%',
      statLabel: 'find tips actionable',
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Industry Trends',
      description: 'Stay ahead of the curve with data-driven analysis of emerging testing technologies and methodologies.',
      stat: '48+',
      statLabel: 'trends covered yearly',
    },
    {
      icon: 'ri-user-star-line',
      title: 'Expert Contributors',
      description: 'Content authored by seasoned QA leaders, architects, and practitioners with decades of combined experience.',
      stat: '25+',
      statLabel: 'expert contributors',
    },
    {
      icon: 'ri-file-download-line',
      title: 'Exclusive Resources',
      description: 'Subscribers get early access to templates, checklists, frameworks, and downloadable guides.',
      stat: '30+',
      statLabel: 'free resources',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Why Subscribe
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">More Than Just a Newsletter</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our newsletter is a curated knowledge hub designed to help QA professionals grow, learn, and stay competitive.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className={`group relative bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-700 cursor-default overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full group-hover:from-orange-500/10 transition-all duration-500" />

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-500 transition-colors duration-300 mb-5">
                  <i className={`${reason.icon} text-2xl text-orange-500 group-hover:text-white transition-colors duration-300`} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{reason.description}</p>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-orange-500">{reason.stat}</p>
                  <p className="text-xs text-gray-400">{reason.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
