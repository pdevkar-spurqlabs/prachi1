
import { useState, useEffect, useRef } from 'react';
import { podcastEpisodes, categories } from '../../../../mocks/podcastEpisodes';
import type { PodcastEpisode } from '../../../../mocks/podcastEpisodes';

function EpisodeCard({
  episode,
  index,
  visible,
}: {
  episode: PodcastEpisode;
  index: number;
  visible: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const thumbImages = [
    'https://readdy.ai/api/search-image?query=A%20modern%20podcast%20studio%20with%20two%20people%20having%20a%20professional%20conversation%20warm%20orange%20and%20amber%20lighting%20acoustic%20foam%20panels%20sleek%20microphones%20on%20boom%20arms%20dark%20moody%20atmosphere%20cinematic%20quality&width=600&height=340&seq=pod-ep-grid-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20software%20developer%20presenting%20code%20on%20a%20large%20screen%20in%20a%20dimly%20lit%20conference%20room%20with%20warm%20accent%20lighting%20professional%20tech%20talk%20setting%20modern%20office%20environment&width=600&height=340&seq=pod-ep-grid-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20close%20up%20of%20professional%20podcast%20microphone%20with%20pop%20filter%20in%20a%20recording%20studio%20warm%20amber%20backlighting%20bokeh%20background%20sleek%20modern%20equipment%20high%20quality%20photo&width=600&height=340&seq=pod-ep-grid-3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20cybersecurity%20expert%20working%20on%20multiple%20monitors%20in%20a%20dark%20room%20with%20orange%20and%20teal%20accent%20lighting%20showing%20security%20dashboards%20and%20code%20professional%20atmosphere&width=600&height=340&seq=pod-ep-grid-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20diverse%20team%20of%20tech%20professionals%20in%20a%20brainstorming%20session%20around%20a%20whiteboard%20with%20sticky%20notes%20modern%20startup%20office%20warm%20natural%20lighting%20collaborative%20atmosphere&width=600&height=340&seq=pod-ep-grid-5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20person%20testing%20a%20mobile%20application%20on%20multiple%20devices%20smartphones%20and%20tablets%20arranged%20on%20a%20desk%20warm%20desk%20lamp%20lighting%20modern%20workspace%20clean%20minimal%20setup&width=600&height=340&seq=pod-ep-grid-6&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20DevOps%20engineer%20monitoring%20deployment%20pipelines%20on%20a%20widescreen%20monitor%20with%20green%20and%20orange%20status%20indicators%20dark%20office%20environment%20professional%20tech%20setting&width=600&height=340&seq=pod-ep-grid-7&orientation=landscape',
    'https://readdy.ai/api/search-image?query=An%20accessibility%20testing%20session%20showing%20a%20person%20using%20screen%20reader%20technology%20on%20a%20laptop%20warm%20office%20lighting%20inclusive%20design%20posters%20on%20wall%20professional%20environment&width=600&height=340&seq=pod-ep-grid-8&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20developer%20writing%20API%20test%20scripts%20on%20a%20laptop%20with%20Postman%20interface%20visible%20warm%20coffee%20shop%20lighting%20cozy%20professional%20remote%20work%20setting%20bokeh%20background&width=600&height=340&seq=pod-ep-grid-9&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20woman%20giving%20a%20tech%20presentation%20on%20stage%20at%20a%20conference%20with%20large%20screen%20behind%20her%20warm%20stage%20lighting%20professional%20speaker%20event%20atmosphere&width=600&height=340&seq=pod-ep-grid-10&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20data%20management%20dashboard%20on%20a%20large%20monitor%20showing%20test%20data%20analytics%20charts%20and%20graphs%20warm%20ambient%20office%20lighting%20modern%20tech%20workspace&width=600&height=340&seq=pod-ep-grid-11&orientation=landscape',
    'https://readdy.ai/api/search-image?query=A%20business%20meeting%20with%20executives%20reviewing%20quality%20metrics%20on%20a%20presentation%20screen%20modern%20boardroom%20warm%20lighting%20professional%20corporate%20setting&width=600&height=340&seq=pod-ep-grid-12&orientation=landscape',
  ];

  return (
    <div
      className={`group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${150 + index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1&rel=0`}
            title={episode.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={thumbImages[index % thumbImages.length]}
              alt={episode.title}
              className={`w-full h-full object-cover object-top transition-transform duration-700 ${
                hovered ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:scale-110 transition-transform duration-300">
                <i className="ri-play-fill text-2xl ml-0.5" />
              </div>
            </button>
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-black/50 backdrop-blur text-white text-xs font-semibold rounded-full whitespace-nowrap">
                EP {episode.id}
              </span>
            </div>
            <div className="absolute bottom-3 right-3">
              <span className="px-2.5 py-1 bg-black/50 backdrop-blur text-white text-xs font-medium rounded-full whitespace-nowrap">
                {episode.duration}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-orange-50 text-orange-600 text-xs font-medium rounded-full whitespace-nowrap">
            {episode.category}
          </span>
          <span className="text-xs text-gray-400">Season {episode.season}</span>
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
          {episode.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{episode.description}</p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white text-[10px] font-bold flex-shrink-0">
              {episode.guest
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <span className="text-xs text-gray-600 font-medium truncate max-w-[120px]">{episode.guest}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 flex items-center justify-center">
                <i className="ri-eye-line text-xs" />
              </span>
              {episode.views}
            </span>
            <span>{episode.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EpisodeGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === 'All'
      ? podcastEpisodes.slice(1)
      : podcastEpisodes.slice(1).filter((ep) => ep.category === activeFilter);

  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setVisibleCount(6);
  };

  return (
    <section ref={sectionRef} id="episodes" className="py-16 lg:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
                Browse &amp; Watch
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                All{' '}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Episodes
                </span>
              </h2>
            </div>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeFilter === cat
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-white text-gray-600 hover:text-orange-500 border border-gray-200 hover:border-orange-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayed.map((episode, i) => (
              <EpisodeCard key={episode.id} episode={episode} index={i} visible={visible} />
            ))}
          </div>

          {/* Empty state */}
          {displayed.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 mx-auto mb-4">
                <i className="ri-search-line text-2xl text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">No episodes found in this category.</p>
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <div
              className={`text-center mt-12 transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-8 py-3.5 bg-white border border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-500 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md"
              >
                Load More Episodes
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
