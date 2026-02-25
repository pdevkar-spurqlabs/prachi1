import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function ComplianceAuditsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Regulatory Compliance',
      description: 'Meet HIPAA, PCI-DSS, SOC 2, GDPR, and ISO 27001 requirements with documented security controls.'
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Audit Readiness',
      description: 'Prepare for external audits with comprehensive documentation and evidence of security controls.'
    },
    {
      icon: 'ri-award-line',
      title: 'Certification Support',
      description: 'Achieve and maintain security certifications that build customer trust and enable enterprise sales.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Avoid Penalties',
      description: 'Prevent costly fines and legal consequences from non-compliance with data protection regulations.'
    },
    {
      icon: 'ri-team-line',
      title: 'Stakeholder Confidence',
      description: 'Demonstrate security commitment to customers, partners, investors, and regulatory bodies.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Continuous Improvement',
      description: 'Identify gaps and improve security posture through regular compliance assessments.'
    }
  ];

  const complianceStandards = [
    {
      standard: 'PCI-DSS',
      fullName: 'Payment Card Industry Data Security Standard',
      description: 'Required for organizations that store, process, or transmit credit card information.',
      icon: 'ri-bank-card-line',
      requirements: ['Network security', 'Access control', 'Vulnerability management', 'Security testing', 'Monitoring & logging', 'Security policies'],
      industries: ['E-commerce', 'Retail', 'Payment processors', 'SaaS platforms'],
      color: 'red'
    },
    {
      standard: 'HIPAA',
      fullName: 'Health Insurance Portability and Accountability Act',
      description: 'Protects sensitive patient health information in healthcare and related industries.',
      icon: 'ri-heart-pulse-line',
      requirements: ['Access controls', 'Audit controls', 'Data integrity', 'Transmission security', 'PHI encryption', 'Risk analysis'],
      industries: ['Healthcare', 'Health tech', 'Medical devices', 'Insurance'],
      color: 'rose'
    },
    {
      standard: 'SOC 2',
      fullName: 'Service Organization Control 2',
      description: 'Evaluates security, availability, processing integrity, confidentiality, and privacy controls.',
      icon: 'ri-shield-star-line',
      requirements: ['Security controls', 'Availability', 'Processing integrity', 'Confidentiality', 'Privacy', 'Risk assessment'],
      industries: ['SaaS', 'Cloud services', 'Technology', 'Data centers'],
      color: 'orange'
    },
    {
      standard: 'GDPR',
      fullName: 'General Data Protection Regulation',
      description: 'EU regulation protecting personal data and privacy of EU citizens.',
      icon: 'ri-global-line',
      requirements: ['Data protection', 'Consent management', 'Right to erasure', 'Data portability', 'Breach notification', 'Privacy by design'],
      industries: ['Any business serving EU customers'],
      color: 'amber'
    },
    {
      standard: 'ISO 27001',
      fullName: 'Information Security Management System',
      description: 'International standard for information security management systems.',
      icon: 'ri-award-line',
      requirements: ['ISMS framework', 'Risk assessment', 'Security controls', 'Continuous improvement', 'Management review', 'Internal audits'],
      industries: ['Enterprise', 'Government', 'Financial services', 'Technology'],
      color: 'red'
    },
    {
      standard: 'CCPA',
      fullName: 'California Consumer Privacy Act',
      description: 'California law protecting consumer privacy rights and data.',
      icon: 'ri-user-shield-line',
      requirements: ['Data disclosure', 'Opt-out rights', 'Data deletion', 'Non-discrimination', 'Privacy notices', 'Data security'],
      industries: ['Any business serving California residents'],
      color: 'rose'
    }
  ];

  const auditProcess = [
    {
      phase: 'Scoping & Planning',
      description: 'Define audit scope, identify applicable regulations, and establish assessment timeline.',
      icon: 'ri-file-list-3-line',
      activities: ['Compliance requirements analysis', 'Scope definition', 'Documentation review', 'Stakeholder interviews']
    },
    {
      phase: 'Gap Analysis',
      description: 'Assess current security controls against compliance requirements to identify gaps.',
      icon: 'ri-search-line',
      activities: ['Control assessment', 'Policy review', 'Technical testing', 'Gap identification']
    },
    {
      phase: 'Technical Testing',
      description: 'Conduct security testing to validate technical controls and identify vulnerabilities.',
      icon: 'ri-bug-line',
      activities: ['Vulnerability scanning', 'Penetration testing', 'Configuration review', 'Access control testing']
    },
    {
      phase: 'Evidence Collection',
      description: 'Gather documentation and evidence demonstrating compliance with requirements.',
      icon: 'ri-folder-shield-2-line',
      activities: ['Policy documentation', 'Control evidence', 'Audit logs', 'Training records']
    },
    {
      phase: 'Risk Assessment',
      description: 'Evaluate identified gaps and prioritize remediation based on risk and compliance impact.',
      icon: 'ri-bar-chart-box-line',
      activities: ['Risk scoring', 'Impact analysis', 'Remediation prioritization', 'Timeline planning']
    },
    {
      phase: 'Reporting & Remediation',
      description: 'Deliver comprehensive audit report with findings and remediation roadmap.',
      icon: 'ri-file-text-line',
      activities: ['Audit report', 'Executive summary', 'Remediation plan', 'Follow-up support']
    }
  ];

  const deliverables = [
    {
      item: 'Compliance Assessment Report',
      description: 'Comprehensive evaluation of compliance status against applicable standards',
      icon: 'ri-file-shield-2-line'
    },
    {
      item: 'Gap Analysis Document',
      description: 'Detailed identification of gaps between current state and compliance requirements',
      icon: 'ri-contrast-2-line'
    },
    {
      item: 'Risk Assessment Matrix',
      description: 'Prioritized risks with severity ratings and business impact analysis',
      icon: 'ri-table-line'
    },
    {
      item: 'Remediation Roadmap',
      description: 'Step-by-step plan with timelines and resources for achieving compliance',
      icon: 'ri-roadmap-line'
    },
    {
      item: 'Policy & Procedure Templates',
      description: 'Customizable templates for required security policies and procedures',
      icon: 'ri-file-copy-line'
    },
    {
      item: 'Evidence Package',
      description: 'Organized documentation and evidence for external auditor review',
      icon: 'ri-folder-shield-line'
    },
    {
      item: 'Executive Summary',
      description: 'Business-focused overview for leadership and board presentations',
      icon: 'ri-presentation-line'
    },
    {
      item: 'Continuous Monitoring Plan',
      description: 'Framework for ongoing compliance monitoring and maintenance',
      icon: 'ri-refresh-line'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: 'ri-heart-pulse-line', standards: ['HIPAA', 'HITECH', 'FDA'] },
    { name: 'Financial Services', icon: 'ri-bank-line', standards: ['PCI-DSS', 'SOX', 'GLBA'] },
    { name: 'E-commerce', icon: 'ri-shopping-cart-line', standards: ['PCI-DSS', 'GDPR', 'CCPA'] },
    { name: 'SaaS & Cloud', icon: 'ri-cloud-line', standards: ['SOC 2', 'ISO 27001', 'GDPR'] },
    { name: 'Government', icon: 'ri-government-line', standards: ['FedRAMP', 'FISMA', 'NIST'] },
    { name: 'Education', icon: 'ri-book-open-line', standards: ['FERPA', 'COPPA', 'GDPR'] }
  ];

  const faqs = [
    {
      question: 'Which compliance standards do we need for our business?',
      answer: 'Compliance requirements depend on your industry, data types, and customer locations. Healthcare requires HIPAA, payment processing requires PCI-DSS, SaaS companies often need SOC 2, and businesses serving EU customers must comply with GDPR. We provide a free compliance assessment to identify applicable standards for your specific situation.'
    },
    {
      question: 'How long does a compliance audit take?',
      answer: 'Timeline varies by standard complexity and organization size. A PCI-DSS assessment typically takes 2-4 weeks, SOC 2 Type I takes 4-8 weeks, and ISO 27001 certification can take 3-6 months. We provide detailed timelines during scoping and can expedite critical assessments when needed.'
    },
    {
      question: 'What is the difference between SOC 2 Type I and Type II?',
      answer: 'SOC 2 Type I evaluates security controls at a specific point in time, while Type II assesses control effectiveness over a period (typically 6-12 months). Type I is faster and less expensive, suitable for initial certification. Type II provides stronger assurance and is often required by enterprise customers.'
    },
    {
      question: 'Can you help us achieve certification, not just audit readiness?',
      answer: 'Yes, we provide end-to-end support from gap analysis through certification. We help implement required controls, prepare documentation, conduct pre-audit assessments, and coordinate with certification bodies. We also provide ongoing support for maintaining compliance and preparing for recertification.'
    },
    {
      question: 'How much does compliance certification cost?',
      answer: 'Costs vary significantly by standard and organization complexity. PCI-DSS assessments start around $15K-$50K, SOC 2 audits range from $20K-$100K+, and ISO 27001 certification can cost $50K-$200K+. We provide detailed cost estimates after scoping your specific requirements and current security posture.'
    },
    {
      question: 'What happens if we fail the compliance audit?',
      answer: 'Failing an audit isn\'t the end - it identifies areas needing improvement. We provide detailed remediation guidance, help implement required controls, and conduct follow-up assessments. Most organizations require multiple iterations to achieve full compliance. We support you throughout the entire journey to certification.'
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-orange-700 via-orange-700 to-orange-800 overflow-hidden">
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
              Compliance Audits & Certification
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Achieve and maintain compliance with HIPAA, PCI-DSS, SOC 2, GDPR, and ISO 27001. Expert guidance from gap analysis through certification and ongoing compliance monitoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Start Compliance Journey
                <i className="ri-arrow-right-line"></i>
              </a>
              <a href="#standards" className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                View Standards
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section id="standards" className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Compliance Standards</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">We Support All Major Compliance Frameworks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Expert guidance for achieving and maintaining regulatory compliance.</p>
            </div>
            <div className="space-y-6">
              {complianceStandards.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl flex-shrink-0">
                        <i className={`${item.icon} text-2xl text-orange-500`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{item.standard}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.fullName}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <i className="ri-arrow-down-s-line text-2xl text-gray-400 group-open:rotate-180 transition-transform ml-4"></i>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="ml-18 grid sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-3">Key Requirements:</p>
                        <div className="space-y-2">
                          {item.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <i className="ri-checkbox-circle-fill text-orange-500"></i>
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-3">Applicable Industries:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.industries.map((industry, idx) => (
                            <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Compliance Matters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Regulatory compliance protects your business and builds customer trust.</p>
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

      {/* Audit Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Compliance Audit Methodology</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to achieving and maintaining compliance.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditProcess.map((item, index) => (
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

      {/* Industries */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Industries We Serve</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry-Specific Compliance Expertise</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We understand the unique compliance requirements of your industry.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg mb-4">
                    <i className={`${item.icon} text-xl text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{item.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.standards.map((standard, idx) => (
                      <span key={idx} className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded">
                        {standard}
                      </span>
                    ))}
                  </div>
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
              <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to achieve and maintain compliance.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg mb-4">
                    <i className={`${item.icon} text-xl text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.item}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Start Your Compliance Journey</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Achieve regulatory compliance and build customer trust. Schedule a consultation to discuss your compliance requirements.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Compliance Assessment
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
