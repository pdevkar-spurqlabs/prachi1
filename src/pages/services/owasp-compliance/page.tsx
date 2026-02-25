import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function OWASPCompliancePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: 'ri-shield-star-line',
      title: 'Industry Standard Compliance',
      description: 'Align with globally recognized OWASP standards trusted by security professionals worldwide.'
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Regulatory Alignment',
      description: 'Meet PCI-DSS, HIPAA, and SOC 2 requirements that reference OWASP security guidelines.'
    },
    {
      icon: 'ri-bug-line',
      title: 'Top 10 Coverage',
      description: 'Comprehensive testing against OWASP Top 10 vulnerabilities that cause 90% of web attacks.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Proactive Defense',
      description: 'Identify and fix critical vulnerabilities before they can be exploited by attackers.'
    },
    {
      icon: 'ri-team-line',
      title: 'Developer Education',
      description: 'Improve team security awareness with detailed findings and secure coding recommendations.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Competitive Advantage',
      description: 'Demonstrate security commitment to customers, partners, and stakeholders with OWASP compliance.'
    }
  ];

  const owaspTop10 = [
    {
      rank: 'A01',
      vulnerability: 'Broken Access Control',
      description: 'Failures in access restrictions allowing unauthorized access to data or functionality.',
      impact: 'Critical',
      icon: 'ri-lock-unlock-line',
      examples: ['Privilege escalation', 'Insecure direct object references', 'Missing function-level access control']
    },
    {
      rank: 'A02',
      vulnerability: 'Cryptographic Failures',
      description: 'Weak encryption or missing protection of sensitive data in transit and at rest.',
      impact: 'Critical',
      icon: 'ri-key-2-line',
      examples: ['Weak encryption algorithms', 'Hardcoded credentials', 'Unencrypted sensitive data']
    },
    {
      rank: 'A03',
      vulnerability: 'Injection',
      description: 'Untrusted data sent to interpreters as part of commands or queries.',
      impact: 'Critical',
      icon: 'ri-syringe-line',
      examples: ['SQL injection', 'NoSQL injection', 'OS command injection', 'LDAP injection']
    },
    {
      rank: 'A04',
      vulnerability: 'Insecure Design',
      description: 'Missing or ineffective security controls in application architecture.',
      impact: 'High',
      icon: 'ri-draft-line',
      examples: ['Missing rate limiting', 'Insecure workflows', 'Lack of threat modeling']
    },
    {
      rank: 'A05',
      vulnerability: 'Security Misconfiguration',
      description: 'Insecure default configurations, incomplete setups, or verbose error messages.',
      impact: 'High',
      icon: 'ri-settings-3-line',
      examples: ['Default credentials', 'Unnecessary features enabled', 'Verbose error messages']
    },
    {
      rank: 'A06',
      vulnerability: 'Vulnerable Components',
      description: 'Using libraries, frameworks, or modules with known security vulnerabilities.',
      impact: 'High',
      icon: 'ri-puzzle-line',
      examples: ['Outdated dependencies', 'Unpatched libraries', 'Deprecated components']
    },
    {
      rank: 'A07',
      vulnerability: 'Authentication Failures',
      description: 'Broken authentication mechanisms allowing attackers to compromise accounts.',
      impact: 'Critical',
      icon: 'ri-user-unfollow-line',
      examples: ['Weak passwords', 'Session fixation', 'Missing MFA', 'Credential stuffing']
    },
    {
      rank: 'A08',
      vulnerability: 'Software & Data Integrity',
      description: 'Code and infrastructure that doesn\'t protect against integrity violations.',
      impact: 'High',
      icon: 'ri-shield-cross-line',
      examples: ['Insecure CI/CD pipelines', 'Auto-update without verification', 'Unsigned code']
    },
    {
      rank: 'A09',
      vulnerability: 'Security Logging Failures',
      description: 'Insufficient logging and monitoring allowing attacks to go undetected.',
      impact: 'Medium',
      icon: 'ri-file-list-3-line',
      examples: ['Missing audit logs', 'Inadequate monitoring', 'No alerting mechanisms']
    },
    {
      rank: 'A10',
      vulnerability: 'Server-Side Request Forgery',
      description: 'Web applications fetching remote resources without validating user-supplied URLs.',
      impact: 'High',
      icon: 'ri-server-line',
      examples: ['Internal port scanning', 'Cloud metadata access', 'Bypassing firewalls']
    }
  ];

  const testingApproach = [
    {
      phase: 'Threat Modeling',
      description: 'Analyze application architecture to identify potential attack vectors and security risks.',
      icon: 'ri-mind-map',
      activities: ['Architecture review', 'Data flow analysis', 'Attack surface mapping', 'Risk assessment']
    },
    {
      phase: 'Automated Scanning',
      description: 'Deploy OWASP-compliant tools to detect common vulnerabilities across the application.',
      icon: 'ri-radar-line',
      activities: ['OWASP ZAP scanning', 'Dependency checking', 'Configuration analysis', 'Code scanning']
    },
    {
      phase: 'Manual Testing',
      description: 'Security experts manually test for complex vulnerabilities requiring human analysis.',
      icon: 'ri-user-search-line',
      activities: ['Business logic flaws', 'Authentication bypass', 'Authorization testing', 'Session management']
    },
    {
      phase: 'Code Review',
      description: 'Static analysis of source code to identify security weaknesses and coding errors.',
      icon: 'ri-code-s-slash-line',
      activities: ['SAST analysis', 'Secure coding review', 'Input validation check', 'Output encoding review']
    },
    {
      phase: 'Compliance Validation',
      description: 'Verify adherence to OWASP guidelines and document compliance status.',
      icon: 'ri-checkbox-multiple-line',
      activities: ['OWASP Top 10 mapping', 'ASVS verification', 'Gap analysis', 'Compliance reporting']
    },
    {
      phase: 'Remediation Support',
      description: 'Provide guidance and validation to ensure vulnerabilities are properly fixed.',
      icon: 'ri-tools-line',
      activities: ['Fix recommendations', 'Secure code examples', 'Retest validation', 'Developer training']
    }
  ];

  const standards = [
    {
      standard: 'OWASP Top 10',
      description: 'Most critical web application security risks',
      icon: 'ri-list-ordered',
      coverage: 'Web Applications'
    },
    {
      standard: 'OWASP ASVS',
      description: 'Application Security Verification Standard',
      icon: 'ri-shield-check-line',
      coverage: 'Security Requirements'
    },
    {
      standard: 'OWASP MASVS',
      description: 'Mobile Application Security Verification Standard',
      icon: 'ri-smartphone-line',
      coverage: 'Mobile Apps'
    },
    {
      standard: 'OWASP API Security',
      description: 'Top 10 API security risks and best practices',
      icon: 'ri-plug-line',
      coverage: 'APIs & Microservices'
    },
    {
      standard: 'OWASP SAMM',
      description: 'Software Assurance Maturity Model',
      icon: 'ri-bar-chart-grouped-line',
      coverage: 'Security Program'
    },
    {
      standard: 'OWASP Testing Guide',
      description: 'Comprehensive security testing methodology',
      icon: 'ri-book-open-line',
      coverage: 'Testing Framework'
    }
  ];

  const deliverables = [
    { item: 'OWASP Compliance Report', description: 'Detailed assessment against OWASP Top 10 with compliance status', icon: 'ri-file-shield-2-line' },
    { item: 'Vulnerability Findings', description: 'Technical documentation of identified security weaknesses with evidence', icon: 'ri-bug-line' },
    { item: 'Risk Assessment Matrix', description: 'Prioritized vulnerabilities based on CVSS scores and business impact', icon: 'ri-table-line' },
    { item: 'Remediation Roadmap', description: 'Step-by-step guidance with code examples for fixing vulnerabilities', icon: 'ri-roadmap-line' },
    { item: 'Executive Summary', description: 'Business-focused overview with strategic security recommendations', icon: 'ri-presentation-line' },
    { item: 'Compliance Certificate', description: 'Documentation of OWASP compliance for audit and certification purposes', icon: 'ri-award-line' }
  ];

  const faqs = [
    {
      question: 'What is OWASP and why is compliance important?',
      answer: 'OWASP (Open Web Application Security Project) is a nonprofit foundation providing free security resources. OWASP compliance demonstrates your commitment to security best practices and is often required by regulations like PCI-DSS. It helps prevent the most common and critical web application vulnerabilities.'
    },
    {
      question: 'How often should we test for OWASP compliance?',
      answer: 'We recommend annual comprehensive OWASP assessments at minimum, with additional testing after major application changes or new feature releases. Organizations handling sensitive data should consider quarterly assessments. Continuous automated scanning can supplement periodic manual testing.'
    },
    {
      question: 'What is the difference between OWASP Top 10 and ASVS?',
      answer: 'OWASP Top 10 lists the most critical web application security risks. ASVS (Application Security Verification Standard) is a comprehensive framework defining security requirements at three verification levels. Top 10 identifies what to fix, while ASVS defines how secure your application should be.'
    },
    {
      question: 'Can you help us achieve OWASP compliance for mobile apps?',
      answer: 'Yes, we test mobile applications against OWASP MASVS (Mobile Application Security Verification Standard) and OWASP Mobile Top 10. This includes testing for insecure data storage, weak cryptography, insecure communication, and platform-specific vulnerabilities for both iOS and Android.'
    },
    {
      question: 'Do you provide training for our development team?',
      answer: 'Yes, we offer OWASP security training tailored to your technology stack. Training covers secure coding practices, common vulnerability patterns, and how to prevent OWASP Top 10 issues during development. We can conduct workshops, code review sessions, and provide ongoing security guidance.'
    },
    {
      question: 'How does OWASP compliance relate to PCI-DSS and other regulations?',
      answer: 'Many regulatory frameworks reference OWASP standards. PCI-DSS Requirement 6.5 explicitly requires protection against OWASP Top 10 vulnerabilities. HIPAA, SOC 2, and ISO 27001 also align with OWASP security principles. OWASP compliance helps satisfy multiple regulatory requirements simultaneously.'
    }
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
              <Link to="/about" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">About</Link>
              <Link to="/services" className="text-sm font-medium transition-colors cursor-pointer text-orange-500">Services</Link>
              <Link to="/stories" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Stories</Link>
              <Link to="/#why-choose-us" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Why Teams Choose Us</Link>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md shadow-orange-500/20 whitespace-nowrap cursor-pointer">Book a Call</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer text-gray-700 hover:bg-gray-100" aria-label="Toggle menu">
                <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden transition-all duration-300 bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-1">
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">About</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-orange-500 bg-orange-50">Services</Link>
              <Link to="/stories" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Stories</Link>
              <Link to="/#why-choose-us" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Why Teams Choose Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-orange-700 via-orange-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium mb-6 cursor-pointer transition-colors">
              <i className="ri-arrow-left-line"></i>
              Back to Services
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <i className="ri-shield-check-line"></i>
              Security Testing
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              OWASP Compliance Testing
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Comprehensive security testing against OWASP Top 10 and industry standards to protect your applications from the most critical web vulnerabilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get OWASP Assessment
                <i className="ri-arrow-right-line"></i>
              </a>
              <a href="#owasp-top-10" className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                See OWASP Top 10
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OWASP Top 10 */}
      <section id="owasp-top-10" className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">OWASP Top 10 2021</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Most Critical Web Application Risks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We test your applications against all OWASP Top 10 vulnerabilities that account for 90% of web attacks.</p>
            </div>
            <div className="space-y-4">
              {owaspTop10.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg flex-shrink-0">
                        <i className={`${item.icon} text-xl text-orange-500`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-bold text-orange-500">{item.rank}</span>
                          <h3 className="font-bold text-gray-900">{item.vulnerability}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            item.impact === 'Critical' ? 'bg-orange-100 text-orange-700' : 'bg-orange-100 text-orange-700'
                          }`}>
                            {item.impact}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <i className="ri-arrow-down-s-line text-xl text-gray-400 group-open:rotate-180 transition-transform ml-4"></i>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="ml-16 space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Common Examples:</p>
                      {item.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <i className="ri-error-warning-line text-orange-500"></i>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Benefits</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why OWASP Compliance Matters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Industry-standard security that protects your business and builds customer trust.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${benefit.icon} text-2xl text-orange-500`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Approach */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Approach</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive OWASP Testing Methodology</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach combining automated tools and manual expertise.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testingApproach.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-xl mb-4">
                    <i className={`${item.icon} text-xl text-orange-500`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.phase}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-1">
                    {item.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <i className="ri-checkbox-circle-fill text-orange-500"></i>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">OWASP Standards</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Framework Coverage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We test against multiple OWASP standards for complete security assurance.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg mb-4">
                    <i className={`${item.icon} text-xl text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.standard}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full">{item.coverage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">What You Get</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Deliverables</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Detailed documentation to achieve and maintain OWASP compliance.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg mb-4">
                    <i className={`${item.icon} text-xl text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.item}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900">
                    {faq.question}
                    <i className="ri-arrow-down-s-line text-xl text-gray-400 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Achieve OWASP Compliance Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Protect your applications with industry-standard security testing. Schedule a consultation to discuss your compliance needs.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get OWASP Compliance
                <i className="ri-arrow-right-line"></i>
              </a>
              <Link to="/services" className="px-8 py-4 border border-gray-600 hover:border-orange-400 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
