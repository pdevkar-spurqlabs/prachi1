
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogsCTA() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      await fetch('https://readdy.ai/api/form/d6e9nniff40lgbk6dqkg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      setSubmitted(true);
      setEmail('');
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500/10 mx-auto mb-5">
                <i className="ri-mail-send-line text-2xl text-orange-400" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Never Miss an <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Insight</span>
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto text-sm">
                Subscribe to get our latest articles, testing guides, and industry analysis delivered straight to your inbox every week.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {['Weekly curated content', 'Expert analysis', 'Free resources'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500/20">
                      <i className="ri-check-line text-orange-400 text-xs" />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 max-w-md mx-auto">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/20 mx-auto mb-3">
                    <i className="ri-check-double-line text-xl text-emerald-400" />
                  </div>
                  <p className="text-emerald-400 font-semibold text-sm mb-1">You&apos;re subscribed!</p>
                  <p className="text-gray-400 text-xs">Check your inbox for a welcome email.</p>
                </div>
              ) : (
                <form
                  id="blog-newsletter-form"
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-full text-white text-sm placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap disabled:opacity-60"
                  >
                    {submitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Book a Free Call
                  <i className="ri-arrow-right-line" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
