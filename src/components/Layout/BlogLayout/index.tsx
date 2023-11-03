import Link from "next/link";

import { ChildProp } from "@/types/common";
import { CopyLinkButton } from "@/components/features/blog/BlogPost/ShareButton/CopyLinkButton";
import { TwitterShareButton } from "@/components/features/blog/BlogPost/ShareButton/TwitterShareButton";
import { baseUrl } from "@/config";

interface BlogContentProps extends ChildProp {
  metadata: any;
}

// TODO: Move pubDate in the same line spacebetween the AuthorAvatar component
export const BlogLayout: React.FC<BlogContentProps> = ({
  children,
  metadata,
}) => {
  const { title, slug, pubDate } = metadata;

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
            <CopyLinkButton link={`${baseUrl}/blog/${slug}`} />
            <TwitterShareButton title={title} baseUrl={baseUrl} slug={slug} />
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
