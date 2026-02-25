
import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';
import InfographicsHero from './components/InfographicsHero';
import FeaturedInfographics from './components/FeaturedInfographics';
import InfographicsGallery from './components/InfographicsGallery';
import InfographicsTopics from './components/InfographicsTopics';
import InfographicsProcess from './components/InfographicsProcess';
import InfographicsImpact from './components/InfographicsImpact';
import InfographicsCTA from './components/InfographicsCTA';

export default function InfographicsPage() {
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Failed to scroll to top:', error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <InfographicsHero />
      <FeaturedInfographics />
      <InfographicsGallery />
      <InfographicsTopics />
      <InfographicsProcess />
      <InfographicsImpact />
      <InfographicsCTA />
      <Footer />
    </div>
  );
}
