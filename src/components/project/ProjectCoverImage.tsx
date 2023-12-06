import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import type { Image as SanityImage } from "sanity";

import { urlForImage } from "@/sanity/lib/image";

interface CoverImageProps {
  title: string;
  slug: string;
  image: SanityImage;
  priority: boolean;
}

export default function CoverImage({
  title,
  slug,
  image: source,
  priority,
}: CoverImageProps) {
  // @ts-ignore: Object is possibly 'undefined'
  const imageUrl = urlForImage(source).height(1000).width(2000).url();

  const image = source?.asset?._ref ? (
    <div
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    >
      <Image
        className="w-full h-auto rounded-lg"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={imageUrl}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/project/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
