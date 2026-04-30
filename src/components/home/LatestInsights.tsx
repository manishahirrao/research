import React from 'react';
import Link from 'next/link';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { BlogCard } from '@/components/shared/BlogCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { getAllArticles } from '@/lib/content';

/**
 * Latest Insights Component
 * Displays 3 most recent blog articles
 */
export function LatestInsights() {
  const articles = getAllArticles().slice(0, 3);
  return (
    <section className="py-24 md:py-32 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Thought Leadership</SectionLabel>
          <h2 className="mt-4 font-display text-display-md font-bold text-neutral-black">
            Latest Insights
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid">
            Stay ahead with our latest research findings, industry trends, and strategic
            perspectives.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center text-brand-red font-medium hover:text-brand-red-dark transition-colors group"
          >
            View All Insights
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
