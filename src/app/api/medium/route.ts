import { Article } from "@/types/api/medium-articles";
import { NextResponse } from "next/server";

export async function GET() {
  const rssUrl = process.env.MEDIUM_RSS_URL;
  if (!rssUrl)
    return new NextResponse("RSS URL not configured", { status: 500 });

  try {
    const response = await fetch(rssUrl, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error("Medium RSS fetch failed");
    }

    const data = await response.json();
    const items: Article[] = data.items;

    return NextResponse.json(items);
  } catch (error) {
    return new NextResponse("Unable to fetch Medium posts", { status: 500 });
  }
}
