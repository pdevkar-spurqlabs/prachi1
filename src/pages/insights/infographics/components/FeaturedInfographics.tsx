
import { useState, useRef, useEffect } from 'react';
import { infographics } from '../../../../mocks/infographics';

export default function FeaturedInfographics() {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featured = infographics.filter((ig) => ig.featured);

  return (
    <section ref={sectionRef} id="featured" className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Editor&apos;s Picks
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Infographics
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our most popular and impactful visual resources, handpicked by the
              SpurQLabs editorial team.
            </p>
          </div>

          <div className="space-y-16">
            {featured.map((item, idx) => (
              <div
                key={item.id}
                className={`group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="relative w-full h-72 sm:h-80 lg:h-96 overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      <i className="ri-star-fill mr-1" />
                      Featured
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{item.description}</p>

                  {/* Key Insights */}
                  <div className="space-y-3 mb-6">
                    {item.keyInsights.map((insight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-100 mt-0.5 shrink-0">
                          <i className="ri-check-line text-xs text-orange-500" />
                        </div>
                        <span className="text-sm text-gray-600">{insight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-5 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <span className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-download-2-line text-sm" />
                      </span>
                      {item.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-share-forward-line text-sm" />
                      </span>
                      {item.shares.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-calendar-line text-sm" />
                      </span>
                      {item.date}
                    </span>
                  </div>

                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 cursor-pointer whitespace-nowrap"
                  >
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-eye-line text-sm" />
                    </span>
                    View Full Infographic
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
