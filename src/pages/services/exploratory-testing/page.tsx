import { useState } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function ExploratoryTestingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Uncover Hidden Bugs',
      description: 'Find critical issues that scripted tests miss. Human intuition discovers edge cases automated tests never consider.'
    },
    {
      icon: 'ri-brain-line',
      title: 'Human Intelligence',
      description: 'Leverage tester creativity, domain knowledge, and critical thinking to explore your product like real users do.'
    },
    {
      icon: 'ri-time-line',
      title: 'Rapid Feedback',
      description: 'Get immediate insights without waiting for test script development. Perfect for agile sprints and tight deadlines.'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Real User Perspective',
      description: 'Testers think like users, not robots. Discover usability issues, confusing workflows, and UX problems.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Risk-Based Testing',
      description: 'Focus testing effort on high-risk areas. Prioritize critical features and business-critical user journeys.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Complements Automation',
      description: 'Works alongside automated tests. Automation checks what you know; exploration finds what you don\'t.'
    }
  ];

  const scenarios = [
    {
      scenario: 'New Feature Launch',
      description: 'Explore new functionality before users do. Find issues automation hasn\'t been programmed to catch yet.',
      icon: 'ri-rocket-2-line'
    },
    {
      scenario: 'Pre-Release Sanity',
      description: 'Quick smoke testing before deployment. Verify critical paths work and nothing is obviously broken.',
      icon: 'ri-checkbox-circle-line'
    },
    {
      scenario: 'Complex User Journeys',
      description: 'Test intricate workflows that are hard to automate. Multi-step processes, conditional logic, edge cases.',
      icon: 'ri-route-line'
    },
    {
      scenario: 'Third-Party Integrations',
      description: 'Validate external API integrations, payment gateways, SSO, and services you don\'t control.',
      icon: 'ri-plug-line'
    },
    {
      scenario: 'Mobile App Testing',
      description: 'Explore device-specific behaviors, gestures, orientations, and real-world usage patterns.',
      icon: 'ri-smartphone-line'
    },
    {
      scenario: 'Security Vulnerabilities',
      description: 'Probe for security weaknesses. Try unexpected inputs, bypass attempts, privilege escalation.',
      icon: 'ri-shield-keyhole-line'
    }
  ];

  const process = [
    {
      phase: 'Charter Definition',
      description: 'Define testing mission, scope, and objectives. What are we testing? What risks matter most? Time-boxed sessions.',
      icon: 'ri-compass-3-line'
    },
    {
      phase: 'Exploration',
      description: 'Testers freely explore the product, following intuition and curiosity. Document findings in real-time.',
      icon: 'ri-search-eye-line'
    },
    {
      phase: 'Debriefing',
      description: 'Review discoveries, discuss patterns, prioritize issues. What did we learn? What needs deeper investigation?',
      icon: 'ri-discuss-line'
    },
    {
      phase: 'Documentation',
      description: 'Create detailed bug reports with reproduction steps, screenshots, videos. Actionable insights for developers.',
      icon: 'ri-file-text-line'
    }
  ];

  const deliverables = [
    {
      item: 'Session Reports',
      description: 'Detailed notes from each exploration session: areas covered, time spent, issues found, observations'
    },
    {
      item: 'Defect Reports',
      description: 'Comprehensive bug reports with severity, reproduction steps, screenshots, videos, and environment details'
    },
    {
      item: 'Test Coverage Map',
      description: 'Visual representation of explored areas, untested features, and high-risk zones needing attention'
    },
    {
      item: 'Risk Assessment',
      description: 'Prioritized list of risks discovered, potential impact, and recommendations for mitigation'
    }
  ];

  const faqs = [
    {
      question: 'How is exploratory testing different from ad-hoc testing?',
      answer: 'Exploratory testing is structured and purposeful, not random. It follows a charter with clear objectives, uses testing heuristics, and documents findings systematically. Ad-hoc testing is unstructured "playing around." Exploratory testing is disciplined investigation; ad-hoc is random clicking. Both are unscripted, but exploratory testing has methodology, accountability, and reproducibility.'
    },
    {
      question: 'Can exploratory testing replace automated testing?',
      answer: 'No, they complement each other. Automation excels at repetitive regression checks, data validation, and known scenarios. Exploratory testing finds new issues, usability problems, and edge cases automation misses. Best practice: automate stable, repetitive tests; use exploratory testing for new features, complex scenarios, and creative investigation. Together they provide comprehensive coverage.'
    },
    {
      question: 'How do you measure the effectiveness of exploratory testing?',
      answer: 'We track: 1) Number and severity of bugs found, 2) Code coverage achieved during sessions, 3) Time to find critical issues, 4) Defect detection rate compared to scripted tests, 5) Customer-reported bugs after release (lower is better). We also measure session productivity: bugs per hour, areas explored, and risk coverage. Quality matters more than quantity.'
    },
    {
      question: 'What skills do your exploratory testers have?',
      answer: 'Our testers have: 1) Deep domain knowledge in your industry, 2) Strong technical skills (APIs, databases, DevTools), 3) Security testing expertise, 4) UX and usability awareness, 5) Critical thinking and problem-solving abilities, 6) Excellent documentation skills. Many hold ISTQB, CAST, or RST certifications. Average 8+ years of testing experience across web, mobile, and enterprise applications.'
    },
    {
      question: 'How long does an exploratory testing engagement take?',
      answer: 'Flexible based on your needs. Typical engagements: 1) Sprint-based: 2-4 hours per sprint for new features, 2) Pre-release: 1-2 days intensive testing before deployment, 3) Ongoing: 10-20 hours/week for continuous exploration. We use time-boxed sessions (60-120 minutes) with clear charters. Can scale up for major releases or down for maintenance. Minimum engagement: 8 hours to provide meaningful coverage.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-50 to-white"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
            Manual Testing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Exploratory Testing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Unscripted, intelligent testing that finds bugs automation misses. Human creativity meets systematic exploration to uncover critical issues before your users do.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Start Exploratory Testing
            </a>
            <a
              href="#scenarios"
              className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 whitespace-nowrap"
            >
              See Use Cases
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Exploratory Testing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover issues that scripted tests and automation never find
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-orange-50 to-orange-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-orange-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Scenarios */}
      <section id="scenarios" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect Scenarios for Exploratory Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When human intelligence and creativity deliver the most value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl mb-4">
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Exploratory Testing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured methodology for unscripted exploration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200"></div>
              
              <div className="space-y-12">
                {process.map((step, index) => (
                  <div key={index} className="relative flex gap-8">
                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-8 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 -mt-2">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl flex-shrink-0">
                          <i className={`${step.icon} text-xl`}></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{step.phase}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Receive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation and actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-600 text-white rounded-lg flex-shrink-0">
                    <i className="ri-checkbox-circle-line text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.item}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about exploratory testing
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-2xl overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors duration-300"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                  <i className={`ri-arrow-${expandedFaq === index ? 'up' : 'down'}-s-line text-2xl text-orange-600 flex-shrink-0`}></i>
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover Hidden Issues?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our expert testers explore your product and find bugs before your users do.
          </p>
          <a
            href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap"
          >
            Schedule Exploratory Testing
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
