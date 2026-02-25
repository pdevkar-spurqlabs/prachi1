import { useState } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function AccessibilityTestingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedWcag, setExpandedWcag] = useState<string | null>(null);

  const benefits = [
    {
      icon: 'ri-global-line',
      title: 'Reach 1.3 Billion Users',
      description: 'Make your product accessible to people with disabilities, expanding your market by 16% of the global population.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Legal Compliance',
      description: 'Meet ADA, Section 508, AODA, and international accessibility laws to avoid costly lawsuits and penalties.'
    },
    {
      icon: 'ri-seo-line',
      title: 'Improve SEO Rankings',
      description: 'Accessible websites rank higher in search results. Semantic HTML and alt text boost your visibility.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Better UX for Everyone',
      description: 'Accessibility improvements benefit all users: clearer navigation, better contrast, keyboard shortcuts.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Competitive Advantage',
      description: 'Stand out as an inclusive brand. 71% of users with disabilities leave inaccessible websites immediately.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Increase Revenue',
      description: 'Accessible e-commerce sites see 20% higher revenue. Don\'t lose customers due to barriers.'
    }
  ];

  const wcagPrinciples = [
    {
      id: 'perceivable',
      title: '1. Perceivable',
      icon: 'ri-eye-line',
      description: 'Information must be presentable to users in ways they can perceive',
      guidelines: [
        'Text alternatives for non-text content (images, videos, audio)',
        'Captions and transcripts for multimedia',
        'Content adaptable to different presentations without losing information',
        'Sufficient color contrast (4.5:1 for normal text, 3:1 for large text)',
        'Text resizable up to 200% without loss of functionality'
      ]
    },
    {
      id: 'operable',
      title: '2. Operable',
      icon: 'ri-keyboard-line',
      description: 'User interface components must be operable by all users',
      guidelines: [
        'All functionality available via keyboard (no mouse-only actions)',
        'Users have enough time to read and use content',
        'No content that causes seizures (flashing &lt; 3 times per second)',
        'Clear navigation and ways to find content',
        'Multiple ways to navigate (menu, search, sitemap)',
        'Focus indicators visible for keyboard navigation'
      ]
    },
    {
      id: 'understandable',
      title: '3. Understandable',
      icon: 'ri-book-open-line',
      description: 'Information and operation must be understandable',
      guidelines: [
        'Text readable and understandable (clear language, defined jargon)',
        'Pages appear and operate in predictable ways',
        'Consistent navigation across pages',
        'Input assistance: error identification, labels, and suggestions',
        'Form validation with clear error messages'
      ]
    },
    {
      id: 'robust',
      title: '4. Robust',
      icon: 'ri-code-s-slash-line',
      description: 'Content must be robust enough for assistive technologies',
      guidelines: [
        'Valid HTML with proper semantic structure',
        'ARIA labels and roles for custom components',
        'Compatible with current and future assistive technologies',
        'Proper heading hierarchy (H1, H2, H3)',
        'Meaningful link text (not "click here")'
      ]
    }
  ];

  const testingAreas = [
    {
      area: 'Screen Reader Testing',
      description: 'JAWS, NVDA, VoiceOver compatibility',
      icon: 'ri-volume-up-line'
    },
    {
      area: 'Keyboard Navigation',
      description: 'Tab order, focus management, shortcuts',
      icon: 'ri-keyboard-box-line'
    },
    {
      area: 'Color Contrast',
      description: 'WCAG AA/AAA compliance verification',
      icon: 'ri-contrast-2-line'
    },
    {
      area: 'Form Accessibility',
      description: 'Labels, error handling, validation',
      icon: 'ri-file-list-3-line'
    },
    {
      area: 'Multimedia',
      description: 'Captions, transcripts, audio descriptions',
      icon: 'ri-video-line'
    },
    {
      area: 'Mobile Accessibility',
      description: 'Touch targets, gestures, zoom',
      icon: 'ri-smartphone-line'
    },
    {
      area: 'Cognitive Accessibility',
      description: 'Clear language, consistent layout',
      icon: 'ri-brain-line'
    },
    {
      area: 'Assistive Tech',
      description: 'Magnifiers, voice control, switches',
      icon: 'ri-tools-line'
    }
  ];

  const complianceLevels = [
    {
      level: 'WCAG 2.1 Level A',
      description: 'Minimum accessibility level. Addresses most critical barriers.',
      criteria: '30 success criteria',
      recommended: 'Legal minimum for most jurisdictions'
    },
    {
      level: 'WCAG 2.1 Level AA',
      description: 'Recommended standard. Addresses major barriers for most users.',
      criteria: '50 success criteria (includes A)',
      recommended: 'Industry best practice, ADA compliance'
    },
    {
      level: 'WCAG 2.1 Level AAA',
      description: 'Highest level. Not required for entire sites, but ideal for critical content.',
      criteria: '78 success criteria (includes A & AA)',
      recommended: 'Government sites, healthcare, education'
    }
  ];

  const faqs = [
    {
      question: 'What is WCAG and why does it matter?',
      answer: 'WCAG (Web Content Accessibility Guidelines) is the international standard for web accessibility developed by W3C. It matters because: 1) It\'s legally required in many countries (ADA in US, AODA in Canada, EAA in EU), 2) It ensures your product is usable by people with disabilities, 3) It\'s referenced in lawsuits and compliance audits, 4) Following WCAG improves UX for everyone, not just users with disabilities.'
    },
    {
      question: 'Can automated tools catch all accessibility issues?',
      answer: 'No. Automated tools like axe, WAVE, and Lighthouse catch only 30-40% of accessibility issues. They excel at technical violations (missing alt text, color contrast, HTML validity) but miss context-dependent issues like meaningful alt text, logical tab order, and screen reader experience. Manual testing by experts and users with disabilities is essential for comprehensive accessibility.'
    },
    {
      question: 'How much does it cost to make a website accessible?',
      answer: 'Cost varies based on site complexity and current accessibility level. Building accessibility from the start adds 5-10% to development costs. Retrofitting an inaccessible site costs 2-3x more. However, the cost of NOT being accessible is higher: lawsuits average $50,000-$100,000, plus lost revenue from 1.3 billion potential customers. Accessibility is an investment, not an expense.'
    },
    {
      question: 'Do I need to test with real users who have disabilities?',
      answer: 'Yes, for comprehensive accessibility validation. While expert audits and automated tools catch technical issues, testing with real users reveals practical usability problems. We recommend testing with users who have various disabilities: blind/low vision (screen readers), motor disabilities (keyboard-only), deaf/hard of hearing, and cognitive disabilities. This ensures your product is truly usable, not just technically compliant.'
    },
    {
      question: 'What are the legal risks of not being accessible?',
      answer: 'Significant and growing. In the US, ADA Title III lawsuits increased 300% from 2017-2023. Settlements range from $50,000-$500,000 plus legal fees and mandatory remediation. Major companies (Domino\'s, Target, Netflix) lost high-profile cases. EU\'s European Accessibility Act (2025) mandates accessibility for digital products. Canada\'s AODA requires compliance. Proactive accessibility testing is far cheaper than reactive legal defense.'
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
            Accessibility Testing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Ensure your product is usable by everyone. Meet WCAG 2.1 standards, avoid legal risks, and reach 1.3 billion users with disabilities worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Get Accessibility Audit
            </a>
            <a
              href="#wcag"
              className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 whitespace-nowrap"
            >
              Learn WCAG Standards
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Accessibility Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accessibility isn't just compliance—it's good business, better UX, and the right thing to do
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

      {/* WCAG Principles */}
      <section id="wcag" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WCAG 2.1 Four Principles (POUR)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of web accessibility: Perceivable, Operable, Understandable, Robust
            </p>
          </div>

          <div className="space-y-4">
            {wcagPrinciples.map((principle) => (
              <div
                key={principle.id}
                className="bg-white rounded-2xl overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedWcag(expandedWcag === principle.id ? null : principle.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-orange-50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-600 text-white rounded-xl">
                      <i className={`${principle.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{principle.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{principle.description}</p>
                    </div>
                  </div>
                  <i className={`ri-arrow-${expandedWcag === principle.id ? 'up' : 'down'}-s-line text-2xl text-orange-600 flex-shrink-0`}></i>
                </button>
                {expandedWcag === principle.id && (
                  <div className="px-8 pb-6 bg-orange-50">
                    <h4 className="font-bold text-gray-900 mb-3">Key Guidelines:</h4>
                    <ul className="space-y-2">
                      {principle.guidelines.map((guideline, index) => (
                        <li key={index} className="flex items-start">
                          <i className="ri-check-line text-orange-600 mt-1 mr-3 flex-shrink-0"></i>
                          <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: guideline }}></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Test</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive accessibility evaluation across all user interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-600 text-white rounded-xl mb-4">
                  <i className={`${area.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{area.area}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Levels */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WCAG Compliance Levels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right level for your organization and industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceLevels.map((level, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-block px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-bold mb-4">
                  {level.level}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{level.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                    <span className="font-semibold text-gray-900">{level.criteria}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-orange-100">
                  <p className="text-xs font-semibold text-orange-600 mb-1">RECOMMENDED FOR:</p>
                  <p className="text-sm text-gray-600">{level.recommended}</p>
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
              Everything you need to know about accessibility testing
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
            Make Your Product Accessible to Everyone
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Avoid legal risks, reach more users, and build an inclusive digital experience.
          </p>
          <a
            href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap"
          >
            Schedule Accessibility Audit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
