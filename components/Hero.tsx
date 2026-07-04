"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { XLogo } from "@/components/XLogo";
import { INTENT_TWEET, INTENT_URL, STATS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyIntent = () => {
    navigator.clipboard.writeText(INTENT_TWEET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(251,191,36,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Side rails */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
        <span className="label whitespace-nowrap">STOP PVPING · SOLANA · 2026</span>
      </div>
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden xl:block">
        <span className="label whitespace-nowrap">SCROLL TO BEGIN ↓</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse-dot" />
          <span className="label-gold">The anti-PVP movement · $BIGGER</span>
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            className="font-display text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[11rem] xl:text-[13rem] leading-[0.85] tracking-[-0.04em] font-bold"
          >
            THINK
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="font-display text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[11rem] xl:text-[13rem] leading-[0.85] tracking-[-0.04em] font-bold text-gradient-gold text-glow-gold"
          >
            BIGGER
          </motion.h1>
        </div>

        {/* Two-column: subtitle + intent card */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: subtitle + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="lg:col-span-5"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-ash)] font-light leading-relaxed">
              Stop PvPing. Start winning together.
              <br />
              Hold <span className="text-[var(--color-gold)] font-display font-semibold">$BIGGER</span>,
              push coins higher, collect bounties.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={INTENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-gold)] text-black text-sm font-semibold rounded-full hover:bg-[var(--color-gold-bright)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <XLogo size={16} />
                Post the Intent
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
              </a>
              <a
                href="#bounties"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--color-border-strong)] text-[var(--color-bone)] text-sm font-medium rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300"
              >
                See the Bounties
              </a>
            </div>
          </motion.div>

          {/* Right: Intent Tweet Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Card label */}
              <div className="flex items-center justify-between mb-3">
                <span className="label">Your Intent — Copy and Post</span>
                <span className="label text-[var(--color-faded)]">Auto-generated</span>
              </div>

              {/* Tweet card */}
              <div className="relative rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-6 lg:p-7 shadow-[0_40px_100px_rgba(0,0,0,0.55)] overflow-hidden">
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

                {/* Tweet header */}
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[var(--color-border)]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-deep)] flex items-center justify-center">
                    <span className="font-display font-bold text-black text-sm">TB</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-semibold text-sm text-[var(--color-bone)]">Think Bigger</span>
                      <span className="text-[var(--color-faded)] text-xs">✦</span>
                    </div>
                    <span className="text-xs text-[var(--color-muted)] font-mono">@thinkbigger</span>
                  </div>
                  <XLogo size={16} className="text-[var(--color-muted)]" />
                </div>

                {/* Tweet body */}
                <div className="text-[var(--color-ash)] text-[15px] leading-[1.7] space-y-3 font-body">
                  <p>
                    I think its time we all started to think <span className="text-[var(--color-gold)] font-semibold">$BIGGER</span>, let <span className="text-[var(--color-gold)] font-semibold">$ANSEM</span> be an example of what is possible when we actually stop PVPING every narrative.
                  </p>
                  <p className="font-display font-semibold text-[var(--color-gold)] text-lg">Think Bigger.</p>
                  <p>
                    I think its time we all united as one collective force and brought the exchanges in to buy on top of our heads.
                  </p>
                  <p className="font-display font-semibold text-[var(--color-gold)] text-lg">Think Bigger.</p>
                  <p>
                    I think its time we collectively realised that the only way we get to where we want to be as an industry is if we stopped fighting against each other and started to work together.
                  </p>
                  <p className="font-display font-semibold text-[var(--color-gold)] text-lg">Think Bigger.</p>
                </div>

                {/* Tweet actions */}
                <div className="mt-6 pt-5 border-t border-[var(--color-border)] flex items-center justify-between">
                  <button
                    onClick={copyIntent}
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={15} className="text-[var(--color-gold)]" />
                        <span className="text-[var(--color-gold)]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        Copy text
                      </>
                    )}
                  </button>
                  <a
                    href={INTENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-gold)] text-black text-sm font-semibold rounded-full hover:bg-[var(--color-gold-bright)] transition-all hover:-translate-y-0.5"
                  >
                    <XLogo size={14} />
                    Post on X
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="bg-[var(--color-surface)] px-5 py-6">
              <div className="label mb-2">{stat.label}</div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl md:text-3xl text-[var(--color-bone)] font-semibold">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--color-muted)] font-mono">{stat.unit}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
