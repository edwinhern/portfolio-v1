'use client';

import { create } from 'zustand';

import { IArticle } from '@/sanity/types/test';

type IArticleDetailsStore = {
  article: IArticle | null;
};

export const useArticleDetailsStore = create<IArticleDetailsStore>((set) => ({
  article: null,
}));
