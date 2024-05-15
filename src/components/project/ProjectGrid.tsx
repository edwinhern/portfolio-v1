import { IArticle, IAuthor } from '@/sanity/types';
import Link from 'next/link';
import { Image } from 'sanity';

import ProjectAuthorAvatar from '@/components/project/ProjectAuthorAvatar';
import CoverImage from '@/components/project/ProjectCoverImage';
import FormattedDate from '@/components/ui/formatted-date';

interface ProjectPlugProps {
  author: IAuthor;
  coverImage: Image;
  date: string;
  excerpt: string;
  slug: string;
  title: string;
}

const ProjectCard = ({ author, coverImage, date, excerpt, slug, title }: ProjectPlugProps) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage image={coverImage} priority slug={slug} title={title} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link className="hover:underline" href={`/project/${slug}`}>
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

const ProjectGrid = ({ projects }: { projects: IArticle[] }) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">More Stories</h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {projects.map((project) => (
          <ProjectCard
            author={project.author}
            coverImage={project.mainImage}
            date={project.publishedAt}
            excerpt={project.excerpt as string}
            key={project._id}
            slug={project.slug}
            title={project.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
