import { urlForImage } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

interface ProjectAuthorAvatarProps {
  name: string;
  picture: SanityImageSource;
}

const ProjectAuthorAvatar = ({ name, picture }: ProjectAuthorAvatarProps) => {
  // @ts-ignore: Object is possibly 'undefined'
  const imageUrl = urlForImage(picture!).height(96).width(96).fit('crop').url();

  return (
    <div className="flex items-center">
      <div className="relative mr-4 size-12">
        <Image alt={name} className="rounded-full" height={96} src={imageUrl} width={96} />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default ProjectAuthorAvatar;
