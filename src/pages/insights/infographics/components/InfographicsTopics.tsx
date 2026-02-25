
import { useState, useRef, useEffect } from 'react';

const topics = [
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Test Metrics & KPIs',
    description:
      'Visual breakdowns of essential testing metrics, defect density benchmarks, and quality KPIs across industries.',
    count: 6,
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: 'ri-bug-line',
    title: 'Bug Analysis & Trends',
    description:
      'Defect lifecycle visualizations, root cause analysis patterns, and bug distribution insights.',
    count: 4,
    color: 'from-rose-500 to-orange-500',
  },
  {
    icon: 'ri-speed-line',
    title: 'Performance Engineering',
    description:
      'Load testing benchmarks, response time thresholds, and scalability strategy guides.',
    count: 3,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: 'ri-robot-line',
    title: 'Test Automation',
    description:
      'Framework comparisons, ROI calculators, and automation coverage strategy infographics.',
    count: 5,
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Security Testing',
    description:
      'OWASP guides, vulnerability assessment checklists, and penetration testing visual workflows.',
    count: 3,
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: 'ri-git-merge-line',
    title: 'DevOps & CI/CD',
    description:
      'Pipeline integration maps, shift-left strategies, and continuous testing visual guides.',
    count: 3,
    color: 'from-cyan-500 to-teal-500',
  },
];

export default function InfographicsTopics() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Topics We Cover
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore by Topic
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our infographics span every critical area of software quality
              engineering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-default overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                {/* Accent bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${topic.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${topic.color} mb-4`}
                >
                  {/* Fixed: use explicit closing tag for <i> */}
                  <i className={`${topic.icon} text-2xl text-white`}></i>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-orange-500">
                    {topic.count} infographics
                  </span>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
                    {/* Fixed: explicit closing tag for <i> */}
                    <i className="ri-arrow-right-s-line text-sm text-orange-500"></i>
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
