
import { useState, useEffect, useRef } from 'react';

const topics = [
  {
    icon: 'ri-robot-2-line',
    title: 'AI & Test Automation',
    description: 'Self-healing scripts, ML-driven test generation, and the future of intelligent QA.',
    episodes: 12,
    color: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    icon: 'ri-speed-line',
    title: 'Performance Engineering',
    description: 'Load testing, chaos engineering, and building systems that scale to millions.',
    episodes: 8,
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Security Testing',
    description: 'Penetration testing, OWASP compliance, and zero-trust security strategies.',
    episodes: 7,
    color: 'from-rose-500 to-pink-500',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-600',
  },
  {
    icon: 'ri-team-line',
    title: 'QA Leadership',
    description: 'Building teams, defining quality culture, and making the business case for QA.',
    episodes: 9,
    color: 'from-violet-500 to-indigo-500',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    icon: 'ri-git-merge-line',
    title: 'CI/CD & DevOps',
    description: 'Pipeline optimization, shift-left testing, and continuous quality delivery.',
    episodes: 6,
    color: 'from-cyan-500 to-sky-500',
    bgLight: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Mobile & Cross-Platform',
    description: 'Device farms, cross-browser testing, and responsive design validation.',
    episodes: 6,
    color: 'from-amber-500 to-yellow-500',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
];

export default function TopicsShowcase() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean‑up
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              What We Cover
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Topics That{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Matter
              </span>
            </h2>
            <p className="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              From cutting‑edge automation to leadership insights, our episodes cover the full
              spectrum of software quality engineering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <div
                key={i}
                className={`group relative p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-default ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${topic.color} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl ${topic.bgLight} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {/* <i> is not a self‑closing tag in JSX; use an explicit closing tag */}
                  <i className={`${topic.icon} text-xl ${topic.textColor}`} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{topic.description}</p>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 ${topic.bgLight} ${topic.textColor} text-xs font-semibold rounded-full whitespace-nowrap`}
                  >
                    {topic.episodes} Episodes
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
