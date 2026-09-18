# Giron Painting — Website

Bilingual (English / Español) website for Giron Painting, a construction, remodeling, and painting company in Plano, Texas serving the Dallas–Fort Worth area.

Built with **React 19, TypeScript, Vite, Tailwind CSS 4, and Lucide icons**. No backend is required; the site deploys to GitHub Pages automatically.

> **Still to add:** customer testimonials (`src/data/testimonials.ts`), the company story (`about.storyPlaceholder` in `src/i18n`), and the legal page details — anything still in `[SQUARE BRACKETS]`. No licenses, ratings, or reviews have been invented.

---

## Quick start

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # preview the production build
```

## Customizing the site

| What | Where |
| --- | --- |
| Company name, phone, email, address, hours, social links, service areas, site URL | `src/config/company.ts` |
| All visible text (English) | `src/i18n/en.ts` |
| All visible text (Spanish) | `src/i18n/es.ts` |
| Photos | `src/data/images.ts` |
| Service cards (order, icons, images) | `src/data/services.ts` |
| Project gallery | `src/data/projects.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Estimate form options | `src/data/projectTypes.ts` |
| Colors and fonts | `src/index.css` (`@theme` block) |

### 1. Company information

Edit `src/config/company.ts`. Phone and email links are generated automatically: while a value is still a placeholder it is shown as plain text, and once a real value is entered it becomes a clickable `tel:` / `mailto:` link. For the phone, set both `display` (e.g. `(972) 555-0123`) and `dial` (e.g. `+19725550123`).

Social icons stay inactive until a real URL is added — no fake links are published.

The same file feeds the page title, meta description, Open Graph tags, and the `LocalBusiness` structured data (schema.org `GeneralContractor` + `HousePainter`) in `vite.config.ts`.

### 2. Text and translations

Every user-facing string lives in `src/i18n/en.ts` and `src/i18n/es.ts`. The Spanish file is type-checked against the English one, so a missing key fails the build. `{company}` is replaced with the company name automatically.

Also replace the bracketed placeholders for the company story (`about.storyPlaceholder`) and on the Privacy Policy and Terms of Service pages (`legal`). Have the legal pages reviewed by a qualified professional.

### 3. Photos and logo

The company's photos live in `public/images/`, each saved as WebP in several widths (`<name>-480.webp`, `<name>-960.webp`, …) so phones download smaller files. `src/data/photoManifest.ts` lists the available sizes, and `src/data/images.ts` says where each photo is used (`'/images/<name>'`). One service card (Drywall) still uses a royalty-free [Unsplash](https://unsplash.com/license) photo until a real one is available.

To add a photo, export it at around 1600px wide in those sizes, add it to `photoManifest.ts`, reference it in `images.ts`, and write alt text in `src/i18n/en.ts` and `src/i18n/es.ts`. `public/og-image.jpg` (1200×630) is the preview image shown when the site is shared.

The logo is in `public/brand/` (SVG and PNG, white and black versions, plus the icon on its own). The site draws it from `src/components/ui/logoGeometry.ts`; the favicon is `public/favicon.svg`.

### 4. Gallery and testimonials

- **Projects:** each entry in `src/data/projects.ts` has a category, image, optional location, and optional crop position. Titles and alt text are in the translation files under `projects.items`. With two featured projects, keep the total a multiple of 3 (12, 15, 18…) so the grid has no gaps.
- **Testimonials:** replace the entries in `src/data/testimonials.ts` with real reviews, published with the customer's permission. Add or remove entries freely; the section hides itself if the list is empty.

### 5. Estimate form

The form validates in the browser (with translated messages) and is ready to connect to any service that accepts a JSON `POST`, such as [Formspree](https://formspree.io), or your own API route that sends email through [Resend](https://resend.com).

1. Create the endpoint.
2. Set `VITE_ESTIMATE_FORM_ENDPOINT`:
   - locally: copy `.env.example` to `.env.local` and fill it in;
   - on GitHub Pages: **Settings → Secrets and variables → Actions → Variables** → add `VITE_ESTIMATE_FORM_ENDPOINT`.

The request body contains `fullName`, `email`, `phone`, `projectType`, `propertyType`, `contactMethod`, `details`, `language`, `submittedAt`, and `page`. See `src/lib/submitEstimate.ts`.

Until an endpoint is set, a submitted form shows a message asking visitors to call or email instead, so no request is silently lost. A hidden honeypot field filters basic spam bots.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The workflow passes the Pages base path and URL to the build, so asset paths, the canonical link, and `sitemap.xml` are correct. For a custom domain, configure it in the Pages settings (or set `siteUrl` in `src/config/company.ts` when hosting elsewhere).

## Project structure

```
src/
├── App.tsx                 page layout and hash routing for legal pages
├── config/company.ts       business details (placeholders)
├── context/                estimate-form prefill from service dialogs
├── data/                   services, projects, testimonials, photos, form options
├── i18n/                   translations and language provider (saved in localStorage)
├── hooks/                  scroll reveal, active section, scroll lock
├── lib/                    image URLs, form validation, form submission
├── components/
│   ├── layout/             Navbar, MobileNav, LanguageSwitcher, Footer
│   ├── sections/           Hero, Services, WhyChooseUs, About, Projects, Lightbox,
│   │                       Process, ServiceAreas, Testimonials, EstimateCta, Contact
│   └── ui/                 Button, Photo, Modal, Reveal, SectionHeader, Logo, …
└── pages/LegalPage.tsx     Privacy Policy and Terms of Service templates
```

## Accessibility and performance notes

- Semantic landmarks, one `<h1>`, ordered `h2`/`h3` headings, skip link, visible focus styles.
- Native `<dialog>` for the service details and gallery lightbox (focus trapping, Escape to close); keyboard arrows and swipe in the lightbox.
- Form fields have labels, `aria-invalid`, and error messages linked with `aria-describedby`; focus moves to the first invalid field.
- Animations respect `prefers-reduced-motion`.
- Responsive `srcset` images, lazy loading below the fold, hero image preloaded, self-hosted variable fonts.
