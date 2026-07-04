"use client";

import { motion } from "framer-motion";
import { Send, BarChart3 } from "lucide-react";
import { XLogo } from "@/components/XLogo";
import { INTENT_URL, SOCIAL_LINKS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="relative py-16 lg:py-20 border-t border-[var(--color-border)] bg-[var(--color-void)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-16"
        >
          <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            THINK <span className="text-gradient-gold text-glow-gold">BIGGER</span>
          </h3>
          <p className="mt-4 text-[var(--color-muted)] text-sm font-mono uppercase tracking-widest">
            Or get left behind.
          </p>
          <a
            href={INTENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-gold)] text-black text-base font-semibold rounded-full hover:bg-[var(--color-gold-bright)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <XLogo size={18} />
            Post the Intent
          </a>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--color-border)]">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-[var(--color-bone)]">
              THINK<span className="text-gradient-gold">BIGGER</span>
            </span>
            <span className="text-[var(--color-faded)] text-sm font-mono">· $BIGGER</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300"
              aria-label="X / Twitter"
            >
              <XLogo size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.telegram}
              className="w-10 h-10 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300"
              aria-label="Telegram"
            >
              <Send size={15} />
            </a>
            <a
              href={SOCIAL_LINKS.dexscreener}
              className="w-10 h-10 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300"
              aria-label="DexScreener"
            >
              <BarChart3 size={16} />
            </a>
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
