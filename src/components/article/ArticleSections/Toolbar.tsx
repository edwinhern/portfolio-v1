import Link from 'next/link';

import { useArticleStore } from '@/components/article/context/ArticleContext';
import { ShareDropdown } from '@/components/article/Share/Dropdown';
import { useContentContext } from '@/contexts/ContentContext';
import { baseUrl } from '@/lib/network-utils';

export const ArticleToolbar = () => {
  const { article } = useArticleStore();
  const { contentType, contentTypes } = useContentContext();
  const contentTypeData = contentTypes[contentType];
  const backLinkHref = contentTypeData.href;
  const backLinkName = contentTypeData.name;

  const link = `${baseUrl}/${contentType}/${article?.slug}`;

  return (
    <div className="flex items-center justify-between">
      <Link href={backLinkHref} className="text-base font-normal no-underline transition hover:opacity-70">
        ← Back to all {backLinkName}
      </Link>
      <ShareDropdown link={link} title={article?.title as string} />
    </div>
  );
};
