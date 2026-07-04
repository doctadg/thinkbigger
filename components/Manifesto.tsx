"use client";

import { motion } from "framer-motion";
import { IconSkull, IconChartDown, IconUnite, IconLightning, IconTarget } from "./Icons";
import { PROBLEMS, SOLUTIONS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const PROBLEM_ICONS = [IconSkull, IconChartDown, IconTarget];
const SOLUTION_ICONS = [IconUnite, IconTarget, IconLightning];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header — Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="label mb-4 block"
            >
              01 — The Problem
            </motion.span>
          </div>
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              PvP is killing <span className="text-gradient-gold">this space.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-6 text-lg lg:text-xl text-[var(--color-muted)] font-light leading-relaxed max-w-2xl"
            >
              Every launch, traders race to dump on each other. Nobody holds.
              Nobody wins. The chart bleeds and everyone walks away with less
              than they started.
            </motion.p>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {PROBLEMS.map((problem, i) => {
            const Icon = PROBLEM_ICONS[i] || IconSkull;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -4 }}
                className="group relative p-7 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(239,68,68,0.04) 0%, transparent 60%)" }}
                />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-border)] flex items-center justify-center mb-5 group-hover:border-red-500/30 transition-colors">
                    <Icon size={20} className="text-[var(--color-muted)] group-hover:text-red-400 transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="num-prefix mb-3 block">{`0${i + 1}`}</span>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-bone)] mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section header — Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="label-gold mb-4 block"
            >
              02 — The Solution
            </motion.span>
          </div>
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Think <span className="text-gradient-gold">Bigger.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-6 text-lg lg:text-xl text-[var(--color-muted)] font-light leading-relaxed max-w-2xl"
            >
              What if every trader pushed the same direction? What if we held
              instead of dumped? The chart only goes one way.
            </motion.p>
          </div>
        </div>

        {/* Solution cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution, i) => {
            const Icon = SOLUTION_ICONS[i] || IconUnite;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -4 }}
                className="group relative p-7 rounded-2xl border border-[var(--color-gold-line)] bg-gradient-to-b from-[var(--color-gold-dim)] to-transparent hover:border-[var(--color-gold)] transition-all duration-500 overflow-hidden"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-11 h-11 rounded-xl bg-[var(--color-gold-dim)] border border-[var(--color-gold-line)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-all"
                  >
                    <Icon size={20} className="text-[var(--color-gold)] group-hover:text-black transition-colors" strokeWidth={1.5} />
                  </motion.div>
                  <div className="w-7 h-7 rounded-full bg-[var(--color-gold)] flex items-center justify-center mb-4 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-display font-bold text-black text-xs">{`0${i + 1}`}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-bone)] mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[var(--color-ash)] text-[15px] leading-relaxed">
                    {solution.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
