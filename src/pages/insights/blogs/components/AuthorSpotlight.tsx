
import { useEffect, useRef, useState } from 'react';

const authors = [
  {
    name: 'Priya Sharma',
    role: 'Head of AI Testing',
    bio: 'Leading AI-driven testing initiatives with 12+ years in quality engineering. Speaker at QA conferences worldwide.',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20indian%20woman%20headshot%20portrait%20warm%20lighting%20neutral%20background%20corporate%20photo&width=120&height=120&seq=blog-author-priya&orientation=squarish',
    articles: 18,
    specialties: ['AI & ML', 'Automation'],
  },
  {
    name: 'David Chen',
    role: 'Performance Architect',
    bio: 'Specializing in large-scale performance engineering. Helped 50+ enterprises optimize their application performance.',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20asian%20man%20headshot%20portrait%20warm%20lighting%20neutral%20background%20corporate%20photo&width=120&height=120&seq=blog-author-david&orientation=squarish',
    articles: 15,
    specialties: ['Performance', 'Scalability'],
  },
  {
    name: 'Sarah Mitchell',
    role: 'Security Testing Lead',
    bio: 'Certified ethical hacker with expertise in application security testing and compliance frameworks.',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20caucasian%20woman%20headshot%20portrait%20warm%20lighting%20neutral%20background%20corporate%20photo&width=120&height=120&seq=blog-author-sarah&orientation=squarish',
    articles: 12,
    specialties: ['Security', 'OWASP'],
  },
  {
    name: 'Rahul Mehta',
    role: 'Senior QA Engineer',
    bio: 'Full-stack test automation expert. Open-source contributor to Selenium and Playwright ecosystems.',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20indian%20man%20headshot%20portrait%20warm%20lighting%20neutral%20background%20corporate%20photo&width=120&height=120&seq=blog-author-rahul&orientation=squarish',
    articles: 14,
    specialties: ['Automation', 'Frameworks'],
  },
];

export default function AuthorSpotlight() {
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
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Meet Our Authors
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Written by <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Industry Experts</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Our blog is powered by practitioners who solve real-world quality challenges every day, sharing battle-tested insights from the trenches.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {authors.map((author, i) => (
              <div
                key={i}
                className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 text-center cursor-default ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-3 ring-orange-100 group-hover:ring-orange-300 transition-all duration-300">
                  <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-0.5">{author.name}</h3>
                <p className="text-xs text-orange-500 font-medium mb-3">{author.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{author.bio}</p>
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {author.specialties.map((s, si) => (
                    <span key={si} className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[10px] font-medium rounded-full">{s}</span>
                  ))}
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{author.articles} articles published</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
