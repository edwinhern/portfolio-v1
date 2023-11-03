import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { seoConfig } from "@/config";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import PreviewProvider from "@/providers/PreviewProvider";
import PreviewPost from "@/components/features/blog/BlogPost/";
import BlogPostParent from "@/components/features/blog/BlogPost/BlogPostParent";

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery, {
    next: {
      revalidate: 3600,
    },
  });

  return posts;
}

// TODO: Fix Generate Metadata server-side
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

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  const isDraftMode = draftMode().isEnabled;

  if (!post) return notFound();

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }

  return <BlogPostParent post={post} />;
}
