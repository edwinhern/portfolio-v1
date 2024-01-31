'use client';

import { useMemo, useState } from 'react';

import { BlogPost } from '@/sanity/types';

export const useBlogFilter = (posts: BlogPost[]) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const uniqueBlogTags = useMemo(() => {
    return Array.from(new Set(posts.flatMap((post) => post.categories.map((category) => category.title))));
  }, [posts]);

  const isPostVisible = (post: BlogPost) => {
    if (selectedTags.length === 0) return true;
    return post.categories.some((category) => selectedTags.includes(category.title));
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag) ? currentTags.filter((t) => t !== tag) : [...currentTags, tag]
    );
  };

  return { uniqueBlogTags, selectedTags, handleTagToggle, isPostVisible };
};
