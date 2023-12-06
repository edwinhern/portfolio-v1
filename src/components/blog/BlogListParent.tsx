"use client";

import styles from "@/app/styles/BlogList.module.css";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { Badge } from "@/components/ui/badge";
import { useBlogFilter } from "@/hooks/useBlogList";
import { BlogPost } from "@/sanity/types";

interface BlogTagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const BlogTagFilter: React.FC<BlogTagFilterProps> = ({
  tags,
  selectedTags,
  onTagToggle,
}) => {
  return (
    <div
      className={`md:animate-fade-in ${styles["no-scrollbar"]} flex flex-nowrap gap-2 overflow-x-auto`}
    >
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <Badge
            className="flex-shrink-0"
            key={tag}
            variant={isSelected ? "secondary" : "default"}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </Badge>
        );
      })}
    </div>
  );
};

const BlogPostsList = ({ posts = [] }: { posts: BlogPost[] }) => {
  const sortedPosts = posts.sort(
    (a: BlogPost, b: BlogPost) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <ul className="mt-10">
      {sortedPosts.map((post, index) => (
        <BlogPostCard key={post._id} post={post} index={index} />
      ))}
    </ul>
  );
};

const BlogListParent = ({ posts = [] }: { posts: BlogPost[] }) => {
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

export default BlogListParent;
