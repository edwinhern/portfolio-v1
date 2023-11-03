import type { SanityDocument } from "@sanity/client";
import { BlogPostCard } from "./BlogPostCard";

interface BlogPostsListProps {
  posts: SanityDocument[];
}

export default function BlogPostsList({ posts = [] }: BlogPostsListProps) {
  return (
    <>
      <ul className="mt-10">
        {posts.map((post, index) => (
          <BlogPostCard key={post.title} post={post} index={index} />
        ))}
      </ul>
    </>
  );
}
