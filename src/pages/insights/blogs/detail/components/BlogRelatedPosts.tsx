
import { Link } from 'react-router-dom';

interface RelatedPost {
  id: string;
  title: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

interface BlogRelatedPostsProps {
  posts: RelatedPost[];
}

export default function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-orange-400" />
              Keep Reading
              <span className="w-8 h-px bg-orange-400" />
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Related <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Articles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                to={`/insights/blogs/${post.id}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div className="relative w-full h-[200px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 2).map((tag, ti) => (
                      <span key={ti} className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full overflow-hidden">
                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/insights/blogs"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-orange-400 text-orange-500 text-sm font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Browse All Articles
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}} />
    </section>
  );
}
