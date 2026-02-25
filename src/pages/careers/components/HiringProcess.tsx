
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    step: '01',
    icon: 'ri-file-text-line',
    title: 'Application Review',
    description:
      'Submit your application and our talent team reviews your profile within 48 hours.',
    duration: '1-2 days',
  },
  {
    step: '02',
    icon: 'ri-phone-line',
    title: 'Screening Call',
    description:
      'A 30-minute call with our recruiter to discuss your experience, expectations, and culture fit.',
    duration: '30 mins',
  },
  {
    step: '03',
    icon: 'ri-code-box-line',
    title: 'Technical Assessment',
    description:
      'A practical assessment tailored to the role—automation challenge, test plan, or security audit scenario.',
    duration: '2-3 hours',
  },
  {
    step: '04',
    icon: 'ri-team-line',
    title: 'Team Interview',
    description:
      'Meet your potential team lead and peers. We assess technical depth, problem-solving, and collaboration.',
    duration: '1 hour',
  },
  {
    step: '05',
    icon: 'ri-checkbox-circle-line',
    title: 'Offer & Onboarding',
    description:
      'Receive your offer within 48 hours of final interview. Our structured onboarding gets you productive fast.',
    duration: '1-2 days',
  },
];

export default function HiringProcess() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step'));
            // Guard against NaN values
            if (!isNaN(index)) {
              setVisibleSteps((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-step]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        {/* Grid background – self‑closed to avoid JSX parsing issues */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="max-w-7xl mx-auto" ref={sectionRef}>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              How We Hire
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A transparent, efficient process designed to find the best fit for
              both you and our team. Typically completed within 2 weeks.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-orange-500/30 via-orange-500/60 to-orange-500/30"></div>

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  data-step={index}
                  className={`relative text-center transition-all duration-700 ${
                    visibleSteps.has(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-500 rounded-full mx-auto mb-5 shadow-lg shadow-orange-500/30">
                    <i className={`${step.icon} text-xl text-white`}></i>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur rounded-xl p-5 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                    <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
                      {step.step}
                    </span>
                    <h3 className="text-white font-bold mt-2 mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-orange-300 font-medium">
                      <span className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-time-line text-xs"></i>
                      </span>
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
