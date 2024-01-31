import ContentParent from '@/components/content/ContentParent';
import { PostWithDetails } from '@/sanity/types';

const ProjectSlugPage = ({ project }: { project: PostWithDetails }) => {
  return <ContentParent contentData={project} contentType={'project'} />;
};

export default ProjectSlugPage;
