
import { useState, useEffect, useRef } from 'react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  tags: string[];
}

const positions: JobPosition[] = [
  {
    id: 'sr-sdet',
    title: 'Senior SDET (Test Automation)',
    department: 'Test Automation',
    location: 'Remote / Pune, India',
    type: 'Full-time',
    experience: '5-8 years',
    postedDate: '2 days ago',
    description:
      'We are looking for a Senior SDET to design and implement scalable test automation frameworks for our enterprise clients. You will lead automation strategy and mentor junior engineers.',
    responsibilities: [
      'Design and develop robust test automation frameworks using Selenium, Cypress, or Playwright',
      'Create and maintain CI/CD pipelines for automated test execution',
      'Collaborate with development teams to define test strategies for new features',
      'Mentor junior QA engineers and conduct code reviews',
      'Analyze test results and provide actionable insights to stakeholders',
    ],
    requirements: [
      '5+ years of experience in test automation with Java, Python, or JavaScript',
      'Strong expertise in Selenium WebDriver, Cypress, or Playwright',
      'Experience with CI/CD tools like Jenkins, GitHub Actions, or Azure DevOps',
      'Solid understanding of REST API testing and tools like Postman or RestAssured',
      'ISTQB or equivalent certification preferred',
    ],
    niceToHave: [
      'Experience with performance testing tools (JMeter, K6, Gatling)',
      'Knowledge of Docker and Kubernetes',
      'Familiarity with AI/ML-based testing approaches',
    ],
    tags: ['Selenium', 'Cypress', 'CI/CD', 'Java', 'Python'],
  },
  {
    id: 'perf-engineer',
    title: 'Performance Test Engineer',
    department: 'Performance Testing',
    location: 'Remote / Frisco, TX',
    type: 'Full-time',
    experience: '3-6 years',
    postedDate: '5 days ago',
    description:
      'Join our performance engineering team to help clients ensure their applications can handle real-world traffic at scale. You will design and execute load, stress, and scalability tests.',
    responsibilities: [
      'Design and execute performance test plans including load, stress, and endurance tests',
      'Use tools like JMeter, K6, Gatling, or Locust to simulate real-world traffic patterns',
      'Analyze performance bottlenecks and provide optimization recommendations',
      'Set up performance monitoring dashboards using Grafana and Prometheus',
      'Collaborate with DevOps teams to integrate performance testing into CI/CD pipelines',
    ],
    requirements: [
      '3+ years of hands-on experience in performance testing',
      'Proficiency with JMeter, K6, Gatling, or similar tools',
      'Strong understanding of server-side technologies and database performance',
      'Experience with APM tools like New Relic, Dynatrace, or AppDynamics',
      'Excellent analytical and problem-solving skills',
    ],
    niceToHave: [
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Knowledge of containerization and microservices architecture',
      'Scripting skills in Python or JavaScript',
    ],
    tags: ['JMeter', 'K6', 'Grafana', 'AWS', 'Performance'],
  },
  {
    id: 'security-analyst',
    title: 'Security Test Analyst',
    department: 'Security Testing',
    location: 'Remote / Chelmsford, UK',
    type: 'Full-time',
    experience: '4-7 years',
    postedDate: '1 week ago',
    description:
      'We need a skilled Security Test Analyst to conduct penetration testing, vulnerability assessments, and security audits for our clients across fintech, healthcare, and enterprise sectors.',
    responsibilities: [
      'Conduct penetration testing on web applications, APIs, and mobile apps',
      'Perform vulnerability assessments and security code reviews',
      'Create detailed security reports with risk ratings and remediation guidance',
      'Stay updated on OWASP Top 10, CVEs, and emerging security threats',
      'Collaborate with development teams to implement security best practices',
    ],
    requirements: [
      '4+ years of experience in application security testing',
      'Hands-on experience with tools like Burp Suite, OWASP ZAP, Nessus, or Metasploit',
      'Strong knowledge of OWASP Top 10 and common vulnerability patterns',
      'Experience with compliance frameworks (SOC 2, HIPAA, PCI-DSS)',
      'CEH, OSCP, or equivalent security certification',
    ],
    niceToHave: [
      'Experience with DevSecOps practices',
      'Knowledge of cloud security (AWS Security Hub, Azure Security Center)',
      'Bug bounty program experience',
    ],
    tags: ['Penetration Testing', 'OWASP', 'Burp Suite', 'Security'],
  },
  {
    id: 'qa-lead',
    title: 'QA Lead / Test Manager',
    department: 'Consulting & Advisory',
    location: 'Remote / Pune, India',
    type: 'Full-time',
    experience: '8-12 years',
    postedDate: '3 days ago',
    description:
      'Lead QA engagements for our enterprise clients. You will define test strategies, manage QA teams, and serve as the primary quality advisor for complex software projects.',
    responsibilities: [
      'Define and implement comprehensive test strategies for client projects',
      'Manage and mentor a team of 5-15 QA engineers',
      'Serve as the primary point of contact for client stakeholders on quality matters',
      'Establish quality metrics, KPIs, and reporting dashboards',
      'Drive continuous improvement in testing processes and methodologies',
    ],
    requirements: [
      '8+ years of experience in software testing with 3+ years in a leadership role',
      'Proven track record of managing QA teams and delivering complex projects',
      'Strong knowledge of Agile/Scrum methodologies and test management tools',
      'Excellent communication and stakeholder management skills',
      'ISTQB Advanced Level or equivalent certification',
    ],
    niceToHave: [
      'Experience in consulting or advisory roles',
      'PMP or Scrum Master certification',
      'Domain expertise in fintech, healthcare, or e-commerce',
    ],
    tags: ['Leadership', 'Strategy', 'Agile', 'Consulting'],
  },
  {
    id: 'mobile-qa',
    title: 'Mobile QA Engineer',
    department: 'Test Automation',
    location: 'Remote / Pune, India',
    type: 'Full-time',
    experience: '2-5 years',
    postedDate: '4 days ago',
    description:
      "Test mobile applications across iOS and Android platforms. You will work with tools like Appium, XCUITest, and Espresso to ensure flawless mobile experiences for our clients' users.",
    responsibilities: [
      'Design and execute test cases for iOS and Android applications',
      'Build and maintain mobile test automation frameworks using Appium or native tools',
      'Perform device compatibility testing across 100+ device configurations',
      'Test mobile-specific scenarios including gestures, notifications, and offline mode',
      'Collaborate with mobile developers to identify and resolve issues early',
    ],
    requirements: [
      '2+ years of experience in mobile application testing',
      'Hands-on experience with Appium, XCUITest, or Espresso',
      'Understanding of mobile app architectures (native, hybrid, cross-platform)',
      'Experience with device farms like BrowserStack or Sauce Labs',
      'Strong attention to detail and user experience sensibility',
    ],
    niceToHave: [
      'Experience with Flutter or React Native testing',
      'Knowledge of accessibility testing on mobile platforms',
      'Charles Proxy or similar network debugging tool experience',
    ],
    tags: ['Appium', 'iOS', 'Android', 'Mobile Testing'],
  },
  {
    id: 'junior-qa',
    title: 'Junior QA Engineer',
    department: 'Manual Testing',
    location: 'Pune, India',
    type: 'Full-time',
    experience: '0-2 years',
    postedDate: '1 day ago',
    description:
      'Start your QA career with SpurQLabs! We are looking for enthusiastic freshers or early-career professionals who are passionate about software quality and eager to learn.',
    responsibilities: [
      'Execute manual test cases and report defects with clear documentation',
      'Participate in test planning and test case design sessions',
      'Learn and apply various testing techniques (boundary value, equivalence partitioning)',
      'Assist in regression testing and smoke testing activities',
      'Collaborate with senior QA engineers to learn automation basics',
    ],
    requirements: [
      "Bachelor's degree in Computer Science, IT, or related field",
      'Basic understanding of software testing concepts and SDLC',
      'Familiarity with bug tracking tools like Jira or Bugzilla',
      'Strong analytical thinking and attention to detail',
      'Excellent written and verbal communication skills',
    ],
    niceToHave: [
      'ISTQB Foundation Level certification',
      'Basic knowledge of SQL and API testing',
      'Any programming language experience (Java, Python, JavaScript)',
    ],
    tags: ['Manual Testing', 'Entry Level', 'SDLC', 'Jira'],
  },
];

const departments = [
  'All',
  'Test Automation',
  'Performance Testing',
  'Security Testing',
  'Consulting & Advisory',
  'Manual Testing',
];

interface OpenPositionsProps {
  onApply: (job: JobPosition) => void;
}

export default function OpenPositions({ onApply }: OpenPositionsProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to trigger fade‑in animation once the component scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredPositions =
    activeFilter === 'All'
      ? positions
      : positions.filter((p) => p.department === activeFilter);

  return (
    <section
      id="open-positions"
      className="py-16 lg:py-24"
      ref={sectionRef}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
  className={`text-center -mt-4 mb-12 lg:mb-16 transition-all duration-700 ${
    visible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8'
  }`}
>
  <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
    Current Openings
  </p>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
    Find Your Next Role
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    Explore our open positions across various QA specializations.
    Can&apos;t find the right fit? Submit your resume for future
    opportunities.
  </p>
</div>

          {/* Department Filters */}
          <div
            className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === dept
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500 border border-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredPositions.map((job, index) => (
              <div
                key={job.id}
                className={`bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-500 overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Header (clickable) */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() =>
                    setExpandedJob(expandedJob === job.id ? null : job.id)
                  }
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {job.title}
                        </h3>
                        <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full whitespace-nowrap">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-building-line text-sm"></i>
                          </span>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-map-pin-line text-sm"></i>
                          </span>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-time-line text-sm"></i>
                          </span>
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-calendar-line text-sm"></i>
                          </span>
                          {job.postedDate}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {job.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i
                          className={`ri-arrow-down-s-line text-xl text-gray-400 transition-transform duration-300 ${
                            expandedJob === job.id ? 'rotate-180' : ''
                          }`}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedJob === job.id
                      ? 'max-h-[2000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {job.description}
                    </p>

                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 flex items-center justify-center bg-orange-100 rounded-md">
                            <i className="ri-list-check-2 text-sm text-orange-500"></i>
                          </span>
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i className="ri-checkbox-circle-line text-orange-400 text-sm"></i>
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 flex items-center justify-center bg-orange-100 rounded-md">
                            <i className="ri-shield-star-line text-sm text-orange-500"></i>
                          </span>
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i className="ri-checkbox-circle-line text-orange-400 text-sm"></i>
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Nice to Have */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 flex items-center justify-center bg-amber-100 rounded-md">
                            <i className="ri-star-line text-sm text-amber-500"></i>
                          </span>
                          Nice to Have
                        </h4>
                        <ul className="space-y-2">
                          {job.niceToHave.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i className="ri-add-circle-line text-amber-400 text-sm"></i>
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onApply(job);
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer whitespace-nowrap"
                    >
                      Apply for This Position
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredPositions.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                <i className="ri-search-line text-2xl text-gray-400"></i>
              </div>
              <p className="text-gray-500 text-lg font-medium">
                No positions found in this department
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try a different filter or submit your resume for future openings
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
