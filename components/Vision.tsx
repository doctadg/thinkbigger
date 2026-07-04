"use client";

import { motion } from "framer-motion";
import { IconChartUp, IconUsers, IconLightning, IconSparkle } from "./Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const VISION_POINTS = [
  {
    icon: IconChartUp,
    stat: "$1.6B+",
    label: "$ANSEM Peak Market Cap",
    desc: "One trader. One narrative. One direction. That's what happens when you stop PvPing and start holding.",
  },
  {
    icon: IconUsers,
    stat: "10,000+",
    label: "Traders Pushing Together",
    desc: "Imagine 10,000 traders all holding the same coin instead of racing to dump. That's the Think Bigger vision.",
  },
  {
    icon: IconLightning,
    stat: "100M+",
    label: "Target Market Cap",
    desc: "When the collective holds, volume stays. Exchanges list. They buy on top of our heads. That's the game.",
  },
];

export default function Vision() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      {/* Animated glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(251,191,36,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="label mb-4 block">06 — The Vision</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            $ANSEM showed us <span className="text-gradient-gold">what's possible.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="mt-6 text-lg lg:text-xl text-[var(--color-muted)] font-light leading-relaxed"
          >
            One narrative. One direction. Everyone wins. Now imagine that energy
            focused across an entire ecosystem. That's Think Bigger.
          </motion.p>
        </div>

        {/* Vision stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VISION_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-gold-line)] transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top, rgba(251,191,36,0.06) 0%, transparent 60%)" }}
                />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-[var(--color-gold-dim)] border border-[var(--color-gold-line)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-all duration-500"
                  >
                    <Icon size={22} className="text-[var(--color-gold)] group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                  </motion.div>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-gold)] mb-1">
                    {point.stat}
                  </div>
                  <div className="label mb-4">{point.label}</div>
                  <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-16 text-center"
        >
          <IconSparkle size={20} className="text-[var(--color-gold)] mx-auto mb-4 opacity-60" />
          <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-bone)]">
            The moon was never the goal.
          </p>
          <motion.p
            animate={{ textShadow: ["0 0 0px rgba(251,191,36,0)", "0 0 30px rgba(251,191,36,0.3)", "0 0 0px rgba(251,191,36,0)"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="font-display text-2xl md:text-3xl font-bold text-gradient-gold mt-2"
          >
            We're just getting started.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
