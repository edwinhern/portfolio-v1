import Link from 'next/link';

import { ShareDropdown } from '@/components/article/ArticleDetails/Share/Dropdown';
import { useArticleDetailsStore } from '@/components/article/ArticleDetails/context';
import { useArticleType } from '@/components/article/ArticleDetails/hooks/';

export const ArticleToolbar = () => {
  const { article } = useArticleDetailsStore();
  const { href = '', label = '', urlTag = '' } = useArticleType() ?? {};

  const link = `${process.env.NEXT_PUBLIC_VERCEL_URL}/${urlTag}/${article?.slug}`;

  return (
    <div className="flex items-center justify-between">
      <Link className="text-base font-normal no-underline transition hover:opacity-70" href={href}>
        ← Back to all {label}
      </Link>
      <ShareDropdown link={link} title={article?.title as string} />
    </div>
  );
};
