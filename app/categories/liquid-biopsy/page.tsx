import type { Metadata } from "next";
import LiquidBiopsyClient from "@/components/LiquidBiopsyClient";

export const metadata: Metadata = {
  title: "Liquid Biopsy & cfDNA Reagents India | Nuvamed",
  description:
    "Magnetic bead cfDNA extraction kits and NGS size selection reagents for oncology R&D in India. HSN 3822 00 90, DSIR 5% GST, and 4-hour proforma invoice SLA.",
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
    title: "Liquid Biopsy & cfDNA Reagents India | Nuvamed Diagnostics",
    description: "Selective 167 bp cfDNA fragment recovery with ~75% cost savings vs imported spin columns. Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/liquid-biopsy",
    type: "website",
    images: [
      {
        url: "https://www.nuvamed.co.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Liquid Biopsy & cfDNA Reagents India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Biopsy & cfDNA Reagents India | Nuvamed Diagnostics",
    description: "Magnetic bead cfDNA extraction kits and NGS size selection reagents for oncology R&D in India. HSN 3822 00 90.",
    images: ["https://www.nuvamed.co.in/opengraph-image"],
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
