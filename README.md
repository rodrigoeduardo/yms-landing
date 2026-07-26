# YMS Landing

Public marketing site for **YMS (Yard Management System)** — inventory control for scrap yards, with one printed QR code per item. Standalone repo: no dependency on the app repo, its auth, or its backend. Just a landing page, a contact form, and an outbound link to the live demo.

All user-facing copy is PT-BR (matching the demo environment). Code, comments, and docs are English.

## Stack

- Next.js (App Router) + React, TypeScript
- Plain CSS (`app/globals.css`) — palette mirrors the app's design tokens
- [Formspree](https://formspree.io) free tier for contact-form email delivery (no server code, no API keys in the repo)
- Deployed on Vercel (Hobby)

## Local development

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev                  # http://localhost:3000
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID — the token after `/f/` in the form endpoint. |

Demo CTA links are locale-aware and not configurable via env — see `lib/i18n/config.ts` (`demoUrls`).

This is a build-time public var — set it in Vercel **before** deploying, and redeploy after changing it.

## Contact form setup (Formspree)

1. Create a free account at [formspree.io](https://formspree.io) using the inbox that should receive leads.
2. **New form** → name it (e.g. `yms-landing-leads`). Copy the form's endpoint: `https://formspree.io/f/<FORM_ID>`.
3. Put `<FORM_ID>` in `NEXT_PUBLIC_FORMSPREE_ID` (locally in `.env.local`, and in Vercel → Project → Settings → Environment Variables).
4. In the Formspree dashboard, restrict allowed domains to your production domain (Settings → Restrict to Domain) once deployed.

The form posts `name`, `email`, `phone` (optional), and `message` as form data. Free tier includes 50 submissions/month and built-in spam filtering — enough for this stage.

## Deploy (Vercel)

1. Push this repo to GitHub and import it in Vercel (framework auto-detected as Next.js).
2. Set both env vars for Production.
3. Deploy.

## Verification checklist (required before calling it done)

1. Open the production URL.
2. **Demo CTA:** click "Ver Demo" — the demo must open in a new tab.
3. **Contact form (real test):** submit a real message with your own email. Confirm:
   - the success state ("Mensagem enviada. Obrigado!") appears;
   - the submission arrives in the Formspree-linked inbox (first-ever submission requires confirming the form via the email Formspree sends).
4. Submit with an empty required field — browser validation should block it.

## Out of scope (this iteration)

Pricing page, analytics, SEO work — deliberately excluded.
