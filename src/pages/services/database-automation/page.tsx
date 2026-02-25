import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function DatabaseAutomationPage() {
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
      icon: 'ri-database-2-line',
      title: 'Data Integrity Validation',
      description: 'Ensure data consistency, referential integrity, constraints, and business rules across all database operations.'
    },
    {
      icon: 'ri-speed-up-line',
      title: 'Query Performance Testing',
      description: 'Validate query execution times, index effectiveness, and optimize database performance under various load conditions.'
    },
    {
      icon: 'ri-git-branch-line',
      title: 'Schema Migration Testing',
      description: 'Automate testing of database migrations, version upgrades, and schema changes to prevent production issues.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security & Access Control',
      description: 'Test user permissions, role-based access, SQL injection prevention, and data encryption mechanisms.'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Backup & Recovery',
      description: 'Validate backup procedures, disaster recovery processes, and data restoration capabilities automatically.'
    },
    {
      icon: 'ri-file-transfer-line',
      title: 'ETL Process Validation',
      description: 'Test data extraction, transformation, and loading processes ensuring accuracy and completeness of data pipelines.'
    }
  ];

  const tools = [
    { name: 'SQL', category: 'Query Language', icon: 'ri-database-line' },
    { name: 'DBUnit', category: 'Java Testing', icon: 'ri-code-s-slash-line' },
    { name: 'Liquibase', category: 'Migration', icon: 'ri-git-merge-line' },
    { name: 'Flyway', category: 'Version Control', icon: 'ri-flight-takeoff-line' },
    { name: 'JMeter', category: 'Load Testing', icon: 'ri-speed-line' },
    { name: 'Selenium', category: 'UI Integration', icon: 'ri-window-line' },
    { name: 'Python', category: 'Scripting', icon: 'ri-code-box-line' },
    { name: 'Postman', category: 'API Testing', icon: 'ri-send-plane-line' },
    { name: 'Docker', category: 'Containerization', icon: 'ri-server-line' },
    { name: 'Jenkins', category: 'CI/CD', icon: 'ri-git-repository-line' }
  ];

  const useCases = [
    {
      industry: 'Financial Systems',
      scenarios: ['Transaction integrity', 'ACID compliance', 'Audit trail validation', 'Regulatory reporting'],
      icon: 'ri-bank-line',
      color: 'emerald'
    },
    {
      industry: 'E-Commerce',
      scenarios: ['Inventory management', 'Order processing', 'Customer data integrity', 'Product catalog updates'],
      icon: 'ri-shopping-basket-line',
      color: 'orange'
    },
    {
      industry: 'Healthcare',
      scenarios: ['Patient records', 'Medical history integrity', 'HIPAA compliance', 'Clinical data validation'],
      icon: 'ri-hospital-line',
      color: 'red'
    },
    {
      industry: 'Data Warehousing',
      scenarios: ['ETL pipeline testing', 'Data quality checks', 'Aggregation validation', 'Report accuracy'],
      icon: 'ri-archive-line',
      color: 'violet'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Database Analysis',
      description: 'Analyze database schema, relationships, stored procedures, triggers, and business logic to understand data architecture.',
      icon: 'ri-search-line'
    },
    {
      step: '02',
      title: 'Test Data Strategy',
      description: 'Design test data generation strategy including synthetic data, data masking, and test database provisioning.',
      icon: 'ri-file-list-3-line'
    },
    {
      step: '03',
      title: 'Framework Setup',
      description: 'Build automation framework with database connection management, query execution, and result validation utilities.',
      icon: 'ri-tools-line'
    },
    {
      step: '04',
      title: 'Test Script Development',
      description: 'Create automated tests for CRUD operations, stored procedures, triggers, constraints, and data integrity rules.',
      icon: 'ri-code-s-slash-line'
    },
    {
      step: '05',
      title: 'Performance Testing',
      description: 'Execute load tests, stress tests, and query optimization validation to ensure database scalability.',
      icon: 'ri-dashboard-line'
    },
    {
      step: '06',
      title: 'Continuous Validation',
      description: 'Integrate database tests into CI/CD pipeline for automated validation on every schema change and deployment.',
      icon: 'ri-loop-left-line'
    }
  ];

  const faqs = [
    {
      question: 'Which databases do you support?',
      answer: 'We support all major databases including MySQL, PostgreSQL, Oracle, SQL Server, MongoDB, Cassandra, Redis, and cloud databases like AWS RDS, Azure SQL, and Google Cloud SQL. We also work with legacy and proprietary database systems.'
    },
    {
      question: 'How do you handle test data management?',
      answer: 'We use multiple strategies including synthetic data generation, data masking for sensitive information, database snapshots, and containerized test databases. We ensure test data is realistic, compliant, and doesn\'t impact production systems.'
    },
    {
      question: 'Can you test stored procedures and triggers?',
      answer: 'Absolutely. We create comprehensive tests for stored procedures, functions, triggers, and complex database logic. We validate input parameters, return values, error handling, and side effects on related tables.'
    },
    {
      question: 'How do you test database performance?',
      answer: 'We conduct query performance testing, index optimization validation, connection pool testing, and load testing under various concurrency levels. We identify slow queries, missing indexes, and optimization opportunities.'
    },
    {
      question: 'What about testing database migrations?',
      answer: 'We automate testing of schema migrations using tools like Liquibase and Flyway. We validate forward migrations, rollback procedures, data preservation, and application compatibility after schema changes.'
    },
    {
      question: 'How long does database automation setup take?',
      answer: 'Initial framework setup takes 2-3 weeks including test database provisioning and data strategy. First automated tests run within 2 weeks, with comprehensive coverage achieved in 6-8 weeks depending on database complexity.'
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
              Database Automation Testing
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Ensure data integrity and database reliability with comprehensive automation testing. Validate schemas, queries, stored procedures, and data migrations with confidence.
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Database Automation?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Protect your most valuable asset—your data—with automated testing.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Database Testing Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Powerful tools for comprehensive database test automation.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Database Testing Applications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Critical database testing for mission-critical systems.</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Database Testing Workflow</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Systematic approach to database test automation.</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Automate Your Database Testing?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's ensure your data integrity with comprehensive database automation testing.</p>
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
