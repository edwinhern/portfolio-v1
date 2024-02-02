import Link from 'next/link';

import { useArticleDetailsStore } from '@/components/article/ArticleDetails/context';
import { useArticleType } from '@/components/article/ArticleDetails/hooks/';
import { ShareDropdown } from '@/components/article/ArticleDetails/Share/Dropdown';
import { baseUrl } from '@/lib/network-utils';

export const ArticleToolbar = () => {
  const { article } = useArticleDetailsStore();
  const contentData = useArticleType();
  const backLinkHref = contentData.href;
  const backLinkName = contentData.name;

  const link = `${baseUrl}/${backLinkName}/${article?.slug}`;

  return (
    <div className="flex items-center justify-between">
      <Link href={backLinkHref} className="text-base font-normal no-underline transition hover:opacity-70">
        ← Back to all {backLinkName}
      </Link>
      <ShareDropdown link={link} title={article?.title as string} />
    </div>
  );
};
