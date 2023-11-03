"use client";

import type { SanityDocument } from "@sanity/client";
import BlogPostsList from "@/components/features/blog/BlogList/BlogPostList";
import { useMemo, useState } from "react";
import { BlogTagFilter } from "./BlogTagFilter";
import { Category } from "@/types/features/blog";

export interface BlogPostsParentProps {
  posts: SanityDocument[];
}

export default function BlogPostsParent({ posts = [] }: BlogPostsParentProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const uniqueBlogTags = useMemo(() => {
    return Array.from(
      new Set(
        posts.flatMap((post) =>
          post.categories.map((category: Category) => category.title),
        ),
      ),
    );
  }, [posts]);

  const isPostVisible = (post: any) => {
    if (selectedTags.length === 0) return true;
    return post.categories.some((category: Category) =>
      selectedTags.includes(category.title),
    );
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((t) => t !== tag)
        : [...currentTags, tag],
    );
  };

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
}
