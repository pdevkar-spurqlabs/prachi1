
import { useEffect, useRef, useState } from 'react';

const stories = [
  {
    name: 'Priya Sharma',
    role: 'Senior SDET',
    tenure: '3 years',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20woman%20software%20engineer%20in%20her%20late%2020s%20wearing%20a%20casual%20top%20with%20warm%20smile%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=120&height=120&seq=life-story-1&orientation=squarish',
    quote:
      'I joined as a Junior QA and grew into a Senior SDET in just 3 years. The mentorship and learning opportunities here are unmatched. I have worked on fintech and healthcare projects that truly challenged me and helped me grow beyond what I thought possible.',
    highlight: 'Promoted 3 times in 3 years',
  },
  {
    name: 'Tom Bradley',
    role: 'Performance Engineer',
    tenure: '2 years',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Caucasian%20man%20engineer%20in%20his%20early%2030s%20wearing%20a%20casual%20shirt%20with%20friendly%20expression%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=120&height=120&seq=life-story-2&orientation=squarish',
    quote:
      'The remote-first culture is genuine. I work from the UK and feel just as connected as the team in India. The projects are exciting — I recently helped an e-commerce platform handle 10x Black Friday traffic without a single hiccup.',
    highlight: 'Works remotely from UK',
  },
  {
    name: 'Ananya Desai',
    role: 'QA Lead',
    tenure: '4 years',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20woman%20team%20lead%20in%20her%2030s%20wearing%20a%20blazer%20with%20confident%20expression%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=120&height=120&seq=life-story-3&orientation=squarish',
    quote:
      'What I love most is the ownership. You are not just executing test cases — you are shaping quality strategy for real products. The leadership trusts you and gives you room to innovate. That trust has been the biggest driver of my growth.',
    highlight: 'Led 15+ client engagements',
  },
  {
    name: 'Raj Patel',
    role: 'Security Analyst',
    tenure: '2.5 years',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20man%20cybersecurity%20analyst%20in%20his%20late%2020s%20wearing%20a%20dark%20polo%20shirt%20with%20focused%20expression%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=120&height=120&seq=life-story-4&orientation=squarish',
    quote:
      'SpurQLabs invested in my OSCP certification and gave me real penetration testing projects from day one. The security team here is world‑class, and I learn something new every single week. It feels like being at a top security firm.',
    highlight: 'OSCP certified at SpurQLabs',
  },
  {
    name: 'Maria Gonzalez',
    role: 'Mobile QA Engineer',
    tenure: '1.5 years',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Hispanic%20woman%20mobile%20developer%20in%20her%20late%2020s%20wearing%20a%20casual%20sweater%20with%20bright%20smile%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=120&height=120&seq=life-story-5&orientation=squarish',
    quote:
      'Coming from a manual testing background, I was nervous about automation. But the team here mentored me through the transition. Now I am building mobile test frameworks from scratch. The supportive culture made all the difference.',
    highlight: 'Transitioned to automation',
  },
  {
    name: 'David Kim',
    role: 'DevOps Engineer',
    tenure: '3 years',
    avatar:
      'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Korean%20man%20DevOps%20engineer%20in%20his%2030s%20wearing%20a%20charcoal%20sweater%20with%20thoughtful%20expression%20against%20clean%20light%20gray%20studio%20background%20corporate%20portrait%20photography&width=120&height=120&seq=life-story-6&orientation=squarish',
    quote:
      'The CI/CD pipelines we build here are used by some of the biggest product companies. I get to work with cutting‑edge cloud technologies daily. Plus, the team retreats and hackathons keep things fun and exciting.',
    highlight: 'Built 20+ CI/CD pipelines',
  },
];

export default function EmployeeStories() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Observe component visibility for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto‑rotate stories every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const story = stories[activeIndex];

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Employee Stories
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Voices From Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who chose to build their careers with us.
            </p>
          </div>

          {/* Featured Story */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 overflow-hidden mb-10">
              <div className="absolute top-6 right-8 text-[120px] lg:text-[180px] leading-none font-serif text-orange-500/10 select-none">
                &ldquo;
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 grid lg:grid-cols-[auto_1fr] gap-8 items-center">
                {/* Avatar & Info */}
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <div className="relative">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl object-cover border-2 border-orange-500/30"
                    />
                    <div className="absolute -bottom-2 -right-2 px-2.5 py-1 bg-orange-500 rounded-lg">
                      <span className="text-xs font-bold text-white whitespace-nowrap">{story.tenure}</span>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-white font-bold text-lg">{story.name}</p>
                    <p className="text-orange-400 text-sm">{story.role}</p>
                  </div>
                </div>

                {/* Quote & Highlight */}
                <div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    {/* Using a plain <svg> instead of an <i> tag to avoid potential JSX parsing issues */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-orange-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.152c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.946a1 1 0 00-.364-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.152a1 1 0 00.95-.69l1.286-3.946z" />
                    </svg>
                    <span className="text-orange-300 text-sm font-medium">{story.highlight}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-3 flex-wrap">
              {stories.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <img src={s.avatar} alt={s.name} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-sm font-medium whitespace-nowrap hidden sm:inline">{s.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
