
import { useState, useEffect, useRef } from 'react';
import { eventGalleryPhotos } from '../../../../mocks/eventsWebinars';

export default function EventGallery() {
  const [visible, setVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') setSelectedPhoto(prev => prev !== null ? (prev + 1) % eventGalleryPhotos.length : null);
      if (e.key === 'ArrowLeft') setSelectedPhoto(prev => prev !== null ? (prev - 1 + eventGalleryPhotos.length) % eventGalleryPhotos.length : null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <style>{`
        .gallery-grid-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .gallery-grid-scroll::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        .gallery-grid-scroll::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .gallery-grid-scroll::-webkit-scrollbar-thumb:hover {
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
              Photo Gallery
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Moments From Our Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              A visual journey through our conferences, workshops, and community gatherings.
            </p>
          </div>

          <div className="gallery-grid-scroll overflow-y-auto pr-2" style={{ maxHeight: '680px' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {eventGalleryPhotos.map((photo, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPhoto(i)}
                  className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                    visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '600ms',
                    transitionDelay: visible ? `${80 + i * 60}ms` : '0ms',
                  }}
                >
                  <div className="w-full h-48 lg:h-56">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-semibold">{photo.alt}</p>
                    <p className="text-white/70 text-xs mt-0.5">{photo.event}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg">
                      <i className="ri-zoom-in-line text-gray-800 text-lg"></i>
                    </span>
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

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedPhoto(null); }}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((selectedPhoto - 1 + eventGalleryPhotos.length) % eventGalleryPhotos.length);
            }}
            className="absolute left-4 lg:left-8 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((selectedPhoto + 1) % eventGalleryPhotos.length);
            }}
            className="absolute right-4 lg:right-8 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-xl"></i>
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-[60vh] rounded-xl overflow-hidden">
              <img
                src={eventGalleryPhotos[selectedPhoto].src}
                alt={eventGalleryPhotos[selectedPhoto].alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-white font-semibold">{eventGalleryPhotos[selectedPhoto].alt}</p>
              <p className="text-white/60 text-sm mt-1">{eventGalleryPhotos[selectedPhoto].event}</p>
              <p className="text-white/40 text-xs mt-2">{selectedPhoto + 1} / {eventGalleryPhotos.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
