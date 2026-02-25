
import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';
import BlogsHero from './components/BlogsHero';
import FeaturedPost from './components/FeaturedPost';
import ArticleGrid from './components/ArticleGrid';
import BlogTopics from './components/BlogTopics';
import AuthorSpotlight from './components/AuthorSpotlight';
import BlogImpact from './components/BlogImpact';
import BlogsCTA from './components/BlogsCTA';

export default function BlogsPage() {
  useEffect(() => {
    try { window.scrollTo(0, 0); } catch (e) { console.error(e); }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BlogsHero />
      <FeaturedPost />
      <ArticleGrid />
      <BlogTopics />
      <AuthorSpotlight />
      <BlogImpact />
      <BlogsCTA />
      <Footer />
    </div>
  );
}
