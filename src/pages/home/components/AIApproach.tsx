
import { useState, useEffect } from 'react';

export default function AIApproach() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Cycle through animation phases
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: 'ri-focus-3-line',
      title: 'Risk‑based test focus',
      description: 'AI-powered intelligent prioritization ensures critical paths get tested first, maximizing coverage where it matters most.',
      stat: '3x',
      statLabel: 'Faster risk detection'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Faster test authoring',
      description: 'Smart AI tooling reduces time spent on repetitive test creation and maintenance by automating the mundane.',
      stat: '60%',
      statLabel: 'Less maintenance time'
    },
    {
      icon: 'ri-shield-keyhole-line',
      title: 'Security & privacy by design',
      description: 'Clear data boundaries with no external training on your sensitive information. Your code stays yours.',
      stat: '100%',
      statLabel: 'Data privacy guaranteed'
    }
  ];

  const workflowSteps = [
    { 
      icon: 'ri-file-code-line', 
      label: 'Your Codebase', 
      color: 'from-gray-400 to-gray-500',
      description: 'Analyze structure'
    },
    { 
      icon: 'ri-cpu-line', 
      label: 'AI Analysis', 
      color: 'from-orange-400 to-orange-500',
      description: 'Intelligent processing'
    },
    { 
      icon: 'ri-test-tube-line', 
      label: 'Focused Tests', 
      color: 'from-orange-500 to-amber-500',
      description: 'Generate tests'
    },
    { 
      icon: 'ri-bar-chart-grouped-line', 
      label: 'Clear Insights', 
      color: 'from-emerald-400 to-emerald-500',
      description: 'Deliver results'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[120px]"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-6">
              <i className="ri-sparkling-2-line text-orange-500"></i>
              <span className="text-orange-600 text-sm font-semibold">Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              Smarter testing with{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">AI-enhanced precision</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-orange-200/50 -z-10 rounded"></span>
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced QA engineers enhanced by <span className="font-semibold text-orange-600">AI-powered tooling</span>—delivering faster results without compromising quality or security.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left: Feature cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeFeature === index 
                      ? 'bg-white shadow-xl border-2 border-orange-200' 
                      : 'bg-white/50 border-2 border-transparent hover:bg-white hover:shadow-lg hover:border-gray-200'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  {/* Active indicator */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 transition-all duration-500 ${
                    activeFeature === index ? 'h-16 opacity-100' : 'h-0 opacity-0'
                  }`}></div>
                  
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      activeFeature === index 
                        ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/25' 
                        : 'bg-orange-50 group-hover:bg-orange-100'
                    }`}>
                      <i className={`${feature.icon} text-2xl ${activeFeature === index ? 'text-white' : 'text-orange-500'}`}></i>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                        {/* Stat badge */}
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-500 ${
                          activeFeature === index ? 'bg-orange-50 opacity-100' : 'opacity-0'
                        }`}>
                          <span className="text-lg font-bold text-orange-500">{feature.stat}</span>
                          <span className="text-xs text-gray-500">{feature.statLabel}</span>
                        </div>
                      </div>
                      <p className={`text-gray-600 transition-all duration-500 ${
                        activeFeature === index ? 'opacity-100' : 'opacity-70'
                      }`}>{feature.description}</p>
                    </div>
                  </div>
                  
                  {/* Bottom progress bar */}
                  <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-700 ${
                    activeFeature === index ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} style={{ transformOrigin: 'left' }}></div>
                </div>
              ))}
              
              {/* CTA Link */}
              <div className="pt-4 pl-6">
                <a
                  href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors cursor-pointer"
                >
                  <span>Learn how we protect your data</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>

            {/* Right: Animated workflow visualization */}
            <div className="relative">
              {/* Main visual container */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
                {/* Animated grid pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-10 transition-opacity duration-1000"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    opacity: animationPhase === 1 ? 0.2 : 0.1
                  }}
                ></div>
                
                {/* Dynamic glow effects */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] transition-all duration-1000"
                  style={{
                    background: animationPhase === 0 ? 'rgba(156, 163, 175, 0.2)' :
                                animationPhase === 1 ? 'rgba(251, 146, 60, 0.3)' :
                                animationPhase === 2 ? 'rgba(251, 191, 36, 0.3)' :
                                'rgba(52, 211, 153, 0.3)'
                  }}
                ></div>
                
                {/* Workflow visualization */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="text-center mb-10">
                    <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">AI-Enhanced Workflow</span>
                  </div>
                  
                  {/* Central animated flow diagram */}
                  <div className="flex-1 flex flex-col justify-center space-y-8">
                    {workflowSteps.map((step, index) => (
                      <div key={index} className="relative">
                        {/* Connection line to next step */}
                        {index < workflowSteps.length - 1 && (
                          <div className="absolute left-1/2 top-full w-0.5 h-8 -translate-x-1/2">
                            <div 
                              className={`w-full bg-gradient-to-b ${step.color} transition-all duration-500`}
                              style={{
                                height: animationPhase > index ? '100%' : '0%',
                                opacity: animationPhase > index ? 1 : 0.3
                              }}
                            ></div>
                          </div>
                        )}
                        
                        {/* Step card */}
                        <div 
                          className={`relative flex items-center gap-6 p-5 rounded-2xl border transition-all duration-700 ${
                            animationPhase === index 
                              ? 'bg-white/10 border-white/30 shadow-2xl scale-105' 
                              : 'bg-white/5 border-white/10'
                          }`}
                        >
                          {/* Icon with pulse animation */}
                          <div className="relative">
                            <div 
                              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-all duration-700 ${
                                animationPhase === index ? 'scale-110' : 'scale-100'
                              }`}
                            >
                              <i className={`${step.icon} text-3xl text-white`}></i>
                            </div>
                            {/* Pulse ring */}
                            {animationPhase === index && (
                              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} animate-ping opacity-40`}></div>
                            )}
                            {/* Progress indicator */}
                            <div 
                              className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                                animationPhase > index 
                                  ? 'bg-orange-500 text-white scale-100 opacity-100' 
                                  : animationPhase === index
                                  ? 'bg-orange-500 text-white scale-100 opacity-100'
                                  : 'bg-gray-600 text-gray-400 scale-75 opacity-50'
                              }`}
                            >
                              {animationPhase > index ? <i className="ri-check-line"></i> : index + 1}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h4 className={`text-lg font-bold mb-1 transition-colors duration-500 ${
                              animationPhase === index ? 'text-white' : 'text-gray-300'
                            }`}>
                              {step.label}
                            </h4>
                            <p className={`text-sm transition-all duration-500 ${
                              animationPhase === index ? 'text-gray-300 opacity-100' : 'text-gray-500 opacity-70'
                            }`}>
                              {step.description}
                            </p>
                          </div>
                          
                          {/* Animated data particles */}
                          {animationPhase === index && (
                            <>
                              <div className="absolute top-1/2 right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                              <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                              <div className="absolute bottom-1/3 right-6 w-1 h-1 bg-orange-300 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-700/50">
                    <div className="text-center">
                      <div className={`text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-500 ${
                        animationPhase >= 2 ? 'text-orange-400' : 'text-white'
                      }`}>98%</div>
                      <div className="text-xs text-gray-400">Test Coverage</div>
                    </div>
                    <div className="text-center border-x border-gray-700/50">
                      <div className={`text-2xl lg:text-3xl font-bold mb-1 transition-all duration-500 ${
                        animationPhase >= 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400' : 'text-white'
                      }`}>2.3x</div>
                      <div className="text-xs text-gray-400">Faster Cycles</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-500 ${
                        animationPhase >= 3 ? 'text-orange-400' : 'text-white'
                      }`}>-67%</div>
                      <div className="text-xs text-gray-400">Escaped Defects</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating security indicators */}
                <div className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  animationPhase === 2 ? 'bg-orange-500/30 scale-110' : 'bg-orange-500/20 scale-100'
                }`}>
                  <i className="ri-shield-check-line text-orange-400 text-lg"></i>
                </div>
                <div className={`absolute bottom-6 left-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  animationPhase === 0 ? 'bg-orange-500/30 scale-110' : 'bg-orange-500/20 scale-100'
                }`}>
                  <i className="ri-lock-line text-orange-400 text-lg"></i>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10 rotate-6"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-100 rounded-2xl -z-10 -rotate-6"></div>
            </div>
          </div>

          {/* Bottom trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 text-gray-500">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <i className="ri-git-repository-private-line text-gray-600 text-lg"></i>
              </div>
              <span className="text-sm font-medium">No code leaves your environment</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3 text-gray-500">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <i className="ri-database-2-line text-gray-600 text-lg"></i>
              </div>
              <span className="text-sm font-medium">Zero data retention policy</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3 text-gray-500">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <i className="ri-verified-badge-line text-gray-600 text-lg"></i>
              </div>
              <span className="text-sm font-medium">SOC 2 compliant practices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
