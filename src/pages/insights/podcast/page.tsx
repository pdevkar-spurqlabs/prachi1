
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';
import PodcastHero from './components/PodcastHero';
import FeaturedEpisode from './components/FeaturedEpisode';
import EpisodeGrid from './components/EpisodeGrid';
import TopicsShowcase from './components/TopicsShowcase';
import HostsSection from './components/HostsSection';
import GuestHighlights from './components/GuestHighlights';
import PodcastCTA from './components/PodcastCTA';
import { useEffect } from 'react';

export default function PodcastPage() {
  // Ensure the page always starts at the top when mounted
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
      <PodcastHero />
      <FeaturedEpisode />
      <EpisodeGrid />
      <TopicsShowcase />
      <GuestHighlights />
      <HostsSection />
      <PodcastCTA />
      <Footer />
    </div>
  );
}
