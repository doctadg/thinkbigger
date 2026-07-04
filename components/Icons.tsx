// ═══════════════════════════════════════════════
// Custom SVG Icon System — Think Bigger
// Bespoke icons, not lucide defaults
// ═══════════════════════════════════════════════

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

// ── Rocket (bounty liftoff) ──
export function IconRocket({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2C14 4 16 7 16 11C16 14 14.5 16.5 12 17C9.5 16.5 8 14 8 11C8 7 10 4 12 2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="1.5" stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d="M9 17L7 21M15 17L17 21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M9 17H15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M8 21L9 19M16 21L15 19" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

// ── Flame (ignition) ──
export function IconFlame({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2C12 6 8 7 8 12C8 15 9.8 18 12 18C14.2 18 16 15 16 12C16 9 14.5 8 13.5 6C13 5 12.5 3.5 12 2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <path d="M12 18C12 20 10 22 10 22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M12 18C12 20 14 22 14 22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M10 14C10 16 11 17 12 17C13 17 14 16 14 14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

// ── Diamond (orbit tier / hold) ──
export function IconDiamond({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 3H18L22 9L12 22L2 9L6 3Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <path d="M2 9H22" stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d="M9 3L7 9L12 22L17 9L15 3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <path d="M9 3H15" stroke="currentColor" strokeWidth={strokeWidth}/>
    </svg>
  );
}

// ── Orbit (escape velocity) ──
export function IconOrbit({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth}/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth={strokeWidth} transform="rotate(-30 12 12)"/>
      <circle cx="20" cy="7" r="1.5" fill="currentColor"/>
    </svg>
  );
}

// ── Crown (escape velocity / we made it) ──
export function IconCrown({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 8L6 14L12 6L18 14L21 8V18C21 19 20 20 19 20H5C4 20 3 19 3 18V8Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <circle cx="3" cy="8" r="1.5" stroke="currentColor" strokeWidth={strokeWidth}/>
      <circle cx="21" cy="8" r="1.5" stroke="currentColor" strokeWidth={strokeWidth}/>
      <circle cx="12" cy="6" r="1.5" stroke="currentColor" strokeWidth={strokeWidth}/>
    </svg>
  );
}

// ── Unite (arrows converging — the core message) ──
export function IconUnite({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4L9 9M20 4L15 9M4 20L9 15M20 20L15 15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d="M12 9V7M12 15V17M9 12H7M15 12H17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

// ── Chart Up (market cap rising) ──
export function IconChartUp({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 3V21H21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M7 16L11 12L14 15L21 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 7H21V10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Chart Down (PvP bleeding) ──
export function IconChartDown({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 3V21H21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M7 8L11 12L14 9L21 17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 17H21V14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Lightning (energy / collective force) ──
export function IconLightning({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    </svg>
  );
}

// ── Hold / Anchor (diamond hands) ──
export function IconHold({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d="M12 8V18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M6 12C6 12 8 14 12 14C16 14 18 12 18 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M6 18C6 18 8 20 12 20C16 20 18 18 18 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M8 18V20M16 18V20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

// ── Skull (PvP is death) ──
export function IconSkull({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3C7 3 4 6 4 11C4 14 5.5 16 7 17V20C7 20.5 7.5 21 8 21H10V19H14V21H16C16.5 21 17 20.5 17 20V17C18.5 16 20 14 20 11C20 6 17 3 12 3Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <circle cx="9" cy="11" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="11" r="1.5" fill="currentColor"/>
    </svg>
  );
}

// ── Target (bounty mission) ──
export function IconTarget({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth}/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={strokeWidth}/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  );
}

// ── Arrow (custom nav arrow) ──
export function IconArrow({ size = 16, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Copy ──
export function IconCopy({ size = 16, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="8" width="13" height="13" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d="M16 8V5C16 4 15 3 14 3H5C4 3 3 4 3 5V14C3 15 4 16 5 16H8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
    </svg>
  );
}

// ── Check ──
export function IconCheck({ size = 16, className = "", strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12L9 17L20 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── X / Twitter Logo ──
export function IconX({ size = 16, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ── Telegram ──
export function IconTelegram({ size = 16, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M21.5 4.5L2.5 11.5L8.5 14L11 20.5L14 16.5L18.5 20L21.5 4.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <path d="M8.5 14L18 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

// ── DexScreener (custom) ──
export function IconChart({ size = 16, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 3V21H21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <rect x="6" y="13" width="3" height="5" stroke="currentColor" strokeWidth={strokeWidth}/>
      <rect x="11" y="9" width="3" height="9" stroke="currentColor" strokeWidth={strokeWidth}/>
      <rect x="16" y="5" width="3" height="13" stroke="currentColor" strokeWidth={strokeWidth}/>
    </svg>
  );
}

// ── Sparkle (accent decoration) ──
export function IconSparkle({ size = 12, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" opacity="0.9"/>
      <path d="M19 2L19.7 5.3L23 6L19.7 6.7L19 10L18.3 6.7L15 6L18.3 5.3L19 2Z" opacity="0.5"/>
    </svg>
  );
}

// ── Lock ──
export function IconLock({ size = 16, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d="M8 11V7C8 5 9.5 3 12 3C14.5 3 16 5 16 7V11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
    </svg>
  );
}

// ── Menu / Close ──
export function IconMenu({ size = 20, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export function IconClose({ size = 20, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

// ── Users (collective) ──
export function IconUsers({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d="M3 20C3 16 6 14 9 14C12 14 15 16 15 20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M16 5C18 5.5 19.5 7.5 19 9.5C18.7 11 17.5 12 16 12.2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M18 14C20 14.5 21 16.5 21 18.5V20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

// ── Trophy (breakout tier) ──
export function IconTrophy({ size = 24, className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 4H17V9C17 11.5 15 13 12 13C9 13 7 11.5 7 9V4Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <path d="M7 5H4V7C4 9 5.5 10 7 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M17 5H20V7C20 9 18.5 10 17 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M12 13V17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M9 20H15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M10 17L9 20M14 17L15 20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}
