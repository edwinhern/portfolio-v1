import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, revalidateSecret } from '@/sanity/lib/api';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: revalidateSecret ? false : true,
  perspective: 'published',
});
