"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

// ═══════════════════════════════════════════════
// Magnetic Button — pulls toward cursor
// ═══════════════════════════════════════════════

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const baseClass =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-gold)] text-black text-sm font-semibold rounded-full transition-colors duration-300 hover:bg-[var(--color-gold-bright)]"
      : "inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--color-border-strong)] text-[var(--color-bone)] text-sm font-medium rounded-full transition-colors duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]";

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClass} ${className}`}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={`${baseClass} ${className}`}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
