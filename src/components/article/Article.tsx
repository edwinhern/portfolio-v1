'use client';

import { PortableText } from '@portabletext/react';

import { ArticleHeader } from '@/components/article/ArticleSections/Header';
import { ArticleToolbar } from '@/components/article/ArticleSections/Toolbar';
import { useArticleStore } from '@/components/article/context/ArticleContext';
import { BackToTopButton } from '@/components/ui/back-to-top-button';
import { Separator } from '@/components/ui/separator';
import RichTextComponent from '@/sanity/components';
import { IArticle } from '@/sanity/types/test';

export const Article = () => {
  const { article } = useArticleStore();
  const { body } = article as IArticle;

  return (
    <article className="prose prose-lg mx-auto flex w-full max-w-prose flex-col gap-4 dark:prose-invert">
      <ArticleToolbar />

      <div className="animate-slideFromDownAndFade">
        <ArticleHeader />
        {body && <PortableText value={body} components={RichTextComponent} />}
        <Separator />
        {/* Footer */}
      </div>
      <BackToTopButton />
    </article>
  );
};
