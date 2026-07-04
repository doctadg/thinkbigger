"use client";

import { useEffect, useState } from "react";

type FeedEntry = {
  url: string;
  handle: string;
  timestamp: number;
};

function timeAgo(ts: number): string {
  const seconds = Math.floor((Date.now() - ts) / 1000);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default function PostFeed() {
  const [posts, setPosts] = useState<FeedEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const loadFeed = async () => {
    try {
      const res = await fetch("/api/feed", { cache: "no-store" });
      const data = await res.json();
      setPosts(data.posts || []);
      setCount((data.posts || []).length);
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeed();
    // Refresh every 30 seconds
    const interval = setInterval(loadFeed, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="feed" className="relative py-24 lg:py-36 border-t border-[var(--color-border)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse-dot" />
              <span className="label-gold">LIVE FEED</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              The <span className="text-gradient-gold">Collective.</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted)] font-light max-w-xl">
              Real posts from real holders. This is the movement in action.
            </p>
          </div>

          {/* Counter badge */}
          <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-gold-line)] bg-[var(--color-gold-dim)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4L12 14.01l-3-3" />
              <path d="M3 12l3 3 6-6" />
            </svg>
            <span className="font-display text-xl font-bold text-[var(--color-gold)] tabular-nums">{count}</span>
            <span className="text-sm text-[var(--color-muted)]">posts submitted</span>
          </div>
        </div>

        {/* Feed Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-32 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-[var(--color-gold-line)] bg-[var(--color-gold-dim)] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
              </svg>
            </div>
            <p className="font-display text-lg text-[var(--color-bone)] mb-1">Be the first to post</p>
            <p className="text-sm text-[var(--color-muted)]">Post the intent on X and submit your link to appear here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-gold-line)] hover:bg-[var(--color-surface-2)] transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Gold sweep on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-deep)] flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-black text-sm">
                      {post.handle.replace("@", "").charAt(0).toUpperCase()}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-semibold text-sm text-[var(--color-bone)] truncate">
                        {post.handle}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold)" className="shrink-0">
                        <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" opacity="0.9" />
                      </svg>
                    </div>
                    <span className="text-xs text-[var(--color-faded)] font-mono">{timeAgo(post.timestamp)}</span>
                  </div>

                  {/* X icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-muted)" className="group-hover:text-[var(--color-gold)] transition-colors shrink-0 mt-1">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>

                {/* Snippet */}
                <p className="mt-3 text-xs text-[var(--color-muted)] leading-relaxed line-clamp-2">
                  I think its time we all started to think <span className="text-[var(--color-gold)] font-semibold">$BIGGER</span>...
                </p>

                <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
                  <span className="text-[10px] text-[var(--color-faded)] font-mono tracking-wider">THINK BIGGER</span>
                  <span className="text-[10px] text-[var(--color-muted)] group-hover:text-[var(--color-gold)] transition-colors flex items-center gap-1">
                    View post
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
