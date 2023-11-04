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
import { calculateReadingTime } from "./utils/calculateReadingTime";

const builder = imageUrlBuilder(client);

const buildImageUrl = (image: any, width: number, height: number) =>
  builder.image(image).width(width).height(height).url();

export default function BlogContent({ post }: { post: SanityDocument }) {
  const isClient = useIsMounted();
  const { title, mainImage, body, author, publishedAt } = post;
  const readTime = calculateReadingTime(body);
  const datePubished =
    new Date(publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    }) ?? null;
  return (
    isClient && (
      <main className="container mx-auto prose dark:prose-invert prose-lg max-w-prose">
        <h1 className="text-2xl font-extrabold leading-9 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          {title}
        </h1>
        <AuthorAvatar
          datePublished={datePubished}
          readTime={readTime}
          {...(author as Author)}
        />
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
