'use client';

import FeaturedProject from '@/components/project/FeaturedProject';
import ProjectGrid from '@/components/project/ProjectGrid';
import { ProjectPost } from '@/sanity/types';

const ProjectListParent = ({ projects }: { projects: ProjectPost[] }) => {
  if (!projects) {
    return <div className="text-center">No projects available.</div>;
  }

  const [mainPost, ...morePosts] = projects;

  return (
    <>
      {mainPost && (
        <FeaturedProject
          key={mainPost._id}
          title={mainPost.title}
          coverImage={mainPost.mainImage}
          date={mainPost.publishedAt}
          excerpt={mainPost.excerpt}
          author={mainPost.author}
          slug={mainPost.slug}
        />
      )}
      {morePosts.length > 0 && <ProjectGrid projects={morePosts} />}
    </>
  );
};

export default ProjectListParent;
