import React from 'react';
import { BlogCard } from './BlogCard';
import type { BlogArticle } from '@/lib/content';

interface RelatedArticlesProps {
  articles: BlogArticle[];
}

/**
 * Related Articles Component
 * Displays related articles at the end of an article
 */
export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-display text-display-md font-bold text-neutral-black mb-12 text-center">
          Related Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
