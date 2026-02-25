
import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';
import EventsHero from './components/EventsHero';
import UpcomingEvents from './components/UpcomingEvents';
import PastEvents from './components/PastEvents';
import EventGallery from './components/EventGallery';
import EventTestimonials from './components/EventTestimonials';
import EventStats from './components/EventStats';
import EventTopics from './components/EventTopics';
import EventsCTA from './components/EventsCTA';

export default function EventsWebinarsPage() {
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
      <EventsHero />
      <UpcomingEvents />
      <PastEvents />
      <EventGallery />
      <EventTestimonials />
      <EventStats />
      <EventTopics />
      <EventsCTA />
      <Footer />
    </div>
  );
}
