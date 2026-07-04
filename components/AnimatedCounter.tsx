"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// ═══════════════════════════════════════════════
// Animated Counter — counts up when scrolled into view
// ═══════════════════════════════════════════════

interface CounterProps {
  value: string;
  /** extract numeric part to animate, leave suffix */
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  // Extract numeric portion
  const numericMatch = value.match(/[\d,.]+/);
  const numeric = numericMatch ? numericMatch[0] : value;
  const prefix = numericMatch ? value.substring(0, numericMatch.index) : "";
  const trailing = numericMatch ? value.substring((numericMatch.index || 0) + numeric.length) : "";

  useEffect(() => {
    if (!inView) return;

    const target = parseFloat(numeric.replace(/,/g, ""));
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const hasDecimal = numeric.includes(".");
    const hasComma = numeric.includes(",");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      let formatted: string;
      if (hasDecimal) {
        const decimals = numeric.split(".")[1]?.length || 1;
        formatted = current.toFixed(decimals);
      } else {
        formatted = Math.floor(current).toString();
      }

      if (hasComma) {
        const parts = formatted.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        formatted = parts.join(".");
      }

      setDisplay(formatted);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, numeric, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{trailing}{suffix}
    </span>
  );
}
