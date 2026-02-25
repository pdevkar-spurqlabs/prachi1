import { useState } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function LocalizationTestingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: 'ri-global-line',
      title: 'Global Market Expansion',
      description: 'Reach 75% of internet users who don\'t speak English. Localized products see 6x higher conversion rates.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Increase Revenue',
      description: 'Companies with localized content generate 2.5x more revenue per user in international markets.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Build Trust & Loyalty',
      description: '76% of consumers prefer buying products with information in their native language.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cultural Appropriateness',
      description: 'Avoid embarrassing mistakes, offensive content, and cultural faux pas that damage your brand.'
    },
    {
      icon: 'ri-star-line',
      title: 'Competitive Advantage',
      description: 'Only 25% of companies properly localize. Stand out in international markets with quality localization.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Reduce Support Costs',
      description: 'Proper localization reduces customer confusion and support tickets by 40% in international markets.'
    }
  ];

  const testingAreas = [
    {
      area: 'Linguistic Accuracy',
      description: 'Translation quality, grammar, terminology, tone of voice',
      icon: 'ri-translate-2'
    },
    {
      area: 'Cultural Adaptation',
      description: 'Images, colors, symbols, idioms, cultural references',
      icon: 'ri-earth-line'
    },
    {
      area: 'UI/Layout Issues',
      description: 'Text expansion, truncation, alignment, RTL languages',
      icon: 'ri-layout-line'
    },
    {
      area: 'Date & Time Formats',
      description: 'Date formats, time zones, calendars, week start day',
      icon: 'ri-calendar-line'
    },
    {
      area: 'Currency & Numbers',
      description: 'Currency symbols, decimal separators, number formats',
      icon: 'ri-money-dollar-circle-line'
    },
    {
      area: 'Legal & Compliance',
      description: 'GDPR, local regulations, terms of service, privacy policies',
      icon: 'ri-scales-3-line'
    },
    {
      area: 'Functional Testing',
      description: 'Forms, payments, search, sorting in target language',
      icon: 'ri-settings-3-line'
    },
    {
      area: 'Multimedia Content',
      description: 'Subtitles, voiceovers, images, videos, audio',
      icon: 'ri-video-line'
    }
  ];

  const languages = [
    { name: 'Spanish', speakers: '559M', markets: 'Spain, Latin America' },
    { name: 'Mandarin Chinese', speakers: '1.1B', markets: 'China, Taiwan, Singapore' },
    { name: 'Arabic', speakers: '422M', markets: 'Middle East, North Africa' },
    { name: 'French', speakers: '280M', markets: 'France, Canada, Africa' },
    { name: 'German', speakers: '134M', markets: 'Germany, Austria, Switzerland' },
    { name: 'Japanese', speakers: '125M', markets: 'Japan' },
    { name: 'Portuguese', speakers: '264M', markets: 'Brazil, Portugal, Africa' },
    { name: 'Russian', speakers: '258M', markets: 'Russia, Eastern Europe' },
    { name: 'Hindi', speakers: '602M', markets: 'India' },
    { name: 'Korean', speakers: '81M', markets: 'South Korea' }
  ];

  const challenges = [
    {
      challenge: 'Text Expansion',
      description: 'German text is 30% longer than English. Spanish 20-25% longer. Buttons and labels must accommodate.',
      solution: 'Flexible UI design, dynamic layouts, thorough testing with actual translations'
    },
    {
      challenge: 'RTL Languages',
      description: 'Arabic and Hebrew read right-to-left. Entire UI must mirror, not just text direction.',
      solution: 'RTL-aware CSS, mirrored layouts, bidirectional text handling'
    },
    {
      challenge: 'Character Sets',
      description: 'Asian languages require Unicode support. Missing fonts cause display issues.',
      solution: 'UTF-8 encoding, web fonts, character set validation'
    },
    {
      challenge: 'Cultural Symbols',
      description: 'Colors, gestures, animals have different meanings. Red means luck in China, danger in West.',
      solution: 'Cultural research, native speaker review, localized imagery'
    },
    {
      challenge: 'Legal Requirements',
      description: 'GDPR in EU, LGPD in Brazil, different privacy laws require localized compliance.',
      solution: 'Legal review per market, localized terms, cookie consent'
    },
    {
      challenge: 'Payment Methods',
      description: 'Credit cards dominate US. China uses Alipay/WeChat Pay. Germany prefers bank transfer.',
      solution: 'Local payment gateway integration, currency conversion'
    }
  ];

  const process = [
    {
      phase: 'Internationalization (i18n) Review',
      description: 'Verify code is ready for localization: externalized strings, Unicode support, locale-aware formatting',
      icon: 'ri-code-s-slash-line'
    },
    {
      phase: 'Translation Quality Check',
      description: 'Native speakers review translations for accuracy, context, tone, and cultural appropriateness',
      icon: 'ri-translate-2'
    },
    {
      phase: 'Functional Testing',
      description: 'Test all features in target language: forms, search, sorting, payments, user flows',
      icon: 'ri-settings-3-line'
    },
    {
      phase: 'Visual & Layout Testing',
      description: 'Check for text overflow, truncation, alignment issues, broken layouts across all screen sizes',
      icon: 'ri-layout-line'
    },
    {
      phase: 'Cultural Validation',
      description: 'Review images, colors, symbols, examples for cultural appropriateness and local relevance',
      icon: 'ri-earth-line'
    },
    {
      phase: 'Compliance Verification',
      description: 'Ensure legal compliance: privacy policies, terms of service, regulatory requirements per market',
      icon: 'ri-shield-check-line'
    }
  ];

  const faqs = [
    {
      question: 'What\'s the difference between localization and translation?',
      answer: 'Translation converts text from one language to another. Localization adapts the entire product for a specific market: language, culture, formats, legal requirements, payment methods, and user expectations. Localization includes translation but goes far beyond it. Example: translating "football" to Spanish is translation. Changing it to "fútbol" in Spain but "soccer" in US Spanish is localization.'
    },
    {
      question: 'How long does localization testing take?',
      answer: 'Timeline depends on product complexity and number of languages. For a typical web application: 1-2 weeks per language for initial testing, 3-5 days for regression testing after updates. Mobile apps take 2-3 weeks per platform per language. E-commerce sites with payment integration take 3-4 weeks per market. We recommend phased rollout: start with 2-3 priority markets, then expand.'
    },
    {
      question: 'Do you provide translation services or just testing?',
      answer: 'We focus on localization testing and quality assurance. We work with your translation team or can recommend professional translation agencies. Our role is to verify translation quality, catch errors, test functionality, and ensure cultural appropriateness. We have native speakers for 40+ languages who review translations from a user perspective, not just linguistic accuracy.'
    },
    {
      question: 'Which languages should I prioritize for localization?',
      answer: 'Prioritize based on: 1) Your target markets and business goals, 2) Market size and revenue potential, 3) Competition level. Top recommendations: Spanish (559M speakers, Latin America growth), Mandarin Chinese (1.1B, massive market), German (wealthy EU market), French (global reach), Japanese (high spending power). For SaaS: add Portuguese (Brazil boom). For e-commerce: add Arabic (Middle East growth).'
    },
    {
      question: 'How do you handle continuous localization for agile development?',
      answer: 'We integrate into your CI/CD pipeline with continuous localization testing: 1) Automated pseudo-localization tests catch i18n issues early, 2) String extraction and translation memory integration, 3) Automated layout testing for text expansion, 4) Regression testing for each release per language, 5) Native speaker spot checks for new features. We provide localization testing as a service that scales with your release cadence.'
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
            Localization Testing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Expand globally with confidence. Ensure your product works flawlessly in every language, culture, and market. Avoid costly mistakes and cultural missteps.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Start Localization Testing
            </a>
            <a
              href="#languages"
              className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 whitespace-nowrap"
            >
              See Supported Languages
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Localization Testing Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poor localization costs you customers, revenue, and brand reputation in international markets
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

      {/* Testing Areas */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Test</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive localization validation across all aspects of your product
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl mb-4">
                  <i className={`${area.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{area.area}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section id="languages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Languages We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Native speakers for 40+ languages covering 95% of global internet users
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{lang.name}</h3>
                <div className="space-y-1">
                  <p className="text-sm text-orange-600 font-semibold">{lang.speakers} speakers</p>
                  <p className="text-xs text-gray-600">{lang.markets}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Need a language not listed? We have access to native speakers for 40+ languages.
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:underline ml-1">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Localization Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Issues we catch before they reach your international customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.challenge}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="pt-4 border-t border-orange-100">
                  <p className="text-xs font-semibold text-orange-600 mb-1">SOLUTION:</p>
                  <p className="text-xs text-gray-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Localization Testing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach ensuring quality across all localized versions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-600 text-white rounded-full font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl">
                    <i className={`${step.icon} text-lg`}></i>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.phase}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about localization testing
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
            Ready to Go Global?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ensure your product delivers exceptional experiences in every market and language.
          </p>
          <a
            href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap"
          >
            Start Localization Testing
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
