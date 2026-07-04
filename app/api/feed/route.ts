import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "feed/" });

    // Fetch each blob and parse
    const entries = await Promise.all(
      blobs.slice(0, 50).map(async (blob) => {
        try {
          const res = await fetch(blob.url);
          const data = await res.json();
          return data;
        } catch {
          return null;
        }
      })
    );

    // Filter nulls, sort newest first
    const valid = entries
      .filter(Boolean)
      .sort((a, b) => b.timestamp - a.timestamp);

    return NextResponse.json({ posts: valid });
  } catch (err) {
    return NextResponse.json({ posts: [] });
  }
}
