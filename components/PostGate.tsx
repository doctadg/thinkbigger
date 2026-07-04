"use client";

import { useEffect, useState, useRef } from "react";
import { INTENT_TWEET, INTENT_URL } from "@/lib/constants";

const STORAGE_KEY = "thinkbigger_unlocked_v1";

// Validates X/Twitter post URLs
function isValidXPostUrl(url: string): boolean {
  const pattern = /^https?:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/\d+/i;
  return pattern.test(url.trim());
}

export default function PostGate() {
  const [locked, setLocked] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [postUrl, setPostUrl] = useState("");
  const [error, setError] = useState("");
  const [posted, setPosted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check lock state on mount
  useEffect(() => {
    const unlocked = localStorage.getItem(STORAGE_KEY);
    if (!unlocked) {
      setLocked(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  // Lock/unlock scroll
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [locked]);

  const handlePostClick = () => {
    window.open(INTENT_URL, "_blank");
    setPosted(true);
    // Auto-advance to step 2 after a beat
    setTimeout(() => setStep(2), 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidXPostUrl(postUrl)) {
      setError("Paste a valid X post link (x.com/.../status/...)");
      return;
    }
    setError("");
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ url: postUrl, ts: Date.now() }));
    setExiting(true);
    setTimeout(() => {
      setLocked(false);
    }, 600);
  };

  if (!locked) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Backdrop — dark blur over site */}
      <div className="absolute inset-0 bg-[var(--color-void)]/95 backdrop-blur-2xl" />

      {/* Ambient gold orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-gold)] opacity-[0.04] blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[var(--color-gold-deep)] opacity-[0.03] blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* ── Modal Card ── */}
      <div
        className={`relative z-10 w-full max-w-[540px] mx-4 transition-all duration-500 ${
          exiting ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
        }`}
      >
        <div className="relative bg-[var(--color-surface)]/80 backdrop-blur-xl border border-[var(--color-border-strong)] rounded-2xl overflow-hidden shadow-2xl">
          {/* Gold top accent line */}
          <div className="h-[3px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

          {/* Lock badge */}
          <div className="flex flex-col items-center pt-10 pb-6 px-8">
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-[var(--color-gold)] opacity-20 blur-2xl rounded-full" />
              <div className="relative w-16 h-16 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center bg-[var(--color-surface-2)]">
                {/* Lock icon */}
                {step === 1 ? (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                )}
              </div>
            </div>

            <p className="label-gold mb-2">GATED ACCESS</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-[var(--color-bone)] tracking-tight">
              Post to Unlock
            </h2>
            <p className="text-sm text-[var(--color-muted)] text-center mt-2 max-w-[360px]">
              Think Bigger is a collective. Post the intent on X to join the movement and access the site.
            </p>
          </div>

          {/* ── Step 1: Tweet Preview + Post Button ── */}
          {step === 1 && (
            <div className="px-8 pb-8 transition-all duration-400">
              {/* Tweet preview card */}
              <div className="relative bg-[var(--color-void)] border border-[var(--color-border)] rounded-xl p-4 mb-5">
                <div className="flex items-center gap-2 mb-3">
                  {/* X logo */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-bone)">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-xs text-[var(--color-muted)] font-mono">Your X post</span>
                </div>
                <p className="text-xs text-[var(--color-ash)] leading-relaxed whitespace-pre-line line-clamp-6">
                  {INTENT_TWEET}
                </p>
                <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center gap-1.5">
                  <span className="text-[10px] text-[var(--color-faded)] font-mono">
                    THINK BIGGER · $BIGGER
                  </span>
                </div>
              </div>

              {/* Post button */}
              <button
                onClick={handlePostClick}
                className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 ${
                  posted
                    ? "bg-[var(--color-surface-3)] text-[var(--color-gold)] border border-[var(--color-gold-line)]"
                    : "bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-bright)] hover:-translate-y-0.5 glow-gold"
                }`}
              >
                {posted ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Posted — Continue
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Post on X
                  </>
                )}
              </button>

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-2 mt-5">
                <span className="w-6 h-1 rounded-full bg-[var(--color-gold)]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-surface-3)]" />
              </div>
            </div>
          )}

          {/* ── Step 2: Submit Post Link ── */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="px-8 pb-8 transition-all duration-400">
              <label className="block label mb-2">PASTE YOUR POST LINK</label>
              <input
                ref={inputRef}
                type="text"
                value={postUrl}
                onChange={(e) => {
                  setPostUrl(e.target.value);
                  if (error) setError("");
                }}
                placeholder="https://x.com/yourname/status/..."
                autoFocus
                className={`w-full bg-[var(--color-void)] border rounded-xl px-4 py-3.5 text-sm text-[var(--color-bone)] placeholder:text-[var(--color-faded)] outline-none transition-colors ${
                  error
                    ? "border-red-500/60"
                    : "border-[var(--color-border)] focus:border-[var(--color-gold)]"
                }`}
              />
              {error && (
                <p className="text-xs text-red-400 mt-2 flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full mt-5 py-4 rounded-xl font-semibold text-sm bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-bright)] hover:-translate-y-0.5 transition-all duration-300 glow-gold flex items-center justify-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Unlock Site
              </button>

              {/* Back link */}
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-center text-xs text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors mt-4"
              >
                ← Back to post
              </button>

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-surface-3)]" />
                <span className="w-6 h-1 rounded-full bg-[var(--color-gold)]" />
              </div>
            </form>
          )}

          {/* Footer note */}
          <div className="px-8 pb-5 pt-1">
            <div className="border-t border-[var(--color-border)] pt-3 flex items-center justify-center gap-1.5">
              <span className="text-[10px] text-[var(--color-faded)] font-mono tracking-wider">
                THINK BIGGER — UNLOCK TO ENTER
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
