import Hero from './components/Hero';
import Statistics from './components/Statistics';
import WhoWeHelp from './components/WhoWeHelp';
import HowYouGetValue from './components/HowYouGetValue';
import Services from './components/Services';
import AIApproach from './components/AIApproach';
import WhyChooseUs from './components/WhyChooseUs';
import EngagementModels from './components/EngagementModels';
import CustomerResults from './components/CustomerResults';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Statistics />
      <WhoWeHelp />
      <HowYouGetValue />
      <Services />
      <AIApproach />
      <WhyChooseUs />
      <EngagementModels />
      <CustomerResults />
      <FinalCTA />
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
