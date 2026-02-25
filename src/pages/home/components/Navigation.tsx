
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const insightsSubMenus = [
  { label: 'Case Studies', href: '/insights/case-studies', icon: 'ri-file-search-line' },
  { label: 'Blogs', href: '/insights/blogs', icon: 'ri-article-line' },
  { label: 'Podcast', href: '/insights/podcast', icon: 'ri-mic-line' },
  { label: 'Events & Webinars', href: '/insights/events-webinars', icon: 'ri-calendar-event-line' },
  { label: 'Infographics', href: '/insights/infographics', icon: 'ri-bar-chart-box-line' },
  { label: 'Newsletter', href: '/insights/newsletter', icon: 'ri-mail-open-line' },
  { label: 'Life at SpurQLabs', href: '/insights/life-at-spurqlabs', icon: 'ri-heart-pulse-line' },
];

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
  const insightsRef = useRef<HTMLDivElement>(null);
  const insightsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isInsightsActive = location.pathname.startsWith('/insights');

  useEffect(() => {
    setMobileMenuOpen(false);
    setInsightsOpen(false);
    setMobileInsightsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (insightsRef.current && !insightsRef.current.contains(event.target as Node)) {
        setInsightsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInsightsEnter = () => {
    if (insightsTimeoutRef.current) {
      clearTimeout(insightsTimeoutRef.current);
      insightsTimeoutRef.current = null;
    }
    setInsightsOpen(true);
  };

  const handleInsightsLeave = () => {
    insightsTimeoutRef.current = setTimeout(() => {
      setInsightsOpen(false);
    }, 200);
  };

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Stories', href: '/stories' },
  ];

  return (
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Insights Dropdown */}
            <div
              ref={insightsRef}
              className="relative"
              onMouseEnter={handleInsightsEnter}
              onMouseLeave={handleInsightsLeave}
            >
              <button
                className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  isInsightsActive ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
                onClick={() => setInsightsOpen(!insightsOpen)}
              >
                Insights
                <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${insightsOpen ? 'rotate-180' : ''}`}></i>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  insightsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                  {insightsSubMenus.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                        location.pathname === item.href
                          ? 'text-orange-500 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/50'
                      }`}
                    >
                      <span className="w-5 h-5 flex items-center justify-center">
                        <i className={`${item.icon} text-base`}></i>
                      </span>
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/careers"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                location.pathname === '/careers' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Careers
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-orange-400/30 whitespace-nowrap cursor-pointer"
            >
              Book a Call
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <i
                className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                  ? 'text-orange-500 bg-orange-50'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Insights Accordion */}
          <div>
            <button
              onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                isInsightsActive ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>Insights</span>
              <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 ${mobileInsightsOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileInsightsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-4 py-1 space-y-0.5">
                {insightsSubMenus.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${
                      location.pathname === item.href
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      <i className={`${item.icon} text-base`}></i>
                    </span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
              location.pathname === '/careers' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Careers
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
