
import { useState, useEffect, useRef } from 'react';
import { podcastEpisodes } from '../../../../mocks/podcastEpisodes';

export default function FeaturedEpisode() {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const featured = podcastEpisodes[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Latest Episode
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Now{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Streaming
              </span>
            </h2>
          </div>

          <div
            className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-center transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Video */}
            <div className="lg:col-span-3 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-video bg-gray-900">
                {playing ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${featured.youtubeId}?autoplay=1&rel=0`}
                    title={featured.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://readdy.ai/api/search-image?query=A%20professional%20podcast%20recording%20studio%20setup%20with%20warm%20orange%20ambient%20lighting%20two%20microphones%20on%20a%20sleek%20desk%20acoustic%20panels%20on%20walls%20modern%20minimalist%20design%20dark%20background%20with%20subtle%20tech%20elements%20high%20quality%20cinematic%20look&width=800&height=450&seq=podcast-featured-thumb-1&orientation=landscape`}
                      alt={featured.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover"
                    >
                      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-xl shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-play-fill text-3xl ml-1" />
                      </div>
                    </button>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                        NEW
                      </span>
                      <span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-xs font-medium rounded-full whitespace-nowrap">
                        {featured.duration}
                      </span>
                    </div>
                  </>
                )}
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full whitespace-nowrap">
                  Episode #{featured.id}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full whitespace-nowrap">
                  {featured.category}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                {featured.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{featured.description}</p>

              <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-sm flex-shrink-0">
                  {featured.guest
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{featured.guest}</p>
                  <p className="text-xs text-gray-500">{featured.guestRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-calendar-line text-sm" />
                  </span>
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-eye-line text-sm" />
                  </span>
                  {featured.views} views
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-time-line text-sm" />
                  </span>
                  {featured.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
