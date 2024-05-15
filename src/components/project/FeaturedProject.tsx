import { IAuthor } from '@/sanity/types';
import Link from 'next/link';
import { Image } from 'sanity';

import ProjectAuthorAvatar from '@/components/project/ProjectAuthorAvatar';
import CoverImage from '@/components/project/ProjectCoverImage';
import FormattedDate from '@/components/ui/formatted-date';

interface FeaturedProjectProps {
  author: IAuthor;
  coverImage: Image;
  date: string;
  excerpt: string;
  slug: string;
  title: string;
}

export default function FeaturedProject({ author, coverImage, date, excerpt, slug, title }: FeaturedProjectProps) {
  return (
    <>
      <section>
        <div className="mb-8 md:mb-16">
          <CoverImage image={coverImage} priority slug={slug} title={title} />
        </div>
        <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
          <div>
            <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
              <Link className="hover:underline" href={`/project/${slug}`}>
                {title}
              </Link>
            </h3>
            <div className="mb-4 text-lg md:mb-0">
              <FormattedDate dateString={date} />
            </div>
          </div>
          <div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
            {author && <ProjectAuthorAvatar name={author.name} picture={author.image} />}
          </div>
        </div>
      </section>
    </>
  );
}
