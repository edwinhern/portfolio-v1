import type { PortableTextBlock } from "@portabletext/types";
import type { Image } from "sanity";

export interface Author {
  name: string;
  image: Image;
  slug?: { current?: string };
}

export interface Category {
  title: string;
  description?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  tags?: string[];
  categories: Category[];
}

export interface BlogPostWithDetails extends BlogPost {
  mainImage: Image;
  body: PortableTextBlock[];
  author: Author;
}

export interface BlogPostSlug {
  params: { slug: string };
}

export type BlogPostSlugsArray = string[];
