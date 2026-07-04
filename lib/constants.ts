// ═══════════════════════════════════════════════
// THINK BIGGER — $BIGGER
// Site constants and data
// ═══════════════════════════════════════════════

export const TICKER = "$BIGGER";
export const TOKEN_NAME = "Think Bigger";

// ── The Intent Tweet ──
// This is the viral mechanic. Users post this on X.
export const INTENT_TWEET = `I think its time we all started to think $BIGGER, let $ANSEM be an example of what is possible when we actually stop PVPING every narrative.

Think Bigger.

I think its time we all united as one collective force and brought the exchanges in to buy on top of our heads.

Think Bigger.

I think its time we collectively realised that the only way we get to where we want to be as an industry is if we stopped fighting against each other and started to work together.

Think Bigger.`;

export const INTENT_URL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(INTENT_TWEET)}`;

// ── Nav ──
export const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "The Intent", href: "#intent" },
  { label: "Bounties", href: "#bounties" },
  { label: "How It Works", href: "#how" },
];

export const SOCIAL_LINKS = {
  x: "https://x.com/search?q=%24BIGGER",
  telegram: "#",
  dexscreener: "#",
};

// ── Ticker phrases ──
export const TICKER_PHRASES = [
  "STOP PVPING",
  "THINK BIGGER",
  "UNITE OR DIE",
  "DRIVE IT HIGHER",
  "COLLECTIVE FORCE",
  "NO MORE DUMPING",
  "THINK BIGGER",
  "HOLD THE LINE",
];

// ── Bounty Tiers ──
export const BOUNTIES = [
  {
    tier: "01",
    label: "Ignition",
    target: "50K MC",
    reward: "100K $BIGGER",
    desc: "The first spark. Post the intent. Hold the line. Get the drop.",
    status: "active",
  },
  {
    tier: "02",
    label: "Liftoff",
    target: "250K MC",
    reward: "500K $BIGGER",
    desc: "Real volume. Real eyes. The collective is working.",
    status: "locked",
  },
  {
    tier: "03",
    label: "Breakout",
    target: "1M MC",
    reward: "2M $BIGGER",
    desc: "Seven figures. Exchanges start watching. We told you to think bigger.",
    status: "locked",
  },
  {
    tier: "04",
    label: "Orbit",
    target: "10M MC",
    reward: "10M $BIGGER",
    desc: "This is where PvP coins die and unified coins live.",
    status: "locked",
  },
  {
    tier: "05",
    label: "Escape Velocity",
    target: "100M MC",
    reward: "WE MADE IT",
    desc: "The moon was never the goal. We're just getting started.",
    status: "locked",
  },
];

// ── Steps ──
export const STEPS = [
  {
    num: "01",
    title: "Hold $BIGGER",
    desc: "Buy and hold. That's your entry ticket to every bounty pool. No holding, no rewards.",
  },
  {
    num: "02",
    title: "Stop PvPing",
    desc: "When you find a coin, don't dump on the next guy. Push it higher. Help the chart go up, not sideways.",
  },
  {
    num: "03",
    title: "Post the Intent",
    desc: "Share the Think Bigger intent on X. Tag the coin. Show proof that you held instead of dumped.",
  },
  {
    num: "04",
    title: "Get the Bounty",
    desc: "Hit a market cap milestone? Holders who posted proof split the bounty pool. Bigger MC = bigger bag.",
  },
];

// ── Stats ──
export const STATS = [
  { label: "Bounty Pool", value: "12.6M", unit: "$BIGGER" },
  { label: "Holders", value: "1,840+", unit: "And growing" },
  { label: "Intent Posts", value: "3,200", unit: "Verified" },
  { label: "Mission", value: "100M MC", unit: "Minimum" },
];

// ── Problem points ──
export const PROBLEMS = [
  {
    title: "Everyone dumps on everyone",
    desc: "Coin launches. First buyers race to exit. Chart bleeds. Everyone loses. That's PvP.",
  },
  {
    title: "Nobody holds long enough",
    desc: "The second a coin pumps 2x, traders vanish. No diamond hands means no diamond charts.",
  },
  {
    title: "We fight instead of build",
    desc: "Imagine if every trader on pump.fun pushed the same direction instead of fighting each other for scraps.",
  },
];

// ── Solutions ──
export const SOLUTIONS = [
  {
    title: "Unite as one force",
    desc: "Stop competing. Start accumulating. When the collective holds, the chart goes one direction.",
  },
  {
    title: "Bounties for holding",
    desc: "Hold $BIGGER. Help push coins higher. Hit MC milestones. Get rewarded from the bounty pool.",
  },
  {
    title: "Exchanges buy on top",
    desc: "When we stop dumping and start holding, volume stays. Exchanges notice. They buy on top of our heads. That's the game.",
  },
];

// ── Contract ──
export const CONTRACT = {
  address: "TBC",
  network: "Solana",
  supply: "1,000,000,000",
};
