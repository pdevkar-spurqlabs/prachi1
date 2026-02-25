
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';
import CaseStudiesHero from './components/CaseStudiesHero';
import FeaturedStudies from './components/FeaturedStudies';
import TestimonialShowcase from './components/TestimonialShowcase';
import ProcessTimeline from './components/ProcessTimeline';
import IndustryExpertise from './components/IndustryExpertise';
import ImpactMetrics from './components/ImpactMetrics';
import CaseStudiesCTA from './components/CaseStudiesCTA';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CaseStudiesHero />
      <FeaturedStudies />
      <TestimonialShowcase />
      <ImpactMetrics />
      <ProcessTimeline />
      <IndustryExpertise />
      <CaseStudiesCTA />
      <Footer />
    </div>
  );
}
