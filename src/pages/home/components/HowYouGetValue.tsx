'use client';

import { useState } from 'react';

export default function HowYouGetValue() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      phase: 'Week 1–2',
      title: 'Discover & Assess',
      icon: 'ri-search-eye-line',
      status: 'Chaos',
      statusColor: 'from-red-500 to-orange-500',
      benefits: [
        'Deep dive into your product and current testing approach',
        'Identify critical risk areas and coverage gaps',
        'Map out quick wins and long-term improvements'
      ],
      visual: 'ri-radar-line'
    },
    {
      phase: 'Week 3–4',
      title: 'Design the Test Strategy',
      icon: 'ri-draft-line',
      status: 'Planning',
      statusColor: 'from-orange-500 to-amber-500',
      benefits: [
        'Create a tailored test plan aligned with your SDLC',
        'Define automation priorities and tooling needs',
        'Set clear success metrics and reporting cadence'
      ],
      visual: 'ri-route-line'
    },
    {
      phase: 'Month 2',
      title: 'Execute & Automate',
      icon: 'ri-rocket-2-line',
      status: 'Building',
      statusColor: 'from-amber-500 to-emerald-500',
      benefits: [
        'Begin systematic testing across critical user flows',
        'Build intelligent automation for regression coverage',
        'Integrate seamlessly with your CI/CD pipeline'
      ],
      visual: 'ri-code-box-line'
    },
    {
      phase: 'Ongoing',
      title: 'Optimize & Improve',
      icon: 'ri-line-chart-line',
      status: 'Confidence',
      statusColor: 'from-emerald-500 to-teal-500',
      benefits: [
        'Regular test suite maintenance and optimization',
        'Adapt to new features and changing priorities',
        'Data‑driven insights to reduce cycle time further'
      ],
      visual: 'ri-shield-check-line'
    }
  ];

  // Guard against invalid step index (e.g., if steps array is empty)
  const safeActiveStep = Math.min(Math.max(activeStep, 0), steps.length - 1);

  return (
    <section id="how-we-work" className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20 relative z-0">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How we take you from{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">chaos</span>
              </span>
              {' '}to{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">confidence</span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven roadmap that delivers results fast
            </p>
          </div>

          {/* Journey Visual - Desktop */}
          <div className="hidden lg:block relative">
            {/* Main journey path */}
            <div className="relative h-[420px]">
              {/* Curved path SVG background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-2 bg-gradient-to-r from-red-200 via-amber-200 to-emerald-200 rounded-full relative">
                  {/* Animated progress line */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-orange-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${((safeActiveStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Journey nodes */}
              <div className="absolute inset-0 flex items-center justify-between px-12">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="relative flex flex-col items-center cursor-pointer group"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Connector line to card */}
                    <div className={`absolute w-0.5 bg-gradient-to-b ${step.statusColor} transition-all duration-500 ${
                      index % 2 === 0 ? 'bottom-1/2 h-20' : 'top-1/2 h-20'
                    } ${safeActiveStep === index ? 'opacity-100' : 'opacity-30'}`}></div>
                    
                    {/* Main node */}
                    <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.statusColor} flex items-center justify-center shadow-xl transition-all duration-500 ${
                      safeActiveStep === index ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <i className={`${step.icon} text-xl bg-gradient-to-br ${step.statusColor} bg-clip-text text-transparent`}></i>
                      </div>
                      {/* Pulse ring */}
                      {safeActiveStep === index && (
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.statusColor} animate-ping opacity-20`}></div>
                      )}
                    </div>

                    {/* Phase label */}
                    <div className={`absolute ${index % 2 === 0 ? 'top-full mt-3' : 'bottom-full mb-3'} whitespace-nowrap z-20`}>
                      <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${step.statusColor} bg-clip-text text-transparent`}>
                        {step.phase}
                      </span>
                    </div>

                    {/* Content card */}
                    <div className={`absolute ${index % 2 === 0 ? 'bottom-full mb-24' : 'top-full mt-24'} ${
                      index === 0 ? 'left-0' : index === steps.length - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2'
                    } w-64 transition-all duration-500 z-50 ${
                      safeActiveStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                      <div className="bg-white rounded-xl p-5 shadow-2xl border border-gray-100">
                        {/* Status badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.statusColor} text-white text-xs font-semibold mb-3`}>
                          <i className={`${step.visual} text-xs`}></i>
                          {step.status}
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                        
                        <ul className="space-y-2">
                          {step.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                              <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.statusColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <i className="ri-check-line text-white text-[10px]"></i>
                              </div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Arrow pointer */}
                      <div className={`absolute ${index % 2 === 0 ? '-bottom-2' : '-top-2'} ${
                        index === 0 ? 'left-8' : index === steps.length - 1 ? 'right-8' : 'left-1/2 -translate-x-1/2'
                      } w-4 h-4 bg-white border-gray-100 ${
                        index % 2 === 0 ? 'border-b border-r rotate-45' : 'border-t border-l -rotate-45'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Start and End labels - positioned beside the nodes */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-32">
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-3 py-1.5">
                  <i className="ri-error-warning-line text-red-500 text-sm"></i>
                  <span className="text-xs font-semibold text-red-600">Start</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-32">
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
                  <span className="text-xs font-semibold text-emerald-600">Success</span>
                  <i className="ri-trophy-line text-emerald-500 text-sm"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Visual - Mobile */}
          <div className="lg:hidden relative">
            {/* Vertical timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-amber-200 to-emerald-200 rounded-full">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 via-orange-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-700"
                style={{ height: `${((safeActiveStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            <div className="space-y-8 relative">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative pl-20"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Node */}
                  <div className={`absolute left-4 w-10 h-10 rounded-full bg-gradient-to-br ${step.statusColor} flex items-center justify-center shadow-lg transition-all duration-300 ${
                    safeActiveStep === index ? 'scale-125' : 'scale-100'
                  }`}>
                    <i className={`${step.icon} text-white text-lg`}></i>
                  </div>

                  {/* Card */}
                  <div className={`bg-white rounded-xl p-5 shadow-lg border-2 transition-all duration-300 ${
                    safeActiveStep === index ? 'border-orange-300 shadow-xl' : 'border-gray-100'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${step.statusColor} text-white text-xs font-semibold`}>
                        <i className={`${step.visual} text-xs`}></i>
                        {step.status}
                      </span>
                      <span className="text-xs font-medium text-gray-400">{step.phase}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    
                    <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${
                      safeActiveStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {step.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <i className={`ri-check-line bg-gradient-to-r ${step.statusColor} bg-clip-text text-transparent mt-0.5`}></i>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* End badge */}
            <div className="mt-8 pl-20">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
                <i className="ri-trophy-line text-emerald-500"></i>
                <span className="text-sm font-semibold text-emerald-600">You've reached confidence!</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 lg:mt-20">
            <a 
              href="#assessment"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-black text-white text-base font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <span>See what this would look for your product</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
