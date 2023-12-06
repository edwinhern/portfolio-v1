import Link from "next/link";
import { Image } from "sanity";

import ProjectAuthorAvatar from "@/components/project/ProjectAuthorAvatar";
import CoverImage from "@/components/project/ProjectCoverImage";
import FormattedDate from "@/components/ui/formatted-date";
import { Author, ProjectPost } from "@/sanity/types";

interface ProjectPlugProps {
  title: string;
  coverImage: Image;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

const ProjectCard = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: ProjectPlugProps) => {
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
      {author && (
        <ProjectAuthorAvatar name={author.name} picture={author.image} />
      )}
    </div>
  );
};

const ProjectGrid = ({ projects }: { projects: ProjectPost[] }) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
