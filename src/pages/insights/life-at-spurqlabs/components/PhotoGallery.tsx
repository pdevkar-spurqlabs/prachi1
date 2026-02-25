
import { useEffect, useRef, useState } from 'react';

const photos = [
  {
    src: 'https://readdy.ai/api/search-image?query=A%20team%20of%20software%20professionals%20having%20a%20fun%20brainstorming%20session%20in%20a%20modern%20office%20with%20whiteboards%20and%20sticky%20notes%20warm%20lighting%20collaborative%20atmosphere%20casual%20dress%20code%20professional%20office%20photography&width=500&height=400&seq=gallery-life-1&orientation=landscape',
    alt: 'Team Brainstorming',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Group%20of%20diverse%20tech%20professionals%20celebrating%20a%20project%20milestone%20with%20confetti%20and%20cheering%20in%20a%20modern%20office%20space%20warm%20happy%20atmosphere%20team%20celebration%20professional%20event%20photography&width=500&height=400&seq=gallery-life-2&orientation=landscape',
    alt: 'Project Celebration',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Two%20software%20engineers%20pair%20programming%20at%20a%20desk%20with%20dual%20monitors%20in%20a%20modern%20office%20natural%20lighting%20focused%20collaboration%20professional%20workspace%20photography%20warm%20tones&width=500&height=400&seq=gallery-life-3&orientation=landscape',
    alt: 'Pair Programming',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20tech%20team%20doing%20outdoor%20team%20building%20activity%20in%20a%20beautiful%20park%20with%20obstacle%20course%20sunny%20day%20casual%20sportswear%20fun%20and%20laughter%20corporate%20team%20event%20photography%20warm%20tones&width=500&height=400&seq=gallery-life-4&orientation=landscape',
    alt: 'Outdoor Team Building',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20professional%20tech%20conference%20presentation%20with%20a%20speaker%20on%20stage%20and%20engaged%20audience%20in%20a%20modern%20venue%20with%20large%20screen%20showing%20testing%20automation%20slides%20professional%20event%20photography%20warm%20lighting&width=500&height=400&seq=gallery-life-5&orientation=landscape',
    alt: 'Conference Talk',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20cozy%20office%20break%20room%20with%20professionals%20having%20coffee%20and%20casual%20conversation%20comfortable%20seating%20area%20with%20plants%20and%20warm%20lighting%20modern%20interior%20design%20relaxed%20atmosphere%20professional%20lifestyle%20photography&width=500&height=400&seq=gallery-life-6&orientation=landscape',
    alt: 'Coffee Break',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20group%20of%20tech%20professionals%20at%20a%20company%20dinner%20event%20at%20a%20nice%20restaurant%20with%20warm%20ambient%20lighting%20good%20food%20and%20drinks%20team%20bonding%20evening%20celebration%20professional%20corporate%20event%20photography&width=500&height=400&seq=gallery-life-7&orientation=landscape',
    alt: 'Team Dinner',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20hackathon%20event%20with%20developers%20working%20intensely%20on%20laptops%20with%20whiteboards%20full%20of%20ideas%20energy%20drinks%20and%20snacks%20late%20night%20coding%20session%20modern%20office%20space%20warm%20ambient%20lighting%20professional%20event%20photography&width=500&height=400&seq=gallery-life-8&orientation=landscape',
    alt: 'Hackathon Night',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20group%20of%20young%20tech%20professionals%20doing%20a%20fun%20team%20yoga%20session%20in%20a%20bright%20modern%20office%20wellness%20room%20with%20mats%20and%20natural%20light%20healthy%20lifestyle%20corporate%20wellness%20photography%20warm%20tones&width=500&height=400&seq=gallery-life-9&orientation=landscape',
    alt: 'Wellness Wednesday',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Software%20engineers%20gathered%20around%20a%20large%20screen%20doing%20a%20live%20code%20review%20session%20in%20a%20modern%20meeting%20room%20with%20glass%20walls%20warm%20lighting%20collaborative%20learning%20atmosphere%20professional%20photography&width=500&height=400&seq=gallery-life-10&orientation=landscape',
    alt: 'Code Review Session',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20vibrant%20office%20birthday%20celebration%20with%20cake%20balloons%20and%20happy%20colleagues%20gathered%20together%20in%20a%20decorated%20modern%20workspace%20warm%20festive%20atmosphere%20corporate%20culture%20photography&width=500&height=400&seq=gallery-life-11&orientation=landscape',
    alt: 'Birthday Celebrations',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20tech%20team%20volunteering%20at%20a%20community%20event%20planting%20trees%20in%20a%20park%20wearing%20matching%20company%20tshirts%20sunny%20day%20teamwork%20giving%20back%20corporate%20social%20responsibility%20photography%20warm%20tones&width=500&height=400&seq=gallery-life-12&orientation=landscape',
    alt: 'Community Volunteering',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20professional%20workshop%20session%20with%20tech%20employees%20learning%20new%20skills%20around%20a%20table%20with%20laptops%20and%20notebooks%20in%20a%20bright%20training%20room%20with%20whiteboards%20warm%20lighting%20corporate%20training%20photography&width=500&height=400&seq=gallery-life-13&orientation=landscape',
    alt: 'Skills Workshop',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20fun%20office%20game%20room%20with%20tech%20professionals%20playing%20foosball%20and%20table%20tennis%20during%20break%20time%20modern%20recreational%20area%20with%20colorful%20decor%20warm%20lighting%20casual%20fun%20atmosphere%20corporate%20lifestyle%20photography&width=500&height=400&seq=gallery-life-14&orientation=landscape',
    alt: 'Game Room Fun',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20diverse%20group%20of%20tech%20professionals%20at%20an%20annual%20company%20awards%20ceremony%20on%20stage%20with%20trophies%20and%20spotlights%20elegant%20venue%20with%20warm%20golden%20lighting%20corporate%20recognition%20event%20photography&width=500&height=400&seq=gallery-life-15&orientation=landscape',
    alt: 'Annual Awards Night',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=A%20casual%20Friday%20afternoon%20at%20a%20tech%20office%20with%20employees%20gathered%20on%20bean%20bags%20and%20couches%20having%20an%20informal%20town%20hall%20meeting%20with%20snacks%20and%20drinks%20relaxed%20modern%20office%20warm%20lighting%20corporate%20culture%20photography&width=500&height=400&seq=gallery-life-16&orientation=landscape',
    alt: 'Friday Town Hall',
  },
];

export default function PhotoGallery() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Guard against missing ref (unlikely but defensive)
  const containerRef = ref;

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={containerRef}>
      {/* Custom scrollbar styling */}
      <style>{`
        .gallery-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .gallery-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .gallery-scroll::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .gallery-scroll::-webkit-scrollbar-thumb:hover {
          background: #f97316;
        }
      `}</style>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Gallery
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Moments That Matter
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A snapshot of the memories we create together — at work and beyond.
            </p>
          </div>

          <div className="gallery-scroll overflow-y-auto pr-2" style={{ maxHeight: '720px' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                    visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '600ms',
                    transitionDelay: visible ? `${100 + i * 80}ms` : '0ms',
                  }}
                >
                  <div className="w-full h-56 lg:h-64">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                    <p className="text-white text-sm font-semibold">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex items-center justify-center mt-6 gap-2 text-gray-400 text-sm transition-all duration-700 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <i className="ri-arrow-down-line w-4 h-4 flex items-center justify-center animate-bounce"></i>
            <span>Scroll to see more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
