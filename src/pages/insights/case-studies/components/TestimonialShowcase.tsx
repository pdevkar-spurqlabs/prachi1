
import { useEffect, useRef, useState } from 'react';
import { caseStudies } from '../../../../mocks/caseStudies';

export default function TestimonialShowcase() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ------------------------------------------------------------
  // 1️⃣  IntersectionObserver – safely initialise & clean‑up
  // ------------------------------------------------------------
  useEffect(() => {
    // Guard against environments where IntersectionObserver is unavailable
    if (typeof IntersectionObserver === 'undefined') {
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
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      try {
        observer.disconnect();
      } catch {
        // ignore – observer may already be disconnected
      }
    };
  }, []);

  // ------------------------------------------------------------
  // 2️⃣  Auto‑rotate testimonial carousel
  // ------------------------------------------------------------
  const startAutoRotate = () => {
    // Clear any existing interval before creating a new one
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoRotate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint‑disable-next-line react-hooks/exhaustive-deps
  }, []); // run only once on mount

  const handleSelect = (i: number) => {
    setActive(i);
    startAutoRotate(); // restart timer after manual selection
  };

  const current = caseStudies[active];

  // ------------------------------------------------------------
  // 3️⃣  Render
  // ------------------------------------------------------------
  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Client Voices
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>

          {/* Main content */}
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Testimonial Card */}
            <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 overflow-hidden">
              {/* Decorative gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${current.color}`} />

              {/* Quote marks */}
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12 opacity-10">
                <i className="ri-double-quotes-r text-[80px] lg:text-[120px] text-orange-500" />
              </div>

              <div className="relative">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-amber-400 text-lg" />
                  ))}
                </div>

                {/* Quote */}
                <p
                  key={active}
                  className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic font-light"
                  style={{ animation: 'testimonialFade 0.6s ease both' }}
                >
                  &ldquo;{current.testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div
                  key={`author-${active}`}
                  className="flex items-center gap-4"
                  style={{ animation: 'testimonialFade 0.6s ease 0.15s both' }}
                >
                  <img
                    src={current.testimonial.avatar}
                    alt={current.testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{current.testimonial.name}</p>
                    <p className="text-sm text-gray-500">{current.testimonial.role}</p>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full">
                      {current.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots & Avatars */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {caseStudies.map((study, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`relative rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                    active === i
                      ? 'w-12 h-12 ring-2 ring-orange-500 ring-offset-2'
                      : 'w-10 h-10 opacity-50 hover:opacity-80 grayscale hover:grayscale-0'
                  }`}
                  aria-label={`View testimonial from ${study.testimonial.name}`}
                >
                  <img
                    src={study.testimonial.avatar}
                    alt={study.testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="flex justify-center gap-1.5 mt-4">
              {caseStudies.map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full bg-gray-200 overflow-hidden"
                  style={{ width: active === i ? 32 : 12, transition: 'width 0.3s ease' }}
                >
                  {active === i && (
                    <div
                      className="h-full bg-orange-500 rounded-full"
                      style={{ animation: 'progressFill 6s linear both' }}
                      key={`progress-${active}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------
           4️⃣  Inline CSS – injected via dangerouslySetInnerHTML
           ------------------------------------------------------------ */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes testimonialFade {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes progressFill {
              from { width: 0%; }
              to { width: 100%; }
            }
          `,
        }}
      />
    </section>
  );
}
