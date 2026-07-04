"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { XLogo } from "@/components/XLogo";
import { NAV_LINKS, INTENT_URL } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-void)]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20 transition-all duration-300">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-xl font-bold tracking-tight text-[var(--color-bone)]">
            THINK<span className="text-gradient-gold">BIGGER</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={INTENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-gold)] text-black text-sm font-semibold rounded-full hover:bg-[var(--color-gold-bright)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Post the Intent
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[var(--color-bone)]"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[var(--color-void)]/95 backdrop-blur-xl border-b border-[var(--color-border)]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--color-ash)] hover:text-[var(--color-gold)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INTENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-gold)] text-black text-sm font-semibold rounded-full mt-2"
            >
              Post the Intent
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
