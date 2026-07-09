# 24-0: Perfect Season

Unofficial motorsport perfect-season roster builder. Spin a constructor era, draft the line-up, lock a season hand, hunt **24–0**.

> Fan project — not affiliated with Formula 1, the FIA, or any team. Team and driver names are historical references only.

## What's inside

- **36 eras** across God / Strong / Underdog tiers, each with era-accurate rosters and principal bonuses
- **24-race calendar** with per-venue wear, safety-car, and rain character
- **Absolute-field simulation** (tuned via Monte Carlo — see `docs/BALANCE.md`): a strong package genuinely out-runs the grid, so 24–0 is a live, tier-differentiated target
- **Three run modes**: race-by-race, run-to-flashpoint (auto-stops 3–8 times a season for real decisions), or simulate the rest
- **Rich weekend calls**: tires, stops, engine mode, pit window, **qualifying gamble**, **wet crossover** (slicks/inters), **team orders**, plus **sprint weekends** and **upgrade tokens**
- **Named rival** whose record shadows yours and claims most of your defeats
- **Daily Challenge**: one shared seed for everyone, one attempt, its own leaderboard tab
- **Garage**: era collection with best records, season history with race maps, and trophies
- **Taxed redo economy** (3 per season) + optional rewarded emergency +1 redo (heaviest tax)
- **Share card** (1080²) with Classic / Carbon / Gold themes
- **Leaderboard** (Supabase) with Public / Daily / Device tabs
- **Refresh-proof**: in-progress seasons persist in localStorage

## Stack

| Piece | Use |
|--------|-----|
| **Static HTML/JS** | Game (`index.html`) |
| **Vercel** | Hosting + HTTPS + previews |
| **GitHub** | Source + deploy hook |
| **Supabase** | Leaderboards (optional) |
| **AdSense + H5 Games Ads** | Ads when approved |

## Local

Open `index.html` in a browser, or:

```bash
npx serve .
```

## Deploy to Vercel

### A) GitHub → Vercel (best)

1. Push this folder to a GitHub repo.
2. [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Other** (static).
4. Deploy → copy the URL.
5. In `config.js`, set `siteUrl` to that URL.
6. Rename the project / add a custom domain under Project → Settings (see "Rename" below).

### B) Vercel CLI

```bash
npm i -g vercel
cd Documents/240F1
vercel
vercel --prod
```

### Rename away from the old "240-f1" slug

Vercel: Project → **Settings → General → Project Name** (changes the `*.vercel.app` slug),
or add a custom domain under **Settings → Domains**. After the public URL changes, update
`siteUrl` in `config.js` so OG images and share links use the new domain.

## Config

Edit **`config.js`**:

```js
siteName: '24-0: Perfect Season',
siteUrl: 'https://240-f1.vercel.app',   // update after rename / custom domain
ga4Id: 'G-XXXXXXXX',
adsense: { client: 'ca-pub-…', slots: { banner: '…' } },
ads: { demo: false },                    // after AdSense + H5 Games Ads approved
supabaseUrl: 'https://….supabase.co',
supabaseAnonKey: '…',
supportUrl: '',                          // Ko-fi / BMC / Stripe (optional)
supporterCode: '',                       // unlock ads-off + gold theme (optional)
```

## Ads checklist (AdSense + H5 Games Ads)

Interstitial and rewarded ads on the web come from **AdSense H5 Games Ads** (the Ad
Placement API / `adBreak`), **not** from display units in a modal. The banner is a normal
display unit.

1. Deploy a live HTTPS site.
2. Apply to [Google AdSense](https://www.google.com/adsense/) for the domain.
3. Enable **H5 Games Ads** on the AdSense account (for interstitial + rewarded).
4. Create a **Display** unit for the sticky banner → paste its slot ID into `config.js` (`slots.banner`).
5. Add privacy + terms links (already linked in the game footer).
6. Publish **Privacy & messaging** CMP for the domain (Consent Mode v2 is already in the page head).
7. Set `ads.demo = false`.

Placements: sticky banner on setup/season only; interstitial after a season completes;
rewarded for era re-spin, clean share caption, gold theme, and the emergency +1 redo.
Ads never change win rate.

## Supabase leaderboard

1. Project at [supabase.com](https://supabase.com).
2. SQL Editor → run `supabase/schema.sql` (first-time), then `supabase/migrations/0001_daily.sql` (adds `mode` + `seed` for the Daily board).
3. Settings → API → URL + publishable/anon key into `config.js`.
4. Submit from the debrief after a full season (Public / Daily / Device tabs).

> Note: submissions come from the anon key with client-computed results, so the public
> board is spoofable via direct API calls. Daily runs carry a verifiable seed; for a
> hardened board, validate submissions in an edge function by replaying the season from
> its seed. Treat the current board as social, not authoritative.

## Analytics (GA4)

Set `ga4Id` in `config.js`. Events: `era_spin`, `season_start`, `season_complete`,
`daily_start`, `share_open`, `leaderboard_submit`, `ad_rewarded_*`, `ad_interstitial_*`.

## Social preview (OG)

`og.png` (1200×630) is used for `og:image` / Twitter card. Absolute URL is built from `siteUrl`.

## Project layout

```
240F1/
  index.html                       # game
  24-0-f1.html                     # backup copy of a prior build
  config.js                        # site / ads / supabase / support switches
  privacy.html
  terms.html
  vercel.json
  og.png                           # social preview (1200×630)
  og.svg                           # vector preview source
  docs/BALANCE.md                  # simulation model + Monte Carlo targets
  docs/GOOGLE-CMP-SETUP.md
  supabase/schema.sql
  supabase/migrations/0001_daily.sql
  README.md
```

## License / disclaimer

Unofficial entertainment simulation. No real-money gambling. Team and driver names are
historical references only. Not affiliated with Formula 1, the FIA, or any team.
