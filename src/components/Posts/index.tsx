import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      {posts.map(
        (post) => (
          console.log(post.slug.current),
          (
            <Link
              key={post._id}
              href={`posts/${post.slug.current}`}
              className="p-4"
            >
              <h2 className="transition hover:opacity-70">{post.title}</h2>
            </Link>
          )
        ),
      )}
    </main>
  );
}
