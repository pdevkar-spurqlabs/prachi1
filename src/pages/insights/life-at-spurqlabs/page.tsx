
import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';
import LifeHero from './components/LifeHero';
import CultureValues from './components/CultureValues';
import WorkEnvironment from './components/WorkEnvironment';
import EmployeeStories from './components/EmployeeStories';
import BeyondWork from './components/BeyondWork';
import PerksAndBenefits from './components/PerksAndBenefits';
import GrowthJourney from './components/GrowthJourney';
import PhotoGallery from './components/PhotoGallery';
import LifeCTA from './components/LifeCTA';

export default function LifeAtSpurQLabs() {
  // Ensure the page always starts at the top when this component mounts
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (err) {
      // In non‑browser environments (e.g., SSR) window may be undefined
      console.warn('Unable to scroll to top:', err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <LifeHero />
      <CultureValues />
      <WorkEnvironment />
      <EmployeeStories />
      <GrowthJourney />
      <BeyondWork />
      <PerksAndBenefits />
      <PhotoGallery />
      <LifeCTA />
      <Footer />
    </div>
  );
}
