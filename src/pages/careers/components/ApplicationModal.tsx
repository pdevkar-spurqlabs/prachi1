import { useState, useEffect, FormEvent } from 'react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
}

export default function ApplicationModal({ isOpen, onClose, jobTitle, jobId }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentRole: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setError('');
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName || !formData.email || !formData.phone || !formData.experience) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.coverLetter.length > 500) {
      setError('Cover letter must be 500 characters or less.');
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
          message: formData.coverLetter,
        }),
      });

      if (!res.ok) throw new Error('Failed to send email.');

      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        currentRole: '',
        linkedIn: '',
        portfolio: '',
        coverLetter: '',
      });
    } catch (err: any) {
      setError(err.message || 'Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-700 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-4">Thank you! Our team will review and respond soon.</p>
            <button onClick={onClose} className="px-4 py-2 bg-orange-500 text-white rounded">
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
              placeholder="Phone *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
              type="text"
              placeholder="Current Role / Title"
              value={formData.currentRole}
              onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
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
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              maxLength={500}
              className="w-full px-4 py-2 border rounded"
            />

            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
