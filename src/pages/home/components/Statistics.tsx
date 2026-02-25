
import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 30, suffix: '+', label: 'Satisfied Clients' },
  { value: 35, suffix: '+', label: 'Projects Delivered' },
  { value: 12, suffix: 'K+', label: 'Bugs Found' },
  { value: 20, suffix: 'K+', label: 'Tests Automated' },
  { value: 170, suffix: 'K+', label: 'Testing Hours' },
  { value: 90, suffix: '+', label: 'Frameworks' },
];

function AnimatedCounter({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startDelay = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="flex items-baseline justify-center lg:justify-start">
      <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight">
        {count}
      </span>
      <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-orange-500 ml-1">
        {suffix}
      </span>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-orange-500"></div>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-[0.2em]">Our Track Record</span>
            <div className="w-12 h-[2px] bg-orange-500"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-5">
            Numbers That Speak for <span className="text-orange-500">Excellence</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Years of dedicated QA expertise delivering measurable results for businesses worldwide
          </p>
        </div>

        {/* Stats Display - 3 columns x 2 rows */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative text-center lg:text-left px-4 lg:px-8 ${
                index % 3 !== 2 ? 'lg:border-r lg:border-gray-200' : ''
              } ${
                index < 3 ? 'lg:pb-16 lg:border-b lg:border-gray-200' : 'lg:pt-16'
              }`}
            >
              {/* Accent line */}
              <div className="w-8 h-1 bg-orange-500 mb-4 mx-auto lg:mx-0 rounded-full group-hover:w-16 transition-all duration-500"></div>
              
              {/* Value */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={index * 100} />
              
              {/* Label */}
              <div className="mt-3 text-sm uppercase tracking-[0.15em] text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
            <i className="ri-global-line text-orange-500 text-lg"></i>
            <span className="text-gray-600 text-sm font-medium">
              Trusted by startups and enterprises across <span className="text-orange-500 font-semibold">15+ countries</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
