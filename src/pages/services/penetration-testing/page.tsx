import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';
import { useProcessAnimation } from '../../../hooks/useProcessAnimation';

export default function PenetrationTestingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { processRef, processVisible } = useProcessAnimation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Proactive Defense',
      description: 'Identify and fix vulnerabilities before malicious actors exploit them, reducing breach risk by up to 85%.'
    },
    {
      icon: 'ri-lock-unlock-line',
      title: 'Real-World Attack Simulation',
      description: 'Ethical hackers use the same techniques as cybercriminals to test your defenses comprehensively.'
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Compliance Assurance',
      description: 'Meet PCI-DSS, HIPAA, SOC 2, and ISO 27001 requirements with documented security assessments.'
    },
    {
      icon: 'ri-eye-line',
      title: 'Complete Visibility',
      description: 'Gain deep insights into your security posture across networks, applications, and infrastructure.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Cost Avoidance',
      description: 'Prevent costly data breaches averaging $4.45M per incident according to IBM Security reports.'
    },
    {
      icon: 'ri-team-line',
      title: 'Security Awareness',
      description: 'Educate your team about real threats and improve overall security culture through findings.'
    }
  ];

  const threatLandscape = [
    { threat: 'SQL Injection', severity: 'Critical', frequency: '32%', icon: 'ri-database-2-line' },
    { threat: 'Cross-Site Scripting (XSS)', severity: 'High', frequency: '28%', icon: 'ri-code-s-slash-line' },
    { threat: 'Authentication Bypass', severity: 'Critical', frequency: '24%', icon: 'ri-lock-unlock-line' },
    { threat: 'Privilege Escalation', severity: 'High', frequency: '19%', icon: 'ri-arrow-up-circle-line' },
    { threat: 'API Vulnerabilities', severity: 'High', frequency: '35%', icon: 'ri-plug-line' },
    { threat: 'Misconfigurations', severity: 'Medium', frequency: '41%', icon: 'ri-settings-3-line' }
  ];

  const methodology = [
    {
      phase: 'Reconnaissance',
      description: 'Information gathering using OSINT, network scanning, and footprinting to map attack surface.',
      icon: 'ri-search-eye-line',
      techniques: ['DNS enumeration', 'Port scanning', 'Service fingerprinting', 'Social engineering recon']
    },
    {
      phase: 'Vulnerability Analysis',
      description: 'Systematic identification of security weaknesses using automated tools and manual techniques.',
      icon: 'ri-bug-line',
      techniques: ['Automated scanning', 'Manual code review', 'Configuration analysis', 'Patch assessment']
    },
    {
      phase: 'Exploitation',
      description: 'Controlled attempts to exploit identified vulnerabilities to prove real-world impact.',
      icon: 'ri-flashlight-line',
      techniques: ['Payload crafting', 'Privilege escalation', 'Lateral movement', 'Data exfiltration']
    },
    {
      phase: 'Post-Exploitation',
      description: 'Assessment of potential damage, persistence mechanisms, and data access capabilities.',
      icon: 'ri-spy-line',
      techniques: ['Persistence testing', 'Data access validation', 'Pivot analysis', 'Impact assessment']
    },
    {
      phase: 'Reporting',
      description: 'Comprehensive documentation with risk ratings, evidence, and remediation recommendations.',
      icon: 'ri-file-text-line',
      techniques: ['Executive summary', 'Technical findings', 'Risk prioritization', 'Remediation roadmap']
    },
    {
      phase: 'Remediation Support',
      description: 'Guidance and validation to ensure vulnerabilities are properly fixed and verified.',
      icon: 'ri-tools-line',
      techniques: ['Fix verification', 'Retest validation', 'Security guidance', 'Best practices']
    }
  ];

  const testingTypes = [
    {
      type: 'Black Box Testing',
      description: 'Zero-knowledge testing simulating external attacker perspective without internal information.',
      icon: 'ri-eye-off-line',
      color: 'red'
    },
    {
      type: 'White Box Testing',
      description: 'Full-knowledge testing with access to source code, architecture, and credentials for deep analysis.',
      icon: 'ri-code-box-line',
      color: 'orange'
    },
    {
      type: 'Gray Box Testing',
      description: 'Partial-knowledge testing simulating insider threats or compromised user scenarios.',
      icon: 'ri-contrast-2-line',
      color: 'amber'
    },
    {
      type: 'Red Team Assessment',
      description: 'Advanced adversary simulation testing physical, social, and technical security controls.',
      icon: 'ri-sword-line',
      color: 'rose'
    }
  ];

  const deliverables = [
    { item: 'Executive Summary Report', description: 'Business-focused overview with risk ratings and strategic recommendations', icon: 'ri-file-chart-line' },
    { item: 'Technical Findings Report', description: 'Detailed vulnerability documentation with proof-of-concept and exploitation steps', icon: 'ri-file-code-line' },
    { item: 'Risk Assessment Matrix', description: 'Prioritized vulnerabilities based on CVSS scores and business impact', icon: 'ri-table-line' },
    { item: 'Remediation Roadmap', description: 'Step-by-step guidance for fixing identified security issues', icon: 'ri-roadmap-line' },
    { item: 'Compliance Mapping', description: 'Alignment of findings with regulatory requirements and standards', icon: 'ri-checkbox-multiple-line' },
    { item: 'Retest Validation', description: 'Follow-up testing to verify successful remediation of critical issues', icon: 'ri-shield-check-line' }
  ];

  const faqs = [
    {
      question: 'How often should we conduct penetration testing?',
      answer: 'We recommend annual comprehensive penetration tests at minimum, with additional testing after major application changes, infrastructure updates, or security incidents. High-risk industries like finance and healthcare should consider quarterly assessments.'
    },
    {
      question: 'Will penetration testing disrupt our operations?',
      answer: 'We coordinate testing windows to minimize impact and can perform tests during off-peak hours. Most testing is non-disruptive, though we always establish clear rules of engagement and emergency contacts before starting.'
    },
    {
      question: 'What is the difference between penetration testing and vulnerability scanning?',
      answer: 'Vulnerability scanning is automated identification of known weaknesses. Penetration testing goes deeper with manual exploitation, chaining vulnerabilities, and simulating real attacker behavior to prove actual business impact.'
    },
    {
      question: 'Do you provide remediation services?',
      answer: 'We provide detailed remediation guidance and can validate fixes through retesting. While we don\'t directly fix code, we work closely with your development team to ensure proper remediation and can recommend security partners if needed.'
    },
    {
      question: 'How do you ensure confidentiality of findings?',
      answer: 'All findings are encrypted and shared through secure channels. We sign NDAs, follow strict data handling protocols, and can work within your security requirements. Reports are delivered only to authorized personnel.'
    },
    {
      question: 'What compliance standards do your tests satisfy?',
      answer: 'Our penetration testing methodology aligns with PCI-DSS, HIPAA, SOC 2, ISO 27001, NIST, and OWASP standards. We provide compliance mapping documentation to support your audit and certification requirements.'
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 overflow-hidden">
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
              Penetration Testing
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Simulate real-world attacks to identify security vulnerabilities before malicious actors do. Our ethical hackers use the same techniques as cybercriminals to test your defenses.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Penetration Test
                <i className="ri-arrow-right-line"></i>
              </a>
              <a href="#methodology" className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                See Our Methodology
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Threat Landscape</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Common Vulnerabilities We Detect</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Based on OWASP Top 10 and real-world attack patterns we encounter in penetration tests.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {threatLandscape.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg">
                      <i className={`${item.icon} text-xl text-orange-500`}></i>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.severity === 'Critical' ? 'bg-orange-100 text-orange-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.threat}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-orange-500 h-full rounded-full" style={{ width: item.frequency }}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{item.frequency}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Found in {item.frequency} of applications tested</p>
                </div>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Penetration Testing Matters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Proactive security testing that identifies vulnerabilities before they become breaches.</p>
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

      {/* Methodology */}
      <section id="methodology" className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Methodology</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Conduct Penetration Tests</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach following industry standards and best practices.</p>
            </div>
            
            {/* Timeline Layout */}
            <div ref={processRef} className="relative">
              {/* Vertical Line */}
              <div className={`absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-400 transform lg:-translate-x-1/2 ${processVisible ? 'process-line animate' : 'process-line'}`}></div>
              
              <div className="space-y-12">
                {methodology.map((item, index) => (
                  <div key={index} className={`relative flex items-start gap-6 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Node */}
                    <div 
                      className={`absolute left-8 lg:left-1/2 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-orange-500/30 z-10 ${
                        processVisible ? 'process-node animate' : 'process-node'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                      <div 
                        className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} ${
                          processVisible ? (index % 2 === 0 ? 'process-item animate-right' : 'process-item animate-left') : 'process-item'
                        }`}
                        style={{ animationDelay: `${index * 200 + 100}ms` }}
                      >
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-lg shrink-0">
                            <i className={`${item.icon} text-lg text-orange-500`}></i>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">{item.phase}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                        <div className={`flex flex-wrap gap-1.5 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          {item.techniques.map((technique, idx) => (
                            <span key={idx} className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Testing Approaches</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Choose Your Testing Perspective</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Different testing approaches for different security objectives and threat models.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {testingTypes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl mb-5">
                    <i className={`${item.icon} text-2xl text-orange-500`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.type}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              <p className="text-gray-600 max-w-2xl mx-auto">Actionable reports and documentation to improve your security posture.</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Don't Wait for a Breach</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Protect your business with proactive penetration testing. Schedule a consultation to discuss your security needs.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Security Assessment
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
