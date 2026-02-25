
import { useEffect, useState } from 'react';

export default function CareersHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text block */}
            <div
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-400"></span>
                Join Our Team
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Build Your Career in{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Software Quality
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Join a team of passionate QA professionals who are shaping the future of software testing.
                We offer challenging projects, continuous learning, and a culture that values innovation and
                excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#open-positions"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap"
                >
                  View Open Positions
                </a>
                <a
                  href="#submit-resume"
                  className="px-6 py-3 border border-gray-600 hover:border-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Submit Your Resume
                </a>
              </div>
            </div>

            {/* Image block */}
            <div
              className={`relative transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20diverse%20team%20of%20software%20engineers%20and%20QA%20professionals%20collaborating%20in%20a%20modern%20bright%20office%20space%20with%20large%20monitors%20showing%20test%20automation%20dashboards%20and%20code%20reviews%20warm%20natural%20lighting%20contemporary%20minimal%20interior%20design%20with%20plants%20and%20glass%20walls&width=600&height=450&seq=careers-hero-1&orientation=landscape"
                  alt="SpurQLabs Team Collaboration"
                  className="w-full h-[350px] lg:h-[400px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>

              {/* QA Experts badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg">
                    <i className="ri-team-fill text-2xl text-orange-500"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">75+</p>
                    <p className="text-sm text-gray-500">QA Experts Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Open Roles badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg">
                    <i className="ri-briefcase-4-fill text-xl text-green-600"></i>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">12+</p>
                    <p className="text-xs text-gray-500">Open Roles</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Image block */}
          </div>
        </div>
      </div>
    </section>
  );
}
