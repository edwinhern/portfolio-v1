'use client';

import { IArticle } from '@/sanity/types';

import FeaturedProject from '@/components/project/FeaturedProject';
import ProjectGrid from '@/components/project/ProjectGrid';

const ProjectListParent = ({ projects }: { projects: IArticle[] }) => {
  if (!projects) {
    return <div className="text-center">No projects available.</div>;
  }

  const [mainPost, ...morePosts] = projects;

  return (
    <>
      {mainPost && (
        <FeaturedProject
          author={mainPost.author}
          coverImage={mainPost.mainImage}
          date={mainPost.publishedAt}
          excerpt={mainPost.excerpt as string}
          key={mainPost._id}
          slug={mainPost.slug}
          title={mainPost.title}
        />
      )}
      {morePosts.length > 0 && <ProjectGrid projects={morePosts} />}
    </>
  );
};

export default ProjectListParent;
