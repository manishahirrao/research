import React from 'react';
import Image from 'next/image';
import { Tag } from './Tag';
import { formatDate } from '@/lib/utils';
import type { BlogArticle } from '@/lib/content';

interface ArticleHeroProps {
  article: BlogArticle;
}

/**
 * Article Hero Component
 * Displays article header with image, title, and metadata
 */
export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/80 via-neutral-black/40 to-transparent" />
      </div>

      {/* Article Header Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative -mt-32 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <Tag key={tag} label={tag} variant="red" />
              ))}
            </div>

            {/* Title */}
            <h1 className="font-display text-display-lg md:text-display-xl font-bold text-white mb-6">
              {article.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center">
                <span className="font-medium">{article.author}</span>
                <span className="mx-2">•</span>
                <span className="text-white/70">{article.authorTitle}</span>
              </div>
              <span className="text-white/50">•</span>
              <time dateTime={article.date} className="text-white/70">
                {formatDate(article.date)}
              </time>
              <span className="text-white/50">•</span>
              <span className="text-white/70">{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
