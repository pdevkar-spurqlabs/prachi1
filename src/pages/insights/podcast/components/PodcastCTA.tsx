
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function PodcastCTA() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Guard against browsers that don't support IntersectionObserver
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      try {
        observer.disconnect();
      } catch (e) {
        // Silently ignore errors during cleanup
        console.error('IntersectionObserver disconnect error:', e);
      }
    };
  }, []);

  // Define the keyframes for the pulsing ring animation
  const keyframes = `
    @keyframes pulse-ring {
      0% { transform: scale(1); opacity: 0.4; }
      100% { transform: scale(1.6); opacity: 0; }
    }
  `;

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated mic icon */}
          <div
            className={`relative inline-flex items-center justify-center mb-8 transition-all duration-700 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <div
              className="absolute w-20 h-20 rounded-full bg-orange-500/20"
              style={{ animation: 'pulse-ring 2s ease-out infinite' }}
            />
            <div
              className="absolute w-20 h-20 rounded-full bg-orange-500/20"
              style={{
                animation: 'pulse-ring 2s ease-out infinite',
                animationDelay: '0.5s',
              }}
            />
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xl shadow-orange-500/30">
              <i className="ri-notification-3-fill text-2xl" />
            </div>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Never Miss an{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Episode
            </span>
          </h2>

          <p
            className={`text-gray-600 text-sm lg:text-base max-w-xl mx-auto leading-relaxed mb-8 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Subscribe to our YouTube channel and hit the bell icon to get notified
            whenever we drop a new episode. Join thousands of QA professionals
            leveling up their skills.
          </p>

          {/* Platform buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-youtube-fill text-base" />
              </span>
              Subscribe on YouTube
            </a>

            <Link
              to="/services"
              className="px-7 py-3.5 border border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-500 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-right-line text-base" />
              </span>
              Explore Our Services
            </Link>
          </div>

          {/* Social proof */}
          <div
            className={`flex flex-wrap justify-center gap-8 transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { icon: 'ri-youtube-fill', label: 'YouTube', count: '15K+ Subscribers' },
              { icon: 'ri-play-circle-fill', label: 'Episodes', count: '48+ Published' },
              { icon: 'ri-star-fill', label: 'Rating', count: '4.9/5 Average' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-50 text-orange-500">
                  <i className={`${item.icon} text-lg`} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">{item.count}</p>
                  <p className="text-xs text-gray-500">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inject the keyframes safely */}
      <style>{keyframes}</style>
    </section>
  );
}
