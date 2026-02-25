
import { useState, useRef, useEffect } from 'react';
import { featuredArticles } from '../../../../mocks/newsletter';

export default function FeaturedArticles() {
  const [visible, setVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const articleRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleArticle = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setTimeout(() => {
        articleRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, idx) => {
      if (block.startsWith('**') && block.endsWith('**')) {
        const text = block.replace(/\*\*/g, '');
        return (
          <h4
            key={idx}
            className="text-lg font-bold text-gray-900 mt-6 mb-2"
          >
            {text}
          </h4>
        );
      }

      if (block.startsWith('*') && !block.startsWith('**')) {
        const text = block.replace(/^\*/, '').replace(/\*$/, '').trim();
        return (
          <p
            key={idx}
            className="text-gray-600 leading-relaxed italic pl-4 border-l-2 border-orange-300 my-2"
          >
            {text}
          </p>
        );
      }

      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={idx} className="text-gray-600 leading-relaxed mb-3">
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
      id="featured"
      className="py-20 lg:py-28 bg-white"
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
              Latest Edition
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hand-picked insights from our most recent newsletter edition,
              covering the topics that matter most to QA professionals.
            </p>
          </div>

          <div className="space-y-8">
            {featuredArticles.map((article, i) => {
              const isExpanded = expandedId === article.id;
              return (
                <div
                  key={article.id}
                  ref={(el) => {
                    articleRefs.current[article.id] = el;
                  }}
                  className={`group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-700 ${
                    visible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div
                      className={`relative overflow-hidden ${
                        i % 2 === 1 ? 'lg:order-2' : ''
                      }`}
                    >
                      <div className="w-full h-64 lg:h-80">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-8 lg:p-10 flex flex-col justify-center ${
                        i % 2 === 1 ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1.5">
                          <span className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-calendar-line text-sm" />
                          </span>
                          {article.date}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="flex items-center gap-1.5">
                          <span className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-time-line text-sm" />
                          </span>
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold text-sm">
                            {article.author
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {article.author}
                            </p>
                            <p className="text-xs text-gray-400">
                              {article.authorRole}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleArticle(article.id)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg"
                        >
                          {isExpanded ? 'Close' : 'Read Full Article'}
                          <span
                            className={`w-4 h-4 flex items-center justify-center transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          >
                            <i
                              className={`ri-${
                                isExpanded
                                  ? 'arrow-up-s-line'
                                  : 'arrow-right-line'
                              } text-sm`}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded
                        ? 'max-h-[3000px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-gray-200">
                      <div className="px-8 lg:px-16 py-10 lg:py-12 max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold text-base">
                            {article.author
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </div>
                          <div>
                            <p className="text-base font-semibold text-gray-900">
                              {article.author}
                            </p>
                            <p className="text-sm text-gray-400">
                              {article.authorRole} &middot; {article.date}{' '}
                              &middot; {article.readTime}
                            </p>
                          </div>
                        </div>
                        <div className="prose prose-gray max-w-none">
                          {article.fullContent && renderContent(article.fullContent)}
                        </div>
                        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-400">
                              Share this article:
                            </span>
                            <a
                              href="#"
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100 text-gray-500 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                              rel="nofollow"
                            >
                              <i className="ri-twitter-x-line text-sm" />
                            </a>
                            <a
                              href="#"
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100 text-gray-500 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                              rel="nofollow"
                            >
                              <i className="ri-linkedin-line text-sm" />
                            </a>
                            <a
                              href="#"
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100 text-gray-500 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                              rel="nofollow"
                            >
                              <i className="ri-mail-line text-sm" />
                            </a>
                          </div>
                          <button
                            onClick={() => toggleArticle(article.id)}
                            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                          >
                            Collapse
                            <span className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-arrow-up-s-line text-base" />
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
        </div>
      </div>
    </section>
  );
}
