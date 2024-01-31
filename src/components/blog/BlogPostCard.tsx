import Link from 'next/link';

import FormattedDate from '@/components/ui/formatted-date';
import { BlogPost } from '@/sanity/types';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  const delay = 60 * index;
  const { title, slug, publishedAt } = post;

  return (
    <li key={title} className="mb-6 hover:opacity-70">
      <Link href={`/blog/${slug}`}>
        <div
          className="flex items-center justify-between transition md:animate-fade-in"
          style={{ animationDelay: `${delay}ms` }}
        >
          <div className="flex-1 truncate pr-4">
            <span className="block truncate text-lg font-medium">{title}</span>
          </div>
          <div className="ml-4 text-sm text-neutral-500 dark:text-neutral-300">
            <FormattedDate dateString={publishedAt} dateType="medium" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default BlogPostCard;
