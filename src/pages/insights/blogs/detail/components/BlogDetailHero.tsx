
import { Link } from 'react-router-dom';

interface BlogDetailHeroProps {
  title: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export default function BlogDetailHero({ title, category, tags, date, readTime, image, author }: BlogDetailHeroProps) {
  return (
    <section className="pt-20 lg:pt-24">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 pt-6">
            <Link to="/" className="hover:text-orange-500 transition-colors cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line text-gray-400" />
            <Link to="/insights/blogs" className="hover:text-orange-500 transition-colors cursor-pointer">Blog</Link>
            <i className="ri-arrow-right-s-line text-gray-400" />
            <span className="text-gray-700 font-medium truncate max-w-[200px]">{title}</span>
          </nav>

          {/* Category & Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
              {category}
            </span>
            {tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {title}
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-orange-100">
              <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{author.name}</p>
              <p className="text-xs text-gray-500">{author.role}</p>
            </div>
            <span className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-calendar-line text-sm" /></span>
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-time-line text-sm" /></span>
                {readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-[280px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden mb-8">
            <img src={image} alt={title} className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
