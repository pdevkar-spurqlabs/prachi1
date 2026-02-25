
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../home/components/Navigation';
import Footer from '../home/components/Footer';
import CareersHero from './components/CareersHero';
import WhyJoinUs from './components/WhyJoinUs';
import OpenPositions from './components/OpenPositions';
import HiringProcess from './components/HiringProcess';
import LifeAtSpurQLabs from './components/LifeAtSpurQLabs';
import ResumeSubmission from './components/ResumeSubmission';
import ApplicationModal from './components/ApplicationModal';

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({ title: '', id: '' });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handler for applying to a job
  const handleApply = (job: { title: string; id: string }) => {
    setSelectedJob({ title: job.title, id: job.id });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CareersHero />

      {/* Quick Stats Bar */}
      <section className="py-10 lg:py-14 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">75+</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Team Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">12+</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Open Positions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">3</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Global Offices</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">95%</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Employee Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyJoinUs />
      <OpenPositions onApply={handleApply} />
      <HiringProcess />
      <LifeAtSpurQLabs />
      <ResumeSubmission />

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Shape the Future of Software Quality?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join a team that&apos;s passionate about quality, innovation, and making a real impact. Your
              next career milestone starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap"
              >
                Browse Open Positions
              </a>
              <Link
                to="/about"
                className="px-8 py-4 border border-gray-600 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={selectedJob.title}
        jobId={selectedJob.id}
      />
    </div>
  );
}
