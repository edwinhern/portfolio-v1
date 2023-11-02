import { BlogContent } from "@/components/Blog/BlogPost/BlogContent";
import { fetchMediumArticleByTitle } from "@/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoConfig } from "@/config";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: BlogPostPageProps): Promise<Metadata> {
  const article = await fetchMediumArticleByTitle(slug);
  const blogTitle = article?.title ?? slug;
  const blogTopic = article?.categories
    ? article.categories.join(" ")
    : "the topic";

  return {
    ...seoConfig,
    title: `Blog: ${blogTitle} - Edwin H - Portfolio`,
    description: `Read the blog post titled "${blogTitle}" by Edwin H to dive into ${blogTopic}.`,
    openGraph: {
      ...seoConfig.openGraph,
      title: `Blog: ${blogTitle} - Edwin H - Portfolio`,
      description: `Edwin H elaborates on ${blogTopic} in his blog post titled "${blogTitle}".`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const article = await fetchMediumArticleByTitle(params.slug);
  if (!article) return notFound();

  return <BlogContent article={article} />;
}
