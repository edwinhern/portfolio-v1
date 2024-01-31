import BlogListParent from '@/components/blog/BlogListParent';
import { BlogPost } from '@/sanity/types';

const BlogIndexPage = ({ posts = [] }: { posts: BlogPost[] }) => {
  return <BlogListParent posts={posts} />;
};

export default BlogIndexPage;
