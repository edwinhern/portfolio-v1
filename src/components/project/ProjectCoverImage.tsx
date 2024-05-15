import type { Image as SanityImage } from 'sanity';

import { urlForImage } from '@/sanity/lib/image';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface CoverImageProps {
  image: SanityImage;
  priority: boolean;
  slug: string;
  title: string;
}

export default function CoverImage({ image: source, priority, slug, title }: CoverImageProps) {
  // @ts-ignore: Object is possibly 'undefined'
  const imageUrl = urlForImage(source).height(1000).width(2000).url();

  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <Image
        alt={`Cover Image for ${title}`}
        className="h-auto w-full rounded-lg"
        height={1000}
        priority={priority}
        sizes="100vw"
        src={imageUrl}
        width={2000}
      />
    </div>
  ) : (
    <div style={{ backgroundColor: '#ddd', paddingTop: '50%' }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link aria-label={title} href={`/project/${slug}`}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
