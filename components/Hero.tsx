"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import MagneticButton from "./MagneticButton";
import { IconArrow, IconCopy, IconCheck, IconX, IconSparkle } from "./Icons";
import { INTENT_TWEET, INTENT_URL, STATS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

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
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />
      {/* Dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,14,20,0.6) 0%, rgba(10,14,20,0.3) 40%, rgba(10,14,20,0.7) 75%, rgba(10,14,20,0.95) 100%)",
        }}
      />

      {/* Particle field */}
      <ParticleBackground density={40} />

      {/* Animated gradient orbs — ember tones matching hero bg */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(250,146,61,0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(211,109,81,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

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
          <IconSparkle size={14} className="text-[var(--color-gold)] opacity-60" />
        </motion.div>

        {/* Title — staggered line reveals */}
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
            className="font-display text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[11rem] xl:text-[13rem] leading-[0.85] tracking-[-0.04em] font-bold"
          >
            <span className="text-gradient-gold" style={{ textShadow: "0 0 40px rgba(250, 146, 61,0.3)" }}>
              BIGGER
            </span>
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
              <MagneticButton href={INTENT_URL} variant="primary">
                <IconX size={15} />
                Post the Intent
                <IconArrow size={14} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </MagneticButton>
              <MagneticButton href="#bounties" variant="ghost">
                See the Bounties
              </MagneticButton>
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-gold-line)] bg-[var(--color-gold-dim)]"
            >
              <IconSparkle size={12} className="text-[var(--color-gold)]" />
              <span className="text-xs text-[var(--color-ash)] font-mono">One click. The whole timeline sees it.</span>
            </motion.div>
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
                <span className="label flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse-dot" />
                  Your Intent — Copy and Post
                </span>
                <span className="label text-[var(--color-faded)]">Auto-generated</span>
              </div>

              {/* Tweet card with animated border glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(250, 146, 61,0.0)",
                    "0 40px 100px rgba(0,0,0,0.55), 0 0 30px rgba(250, 146, 61,0.08)",
                    "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(250, 146, 61,0.0)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-6 lg:p-7 overflow-hidden"
              >
                {/* Animated top accent line */}
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent"
                />

                {/* Tweet header */}
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[var(--color-border)]">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-deep)] flex items-center justify-center"
                  >
                    <span className="font-display font-bold text-black text-base">B</span>
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-semibold text-sm text-[var(--color-bone)]">Think Bigger</span>
                      <IconSparkle size={10} className="text-[var(--color-gold)]" />
                    </div>
                    <span className="text-xs text-[var(--color-muted)] font-mono">@thinkbigger</span>
                  </div>
                  <IconX size={18} className="text-[var(--color-muted)]" />
                </div>

                {/* Tweet body with stagger reveal */}
                <div className="text-[var(--color-ash)] text-[15px] leading-[1.7] space-y-3 font-body">
                  {[
                    { text: "I think its time we all started to think ", bold: "$BIGGER", mid: ", let ", bold2: "$ANSEM", end: " be an example of what is possible when we actually stop PVPING every narrative." },
                    { chant: true },
                    { text: "I think its time we all united as one collective force and brought the exchanges in to buy on top of our heads." },
                    { chant: true },
                    { text: "I think its time we collectively realised that the only way we get to where we want to be as an industry is if we stopped fighting against each other and started to work together." },
                    { chant: true },
                  ].map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                      className={line.chant ? "font-display font-bold text-[var(--color-gold)] text-lg" : ""}
                    >
                      {line.chant ? (
                        "Think Bigger."
                      ) : (
                        <>
                          {line.text}
                          {line.bold && <span className="text-[var(--color-gold)] font-semibold">{line.bold}</span>}
                          {line.mid}
                          {line.bold2 && <span className="text-[var(--color-gold)] font-semibold">{line.bold2}</span>}
                          {line.end}
                        </>
                      )}
                    </motion.p>
                  ))}
                </div>

                {/* Tweet actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="mt-6 pt-5 border-t border-[var(--color-border)] flex items-center justify-between"
                >
                  <button
                    onClick={copyIntent}
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors group"
                  >
                    {copied ? (
                      <>
                        <IconCheck size={15} className="text-[var(--color-gold)]" strokeWidth={2.5} />
                        <span className="text-[var(--color-gold)]">Copied</span>
                      </>
                    ) : (
                      <>
                        <IconCopy size={15} />
                        Copy text
                      </>
                    )}
                  </button>
                  <MagneticButton href={INTENT_URL} variant="primary" strength={0.2} className="!px-5 !py-2.5 !text-sm">
                    <IconX size={13} />
                    Post on X
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stat strip with counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5, ease: EASE }}
              className="bg-[var(--color-surface)] px-5 py-6 hover:bg-[var(--color-surface-2)] transition-colors duration-300"
            >
              <div className="label mb-2">{stat.label}</div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl md:text-3xl text-[var(--color-bone)] font-semibold">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--color-muted)] font-mono">{stat.unit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
