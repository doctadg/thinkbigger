"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { XLogo } from "@/components/XLogo";
import { INTENT_TWEET, INTENT_URL } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function IntentSection() {
  return (
    <section id="intent" className="relative py-24 lg:py-36 bg-[var(--color-void)] border-y border-[var(--color-border)]">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(251,191,36,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: explanation */}
          <div className="lg:col-span-5">
            <span className="label-gold mb-4 block">03 — The Intent</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              The viral <span className="text-gradient-gold">intent.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-6 text-lg text-[var(--color-muted)] font-light leading-relaxed"
            >
              When you enter this site, you get an intent — a ready-to-post
              message for X. One click. The whole world sees it.
            </motion.p>

            <div className="mt-8 space-y-4">
              {[
                "Post the intent on X with one click.",
                "Every post spreads the Think Bigger message.",
                "More posts = more eyes = higher market cap.",
                "Tag coins you're holding instead of dumping.",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: EASE }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-gold-dim)] border border-[var(--color-gold-line)] flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[var(--color-gold)]" strokeWidth={3} />
                  </div>
                  <span className="text-[var(--color-ash)] text-[15px] leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>

            <a
              href={INTENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-gold)] text-black text-sm font-semibold rounded-full hover:bg-[var(--color-gold-bright)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <XLogo size={16} />
              Post Your Intent Now
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
            </a>
          </div>

          {/* Right: Large quote block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 lg:p-12 rounded-3xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] overflow-hidden">
              {/* Decorative quote mark */}
              <span className="absolute top-4 right-6 font-display text-[120px] leading-none text-[var(--color-gold-dim)] pointer-events-none select-none">
                &ldquo;
              </span>

              <div className="relative space-y-6">
                <p className="font-display text-xl lg:text-2xl font-medium leading-relaxed text-[var(--color-bone)]">
                  I think its time we all started to think{" "}
                  <span className="text-[var(--color-gold)]">$BIGGER</span>, let{" "}
                  <span className="text-[var(--color-gold)]">$ANSEM</span> be an
                  example of what is possible when we actually stop PVPING every
                  narrative.
                </p>
                <p className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-gold)] text-glow-gold">
                  Think Bigger.
                </p>
                <p className="font-display text-xl lg:text-2xl font-medium leading-relaxed text-[var(--color-bone)]">
                  I think its time we all united as one collective force and
                  brought the exchanges in to buy on top of our heads.
                </p>
                <p className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-gold)] text-glow-gold">
                  Think Bigger.
                </p>
                <p className="font-display text-xl lg:text-2xl font-medium leading-relaxed text-[var(--color-bone)]">
                  I think its time we collectively realised that the only way we
                  get to where we want to be as an industry is if we stopped
                  fighting against each other and started to work together.
                </p>
                <p className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-gold)] text-glow-gold">
                  Think Bigger.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
