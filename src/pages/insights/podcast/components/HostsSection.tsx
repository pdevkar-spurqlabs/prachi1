
import { useState, useEffect, useRef } from 'react';

const hosts = [
  {
    name: 'Ankit Sharma',
    role: 'Founder & CEO, SpurQLabs',
    bio: 'With 15+ years in software quality, Ankit brings deep industry knowledge and a passion for building quality-first engineering cultures. He leads conversations on QA strategy and business impact.',
    image: 'https://readdy.ai/api/search-image?query=A%20professional%20headshot%20of%20an%20Indian%20male%20tech%20executive%20in%20his%20late%20thirties%20wearing%20a%20dark%20blazer%20and%20casual%20shirt%20warm%20studio%20lighting%20neutral%20gray%20background%20confident%20smile%20high%20quality%20portrait%20photography&width=400&height=400&seq=host-ankit-1&orientation=squarish',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Meera Desai',
    role: 'VP of Engineering, SpurQLabs',
    bio: 'Meera is a hands-on engineering leader who has scaled QA teams across three continents. She dives deep into technical topics from automation frameworks to performance engineering.',
    image: 'https://readdy.ai/api/search-image?query=A%20professional%20headshot%20of%20an%20Indian%20female%20tech%20leader%20in%20her%20mid%20thirties%20wearing%20a%20smart%20casual%20blazer%20warm%20studio%20lighting%20neutral%20gray%20background%20friendly%20confident%20expression%20high%20quality%20portrait%20photography&width=400&height=400&seq=host-meera-1&orientation=squarish',
    social: { linkedin: '#', twitter: '#' },
  },
];

export default function HostsSection() {
  const [visible, setVisible] = useState(false);
  // Removed generic <HTMLElement> to avoid JSX parsing errors in plain JS files.
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Meet Your Hosts
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              The Voices Behind{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Quality Talks
              </span>
            </h2>
            <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              Industry veterans who bring real-world experience and genuine curiosity to every
              conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hosts.map((host, i) => (
              <div
                key={i}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8 hover:border-orange-500/30 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 rounded-2xl transition-all duration-500" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500/60 transition-colors duration-500">
                      <img
                        src={host.image}
                        alt={host.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                      <i className="ri-mic-fill text-sm" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{host.name}</h3>
                  <p className="text-sm text-orange-400 font-medium mb-4">{host.role}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{host.bio}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={host.social.linkedin}
                      rel="nofollow noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-linkedin-fill text-base" />
                    </a>
                    <a
                      href={host.social.twitter}
                      rel="nofollow noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-twitter-x-fill text-base" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
