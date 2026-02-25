
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[120px]"></div>
      
      <Navigation scrolled={scrolled} />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300 text-sm font-medium">Independent QA & Testing Services</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 text-white">
            Exceptional QA teams,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400">
              purpose‑built for your success.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Independent software testing specialists helping you ship faster with fewer production issues—without inflating QA headcount.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white text-base font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-400/40 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-2"
            >
              Book a 20‑Minute QA Strategy Call
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a 
              href="#assessment"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-base font-semibold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm whitespace-nowrap cursor-pointer"
            >
              Get a Free Test Assessment
            </a>
          </div>
          
          {/* Outcome bullets - horizontal on desktop */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20">
                <i className="ri-shield-check-line text-orange-400 text-lg"></i>
              </div>
              <span className="text-gray-300 text-sm lg:text-base">Cut escaped defects release after release</span>
            </div>
            <div className="hidden lg:block w-px h-8 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20">
                <i className="ri-speed-line text-orange-400 text-lg"></i>
              </div>
              <span className="text-gray-300 text-sm lg:text-base">Regression cycles from days to hours</span>
            </div>
            <div className="hidden lg:block w-px h-8 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20">
                <i className="ri-expand-up-down-line text-orange-400 text-lg"></i>
              </div>
              <span className="text-gray-300 text-sm lg:text-base">Scale testing as your roadmap evolves</span>
            </div>
          </div>
        </div>
        
        {/* Floating metric cards */}
        <div className="hidden lg:block absolute top-1/3 left-8 xl:left-16 animate-float">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl transform -rotate-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/20">
                <i className="ri-check-double-line text-green-400 text-xl"></i>
              </div>
              <div>
                <div className="text-white font-bold text-lg">98.5%</div>
                <div className="text-gray-400 text-xs">Test Coverage</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute top-1/2 right-8 xl:right-16 animate-float-delayed">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl transform rotate-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/20">
                <i className="ri-flashlight-line text-orange-400 text-xl"></i>
              </div>
              <div>
                <div className="text-white font-bold text-lg">2.3x</div>
                <div className="text-gray-400 text-xs">Faster Releases</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden xl:block absolute bottom-1/3 left-20 animate-float-slow">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl transform rotate-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-500/20">
                <i className="ri-bug-line text-red-400 text-xl"></i>
              </div>
              <div>
                <div className="text-white font-bold text-lg">-67%</div>
                <div className="text-gray-400 text-xs">Defect Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
