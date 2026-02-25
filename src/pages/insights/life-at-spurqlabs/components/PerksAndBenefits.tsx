
import { useEffect, useRef, useState } from 'react';

const perks = [
  {
    icon: 'ri-heart-pulse-line',
    title: 'Health & Wellness',
    description:
      'Comprehensive health insurance for you and your family, plus wellness programs and gym memberships.',
    tag: '',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Learning Budget',
    description:
      'Annual learning allowance for courses, certifications, books, and conference attendance.',
    tag: 'Popular',
  },
  {
    icon: 'ri-home-wifi-line',
    title: 'Remote Work Stipend',
    description:
      'Monthly allowance for home office setup, internet, and co‑working space memberships.',
    tag: '',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Flexible PTO',
    description:
      'Generous paid time off with flexible scheduling. We trust you to manage your time.',
    tag: '',
  },
  {
    icon: 'ri-stock-line',
    title: 'Performance Bonuses',
    description:
      'Quarterly performance bonuses and annual increments tied to your growth and impact.',
    tag: '',
  },
  {
    icon: 'ri-parent-line',
    title: 'Parental Leave',
    description:
      'Extended paid parental leave for both primary and secondary caregivers.',
    tag: 'New',
  },
  {
    icon: 'ri-mental-health-line',
    title: 'Mental Health Support',
    description:
      'Free counseling sessions, mental health days, and access to wellness apps.',
    tag: '',
  },
  {
    icon: 'ri-plane-line',
    title: 'Team Retreats',
    description:
      'Annual all‑expenses‑paid team retreats to exciting destinations for bonding and fun.',
    tag: 'Popular',
  },
  {
    icon: 'ri-award-line',
    title: 'Certification Support',
    description:
      'Full sponsorship for industry certifications like ISTQB, AWS, OSCP, and more.',
    tag: '',
  },
  {
    icon: 'ri-time-line',
    title: 'Flexible Hours',
    description:
      'Core hours with flexibility to start and end your day when it works best for you.',
    tag: '',
  },
  {
    icon: 'ri-gift-line',
    title: 'Referral Rewards',
    description:
      'Generous referral bonuses when you help us find great talent to join the team.',
    tag: '',
  },
  {
    icon: 'ri-computer-line',
    title: 'Latest Equipment',
    description:
      'Top‑of‑the‑line laptops, monitors, and peripherals to power your best work.',
    tag: '',
  },
];

export default function PerksAndBenefits() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guard against environments where IntersectionObserver is unavailable
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Perks & Benefits
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Beyond the Paycheck
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take care of our people with benefits that matter — because happy
              teams build better software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-500 cursor-default ${
                  visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: visible ? `${100 + i * 60}ms` : '0ms',
                }}
              >
                {perk.tag && (
                  <span
                    className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      perk.tag === 'Popular'
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-emerald-100 text-emerald-600'
                    }`}
                  >
                    {perk.tag}
                  </span>
                )}
                <div className="w-12 h-12 flex items-center justify-center bg-orange-50 group-hover:bg-orange-100 rounded-xl mb-4 transition-colors duration-300">
                  <i className={`${perk.icon} text-xl text-orange-500`}></i>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
