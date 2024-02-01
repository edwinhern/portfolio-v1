import { ArticleAvatar } from '@/components/article/ArticleSections/Avatar';
import { ArticleMainImage } from '@/components/article/ArticleSections/MainImage';
import { useArticleStore } from '@/components/article/context/ArticleContext';
import { IArticle } from '@/sanity/types/test';

export const ArticleHeader = () => {
  const { article } = useArticleStore();
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
