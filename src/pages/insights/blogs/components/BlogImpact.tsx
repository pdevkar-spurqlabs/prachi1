
import { useEffect, useRef, useState } from 'react';

const impactData = [
  { icon: 'ri-article-line', value: '120+', label: 'Articles Published', trend: '+24 this quarter' },
  { icon: 'ri-eye-line', value: '85K+', label: 'Monthly Readers', trend: '+18% growth' },
  { icon: 'ri-download-line', value: '12K+', label: 'Resource Downloads', trend: '+32% this year' },
  { icon: 'ri-share-line', value: '45K+', label: 'Social Shares', trend: '+22% engagement' },
  { icon: 'ri-global-line', value: '90+', label: 'Countries Reached', trend: 'Global audience' },
  { icon: 'ri-star-line', value: '4.9/5', label: 'Reader Rating', trend: 'Based on 2,400+ reviews' },
];

export default function BlogImpact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Blog Impact
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Our Content <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Reaches Far</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {impactData.map((item, i) => (
              <div
                key={i}
                className={`group bg-white/5 backdrop-blur-sm rounded-xl p-5 lg:p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 cursor-default ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 rounded-xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 mb-3">
                    <i className={`${item.icon} text-xl text-orange-400`} />
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-white mb-1">{item.value}</p>
                  <p className="text-sm text-gray-400 mb-2">{item.label}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-up-line text-xs text-emerald-400" /></span>
                    <span className="text-xs text-emerald-400">{item.trend}</span>
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
