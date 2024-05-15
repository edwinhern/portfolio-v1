import { IArticle } from '@/sanity/types';

import { ArticleAvatar, ArticleMainImage } from '@/components/article/ArticleDetails/Sections/';
import { useArticleDetailsStore } from '@/components/article/ArticleDetails/context';

export const ArticleHeader = () => {
  const { article } = useArticleDetailsStore();
  const { title } = article as IArticle;

  return (
    <>
      {/* Title */}
      <h1 className="md:leading-14 text-2xl font-extrabold leading-9 sm:text-3xl sm:leading-10 md:text-4xl">{title}</h1>
      <ArticleAvatar />
      <ArticleMainImage />
    </>
  );
};
