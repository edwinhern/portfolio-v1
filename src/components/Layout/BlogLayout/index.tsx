import Link from "next/link";

import ScrollToTopButton from "@/components/common/ScrollToTop";
import { CopyLinkButton } from "@/components/features/blog/BlogPost/ShareButton/CopyLinkButton";
import { TwitterShareButton } from "@/components/features/blog/BlogPost/ShareButton/TwitterShareButton";
import { baseUrl } from "@/config";

interface BlogLayoutProps {
  children: React.ReactNode;
  metadata: {
    title: string;
    slug: string;
  };
}

export const BlogLayout = ({ children, metadata }: BlogLayoutProps) => {
  const { title, slug } = metadata;

  return (
    <article>
      <div className="container mx-auto prose dark:prose-invert prose-lg max-w-prose mb-8 flex items-center justify-between">
        <Link
          href="/blog"
          className="text-base inline-flex font-normal no-underline transition hover:opacity-70"
        >
          ← Back to all posts
        </Link>
        <div className="flex gap-2">
          <CopyLinkButton link={`${baseUrl}/blog/${slug}`} />
          <TwitterShareButton title={title} baseUrl={baseUrl} slug={slug} />
        </div>
      </div>
      <div className="md:animate-slideFromDownAndFade">{children}</div>

      <hr className="mx-auto my-8 w-28" />
      <ScrollToTopButton />
      {/* <FooterBlog /> */}
    </article>
  );
};
