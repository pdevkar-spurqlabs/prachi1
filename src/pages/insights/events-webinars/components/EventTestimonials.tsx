
import { useState, useEffect, useRef } from 'react';
import { eventTestimonials } from '../../../../mocks/eventsWebinars';

export default function EventTestimonials() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % eventTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = eventTestimonials[activeIndex];

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gray-900">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Attendee Voices
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              What Attendees Say
            </h2>
          </div>

          <div
            className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-10 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full">
                  <i className="ri-double-quotes-l text-white text-sm"></i>
                </span>
              </div>

              <div className="mb-6">
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <span key={i} className="w-5 h-5 flex items-center justify-center text-orange-400">
                      <i className="ri-star-fill text-sm"></i>
                    </span>
                  ))}
                </div>
                <p className="text-white text-base lg:text-lg leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50">
                  <img src={current.avatar} alt={current.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{current.name}</p>
                  <p className="text-gray-400 text-xs">{current.role}</p>
                  <p className="text-orange-400 text-xs mt-0.5">{current.event}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6 w-full h-0.5 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{
                    animation: 'progressFill 5s linear infinite',
                  }}
                ></div>
              </div>
            </div>

            <style>{`
              @keyframes progressFill {
                0% { width: 0%; }
                100% { width: 100%; }
              }
            `}</style>

            {/* Avatar navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {eventTestimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? 'border-orange-500 scale-110 shadow-lg shadow-orange-500/30'
                      : 'border-gray-600 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
