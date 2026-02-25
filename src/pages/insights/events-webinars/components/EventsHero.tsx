
import { useState, useEffect, useRef } from 'react';

export default function EventsHero() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState({ events: 0, attendees: 0, speakers: 0, satisfaction: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const targets = { events: 30, attendees: 5000, speakers: 85, satisfaction: 97 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        events: Math.round(targets.events * ease),
        attendees: Math.round(targets.attendees * ease),
        speakers: Math.round(targets.speakers * ease),
        satisfaction: Math.round(targets.satisfaction * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [visible]);

  const stats = [
    { value: `${counts.events}+`, label: 'Events Hosted' },
    { value: `${counts.attendees.toLocaleString()}+`, label: 'Total Attendees' },
    { value: `${counts.speakers}+`, label: 'Expert Speakers' },
    { value: `${counts.satisfaction}%`, label: 'Satisfaction Rate' },
  ];

  return (
    <section ref={ref} className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=A%20grand%20modern%20conference%20venue%20interior%20with%20rows%20of%20seats%20facing%20a%20large%20illuminated%20stage%20with%20dramatic%20warm%20amber%20and%20orange%20lighting%20effects%20abstract%20geometric%20patterns%20on%20screens%20professional%20event%20venue%20photography%20cinematic%20wide%20angle&width=1600&height=800&seq=events-hero-bg-1&orientation=landscape"
          alt="Events & Webinars"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 0.8; }
        }
      `}</style>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Events &amp; Webinars
            </span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Learn, Connect &amp;
            <span className="text-orange-400"> Grow Together</span>
          </h1>

          <p
            className={`text-base lg:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Join our community of QA professionals at conferences, workshops, and webinars designed to sharpen your skills and expand your network.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 mb-14 transition-all duration-700 delay-[450ms] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#upcoming"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-400/35 whitespace-nowrap cursor-pointer"
            >
              View Upcoming Events
            </a>
            <a
              href="#past-events"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full border border-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm"
            >
              Browse Past Events
            </a>
          </div>

          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto transition-all duration-700 delay-[600ms] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-4"
              >
                <p className="text-2xl lg:text-3xl font-bold text-orange-400">{stat.value}</p>
                <p className="text-xs lg:text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
