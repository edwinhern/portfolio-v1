import { Article } from "@/types/api/medium-articles";
import { NextResponse } from "next/server";

export async function GET() {
  const rssUrl = process.env.MEDIUM_RSS_URL;
  if (!rssUrl)
    return new NextResponse("RSS URL not configured", { status: 500 });

  try {
    const response = await fetch(rssUrl);
    if (!response.ok) {
      throw new Error("Medium RSS fetch failed");
    }

    const data = await response.json();
    const items: Article[] = data.items;
    const topThree = items.slice(0, 3);

    return NextResponse.json(topThree);
  } catch (error) {
    return new NextResponse("Unable to fetch Medium posts", { status: 500 });
  }
}
