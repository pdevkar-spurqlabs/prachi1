import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const StoriesPage = lazy(() => import('../pages/stories/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// Test Automation Pages
const WebAutomationPage = lazy(() => import('../pages/services/web-automation/page'));
const MobileAutomationPage = lazy(() => import('../pages/services/mobile-automation/page'));
const DesktopAutomationPage = lazy(() => import('../pages/services/desktop-automation/page'));
const IoTAutomationPage = lazy(() => import('../pages/services/iot-automation/page'));
const APIAutomationPage = lazy(() => import('../pages/services/api-automation/page'));
const DatabaseAutomationPage = lazy(() => import('../pages/services/database-automation/page'));

// Performance Testing Pages
const LoadTestingPage = lazy(() => import('../pages/services/load-testing/page'));
const StressTestingPage = lazy(() => import('../pages/services/stress-testing/page'));
const ScalabilityTestingPage = lazy(() => import('../pages/services/scalability-testing/page'));
const EnduranceTestingPage = lazy(() => import('../pages/services/endurance-testing/page'));
const SpikeTestingPage = lazy(() => import('../pages/services/spike-testing/page'));

// Security Testing Pages
const PenetrationTestingPage = lazy(() => import('../pages/services/penetration-testing/page'));
const VulnerabilityAssessmentPage = lazy(() => import('../pages/services/vulnerability-assessment/page'));
const OWASPCompliancePage = lazy(() => import('../pages/services/owasp-compliance/page'));
const APISecurityTestingPage = lazy(() => import('../pages/services/api-security-testing/page'));
const ComplianceAuditsPage = lazy(() => import('../pages/services/compliance-audits/page'));

// Manual Testing Pages
const ExploratoryTestingPage = lazy(() => import('../pages/services/exploratory-testing/page'));
const UsabilityTestingPage = lazy(() => import('../pages/services/usability-testing/page'));
const AccessibilityTestingPage = lazy(() => import('../pages/services/accessibility-testing/page'));
const LocalizationTestingPage = lazy(() => import('../pages/services/localization-testing/page'));
const RegressionTestingPage = lazy(() => import('../pages/services/regression-testing/page'));

const PrivacyPolicyPage = lazy(() => import('../pages/privacy-policy/page'));
const TermsOfServicePage = lazy(() => import('../pages/terms-of-service/page'));
const CareersPage = lazy(() => import('../pages/careers/page'));
const LifeAtSpurQLabsPage = lazy(() => import('../pages/insights/life-at-spurqlabs/page'));
const CaseStudiesPage = lazy(() => import('../pages/insights/case-studies/page'));
const PodcastPage = lazy(() => import('../pages/insights/podcast/page'));
const EventsWebinarsPage = lazy(() => import('../pages/insights/events-webinars/page'));
const InfographicsPage = lazy(() => import('../pages/insights/infographics/page'));
const NewsletterPage = lazy(() => import('../pages/insights/newsletter/page'));
const BlogsPage = lazy(() => import('../pages/insights/blogs/page'));
const BlogDetailPage = lazy(() => import('../pages/insights/blogs/detail/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/stories',
    element: <StoriesPage />,
  },
  // Test Automation Routes
  {
    path: '/services/web-automation',
    element: <WebAutomationPage />,
  },
  {
    path: '/services/mobile-automation',
    element: <MobileAutomationPage />,
  },
  {
    path: '/services/desktop-automation',
    element: <DesktopAutomationPage />,
  },
  {
    path: '/services/iot-automation',
    element: <IoTAutomationPage />,
  },
  {
    path: '/services/api-automation',
    element: <APIAutomationPage />,
  },
  {
    path: '/services/database-automation',
    element: <DatabaseAutomationPage />,
  },
  // Performance Testing Routes
  {
    path: '/services/load-testing',
    element: <LoadTestingPage />,
  },
  {
    path: '/services/stress-testing',
    element: <StressTestingPage />,
  },
  {
    path: '/services/scalability-testing',
    element: <ScalabilityTestingPage />,
  },
  {
    path: '/services/endurance-testing',
    element: <EnduranceTestingPage />,
  },
  {
    path: '/services/spike-testing',
    element: <SpikeTestingPage />,
  },
  // Security Testing Routes
  {
    path: '/services/penetration-testing',
    element: <PenetrationTestingPage />,
  },
  {
    path: '/services/vulnerability-assessment',
    element: <VulnerabilityAssessmentPage />,
  },
  {
    path: '/services/owasp-compliance',
    element: <OWASPCompliancePage />,
  },
  {
    path: '/services/api-security-testing',
    element: <APISecurityTestingPage />,
  },
  {
    path: '/services/compliance-audits',
    element: <ComplianceAuditsPage />,
  },
  // Manual Testing Routes
  {
    path: '/services/exploratory-testing',
    element: <ExploratoryTestingPage />,
  },
  {
    path: '/services/usability-testing',
    element: <UsabilityTestingPage />,
  },
  {
    path: '/services/accessibility-testing',
    element: <AccessibilityTestingPage />,
  },
  {
    path: '/services/localization-testing',
    element: <LocalizationTestingPage />,
  },
  {
    path: '/services/regression-testing',
    element: <RegressionTestingPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfServicePage />,
  },
  {
    path: '/careers',
    element: <CareersPage />,
  },
  {
    path: '/insights/life-at-spurqlabs',
    element: <LifeAtSpurQLabsPage />,
  },
  {
    path: '/insights/case-studies',
    element: <CaseStudiesPage />,
  },
  {
    path: '/insights/podcast',
    element: <PodcastPage />,
  },
  {
    path: '/insights/events-webinars',
    element: <EventsWebinarsPage />,
  },
  {
    path: '/insights/infographics',
    element: <InfographicsPage />,
  },
  {
    path: '/insights/newsletter',
    element: <NewsletterPage />,
  },
  {
    path: '/insights/blogs',
    element: <BlogsPage />,
  },
  {
    path: '/insights/blogs/:slug',
    element: <BlogDetailPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
