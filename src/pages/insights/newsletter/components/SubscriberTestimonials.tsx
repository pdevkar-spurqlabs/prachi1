
import { useState, useRef, useEffect } from 'react';
import { subscriberTestimonials } from '../../../../mocks/newsletter';

export default function SubscriberTestimonials() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % subscriberTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [visible]);

  const current = subscriberTestimonials[activeIndex];

  const keyframes = `
    @keyframes progress-fill {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `;

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              What Subscribers Say
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by QA Leaders</h2>
          </div>

          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i} className="w-5 h-5 flex items-center justify-center"><i className="ri-star-fill text-lg text-amber-400" /></span>
                ))}
              </div>

              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50">
                  <img src={current.avatar} alt={current.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{current.name}</p>
                  <p className="text-gray-400 text-xs">{current.role}, {current.company}</p>
                </div>
              </div>

              {/* Avatar navigation */}
              <div className="flex justify-center gap-3 mb-6">
                {subscriberTestimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer ${i === activeIndex ? 'border-orange-500 scale-110' : 'border-white/20 opacity-50 hover:opacity-80'}`}
                  >
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="w-32 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
                <div
                  ref={progressRef}
                  key={activeIndex}
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                  style={{ animation: 'progress-fill 5s linear forwards' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
    </section>
  );
}
