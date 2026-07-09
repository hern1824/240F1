# 24-0 F1

Unofficial F1 perfect-season roster builder. Spin a constructor era, draft the line-up, lock a season hand, hunt **24–0**.

> Fan project — not affiliated with Formula 1, the FIA, or any team.

## Stack

| Piece | Use |
|--------|-----|
| **Static HTML/JS** | Game (`index.html`) |
| **Vercel** | Hosting + HTTPS + previews |
| **GitHub** | Source + deploy hook |
| **Supabase** | Optional later (leaderboards) |
| **AdSense** | Ads when approved |

## Local

Open `index.html` in a browser, or:

```bash
npx serve .
```

## Deploy to Vercel (recommended)

### A) GitHub → Vercel (best)

1. Create a GitHub repo and push this folder (see below).
2. [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Other** (static).
4. Deploy → copy the URL (e.g. `https://240f1.vercel.app`).
5. In `config.js`, set `siteUrl` to that URL.
6. Optional: Project → Settings → Domains → add custom domain.

### B) Vercel CLI

```bash
npm i -g vercel
cd Documents/240F1
vercel
vercel --prod
```

## Config

Edit **`config.js`** only when possible:

```js
siteUrl: 'https://your-deployment.vercel.app',
ga4Id: 'G-XXXXXXXX',           // optional
adsense: { client: 'ca-pub-…', slots: { banner: '…' } },
ads: { demo: false },          // after AdSense is live
supabaseUrl: '',               // optional
supabaseAnonKey: '',
```

## Ads checklist

1. Deploy live HTTPS site.
2. Apply [Google AdSense](https://www.google.com/adsense/) with that domain.
3. Add privacy + terms links (already linked from the game footer).
4. Create a **Display** ad unit → paste client + slot into `config.js`.
5. Set `ads.demo = false`.
6. Keep placements soft: banner + post-season break; never sell win rate.

## Supabase (optional, later)

1. Create a project at [supabase.com](https://supabase.com).
2. SQL Editor → run `supabase/schema.sql`.
3. Settings → API → copy URL + anon key into `config.js`.
4. Wire submit on debrief when you want a public board.

## Project layout

```
240F1/
  index.html          # game
  24-0-f1.html        # backup copy of game
  config.js           # site / ads / supabase switches
  privacy.html
  terms.html
  vercel.json
  public/og.svg       # social preview (replace with PNG for best OG support)
  supabase/schema.sql
  README.md
```

## Launch sequence

1. Push to GitHub → deploy Vercel  
2. Set `siteUrl` in `config.js`  
3. Apply AdSense + wait for approval  
4. Soft test on phone  
5. Post share cards on X: “Can you go 24–0?”  

## License / disclaimer

Unofficial entertainment simulation. No real-money gambling. Team and driver names are historical references only.
