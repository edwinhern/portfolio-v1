'use client';

import { createContext, useContext } from 'react';

interface ContentTypeDetails {
  href: string;
  name: string;
}

interface ContentTypes {
  blog: ContentTypeDetails;
  project: ContentTypeDetails;
}

interface ContentContextValue {
  contentType: 'blog' | 'project';
  contentTypes: ContentTypes;
}

export const defaultContentTypes: ContentTypes = {
  blog: {
    href: '/blog',
    name: 'posts',
  },
  project: {
    href: '/project',
    name: 'projects',
  },
};

const ContentContext = createContext<ContentContextValue>({
  contentType: 'blog',
  contentTypes: defaultContentTypes,
});

export const useContentContext = () => useContext(ContentContext);

export default ContentContext;
