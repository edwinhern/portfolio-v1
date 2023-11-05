import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/lib/client";
import { Author } from "@/sanity/types";

import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";

const builder = imageUrlBuilder(client);

type AuthorAvatarProps = Author & {
  datePublished: string;
  readTime: string;
};

export default function AuthorAvatar(prop: AuthorAvatarProps) {
  const { name, image, slug, datePublished, readTime } = prop;
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Avatar>
          <AvatarImage
            src={builder.image(image as any).url()}
            alt={(slug as string) ?? name}
          />
          <AvatarFallback>EH</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col pt-1">
        <div className="text-lg tracking-wide font-normal">{name}</div>
        <span className="text-sm">
          {readTime} · {datePublished}
        </span>
      </div>
    </div>
  );
}
