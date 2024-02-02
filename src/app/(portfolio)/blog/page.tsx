import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleListInitializer } from '@/components/article/ArticleList/ArticleList';
import { seoConfig } from '@/lib/network-utils';
import { fetchAllPosts } from '@/sanity/lib/sanityFetch';

export const runtime = 'edge';

export const metadata: Metadata = {
  ...seoConfig,
  title: 'Tech Blog Posts by Edwin H - Full Stack Developer',
  description: 'Dive into insightful articles covering front-end, back-end development, and more by Edwin H.',
  openGraph: {
    ...seoConfig.openGraph,
    title: 'Tech Blog Posts by Edwin H - Full Stack Developer',
    description: 'Explore various technical topics through the lens of a seasoned full-stack developer, Edwin H.',
  },
};

export default async function BlogPostsPage() {
  const posts = await fetchAllPosts();

  if (posts.length === 0) {
    return notFound();
  }

  return <ArticleListInitializer articles={posts} />;
}
