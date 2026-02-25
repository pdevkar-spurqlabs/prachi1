
import { useState } from 'react';

export default function CustomerResults() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "SpurQLabs transformed our QA process. We went from dreading releases to shipping confidently every two weeks. Their team feels like an extension of ours.",
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "Growth-stage SaaS"
    },
    {
      quote: "The automation framework they built cut our regression testing from 3 days to 4 hours. That alone paid for the engagement in the first quarter.",
      name: "Michael Rodriguez",
      role: "CTO",
      company: "FinTech Startup"
    },
    {
      quote: "Finally, a QA partner that understands our business context and doesn't just check boxes. They catch issues our internal team would have missed.",
      name: "Emily Watson",
      role: "Head of Product",
      company: "E-commerce Platform"
    }
  ];

  const stats = [
    {
      metric: '85% reduction',
      description: 'in critical production incidents within two releases'
    },
    {
      metric: '3x faster',
      description: 'regression cycles from days to hours'
    },
    {
      metric: '40% cost savings',
      description: 'compared to building an in-house QA team'
    }
  ];

  return (
    <section id="results" className="py-16 lg:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Proven Results
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What our customers achieve
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10 lg:mb-16">
            <div className="space-y-4 lg:space-y-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-5 lg:p-6 shadow-md border-l-4 border-orange-500"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-orange-500 mb-1">{stat.metric}</div>
                  <p className="text-sm lg:text-base text-gray-700">{stat.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200">
              <div className="mb-4 lg:mb-6">
                <i className="ri-double-quotes-l text-4xl lg:text-5xl text-orange-500 opacity-50"></i>
              </div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-5 lg:mb-6 italic">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 text-sm lg:text-base">{testimonials[currentTestimonial].name}</div>
                  <div className="text-xs lg:text-sm text-gray-600">{testimonials[currentTestimonial].role}</div>
                  <div className="text-xs lg:text-sm text-orange-500">{testimonials[currentTestimonial].company}</div>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        currentTestimonial === index ? 'bg-orange-500 w-6 lg:w-8' : 'bg-gray-300'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md mb-10 lg:mb-12">
            <div className="text-center mb-4 lg:mb-6">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">Trusted by</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 items-center opacity-60">
              <div className="flex items-center justify-center h-12 lg:h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-600 font-semibold text-xs lg:text-sm">Company Logo</span>
              </div>
              <div className="flex items-center justify-center h-12 lg:h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-600 font-semibold text-xs lg:text-sm">Company Logo</span>
              </div>
              <div className="flex items-center justify-center h-12 lg:h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-600 font-semibold text-xs lg:text-sm">Company Logo</span>
              </div>
              <div className="flex items-center justify-center h-12 lg:h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-600 font-semibold text-xs lg:text-sm">Company Logo</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-400/30 whitespace-nowrap cursor-pointer"
            >
              Get results like these for your team
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
