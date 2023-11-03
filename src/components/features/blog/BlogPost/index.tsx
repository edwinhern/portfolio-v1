"use client";

import { useParams } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery } from "@/sanity/lib/queries";
import { BlogLayout } from "@/components/Layout/BlogLayout";
import BlogPostParent from "./BlogPostParent";

export default function PreviewBlogPost({ post }: { post: SanityDocument }) {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  const metaData = {
    slug: params.slug,
    title: data.title,
    pubDate: new Date(),
  };

  return (
    <BlogLayout metadata={metaData}>
      <BlogPostParent post={data} />
    </BlogLayout>
  );
}
