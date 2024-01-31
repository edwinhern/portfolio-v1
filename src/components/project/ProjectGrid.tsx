import Link from 'next/link';
import { Image } from 'sanity';

import ProjectAuthorAvatar from '@/components/project/ProjectAuthorAvatar';
import CoverImage from '@/components/project/ProjectCoverImage';
import FormattedDate from '@/components/ui/formatted-date';
import { Author, ProjectPost } from '@/sanity/types';

interface ProjectPlugProps {
  title: string;
  coverImage: Image;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

const ProjectCard = ({ title, coverImage, date, excerpt, author, slug }: ProjectPlugProps) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/project/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <FormattedDate dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {author && <ProjectAuthorAvatar name={author.name} picture={author.image} />}
    </div>
  );
};

const ProjectGrid = ({ projects }: { projects: ProjectPost[] }) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">More Stories</h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            coverImage={project.mainImage}
            date={project.publishedAt}
            author={project.author}
            slug={project.slug}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
