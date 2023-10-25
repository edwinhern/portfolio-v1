import { NextResponse } from "next/server";

export async function GET() {
  const url = `https://mediumpostsapi.vercel.app/api/edwinhern`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error("Medium API fetch failed");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Unable to fetch Medium publications", {
      status: 500,
    });
  }
}
