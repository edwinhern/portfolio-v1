import type { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { Image } from 'sanity';

export interface IAuthor {
  name: string;
  image: SanityImageSource;
  slug?: string;
}

export interface ICategory {
  title: string;
}

export interface IArticleBase {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  categories: ICategory[];
}

export interface IArticle extends IArticleBase {
  author: IAuthor;
  mainImage: Image;
  excerpt?: string;
  body?: PortableTextBlock[];
  tags?: string[];
}
