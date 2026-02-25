
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LifeHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=A%20wide%20panoramic%20photograph%20of%20a%20modern%20open%20plan%20tech%20office%20space%20with%20warm%20ambient%20lighting%20showing%20collaborative%20work%20areas%20with%20standing%20desks%20glass%20meeting%20rooms%20indoor%20plants%20and%20a%20diverse%20team%20of%20professionals%20working%20together%20in%20a%20creative%20environment%20soft%20bokeh%20background%20warm%20tones&width=1400&height=600&seq=life-hero-bg-1&orientation=landscape"
          alt="SpurQLabs Office"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className={`text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center justify-center gap-2 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="w-8 h-px bg-orange-400"></span>
            Life at SpurQLabs
            <span className="w-8 h-px bg-orange-400"></span>
          </p>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Where{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Passion
            </span>{' '}
            Meets Purpose Every Day
          </h1>
          <p
            className={`text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Discover a workplace where innovation thrives, people grow, and quality is more than a metric —
            it&apos;s a way of life.
          </p>
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              to="/careers"
              className="px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap"
            >
              Join Our Team
            </Link>
            <a
              href="#our-culture"
              className="px-7 py-3.5 border border-gray-500 hover:border-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Explore Our Culture
            </a>
          </div>

          {/* Floating badges */}
          <div
            className={`mt-14 flex flex-wrap justify-center gap-4 lg:gap-6 transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              {
                icon: 'ri-team-fill',
                label: '75+ Team Members',
                color: 'bg-orange-500/20 text-orange-300',
              },
              {
                icon: 'ri-global-line',
                label: '3 Global Offices',
                color: 'bg-amber-500/20 text-amber-300',
              },
              {
                icon: 'ri-heart-pulse-fill',
                label: '95% Satisfaction',
                color: 'bg-emerald-500/20 text-emerald-300',
              },
              {
                icon: 'ri-trophy-fill',
                label: 'Great Place to Work',
                color: 'bg-rose-500/20 text-rose-300',
              },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur border border-white/10"
              >
                <span className={`w-8 h-8 flex items-center justify-center rounded-full ${badge.color}`}>
                  <i className={`${badge.icon} text-sm`}></i>
                </span>
                <span className="text-sm text-gray-200 font-medium whitespace-nowrap">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
