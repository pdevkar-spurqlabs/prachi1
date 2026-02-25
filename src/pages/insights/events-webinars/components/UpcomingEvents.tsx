
import { useState, useEffect, useRef } from 'react';
import { upcomingEvents } from '../../../../mocks/eventsWebinars';

export default function UpcomingEvents() {
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="upcoming" ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              What&apos;s Coming Up
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events &amp; Webinars
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              Reserve your spot at our upcoming sessions — from in-person conferences to virtual deep dives.
            </p>
          </div>

          {/* Featured Event */}
          {upcomingEvents.filter(e => e.isFeatured).map((event, idx) => (
            <div
              key={event.id}
              className={`mb-10 rounded-2xl overflow-hidden border border-orange-100 bg-gradient-to-r from-orange-50 to-white transition-all duration-700 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative w-full h-64 lg:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                      <span className="w-2 h-2 inline-block bg-white rounded-full mr-1.5 animate-pulse"></span>
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full whitespace-nowrap">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-5 h-5 flex items-center justify-center"><i className="ri-calendar-line text-orange-500"></i></span>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-5 h-5 flex items-center justify-center"><i className="ri-time-line text-orange-500"></i></span>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-5 h-5 flex items-center justify-center"><i className="ri-map-pin-line text-orange-500"></i></span>
                      {event.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {event.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full border border-orange-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mb-5">
                    <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                      <span>{event.spotsLeft} spots remaining</span>
                      <span>{Math.round(((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100)}% filled</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-1000"
                        style={{ width: visible ? `${((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                  <a
                    href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md shadow-orange-500/20 whitespace-nowrap cursor-pointer w-fit"
                  >
                    Register Now
                    <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-right-line"></i></span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Other Upcoming Events */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.filter(e => !e.isFeatured).map((event, i) => (
              <div
                key={event.id}
                className={`group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: visible ? `${200 + i * 120}ms` : '0ms' }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full whitespace-nowrap">
                      {event.type}
                    </span>
                  </div>
                  {event.spotsLeft < 50 && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                        Almost Full
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 flex items-center justify-center"><i className="ri-calendar-line text-orange-500 text-xs"></i></span>
                      {event.date} &middot; {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 flex items-center justify-center"><i className="ri-map-pin-line text-orange-500 text-xs"></i></span>
                      {event.location}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>{event.spotsLeft} spots left</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-400 rounded-full transition-all duration-1000"
                        style={{ width: visible ? `${((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                  <a
                    href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Register
                    <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-right-line"></i></span>
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
