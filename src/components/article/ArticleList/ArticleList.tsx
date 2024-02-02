'use client';

import { useEffect, useMemo, useState } from 'react';

import { ArticleListCard } from '@/components/article/ArticleList/ArticleListCard';
import { useArticleListStore } from '@/components/article/ArticleList/context';
import { MultiSelect } from '@/components/ui/multi-select';
import { IArticleBase } from '@/sanity/types';

interface ArticleListInitializerProps {
  articles: IArticleBase[];
}
export const ArticleListInitializer: React.FC<ArticleListInitializerProps> = ({ articles }) => {
  useArticleListStore.setState({ articles });
  return <ArticleList />;
};

export const ArticleList = () => {
  const { articles, updateFilteredArticles } = useArticleListStore();
  const [selectedTags, setSelectedTags] = useState(new Set<string>());

  const handleSelectionChange = (newSelection: Set<string>) => setSelectedTags(newSelection);

  const options = useMemo(() => {
    const tags = new Set(articles.flatMap((article) => article.categories.map((category) => category.title)));
    return Array.from(tags).map((tag) => ({ label: tag, value: tag }));
  }, [articles]);

  const isPostVisible = useMemo(() => {
    return (article: IArticleBase) => {
      if (selectedTags.size === 0) return true;
      return article.categories.some((category) => selectedTags.has(category.title.toLowerCase()));
    };
  }, [selectedTags]);

  useEffect(() => {
    updateFilteredArticles(articles.filter(isPostVisible));
  }, [articles, isPostVisible, updateFilteredArticles]);

  return (
    <>
      <MultiSelect
        title="Tag Filter"
        options={options}
        selectedValues={selectedTags}
        onSelectionChange={handleSelectionChange}
      />
      <ArticleListCard />
    </>
  );
};
