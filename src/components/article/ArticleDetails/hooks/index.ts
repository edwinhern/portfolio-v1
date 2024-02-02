'use client';

import { usePathname } from 'next/navigation';

interface IContentTypeDetails {
  href: string;
  label: string;
  urlTag: string;
}

const articleTypes: Record<string, IContentTypeDetails> = {
  blog: {
    href: '/blog',
    label: 'posts',
    urlTag: 'blog',
  },
  project: {
    href: '/project',
    label: 'projects',
    urlTag: 'project',
  },
};

export const useArticleType = () => {
  const pathname = usePathname();
  const key = pathname.split('/')[1];

  return articleTypes[key] as IContentTypeDetails;
};
