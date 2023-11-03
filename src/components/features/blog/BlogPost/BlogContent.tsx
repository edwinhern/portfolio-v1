"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Author } from "@/sanity/types";
import AuthorAvatar from "@/components/features/blog/BlogPost/AuthorAvatar";
import { Separator } from "@/components/ui/separator";
import RichTextComponent from "@/sanity/components";

const builder = imageUrlBuilder(client);

const buildImageUrl = (image: any, width: number, height: number) =>
  builder.image(image).width(width).height(height).url();

export default function BlogContent({ post }: { post: SanityDocument }) {
  const isClient = useIsMounted();
  const { title, mainImage, body, author } = post;
  return (
    isClient && (
      <main className="container mx-auto prose dark:prose-invert prose-lg max-w-prose p-4">
        <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {title}
        </h1>
        <AuthorAvatar {...(author as Author)} />
        {mainImage && (
          <Image
            className="rounded-lg"
            src={buildImageUrl(mainImage, 820, 420)}
            width={820}
            height={420}
            alt={mainImage?.alt}
          />
        )}
        <Separator />
        {body && <PortableText value={body} components={RichTextComponent} />}
      </main>
    )
  );
}
