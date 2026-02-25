
import { useState, useEffect } from 'react';

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-2xl transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="px-4 py-3 flex gap-3">
        <a
          href="https://calendly.com/spurqlabs/20-minute-qa-strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full text-center whitespace-nowrap cursor-pointer"
        >
          Book a Call
        </a>
        <a 
          href="#assessment"
          className="flex-1 px-4 py-3 bg-gray-900 hover:bg-black text-white font-semibold text-sm rounded-lg text-center transition-colors whitespace-nowrap cursor-pointer"
        >
          Free Assessment
        </a>
      </div>
    </div>
  );
}
