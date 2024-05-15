import { client } from '@/sanity/lib/client';
import { IArticle } from '@/sanity/types';
import { PortableTextBlock } from '@portabletext/types';
import imageUrlBuilder from '@sanity/image-url';

import { useArticleDetailsStore } from '@/components/article/ArticleDetails/context';
import { calculateReadingTime } from '@/components/article/ArticleDetails/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FormattedDate from '@/components/ui/formatted-date';

const builder = imageUrlBuilder(client);

export const ArticleAvatar = () => {
  const { article } = useArticleDetailsStore();
  const { author, body, publishedAt } = article as IArticle;
  const readTime = calculateReadingTime(body as PortableTextBlock[]);

  return (
    <div className="flex items-center gap-4">
      <Avatar className="mt-0.5">
        <AvatarImage alt={author.name} src={builder.image(author.image).url()} />
        <AvatarFallback>EH</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <h5 className="text-lg font-normal tracking-wide">{author.name}</h5>
        <span className="text-sm">
          {readTime} · <FormattedDate dateString={publishedAt} dateType="short" />
        </span>
      </div>
    </div>
  );
};
