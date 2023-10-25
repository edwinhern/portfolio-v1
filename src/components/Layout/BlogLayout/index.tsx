import Link from "next/link";

import { ChildProp } from "@/types/common";
import { Article } from "@/types/api/medium-articles";
import { CopyLink } from "@/components/Blog/BlogPost/Buttons/CopyLink";
import { TwitterLink } from "@/components/Blog/BlogPost/Buttons/TwitterLink";
interface BlogContentProps extends ChildProp {
  metadata: Article;
}

export const BlogLayout: React.FC<BlogContentProps> = ({
  children,
  metadata,
}) => {
  const { title, slug, pubDate } = metadata;
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

  return (
    <>
      <article>
        <div className="mb-12 flex items-center justify-between px-4">
          <Link
            href="/blog"
            className="text-bg- inline-flex font-normal no-underline transition hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            ← back to all posts
          </Link>
          <div className="flex gap-2">
            <CopyLink link={`${baseUrl}/blog/${slug}`} />
            <TwitterLink title={title} baseUrl={baseUrl} slug={slug} />
          </div>
        </div>
        <div className="animate-slideFromDownAndFade">{children}</div>
        <div className="mt-8 flex flex-col text-right text-sm text-gray-600 dark:text-gray-400">
          <span className="mb-1">
            Published:{" "}
            {new Date(pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }) ?? null}
          </span>
        </div>

        <hr className="mx-auto my-8 w-28" />

        {/* <FooterBlog /> */}
      </article>
    </>
  );
};
