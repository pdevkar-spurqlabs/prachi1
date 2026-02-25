
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description:
      'We begin with a deep dive into your product, tech stack, and quality challenges. Our experts analyze your current testing gaps and create a tailored QA roadmap.',
    icon: 'ri-search-eye-line',
    detail: 'Includes codebase review, risk assessment, and test strategy document.',
  },
  {
    number: '02',
    title: 'Team Assembly & Onboarding',
    description:
      'We handpick QA engineers with domain expertise matching your industry. Our team integrates into your workflows, tools, and communication channels within days.',
    icon: 'ri-team-line',
    detail: 'Average onboarding time: 3-5 business days for full productivity.',
  },
  {
    number: '03',
    title: 'Strategy & Framework Setup',
    description:
      'We design and implement a comprehensive testing framework — from automation architecture to CI/CD integration, quality gates, and reporting dashboards.',
    icon: 'ri-settings-4-line',
    detail: 'Custom frameworks built on Selenium, Cypress, Playwright, or Appium.',
  },
  {
    number: '04',
    title: 'Execution & Continuous Testing',
    description:
      'Our team executes testing in sync with your sprints. Automated regression, performance benchmarks, and security scans run continuously in your pipeline.',
    icon: 'ri-rocket-2-line',
    detail: 'Real-time dashboards with defect trends, coverage metrics, and SLA tracking.',
  },
  {
    number: '05',
    title: 'Optimization & Scale',
    description:
      'We continuously refine test suites, eliminate flaky tests, expand coverage, and scale the team as your product grows — ensuring quality never becomes a bottleneck.',
    icon: 'ri-line-chart-line',
    detail: 'Monthly QA health reports with actionable improvement recommendations.',
  },
];

export default function ProcessTimeline() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Proven Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              From Challenge to{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Confidence
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A battle-tested methodology refined across 500+ engagements to deliver
              predictable, measurable quality improvements.
            </p>
          </div>

          <div className="lg:flex gap-10">
            {/* Left: Step selector */}
            <div className="lg:w-[38%] mb-8 lg:mb-0">
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-500 cursor-pointer group ${
                      activeStep === i
                        ? 'bg-white/10 border border-orange-500/30'
                        : 'bg-transparent border border-transparent hover:bg-white/5'
                    } ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    style={{ transitionDelay: visible ? `${200 + i * 100}ms` : '0ms' }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                          activeStep === i
                            ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20'
                            : 'bg-white/5 group-hover:bg-white/10'
                        }`}
                      >
                        <span
                          className={`text-sm font-bold ${
                            activeStep === i ? 'text-white' : 'text-gray-400'
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-semibold text-sm transition-colors duration-300 ${
                            activeStep === i ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                      <i
                        className={`ri-arrow-right-s-line text-lg transition-all duration-300 ${
                          activeStep === i
                            ? 'text-orange-400 translate-x-0 opacity-100'
                            : 'text-gray-600 -translate-x-2 opacity-0'
                        }`}
                      ></i>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Active step detail */}
            <div className="lg:w-[62%]">
              <div
                key={activeStep}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animation: 'stepReveal 0.5s ease both' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20">
                    <i className={`${steps[activeStep].icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                      Step {steps[activeStep].number}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">{steps[activeStep].description}</p>

                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500/10 flex-shrink-0 mt-0.5">
                    <i className="ri-information-line text-orange-400"></i>
                  </div>
                  <p className="text-sm text-gray-400">{steps[activeStep].detail}</p>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-2 mt-8">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i <= activeStep ? 'bg-orange-500' : 'bg-white/10'
                      }`}
                      style={{ width: i === activeStep ? 40 : 16 }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes stepReveal {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
