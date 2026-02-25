
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function EventsCTA() {
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
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-2xl mx-auto mb-6">
              <i className="ri-notification-3-line text-orange-500 text-2xl animate-pulse"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Don&apos;t Miss Our Next Event
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm lg:text-base leading-relaxed">
              Stay ahead of the curve with our expert-led conferences, workshops, and webinars. Join thousands of QA professionals who trust SpurQLabs for continuous learning.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['Free Webinars', 'Expert Speakers', 'Hands-on Workshops', 'Networking'].map((item, i) => (
                <span
                  key={i}
                  className={`flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-100 rounded-full text-sm text-gray-700 shadow-sm transition-all duration-500 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: visible ? `${200 + i * 80}ms` : '0ms' }}
                >
                  <span className="w-4 h-4 flex items-center justify-center text-orange-500"><i className="ri-check-line text-xs"></i></span>
                  {item}
                </span>
              ))}
            </div>

            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-400/35 whitespace-nowrap cursor-pointer"
              >
                Book a Free Call
              </a>
              <Link
                to="/services"
                className="px-7 py-3 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-full border border-gray-200 transition-all duration-300 shadow-sm whitespace-nowrap cursor-pointer"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
