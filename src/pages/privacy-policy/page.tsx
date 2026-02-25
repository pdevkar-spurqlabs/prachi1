
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../home/components/Footer';

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    icon: 'ri-folder-info-line',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you engage with SpurQLabs, we may collect personal information that you voluntarily provide, including your name, email address, phone number, company name, job title, and billing information. This information is collected when you fill out contact forms, request a consultation, subscribe to our newsletter, or enter into a service agreement with us.'
      },
      {
        subtitle: 'Technical Information',
        text: 'We automatically collect certain technical data when you visit our website, including your IP address, browser type and version, operating system, referring URLs, pages visited, time spent on pages, and other diagnostic data. This information helps us improve our website performance and user experience.'
      },
      {
        subtitle: 'Cookies & Tracking',
        text: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted).'
      }
    ]
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    icon: 'ri-settings-3-line',
    content: [
      {
        subtitle: 'Service Delivery',
        text: 'We use your personal information to deliver the QA and testing services you have requested, communicate with you about project progress, send invoices and process payments, and provide customer support. Your data enables us to tailor our services to your specific needs and maintain the quality standards you expect.'
      },
      {
        subtitle: 'Communication',
        text: 'With your consent, we may send you marketing communications about our services, industry insights, case studies, and company updates. You can opt out of marketing emails at any time by clicking the unsubscribe link in any email or contacting us directly.'
      },
      {
        subtitle: 'Analytics & Improvement',
        text: 'We analyze aggregated and anonymized data to understand how our website and services are used, identify trends, measure the effectiveness of our marketing campaigns, and continuously improve our offerings. This data is never used to personally identify individual users.'
      }
    ]
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing & Disclosure',
    icon: 'ri-share-line',
    content: [
      {
        subtitle: 'Third-Party Service Providers',
        text: 'We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These providers include cloud hosting services, payment processors, email service providers, and analytics platforms. All third parties are contractually obligated to keep your information confidential and use it only for the purposes we specify.'
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency). We may also disclose information to protect our rights, privacy, safety, or property, and that of our clients and the public.'
      },
      {
        subtitle: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.'
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: 'ri-shield-check-line',
    content: [
      {
        subtitle: 'Security Measures',
        text: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include SSL/TLS encryption for data in transit, AES-256 encryption for data at rest, regular security audits and vulnerability assessments, access controls and authentication protocols, and employee security training programs.'
      },
      {
        subtitle: 'Incident Response',
        text: 'In the unlikely event of a data breach, we have established incident response procedures to promptly identify, contain, and remediate the breach. We will notify affected individuals and relevant authorities in accordance with applicable laws and regulations within 72 hours of becoming aware of the breach.'
      }
    ]
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    icon: 'ri-user-settings-line',
    content: [
      {
        subtitle: 'Access & Portability',
        text: 'You have the right to request a copy of the personal information we hold about you. We will provide this information in a structured, commonly used, and machine-readable format within 30 days of your request.'
      },
      {
        subtitle: 'Correction & Deletion',
        text: 'You may request that we correct any inaccurate personal information or delete your personal data. We will comply with such requests unless we have a legitimate legal basis to retain the information, such as ongoing contractual obligations or legal compliance requirements.'
      },
      {
        subtitle: 'Opt-Out',
        text: 'You have the right to opt out of marketing communications at any time. You may also request that we stop processing your personal data for direct marketing purposes. To exercise any of these rights, please contact us at privacy@spurqlabs.com.'
      }
    ]
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    icon: 'ri-time-line',
    content: [
      {
        subtitle: 'Retention Periods',
        text: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Client project data is retained for 3 years after project completion. Marketing contact data is retained until you unsubscribe. Website analytics data is retained for 26 months.'
      }
    ]
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    icon: 'ri-global-line',
    content: [
      {
        subtitle: 'Cross-Border Transfers',
        text: 'As SpurQLabs operates globally with offices in the US, UK, and India, your personal information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by relevant authorities, to protect your data during international transfers.'
      }
    ]
  },
  {
    id: 'updates',
    title: 'Policy Updates',
    icon: 'ri-refresh-line',
    content: [
      {
        subtitle: 'Changes to This Policy',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically for the latest information on our privacy practices.'
      }
    ]
  }
];

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('information-we-collect');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
              <Link to="/#services" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Services</Link>
              <Link to="/#how-we-work" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">How We Work</Link>
              <Link to="/stories" className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500">Stories</Link>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md shadow-orange-500/20 whitespace-nowrap cursor-pointer">Book a Call</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer text-gray-700 hover:bg-gray-100" aria-label="Toggle menu">
                <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-1 bg-white border-t border-gray-100">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">About</Link>
            <Link to="/#services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Services</Link>
            <Link to="/#how-we-work" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">How We Work</Link>
            <Link to="/stories" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100">Stories</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-shield-check-line text-orange-400"></i>
              </div>
              <span className="text-sm text-gray-300 font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Privacy <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              At SpurQLabs, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
            <p className="text-sm text-gray-500 mt-6">Last Updated: January 15, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-10">
              {/* Sidebar Navigation */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-28">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">On This Page</p>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left cursor-pointer ${
                          activeSection === section.id
                            ? 'bg-orange-50 text-orange-600 border-l-2 border-orange-500'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className={`${section.icon} text-base`}></i>
                        </div>
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <main className="lg:col-span-3 space-y-12">
                {sections.map((section) => (
                  <article key={section.id} id={section.id} className="scroll-mt-28">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-xl">
                        <i className={`${section.icon} text-xl text-orange-500`}></i>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <div className="space-y-6">
                      {section.content.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <h3 className="text-base font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}

                {/* Contact */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm shrink-0">
                      <i className="ri-mail-send-line text-2xl text-orange-500"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Questions About Your Privacy?</h3>
                      <p className="text-sm text-gray-600 mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please don’t hesitate to reach out.</p>
                      <a href="mailto:privacy@spurqlabs.com" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors cursor-pointer">
                        privacy@spurqlabs.com
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
