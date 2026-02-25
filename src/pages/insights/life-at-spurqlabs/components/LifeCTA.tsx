
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LifeCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <i className="ri-sparkling-2-fill text-orange-400"></i>
            <span className="text-orange-300 text-sm font-medium">
              We&apos;re hiring across all teams
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Write Your Story With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join a team where your work matters, your growth is prioritized, and every
            day brings a new opportunity to make an impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/careers"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap"
            >
              View Open Positions
            </Link>
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-600 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Talk to Our Team
            </a>
          </div>

          {/* Team avatars */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {[
                'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Indian%20woman%20software%20engineer%20smiling%20against%20light%20gray%20background%20corporate%20portrait&width=60&height=60&seq=cta-av-1&orientation=squarish',
                'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Caucasian%20man%20developer%20smiling%20against%20light%20gray%20background%20corporate%20portrait&width=60&height=60&seq=cta-av-2&orientation=squarish',
                'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Hispanic%20woman%20QA%20engineer%20smiling%20against%20light%20gray%20background%20corporate%20portrait&width=60&height=60&seq=cta-av-3&orientation=squarish',
                'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Korean%20man%20engineer%20smiling%20against%20light%20gray%20background%20corporate%20portrait&width=60&height=60&seq=cta-av-4&orientation=squarish',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-orange-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">70+</span>
              </div>
            </div>
            <span className="text-sm text-gray-400">Join our growing team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
