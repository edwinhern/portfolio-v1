import { BlogList } from "@/components/Blog/BlogList";
import { notFound } from "next/navigation";
import { fetchMediumArticles } from "@/services";

export default async function BlogPage() {
  const articles = await fetchMediumArticles();
  if (!articles || articles.length === 0) return notFound();

  return <BlogList articles={articles} />;
}
