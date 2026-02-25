
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../home/components/Footer';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    icon: 'ri-checkbox-circle-line',
    content: [
      {
        subtitle: 'Agreement to Terms',
        text: 'By accessing or using SpurQLabs\u2019 website, services, or any associated platforms, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services. These terms apply to all visitors, users, clients, and others who access or use our services.'
      },
      {
        subtitle: 'Eligibility',
        text: 'You must be at least 18 years of age and have the legal authority to enter into binding agreements to use our services. By using our services, you represent and warrant that you meet these eligibility requirements. If you are using our services on behalf of a company or organization, you represent that you have the authority to bind that entity to these terms.'
      }
    ]
  },
  {
    id: 'services-description',
    title: 'Description of Services',
    icon: 'ri-service-line',
    content: [
      {
        subtitle: 'QA & Testing Services',
        text: 'SpurQLabs provides software quality assurance and testing services including, but not limited to, test automation, performance testing, security testing, manual testing, specialized testing, DevOps integration, and consulting and advisory services. The specific scope, deliverables, and timelines for each engagement are defined in individual Statements of Work (SOW) or service agreements executed between SpurQLabs and the client.'
      },
      {
        subtitle: 'Service Modifications',
        text: 'SpurQLabs reserves the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We will make reasonable efforts to notify clients of any material changes that may affect ongoing engagements. Continued use of our services after such modifications constitutes your acceptance of the updated terms.'
      }
    ]
  },
  {
    id: 'client-obligations',
    title: 'Client Obligations',
    icon: 'ri-user-star-line',
    content: [
      {
        subtitle: 'Access & Cooperation',
        text: 'Clients agree to provide SpurQLabs with timely access to necessary systems, environments, documentation, and personnel required for the successful delivery of services. Delays in providing access or information may impact project timelines and deliverables. Clients are responsible for ensuring that all access credentials and environments provided are properly configured and available.'
      },
      {
        subtitle: 'Accurate Information',
        text: 'Clients are responsible for providing accurate and complete information regarding their testing requirements, technical specifications, and business objectives. SpurQLabs shall not be held liable for any issues arising from inaccurate or incomplete information provided by the client.'
      },
      {
        subtitle: 'Acceptable Use',
        text: 'You agree not to use our services for any unlawful purpose, to violate any applicable laws or regulations, to infringe upon the intellectual property rights of others, to transmit malicious code or attempt to gain unauthorized access to our systems, or to interfere with the proper functioning of our services.'
      }
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    icon: 'ri-copyright-line',
    content: [
      {
        subtitle: 'SpurQLabs IP',
        text: 'All intellectual property rights in our website, branding, proprietary tools, frameworks, methodologies, and pre-existing materials remain the exclusive property of SpurQLabs. Nothing in these terms grants you any right, title, or interest in our intellectual property except as expressly stated in a written agreement.'
      },
      {
        subtitle: 'Client IP',
        text: 'All intellectual property rights in the client\u2019s software, applications, and proprietary materials remain the exclusive property of the client. SpurQLabs will not use, disclose, or retain client intellectual property beyond what is necessary for the delivery of contracted services.'
      },
      {
        subtitle: 'Work Product',
        text: 'Unless otherwise specified in a Statement of Work, all test scripts, automation frameworks, test plans, and other deliverables created specifically for a client engagement shall be owned by the client upon full payment. SpurQLabs retains the right to use general knowledge, skills, and experience gained during engagements for future work.'
      }
    ]
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    icon: 'ri-lock-line',
    content: [
      {
        subtitle: 'Confidential Information',
        text: 'Both parties agree to maintain the confidentiality of all proprietary and confidential information disclosed during the course of the engagement. Confidential information includes, but is not limited to, source code, business strategies, customer data, technical specifications, pricing information, and any information marked as confidential.'
      },
      {
        subtitle: 'Non-Disclosure',
        text: 'Neither party shall disclose confidential information to any third party without the prior written consent of the disclosing party, except as required by law or to employees and contractors who need to know such information for the performance of services and who are bound by similar confidentiality obligations. This obligation survives the termination of any agreement for a period of 3 years.'
      }
    ]
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms',
    icon: 'ri-money-dollar-circle-line',
    content: [
      {
        subtitle: 'Fees & Invoicing',
        text: 'Service fees are as specified in the applicable Statement of Work or service agreement. Unless otherwise agreed, invoices are issued monthly and are due within 30 days of the invoice date. All fees are quoted in USD unless otherwise specified. Fees do not include applicable taxes, which are the responsibility of the client.'
      },
      {
        subtitle: 'Late Payments',
        text: 'Late payments may incur interest at a rate of 1.5% per month or the maximum rate permitted by law, whichever is lower. SpurQLabs reserves the right to suspend services if payment is overdue by more than 30 days. The client shall be responsible for all costs of collection, including reasonable attorney\u2019s fees.'
      }
    ]
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    icon: 'ri-error-warning-line',
    content: [
      {
        subtitle: 'Liability Cap',
        text: 'To the maximum extent permitted by applicable law, SpurQLabs\u2019 total liability for any claims arising out of or related to these terms or our services shall not exceed the total fees paid by the client to SpurQLabs during the 12-month period immediately preceding the event giving rise to the claim.'
      },
      {
        subtitle: 'Exclusions',
        text: 'In no event shall SpurQLabs be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, regardless of whether such damages were foreseeable or whether SpurQLabs was advised of the possibility of such damages.'
      },
      {
        subtitle: 'No Guarantee of Bug-Free Software',
        text: 'While SpurQLabs strives to identify and report all defects within the agreed scope, we do not guarantee that all bugs or vulnerabilities will be found. Software testing inherently involves limitations, and the absence of reported defects does not imply the absence of defects.'
      }
    ]
  },
  {
    id: 'termination',
    title: 'Termination',
    icon: 'ri-close-circle-line',
    content: [
      {
        subtitle: 'Termination by Either Party',
        text: 'Either party may terminate a service engagement by providing 30 days\u2019 written notice to the other party. Upon termination, the client shall pay for all services rendered up to the effective date of termination. SpurQLabs will deliver all completed work product and assist with a reasonable transition period.'
      },
      {
        subtitle: 'Termination for Cause',
        text: 'Either party may terminate immediately upon written notice if the other party materially breaches these terms and fails to cure such breach within 15 days of receiving written notice of the breach. Material breaches include, but are not limited to, non-payment, violation of confidentiality obligations, and unauthorized use of intellectual property.'
      }
    ]
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Disputes',
    icon: 'ri-scales-3-line',
    content: [
      {
        subtitle: 'Governing Law',
        text: 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these terms shall be brought exclusively in the federal or state courts located in Collin County, Texas.'
      },
      {
        subtitle: 'Dispute Resolution',
        text: 'Before initiating any legal proceedings, both parties agree to attempt to resolve disputes through good-faith negotiation for a period of 30 days. If the dispute cannot be resolved through negotiation, either party may pursue mediation or binding arbitration in accordance with the rules of the American Arbitration Association.'
      }
    ]
  },
  {
    id: 'general-provisions',
    title: 'General Provisions',
    icon: 'ri-file-list-3-line',
    content: [
      {
        subtitle: 'Entire Agreement',
        text: 'These Terms of Service, together with any applicable Statements of Work and service agreements, constitute the entire agreement between you and SpurQLabs regarding the use of our services. Any prior agreements, representations, or understandings are superseded by these terms.'
      },
      {
        subtitle: 'Severability',
        text: 'If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions shall remain in full force and effect.'
      },
      {
        subtitle: 'Amendments',
        text: 'SpurQLabs reserves the right to update or modify these Terms of Service at any time. Material changes will be communicated via email or a prominent notice on our website at least 30 days before they take effect. Your continued use of our services after such changes constitutes acceptance of the updated terms.'
      }
    ]
  }
];

export default function TermsOfServicePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('acceptance');

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
              <img
                src="https://static.readdy.ai/image/cdee2fbcd80bfdec9cf50d230218aedf/6ff8a31bd7fff894feba2270c48bbbe9.webp"
                alt="SpurQLabs"
                className="h-8 lg:h-10 w-auto"
              />
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/about"
                className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500"
              >
                About
              </Link>
              <Link
                to="/#services"
                className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500"
              >
                Services
              </Link>
              <Link
                to="/#how-we-work"
                className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500"
              >
                How We Work
              </Link>
              <Link
                to="/stories"
                className="text-sm font-medium transition-colors cursor-pointer text-gray-700 hover:text-orange-500"
              >
                Stories
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md shadow-orange-500/20 whitespace-nowrap cursor-pointer"
              >
                Book a Call
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer text-gray-700 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-1 bg-white border-t border-gray-100">
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              to="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              to="/#how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              How We Work
            </Link>
            <Link
              to="/stories"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              Stories
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-file-text-line text-orange-400"></i>
              </div>
              <span className="text-sm text-gray-300 font-medium">Legal Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Terms of{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              These terms govern your use of SpurQLabs\u2019 services and website. Please read them
              carefully before engaging with us.
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
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    On This Page
                  </p>
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
                        <span className="truncate">{section.title}</span>
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
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                        >
                          <h3 className="text-base font-semibold text-gray-900 mb-3">
                            {item.subtitle}
                          </h3>
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
                      <i className="ri-question-answer-line text-2xl text-orange-500"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Have Questions About These Terms?
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        If you need clarification on any of these terms or have specific questions
                        about your engagement, our legal team is here to help.
                      </p>
                      <a
                        href="mailto:legal@spurqlabs.com"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors cursor-pointer"
                      >
                        legal@spurqlabs.com
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
