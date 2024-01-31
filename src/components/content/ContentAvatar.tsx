import imageUrlBuilder from '@sanity/image-url';

import FormattedDate from '@/components/ui/formatted-date';
import { client } from '@/sanity/lib/client';
import { Author } from '@/sanity/types';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const builder = imageUrlBuilder(client);

type AuthorAvatarProps = Author & {
  datePublished: string;
  readTime: string;
};

export default function ContentAvatar(prop: AuthorAvatarProps) {
  const { name, image, datePublished, readTime } = prop;
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Avatar>
          <AvatarImage src={builder.image(image as any).url()} alt={name} />
          <AvatarFallback>EH</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col pt-1">
        <div className="text-lg font-normal tracking-wide">{name}</div>
        <span className="text-sm">
          {readTime} · <FormattedDate dateString={datePublished} dateType="short" />
        </span>
      </div>
    </div>
  );
}
