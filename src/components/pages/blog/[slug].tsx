import ContentParent from "@/components/content/ContentParent";
import { PostWithDetails } from "@/sanity/types";

const BlogSlugPage = ({ post }: { post: PostWithDetails }) => {
  return <ContentParent contentData={post} contentType={"blog"} />;
};

export default BlogSlugPage;
