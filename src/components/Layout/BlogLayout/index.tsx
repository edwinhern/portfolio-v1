import Link from "next/link";

import { ChildProp } from "@/types/common";
import { CopyLinkButton } from "@/components/features/blog/BlogPost/ShareButton/CopyLinkButton";
import { TwitterShareButton } from "@/components/features/blog/BlogPost/ShareButton/TwitterShareButton";
import { baseUrl } from "@/config";
import ScrollToTopButton from "@/components/common/ScrollToTop";

interface BlogContentProps extends ChildProp {
  metadata: any;
}

// TODO: Move pubDate in the same line spacebetween the AuthorAvatar component
export const BlogLayout: React.FC<BlogContentProps> = ({
  children,
  metadata,
}) => {
  const { title, slug } = metadata;

  return (
    <article>
      <div className="container mx-auto prose dark:prose-invert prose-lg max-w-prose mb-8 flex items-center justify-between">
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

      <hr className="mx-auto my-8 w-28" />
      <ScrollToTopButton />
      {/* <FooterBlog /> */}
    </article>
  );
};
