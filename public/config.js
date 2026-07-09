/**
 * 24-0 F1 — site & ads config (safe to edit without touching game logic)
 *
 * AdSense:
 *  1. client + slots.banner from AdSense → Ads → By ad unit
 *  2. ads.demo = false when units are live
 *
 * GDPR consent (Google certified CMP — no extra vendor):
 *  AdSense → Privacy & messaging → GDPR → create/publish message for 240-f1.vercel.app
 *  Site already loads adsbygoogle.js + Consent Mode defaults in index.html
 *  Recommended buttons: Consent | Do not consent | Manage options (3-choice)
 *
 * Supabase (optional): URL + anon key from project Settings → API
 */
window.SITE_CONFIG = {
  siteName: '24-0 F1',
  // After a public Production deploy, set this to the domain under Project → Settings → Domains
  // (usually https://240-f1.vercel.app). Do NOT use the long *-hernkim-7652s-projects* URL if
  // Deployment Protection / SSO login is on — that is not the public game.
  siteUrl: 'https://240-f1.vercel.app',
  tagline: 'Spin an era. Draft the line-up. Hunt 24–0.',

  // Google Analytics 4 (optional) — Measurement ID G-XXXXXXXX
  ga4Id: '',

  // Supabase (optional — not required for v1 play)
  supabaseUrl: '',
  supabaseAnonKey: '',

  // Google AdSense
  adsense: {
    client: '', // ca-pub-xxxxxxxxxxxxxxxx
    // Slot IDs from AdSense → Ads → By ad unit
    slots: {
      banner: '',       // sticky bottom display
      interstitial: '', // season-complete overlay unit (display)
    },
  },

  ads: {
    enabled: true,
    demo: true, // flip to false when AdSense units are live
    freeEraSpins: 3,
    bannerOnSetup: true,
    bannerOnSeason: true,
    bannerOnResult: false,
    interstitialOnSeasonComplete: true,
    rewardedEraRespin: true,
    rewardedShareClean: true,
  },
};
