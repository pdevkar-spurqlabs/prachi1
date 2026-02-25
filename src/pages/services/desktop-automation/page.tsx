import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function DesktopAutomationPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      icon: 'ri-computer-line',
      title: 'Cross-Platform Coverage',
      description: 'Test Windows, macOS, and Linux desktop applications with unified automation frameworks and consistent quality.'
    },
    {
      icon: 'ri-window-2-line',
      title: 'Native UI Automation',
      description: 'Interact with native desktop controls, dialogs, menus, and system-level components with precision.'
    },
    {
      icon: 'ri-file-transfer-line',
      title: 'File System Testing',
      description: 'Validate file operations, directory management, import/export functionality, and local storage handling.'
    },
    {
      icon: 'ri-keyboard-line',
      title: 'Keyboard & Shortcuts',
      description: 'Test complex keyboard combinations, hotkeys, accessibility shortcuts, and keyboard navigation flows.'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Legacy App Support',
      description: 'Automate testing for legacy desktop applications including thick clients, client-server, and mainframe systems.'
    },
    {
      icon: 'ri-timer-line',
      title: 'Background Process Testing',
      description: 'Validate background services, scheduled tasks, system tray operations, and multi-window workflows.'
    }
  ];

  const tools = [
    { name: 'WinAppDriver', category: 'Windows Apps', icon: 'ri-windows-line' },
    { name: 'Appium Desktop', category: 'Cross-Platform', icon: 'ri-computer-line' },
    { name: 'Sikuli', category: 'Image Recognition', icon: 'ri-image-line' },
    { name: 'AutoIt', category: 'Windows Automation', icon: 'ri-settings-3-line' },
    { name: 'PyAutoGUI', category: 'Python Automation', icon: 'ri-code-s-slash-line' },
    { name: 'TestComplete', category: 'Enterprise Testing', icon: 'ri-shield-check-line' },
    { name: 'Ranorex', category: 'Desktop Testing', icon: 'ri-window-line' },
    { name: 'White Framework', category: '.NET Apps', icon: 'ri-microsoft-line' },
    { name: 'FlaUI', category: 'UI Automation', icon: 'ri-layout-grid-line' },
    { name: 'Squish', category: 'Qt Applications', icon: 'ri-apps-line' }
  ];

  const useCases = [
    {
      industry: 'Enterprise Software',
      scenarios: ['ERP system workflows', 'CRM desktop clients', 'Document management', 'Reporting tools'],
      icon: 'ri-building-line',
      color: 'emerald'
    },
    {
      industry: 'Financial Applications',
      scenarios: ['Trading platforms', 'Accounting software', 'Banking terminals', 'Payment processing'],
      icon: 'ri-line-chart-line',
      color: 'orange'
    },
    {
      industry: 'CAD/Design Tools',
      scenarios: ['3D modeling software', 'Graphic design apps', 'Architecture tools', 'Engineering platforms'],
      icon: 'ri-pencil-ruler-2-line',
      color: 'violet'
    },
    {
      industry: 'Healthcare Systems',
      scenarios: ['Medical imaging software', 'Patient management', 'Lab information systems', 'EMR desktop clients'],
      icon: 'ri-hospital-line',
      color: 'red'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Application Assessment',
      description: 'Analyze desktop application technology, UI framework, system dependencies, and automation feasibility.',
      icon: 'ri-search-line'
    },
    {
      step: '02',
      title: 'Tool Selection',
      description: 'Choose optimal automation tools based on application type, platform requirements, and technical constraints.',
      icon: 'ri-tools-line'
    },
    {
      step: '03',
      title: 'Environment Setup',
      description: 'Configure test environments with required OS versions, dependencies, licenses, and system configurations.',
      icon: 'ri-settings-4-line'
    },
    {
      step: '04',
      title: 'Framework Development',
      description: 'Build robust automation framework with object repositories, reusable functions, and error handling.',
      icon: 'ri-code-box-line'
    },
    {
      step: '05',
      title: 'Test Execution',
      description: 'Run automated tests across different OS versions, screen resolutions, and system configurations.',
      icon: 'ri-play-line'
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Provide ongoing maintenance for UI changes, version updates, and expanding test coverage.',
      icon: 'ri-customer-service-2-line'
    }
  ];

  const faqs = [
    {
      question: 'Can you automate legacy desktop applications?',
      answer: 'Yes, we specialize in legacy application automation. We use a combination of UI Automation, image recognition, and keyboard/mouse simulation to automate even the most challenging legacy systems including mainframe terminals and thick clients.'
    },
    {
      question: 'How do you handle applications with complex UI controls?',
      answer: 'We use advanced techniques including UI Automation APIs, accessibility interfaces, and when needed, image recognition with Sikuli. Our team has experience with custom controls, third-party components, and proprietary UI frameworks.'
    },
    {
      question: 'What about applications requiring special permissions?',
      answer: 'We configure test environments with appropriate user permissions, administrator rights, and security policies. Our frameworks can handle UAC prompts, certificate installations, and other security-related scenarios.'
    },
    {
      question: 'Can tests run on virtual machines?',
      answer: 'Absolutely. We commonly use VMs for test execution, allowing parallel testing across different OS versions and configurations. We optimize VM settings for reliable automation including display settings and resource allocation.'
    },
    {
      question: 'How do you test file upload/download functionality?',
      answer: 'We automate file system operations including file selection dialogs, drag-and-drop, network drives, and validation of downloaded files. Our frameworks can handle various file formats and large file operations.'
    },
    {
      question: 'What is the typical timeline for desktop automation?',
      answer: 'Initial setup takes 3-4 weeks including environment configuration and tool selection. First test scripts typically run within 2 weeks, with comprehensive coverage achieved in 8-12 weeks depending on application complexity.'
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
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
              <i className="ri-robot-line"></i>
              Test Automation
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Desktop Automation Testing
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Ensure flawless desktop application performance with comprehensive automation testing. We validate Windows, macOS, and Linux applications with reliable, maintainable test suites.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get Started
                <i className="ri-arrow-right-line"></i>
              </a>
              <a href="#process" className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Benefits</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Desktop Automation?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Accelerate testing cycles and ensure consistent quality across all desktop platforms.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
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

      {/* Tools & Technologies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Technology Stack</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Desktop Testing Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized tools for comprehensive desktop application automation.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-lg mb-3">
                    <i className={`${tool.icon} text-lg text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Use Cases</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Desktop Applications We Test</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Automation solutions for diverse desktop application types.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 flex items-center justify-center bg-${useCase.color}-50 rounded-xl mb-5`}>
                    <i className={`${useCase.icon} text-2xl text-${useCase.color}-500`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.scenarios.map((scenario, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="ri-checkbox-circle-fill text-orange-500 mt-0.5"></i>
                        <span>{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Desktop Automation Workflow</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Systematic approach to desktop application test automation.</p>
            </div>
            
            {/* Timeline Layout */}
            <div ref={processRef} className="relative">
              {/* Vertical Line */}
              <div className={`absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 transform lg:-translate-x-1/2 ${processVisible ? 'process-line animate' : 'process-line'}`}></div>
              
              <div className="space-y-12">
                {process.map((item, index) => (
                  <div key={index} className={`relative flex items-start gap-6 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Node */}
                    <div 
                      className={`absolute left-8 lg:left-1/2 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-full transform -translate-x-1/2 shadow-lg shadow-orange-500/30 z-10 ${
                        processVisible ? 'process-node animate' : 'process-node'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <span className="text-white font-bold text-lg">{item.step}</span>
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
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Automate Your Desktop Testing?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how our desktop automation solutions can improve quality and accelerate your release cycles.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Schedule a Consultation
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
