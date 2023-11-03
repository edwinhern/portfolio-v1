import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { seoConfig } from "@/config";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import PreviewProvider from "@/providers/PreviewProvider";
import PreviewPosts from "@/components/features/blog/BlogList/";
import BlogPostsParent from "@/components/features/blog/BlogList/BlogPostParent";

export const metadata: Metadata = {
  ...seoConfig,
  title: "Tech Blog Posts by Edwin H - Full Stack Developer",
  description:
    "Dive into insightful articles covering front-end, back-end development, and more by Edwin H.",
  openGraph: {
    ...seoConfig.openGraph,
    title: "Tech Blog Posts by Edwin H - Full Stack Developer",
    description:
      "Explore various technical topics through the lens of a seasoned full-stack developer, Edwin H.",
  },
};

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (!posts) return notFound();

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return <BlogPostsParent posts={posts} />;
}
