
import { useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navigation from '../../../home/components/Navigation';
import Footer from '../../../home/components/Footer';
import BlogDetailHero from './components/BlogDetailHero';
import BlogDetailContent from './components/BlogDetailContent';
import BlogDetailSidebar from './components/BlogDetailSidebar';
import BlogRelatedPosts from './components/BlogRelatedPosts';
import { blogPosts, featuredPost } from '../../../../mocks/blogPosts';

const allPosts = [featuredPost, ...blogPosts];

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    try { window.scrollTo(0, 0); } catch (e) { console.error(e); }
  }, [slug]);

  const post = useMemo(() => allPosts.find((p) => p.id === slug), [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return allPosts
      .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
      .slice(0, 3);
  }, [post]);

  const sidebarRelated = useMemo(() => {
    if (!post) return [];
    return allPosts
      .filter((p) => p.id !== post.id)
      .slice(0, 4);
  }, [post]);

  if (!post) {
    return <Navigate to="/insights/blogs" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BlogDetailHero
        title={post.title}
        category={post.category}
        tags={post.tags}
        date={post.date}
        readTime={post.readTime}
        image={post.image}
        author={post.author}
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto flex gap-8">
          <div className="flex-1 min-w-0">
            <BlogDetailContent content={post.content} title={post.title} />
          </div>
          <BlogDetailSidebar author={post.author} relatedPosts={sidebarRelated} />
        </div>
      </div>

      <BlogRelatedPosts posts={relatedPosts} />
      <Footer />
    </div>
  );
}
