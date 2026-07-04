"use client";

import { motion } from "framer-motion";
import { IconChartDown, IconChartUp, IconSkull, IconUnite } from "./Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

// Animated bleeding chart (PvP)
function PvPChart() {
  return (
    <svg viewBox="0 0 300 120" className="w-full h-auto" fill="none">
      {/* Grid lines */}
      {[20, 40, 60, 80, 100].map((y) => (
        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}

      {/* Bleeding chart path — pump then dump */}
      <motion.path
        d="M0 80 L30 75 L50 50 L70 30 L90 25 L110 35 L130 45 L150 55 L170 65 L190 75 L210 85 L230 92 L250 96 L270 100 L300 105"
        stroke="#ef4444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Red glow area under chart */}
      <motion.path
        d="M0 80 L30 75 L50 50 L70 30 L90 25 L110 35 L130 45 L150 55 L170 65 L190 75 L210 85 L230 92 L250 96 L270 100 L300 105 L300 120 L0 120 Z"
        fill="rgba(239,68,68,0.06)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
      />

      {/* Pump arrow */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <text x="65" y="20" fill="rgba(239,68,68,0.5)" fontSize="9" fontFamily="monospace">PUMP</text>
      </motion.g>

      {/* Dump label */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
      >
        <text x="240" y="92" fill="rgba(239,68,68,0.6)" fontSize="9" fontFamily="monospace">DUMP</text>
      </motion.g>
    </svg>
  );
}

// Animated pumping chart (Unified)
function UnifiedChart() {
  return (
    <svg viewBox="0 0 300 120" className="w-full h-auto" fill="none">
      {/* Grid lines */}
      {[20, 40, 60, 80, 100].map((y) => (
        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}

      {/* Gold area fill */}
      <motion.path
        d="M0 100 L20 95 L40 88 L60 82 L80 74 L100 65 L120 58 L140 48 L160 42 L180 35 L200 28 L220 22 L240 16 L260 12 L280 8 L300 5 L300 120 L0 120 Z"
        fill="rgba(250, 146, 61,0.08)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
      />

      {/* Steady pump chart */}
      <motion.path
        d="M0 100 L20 95 L40 88 L60 82 L80 74 L100 65 L120 58 L140 48 L160 42 L180 35 L200 28 L220 22 L240 16 L260 12 L280 8 L300 5"
        stroke="#FA923D"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Moving dot along the path */}
      <motion.circle
        r="3"
        fill="#FA923D"
        initial={{ offsetDistance: "0%" }}
        whileInView={{ offsetDistance: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          offsetPath: "path('M0 100 L20 95 L40 88 L60 82 L80 74 L100 65 L120 58 L140 48 L160 42 L180 35 L200 28 L220 22 L240 16 L260 12 L280 8 L300 5')",
        }}
      />

      {/* Glow dot at end */}
      <motion.circle
        cx="300"
        cy="5"
        r="6"
        fill="rgba(250, 146, 61,0.15)"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: [0, 1, 0.5, 1], scale: [0, 1.5, 1, 1.5] }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="300"
        cy="5"
        r="3"
        fill="#FA923D"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
      />

      {/* Labels */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <text x="250" y="22" fill="#FA923D" fontSize="9" fontFamily="monospace" fontWeight="bold">ONLY UP</text>
      </motion.g>
    </svg>
  );
}

export default function ComparisonSection() {
  return (
    <section className="relative py-24 lg:py-36 border-y border-[var(--color-border)] bg-[var(--color-void)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label mb-4 block">The Difference</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            PvP vs. <span className="text-gradient-gold">Think Bigger.</span>
          </motion.h2>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* PvP Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative p-8 rounded-2xl border border-red-500/20 bg-[var(--color-surface)] overflow-hidden"
          >
            {/* Red tint glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{ background: "radial-gradient(ellipse at top, rgba(239,68,68,0.08) 0%, transparent 60%)" }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <IconSkull size={20} className="text-red-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--color-bone)]">PvP Trading</h3>
                  <span className="text-xs text-red-400/60 font-mono">EVERY MAN FOR HIMSELF</span>
                </div>
              </div>

              {/* Chart */}
              <div className="mb-6 py-4">
                <PvPChart />
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5">
                {[
                  "Coin launches, everyone races to dump",
                  "First buyers exit on the next guy",
                  "Chart pumps then bleeds to zero",
                  "Nobody wins. Everyone loses.",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]"
                  >
                    <span className="mt-1 text-red-400/50 shrink-0">✕</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Unified Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative p-8 rounded-2xl border border-[var(--color-gold-line)] bg-[var(--color-surface)] overflow-hidden"
          >
            {/* Gold glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top, rgba(250, 146, 61,0.08) 0%, transparent 60%)" }}
            />

            {/* Animated gold border accent */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent"
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-xl bg-[var(--color-gold-dim)] border border-[var(--color-gold-line)] flex items-center justify-center"
                >
                  <IconUnite size={20} className="text-[var(--color-gold)]" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--color-bone)]">Think Bigger</h3>
                  <span className="text-xs text-[var(--color-gold)] font-mono">COLLECTIVE FORCE</span>
                </div>
              </div>

              {/* Chart */}
              <div className="mb-6 py-4">
                <UnifiedChart />
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5">
                {[
                  "Everyone holds the same direction",
                  "Volume stays. Exchanges notice.",
                  "Chart climbs steadily, no rug",
                  "Everyone wins. Together.",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-2.5 text-sm text-[var(--color-ash)]"
                  >
                    <span className="mt-0.5 text-[var(--color-gold)] shrink-0">✓</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
