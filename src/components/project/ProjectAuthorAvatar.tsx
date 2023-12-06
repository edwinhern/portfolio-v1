import Image from "next/image";
import type { Image as SanityImage } from "sanity";

import { urlForImage } from "@/sanity/lib/image";

interface ProjectAuthorAvatarProps {
  name: string;
  picture: SanityImage;
}

const ProjectAuthorAvatar = ({ name, picture }: ProjectAuthorAvatarProps) => {
  // @ts-ignore: Object is possibly 'undefined'
  const imageUrl = urlForImage(picture!).height(96).width(96).fit("crop").url();

  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={imageUrl}
          className="rounded-full"
          height={96}
          width={96}
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default ProjectAuthorAvatar;
