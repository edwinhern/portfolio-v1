import Link from 'next/link';

import ShareDropdown from '@/components/content/ShareButton/ShareDropdown';
import { BackToTopButton } from '@/components/ui/back-to-top-button';
import { useContentContext } from '@/contexts/ContentContext';
import { baseUrl } from '@/lib/network-utils';

interface BlogLayoutProps {
  children: React.ReactNode;
  metadata: { title: string; slug: string };
}

// TODO: Add Footer
const ContentLayout = ({ children, metadata }: BlogLayoutProps) => {
  const { title, slug } = metadata;
  const { contentType, contentTypes } = useContentContext();

  const contentTypeData = contentTypes[contentType];
  const backLinkHref = contentTypeData.href;
  const backLinkName = contentTypeData.name;

  return (
    <article>
      <div className="prose prose-lg mx-auto mb-8 flex max-w-prose items-center justify-between dark:prose-invert">
        <Link
          href={backLinkHref}
          className="inline-flex text-base font-normal no-underline transition hover:opacity-70"
        >
          ← Back to all {backLinkName}
        </Link>
        <div className="flex gap-2">
          <ShareDropdown link={`${baseUrl}/${contentType}/${slug}`} title={title} />
        </div>
      </div>
      <div className="animate-slideFromDownAndFade">{children}</div>

      <hr className="mx-auto my-8 w-28" />
      <BackToTopButton />
      {/* <FooterBlog /> */}
    </article>
  );
};

export default ContentLayout;
