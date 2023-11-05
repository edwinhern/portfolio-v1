"use client";

import dynamic from "next/dynamic";

import { BlogPost } from "@/sanity/types";

const BlogList = dynamic(() => import("@/components/features/blog/BlogList"));

type BlogListPreviewProps = {
  posts: BlogPost[];
};

const BlogListLivePreview = ({ posts }: BlogListPreviewProps) => {
  if (!posts) {
    return <div className="text-center">No blog posts available.</div>;
  }

  return <BlogList posts={posts} />;
};

export default BlogListLivePreview;
