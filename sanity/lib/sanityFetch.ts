import 'server-only';

import type { QueryParams } from '@sanity/client';
import { draftMode } from 'next/headers';

import { revalidateSecret } from '@/sanity/lib/api';
import { client } from '@/sanity/lib/client';
import {
  fetchAllPostsQuery,
  fetchAllProjectsQuery,
  queryForBlogPostSlugStrings,
  queryForProjectPostSlugStrings,
  queryForSingleBlogPostBySlug,
  queryForSingleProjectPostBySlug,
} from '@/sanity/lib/queries';
import { IArticle, IArticleBase, SlugsArray } from '@/sanity/types';

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.');
  }

  const sanityClient = client.config().useCdn && isDraftMode ? client.withConfig({ useCdn: false }) : client;

  return sanityClient.fetch<QueryResponse>(query, params, {
    cache: revalidateSecret ? 'force-cache' : 'no-store',
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: 'previewDrafts',
    }),
    next: { ...(isDraftMode && { revalidate: 30 }), tags },
  });
}

export function fetchBlogPostBySlug(slug: string): Promise<IArticle | null> {
  return sanityFetch<IArticle | null>({
    query: queryForSingleBlogPostBySlug,
    params: { slug },
    tags: [`page:${slug}`],
  });
}

export function fetchAllPosts(): Promise<IArticleBase[]> {
  return sanityFetch<IArticleBase[]>({
    query: fetchAllPostsQuery,
    tags: ['post'],
  });
}

export function fetchBlogPostSlugs(): Promise<SlugsArray> {
  return client.fetch<SlugsArray>(queryForBlogPostSlugStrings, {}, { token, perspective: 'published' });
}

export function fetchAllProjects() {
  return sanityFetch<IArticle[]>({
    query: fetchAllProjectsQuery,
    tags: ['project'],
  });
}

export function fetchProjectPostBySlug(slug: string): Promise<IArticle | null> {
  return sanityFetch<IArticle | null>({
    query: queryForSingleProjectPostBySlug,
    params: { slug },
    tags: [`page:${slug}`],
  });
}

export function fetchProjectPostSlugs(): Promise<SlugsArray> {
  return client.fetch<SlugsArray>(queryForProjectPostSlugStrings, {}, { token, perspective: 'published' });
}
