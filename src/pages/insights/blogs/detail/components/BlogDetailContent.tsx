
import { useState, useEffect } from 'react';

interface BlogDetailContentProps {
  content: string;
  title: string;
}

export default function BlogDetailContent({ content, title }: BlogDetailContentProps) {
  const [activeSection, setActiveSection] = useState(0);

  const paragraphs = content.split('\n\n');

  const sections = paragraphs.map((para, i) => {
    const firstSentence = para.split(/[.!?]/)[0].trim();
    const heading = firstSentence.length > 60 ? firstSentence.substring(0, 57) + '...' : firstSentence;
    return {
      id: `section-${i}`,
      heading,
      content: para,
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      let current = 0;
      sectionElements.forEach((el, i) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) current = i;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-10 lg:gap-12">
      {/* Table of Contents - Sticky Sidebar */}
      <aside className="hidden lg:block w-[220px] flex-shrink-0">
        <div className="sticky top-28">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">Table of Contents</p>
            <nav className="space-y-1">
              {sections.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs leading-snug transition-all duration-300 cursor-pointer ${
                    activeSection === i
                      ? 'text-orange-600 bg-orange-50 font-semibold border-l-2 border-orange-500'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section.heading}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Article Content */}
      <article className="flex-1 min-w-0">
        <div>
          {sections.map((section, i) => (
            <div key={section.id} id={section.id} className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-[11px] font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {section.heading}
              </h2>
              <p className="text-gray-600 text-[15px] leading-[1.85] pl-8">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="mt-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 lg:p-8 border border-orange-100">
          <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center text-orange-500">
              <i className="ri-lightbulb-line text-lg" />
            </span>
            Key Takeaways
          </h3>
          <ul className="space-y-3">
            {sections.slice(0, 4).map((section, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white text-[10px] font-bold flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-xs" />
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">{section.heading}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Share & Tags */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Share this article</p>
              <div className="flex items-center gap-2">
                {[
                  { icon: 'ri-twitter-x-fill', label: 'Twitter' },
                  { icon: 'ri-linkedin-fill', label: 'LinkedIn' },
                  { icon: 'ri-facebook-fill', label: 'Facebook' },
                  { icon: 'ri-link', label: 'Copy Link' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    rel="nofollow"
                    title={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-600 transition-all duration-300 cursor-pointer"
                  >
                    <i className={`${social.icon} text-sm`} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">About this article</p>
              <p className="text-sm text-gray-600 max-w-xs">{title}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
