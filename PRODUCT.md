# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: the owner of a small or medium scrap yard (Brazil first) who today tracks stock on paper or spreadsheets. They decide and pay. They come to the landing page to judge whether Pátio fits their yard, then try the demo or get in touch.

## Product Purpose

Pátio (EN: YMS, Yard Management System) gives a scrap yard per-item inventory control. Loads come in with a Nota Fiscal. Every item gets a printed QR label at intake. Every checkout is a scan. Weight and count stay current without paper or spreadsheets.

This repo is only the public marketing site: one landing page, a contact form, and an outbound link to the live demo. Success means a yard owner opens the demo or sends a contact message.

## Positioning

- **Per-item QR traceability:** one printed label per item, tied to its NF. Spreadsheets and typical alternatives track only by load or weight.
- **Works with existing hardware:** runs on the yard's thermal printer (Elgin L42 Pro) and the scanner they already have.
- **Simple, narrow scope:** three functions only (intake, scan-out, stock view). Not a bloated ERP.

## Operating Context

- Intake: truck arrives with an NF; operator records NF, date, weight, material, item count; system prints one 100×50 mm QR label per item on the thermal printer.
- Checkout: operator scans each item's label; system records date, driver, and vehicle plate, then updates remaining weight and count.
- Stock view: read-only panel with current stock per load, materials in the yard, and full removal history.
- Demo: shared environment with sample data and no signup. Locale-specific URLs live in `lib/i18n/config.ts`.

## Capabilities and Constraints

- Copy is PT-BR first (brand "Pátio"), with an EN locale (brand "YMS"). Code and docs are in English.
- Landing site is standalone: no dependency on the app repo, its auth, or backend.
- Contact form uses Formspree free tier (50 submissions/month). Fields: name, email, phone (optional), message.
- Deployed on Vercel Hobby.
- Out of scope for now: pricing page, analytics, SEO work.

## Brand Commitments

- Names: "Pátio" / "Sistema de Gestão de Pátio" (PT-BR); "YMS" / "Yard Management System" (EN).
- Logo: `public/icons/` (icon-192, icon-512, apple-touch-icon).
- Voice (from current copy): direct, concrete, operational. Talks in the yard's own terms (NF, carga, etiqueta, bipe, placa). No hype.

## Evidence on Hand

- Live demo with sample data (URLs in `lib/i18n/config.ts`).
- Product is in pilot with at least one real yard. No testimonial, logo, metric, or case study is in the repo yet; the owner must provide any before it appears.
- Never fabricate customers, testimonials, numbers, pricing, or certifications.

## Product Principles

1. Show the real mechanism (label, scan, stock) instead of abstract claims.
2. Speak to the yard owner in the yard's vocabulary, not software vocabulary.
3. Keep the promise narrow: three functions done reliably beats a feature list.
4. Lower the barrier to trying: demo first, no signup; contact as the human path.
5. Proof only from real pilot evidence.
