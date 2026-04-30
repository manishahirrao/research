'use client';

import React, { useState, useMemo } from 'react';
import { BlogCard } from './BlogCard';
import { TagFilter } from './TagFilter';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import type { BlogArticle } from '@/lib/content';

interface BlogGridProps {
  articles: BlogArticle[];
  tags: string[];
}

/**
 * Blog Grid Component
 * Displays filterable grid of blog articles
 */
export function BlogGrid({ articles, tags }: BlogGridProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter articles based on selected tag
  const filteredArticles = useMemo(() => {
    if (!selectedTag) {
      return articles;
    }
    return articles.filter((article) => article.tags.includes(selectedTag));
  }, [articles, selectedTag]);

  return (
    <div>
      {/* Tag Filter */}
      <TagFilter tags={tags} selectedTag={selectedTag} onFilterChange={setSelectedTag} />

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </StaggerContainer>
      ) : (
        <div className="text-center py-16">
          <p className="text-body-lg text-neutral-mid">
            No articles found for this topic. Try selecting a different tag.
          </p>
        </div>
      )}
    </div>
  );
}
