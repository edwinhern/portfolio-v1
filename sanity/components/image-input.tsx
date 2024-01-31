import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

import { client } from '@/sanity/lib/client';

const builder = imageUrlBuilder(client);

export const ImageFieldComponent = ({ value }: any) => {
  return (
    <Image
      className="h-auto w-full rounded-lg"
      width={2000}
      height={1000}
      src={builder.image(value).url()}
      sizes="100vw"
      alt={value.alt || ' '}
      loading="lazy"
    />
  );
};

export default ImageFieldComponent;
