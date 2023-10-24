import { BlogContent } from "@/components/Blog/BlogPost/BlogContent";
import { fetchMediumArticleByTitle } from "@/services";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const article = await fetchMediumArticleByTitle(params.slug);
  if (!article) return notFound();

  return <BlogContent article={article} />;
}
