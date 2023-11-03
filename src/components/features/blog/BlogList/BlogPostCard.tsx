import Link from "next/link";

export const BlogPostCard = ({ post, index }: { post: any; index: number }) => {
  const delay = 80 * index;
  const { title, slug, publishedAt } = post;
  return (
    <li key={title} className="mb-6">
      <Link href={`/blog/${slug.current}`}>
        <div
          className="flex items-center justify-between transition hover:opacity-70"
          style={{ animationDelay: `${delay}ms` }}
        >
          <div className="flex-1 truncate pr-4">
            <span className="block truncate text-lg font-medium">{title}</span>
          </div>
          <time className="ml-4 text-sm text-neutral-500 dark:text-neutral-300">
            {new Date(publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </time>
        </div>
      </Link>
    </li>
  );
};
