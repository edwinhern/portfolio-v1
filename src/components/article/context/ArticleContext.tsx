'use client';

import { create } from 'zustand';

import { IArticle } from '@/sanity/types/test';

type IArticleStore = {
  article: IArticle | null;
};

export const useArticleStore = create<IArticleStore>((set) => ({
  article: null,
}));

interface ArticleInitializerProps {
  article: IArticle;
  children: React.ReactNode;
}
export const ArticleInitializer: React.FC<ArticleInitializerProps> = ({ article, children }) => {
  useArticleStore.setState({ article });
  return children;
};
