import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../home/components/Footer';

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, years: 0, experts: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersVisible(true);
      },
      { threshold: 0.3 }
    );
    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!countersVisible) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts({
        projects: Math.round(500 * eased),
        satisfaction: Math.round(98 * eased),
        years: Math.round(12 * eased),
        experts: Math.round(75 * eased)
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [countersVisible]);

  const values = [
    { icon: 'ri-shield-check-line', title: 'Quality First', description: 'We never compromise on quality. Every test, every review, every release meets our exacting standards.' },
    { icon: 'ri-team-line', title: 'True Partnership', description: 'We embed with your team, share your goals, and celebrate your wins as our own.' },
    { icon: 'ri-lightbulb-line', title: 'Continuous Innovation', description: 'We stay ahead of testing trends, tools, and methodologies to deliver cutting-edge solutions.' },
    { icon: 'ri-eye-line', title: 'Radical Transparency', description: 'No hidden costs, no surprises. Clear communication and honest reporting at every step.' }
  ];

  const differentiators = [
    {
      id: 'venn',
      title: 'The Quality Triangle',
      subtitle: 'We help you achieve the impossible',
      description: 'Traditional thinking says you can only pick two: Speed, Cost, or Quality. At SpurQLabs, our optimized processes and expert teams help you find the sweet spot where all three converge—delivering fast, affordable, high-quality results.'
    },
    {
      id: 'pyramid',
      title: 'Practical Test Pyramid',
      subtitle: 'Right-sized testing strategy',
      description: 'Many teams struggle with an inverted pyramid—too many slow, expensive UI tests and not enough fast unit tests. We help you build a practical, balanced testing strategy that\'s both faster and more cost-effective.'
    },
    {
      id: 'shiftleft',
      title: 'Shift Left Approach',
      subtitle: 'Find bugs earlier, fix them cheaper',
      description: 'The typical quality model catches defects late in the cycle when they\'re expensive to fix. Our Shift Left approach moves quality efforts earlier—during requirements and design—dramatically reducing defect counts and costs.'
    }
  ];

  const timeline = [
    { year: '2012', title: 'Founded with a Vision', description: 'SpurQLabs was born from a simple idea: product teams deserve better QA partners who truly understand their challenges.' },
    { year: '2015', title: 'First 50 Clients', description: 'Reached our first major milestone, serving 50 product companies across fintech, healthcare, and e-commerce.' },
    { year: '2018', title: 'AI-Powered Testing Launch', description: 'Pioneered AI-driven test automation, reducing test cycles by 60% for our clients.' },
    { year: '2021', title: 'Global Expansion', description: 'Expanded operations to serve clients across North America, Europe, and Asia-Pacific regions.' },
    { year: '2024', title: '500+ Projects Delivered', description: 'Celebrated delivering over 500 successful projects with a 98% client satisfaction rate.' }
  ];

  const team = [
    { name: 'Sarah Chen', role: 'CEO & Co-Founder', image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Asian%20woman%20CEO%20in%20her%2040s%20wearing%20a%20navy%20blazer%20with%20confident%20smile%20against%20a%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=400&height=500&seq=team1&orientation=portrait', bio: '15+ years in QA leadership. Former VP of Quality at TechCorp.' },
    { name: 'Michael Torres', role: 'CTO & Co-Founder', image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Hispanic%20man%20CTO%20in%20his%2030s%20wearing%20a%20dark%20gray%20shirt%20with%20friendly%20expression%20against%20a%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=400&height=500&seq=team2&orientation=portrait', bio: 'Test automation pioneer. Built QA frameworks for Fortune 500 companies.' },
    { name: 'Emily Watson', role: 'VP of Client Success', image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Caucasian%20woman%20executive%20in%20her%2030s%20wearing%20a%20teal%20blouse%20with%20warm%20smile%20against%20a%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=400&height=500&seq=team3&orientation=portrait', bio: 'Ensures every client achieves their quality goals. 10+ years in customer success.' },
    { name: 'David Kim', role: 'Head of Engineering', image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Korean%20man%20engineer%20in%20his%2030s%20wearing%20a%20charcoal%20sweater%20with%20thoughtful%20expression%20against%20a%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=400&height=500&seq=team4&orientation=portrait', bio: 'Leads our 50+ QA engineers. Expert in performance and security testing.' }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: 'ri-shield-check-line' },
    { name: 'SOC 2 Type II', icon: 'ri-lock-line' },
    { name: 'ISTQB Certified', icon: 'ri-award-line' },
    { name: 'AWS Partner', icon: 'ri-cloud-line' },
    { name: 'GDPR Compliant', icon: 'ri-global-line' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img src="https://static.readdy.ai/image/cdee2fbcd80bfdec9cf50d230218aedf/6ff8a31bd7fff894feba2270c48bbbe9.webp" alt="SpurQLabs" className="h-8 lg:h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/about" className="text-sm font-medium transition-colors cursor-pointer text-orange-500">About</Link>
              <Link to="/#services" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Services</Link>
              <Link to="/#how-we-work" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">How We Work</Link>
              <Link to="/#why-choose-us" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Why Choose Us</Link>
              <Link to="/stories" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Stories</Link>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md shadow-orange-500/20 whitespace-nowrap cursor-pointer">Book a Call</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer text-gray-700 hover:bg-gray-100" aria-label="Toggle menu">
                <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-1 bg-white border-t border-gray-100">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-orange-500 bg-orange-50">About</Link>
            <Link to="/#services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Services</Link>
            <Link to="/#how-we-work" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">How We Work</Link>
            <Link to="/#why-choose-us" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Why Choose Us</Link>
            <Link to="/stories" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Stories</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-orange-400"></span>About SpurQLabs
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Your Dedicated Partner in <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Software Quality</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Since 2012, we've been on a mission to transform how product teams approach quality assurance. We're not just a vendor—we're an extension of your team, deeply invested in your success.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap">
                    Start a Conversation
                  </a>
                  <a href="#our-story" className="px-6 py-3 border border-gray-600 hover:border-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
                    Our Story
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://readdy.ai/api/search-image?query=Modern%20software%20development%20team%20collaborating%20in%20a%20bright%20contemporary%20office%20space%20with%20multiple%20monitors%20showing%20code%20and%20testing%20dashboards%20professional%20diverse%20team%20working%20together%20warm%20lighting%20clean%20minimal%20aesthetic&width=600&height=450&seq=hero1&orientation=landscape" alt="SpurQLabs Team" className="w-full h-[350px] lg:h-[400px] object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg">
                      <i className="ri-award-fill text-2xl text-orange-500"></i>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">12+</p>
                      <p className="text-sm text-gray-500">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-2xl mb-6">
                  <i className="ri-focus-3-line text-3xl text-orange-500"></i>
                </div>
                <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Mission</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Teams to Ship with Confidence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We exist to eliminate the anxiety of software releases. By providing exceptional QA teams that integrate seamlessly with your workflow, we help product companies deliver flawless experiences to their users—faster and more reliably than ever before.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-2xl mb-6">
                  <i className="ri-rocket-2-line text-3xl text-amber-500"></i>
                </div>
                <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Vision</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A World Where Quality is Never Compromised</h3>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where every software product meets the highest standards of quality. Where QA is not an afterthought but a strategic advantage. Where teams can innovate fearlessly, knowing their quality partner has their back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">What Drives Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every decision we make and every interaction we have.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center bg-orange-50 group-hover:bg-orange-100 rounded-xl mb-5 transition-colors duration-300">
                    <i className={`${value.icon} text-2xl text-orange-500`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different - Interactive Diagrams */}
      <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Methodology</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Why We're Different</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">We apply proven methodologies and strategic approaches that deliver measurable results for your team.</p>
            </div>

            {/* Two Column Layout - First Row */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              
              {/* Diagram 1: Speed-Cost-Quality Venn */}
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 lg:p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="relative h-72 mb-6 flex items-center justify-center">
                  <img 
                    src="https://static.readdy.ai/image/cdee2fbcd80bfdec9cf50d230218aedf/f509f2656c48f7ef444925bc781d26c5.png" 
                    alt="Quality Triangle - Speed, Cost, Quality Venn Diagram" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">The Quality Triangle</h3>
                <p className="text-orange-400 text-sm font-medium mb-3">We help you achieve the impossible</p>
                <p className="text-gray-400 text-sm leading-relaxed">Traditional thinking says you can only pick two: Speed, Cost, or Quality. Our optimized processes help you find the sweet spot where all three converge.</p>
              </div>

              {/* Diagram 2: Test Pyramid Comparison */}
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 lg:p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="relative h-72 mb-6 flex items-center justify-center">
                  <img 
                    src="https://static.readdy.ai/image/cdee2fbcd80bfdec9cf50d230218aedf/94484e7f462724b7de4d2b656d3a5d71.png" 
                    alt="Test Pyramid Comparison - Inverted vs Practical" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Practical Test Pyramid</h3>
                <p className="text-orange-400 text-sm font-medium mb-3">Right-sized testing strategy</p>
                <p className="text-gray-400 text-sm leading-relaxed">We help you build a balanced testing strategy—more fast unit tests, fewer slow UI tests—making your testing both faster and more cost-effective.</p>
              </div>
            </div>

            {/* Full Width - Shift Left Diagram */}
            <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 lg:p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Shift Left Approach</h3>
                  <p className="text-orange-400 text-sm font-medium mb-4">Find bugs earlier, fix them cheaper</p>
                  <p className="text-gray-400 leading-relaxed mb-6">The typical quality model catches defects late in the cycle when they're expensive to fix. Our Shift Left approach moves quality efforts earlier—during requirements and design—dramatically reducing defect counts and costs.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-500/20 rounded-lg flex-shrink-0">
                        <i className="ri-bug-line text-orange-400 text-lg"></i>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">70% Fewer Bugs</p>
                        <p className="text-gray-500 text-xs">Caught in production</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-500/20 rounded-lg flex-shrink-0">
                        <i className="ri-money-dollar-circle-line text-orange-400 text-lg"></i>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">10x Cost Savings</p>
                        <p className="text-gray-500 text-xs">On defect remediation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-500/20 rounded-lg flex-shrink-0">
                        <i className="ri-timer-line text-orange-400 text-lg"></i>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Faster Releases</p>
                        <p className="text-gray-500 text-xs">Less rework needed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-500/20 rounded-lg flex-shrink-0">
                        <i className="ri-shield-check-line text-orange-400 text-lg"></i>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Higher Quality</p>
                        <p className="text-gray-500 text-xs">From day one</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="https://static.readdy.ai/image/cdee2fbcd80bfdec9cf50d230218aedf/dd35af0d71e53036f82abc3084761add.png" 
                      alt="Shift Left Model vs Typical Quality Model" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Summary */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 border border-orange-500/30 rounded-full">
                <i className="ri-lightbulb-flash-line text-orange-400 text-xl"></i>
                <span className="text-gray-300 text-sm">These methodologies have helped us achieve <span className="text-orange-400 font-semibold">98% client satisfaction</span> across 500+ projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 lg:py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{counts.projects}+</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{counts.satisfaction}%</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{counts.years}+</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{counts.experts}+</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">QA Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="our-story" className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Journey</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Building Trust, One Milestone at a Time</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">From a small team with big dreams to a trusted QA partner for hundreds of companies.</p>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-400"></div>
              <div className="space-y-8 lg:space-y-0">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-md"></div>
                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Leadership</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet the Team Behind Your Success</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Experienced leaders passionate about quality and committed to your success.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {team.map((member, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-orange-500 text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                    <a href="#" className="inline-flex items-center gap-1 mt-3 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                      <i className="ri-linkedin-fill text-lg"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Trust & Compliance</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Certifications & Standards</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                    <i className={`${cert.icon} text-xl text-orange-500`}></i>
                  </div>
                  <span className="font-semibold text-gray-700">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience the SpurQLabs Difference?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how our dedicated QA teams can help you ship faster with confidence.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap">
                Book a Free Consultation
              </a>
              <Link to="/#services" className="px-8 py-4 border border-gray-600 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
