
import { useEffect, useState, useRef } from 'react';
import { infographicStats } from '../../../../mocks/infographics';

function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function InfographicsHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const keyframesStyle = `
    @keyframes float-particle {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
      50% { transform: translateY(-10px) translateX(-5px); opacity: 0.4; }
      75% { transform: translateY(-30px) translateX(15px); opacity: 0.7; }
    }
    @keyframes chart-grow {
      0% { height: 4px; }
      50% { height: 28px; }
      100% { height: 4px; }
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.8); opacity: 0.6; }
      50% { transform: scale(1.2); opacity: 0; }
      100% { transform: scale(0.8); opacity: 0.6; }
    }
  `;

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
            style={{
              top: `${10 + i * 12}%`,
              left: `${8 + i * 12}%`,
              animation: `float-particle ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Chart bar animation */}
          <div
            className={`flex items-end justify-center gap-1.5 mb-6 h-8 transition-all duration-700 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-orange-500 to-amber-400 rounded-full"
                style={{
                  animation: `chart-grow ${0.8 + i * 0.12}s ease-in-out infinite`,
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>

          <p
            className={`text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center justify-center gap-2 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="w-8 h-px bg-orange-400" />
            Visual Knowledge Hub
            <span className="w-8 h-px bg-orange-400" />
          </p>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Data-Driven Insights,{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Beautifully Visualized.
            </span>
          </h1>

          <p
            className={`text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Explore our collection of infographics covering software testing trends,
            automation strategies, performance benchmarks, and quality engineering best
            practices.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 mb-14 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#gallery"
              className="px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-gallery-line text-base" />
              </span>
              Browse Gallery
            </a>
            <a
              href="#featured"
              className="px-7 py-3.5 border border-gray-500 hover:border-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-star-line text-base" />
              </span>
              Featured Picks
            </a>
          </div>

          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {infographicStats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 lg:p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 rounded-xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 mx-auto mb-3">
                    <i className={`${stat.icon} text-xl text-orange-400`} />
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />
    </section>
  );
}
