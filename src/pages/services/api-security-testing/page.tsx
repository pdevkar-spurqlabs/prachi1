import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

export default function APISecurityTestingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: 'ri-plug-line',
      title: 'API-First Security',
      description: 'Specialized testing for REST, GraphQL, SOAP, and microservices architectures with API-specific attack vectors.'
    },
    {
      icon: 'ri-shield-keyhole-line',
      title: 'Authentication Testing',
      description: 'Comprehensive validation of OAuth, JWT, API keys, and token-based authentication mechanisms.'
    },
    {
      icon: 'ri-lock-password-line',
      title: 'Authorization Flaws',
      description: 'Identify broken object-level and function-level authorization vulnerabilities in API endpoints.'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Data Exposure Prevention',
      description: 'Detect excessive data exposure, mass assignment, and sensitive information leakage in API responses.'
    },
    {
      icon: 'ri-speed-line',
      title: 'Rate Limiting Validation',
      description: 'Test API rate limiting, throttling, and resource consumption controls to prevent abuse.'
    },
    {
      icon: 'ri-file-shield-2-line',
      title: 'Compliance Support',
      description: 'Meet OWASP API Security Top 10, PCI-DSS, and GDPR requirements for API security.'
    }
  ];

  const owaspAPITop10 = [
    {
      rank: 'API1',
      vulnerability: 'Broken Object Level Authorization',
      description: 'APIs fail to validate user access to specific objects, allowing unauthorized data access.',
      impact: 'Critical',
      icon: 'ri-lock-unlock-line',
      example: 'User can access other users\' data by changing object IDs in API requests'
    },
    {
      rank: 'API2',
      vulnerability: 'Broken Authentication',
      description: 'Weak authentication mechanisms allowing attackers to compromise tokens or credentials.',
      impact: 'Critical',
      icon: 'ri-key-2-line',
      example: 'Weak JWT implementation, missing token expiration, credential stuffing'
    },
    {
      rank: 'API3',
      vulnerability: 'Broken Object Property Level Authorization',
      description: 'APIs expose sensitive object properties without proper authorization checks.',
      impact: 'High',
      icon: 'ri-eye-off-line',
      example: 'Mass assignment vulnerabilities, excessive data exposure in responses'
    },
    {
      rank: 'API4',
      vulnerability: 'Unrestricted Resource Consumption',
      description: 'APIs lack proper rate limiting and resource consumption controls.',
      impact: 'High',
      icon: 'ri-speed-line',
      example: 'No rate limiting, large payload attacks, resource exhaustion'
    },
    {
      rank: 'API5',
      vulnerability: 'Broken Function Level Authorization',
      description: 'APIs fail to enforce proper authorization for administrative functions.',
      impact: 'Critical',
      icon: 'ri-admin-line',
      example: 'Regular users can access admin endpoints, privilege escalation'
    },
    {
      rank: 'API6',
      vulnerability: 'Unrestricted Access to Sensitive Business Flows',
      description: 'APIs don\'t protect against automated abuse of business-critical workflows.',
      impact: 'High',
      icon: 'ri-flow-chart',
      example: 'Automated ticket purchasing, bulk data scraping, inventory manipulation'
    },
    {
      rank: 'API7',
      vulnerability: 'Server Side Request Forgery',
      description: 'APIs fetch remote resources without validating user-supplied URLs.',
      impact: 'High',
      icon: 'ri-server-line',
      example: 'Internal network scanning, cloud metadata access, port scanning'
    },
    {
      rank: 'API8',
      vulnerability: 'Security Misconfiguration',
      description: 'Insecure default configurations, verbose errors, or missing security headers.',
      impact: 'High',
      icon: 'ri-settings-3-line',
      example: 'CORS misconfiguration, verbose error messages, missing security headers'
    },
    {
      rank: 'API9',
      vulnerability: 'Improper Inventory Management',
      description: 'Outdated API versions, unpatched endpoints, or exposed debug APIs.',
      impact: 'Medium',
      icon: 'ri-file-list-3-line',
      example: 'Old API versions still accessible, shadow APIs, debug endpoints in production'
    },
    {
      rank: 'API10',
      vulnerability: 'Unsafe Consumption of APIs',
      description: 'Blindly trusting data from third-party APIs without proper validation.',
      impact: 'High',
      icon: 'ri-link-unlink',
      example: 'No validation of third-party API responses, trusting external data sources'
    }
  ];

  const testingAreas = [
    {
      area: 'Authentication & Authorization',
      description: 'Validate token security, session management, and access control mechanisms.',
      icon: 'ri-shield-keyhole-line',
      tests: ['JWT validation', 'OAuth flow testing', 'API key security', 'Token expiration', 'Session hijacking', 'RBAC validation']
    },
    {
      area: 'Input Validation',
      description: 'Test API endpoints for injection attacks and malformed input handling.',
      icon: 'ri-input-method-line',
      tests: ['SQL injection', 'NoSQL injection', 'XML injection', 'Command injection', 'Path traversal', 'XXE attacks']
    },
    {
      area: 'Business Logic',
      description: 'Identify flaws in API workflows and business rule enforcement.',
      icon: 'ri-flow-chart',
      tests: ['Workflow bypass', 'Race conditions', 'Price manipulation', 'Quantity limits', 'State validation', 'Transaction integrity']
    },
    {
      area: 'Data Exposure',
      description: 'Detect sensitive information leakage and excessive data exposure.',
      icon: 'ri-eye-off-line',
      tests: ['PII exposure', 'Verbose errors', 'Debug information', 'Stack traces', 'Internal paths', 'Sensitive headers']
    },
    {
      area: 'Rate Limiting & DoS',
      description: 'Validate resource consumption controls and abuse prevention.',
      icon: 'ri-speed-line',
      tests: ['Rate limit bypass', 'Resource exhaustion', 'Large payloads', 'Slowloris attacks', 'Regex DoS', 'Batch request abuse']
    },
    {
      area: 'API Configuration',
      description: 'Assess security headers, CORS policies, and API configurations.',
      icon: 'ri-settings-3-line',
      tests: ['CORS validation', 'Security headers', 'TLS configuration', 'HTTP methods', 'Content-Type validation', 'API versioning']
    }
  ];

  const tools = [
    { name: 'Postman', logo: 'ri-mail-send-line', category: 'API Testing' },
    { name: 'Burp Suite', logo: 'ri-bug-line', category: 'Security Testing' },
    { name: 'OWASP ZAP', logo: 'ri-shield-flash-line', category: 'Vulnerability Scanning' },
    { name: 'Insomnia', logo: 'ri-moon-line', category: 'API Client' },
    { name: 'GraphQL Voyager', logo: 'ri-node-tree', category: 'GraphQL Testing' },
    { name: 'SoapUI', logo: 'ri-bubble-chart-line', category: 'SOAP Testing' },
    { name: 'JMeter', logo: 'ri-dashboard-line', category: 'Load Testing' },
    { name: 'Swagger', logo: 'ri-file-code-line', category: 'API Documentation' },
    { name: 'REST Assured', logo: 'ri-checkbox-circle-line', category: 'Automation' },
    { name: 'Fiddler', logo: 'ri-radar-line', category: 'Proxy Tool' }
  ];

  const methodology = [
    {
      step: 'API Discovery & Mapping',
      description: 'Identify all API endpoints, methods, parameters, and authentication requirements.',
      icon: 'ri-map-pin-line',
      duration: '1-2 days'
    },
    {
      step: 'Authentication Analysis',
      description: 'Test authentication mechanisms, token security, and session management.',
      icon: 'ri-key-2-line',
      duration: '2-3 days'
    },
    {
      step: 'Authorization Testing',
      description: 'Validate access controls, privilege escalation, and object-level authorization.',
      icon: 'ri-lock-password-line',
      duration: '2-3 days'
    },
    {
      step: 'Input Validation Testing',
      description: 'Test for injection attacks, malformed inputs, and data validation flaws.',
      icon: 'ri-input-cursor-move',
      duration: '2-3 days'
    },
    {
      step: 'Business Logic Testing',
      description: 'Identify workflow bypasses, race conditions, and business rule violations.',
      icon: 'ri-flow-chart',
      duration: '2-3 days'
    },
    {
      step: 'Rate Limiting & DoS',
      description: 'Validate resource consumption controls and abuse prevention mechanisms.',
      icon: 'ri-speed-line',
      duration: '1-2 days'
    },
    {
      step: 'Data Exposure Analysis',
      description: 'Detect sensitive information leakage and excessive data exposure.',
      icon: 'ri-eye-off-line',
      duration: '1-2 days'
    },
    {
      step: 'Reporting & Remediation',
      description: 'Deliver comprehensive findings with remediation guidance and retesting.',
      icon: 'ri-file-text-line',
      duration: '2-3 days'
    }
  ];

  const apiTypes = [
    { type: 'REST APIs', description: 'JSON/XML-based RESTful services', icon: 'ri-rest-time-line' },
    { type: 'GraphQL APIs', description: 'Query-based API testing', icon: 'ri-node-tree' },
    { type: 'SOAP APIs', description: 'XML-based web services', icon: 'ri-bubble-chart-line' },
    { type: 'WebSocket APIs', description: 'Real-time bidirectional communication', icon: 'ri-signal-tower-line' },
    { type: 'gRPC APIs', description: 'High-performance RPC framework', icon: 'ri-rocket-line' },
    { type: 'Microservices', description: 'Distributed service architectures', icon: 'ri-apps-line' }
  ];

  const faqs = [
    {
      question: 'What makes API security testing different from web application testing?',
      answer: 'API security testing focuses on machine-to-machine communication, authentication tokens, data serialization, and business logic flaws specific to APIs. Unlike web apps with user interfaces, APIs require specialized tools to test endpoints, validate authorization at the object level, and assess rate limiting. We test against OWASP API Security Top 10, which differs significantly from the Web Application Top 10.'
    },
    {
      question: 'Can you test GraphQL and other modern API types?',
      answer: 'Yes, we test all API types including REST, GraphQL, SOAP, WebSocket, gRPC, and microservices architectures. GraphQL testing includes introspection analysis, query depth limits, batching attacks, and authorization bypass. We adapt our methodology to each API type\'s unique security considerations and attack vectors.'
    },
    {
      question: 'How do you test APIs without affecting production data?',
      answer: 'We work with your team to establish safe testing environments, use test accounts with limited permissions, and implement safeguards to prevent data modification. For production testing, we use read-only operations when possible and coordinate all destructive tests. We can also test against staging environments that mirror production.'
    },
    {
      question: 'Do you test third-party API integrations?',
      answer: 'Yes, we assess how your application consumes third-party APIs, validating input sanitization, error handling, and trust boundaries. We test for unsafe consumption patterns, data validation issues, and potential supply chain attacks. We also evaluate API key management and secure storage of third-party credentials.'
    },
    {
      question: 'What is broken object-level authorization and why is it critical?',
      answer: 'Broken object-level authorization (BOLA) is the #1 API security risk. It occurs when APIs fail to validate that users can only access their own data. For example, changing a user ID in an API request to access another user\'s records. We test every endpoint for BOLA vulnerabilities using automated fuzzing and manual validation techniques.'
    },
    {
      question: 'How long does API security testing take?',
      answer: 'Timeline depends on API complexity and endpoint count. A typical REST API with 50-100 endpoints takes 2-3 weeks for comprehensive testing. GraphQL APIs may take longer due to complex query combinations. We provide detailed scoping after reviewing your API documentation and can prioritize critical endpoints for faster initial results.'
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
<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-orange-600 via-orange-600 to-orange-700 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
    <div
      className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: '1s' }}
    />
  </div>

  <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">

      {/* Top Row */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium cursor-pointer transition-colors"
        >
          <i className="ri-arrow-left-line"></i>
          Back to Services
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
          <i className="ri-shield-check-line"></i>
          Security Testing
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
        API Security Testing
      </h1>

      <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
        Comprehensive security testing for REST, GraphQL, SOAP, and microservices APIs. Protect your API endpoints from authentication bypass, data exposure, and business logic attacks.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
        >
          Secure Your APIs
          <i className="ri-arrow-right-line"></i>
        </a>

        <a
          href="#methodology"
          className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
        >
          See Our Methodology
        </a>
      </div>

    </div>
  </div>
</section>

      {/* OWASP API Top 10 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">OWASP API Security Top 10</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Critical API Security Risks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We test your APIs against all OWASP API Security Top 10 vulnerabilities.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {owaspAPITop10.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg flex-shrink-0">
                      <i className={`${item.icon} text-xl text-orange-500`}></i>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.impact === 'Critical' ? 'bg-orange-100 text-orange-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.impact}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-orange-500">{item.rank}</span>
                    <h3 className="font-bold text-gray-900">{item.vulnerability}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <p className="text-xs text-gray-700"><strong>Example:</strong> {item.example}</p>
                  </div>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why API Security Testing Matters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized testing for the unique security challenges of modern APIs.</p>
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

      {/* Testing Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Testing Coverage</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive API Security Assessment</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We test all critical aspects of API security.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testingAreas.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-xl mb-4">
                    <i className={`${item.icon} text-xl text-orange-500`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.area}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.tests.map((test, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                        <i className="ri-checkbox-circle-fill text-orange-500 text-xs"></i>
                        <span>{test}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">API Types</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">We Test All API Architectures</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized testing for every API type and protocol.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {apiTypes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.type}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Technology Stack</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry-Leading API Testing Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We use specialized tools for comprehensive API security testing.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg mx-auto mb-3">
                    <i className={`${tool.logo} text-xl text-orange-500`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-16 lg:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Methodology</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Test API Security</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to identifying API vulnerabilities.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-xl">
                      <i className={`${item.icon} text-xl text-orange-500`}></i>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{item.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.step}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Secure Your APIs Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Protect your API endpoints from authentication bypass, data exposure, and business logic attacks. Schedule a consultation to discuss your API security needs.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                Get API Security Test
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
