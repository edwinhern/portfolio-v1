import type { SanityDocument } from "@sanity/client";
import { BlogPostCard } from "./BlogPostCard";

interface BlogPostsListProps {
  posts: SanityDocument[];
}

export default function BlogPostsList({ posts = [] }: BlogPostsListProps) {
  posts.sort(
    (a: SanityDocument, b: SanityDocument) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <ul className="mt-10">
        {posts.map((post: SanityDocument, index: number) => (
          <BlogPostCard key={post.title} post={post} index={index} />
        ))}
      </ul>
    </>
  );
}
