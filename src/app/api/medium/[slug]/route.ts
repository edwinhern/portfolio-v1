import { Article } from "@/types/api/medium-articles";
import { NextRequest, NextResponse } from "next/server";
import { findArticleBySlug } from "@/lib/blog";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.pathname.replace("/api/medium/", "");
  const rssUrl = process.env.MEDIUM_RSS_URL;

  if (!rssUrl)
    return new NextResponse("RSS URL not configured", { status: 500 });

  try {
    const response = await fetch(rssUrl, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error("Medium RSS fetch failed");
    }

    const data = await response.json();
    const articles: Article[] = data.items;

    const article = findArticleBySlug(slug, articles);
    if (!article) return new NextResponse("Article not found", { status: 404 });

    return NextResponse.json(article);
  } catch (error) {
    return new NextResponse("Unable to fetch Medium article", { status: 500 });
  }
}
