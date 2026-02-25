
import { useState, useEffect, useRef } from 'react';
import { caseStudies } from '../../../../mocks/caseStudies';

const filters = ['All', 'FinTech', 'Healthcare', 'E-commerce', 'SaaS', 'Enterprise', 'Mobile'];

export default function FeaturedStudies() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visible, setVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((s) => s.industry === activeFilter);

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-10 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              In-Depth Case Studies
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver <span className="text-orange-500">Exceptional Results</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every engagement is unique. Explore how our tailored QA strategies solved real-world challenges for companies across industries.
            </p>
          </div>

          {/* Filters */}
          <div
            className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === f
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Case study cards */}
          <div className="space-y-16">
            {filtered.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={index}
                isExpanded={expandedId === study.id}
                onToggle={() => setExpandedId(expandedId === study.id ? null : study.id)}
                parentVisible={visible}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                <i className="ri-search-line text-2xl text-gray-400"></i>
              </div>
              <p className="text-gray-500">No case studies found for this industry yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface CaseStudyCardProps {
  study: typeof caseStudies[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  parentVisible: boolean;
}

function CaseStudyCard({ study, index, isExpanded, onToggle, parentVisible }: CaseStudyCardProps) {
  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 === 1;

  return (
    <article
      ref={cardRef}
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200/50 shadow-sm hover:shadow-2xl transition-all duration-700 ${
        cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={`lg:flex ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image side */}
        <div className="lg:w-[45%] relative overflow-hidden">
          <div className="relative h-72 lg:h-full lg:min-h-[520px]">
            <img
              src={study.heroImage}
              alt={study.company}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>

            {/* Overlay info */}
            <div className="absolute top-5 left-5 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                {study.industry}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                {study.duration}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                {study.teamSize}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{study.company}</h3>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-0.5 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="lg:w-[55%] p-6 lg:p-10">
          {/* Challenge */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 flex items-center justify-center bg-red-50 rounded-lg">
                <i className="ri-error-warning-line text-red-500 text-lg"></i>
              </div>
              <h4 className="font-bold text-gray-900">The Challenge</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {isExpanded ? study.challenge : `${study.challenge.slice(0, 160)}...`}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 flex items-center justify-center bg-orange-50 rounded-lg">
                <i className="ri-lightbulb-line text-orange-500 text-lg"></i>
              </div>
              <h4 className="font-bold text-gray-900">Our Solution</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {isExpanded ? study.solution : `${study.solution.slice(0, 160)}...`}
            </p>
            {isExpanded && (
              <div className="flex flex-wrap gap-2 mt-3">
                {study.approach.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-100"
                    style={{ animation: `fadeSlideUp 0.4s ease ${i * 0.1}s both` }}
                  >
                    <i className="ri-check-line text-orange-500"></i>
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 flex items-center justify-center bg-emerald-50 rounded-lg">
                <i className="ri-bar-chart-grouped-line text-emerald-500 text-lg"></i>
              </div>
              <h4 className="font-bold text-gray-900">The Results</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {study.results.map((r, i) => (
                <div
                  key={i}
                  className="group hover:bg-gray-50 bg-gray-50 hover:bg-orange-50 rounded-xl p-3.5 transition-colors duration-300 border border-transparent hover:border-orange-100"
                >
                  <p className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                    {r.metric}
                  </p>
                  <p className="text-xs text-gray-700 font-medium mt-0.5">{r.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{r.prev}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial (expanded) */}
          {isExpanded && (
            <div
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 mb-6 border-l-4 border-orange-400"
              style={{ animation: 'fadeSlideUp 0.5s ease both' }}
            >
              <i className="ri-double-quotes-l text-3xl text-orange-300 mb-2 block"></i>
              <p className="text-gray-700 text-sm italic leading-relaxed mb-4">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={study.testimonial.avatar}
                  alt={study.testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{study.testimonial.name}</p>
                  <p className="text-xs text-gray-500">{study.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* Toggle */}
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors cursor-pointer"
          >
            {isExpanded ? (
              <>
                Show Less
                <i className="ri-arrow-up-s-line text-lg group-hover:-translate-y-0.5 transition-transform"></i>
              </>
            ) : (
              <>
                Read Full Case Study
                <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </article>
  );
}
