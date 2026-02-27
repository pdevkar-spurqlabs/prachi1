
import { useState, useEffect, useRef, FormEvent } from 'react';

export default function ResumeSubmission() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialization: '',
    experience: '',
    linkedIn: '',
    portfolio: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Gracefully handle environments where IntersectionObserver is not available
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setError('');

  // Validation
  if (
    !formData.fullName ||
    !formData.email ||
    !formData.specialization ||
    !formData.experience
  ) {
    setError('Please fill in all required fields.');
    return;
  }

  if (formData.message.length > 500) {
    setError('Message must be 500 characters or less.');
    return;
  }

  setSubmitting(true);

  try {
    const res = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // ✅ sends ALL fields
    });

    if (res.ok) {
      setSubmitted(true);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        specialization: '',
        experience: '',
        linkedIn: '',
        portfolio: '',
        message: '',
      });
    } else {
      const data = await res.json();
      setError(data?.error || 'Something went wrong.');
    }
  } catch (err: any) {
    setError('Network error. Please try again.');
  } finally {
    setSubmitting(false);
  }
};

  return (
    <section
      id="submit-resume"
      className="py-16 lg:py-24 bg-gray-50"
      ref={sectionRef}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
                Future Opportunities
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Don&apos;t See the Right Role?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We&apos;re always looking for talented QA professionals. Share your resume and
                portfolio with us, and we&apos;ll reach out when a position matching your skills
                opens up.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0">
                    <i className="ri-database-2-line text-xl text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Talent Pool</h4>
                    <p className="text-sm text-gray-600">
                      Your profile stays in our talent database for 12 months. We proactively match
                      candidates to new openings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0">
                    <i className="ri-notification-3-line text-xl text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Priority Notifications</h4>
                    <p className="text-sm text-gray-600">
                      Get notified first when a role matching your expertise becomes available.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0">
                    <i className="ri-user-star-line text-xl text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Referral Bonus</h4>
                    <p className="text-sm text-gray-600">
                      Know someone great? Refer them and earn a bonus when they join our team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20professional%20woman%20working%20on%20a%20laptop%20in%20a%20cozy%20modern%20home%20office%20setup%20with%20warm%20lighting%20plants%20on%20desk%20and%20motivational%20posters%20on%20wall%20clean%20minimal%20aesthetic%20soft%20natural%20tones&width=500&height=320&seq=careers-resume-1&orientation=landscape"
                  alt="Remote work at SpurQLabs"
                  className="w-full h-[260px] object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                    <i className="ri-check-line text-3xl text-green-600"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Resume Submitted!
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in SpurQLabs. We&apos;ll keep your profile on file and
                    reach out when a matching opportunity arises.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form
                  id="resume-submission-form"
                  data-readdy-form=""
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Submit Your Resume
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Share your details and we&apos;ll match you with future openings.
                  </p>

                  {error && (
                    <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-error-warning-line"></i>
                      </span>
                      {error}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all"
                          placeholder="Jane Smith"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all"
                          placeholder="jane@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Experience <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData({ ...formData, experience: e.target.value })
                          }
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all cursor-pointer"
                          required
                        >
                          <option value="">Select experience</option>
                          <option value="Fresher">Fresher</option>
                          <option value="1-3 years">1-3 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="5-8 years">5-8 years</option>
                          <option value="8+ years">8+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Area of Specialization <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={(e) =>
                          setFormData({ ...formData, specialization: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all cursor-pointer"
                        required
                      >
                        <option value="">Select specialization</option>
                        <option value="Test Automation">Test Automation</option>
                        <option value="Performance Testing">Performance Testing</option>
                        <option value="Security Testing">Security Testing</option>
                        <option value="Manual / Exploratory Testing">
                          Manual / Exploratory Testing
                        </option>
                        <option value="Mobile Testing">Mobile Testing</option>
                        <option value="API Testing">API Testing</option>
                        <option value="QA Leadership / Management">
                          QA Leadership / Management
                        </option>
                        <option value="DevOps / CI-CD">DevOps / CI-CD</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          name="linkedIn"
                          value={formData.linkedIn}
                          onChange={(e) =>
                            setFormData({ ...formData, linkedIn: e.target.value })
                          }
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Portfolio / GitHub
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={(e) =>
                            setFormData({ ...formData, portfolio: e.target.value })
                          }
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all"
                          placeholder="https://github.com/..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Tell us about yourself
                        <span className="text-gray-400 font-normal ml-1">
                          ({formData.message.length}/500)
                        </span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => {
                          if (e.target.value.length <= 500) {
                            setFormData({ ...formData, message: e.target.value });
                          }
                        }}
                        maxLength={500}
                        rows={4}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all resize-none"
                        placeholder="Share your QA journey, key skills, tools you love, and what kind of role you are looking for..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <i className="ri-loader-4-line animate-spin"></i> Submitting...
                        </span>
                      ) : (
                        'Submit Resume & Portfolio'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
