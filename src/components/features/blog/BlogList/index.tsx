"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postsQuery } from "@/sanity/lib/queries";
import BlogPostParent from "./BlogPostParent";

export default function PreviewPosts({
  posts = [],
}: {
  posts: SanityDocument[];
}) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <BlogPostParent posts={data} />;
}
