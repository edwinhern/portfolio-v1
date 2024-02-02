'use client';

import { create } from 'zustand';

import { IArticleBase } from '@/sanity/types';

type IArticleListStore = {
  articles: IArticleBase[];
  filteredArticles: IArticleBase[];
  updateFilteredArticles: (updatedArticles: IArticleBase[]) => void;
};

export const useArticleListStore = create<IArticleListStore>((set) => ({
  articles: [],
  filteredArticles: [],
  updateFilteredArticles: (updatedArticles) => set({ filteredArticles: updatedArticles }),
}));
