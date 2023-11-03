import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Author } from "@/types/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function AuthorAvatar(prop: Author) {
  const { name, image, slug } = prop;
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Avatar>
          <AvatarImage
            src={builder.image(image).url()}
            alt={slug?.current ?? name}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
