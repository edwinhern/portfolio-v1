'use client';

import { IArticleBase } from '@/sanity/types';
import { create } from 'zustand';

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
