# Luminous BioSciences India — Next.js 15 Production Life Sciences Portal

This repository contains the production **Next.js 15 (App Router)** implementation for Luminous BioSciences India, featuring:
- **Blended Architecture**: High-speed interactive shopping/quote cart drawer + grounded, clinical, non-AI statutory copy.
- **Top-Tier Indian Life Sciences SEO**: Pre-rendered semantic HTML5, Schema.org `Product`, `Organization` & `FAQPage` JSON-LD graphs, automated sitemaps, and programmatic SEO architecture for 13,137 ELISA kits.
- **Indian Institutional Procurement Engine**: HSN Code `3822 00 90`, DSIR 5% Concessional GST Certificate support, GeM portal readiness, and ambient vs -20°C cold-chain freight separation.

---

## 1. Quick Local Development

```bash
# Navigate to the project directory
cd luminous-india-nextjs

# Install dependencies (Node v20+ recommended)
npm.cmd install

# Run local development server
npm.cmd run dev
```

Visit `http://localhost:3000` to preview the site.

---

## 2. Deploying to Vercel (1-Click)

### Option A: Via GitHub (Recommended)
1. Initialize a Git repository and push this directory to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Luminous India Next.js portal"
   git remote add origin https://github.com/<your-username>/luminous-india-biotech.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New..." $\rightarrow$ "Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**. The site will be live on a global edge CDN in under 60 seconds!

---

## 3. Connecting Your GoDaddy Domain to Vercel

1. In your **Vercel Project Dashboard**, go to **Settings $\rightarrow$ Domains**.
2. Type your domain (e.g., `luminousbio.in`) and click **Add**.
3. Vercel will prompt you to set the DNS records on GoDaddy.
4. Log in to your **GoDaddy DNS Management Console** for your domain, and add/update these two records:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | 600 (or 1/2 Hour) |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 (or 1/2 Hour) |

5. Return to Vercel and click **"Refresh"**. Vercel will verify the DNS and automatically issue an **SSL Certificate (HTTPS)** within 2–5 minutes.

---

## 4. Project Directory Structure

```
luminous-india-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with CartProvider, Header, Footer & Drawer
│   ├── page.tsx                # Blended Homepage (Stats, Lead Tiles, Sample Picker, RFQ)
│   ├── products/
│   │   └── cfdna-purification-kit/
│   │       └── page.tsx        # Flagship PDP (TapeStation data, Qiagen comparison, Pack sizes)
│   ├── categories/
│   │   └── exosomes/
│   │       └── page.tsx        # 14-item EV lineup, MISEV antibodies, 1-click bundles
│   ├── elisa-finder/
│   │   └── page.tsx            # 13,137 ELISA Search Engine & Programmatic Portal
│   ├── quote-cart/
│   │   └── page.tsx            # Dedicated Institutional RFQ & Proforma Generator
│   ├── sitemap.ts              # Automated Google XML Sitemap
│   └── robots.ts               # Googlebot & crawler directives
├── components/
│   ├── Header.tsx              # HSN 3822 00 90 notice, navigation, live cart count
│   ├── Footer.tsx              # RUO disclaimer, Kerala hub details, statutory links
│   ├── QuoteDrawer.tsx         # Slide-in cart with ambient vs cold-chain separation
│   ├── CartContext.tsx         # localStorage persistent quote cart state
│   └── SamplePicker.tsx        # Interactive biological matrix switcher
├── tailwind.config.ts          # Clinical biotech palette (Navy #07192c, Teal #008080)
├── next.config.mjs             # Next.js 15 production config
└── package.json                # Dependencies
```

---

## 5. Summary of Institutional Commercial Features

1. **Price on Request Engine**:
   Every product acts as a lead generation instrument to measure true product-level demand across Indian labs before capital is tied up in Kerala inventory.
2. **Cold-Chain Segregation**:
   Items stored at -20°C (antibodies, qPCR kits) are automatically split from ambient items (cfDNA kits) in the quote summary to prevent dry-ice freight surcharges on standard preps.
3. **Statutory & Tax Ready**:
   Invoicing supports both **DSIR 5% Concessional GST** for research institutes and **18% standard GST** for biopharma CROs.
