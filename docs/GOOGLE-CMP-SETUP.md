# Google certified CMP (Privacy & messaging) — setup

Use **Google’s own CMP** (not a third-party vendor). It is configured in **AdSense → Privacy & messaging**, then auto-loads on sites that include your AdSense code.

Site code already has:

1. **Consent Mode v2 defaults** (`ad_storage` etc. denied until update)
2. **adsbygoogle.js** with your `ca-pub-…` client

---

## Recommendation

| Option | Buttons | Use when |
|--------|---------|----------|
| **3 choices (recommended)** | Consent · Do not consent · Manage options | Best clarity for EEA/UK/CH; users can refuse without opening the full panel |
| **2 choices** | Consent · Manage options | Simpler UI; refuse is only via Manage options |

For most publishers: **create the 3-choice GDPR message**.

You do **not** need “Certified CMP → alternative vendor” if you use Google’s CMP.

---

## Create the GDPR message (current AdSense UI)

1. Open [Google AdSense](https://www.google.com/adsense/)
2. Left sidebar → **Privacy & messaging**
3. Open **GDPR** (European regulations)
4. Click **Create message** (or manage existing)
5. **Sites**
   - Select **`240-f1.vercel.app`**
   - For future sites: add each domain here (or create a separate message and attach more sites)
6. **Message language** — English (add more languages if you want)
7. **User choices / buttons** — pick one layout:
   - **Consent** + **Manage options** → 2-choice  
   - **Consent** + **Do not consent** + **Manage options** → 3-choice ← recommended  
8. Edit headline/body if you want (keep it clear and neutral)
9. **Ad partners** — review “Your ad partners” (commonly used vs custom list)
10. **Publish** the message

Google will show the banner to users in the **EEA, UK, and Switzerland** when they hit your site. Outside those regions it typically does not appear.

---

## Optional: US state regulations

Under **Privacy & messaging** you may also see **US state regulations** (e.g. CCPA-style). Create a separate message if AdSense prompts you; it is not the same as the GDPR message.

---

## Verify on your site

1. Deploy latest code (consent defaults + adsbygoogle already in `index.html`)
2. Open the site from an EEA/UK location (or use a VPN to e.g. Germany/France)
3. Hard refresh — you should see Google’s consent dialog
4. Choose **Do not consent** vs **Consent** and confirm ads still load (non-personalized if denied, when inventory allows)

Do **not** install a second CMP (Cookiebot, OneTrust, etc.) while Google’s message is published — you will get **double banners**.

---

## Future sites

1. Add the same AdSense `ca-pub-…` script + consent default snippet to the new site  
2. In AdSense → **Privacy & messaging → GDPR →** your message → **Sites** → add the new domain  
3. Or clone the message for a different brand  

---

## After ads are approved

In `config.js` / `public/config.js`:

```js
adsense: {
  client: 'ca-pub-7522159512030116',
  slots: { banner: 'YOUR_SLOT_ID' },
},
ads: { demo: false },
```
