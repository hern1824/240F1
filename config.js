/**
 * 24-0: Perfect Season — site & ads config (safe to edit without touching game logic)
 *
 * Ads (AdSense H5 Games Ads — the correct product for web interstitial/rewarded):
 *  1. adsense.client from AdSense account
 *  2. Banner is a normal display unit → slots.banner
 *  3. Interstitial + rewarded come from H5 Games Ads (adBreak/adConfig) — no slot IDs needed,
 *     they are enabled at the AdSense account/site level once approved
 *  4. ads.demo = false to go live
 *
 * GDPR consent (Google certified CMP — no extra vendor):
 *  AdSense → Privacy & messaging → GDPR → create/publish a message for your domain.
 *  Site already loads adsbygoogle.js + Consent Mode defaults in index.html.
 *
 * Supabase (optional): URL + anon/publishable key from project Settings → API
 * Support / supporter: supportUrl (Ko-fi / BMC / Stripe link) + optional supporterCode
 */
window.SITE_CONFIG = {
  siteName: '24-0: Perfect Season',
  // After a public Production deploy, set this to the domain under Project → Settings → Domains.
  // Keep the current Vercel URL until a rename/custom domain is live.
  siteUrl: 'https://240-f1.vercel.app',
  tagline: 'Spin an era. Draft the line-up. Hunt 24–0.',

  // Google Analytics 4 — paste Measurement ID from analytics.google.com (G-XXXXXXXX)
  // Events: era_spin, season_start, season_complete, daily_start, share_open,
  // leaderboard_submit, ad_rewarded_*, ad_interstitial_*
  ga4Id: '',

  // Supabase (optional — not required for v1 play)
  supabaseUrl: 'https://oxtokirbzrbtkcsxbplb.supabase.co',
  supabaseAnonKey: 'sb_publishable_ytbzWmrCYggDtiF8yAE5ZQ_GdVubMLE',

  // Google AdSense
  adsense: {
    client: 'ca-pub-7522159512030116',
    // Only the sticky banner needs a slot ID. Interstitial + rewarded are H5 Games Ads
    // (adBreak/adConfig), configured at the AdSense account level — no slot IDs here.
    slots: {
      banner: '', // sticky bottom display — required before demo: false
    },
  },

  ads: {
    enabled: true,
    demo: true, // set false only when AdSense (incl. H5 Games Ads) is approved for the domain
    freeEraSpins: 3,
    bannerOnSetup: true,
    bannerOnSeason: true,
    bannerOnResult: false, // keep the result/share screen clean
    interstitialOnSeasonComplete: true,
    rewardedEraRespin: true,
    rewardedShareClean: true,
    rewardedExtraRedo: true, // emergency +1 redo (heaviest tax) — drama insurance, never a bought win
  },

  // Support the game (optional). If set, the debrief shows a "Support" button.
  // supportUrl: link to Ko-fi / Buy Me a Coffee / Stripe.
  // supporterCode: a code you hand out on that page; entering it sets ads off + gold theme.
  supportUrl: '',
  supporterCode: '',
};
