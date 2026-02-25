
import { useEffect, useRef, useState } from 'react';

const stages = [
  {
    step: '01',
    title: 'Onboarding & Welcome',
    duration: 'Week 1-2',
    description:
      'A structured onboarding program with a dedicated buddy, tool setup, team introductions, and a deep dive into our processes and culture.',
    items: [
      'Dedicated onboarding buddy',
      'Tool & access setup',
      'Culture immersion sessions',
      'Meet the leadership',
    ],
    icon: 'ri-door-open-line',
  },
  {
    step: '02',
    title: 'Skill Building',
    duration: 'Month 1-6',
    description:
      'Hands-on project work with mentorship from senior engineers. Access to learning platforms, internal workshops, and certification programs.',
    items: [
      'Mentorship pairing',
      'Certification sponsorship',
      'Internal tech talks',
      'Cross-team collaboration',
    ],
    icon: 'ri-seedling-line',
  },
  {
    step: '03',
    title: 'Ownership & Impact',
    duration: 'Month 6-18',
    description:
      'Take ownership of client engagements, lead testing strategies, and contribute to process improvements that impact the entire organization.',
    items: [
      'Lead client projects',
      'Strategy ownership',
      'Process improvement',
      'Innovation contributions',
    ],
    icon: 'ri-rocket-line',
  },
  {
    step: '04',
    title: 'Leadership Path',
    duration: 'Year 2+',
    description:
      'Step into leadership roles — whether as a technical expert, team lead, or people manager. We support both IC and management tracks.',
    items: [
      'Technical lead track',
      'People management track',
      'Conference speaking',
      'Thought leadership',
    ],
    icon: 'ri-trophy-line',
  },
];

export default function GrowthJourney() {
  const [visible, setVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
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
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Professional Growth
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Growth Journey With Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From day one to leadership — we invest in your career at every stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Stage Selector */}
            <div
              className={`flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              {stages.map((stage, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStage(i)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer min-w-[200px] lg:min-w-0 ${
                    i === activeStage
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                  }`}
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 ${
                      i === activeStage ? 'bg-white/20' : 'bg-white/5'
                    }`}
                  >
                    <i className={`${stage.icon} text-lg`}></i>
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-bold whitespace-nowrap">{stage.title}</p>
                    <p className={`text-xs ${i === activeStage ? 'text-orange-100' : 'text-gray-500'}`}>
                      {stage.duration}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Stage Detail */}
            <div
              className={`bg-white/5 backdrop-blur rounded-2xl p-8 lg:p-10 border border-white/10 transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-bold text-orange-500/20">
                  {stages[activeStage].step}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{stages[activeStage].title}</h3>
                  <p className="text-orange-400 text-sm">{stages[activeStage].duration}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                {stages[activeStage].description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {stages[activeStage].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 flex items-center justify-center bg-orange-500/20 rounded-lg flex-shrink-0">
                      <i className="ri-check-line text-orange-400"></i>
                    </div>
                    <span className="text-sm text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
