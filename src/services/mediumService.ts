import { findArticleBySlug } from "@/lib/blog";
import { Article } from "@/types/api/medium-articles";

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

export async function fetchMediumArticles() {
  try {
    const response = await fetch(`/api/medium`);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const articles: Article[] = await response.json();
    return articles;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function fetchMediumArticleByTitle(slug: string) {
  try {
    const response = await fetch(`/api/medium`);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const articles: Article[] = await response.json();
    const article = findArticleBySlug(slug, articles);
    return article;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
