
import { useState, useRef, useEffect } from 'react';
import { newsletterTopics } from '../../../../mocks/newsletter';

export default function TopicsCovered() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              What We Cover
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Topics in Every Edition</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Each newsletter is carefully curated to cover the most impactful areas of quality engineering and software testing.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletterTopics.map((topic, i) => (
              <div
                key={i}
                className={`group relative bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-700 cursor-default overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-500 transition-colors duration-300 mb-5">
                  <i className={`${topic.icon} text-2xl text-orange-500 group-hover:text-white transition-colors duration-300`} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">{topic.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{topic.description}</p>

                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="w-4 h-4 flex items-center justify-center"><i className="ri-article-line text-xs" /></span>
                  {topic.count} articles published
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
