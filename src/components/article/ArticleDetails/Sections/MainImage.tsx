import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

import { useArticleDetailsStore } from '@/components/article/ArticleDetails/context';
import { Separator } from '@/components/ui/separator';
import { client } from '@/sanity/lib/client';
import { IArticle } from '@/sanity/types';

const builder = imageUrlBuilder(client);

function buildImageUrl(image: any, width: number, height: number): string | null {
  if (!image) return null;
  return builder.image(image).width(width).height(height).url();
}

export const ArticleMainImage = () => {
  const { article } = useArticleDetailsStore();
  const { mainImage } = article as IArticle;
  return (
    <>
      {mainImage && (
        <Image
          className="flex items-center rounded-lg"
          src={buildImageUrl(mainImage, 820, 420) ?? ''}
          width={820}
          height={420}
          alt={(mainImage.alt as string) ?? ''}
          priority
        />
      )}
      <Separator />
    </>
  );
};
