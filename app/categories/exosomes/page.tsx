import type { Metadata } from "next";
import ExosomesClient from "@/components/ExosomesClient";

export const metadata: Metadata = {
  title: "Exosome Isolation Kits & MISEV Marker Antibodies (CD9, CD63, TSG101) | India | Nuvamed",
  description:
    "Non-ultracentrifugation exosome precipitation kits from serum, plasma, urine, and media. MISEV 2023 validated CD9, CD63, CD81, and TSG101 antibodies. HSN 3822 00 90, 5% DSIR GST.",
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
    title: "Exosome Isolation Kits & MISEV Marker Antibodies | India Distributor",
    description: "Isolate intact 30–150 nm EVs in under 2 hours without ultracentrifugation. Authorized India distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/exosomes",
    type: "website",
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
