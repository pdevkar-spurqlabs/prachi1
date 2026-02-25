
import { useState, useRef, useEffect } from 'react';

export default function SubscribeForm() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = formData.get('email') as string;
    if (!email || !email.includes('@')) return;

    setSubmitting(true);
    try {
      await fetch('https://readdy.ai/api/form/d6e9alqtehdqnvnpjakg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // silent fail
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    { icon: 'ri-calendar-check-line', text: 'Weekly curated insights' },
    { icon: 'ri-lock-line', text: 'No spam, unsubscribe anytime' },
    { icon: 'ri-gift-line', text: 'Exclusive resources & templates' },
    { icon: 'ri-team-line', text: 'Join 15,000+ QA professionals' },
  ];

  return (
    <section ref={sectionRef} id="subscribe" className="py-20 lg:py-28 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="relative w-16 h-16 flex items-center justify-center mx-auto mb-5">
                  <div className="absolute inset-0 bg-orange-100 rounded-2xl animate-pulse" />
                  <i className="ri-mail-send-line text-3xl text-orange-500 relative z-10" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Subscribe to Our Newsletter</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Get the latest QA insights, testing strategies, and industry trends delivered straight to your inbox every week.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-lg mx-auto">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${300 + i * 80}ms` }}
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-orange-50">
                      <i className={`${b.icon} text-sm text-orange-500`} />
                    </div>
                    <span className="text-sm text-gray-600">{b.text}</span>
                  </div>
                ))}
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                    <i className="ri-check-line text-3xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re Subscribed!</h3>
                  <p className="text-gray-500 text-sm">Welcome aboard! Check your inbox for a confirmation email.</p>
                </div>
              ) : (
                <form
                  id="newsletter-subscribe-form"
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="max-w-lg mx-auto"
                >
                  <div className="mb-4">
                    <label htmlFor="subscriber-name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      id="subscriber-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subscriber-email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      id="subscriber-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subscriber-role" className="block text-sm font-medium text-gray-700 mb-1.5">Your Role</label>
                    <select
                      id="subscriber-role"
                      name="role"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all bg-white cursor-pointer"
                    >
                      <option value="QA Engineer">QA Engineer</option>
                      <option value="Test Lead">Test Lead</option>
                      <option value="QA Manager">QA Manager</option>
                      <option value="Developer">Developer</option>
                      <option value="Engineering Manager">Engineering Manager</option>
                      <option value="CTO/VP Engineering">CTO / VP Engineering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interests (optional)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['AI & Automation', 'Performance Testing', 'Security Testing', 'DevOps & CI/CD', 'Mobile Testing', 'Best Practices'].map((interest) => (
                        <label key={interest} className="flex items-center gap-2 cursor-pointer group">
                          <input type="checkbox" name="interests" value={interest} className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer" />
                          <span className="text-sm text-gray-600 group-hover:text-orange-500 transition-colors">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <span className="w-5 h-5 flex items-center justify-center"><i className="ri-mail-add-line text-base" /></span>
                        Subscribe Now
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
