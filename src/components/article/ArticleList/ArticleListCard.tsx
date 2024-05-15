import { IArticleBase } from '@/sanity/types';
import Link from 'next/link';

import { useArticleListStore } from '@/components/article/ArticleList/context';
import FormattedDate from '@/components/ui/formatted-date';

export const ArticleListCard = () => {
  const { filteredArticles } = useArticleListStore();
  const sortedArticles = filteredArticles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <ul className="mt-10">
      {sortedArticles.map((article, index) => (
        <ArticleCard article={article} index={index} key={article._id} />
      ))}
    </ul>
  );
};

interface ArticleCardProps {
  article: IArticleBase;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const delay = 60 * index;
  const { publishedAt, slug, title } = article;

  return (
    <li className="mb-6 hover:opacity-70">
      {/* TODO: Update for link to be based on type based rather than hardcoded */}
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
