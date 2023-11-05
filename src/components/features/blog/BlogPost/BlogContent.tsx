import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

import AuthorAvatar from "@/components/features/blog/BlogPost/AuthorAvatar";
import { Separator } from "@/components/ui/separator";
import RichTextComponent from "@/sanity/components";
import { client } from "@/sanity/lib/client";
import { BlogPostWithDetails } from "@/sanity/types";

import { calculateReadingTime } from "./utils/calculateReadingTime";

interface BlogContentProps {
  post: BlogPostWithDetails;
}

const builder = imageUrlBuilder(client);

function buildImageUrl(
  image: any,
  width: number,
  height: number,
): string | null {
  if (!image) return null;
  return builder.image(image).width(width).height(height).url();
}

const BlogContent = ({ post }: BlogContentProps) => {
  const { title, mainImage, body, author, publishedAt } = post;
  const readTime = calculateReadingTime(body as PortableTextBlock[]);
  const formattedPublishDate = new Date(publishedAt).toLocaleDateString(
    "en-US",
    { month: "short", day: "2-digit" },
  );

  return (
    <main className="container mx-auto prose dark:prose-invert prose-lg max-w-prose">
      <h1 className="text-2xl font-extrabold leading-9 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        {title}
      </h1>
      <AuthorAvatar
        datePublished={formattedPublishDate}
        readTime={readTime}
        {...author}
      />
      {mainImage && (
        <Image
          className="rounded-lg"
          src={buildImageUrl(mainImage, 820, 420) ?? ""}
          width={820}
          height={420}
          alt={(mainImage?.alt as string) ?? ""}
          priority
        />
      )}
      <Separator />
      {body && <PortableText value={body} components={RichTextComponent} />}
    </main>
  );
};

export default BlogContent;
