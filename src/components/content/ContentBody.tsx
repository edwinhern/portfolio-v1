import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

import ContentAvatar from '@/components/content/ContentAvatar';
import { Separator } from '@/components/ui/separator';
import { calculateReadingTime } from '@/lib/blog-utils';
import RichTextComponent from '@/sanity/components';
import { client } from '@/sanity/lib/client';
import { PostWithDetails } from '@/sanity/types';

interface BlogContentProps {
  post: PostWithDetails;
}

const builder = imageUrlBuilder(client);

function buildImageUrl(image: any, width: number, height: number): string | null {
  if (!image) return null;
  return builder.image(image).width(width).height(height).url();
}

const ContentBody = ({ post }: BlogContentProps) => {
  const { title, mainImage, body, author, publishedAt } = post;
  const readTime = calculateReadingTime(body as PortableTextBlock[]);

  return (
    <main className="prose prose-lg mx-auto max-w-prose dark:prose-invert">
      <div className="md:leading-14 text-2xl font-extrabold leading-9 sm:text-3xl sm:leading-10 md:text-4xl">
        {title}
      </div>
      <ContentAvatar datePublished={publishedAt} readTime={readTime} {...author} />
      {mainImage && (
        <Image
          className="rounded-lg"
          src={buildImageUrl(mainImage, 820, 420) ?? ''}
          width={820}
          height={420}
          alt={(mainImage?.alt as string) ?? ''}
          priority
        />
      )}
      <Separator />
      {body && <PortableText value={body} components={RichTextComponent} />}
    </main>
  );
};

export default ContentBody;
