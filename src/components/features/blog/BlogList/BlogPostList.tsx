import BlogPostCard from "@/components/features/blog/BlogList/BlogPostCard";
import { BlogPost } from "@/sanity/types";

interface BlogPostsListProps {
  posts: BlogPost[];
}

const BlogPostsList = ({ posts = [] }: BlogPostsListProps) => {
  posts.sort(
    (a: BlogPost, b: BlogPost) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <ul className="mt-10">
        {posts.map((post: BlogPost, index: number) => (
          <BlogPostCard key={post.title} post={post} index={index} />
        ))}
      </ul>
    </>
  );
};

export default BlogPostsList;
