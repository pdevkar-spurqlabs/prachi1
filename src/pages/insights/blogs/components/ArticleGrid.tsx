
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../../../../mocks/blogPosts';

export default function ArticleGrid() {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = blogPosts.filter((post) => {
    const matchCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const displayed = filtered.slice(0, visibleCount);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  return (
    <section id="articles" className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Latest Articles
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Explore Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Blog</span>
            </h2>
          </div>

          {/* Search Bar */}
          <div className={`max-w-xl mx-auto mb-8 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
                <i className="ri-search-line text-lg" />
              </span>
              <input
                type="text"
                placeholder="Search articles by title, topic, or tag..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-lg" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mx-auto mb-4">
                <i className="ri-search-line text-2xl text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">No articles found matching your criteria.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-3 text-orange-500 text-sm font-medium hover:underline cursor-pointer whitespace-nowrap">
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {displayed.map((post, i) => (
                  <article
                    key={post.id}
                    className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${300 + i * 80}ms` }}
                  >
                    <Link to={`/insights/blogs/${post.id}`} className="cursor-pointer">
                      <div className="relative w-full h-[200px] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="p-5">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.slice(0, 3).map((tag, ti) => (
                          <span key={ti} className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link to={`/insights/blogs/${post.id}`} className="cursor-pointer">
                        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full overflow-hidden">
                            <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-xs font-medium text-gray-700">{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-gray-400">
                          <span>{post.date}</span>
                          <span>&middot;</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Link
                        to={`/insights/blogs/${post.id}`}
                        className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-orange-500 bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Read Article
                        <i className="ri-arrow-right-s-line text-base" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {visibleCount < filtered.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-orange-400 text-orange-500 text-sm font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    Load More Articles
                    <i className="ri-arrow-down-line" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}} />
    </section>
  );
}
