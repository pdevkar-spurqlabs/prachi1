
import { useState, useEffect, useRef } from 'react';
import { pastEvents } from '../../../../mocks/eventsWebinars';

const typeFilters = ['All', 'Conference', 'Workshop', 'Webinar'];

export default function PastEvents() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);
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

  const filtered = activeFilter === 'All'
    ? pastEvents
    : pastEvents.filter(e => e.type === activeFilter);

  return (
    <section id="past-events" ref={ref} className="py-16 lg:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Past Events
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Event Highlights &amp; Recaps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              Relive the best moments from our past conferences, workshops, and webinars.
            </p>
          </div>

          {/* Filters */}
          <div
            className={`flex justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              {typeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => { setActiveFilter(f); setExpandedId(null); }}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeFilter === f
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="space-y-6">
            {filtered.map((event, i) => {
              const isExpanded = expandedId === event.id;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: visible ? `${150 + i * 100}ms` : '0ms' }}
                >
                  <div className={`grid lg:grid-cols-2 ${!isEven ? 'lg:direction-rtl' : ''}`}>
                    <div className={`relative w-full h-64 lg:h-80 overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                          {event.type}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                          <p className="text-lg font-bold text-gray-900">{event.attendees}+</p>
                          <p className="text-xs text-gray-500">Attendees</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                          <p className="text-lg font-bold text-gray-900">{event.speakers}</p>
                          <p className="text-xs text-gray-500">Speakers</p>
                        </div>
                      </div>
                    </div>
                    <div className={`p-6 lg:p-8 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <span className="w-4 h-4 flex items-center justify-center"><i className="ri-calendar-line text-orange-500"></i></span>
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-4 h-4 flex items-center justify-center"><i className="ri-map-pin-line text-orange-500"></i></span>
                          {event.location}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{event.description}</p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {event.highlights.map((h) => (
                          <span key={h} className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg border border-orange-100">
                            <span className="w-3 h-3 flex items-center justify-center"><i className="ri-check-line text-xs"></i></span>
                            {h}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : event.id)}
                        className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors cursor-pointer w-fit"
                      >
                        {isExpanded ? 'Show Less' : 'View Recap'}
                        <span className="w-4 h-4 flex items-center justify-center">
                          <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line`}></i>
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isExpanded ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-600 leading-relaxed">
                          This event brought together {event.attendees}+ professionals and {event.speakers} expert speakers for an immersive experience covering the latest trends in quality assurance and software testing. Attendees gained hands-on experience and valuable networking opportunities.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
