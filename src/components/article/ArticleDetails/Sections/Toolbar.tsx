import Link from 'next/link';

import { useArticleDetailsStore } from '@/components/article/ArticleDetails/context';
import { useArticleType } from '@/components/article/ArticleDetails/hooks/';
import { ShareDropdown } from '@/components/article/ArticleDetails/Share/Dropdown';
import { baseUrl } from '@/lib/networkUtils';

export const ArticleToolbar = () => {
  const { article } = useArticleDetailsStore();
  const { href = '', label = '', urlTag = '' } = useArticleType() ?? {};

  const link = `${baseUrl}/${urlTag}/${article?.slug}`;

  return (
    <div className="flex items-center justify-between">
      <Link href={href} className="text-base font-normal no-underline transition hover:opacity-70">
        ← Back to all {label}
      </Link>
      <ShareDropdown link={link} title={article?.title as string} />
    </div>
  );
};
