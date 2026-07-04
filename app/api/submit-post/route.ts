import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

// Validates X/Twitter post URLs
function isValidXPostUrl(url: string): boolean {
  const pattern = /^https?:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/\d+/i;
  return pattern.test(url.trim());
}

// Extract handle from URL: x.com/HANDLE/status/123 → @HANDLE
function extractHandle(url: string): string {
  const match = url.match(/(?:twitter\.com|x\.com)\/([^/]+)\/status\//i);
  return match ? `@${match[1]}` : "@anonymous";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = body?.url?.trim();

    if (!url || !isValidXPostUrl(url)) {
      return NextResponse.json(
        { error: "Invalid X post URL" },
        { status: 400 }
      );
    }

    const entry = {
      url,
      handle: extractHandle(url),
      timestamp: Date.now(),
    };

    const filename = `feed/${entry.timestamp}-${Math.random()
      .toString(36)
      .slice(2, 8)}.json`;

    await put(filename, JSON.stringify(entry), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    });

    return NextResponse.json({ success: true, entry });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 500 }
    );
  }
}
