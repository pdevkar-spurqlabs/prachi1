
import { Link } from 'react-router-dom';

interface RelatedPost {
  id: string;
  title: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogDetailSidebarProps {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  relatedPosts: RelatedPost[];
}

export default function BlogDetailSidebar({ author, relatedPosts }: BlogDetailSidebarProps) {
  return (
    <aside className="hidden xl:block w-[280px] flex-shrink-0">
      <div className="sticky top-28 space-y-6">
        {/* Author Card */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-md mx-auto mb-4">
            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
          </div>
          <h4 className="text-sm font-bold text-gray-900 mb-1">{author.name}</h4>
          <p className="text-xs text-gray-500 mb-4">{author.role}</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            {['ri-twitter-x-fill', 'ri-linkedin-fill', 'ri-github-fill'].map((icon) => (
              <a
                key={icon}
                href="#"
                rel="nofollow"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/80 hover:bg-orange-500 hover:text-white text-gray-500 transition-all duration-300 cursor-pointer"
              >
                <i className={`${icon} text-sm`} />
              </a>
            ))}
          </div>
          <Link
            to="/insights/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors cursor-pointer"
          >
            View all articles
            <i className="ri-arrow-right-line text-sm" />
          </Link>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">Related Articles</p>
            <div className="space-y-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/insights/blogs/${post.id}`}
                  className="flex gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <Link
          to="/insights/blogs"
          className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-arrow-left-line" />
          Back to All Articles
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}} />
    </aside>
  );
}
