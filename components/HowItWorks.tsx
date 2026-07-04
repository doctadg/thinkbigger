"use client";

import { motion } from "framer-motion";
import { IconHold, IconUnite, IconX, IconTarget } from "./Icons";
import { STEPS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const STEP_ICONS = [IconHold, IconUnite, IconX, IconTarget];

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
          {STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i] || IconTarget;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="relative group"
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] right-[-20%] h-[1px] bg-gradient-to-r from-[var(--color-gold-line)] to-transparent">
                    {/* Moving dot along connector */}
                    <motion.div
                      animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute top-0 w-1 h-1 rounded-full bg-[var(--color-gold)]"
                    />
                  </div>
                )}

                {/* Number circle with icon */}
                <div className="relative w-16 h-16 rounded-2xl border border-[var(--color-gold-line)] bg-[var(--color-surface)] flex items-center justify-center mb-6 group-hover:border-[var(--color-gold)] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                  <Icon size={22} className="text-[var(--color-gold)]" strokeWidth={1.5} />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                    <span className="font-display text-[10px] font-bold text-black">{step.num}</span>
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[var(--color-bone)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
