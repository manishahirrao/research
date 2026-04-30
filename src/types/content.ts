/**
 * Blog Article Interface
 * Represents a single blog article with all metadata
 */
export interface BlogArticle {
  slug: string; // URL-safe identifier
  title: string; // Article title (≤ 70 chars recommended)
  excerpt: string; // 150–200 char summary
  content: string; // Full MDX content
  date: string; // ISO 8601 publish date
  dateModified?: string; // ISO 8601 last-modified date
  author: string; // Author display name
  authorTitle?: string; // Author job title
  authorBio?: string; // 1–2 sentence author description
  image: string; // Featured image URL
  imageAlt: string; // Alt text for featured image
  tags: string[]; // Category tags
  readTime?: number; // Auto-calculated minutes
}

/**
 * Author Profile Interface
 */
export interface AuthorProfile {
  name: string;
  title: string;
  bio: string;
  photo?: string;
  linkedin?: string;
}

/**
 * Navigation Item Interface
 */
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * SEO Metadata Interface
 */
export interface PageSeoData {
  title: string; // ≤ 60 chars
  description: string; // ≤ 160 chars
  canonical: string; // Full URL
  ogImage: string; // 1200×630px image URL
  ogType: 'website' | 'article';
  jsonLd: object; // JSON-LD schema object
}
