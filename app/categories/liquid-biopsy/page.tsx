import type { Metadata } from "next";
import LiquidBiopsyClient from "@/components/LiquidBiopsyClient";

export const metadata: Metadata = {
  title: "Liquid Biopsy, cfDNA Purification & NGS Size Selection Reagents India | Nuvamed",
  description:
    "Superparamagnetic SPRI bead kits for 167 bp cfDNA extraction from plasma, NGS library size selection (L2059), and PCR cleanup. HSN 3822 00 90, 5% DSIR GST. Official quotes in 4 hours.",
  keywords: [
    "liquid biopsy kits India",
    "cfDNA extraction kit price",
    "NGS size selection beads",
    "SPRI bead cleanup India",
    "MagDNA cfDNA L2057",
    "HSN 38220090",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/categories/liquid-biopsy",
  },
  openGraph: {
    title: "Liquid Biopsy, cfDNA Purification & NGS Size Selection Reagents India",
    description: "Selective 167 bp cfDNA fragment recovery with ~75% cost savings vs imported spin columns. Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/liquid-biopsy",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nuvamed.co.in/categories/liquid-biopsy#category",
      name: "Liquid Biopsy, cfDNA Purification & NGS Size Selection",
      description: "Superparamagnetic SPRI bead-based extraction and purification of cell-free DNA for NGS and ddPCR liquid biopsy workflows.",
      url: "https://www.nuvamed.co.in/categories/liquid-biopsy",
      provider: {
        "@type": "Organization",
        name: "Nuvamed Diagnostics LLP Limited",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.nuvamed.co.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Liquid Biopsy & cfDNA Reagents",
          item: "https://www.nuvamed.co.in/categories/liquid-biopsy",
        },
      ],
    },
  ],
};

export default function LiquidBiopsyCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LiquidBiopsyClient />
    </>
  );
}
