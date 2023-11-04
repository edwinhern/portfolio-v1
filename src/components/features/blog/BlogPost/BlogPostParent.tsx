"use client";

import { SanityDocument } from "@sanity/client";
import { useIsMounted } from "@/hooks/useIsMounted";
import { BlogLayout } from "@/components/Layout/BlogLayout";
import BlogContent from "./BlogContent";
import { useParams } from "next/navigation";

export default function BlogPostParent({ post }: { post: SanityDocument }) {
  const params = useParams();
  const isClient = useIsMounted();
  const metaData = {
    slug: params.slug,
    title: post.title,
  };

  return (
    isClient && (
      <BlogLayout metadata={metaData}>
        <BlogContent post={post} />
      </BlogLayout>
    )
  );
}
