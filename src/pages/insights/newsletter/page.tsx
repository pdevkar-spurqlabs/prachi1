
import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';
import NewsletterHero from './components/NewsletterHero';
import FeaturedArticles from './components/FeaturedArticles';
import WhySubscribe from './components/WhySubscribe';
import PastEditions from './components/PastEditions';
import TopicsCovered from './components/TopicsCovered';
import SubscriberTestimonials from './components/SubscriberTestimonials';
import SubscribeForm from './components/SubscribeForm';
import NewsletterCTA from './components/NewsletterCTA';

export default function NewsletterPage() {
  useEffect(() => {
    try { window.scrollTo(0, 0); } catch (e) { console.error(e); }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <NewsletterHero />
      <FeaturedArticles />
      <WhySubscribe />
      <SubscribeForm />
      <PastEditions />
      <TopicsCovered />
      <SubscriberTestimonials />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}
