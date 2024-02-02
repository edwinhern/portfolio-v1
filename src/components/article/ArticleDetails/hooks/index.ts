'use client';

import { usePathname } from 'next/navigation';

interface IContentTypeDetails {
  href: string;
  name: string;
}

const articleTypes: Record<string, IContentTypeDetails> = {
  blog: {
    href: '/blog',
    name: 'posts',
  },
  project: {
    href: '/project',
    name: 'projects',
  },
};

export const useArticleType = () => {
  const pathname = usePathname();
  const key = pathname.split('/')[1];

  return articleTypes[key] as IContentTypeDetails;
};
