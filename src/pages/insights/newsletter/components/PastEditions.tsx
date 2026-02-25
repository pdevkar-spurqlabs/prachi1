
import { useState, useRef, useEffect } from 'react';
import { pastEditions } from '../../../../mocks/newsletter';

export default function PastEditions() {
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Observe when the section enters the viewport to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const displayedEditions = showAll ? pastEditions : pastEditions.slice(0, 4);

  const toggleEdition = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, idx) => {
      // Heading (bold block surrounded by **)
      if (block.startsWith('**') && block.endsWith('**')) {
        const text = block.replace(/\*\*/g, '');
        return (
          <h4
            key={idx}
            className="text-base font-bold text-gray-900 mt-5 mb-2"
          >
            {text}
          </h4>
        );
      }

      // Italic paragraph (single * at start)
      if (block.startsWith('*') && !block.startsWith('**')) {
        const text = block.replace(/^\*/, '').replace(/\*$/, '').trim();
        return (
          <p
            key={idx}
            className="text-gray-600 text-sm leading-relaxed italic pl-4 border-l-2 border-orange-300 my-2"
          >
            {text}
          </p>
        );
      }

      // Normal paragraph with possible **bold** sections
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={idx} className="text-gray-600 text-sm leading-relaxed mb-3">
          {parts.map((part, pi) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong
                  key={pi}
                  className="text-gray-900 font-semibold"
                >
                  {part.replace(/\*\*/g, '')}
                </strong>
              );
            }
            return <span key={pi}>{part}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      id="archives"
      className="py-20 lg:py-28 bg-gray-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Newsletter Archives
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Past Editions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Missed an issue? Catch up on all our previous newsletters packed
              with QA strategies, testing insights, and industry analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {displayedEditions.map((edition, i) => {
              const isExpanded = expandedId === edition.id;
              return (
                <div
                  key={edition.id}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${isExpanded ? 'md:col-span-2' : ''}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div
                    className={`flex flex-col ${
                      isExpanded ? 'sm:flex-col' : 'sm:flex-row'
                    }`}
                  >
                    <div
                      className={`relative flex-shrink-0 overflow-hidden ${
                        isExpanded
                          ? 'w-full h-64 lg:h-80'
                          : 'w-full sm:w-48 h-48 sm:h-auto'
                      }`}
                    >
                      <img
                        src={edition.image}
                        alt={edition.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-bold rounded-lg whitespace-nowrap">
                        Issue #{edition.issueNumber}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                          <span className="flex items-center gap-1">
                            <span className="w-3.5 h-3.5 flex items-center justify-center">
                              <i className="ri-calendar-line text-xs" />
                            </span>
                            {edition.date}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span className="flex items-center gap-1">
                            <span className="w-3.5 h-3.5 flex items-center justify-center">
                              <i className="ri-eye-line text-xs" />
                            </span>
                            {edition.readCount.toLocaleString()} reads
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300 leading-snug">
                          {edition.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-3">
                          {edition.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {edition.topics.map((topic, ti) => (
                            <span
                              key={ti}
                              className="px-2 py-0.5 bg-orange-50 text-orange-600 text-xs font-medium rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => toggleEdition(edition.id)}
                          className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md"
                        >
                          {isExpanded ? 'Close' : 'Read'}
                          <span
                            className={`w-3.5 h-3.5 flex items-center justify-center transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          >
                            <i
                              className={`ri-${
                                isExpanded ? 'arrow-up-s-line' : 'arrow-right-s-line'
                              } text-xs`}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-gray-100">
                      <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-3xl mx-auto">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                            <i className="ri-newspaper-line text-base" />
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            Issue #{edition.issueNumber}
                          </span>
                          <span className="text-sm text-gray-400">
                            &middot; {edition.date}
                          </span>
                        </div>
                        <div className="prose prose-sm prose-gray max-w-none">
                          {edition.fullContent && renderContent(edition.fullContent)}
                        </div>
                        <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-400">Share:</span>
                            <a
                              href="#"
                              className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100 text-gray-500 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                              rel="nofollow"
                            >
                              <i className="ri-twitter-x-line text-xs" />
                            </a>
                            <a
                              href="#"
                              className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100 text-gray-500 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                              rel="nofollow"
                            >
                              <i className="ri-linkedin-line text-xs" />
                            </a>
                          </div>
                          <button
                            onClick={() => toggleEdition(edition.id)}
                            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                          >
                            Collapse
                            <span className="w-3.5 h-3.5 flex items-center justify-center">
                              <i className="ri-arrow-up-s-line text-sm" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {!showAll && pastEditions.length > 4 && (
            <div
              className={`text-center mt-10 transition-all duration-700 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 border-2 border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-500 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-archive-line text-base" />
                </span>
                View All Editions
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
