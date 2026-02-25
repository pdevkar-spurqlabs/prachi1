
import { useState, useRef, useEffect } from 'react';

const processSteps = [
  {
    step: 1,
    title: 'Research & Data Collection',
    description:
      'We gather data from industry reports, our own project analytics, and expert interviews to ensure every statistic is accurate and current.',
    icon: 'ri-search-eye-line',
  },
  {
    step: 2,
    title: 'Analysis & Storytelling',
    description:
      'Raw data is transformed into compelling narratives. We identify the key insights that matter most to QA professionals and engineering leaders.',
    icon: 'ri-lightbulb-line',
  },
  {
    step: 3,
    title: 'Visual Design',
    description:
      'Our design team creates clean, engaging visuals that make complex data easy to understand at a glance — optimized for sharing and printing.',
    icon: 'ri-palette-line',
  },
  {
    step: 4,
    title: 'Expert Review',
    description:
      'Every infographic is reviewed by senior QA engineers and industry experts to ensure technical accuracy and practical relevance.',
    icon: 'ri-shield-check-line',
  },
  {
    step: 5,
    title: 'Publish & Share',
    description:
      'Finalized infographics are published in multiple formats and shared across our community of 50,000+ QA professionals worldwide.',
    icon: 'ri-share-circle-line',
  },
];

export default function InfographicsProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Observe visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto‑rotate steps when component is visible
  useEffect(() => {
    if (!visible) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gray-50">
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
              Our Process
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Create Infographics
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every visual goes through a rigorous 5-step process to ensure
              accuracy, clarity, and impact.
            </p>
          </div>

          {/* Steps */}
          <div
            className={`grid lg:grid-cols-5 gap-4 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-500 cursor-pointer group ${
                  activeStep === idx
                    ? 'bg-white border-orange-200 shadow-lg shadow-orange-500/10'
                    : 'bg-white/50 border-gray-200 hover:border-orange-200 hover:bg-white'
                }`}
              >
                {/* Progress bar for the active step */}
                {activeStep === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 animate-progress-bar" />
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl mb-3 transition-all duration-300 ${
                    activeStep === idx
                      ? 'bg-gradient-to-br from-orange-500 to-amber-500'
                      : 'bg-gray-100 group-hover:bg-orange-50'
                  }`}
                >
                  <i
                    className={`${step.icon} text-lg ${
                      activeStep === idx
                        ? 'text-white'
                        : 'text-gray-500 group-hover:text-orange-500'
                    }`}
                  />
                </div>

                {/* Step number */}
                <div
                  className={`text-xs font-bold mb-1 transition-colors ${
                    activeStep === idx ? 'text-orange-500' : 'text-gray-400'
                  }`}
                >
                  Step {step.step}
                </div>

                {/* Title */}
                <h3
                  className={`text-sm font-bold mb-2 transition-colors ${
                    activeStep === idx ? 'text-gray-900' : 'text-gray-600'
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs leading-relaxed transition-all duration-500 ${
                    activeStep === idx
                      ? 'text-gray-500 max-h-40 opacity-100'
                      : 'text-gray-400 max-h-0 opacity-0 lg:max-h-40 lg:opacity-100'
                  } overflow-hidden`}
                >
                  {step.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animation keyframes – using a regular <style> element (not self‑closing) to avoid JSX parsing errors */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes progressBar { from { width: 0; } to { width: 100%; } }
            .animate-progress-bar { animation: progressBar 4s linear; }
          `,
        }}
      ></style>
    </section>
  );
}
