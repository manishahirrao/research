'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onFilterChange: (tag: string | null) => void;
}

/**
 * Tag Filter Component
 * Allows filtering blog articles by tag
 */
export function TagFilter({ tags, selectedTag, onFilterChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter articles by tag">
      {/* All button */}
      <button
        onClick={() => onFilterChange(null)}
        className={cn(
          'px-6 py-2 rounded-pill text-sm font-medium transition-all duration-200',
          selectedTag === null
            ? 'bg-brand-red text-white'
            : 'bg-neutral-light text-neutral-mid hover:bg-neutral-border hover:text-neutral-black',
        )}
        aria-pressed={selectedTag === null}
      >
        All
      </button>

      {/* Tag buttons */}
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilterChange(tag)}
          className={cn(
            'px-6 py-2 rounded-pill text-sm font-medium transition-all duration-200',
            selectedTag === tag
              ? 'bg-brand-red text-white'
              : 'bg-neutral-light text-neutral-mid hover:bg-neutral-border hover:text-neutral-black',
          )}
          aria-pressed={selectedTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
