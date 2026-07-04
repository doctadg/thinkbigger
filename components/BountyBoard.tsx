"use client";

import { motion } from "framer-motion";
import { IconFlame, IconRocket, IconTrophy, IconDiamond, IconCrown, IconLock } from "./Icons";
import { BOUNTIES } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const ICONS = [IconFlame, IconRocket, IconTrophy, IconDiamond, IconCrown];

export default function BountyBoard() {
  return (
    <section id="bounties" className="relative py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <span className="label-gold mb-4 block">04 — Bounties</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Bigger MC.
              <br />
              <span className="text-gradient-gold">Bigger bag.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="text-lg lg:text-xl text-[var(--color-muted)] font-light leading-relaxed"
            >
              Every market cap milestone unlocks a bounty pool. Holders who
              posted the intent and held the line split the rewards. No holding,
              no bounty. Simple.
            </motion.p>
          </div>
        </div>

        {/* Bounty tiers */}
        <div className="space-y-3">
          {BOUNTIES.map((bounty, i) => {
            const Icon = ICONS[i] || IconCrown;
            const isActive = bounty.status === "active";
            const progress = isActive ? 35 : 0; // visual progress bar

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isActive
                    ? "border-[var(--color-gold)] bg-gradient-to-r from-[var(--color-gold-dim)] via-[var(--color-surface)] to-[var(--color-surface)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)]"
                }`}
              >
                {/* Animated gold sweep on active */}
                {isActive && (
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(251,191,36,0.15) 50%, transparent 100%)",
                    }}
                  />
                )}

                <div className="relative grid grid-cols-12 gap-4 lg:gap-6 items-center p-5 lg:p-7">
                  {/* Tier number + icon */}
                  <div className="col-span-3 lg:col-span-2 flex items-center gap-3">
                    <motion.div
                      whileHover={isActive ? { scale: 1.1, rotate: 5 } : {}}
                      className={`w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                        isActive
                          ? "bg-[var(--color-gold)] text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                          : "bg-[var(--color-surface-3)] text-[var(--color-muted)]"
                      }`}
                    >
                      {isActive ? <Icon size={20} strokeWidth={1.5} /> : <IconLock size={15} strokeWidth={1.5} />}
                    </motion.div>
                    <div className="hidden lg:block">
                      <span className="num-prefix">{bounty.tier}</span>
                      <p className={`font-display text-sm font-semibold ${isActive ? "text-[var(--color-gold)]" : "text-[var(--color-muted)]"}`}>
                        {bounty.label}
                      </p>
                    </div>
                  </div>

                  {/* Label (mobile) */}
                  <div className="col-span-9 lg:hidden">
                    <span className="num-prefix">{bounty.tier}</span>
                    <p className={`font-display text-sm font-semibold ${isActive ? "text-[var(--color-gold)]" : "text-[var(--color-muted)]"}`}>
                      {bounty.label}
                    </p>
                  </div>

                  {/* Target + reward (desktop) */}
                  <div className="hidden lg:block col-span-3">
                    <span className="label block mb-1">Market Cap Target</span>
                    <span className={`font-display text-2xl font-bold ${isActive ? "text-[var(--color-bone)]" : "text-[var(--color-ash)]"}`}>
                      {bounty.target}
                    </span>
                  </div>

                  {/* Reward */}
                  <div className="col-span-12 lg:col-span-3">
                    <span className="label block mb-1 lg:hidden">Market Cap Target</span>
                    <div className="flex items-baseline gap-2 lg:hidden mb-2">
                      <span className={`font-display text-xl font-bold ${isActive ? "text-[var(--color-bone)]" : "text-[var(--color-ash)]"}`}>
                        {bounty.target}
                      </span>
                    </div>
                    <span className="label block mb-1">Bounty Reward</span>
                    <span className={`font-display text-lg lg:text-xl font-bold ${isActive ? "text-[var(--color-gold)]" : "text-[var(--color-muted)]"}`}>
                      {bounty.reward}
                    </span>

                    {/* Progress bar (active only) */}
                    {isActive && (
                      <div className="mt-2 h-1 rounded-full bg-[var(--color-surface-3)] overflow-hidden max-w-[180px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[var(--color-gold-deep)] to-[var(--color-gold)] rounded-full"
                        />
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="col-span-12 lg:col-span-4">
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                      {bounty.desc}
                    </p>
                  </div>

                  {/* Active badge */}
                  {isActive && (
                    <div className="absolute top-3 right-3 lg:top-5 lg:right-5">
                      <motion.span
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-gold)] text-black text-[10px] font-mono font-bold tracking-wider uppercase"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        Active
                      </motion.span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
