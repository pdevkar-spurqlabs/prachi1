
import { useEffect, useRef, useState } from 'react';

const perks = [
  {
    icon: 'ri-rocket-2-line',
    title: 'Career Growth',
    description:
      'Clear career paths from Junior QA to Lead, Architect, or Management. We invest in your professional development with certifications and training.',
  },
  {
    icon: 'ri-global-line',
    title: 'Remote-First Culture',
    description:
      "Work from anywhere in the world. We believe great talent isnn't limited by geography. Flexible hours that fit your lifestyle.",
  },
  {
    icon: 'ri-book-open-line',
    title: 'Continuous Learning',
    description:
      'Annual learning budget, access to conferences, workshops, and internal knowledge-sharing sessions. Stay ahead of the curve.',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Health & Wellness',
    description:
      'Comprehensive health insurance, mental health support, gym memberships, and wellness programs to keep you at your best.',
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'Cutting-Edge Projects',
    description:
      'Work with the latest tools and technologies—Selenium, Cypress, Playwright, K6, and AI-powered testing frameworks.',
  },
  {
    icon: 'ri-hand-heart-line',
    title: 'Inclusive Environment',
    description:
      'A diverse, supportive team where every voice matters. We celebrate differences and foster belonging for everyone.',
  },
];

/**
 * WhyJoinUs component
 *
 * Displays a list of perks with a simple intersection‑observer animation.
 * Includes defensive checks and error handling to avoid runtime crashes.
 */
export default function WhyJoinUs() {
  // Store indexes of cards that have become visible
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  // Ref to the container element that holds the cards
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guard against environments where IntersectionObserver is not available (e.g., old browsers or SSR)
    if (typeof IntersectionObserver === 'undefined') {
      // If the API is missing, simply reveal all cards
      setVisibleCards(new Set(perks.map((_p, i) => i)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute('data-index');
            const index = indexAttr ? Number(indexAttr) : NaN;
            if (!Number.isNaN(index)) {
              // Use functional update to avoid stale closures
              setVisibleCards((prev) => {
                const next = new Set(prev);
                next.add(index);
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe each card element once the DOM node is available
    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []); // empty dependency array – runs once after mount

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="max-w-7xl mx-auto" ref={sectionRef}>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Why SpurQLabs
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              More Than Just a Job
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer an environment where QA professionals thrive, grow, and make a real impact on the
              software industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <div
                key={index}
                data-index={index}
                className={`
                  group bg-white rounded-2xl p-6 border border-gray-100
                  hover:border-orange-200 hover:shadow-xl transition-all duration-500
                  ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-orange-50 group-hover:bg-orange-100 rounded-xl mb-5 transition-colors duration-300">
                  {/* Icon rendered via Remix Icon class names */}
                  <i className={`${perk.icon} text-2xl text-orange-500`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{perk.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
