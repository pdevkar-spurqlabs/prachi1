
import { useEffect, useRef, useState } from 'react';

const activities = [
  {
    title: 'Team Retreats',
    description:
      'Annual offsite retreats where we unwind, bond, and recharge. From beach getaways to mountain adventures — we believe in celebrating together.',
    image:
      'https://readdy.ai/api/search-image?query=A%20group%20of%20tech%20professionals%20enjoying%20a%20team%20retreat%20outdoors%20at%20a%20scenic%20mountain%20resort%20with%20bonfire%20and%20string%20lights%20evening%20atmosphere%20warm%20tones%20casual%20clothing%20team%20bonding%20laughter%20and%20fun%20professional%20team%20building%20event%20photography&width=500&height=350&seq=beyond-1&orientation=landscape',
    icon: 'ri-compass-3-line',
  },
  {
    title: 'Hackathons & Innovation Days',
    description:
      'Quarterly hackathons where teams build creative solutions in 48 hours. Past winners have become actual product features used by our clients.',
    image:
      'https://readdy.ai/api/search-image?query=A%20group%20of%20software%20developers%20participating%20in%20a%20hackathon%20event%20in%20a%20modern%20office%20space%20with%20laptops%20whiteboards%20sticky%20notes%20energy%20drinks%20late%20night%20coding%20session%20focused%20and%20excited%20atmosphere%20warm%20ambient%20lighting%20professional%20event%20photography&width=500&height=350&seq=beyond-2&orientation=landscape',
    icon: 'ri-code-box-line',
  },
  {
    title: 'Community Giving',
    description:
      'We give back through tech education programs, mentoring students, and volunteering. Our team has taught coding to over 500 underprivileged students.',
    image:
      'https://readdy.ai/api/search-image?query=Tech%20professionals%20volunteering%20and%20teaching%20coding%20to%20young%20students%20in%20a%20community%20center%20with%20laptops%20and%20colorful%20classroom%20setting%20warm%20natural%20lighting%20diverse%20group%20mentoring%20and%20education%20charity%20event%20photography&width=500&height=350&seq=beyond-3&orientation=landscape',
    icon: 'ri-heart-3-line',
  },
  {
    title: 'Sports & Wellness',
    description:
      'Cricket tournaments, yoga sessions, marathon teams, and fitness challenges. We believe a healthy body fuels a sharp mind.',
    image:
      'https://readdy.ai/api/search-image?query=A%20group%20of%20office%20professionals%20playing%20cricket%20in%20a%20green%20park%20during%20a%20corporate%20sports%20day%20event%20sunny%20weather%20casual%20sportswear%20team%20spirit%20and%20fun%20outdoor%20activity%20corporate%20wellness%20event%20photography&width=500&height=350&seq=beyond-4&orientation=landscape',
    icon: 'ri-run-line',
  },
  {
    title: 'Festival Celebrations',
    description:
      'Diwali, Christmas, Eid, Thanksgiving — we celebrate every festival with decorations, food, and cultural programs that bring our diverse team together.',
    image:
      'https://readdy.ai/api/search-image?query=A%20diverse%20group%20of%20office%20professionals%20celebrating%20a%20festival%20together%20in%20a%20decorated%20modern%20office%20with%20colorful%20decorations%20traditional%20food%20cultural%20celebration%20warm%20lighting%20happy%20atmosphere%20corporate%20celebration%20photography&width=500&height=350&seq=beyond-5&orientation=landscape',
    icon: 'ri-cake-3-line',
  },
  {
    title: 'Learning Circles',
    description:
      'Weekly knowledge-sharing sessions where team members present on topics they are passionate about — from AI trends to book reviews to travel stories.',
    image:
      'https://readdy.ai/api/search-image?query=A%20small%20group%20of%20professionals%20in%20a%20casual%20meeting%20room%20having%20a%20knowledge%20sharing%20session%20with%20a%20presenter%20at%20a%20whiteboard%20engaged%20audience%20comfortable%20seating%20warm%20lighting%20modern%20office%20interior%20professional%20learning%20event%20photography&width=500&height=350&seq=beyond-6&orientation=landscape',
    icon: 'ri-book-open-line',
  },
];

export default function BeyondWork() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Beyond the Desk
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Life Beyond Professional Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work hard and play harder. Here&apos;s a glimpse into the moments that
              make SpurQLabs more than just a workplace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, i) => (
              <div
                key={i}
                className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-default ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: visible ? `${150 + i * 100}ms` : '0ms' }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-lg">
                    <i className={`${act.icon} text-xl text-orange-500`}></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {act.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
