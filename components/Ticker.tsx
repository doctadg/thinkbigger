"use client";

import { motion } from "framer-motion";
import { TICKER_PHRASES } from "@/lib/constants";
import { IconSparkle } from "./Icons";

export default function Ticker() {
  const items = [...TICKER_PHRASES, ...TICKER_PHRASES];

  return (
    <div className="relative border-y border-[var(--color-border)] bg-[var(--color-void)] overflow-hidden py-5">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-[var(--color-void)] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-[var(--color-void)] to-transparent" />

      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((phrase, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl font-bold tracking-tight mx-6 flex items-center gap-6"
          >
            <span className={i % 2 === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-muted)]"}>
              {phrase}
            </span>
            <IconSparkle size={14} className="text-[var(--color-faded)] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
