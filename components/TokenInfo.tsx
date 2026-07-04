"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconCopy, IconCheck, IconDiamond } from "./Icons";
import AnimatedCounter from "./AnimatedCounter";
import { CONTRACT } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TokenInfo() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const specs = [
    { label: "Network", value: CONTRACT.network },
    { label: "Total Supply", value: CONTRACT.supply },
    { label: "Ticker", value: "$BIGGER" },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[var(--color-void)] border-t border-[var(--color-border)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <span className="label-gold mb-4 block">$BIGGER</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Think bigger.
              <br />
              <span className="text-gradient-gold">Hold bigger.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-6 text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-xl"
            >
              $BIGGER isn't just a token. It's your ticket to every bounty pool.
              Hold it, spread the intent, and ride the collective wave.
            </motion.p>

            {/* Contract address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="mt-8"
            >
              <span className="label mb-2 block">Contract Address</span>
              <motion.button
                onClick={copyAddress}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-center gap-3 p-4 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] hover:border-[var(--color-gold)] transition-colors duration-300 w-full max-w-2xl"
              >
                <code className="font-mono text-sm text-[var(--color-ash)] truncate flex-1 text-left">
                  {CONTRACT.address}
                </code>
                <span className="shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-gold)] transition-colors">
                  {copied ? <IconCheck size={16} className="text-[var(--color-gold)]" strokeWidth={2.5} /> : <IconCopy size={16} />}
                </span>
              </motion.button>
            </motion.div>

            {/* Specs */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <span className="label block mb-1">{spec.label}</span>
                  <span className="font-display text-lg font-semibold text-[var(--color-bone)]">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Animated $BIGGER coin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Pulsing glow */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 blur-3xl bg-[var(--color-gold-glow)] rounded-full"
              />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px]"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100" cy="100" r="95"
                    fill="none"
                    stroke="rgba(251,191,36,0.15)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                  />
                </svg>
              </motion.div>

              {/* Counter-rotating outer ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px]"
              >
                <svg viewBox="0 0 240 240" className="w-full h-full">
                  <circle
                    cx="120" cy="120" r="115"
                    fill="none"
                    stroke="rgba(251,191,36,0.08)"
                    strokeWidth="1"
                    strokeDasharray="2 12"
                  />
                </svg>
              </motion.div>

              {/* Main coin */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface-2)] to-[var(--color-void)]"
                style={{ boxShadow: "0 0 60px rgba(251,191,36,0.15), inset 0 0 30px rgba(251,191,36,0.05)" }}
              >
                <div className="text-center">
                  <IconDiamond size={28} className="text-[var(--color-gold)] mx-auto mb-2 opacity-80" strokeWidth={1} />
                  <div className="font-display text-3xl lg:text-4xl font-bold text-gradient-gold">$BIGGER</div>
                  <div className="label mt-2">Think Bigger</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
