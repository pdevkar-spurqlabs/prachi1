
import { useState, useEffect, useRef } from 'react';

const guests = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'AI Research Lead, TestAI Labs',
    topic: 'The Future of AI in Software Testing',
    quote:
      "AI won't replace testers — it will make them 10x more effective. The key is knowing where to apply intelligence.",
    image:
      'https://readdy.ai/api/search-image?query=A%20professional%20headshot%20of%20a%20Caucasian%20female%20scientist%20in%20her%20early%20forties%20with%20glasses%20wearing%20a%20navy%20blazer%20warm%20studio%20lighting%20neutral%20background%20confident%20intellectual%20expression%20high%20quality%20portrait&width=300&height=300&seq=guest-sarah-1&orientation=squarish',
  },
  {
    name: 'James Rodriguez',
    role: 'VP of Engineering, CloudScale',
    topic: 'Shift-Left Testing: Why Early QA Wins',
    quote:
      "Every dollar spent on testing in the design phase saves $100 in production. Shift-left isn’t a trend — it’s economics.",
    image:
      'https://readdy.ai/api/search-image?query=A%20professional%20headshot%20of%20a%20Hispanic%20male%20tech%20executive%20in%20his%20mid%20forties%20wearing%20a%20dark%20shirt%20warm%20studio%20lighting%20neutral%20background%20friendly%20approachable%20expression%20high%20quality%20portrait&width=300&height=300&seq=guest-james-1&orientation=squarish',
  },
  {
    name: 'Priya Sharma',
    role: 'Senior SRE, StreamTech',
    topic: 'Performance Testing at Scale',
    quote:
      "At 50 million concurrent users, every millisecond matters. Performance testing isn’t optional — it’s survival.",
    image:
      'https://readdy.ai/api/search-image?query=A%20professional%20headshot%20of%20an%20Indian%20female%20engineer%20in%20her%20early%20thirties%20wearing%20a%20casual%20tech%20company%20hoodie%20warm%20studio%20lighting%20neutral%20background%20enthusiastic%20expression%20high%20quality%20portrait&width=300&height=300&seq=guest-priya-1&orientation=squarish',
  },
  {
    name: 'Marcus Chen',
    role: 'CISO, FinGuard Systems',
    topic: 'Security Testing in the Age of Zero Trust',
    quote:
      "The question isn’t if you’ll be attacked, but when. Continuous security testing is your best insurance policy.",
    image:
      'https://readdy.ai/api/search-image?query=A%20professional%20headshot%20of%20an%20Asian%20male%20cybersecurity%20executive%20in%20his%20late%20thirties%20wearing%20a%20suit%20jacket%20warm%20studio%20lighting%20neutral%20background%20serious%20confident%20expression%20high%20quality%20portrait&width=300&height=300&seq=guest-marcus-1&orientation=squarish',
  },
  {
    name: 'Emily Watson',
    role: 'QA Director, SpurQLabs',
    topic: 'Building a World-Class QA Team',
    quote:
      'Culture eats process for breakfast. Build a team that cares about quality, and the frameworks will follow.',
    image:
      'https://readdy.ai/api/search-image?query=A%20professional%20headshot%20of%20a%20Caucasian%20female%20tech%20leader%20in%20her%20mid%20thirties%20with%20shoulder%20length%20hair%20wearing%20a%20smart%20casual%20top%20warm%20studio%20lighting%20neutral%20background%20warm%20smile%20high%20quality%20portrait&width=300&height=300&seq=guest-emily-1&orientation=squarish',
  },
];

export default function GuestHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Observe section visibility for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto‑rotate guests every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % guests.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // When a user selects a guest manually, restart the timer
  const handleSelect = (i: number) => {
    setActiveIndex(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % guests.length);
    }, 5000);
  };

  const active = guests[activeIndex];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Featured Guests
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Leaders
              </span>{' '}
              on the Show
            </h2>
            <p className="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              We bring in the best minds from across the software quality ecosystem to share
              their insights and experiences.
            </p>
          </div>

          {/* Main content */}
          <div
            className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Active guest spotlight */}
            <div className="relative bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-2xl p-6 lg:p-10 mb-8 border border-gray-100">
              <div className="absolute top-6 right-6 lg:top-8 lg:right-10 text-orange-200">
                <i className="ri-double-quotes-l text-5xl lg:text-7xl" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border-2 border-orange-200 shadow-lg">
                    <img
                      src={active.image}
                      alt={active.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed italic mb-5">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-base font-bold text-gray-900">{active.name}</p>
                    <p className="text-sm text-orange-500 font-medium">{active.role}</p>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1 justify-center md:justify-start">
                      <span className="w-3.5 h-3.5 flex items-center justify-center">
                        <i className="ri-mic-line text-xs" />
                      </span>
                      {active.topic}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest avatars navigation */}
            <div className="flex items-center justify-center gap-4 lg:gap-6">
              {guests.map((guest, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    i === activeIndex ? 'scale-110' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <div
                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 transition-colors duration-300 ${
                      i === activeIndex
                        ? 'border-orange-500 shadow-lg shadow-orange-500/20'
                        : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {i === activeIndex && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {guests.map((_, i) => (
                <div key={i} className="h-1 rounded-full overflow-hidden bg-gray-200 w-12">
                  <div
                    className={`h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all ${
                      i === activeIndex
                        ? 'w-full duration-[5000ms]'
                        : i < activeIndex
                        ? 'w-full duration-300'
                        : 'w-0 duration-300'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
