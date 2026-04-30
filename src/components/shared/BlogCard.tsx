import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tag } from './Tag';
import { formatDate } from '@/lib/utils';
import type { BlogArticle } from '@/lib/content';

interface BlogCardProps {
  article: BlogArticle;
}

/**
 * Blog Card Component
 * Displays article preview with image, title, excerpt, metadata, and tags
 */
export function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/insights/${article.slug}`} className="block">
        {/* Image */}
        <div className="relative h-[240px] rounded-card overflow-hidden mb-4 shadow-card">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <h3 className="font-display text-display-sm font-bold text-neutral-black line-clamp-2 group-hover:text-brand-red transition-colors duration-200">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-body-sm text-neutral-mid line-clamp-2">{article.excerpt}</p>

          {/* Metadata */}
          <div className="flex items-center text-sm text-neutral-mid space-x-4">
            <span>{article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>•</span>
            <span>{article.readTime} min read</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} label={tag} variant="default" />
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
