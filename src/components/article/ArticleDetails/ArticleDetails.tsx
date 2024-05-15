'use client';

import RichTextComponent from '@/sanity/components';
import { IArticle } from '@/sanity/types';
import { PortableText } from '@portabletext/react';

import { ArticleHeader, ArticleToolbar } from '@/components/article/ArticleDetails/Sections/';
import { useArticleDetailsStore } from '@/components/article/ArticleDetails/context';
import { BackToTopButton } from '@/components/ui/back-to-top-button';
import { Separator } from '@/components/ui/separator';

interface ArticleDetailsInitializerProps {
  article: IArticle;
}
export const ArticleDetailsInitializer: React.FC<ArticleDetailsInitializerProps> = ({ article }) => {
  useArticleDetailsStore.setState({ article });
  return <Article />;
};

export const Article = () => {
  const { article } = useArticleDetailsStore();
  const { body } = article as IArticle;

  return (
    <article className="prose prose-lg mx-auto flex w-full max-w-prose flex-col gap-4 dark:prose-invert">
      <ArticleToolbar />

      <div className="animate-slideFromDownAndFade">
        <ArticleHeader />
        {body && <PortableText components={RichTextComponent} value={body} />}
        <Separator />
        {/* Footer */}
      </div>
      <BackToTopButton />
    </article>
  );
};
