import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ReadingProgress } from '@/components/shared/ReadingProgress';
import { ArticleHero } from '@/components/shared/ArticleHero';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { RelatedArticles } from '@/components/shared/RelatedArticles';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/content';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

export const revalidate = 3600; // Revalidate every hour

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Sugoi Insights',
    };
  }

  const siteUrl = process.env.SITE_URL || 'https://sugoiinsights.com';
  const articleUrl = `${siteUrl}/insights/${article.slug}`;

  return {
    title: `${article.title} | Sugoi Insights`,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: articleUrl,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.tags, 3);
  const siteUrl = process.env.SITE_URL || 'https://sugoiinsights.com';
  const articleUrl = `${siteUrl}/insights/${article.slug}`;

  // Article JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sugoi Insights',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: `${siteUrl}/insights`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Article Hero */}
      <ArticleHero article={article} />

      {/* Article Body */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* MDX Content */}
            <div className="prose prose-sugoi prose-lg max-w-none">
              <MDXRemote
                source={article.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      [
                        rehypePrettyCode,
                        {
                          theme: 'github-dark',
                          keepBackground: false,
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-neutral-border">
              <ShareButtons title={article.title} url={articleUrl} />
            </div>

            {/* Author Bio */}
            <div className="mt-12">
              <AuthorBio name={article.author} title={article.authorTitle} />
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
