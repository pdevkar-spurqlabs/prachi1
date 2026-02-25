
import { useState, useEffect, useRef } from 'react';

const topics = [
  {
    icon: 'ri-robot-line',
    title: 'AI & Test Automation',
    description: 'Explore how AI is revolutionizing test case generation, self-healing scripts, and intelligent defect prediction.',
    eventCount: 8,
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Security Testing',
    description: 'Deep dives into penetration testing, OWASP compliance, vulnerability assessment, and secure coding practices.',
    eventCount: 5,
  },
  {
    icon: 'ri-speed-line',
    title: 'Performance Engineering',
    description: 'Load testing strategies, scalability patterns, and performance optimization for enterprise applications.',
    eventCount: 6,
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Mobile & Cross-Platform',
    description: 'Testing strategies for iOS, Android, and cross-platform apps using Appium, Detox, and cloud-based solutions.',
    eventCount: 4,
  },
  {
    icon: 'ri-git-merge-line',
    title: 'DevOps & CI/CD',
    description: 'Integrating QA into DevOps pipelines, shift-left testing, and continuous quality delivery practices.',
    eventCount: 7,
  },
  {
    icon: 'ri-team-line',
    title: 'QA Leadership',
    description: 'Building high-performing QA teams, career growth strategies, and quality culture transformation.',
    eventCount: 4,
  },
];

export default function EventTopics() {
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
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Topics We Cover
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Event &amp; Webinar Topics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              From cutting-edge AI automation to security best practices — our events cover the full spectrum of quality engineering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-500 overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: visible ? `${100 + i * 80}ms` : '0ms' }}
              >
                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-xl mb-4 group-hover:bg-orange-100 transition-colors">
                  <i className={`${topic.icon} text-orange-500 text-xl`}></i>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{topic.description}</p>
                <span className="text-xs font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                  {topic.eventCount} events
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
