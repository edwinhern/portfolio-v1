"use client";

import BlogPostsList from "@/components/features/blog/BlogList/BlogPostList";
import BlogTagFilter from "@/components/features/blog/BlogList/BlogTagFilter";
import { BlogPost } from "@/sanity/types";

import { useBlogFilter } from "./hooks/useBlogList";

export interface BlogPostsParentProps {
  posts: BlogPost[];
}

const BlogList = ({ posts = [] }: BlogPostsParentProps) => {
  const { uniqueBlogTags, selectedTags, handleTagToggle, isPostVisible } =
    useBlogFilter(posts);

  return (
    <>
      <BlogTagFilter
        tags={uniqueBlogTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
      />
      <BlogPostsList posts={posts.filter(isPostVisible)} />
    </>
  );
};

export default BlogList;
