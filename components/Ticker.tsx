"use client";

import { TICKER_PHRASES } from "@/lib/constants";

export default function Ticker() {
  const items = [...TICKER_PHRASES, ...TICKER_PHRASES];

  return (
    <div className="relative border-y border-[var(--color-border)] bg-[var(--color-void)] overflow-hidden py-4">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((phrase, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl font-bold tracking-tight mx-6 flex items-center gap-6"
          >
            <span className={i % 2 === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-muted)]"}>
              {phrase}
            </span>
            <span className="text-[var(--color-faded)] text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
