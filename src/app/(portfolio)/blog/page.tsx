import { fetchAllPosts } from '@/sanity/lib/sanityFetch';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleListInitializer } from '@/components/article/ArticleList/ArticleList';
import { seoConfig } from '@/lib/networkUtils';

export const runtime = 'edge';

export const metadata: Metadata = {
  ...seoConfig,
  description: 'Dive into insightful articles covering front-end, back-end development, and more by Edwin H.',
  openGraph: {
    ...seoConfig.openGraph,
    description: 'Explore various technical topics through the lens of a seasoned full-stack developer, Edwin H.',
    title: 'Tech Blog Posts by Edwin H - Full Stack Developer',
  },
  title: 'Tech Blog Posts by Edwin H - Full Stack Developer',
};

export default async function BlogPostsPage() {
  const posts = await fetchAllPosts();

  if (posts.length === 0) {
    return notFound();
  }

  return <ArticleListInitializer articles={posts} />;
}
