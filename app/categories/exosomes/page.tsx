import type { Metadata } from "next";
import ExosomesClient from "@/components/ExosomesClient";

export const metadata: Metadata = {
  title: "Exosome Isolation Kits & Antibodies India | Nuvamed",
  description:
    "Precipitation kits for exosomes from serum, plasma, urine, plus CD9, CD63 & TSG101 antibodies. In stock in Kerala with 4-hour INR proforma turnaround.",
  keywords: [
    "exosome isolation kit India",
    "exosome precipitation price",
    "CD9 antibody India",
    "CD63 antibody India",
    "TSG101 antibody",
    "MISEV 2023 exosome",
    "HSN 38220090",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/categories/exosomes",
  },
  openGraph: {
    title: "Exosome Isolation Kits & MISEV Antibodies | India | Nuvamed",
    description: "Isolate intact 30–150 nm EVs in under 2 hours without ultracentrifugation. Authorized India distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/exosomes",
    type: "website",
    images: [
      {
        url: "https://www.nuvamed.co.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Exosome Isolation Kits & MISEV Marker Antibodies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exosome Isolation Kits & MISEV Antibodies | India | Nuvamed",
    description: "Non-ultracentrifugation exosome isolation kits and MISEV antibodies in India. Fast Kerala courier dispatch.",
    images: ["https://www.nuvamed.co.in/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nuvamed.co.in/categories/exosomes#category",
      name: "Exosome & Extracellular Vesicle Research Range",
      description: "Reagents for exosome isolation, direct exosomal RNA RT-PCR, and MISEV-standard marker antibodies.",
      url: "https://www.nuvamed.co.in/categories/exosomes",
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
          name: "Exosome & EV Tools",
          item: "https://www.nuvamed.co.in/categories/exosomes",
        },
      ],
    },
  ],
};

export default function ExosomesCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExosomesClient />
    </>
  );
}
