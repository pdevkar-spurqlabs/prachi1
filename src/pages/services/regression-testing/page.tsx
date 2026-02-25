import { useState } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function RegressionTestingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Prevent Breaking Changes',
      description: 'Catch unintended side effects before they reach production. Ensure new features don\'t break existing functionality.'
    },
    {
      icon: 'ri-time-line',
      title: 'Faster Release Cycles',
      description: 'Deploy with confidence knowing critical paths are verified. Reduce time spent firefighting production bugs.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Reduce Costs',
      description: 'Finding bugs in production costs 10-100x more than catching them in testing. Save money and reputation.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Maintain User Trust',
      description: 'Consistent quality builds user confidence. Avoid frustrating regressions that drive customers away.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Support Continuous Delivery',
      description: 'Enable agile development with safety nets. Deploy multiple times per day without fear.'
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Compliance & Audit Trail',
      description: 'Maintain testing documentation for regulatory compliance. Prove due diligence in quality assurance.'
    }
  ];

  const approaches = [
    {
      title: 'Retest All',
      description: 'Execute entire test suite for comprehensive coverage',
      icon: 'ri-checkbox-multiple-line',
      pros: ['Maximum confidence', 'Catches all regressions', 'Simple strategy'],
      cons: ['Time-consuming', 'Expensive', 'Not practical for large suites'],
      bestFor: 'Major releases, critical systems, regulatory requirements'
    },
    {
      title: 'Selective Testing',
      description: 'Test only areas impacted by code changes',
      icon: 'ri-focus-3-line',
      pros: ['Faster execution', 'Cost-effective', 'Focused effort'],
      cons: ['Requires impact analysis', 'May miss indirect effects', 'Needs expertise'],
      bestFor: 'Frequent releases, well-understood codebases, agile sprints'
    },
    {
      title: 'Risk-Based Testing',
      description: 'Prioritize tests based on business impact and change risk',
      icon: 'ri-bar-chart-grouped-line',
      pros: ['Optimized coverage', 'Business-aligned', 'Efficient resource use'],
      cons: ['Requires risk assessment', 'May miss low-priority bugs', 'Needs stakeholder input'],
      bestFor: 'Limited time/budget, complex systems, business-critical features'
    }
  ];

  const testTypes = [
    {
      type: 'Smoke Testing',
      description: 'Quick sanity check of critical functionality after build',
      duration: '15-30 min',
      coverage: '10-20%'
    },
    {
      type: 'Sanity Testing',
      description: 'Verify specific functionality after bug fixes or changes',
      duration: '30-60 min',
      coverage: '20-30%'
    },
    {
      type: 'Regression Suite',
      description: 'Comprehensive testing of all major features and workflows',
      duration: '4-8 hours',
      coverage: '70-80%'
    },
    {
      type: 'Full Regression',
      description: 'Complete test coverage including edge cases and integrations',
      duration: '1-3 days',
      coverage: '90-100%'
    }
  ];

  const bestPractices = [
    {
      practice: 'Maintain Test Suite Health',
      description: 'Regularly review and update tests. Remove obsolete tests, fix flaky tests, add tests for new features.',
      icon: 'ri-heart-pulse-line'
    },
    {
      practice: 'Prioritize Test Cases',
      description: 'Rank tests by business impact, usage frequency, and defect history. Run high-priority tests first.',
      icon: 'ri-sort-desc'
    },
    {
      practice: 'Automate Strategically',
      description: 'Automate stable, repetitive tests. Keep exploratory and edge case testing manual for flexibility.',
      icon: 'ri-robot-line'
    },
    {
      practice: 'Track Metrics',
      description: 'Monitor test execution time, pass/fail rates, defect detection rate, and test coverage trends.',
      icon: 'ri-line-chart-line'
    },
    {
      practice: 'Version Control Tests',
      description: 'Keep test cases in sync with application versions. Tag tests with version compatibility.',
      icon: 'ri-git-branch-line'
    },
    {
      practice: 'Continuous Improvement',
      description: 'Analyze escaped defects. Add regression tests for every production bug found.',
      icon: 'ri-refresh-line'
    }
  ];

  const process = [
    {
      phase: 'Impact Analysis',
      description: 'Identify code changes and determine affected areas. Map dependencies and integration points.',
      icon: 'ri-search-line'
    },
    {
      phase: 'Test Selection',
      description: 'Choose relevant test cases based on impact analysis and risk assessment. Prioritize critical paths.',
      icon: 'ri-checkbox-multiple-line'
    },
    {
      phase: 'Test Execution',
      description: 'Run selected tests manually or automated. Document results, log defects, capture evidence.',
      icon: 'ri-play-circle-line'
    },
    {
      phase: 'Defect Triage',
      description: 'Analyze failures: new bugs vs. test issues. Prioritize defects by severity and business impact.',
      icon: 'ri-bug-line'
    },
    {
      phase: 'Retest & Verification',
      description: 'Verify bug fixes don\'t introduce new issues. Confirm all regressions are resolved.',
      icon: 'ri-check-double-line'
    },
    {
      phase: 'Reporting',
      description: 'Provide test summary, pass/fail metrics, risk assessment, and go/no-go recommendation.',
      icon: 'ri-file-chart-line'
    }
  ];

  const faqs = [
    {
      question: 'How often should we run regression testing?',
      answer: 'Frequency depends on your release cadence and risk tolerance. Recommended: 1) Smoke tests after every build (daily), 2) Selective regression after each sprint (weekly/bi-weekly), 3) Full regression before major releases (monthly/quarterly), 4) Risk-based regression for hotfixes. For continuous deployment, automate core regression suite to run on every commit.'
    },
    {
      question: 'Should regression testing be automated or manual?',
      answer: 'Both. Automate stable, repetitive tests (80% of regression suite) for speed and consistency. Keep manual testing for: exploratory testing, usability checks, visual validation, complex scenarios, and new features. Automation handles volume; humans handle judgment. The best strategy combines automated regression with manual exploratory testing.'
    },
    {
      question: 'How do we decide which tests to include in regression suite?',
      answer: 'Prioritize based on: 1) Business criticality (revenue-generating features, user authentication, payments), 2) Usage frequency (features used by most users), 3) Defect history (areas with frequent bugs), 4) Change frequency (code that changes often), 5) Complexity (intricate logic, integrations). Start with critical user journeys, then expand. Aim for 70-80% coverage of key functionality.'
    },
    {
      question: 'What\'s the difference between regression testing and retesting?',
      answer: 'Retesting verifies that a specific bug is fixed—you test the exact scenario that failed. Regression testing ensures that bug fix didn\'t break anything else—you test related and unrelated functionality. Example: If login bug is fixed, retesting checks login works. Regression testing checks login, signup, password reset, profile, and other features to ensure nothing broke.'
    },
    {
      question: 'How do we handle regression testing for legacy systems?',
      answer: 'Legacy systems present unique challenges: outdated tech, poor documentation, no existing tests. Strategy: 1) Start with risk-based testing of critical business functions, 2) Document current behavior as baseline, 3) Create regression tests incrementally as you touch code, 4) Focus on integration points and user-facing features, 5) Consider characterization testing to understand system behavior. Don\'t try to test everything at once—build coverage over time.'
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
            Regression Testing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Ensure new changes don't break existing functionality. Deploy with confidence knowing your critical features still work perfectly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Start Regression Testing
            </a>
            <a
              href="#approaches"
              className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 whitespace-nowrap"
            >
              Explore Approaches
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Regression Testing Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every code change carries risk. Regression testing is your safety net for continuous delivery.
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

      {/* Testing Approaches */}
      <section id="approaches" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regression Testing Approaches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right strategy based on your timeline, budget, and risk tolerance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-orange-600 text-white rounded-xl mb-6">
                  <i className={`${approach.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600 mb-6">{approach.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-bold text-green-600 mb-2">PROS:</p>
                    <ul className="space-y-1">
                      {approach.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <i className="ri-check-line text-green-600 mt-0.5 mr-2"></i>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-orange-600 mb-2">CONS:</p>
                    <ul className="space-y-1">
                      {approach.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <i className="ri-close-line text-orange-600 mt-0.5 mr-2"></i>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-orange-100">
                  <p className="text-xs font-semibold text-orange-600 mb-1">BEST FOR:</p>
                  <p className="text-sm text-gray-600">{approach.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Regression Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different levels of testing for different stages of your release cycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testTypes.map((test, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{test.type}</h3>
                <p className="text-sm text-gray-600 mb-4">{test.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-orange-600">{test.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-semibold text-orange-600">{test.coverage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regression Testing Best Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven strategies for effective and efficient regression testing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestPractices.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl mb-4">
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.practice}</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Regression Testing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach ensuring comprehensive coverage and efficient execution
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
              Everything you need to know about regression testing
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
            Deploy with Confidence
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ensure every release maintains quality with comprehensive regression testing.
          </p>
          <a
            href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap"
          >
            Start Regression Testing
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
