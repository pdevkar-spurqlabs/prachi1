
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredPost } from '../../../../mocks/blogPosts';

export default function FeaturedPost() {
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
    <section id="featured" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Editor&apos;s Pick
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Featured <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Article</span>
            </h2>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to={`/insights/blogs/${featuredPost.id}`} className="relative group cursor-pointer">
              <div className="w-full h-[320px] lg:h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                  {featuredPost.category}
                </span>
              </div>
            </Link>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredPost.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to={`/insights/blogs/${featuredPost.id}`} className="cursor-pointer">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-orange-500 transition-colors">
                  {featuredPost.title}
                </h3>
              </Link>

              <p className="text-gray-600 leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{featuredPost.author.name}</p>
                  <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                </div>
                <span className="w-px h-8 bg-gray-200" />
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4 flex items-center justify-center"><i className="ri-calendar-line text-sm" /></span>
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4 flex items-center justify-center"><i className="ri-time-line text-sm" /></span>
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              <Link
                to={`/insights/blogs/${featuredPost.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 cursor-pointer whitespace-nowrap"
              >
                Read Full Article
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
