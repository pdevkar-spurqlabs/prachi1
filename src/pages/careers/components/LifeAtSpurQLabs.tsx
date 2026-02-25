
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Senior SDET, 3 years at SpurQLabs',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20woman%20software%20engineer%20in%20her%20late%2020s%20wearing%20a%20casual%20top%20with%20warm%20smile%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=100&height=100&seq=emp-avatar-1&orientation=squarish',
    quote:
      "I joined as a Junior QA and grew into a Senior SDET in just 3 years. The mentorship and learning opportunities here are unmatched. I've worked on fintech and healthcare projects that truly challenged me.",
  },
  {
    name: 'Tom Bradley',
    role: 'Performance Engineer, 2 years at SpurQLabs',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Caucasian%20man%20engineer%20in%20his%20early%2030s%20wearing%20a%20casual%20shirt%20with%20friendly%20expression%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=100&height=100&seq=emp-avatar-2&orientation=squarish',
    quote:
      'The remote-first culture is genuine. I work from the UK and feel just as connected as the team in India. The projects are exciting—I recently helped an e-commerce platform handle 10x Black Friday traffic.',
  },
  {
    name: 'Ananya Desai',
    role: 'QA Lead, 4 years at SpurQLabs',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20woman%20team%20lead%20in%20her%2030s%20wearing%20a%20blazer%20with%20confident%20expression%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=100&height=100&seq=emp-avatar-3&orientation=squarish',
    quote:
      "What I love most is the ownership. You're not just executing test cases—you're shaping quality strategy for real products. The leadership trusts you and gives you room to innovate.",
  },
];

const galleryImages = [
  {
    src: 'https://readdy.ai/api/search-image?query=Team%20of%20software%20professionals%20having%20a%20fun%20brainstorming%20session%20in%20a%20modern%20office%20with%20whiteboards%20and%20sticky%20notes%20warm%20lighting%20collaborative%20atmosphere%20casual%20dress%20code&width=400&height=300&seq=life-1&orientation=landscape',
    alt: 'Team brainstorming',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Group%20of%20diverse%20tech%20professionals%20celebrating%20a%20project%20milestone%20with%20cake%20and%20decorations%20in%20a%20modern%20office%20space%20warm%20happy%20atmosphere%20team%20celebration&width=400&height=300&seq=life-2&orientation=landscape',
    alt: 'Team celebration',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Tech%20conference%20workshop%20with%20professionals%20attending%20a%20presentation%20about%20software%20testing%20and%20quality%20assurance%20modern%20venue%20with%20large%20screen%20and%20engaged%20audience&width=400&height=300&seq=life-3&orientation=landscape',
    alt: 'Conference workshop',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Team%20building%20outdoor%20activity%20with%20tech%20professionals%20playing%20games%20in%20a%20park%20sunny%20day%20casual%20clothes%20fun%20and%20laughter%20team%20bonding%20event&width=400&height=300&seq=life-4&orientation=landscape',
    alt: 'Team building',
  },
];

export default function LifeAtSpurQLabs() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guard against environments where IntersectionObserver is not available (e.g., older browsers or SSR)
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: immediately show the content
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 lg:py-24" ref={sectionRef}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Life at SpurQLabs
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hear From Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who chose to build their careers with us.
            </p>
          </div>

          {/* Employee Testimonials */}
          <div
            className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Gallery */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
