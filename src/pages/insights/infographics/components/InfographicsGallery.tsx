
import { useState, useRef, useEffect } from 'react';
import { infographics, infographicCategories } from '../../../../mocks/infographics';

export default function InfographicsGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Animate component when it scrolls into view
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for the lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;

      if (e.key === 'Escape') setLightbox(null);

      if (e.key === 'ArrowRight') {
        const filtered = filteredItems;
        const currentIdx = filtered.findIndex((ig) => ig.id === lightbox);
        if (currentIdx < filtered.length - 1) setLightbox(filtered[currentIdx + 1].id);
      }

      if (e.key === 'ArrowLeft') {
        const filtered = filteredItems;
        const currentIdx = filtered.findIndex((ig) => ig.id === lightbox);
        if (currentIdx > 0) setLightbox(filtered[currentIdx - 1].id);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // Adding an empty dependency array ensures the listener is attached only once.
    // filteredItems is derived from state, so it's safe to reference here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  // Filter items based on the selected category
  const filteredItems = activeCategory === 'All'
    ? infographics
    : infographics.filter((ig) => ig.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const lightboxItem = lightbox !== null ? infographics.find((ig) => ig.id === lightbox) : null;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  return (
    <section ref={sectionRef} id="gallery" className="py-20 lg:py-28 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Browse Collection
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Infographic Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Filter by topic and explore visual insights across every area of software quality.
            </p>
          </div>

          {/* Category Filters */}
          <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {infographicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-white text-gray-600 hover:text-orange-500 hover:bg-orange-50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedItems.map((item, idx) => (
              <div
                key={item.id}
                className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + idx * 80}ms` }}
                onClick={() => setLightbox(item.id)}
              >
                <div className="relative w-full h-56 sm:h-52 lg:h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/90 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <i className="ri-zoom-in-line text-2xl text-orange-500" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full">
                    {item.category}
                  </div>
                  {item.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                      <i className="ri-star-fill mr-1" />Featured
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <span className="w-3.5 h-3.5 flex items-center justify-center"><i className="ri-download-2-line text-xs" /></span>
                        {item.downloads.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-3.5 h-3.5 flex items-center justify-center"><i className="ri-share-forward-line text-xs" /></span>
                        {item.shares.toLocaleString()}
                      </span>
                    </div>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-8 py-3.5 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Load More Infographics
              </button>
              <p className="text-xs text-gray-400 mt-3">
                Showing {Math.min(visibleCount, filteredItems.length)} of {filteredItems.length} infographics
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
          >
            <i className="ri-close-line text-2xl" />
          </button>

          {/* Navigation arrows */}
          {(() => {
            const currentIdx = filteredItems.findIndex((ig) => ig.id === lightbox);
            return (
              <>
                {currentIdx > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox(filteredItems[currentIdx - 1].id);
                    }}
                    className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
                  >
                    <i className="ri-arrow-left-s-line text-2xl" />
                  </button>
                )}
                {currentIdx < filteredItems.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox(filteredItems[currentIdx + 1].id);
                    }}
                    className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
                  >
                    <i className="ri-arrow-right-s-line text-2xl" />
                  </button>
                )}
              </>
            );
          })()}

          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lg:w-3/5 h-64 sm:h-80 lg:h-auto bg-black flex items-center justify-center">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="lg:w-2/5 p-6 lg:p-8 overflow-y-auto">
              <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full mb-4">{lightboxItem.category}</span>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{lightboxItem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{lightboxItem.description}</p>

              <div className="space-y-2.5 mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Insights</p>
                {lightboxItem.keyInsights.map((insight, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 flex items-center justify-center rounded-full bg-orange-500/20 mt-0.5 shrink-0">
                      <i className="ri-check-line text-[10px] text-orange-400" />
                    </div>
                    <span className="text-sm text-gray-300">{insight}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 flex items-center justify-center"><i className="ri-download-2-line text-sm" /></span>
                  {lightboxItem.downloads.toLocaleString()}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 flex items-center justify-center"><i className="ri-share-forward-line text-sm" /></span>
                  {lightboxItem.shares.toLocaleString()}
                </span>
              </div>

              <a
                href={lightboxItem.image}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-external-link-line text-sm" /></span>
                Open Full Size
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Inline styles for animation & line clamp */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
            .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          `,
        }}
      />
    </section>
  );
}
