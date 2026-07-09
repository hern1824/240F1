/**
 * 24-0 F1 — site & ads config (safe to edit without touching game logic)
 *
 * After AdSense approval:
 *  1. Set ADSENSE_CLIENT to ca-pub-xxxxxxxx
 *  2. Set ADS.demo = false
 *  3. Fill slot IDs below
 *
 * Supabase (optional leaderboards later):
 *  Set SUPABASE_URL + SUPABASE_ANON_KEY from project Settings → API
 */
window.SITE_CONFIG = {
  siteName: '24-0 F1',
  siteUrl: '', // e.g. https://240f1.vercel.app — set after first deploy for absolute OG/share links
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
