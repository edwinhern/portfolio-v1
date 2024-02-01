import type { PortableTextBlock } from '@portabletext/types';
import type { Image } from 'sanity';

export interface Author {
  name: string;
  image: Image;
  slug?: string;
}

export interface Category {
  title: string;
}

export interface BasePost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  categories: Category[];
}

export interface BlogPost extends BasePost {}

export interface BlogPostWithDetails extends BlogPost {
  author: Author;
  mainImage: Image;
  body: PortableTextBlock[];
}

export type SlugsArray = string[];

export interface ProjectPost extends BasePost {
  author: Author;
  mainImage: Image;
  excerpt: string;
}

export interface PostWithDetails extends BasePost {
  author: Author;
  mainImage: Image;
  body?: PortableTextBlock[];
  excerpt?: string;
}
