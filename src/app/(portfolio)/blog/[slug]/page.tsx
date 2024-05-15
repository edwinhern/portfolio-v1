import { fetchBlogPostBySlug, fetchBlogPostSlugs } from '@/sanity/lib/sanityFetch';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleDetailsInitializer } from '@/components/article/ArticleDetails/ArticleDetails';
import { seoConfig } from '@/lib/networkUtils';

export const runtime = 'edge';

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: BlogPostPageProps): Promise<Metadata> {
  const post = await fetchBlogPostBySlug(slug);

  const blogTitle = post?.title ?? 'Blog Title';
  const blogTopic = post?.categories ? post.categories.join(' ') : 'Blog Topic';
  return {
    ...seoConfig,
    description: `Read the blog post titled "${post?.title}" by Edwin H to dive into ${blogTopic}.`,
    openGraph: {
      ...seoConfig.openGraph,
      description: `Edwin H elaborates on ${blogTopic} in his blog post titled "${blogTitle}".`,
      title: `Blog: ${blogTitle} - Edwin H - Portfolio`,
    },
    title: `Blog: ${blogTitle} - Edwin H - Portfolio`,
  };
}

export async function generateStaticParams() {
  const slugs = await fetchBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchBlogPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  return <ArticleDetailsInitializer article={post} />;
}
