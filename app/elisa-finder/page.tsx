import type { Metadata } from "next";
import ElisaFinderClient from "@/components/ElisaFinderClient";

export const metadata: Metadata = {
  title: "13,137 ELISA Kits Across 15 Species | India | Nuvamed",
  description:
    "Search 13,000+ pre-coated 96-test ELISA kits for Human, Mouse, Rat, Porcine targets. Pre-formatted INR proforma with HSN 3822 00 90 and DSIR 5% GST.",
  keywords: [
    "ELISA kit supplier India",
    "human IL-6 ELISA kit price",
    "TNF alpha ELISA kit India",
    "VEGF ELISA kit price",
    "mouse ELISA kits India",
    "rat ELISA kits",
    "HSN 38220090",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/elisa-finder",
  },
  openGraph: {
    title: "13,137 ELISA Kits Across 15 Species | India | Nuvamed",
    description: "Search human, rodent, and veterinary biomarkers with pre-coated 96-well strip plates. Official GST quotes in 4 hours from Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/elisa-finder",
    type: "website",
    images: [
      {
        url: "https://www.nuvamed.co.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "13,137 Validated ELISA Kits Database",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "13,137 ELISA Kits Across 15 Species | India | Nuvamed",
    description: "Search 13,000+ pre-coated 96-test ELISA kits across 15 species with fast India dispatch. HSN 3822 00 90.",
    images: ["https://www.nuvamed.co.in/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nuvamed.co.in/elisa-finder#catalog",
      name: "13,137 Validated ELISA Kits Database",
      description: "Searchable database of over 13,000 sandwich and one-step rapid ELISA kits across 15 species.",
      url: "https://www.nuvamed.co.in/elisa-finder",
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
          name: "13,137 ELISA Kits Finder",
          item: "https://www.nuvamed.co.in/elisa-finder",
        },
      ],
    },
  ],
};

export default function ElisaFinderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ElisaFinderClient />
    </>
  );
}
