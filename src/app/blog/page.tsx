import { BlogList } from "@/components/Blog/BlogList";
import { fetchMediumArticles } from "@/services";
import { notFound } from "next/navigation";
import { seoConfig } from "@/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...seoConfig,
  title: "Tech Blog Posts by Edwin H - Full Stack Developer",
  description:
    "Dive into insightful articles covering front-end, back-end development, and more by Edwin H.",
  openGraph: {
    ...seoConfig.openGraph,
    title: "Tech Blog Posts by Edwin H - Full Stack Developer",
    description:
      "Explore various technical topics through the lens of a seasoned full-stack developer, Edwin H.",
  },
};

export default async function BlogPage() {
  const articles = await fetchMediumArticles();
  if (!articles || articles.length === 0) return notFound();

  return <BlogList articles={articles} />;
}
