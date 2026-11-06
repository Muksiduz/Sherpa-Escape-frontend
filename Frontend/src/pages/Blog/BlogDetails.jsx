import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import Loader from '../../components/common/Loader';
import Button from '../../components/common/Button';
import { travelService } from '../../services/travelService';
import { formatDate } from '../../utils/formatters';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

export const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    travelService.getBlogPostById(id).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader fullScreen />;

  if (!post) {
    return (
      <PageContainer>
        <div className="text-center py-24">
          <h2 className="text-2xl font-bold text-slate-800">Article Not Found</h2>
          <p className="text-sm text-slate-500 mt-2">The blog post you requested does not exist.</p>
          <Link to="/blog" className="mt-4 inline-block">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer size="sm">
        <Breadcrumb
          items={[
            { name: 'Blog', path: '/blog' },
            { name: post.title },
          ]}
        />

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs my-6">
          <div className="mb-6 space-y-4">
            <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-4">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="w-4 h-4 text-sky-600" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-8 max-h-[420px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-4">
            <p className="text-lg font-medium text-slate-800 leading-relaxed">
              {post.summary}
            </p>
            <p>{post.content}</p>
            <p>
              When preparing for backcountry travel or high-altitude crossings, mental readiness and respectful engagement with local mountain communities are just as vital as physical conditioning. Always follow the guidelines set forth by local conservation authorities and your lead guide.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link to="/blog">
              <Button variant="ghost" size="sm" icon={ArrowLeft}>
                Back to All Articles
              </Button>
            </Link>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
          </div>
        </article>
      </PageContainer>
    </div>
  );
};

export default BlogDetails;

