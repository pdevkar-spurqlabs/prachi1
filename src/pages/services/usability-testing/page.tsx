import { useState, useEffect, useRef } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function UsabilityTestingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProcessVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: 'ri-user-smile-line',
      title: 'Improve User Satisfaction',
      description: 'Identify and fix frustrating UX issues that drive users away, increasing retention and customer happiness.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Boost Conversion Rates',
      description: 'Optimize user flows and remove friction points that prevent users from completing desired actions.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Reduce Support Costs',
      description: 'Fix confusing interfaces before launch, dramatically reducing customer support tickets and training needs.'
    },
    {
      icon: 'ri-time-line',
      title: 'Faster Task Completion',
      description: 'Streamline workflows so users accomplish their goals quickly and efficiently without confusion.'
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Build Brand Loyalty',
      description: 'Deliver exceptional user experiences that turn first-time users into loyal brand advocates.'
    },
    {
      icon: 'ri-data-line',
      title: 'Data-Driven Decisions',
      description: 'Make design choices based on real user behavior and feedback, not assumptions or opinions.'
    }
  ];

  const testingMethods = [
    {
      title: 'Moderated Testing',
      description: 'One-on-one sessions where facilitators observe users completing tasks while thinking aloud',
      icon: 'ri-user-voice-line',
      bestFor: 'Deep insights, complex products, early prototypes'
    },
    {
      title: 'Unmoderated Testing',
      description: 'Remote testing where users complete tasks independently while being recorded',
      icon: 'ri-computer-line',
      bestFor: 'Quick feedback, large sample sizes, cost efficiency'
    },
    {
      title: 'A/B Testing',
      description: 'Compare two design variations to determine which performs better with real users',
      icon: 'ri-split-cells-horizontal',
      bestFor: 'Design decisions, optimization, conversion improvement'
    },
    {
      title: 'First Click Testing',
      description: 'Measure where users click first to complete a task, revealing navigation intuitiveness',
      icon: 'ri-cursor-line',
      bestFor: 'Navigation design, information architecture'
    },
    {
      title: 'Five Second Test',
      description: 'Show design for 5 seconds and ask what users remember to test first impressions',
      icon: 'ri-timer-flash-line',
      bestFor: 'Landing pages, visual hierarchy, branding'
    },
    {
      title: 'Card Sorting',
      description: 'Users organize content into categories to inform information architecture',
      icon: 'ri-stack-line',
      bestFor: 'Menu structure, content organization, sitemap'
    }
  ];

  const metrics = [
    {
      metric: 'Task Success Rate',
      description: 'Percentage of users who complete tasks successfully',
      target: '&gt; 90%'
    },
    {
      metric: 'Time on Task',
      description: 'How long it takes users to complete specific actions',
      target: 'Minimize'
    },
    {
      metric: 'Error Rate',
      description: 'Number of mistakes users make during task completion',
      target: '&lt; 5%'
    },
    {
      metric: 'System Usability Scale (SUS)',
      description: 'Standardized questionnaire measuring perceived usability',
      target: '&gt; 68'
    },
    {
      metric: 'Net Promoter Score (NPS)',
      description: 'Likelihood users would recommend your product',
      target: '&gt; 50'
    },
    {
      metric: 'User Satisfaction',
      description: 'Overall satisfaction rating from post-test surveys',
      target: '4.5/5'
    }
  ];

  const process = [
    {
      phase: 'Planning & Recruitment',
      description: 'Define objectives, create test scenarios, recruit representative users matching your target audience',
      icon: 'ri-file-list-3-line'
    },
    {
      phase: 'Test Design',
      description: 'Develop realistic tasks, prepare test materials, create screening questionnaires and consent forms',
      icon: 'ri-draft-line'
    },
    {
      phase: 'Testing Sessions',
      description: 'Conduct moderated or unmoderated sessions, observe user behavior, collect qualitative feedback',
      icon: 'ri-user-search-line'
    },
    {
      phase: 'Analysis & Reporting',
      description: 'Analyze data, identify patterns, prioritize issues, create actionable recommendations with evidence',
      icon: 'ri-bar-chart-box-line'
    }
  ];

  const faqs = [
    {
      question: 'How many users do I need for usability testing?',
      answer: 'For qualitative usability testing, 5-8 users per user segment typically uncover 80-85% of usability issues (Nielsen Norman Group research). For quantitative studies or A/B testing, you need larger samples (30-50+ users) for statistical significance. We recommend multiple rounds with small groups rather than one large study.'
    },
    {
      question: 'When should I conduct usability testing?',
      answer: 'Test early and often! Conduct testing on wireframes and prototypes before development (saves costly rework), during development (iterative improvements), and post-launch (continuous optimization). The earlier you test, the cheaper it is to fix issues. We recommend testing at every major milestone.'
    },
    {
      question: 'What\'s the difference between usability testing and user acceptance testing (UAT)?',
      answer: 'Usability testing focuses on how easy and intuitive your product is to use, measuring user experience and satisfaction. UAT verifies that the product meets business requirements and functions correctly. Usability testing asks "Can users accomplish their goals easily?" while UAT asks "Does it work as specified?"'
    },
    {
      question: 'How do you recruit test participants?',
      answer: 'We use multiple recruitment methods: your existing customer base, specialized recruitment agencies, user research panels, social media, and our network of testers. We screen participants to match your target demographics, technical proficiency, and domain knowledge. All participants sign NDAs and consent forms.'
    },
    {
      question: 'What deliverables do I receive?',
      answer: 'You receive: executive summary with key findings, detailed usability report with severity ratings, video highlights of critical issues, quantitative metrics dashboard, prioritized recommendations with effort estimates, and presentation of findings to stakeholders. All findings include evidence (quotes, videos, data).'
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
            Usability Testing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Watch real users interact with your product. Discover what works, what frustrates, and what drives conversions. Make design decisions based on evidence, not opinions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Start Usability Testing
            </a>
            <a
              href="#methods"
              className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 whitespace-nowrap"
            >
              Explore Methods
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Usability Testing Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every dollar invested in UX returns $100. Fix usability issues before they cost you customers.
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

      {/* Testing Methods */}
      <section id="methods" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Usability Testing Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right testing approach for your goals, timeline, and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl mb-4">
                  <i className={`${method.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                <div className="pt-3 border-t border-orange-100">
                  <p className="text-xs font-semibold text-orange-600">BEST FOR:</p>
                  <p className="text-xs text-gray-600 mt-1">{method.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics We Measure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Metrics We Measure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantify usability with industry-standard metrics and benchmarks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{item.metric}</h3>
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full whitespace-nowrap">
                    {item.target}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Testing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous methodology ensuring reliable, actionable insights
            </p>
          </div>

          <div ref={processRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className={`bg-white rounded-2xl p-6 h-full border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 ${
                    processVisible ? 'process-item animate' : 'process-item'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div 
                    className={`w-12 h-12 flex items-center justify-center bg-orange-600 text-white rounded-xl mb-4 ${
                      processVisible ? 'process-node animate' : 'process-node'
                    }`}
                    style={{ animationDelay: `${index * 150 + 100}ms` }}
                  >
                    <i className={`${step.icon} text-xl`}></i>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-bold text-orange-600">STEP {index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.phase}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Impact, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how usability testing transforms products and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">85%</div>
              <p className="text-lg opacity-90">Reduction in support tickets after fixing top usability issues</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">2.5x</div>
              <p className="text-lg opacity-90">Increase in conversion rates from optimized user flows</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-lg opacity-90">Faster task completion after UX improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about usability testing
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-orange-50 transition-colors duration-300"
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
            Stop Guessing. Start Testing.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover what your users really think and transform your product experience.
          </p>
          <a
            href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap"
          >
            Schedule Your Usability Study
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
