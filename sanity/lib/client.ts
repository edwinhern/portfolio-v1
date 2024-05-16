import { apiVersion, dataset, projectId, revalidateSecret } from '@/sanity/lib/api';
import { createClient } from 'next-sanity';

export const client = createClient({
  apiVersion,
  dataset,
  perspective: 'published',
  projectId,
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
  useCdn: revalidateSecret ? false : true,
});
