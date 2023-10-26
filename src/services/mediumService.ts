import { Article } from "@/types/api/medium-articles";

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

export async function fetchMediumArticleByTitle(slug: string) {
  try {
    const response = await fetch(`${baseUrl}/api/medium/${slug}`, {
      next: { revalidate: 1800 },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    return (await response.json()) as Article;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
