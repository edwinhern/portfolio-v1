'use client';

import { IArticle } from '@/sanity/types';
import { create } from 'zustand';

type IArticleDetailsStore = {
  article: IArticle | null;
};

export const useArticleDetailsStore = create<IArticleDetailsStore>((set) => ({
  article: null,
}));
