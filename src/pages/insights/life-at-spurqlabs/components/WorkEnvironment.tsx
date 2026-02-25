
import { useEffect, useRef, useState } from 'react';

const environments = [
  {
    title: 'Modern Workspaces',
    description:
      'Our offices are designed for collaboration and focus. Open floor plans, quiet zones, standing desks, and cozy breakout areas — choose the space that fits your workflow.',
    image:
      'https://readdy.ai/api/search-image?query=A%20modern%20tech%20office%20interior%20with%20open%20floor%20plan%20featuring%20standing%20desks%20ergonomic%20chairs%20glass%20meeting%20rooms%20indoor%20plants%20warm%20natural%20lighting%20clean%20minimal%20Scandinavian%20design%20aesthetic%20with%20wood%20accents%20and%20green%20plants%20professional%20workspace%20photography&width=600&height=400&seq=work-env-1&orientation=landscape',
    stats: [
      { label: 'Ergonomic Setups', value: '100%' },
      { label: 'Meeting Rooms', value: '15+' },
    ],
  },
  {
    title: 'Remote-First Flexibility',
    description:
      'Work from anywhere. Our hybrid model gives you the freedom to choose where you do your best work — whether that is from home, a co-working space, or one of our global offices.',
    image:
      'https://readdy.ai/api/search-image?query=A%20professional%20working%20remotely%20from%20a%20beautiful%20home%20office%20setup%20with%20dual%20monitors%20laptop%20plants%20on%20desk%20natural%20window%20light%20cozy%20modern%20interior%20warm%20tones%20clean%20organized%20workspace%20remote%20work%20lifestyle%20photography&width=600&height=400&seq=work-env-2&orientation=landscape',
    stats: [
      { label: 'Remote Workers', value: '60%' },
      { label: 'Countries', value: '8+' },
    ],
  },
  {
    title: 'Cutting-Edge Tools',
    description:
      'We equip every team member with the latest tools and technologies. From AI-powered testing frameworks to cloud infrastructure — you will always have what you need to excel.',
    image:
      'https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20developer%20workstation%20with%20multiple%20high%20resolution%20monitors%20showing%20code%20testing%20dashboards%20and%20automation%20tools%20modern%20keyboard%20mechanical%20setup%20with%20ambient%20LED%20lighting%20clean%20desk%20professional%20tech%20workspace%20photography&width=600&height=400&seq=work-env-3&orientation=landscape',
    stats: [
      { label: 'Tools & Platforms', value: '50+' },
      { label: 'Cloud Partners', value: '3' },
    ],
  },
];

export default function WorkEnvironment() {
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
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Work Environment
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Designed for Your Best Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you prefer the energy of an office or the comfort of home, we create
              environments where you can thrive.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {environments.map((env, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: visible ? `${200 + i * 200}ms` : '0ms' }}
              >
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={env.image}
                      alt={env.title}
                      className="w-full h-[280px] lg:h-[340px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Escaped the slash in the Tailwind class to avoid JSX parsing errors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900\\/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      {env.stats.map((s, si) => (
                        <div key={si} className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg">
                          <p className="text-lg font-bold text-gray-900">{s.value}</p>
                          <p className="text-xs text-gray-600">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100">
                      <span className="text-lg font-bold text-orange-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-orange-200 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{env.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{env.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
