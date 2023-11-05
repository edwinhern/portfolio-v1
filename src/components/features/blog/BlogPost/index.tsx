"use client";

import BlogPostParent from "@/components/features/blog/BlogPost/BlogPostParent";
import { BlogPostWithDetails } from "@/sanity/types";

const BlogPostDetail = ({ post }: { post: BlogPostWithDetails }) => {
  return <BlogPostParent post={post} />;
};

export default BlogPostDetail;
