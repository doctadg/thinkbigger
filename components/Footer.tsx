"use client";

import { motion } from "framer-motion";
import { IconX, IconTelegram, IconChart, IconSparkle } from "./Icons";
import { INTENT_URL, SOCIAL_LINKS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer className="relative py-16 lg:py-20 border-t border-[var(--color-border)] bg-[var(--color-void)] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: "radial-gradient(ellipse 40% 60% at 50% 0%, rgba(250, 146, 61,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <IconSparkle size={24} className="text-[var(--color-gold)]" />
          </motion.div>

          <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            THINK <span className="text-gradient-gold" style={{ textShadow: "0 0 40px rgba(250, 146, 61,0.3)" }}>BIGGER</span>
          </h3>
          <p className="mt-4 text-[var(--color-muted)] text-sm font-mono uppercase tracking-widest">
            Or get left behind.
          </p>

          <motion.a
            href={INTENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-gold)] text-black text-base font-semibold rounded-full hover:bg-[var(--color-gold-bright)] transition-colors duration-300"
            style={{ boxShadow: "0 10px 40px rgba(250, 146, 61,0.2)" }}
          >
            <IconX size={18} />
            Post the Intent
          </motion.a>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--color-border)]">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-deep)] flex items-center justify-center">
              <span className="font-display font-bold text-black text-xs">B</span>
            </div>
            <span className="font-display text-lg font-bold text-[var(--color-bone)]">
              THINK<span className="text-gradient-gold">BIGGER</span>
            </span>
            <span className="text-[var(--color-faded)] text-sm font-mono">· $BIGGER</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: SOCIAL_LINKS.x, icon: IconX, label: "X / Twitter" },
              { href: SOCIAL_LINKS.telegram, icon: IconTelegram, label: "Telegram" },
              { href: SOCIAL_LINKS.dexscreener, icon: IconChart, label: "DexScreener" },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon size={15} strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-[var(--color-faded)] font-mono text-center md:text-right max-w-md">
            $BIGGER is a meme token with no intrinsic value. Not financial
            advice. DYOR. Think bigger.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <span className="text-xs text-[var(--color-faded)] font-mono">
            © 2026 THINK BIGGER · STOP PVPING · UNITE
          </span>
        </div>
      </div>
    </footer>
  );
}
