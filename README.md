# MNCH Brews

A responsive brand concept for MNCH Brews, built with the Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run lint` and `npm run build` to validate the project.

## Deployment configuration

Set `NEXT_PUBLIC_SITE_URL` to the final, verified site origin before deployment (for example, `https://your-confirmed-domain`). This enables absolute sitemap URLs and share-card images. No business domain is assumed in the source.

Menu categories, items, and listed prices are transcribed from the owner-provided menu screenshots and are editable in `src/data/brand.ts`. The screenshots do not specify a currency. Hours, location, phone, and email were not verifiable from the public Instagram page; the Instagram account is the only currently verified contact channel.

The six original photographs are in `public/images/`. The floating-can asset is a transparent crop of the original `MNCH5.jpeg` photograph, not a generated product rendering.
