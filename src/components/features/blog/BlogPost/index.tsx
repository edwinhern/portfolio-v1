"use client";

import { useParams } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery } from "@/sanity/lib/queries";
import BlogPostParent from "./BlogPostParent";

export default function PreviewBlogPost({ post }: { post: SanityDocument }) {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  return <BlogPostParent post={data} />;
}
