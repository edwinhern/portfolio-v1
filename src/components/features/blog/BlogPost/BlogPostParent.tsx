import BlogContent from "@/components/features/blog/BlogPost/BlogContent";
import { BlogLayout } from "@/components/Layout/BlogLayout";
import { BlogPostWithDetails } from "@/sanity/types";

interface BlogPostParentProps {
  post: BlogPostWithDetails;
}

const BlogPostParent = ({ post }: BlogPostParentProps) => {
  const metaData = {
    title: post.title,
    slug: post.slug,
  };

  return (
    <BlogLayout metadata={metaData}>
      <BlogContent post={post} />
    </BlogLayout>
  );
};

export default BlogPostParent;
