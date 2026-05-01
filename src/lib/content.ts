import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { formatDate } from './utils';

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorTitle: string;
  image: string;
  tags: string[];
  published: boolean;
  content: string;
  readTime: number;
}

const contentDirectory = path.join(process.cwd(), 'content/insights');

/**
 * Get all published blog articles sorted by date (newest first)
 */
export function getAllArticles(): BlogArticle[] {
  // Ensure content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);

  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Calculate reading time
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || '',
        authorTitle: data.authorTitle || '',
        image: data.image || '',
        tags: data.tags || [],
        published: data.published !== false,
        content,
        readTime: Math.ceil(stats.minutes),
      } as BlogArticle;
    })
    .filter((article) => article.published)
    .sort((a, b) => {
      // Sort by date descending (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return articles;
}

/**
 * Get a single article by slug
 */
export function getArticleBySlug(slug: string): BlogArticle | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time
    const stats = readingTime(content);

    const article: BlogArticle = {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || '',
      authorTitle: data.authorTitle || '',
      image: data.image || '',
      tags: data.tags || [],
      published: data.published !== false,
      content,
      readTime: Math.ceil(stats.minutes),
    };

    return article.published ? article : null;
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

/**
 * Get related articles based on shared tags
 */
export function getRelatedArticles(
  currentSlug: string,
  tags: string[],
  limit: number = 3,
): BlogArticle[] {
  const allArticles = getAllArticles();

  // Filter out current article and find articles with shared tags
  const relatedArticles = allArticles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => {
      // Count how many tags are shared
      const sharedTags = article.tags.filter((tag) => tags.includes(tag));
      return {
        article,
        relevance: sharedTags.length,
      };
    })
    .filter((item) => item.relevance > 0)
    .sort((a, b) => {
      // Sort by relevance (shared tags) first, then by date
      if (b.relevance !== a.relevance) {
        return b.relevance - a.relevance;
      }
      return new Date(b.article.date).getTime() - new Date(a.article.date).getTime();
    })
    .slice(0, limit)
    .map((item) => item.article);

  return relatedArticles;
}

/**
 * Get all unique tags from all articles
 * Returns only primary industry tags for cleaner filtering
 */
export function getAllTags(): string[] {
  const allArticles = getAllArticles();
  const tagsSet = new Set<string>();

  allArticles.forEach((article) => {
    article.tags.forEach((tag) => tagsSet.add(tag));
  });

  // Define priority tags (industries and key topics)
  const priorityTags = [
    'FMCG',
    'Media',
    'Cosmetics',
    'Automotive',
    'Real Estate',
    'Consumer Trends',
    'Market Research',
  ];

  // Filter to only include priority tags that exist in articles
  const filteredTags = priorityTags.filter((tag) => tagsSet.has(tag));

  return filteredTags;
}

/**
 * Get articles filtered by tag
 */
export function getArticlesByTag(tag: string): BlogArticle[] {
  const allArticles = getAllArticles();
  return allArticles.filter((article) => article.tags.includes(tag));
}
