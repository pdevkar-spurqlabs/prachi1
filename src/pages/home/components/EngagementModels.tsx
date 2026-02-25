
export default function EngagementModels() {
  const models = [
    {
      icon: 'ri-group-line',
      title: 'Dedicated QA Pods',
      description: 'A fully integrated team of QA engineers working exclusively on your product with deep context and ownership.',
      link: '#'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Managed Testing Services',
      description: 'We handle specific testing needs on-demand, from automation builds to performance audits and security checks.',
      link: '#'
    },
    {
      icon: 'ri-compass-line',
      title: 'Advisory & Accelerator Engagements',
      description: 'Strategic consulting to help you build internal QA capabilities, optimize processes, or solve specific challenges.',
      link: '#'
    }
  ];

  return (
    <section id="engagement-models" className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Engagement Options
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Ways to work with us
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the engagement model that fits your needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
            {models.map((model, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-orange-500 group"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-orange-500 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${model.icon} text-3xl lg:text-4xl text-white`}></i>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-5">{model.description}</p>
                <a 
                  href={model.link}
                  className="inline-flex items-center gap-2 text-sm text-orange-500 font-semibold hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Talk to us about this model
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-400/30 whitespace-nowrap cursor-pointer"
            >
              Find the right model for your team
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
