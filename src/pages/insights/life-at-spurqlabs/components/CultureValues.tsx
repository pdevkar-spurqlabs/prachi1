
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'Innovation First',
    description:
      'We encourage experimentation and creative problem-solving. Every team member has the freedom to propose new ideas and approaches.',
    color: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
  },
  {
    icon: 'ri-hand-heart-line',
    title: 'People Over Process',
    description:
      'Our people are our greatest asset. We invest in their growth, well-being, and happiness because great work comes from great people.',
    color: 'from-rose-500 to-pink-500',
    bgLight: 'bg-rose-50',
  },
  {
    icon: 'ri-shield-star-line',
    title: 'Quality is Non-Negotiable',
    description:
      'We live and breathe quality — not just in the software we test, but in every interaction, every deliverable, and every relationship.',
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
  },
  {
    icon: 'ri-chat-smile-3-line',
    title: 'Open Communication',
    description:
      'Transparency and honesty are the foundation of our culture. We share openly, listen actively, and respect every voice.',
    color: 'from-amber-500 to-yellow-500',
    bgLight: 'bg-amber-50',
  },
  {
    icon: 'ri-earth-line',
    title: 'Diversity & Inclusion',
    description:
      'We celebrate differences and build an environment where everyone belongs. Diverse perspectives make us stronger and more innovative.',
    color: 'from-cyan-500 to-sky-500',
    bgLight: 'bg-cyan-50',
  },
  {
    icon: 'ri-rocket-2-line',
    title: 'Continuous Growth',
    description:
      'Learning never stops here. From certifications to conferences, mentorship to hackathons — we fuel your professional journey.',
    color: 'from-violet-500 to-indigo-500',
    bgLight: 'bg-violet-50',
  },
];

export default function CultureValues() {
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
      { threshold: 0.15 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="our-culture" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Culture
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Values That Define Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our culture isn&apos;t just words on a wall — it&apos;s how we show up
              every day, for each other and for our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 cursor-default ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: visible ? `${150 + i * 100}ms` : '0ms' }}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl ${v.bgLight} group-hover:scale-110 transition-transform duration-300 mb-5`}
                >
                  <i
                    className={`${v.icon} text-2xl bg-gradient-to-br ${v.color} bg-clip-text text-transparent`}
                  ></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${v.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
