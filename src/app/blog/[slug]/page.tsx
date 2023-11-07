import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import LiveQuery from "next-sanity/preview/live-query";

import BlogPostDetail from "@/components/features/blog/BlogPost/";
import BlogPostLivePreview from "@/components/features/blog/BlogPost/BlogPostLivePreview";
import { seoConfig } from "@/config";
import { queryForSingleBlogPostBySlug } from "@/sanity/lib/queries";
import {
  fetchBlogPostBySlug,
  fetchBlogPostSlugs,
} from "@/sanity/lib/sanityFetch";

export const runtime = "edge";

type BlogPostPageProps = {
  params: { slug: string };
};

// TODO: Implement dynamic metadata generation based on post data
export async function generateMetadata(): Promise<Metadata> {
  const blogTitle = "Blog Title";
  const blogTopic = "Blog Topic";
  return {
    ...seoConfig,
    title: `Blog: ${blogTitle} - Edwin H - Portfolio`,
    description: `Read the blog post titled "${blogTitle}" by Edwin H to dive into ${blogTopic}.`,
    openGraph: {
      ...seoConfig.openGraph,
      title: `Blog: ${blogTitle} - Edwin H - Portfolio`,
      description: `Edwin H elaborates on ${blogTopic} in his blog post titled "${blogTitle}".`,
    },
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

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={queryForSingleBlogPostBySlug}
      params={params}
      initialData={post}
      as={BlogPostLivePreview}
    >
      {post && <BlogPostDetail post={post} />}
    </LiveQuery>
  );
}
