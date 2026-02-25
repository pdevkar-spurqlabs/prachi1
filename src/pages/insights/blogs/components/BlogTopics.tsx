
import { useEffect, useRef, useState } from 'react';
import { popularTags } from '../../../../mocks/blogPosts';

const topics = [
  { icon: 'ri-robot-line', title: 'AI & Machine Learning', desc: 'How artificial intelligence is transforming test automation, defect prediction, and quality analytics.', count: 22, color: 'from-orange-500 to-amber-500' },
  { icon: 'ri-shield-check-line', title: 'Security Testing', desc: 'Penetration testing strategies, vulnerability assessments, and building security into your SDLC.', count: 17, color: 'from-red-500 to-orange-500' },
  { icon: 'ri-speed-line', title: 'Performance Engineering', desc: 'Load testing, scalability patterns, and performance optimization techniques for modern applications.', count: 19, color: 'from-amber-500 to-yellow-500' },
  { icon: 'ri-smartphone-line', title: 'Mobile & Cross-Platform', desc: 'Testing strategies for iOS, Android, Flutter, and React Native applications across device ecosystems.', count: 13, color: 'from-orange-400 to-red-400' },
  { icon: 'ri-git-merge-line', title: 'DevOps & CI/CD', desc: 'Pipeline optimization, infrastructure testing, and integrating quality gates into delivery workflows.', count: 15, color: 'from-amber-400 to-orange-500' },
  { icon: 'ri-lightbulb-line', title: 'Best Practices', desc: 'Proven methodologies, frameworks, and strategies for building world-class QA organizations.', count: 11, color: 'from-yellow-500 to-amber-500' },
];

export default function BlogTopics() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Topics We Cover
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Deep Expertise Across <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">QA Domains</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Our authors bring hands-on experience from hundreds of projects, sharing actionable insights across every area of quality engineering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {topics.map((topic, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-default overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))` }}>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${topic.color} mb-4`}>
                  <i className={`${topic.icon} text-xl text-white`} />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{topic.desc}</p>
                <span className="text-xs font-medium text-orange-500">{topic.count} articles</span>
              </div>
            ))}
          </div>

          {/* Popular Tags */}
          <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Popular Tags</h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {popularTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {tag.name} <span className="text-gray-400 text-xs ml-1">({tag.count})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
