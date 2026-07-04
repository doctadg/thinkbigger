"use client";

import { useEffect, useRef } from "react";

// ═══════════════════════════════════════════════
// Animated Particle Background
// Canvas-based gold particle field that drifts upward
// Like stars / embers rising
// ═══════════════════════════════════════════════

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function ParticleBackground({ density = 30 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animId: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    const spawn = (): Particle => {
      const maxLife = 200 + Math.random() * 300;
      return {
        x: Math.random() * w,
        y: h + 20,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.3 - Math.random() * 0.8,
        size: Math.random() * 2.5 + 0.5,
        opacity: 0,
        life: 0,
        maxLife,
      };
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < density; i++) {
        const p = spawn();
        // Distribute initial positions across full height
        p.y = Math.random() * h;
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Fade in/out
        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.2) {
          p.opacity = lifeRatio / 0.2;
        } else if (lifeRatio > 0.8) {
          p.opacity = (1 - lifeRatio) / 0.2;
        } else {
          p.opacity = 1;
        }
        // Cap opacity
        p.opacity = Math.min(p.opacity, 0.4);

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 146, 61, ${p.opacity})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 146, 61, ${p.opacity * 0.08})`;
        ctx.fill();

        // Respawn
        if (p.life >= p.maxLife || p.y < -20) {
          particles[i] = spawn();
        }
      }

      animId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    const handleResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
