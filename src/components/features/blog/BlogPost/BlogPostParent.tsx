"use client";

import BlogContent from "@/components/features/blog/BlogPost/BlogContent";
import { BlogLayout } from "@/components/Layout/BlogLayout";
import { useIsMounted } from "@/hooks/useIsMounted";
import { BlogPostWithDetails } from "@/sanity/types";

interface BlogPostParentProps {
  post: BlogPostWithDetails;
}

// TODO: Test taking off isClient hook
const BlogPostParent = ({ post }: BlogPostParentProps) => {
  console.log(post);
  const isClient = useIsMounted();
  const metaData = {
    title: post.title,
    slug: post.slug,
  };

  return (
    isClient && (
      <BlogLayout metadata={metaData}>
        <BlogContent post={post} />
      </BlogLayout>
    )
  );
};

export default BlogPostParent;
