import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import { blogData } from '../../data/blogData';
import { formatDate } from '../../utils/formatters';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Travel Tips', 'Eco Tourism', 'Destinations'];

  const filteredPosts = blogData.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer>
        <Breadcrumb items={[{ name: 'Travel Blog' }]} />

        <SectionHeader
          badge="Trail Stories & Wisdom"
          title="The Sherpa Expedition Journal"
          subtitle="Expert guides, gear recommendations, ethical exploration insights, and tales from high-altitude trails."
        />

        {/* Filter categories */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-4 py-2 rounded-xl font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-sky-700 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-sky-600" />
                    {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default Blog;

