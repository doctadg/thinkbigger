"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 lg:py-36 bg-[var(--color-void)] border-y border-[var(--color-border)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="label-gold mb-4 block">05 — How It Works</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Four moves. <span className="text-gradient-gold">No bullshit.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="relative"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-[-20%] h-[1px] bg-gradient-to-r from-[var(--color-gold-line)] to-transparent" />
              )}

              {/* Number */}
              <div className="relative w-16 h-16 rounded-2xl border border-[var(--color-gold-line)] bg-[var(--color-surface)] flex items-center justify-center mb-6 group-hover:border-[var(--color-gold)] transition-colors">
                <span className="font-display text-2xl font-bold text-[var(--color-gold)]">{step.num}</span>
                {/* Glowing dot on connector */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse-dot" />
                )}
              </div>

              <h3 className="font-display text-xl font-semibold text-[var(--color-bone)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
