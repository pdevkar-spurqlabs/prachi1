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
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Failed to send email.');

      setSubmitted(true);
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
    } catch (err: any) {
      setError(err.message || 'Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="submit-resume" className="py-16 lg:py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-700 mb-2">Resume Submitted!</h2>
            <p className="text-gray-600 mb-4">
              Thank you! We will review your resume and get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 bg-orange-500 text-white rounded"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-600">{error}</p>}

            <input
              type="text"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Specialization *"
              value={formData.specialization}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Experience *"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="url"
              placeholder="LinkedIn Profile"
              value={formData.linkedIn}
              onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="url"
              placeholder="Portfolio / GitHub"
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              maxLength={500}
              className="w-full px-4 py-2 border rounded"
            />

            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit Resume'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}