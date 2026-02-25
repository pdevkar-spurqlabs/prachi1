
export default function FinalCTA() {
  return (
    <section id="assessment" className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20"></div>
      <img 
        src="https://readdy.ai/api/search-image?query=abstract%20geometric%20pattern%20background%20with%20subtle%20hexagons%20and%20network%20connections%20modern%20tech%20style%20orange%20and%20warm%20gradient%20professional%20clean%20minimal%20design%20for%20call%20to%20action%20section&width=1920&height=600&seq=cta-bg-002&orientation=landscape"
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-10"
      />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
            Ready to stabilize your releases and move faster?
          </h2>
          <p className="text-base lg:text-xl text-orange-50 mb-8 lg:mb-10 leading-relaxed">
            Share a few details and get a free, no‑obligation QA assessment with concrete next steps.
          </p>
          <a
            href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            Request Your Free QA Assessment
          </a>
          
          <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
            <div className="flex items-center gap-2 lg:gap-3">
              <i className="ri-time-line text-xl lg:text-2xl"></i>
              <span className="text-xs lg:text-sm">20-minute call</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <i className="ri-shield-check-line text-xl lg:text-2xl"></i>
              <span className="text-xs lg:text-sm">No commitment required</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <i className="ri-lightbulb-line text-xl lg:text-2xl"></i>
              <span className="text-xs lg:text-sm">Actionable insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
