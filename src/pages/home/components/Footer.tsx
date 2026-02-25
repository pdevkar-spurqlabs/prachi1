import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-12 lg:py-16 pb-24 lg:pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-10 lg:mb-12">
            {/* Logo & About */}
            <div>
              <Link to="/" className="cursor-pointer">
                <img 
                  src="https://static.readdy.ai/image/cdee2fbcd80bfdec9cf50d230218aedf/6ff8a31bd7fff894feba2270c48bbbe9.webp"
                  alt="SpurQLabs"
                  className="h-8 lg:h-10 w-auto mb-4"
                />
              </Link>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Exceptional QA teams that help product companies ship faster with confidence.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-base lg:text-lg mb-3 lg:mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/#services" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">Testing-as-a-Service</Link></li>
                <li><Link to="/#services" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">Test Automation</Link></li>
                <li><Link to="/#services" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">Performance Testing</Link></li>
                <li><Link to="/#services" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">DevOps & CI/CD</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-base lg:text-lg mb-3 lg:mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">About Us</Link></li>
                <li><Link to="/stories" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">Case Studies</Link></li>
                <li><Link to="/#how-we-work" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">How We Work</Link></li>
                <li><Link to="/#why-choose-us" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">Why Choose Us</Link></li>
              </ul>
            </div>

            {/* US Office */}
            <div>
              <h4 className="font-bold text-base lg:text-lg mb-3 lg:mb-4">US Office</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="leading-relaxed">11097, Paisano Dr, Frisco, Texas, 75035</li>
                <li><a href="tel:+14699154206" className="hover:text-orange-500 transition-colors cursor-pointer">+1-469-915-4206</a></li>
                <li><a href="mailto:contact@spurqlabs.com" className="hover:text-orange-500 transition-colors cursor-pointer">contact@spurqlabs.com</a></li>
              </ul>
            </div>

            {/* UK & India Offices */}
            <div>
              <h4 className="font-bold text-base lg:text-lg mb-3 lg:mb-4">UK Office</h4>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="leading-relaxed">48 Wright crescent, Springfield, Chelmsford. CM1 6DP</li>
                <li><a href="tel:+447576772275" className="hover:text-orange-500 transition-colors cursor-pointer">+44-7576772275</a></li>
                <li><a href="mailto:contact@spurqlabs.com" className="hover:text-orange-500 transition-colors cursor-pointer">contact@spurqlabs.com</a></li>
              </ul>

              <h4 className="font-bold text-base lg:text-lg mb-3 lg:mb-4">India Office</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="leading-relaxed">Office No. 201, Gera's Imperium Rise, Hinjewadi Phase-2, Pune, Maharashtra. 411057</li>
                <li><a href="tel:+919356645806" className="hover:text-orange-500 transition-colors cursor-pointer">+91 9356645806</a></li>
                <li><a href="mailto:contact@spurqlabs.com" className="hover:text-orange-500 transition-colors cursor-pointer">contact@spurqlabs.com</a></li>
              </ul>
            </div>
          </div>

          {/* Quick Contact & Social */}
          <div className="mb-8">
            <h4 className="font-bold text-base lg:text-lg mb-3">Quick Contact</h4>
            <div className="flex gap-3">
              <a href="https://calendly.com/spurqlabs-book-a-demo" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">Book a Call</a>
              <span className="text-gray-400">|</span>
              <Link to="/#assessment" className="text-sm text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">Get Assessment</Link>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/spurqlabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-gray-200 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-facebook-fill text-lg lg:text-xl"></i>
              </a>
              <a href="https://www.instagram.com/spurqlabs/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-gray-200 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-instagram-fill text-lg lg:text-xl"></i>
              </a>
              <a href="https://x.com/spurqlabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-gray-200 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-twitter-x-fill text-lg lg:text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/spurqlabs/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-gray-200 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-linkedin-fill text-lg lg:text-xl"></i>
              </a>
              <a href="https://www.youtube.com/@spurqlabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-gray-200 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-youtube-fill text-lg lg:text-xl"></i>
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-gray-200 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-github-fill text-lg lg:text-xl"></i>
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-300 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs lg:text-sm">
              © 2026 SpurQLabs. All rights reserved.
            </p>
            <div className="flex items-center gap-4 lg:gap-6 flex-wrap justify-center">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-orange-500 text-xs lg:text-sm transition-colors cursor-pointer">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-orange-500 text-xs lg:text-sm transition-colors cursor-pointer">Terms of Service</Link>
              {/* <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 text-xs lg:text-sm transition-colors cursor-pointer">Powered by Readdy</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}