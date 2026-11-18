import type { Metadata } from "next";
import CellCultureQcClient from "@/components/CellCultureQcClient";

export const metadata: Metadata = {
  title: "Mycoplasma qPCR & PCR Kits (EP 2.6.7) | India | Nuvamed",
  description:
    "TaqMan probe real-time qPCR & conventional PCR mycoplasma kits with <10 CFU/mL sensitivity for cell culture QC. Fast courier dispatch across India.",
  keywords: [
    "mycoplasma qPCR detection kit India",
    "mycoplasma PCR kit price",
    "EP 2.6.7 mycoplasma testing",
    "USP 63 mycoplasma test kit",
    "LG1903-50T",
    "HSN 38220090",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/categories/cell-culture-qc",
  },
  openGraph: {
    title: "Mycoplasma qPCR & PCR Kits (EP 2.6.7) | India | Nuvamed",
    description: "Real-time TaqMan qPCR assay detecting >100 mycoplasma species in <2 hours with <10 CFU/mL analytical sensitivity. Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/cell-culture-qc",
    type: "website",
    images: [
      {
        url: "https://www.nuvamed.co.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Universal Mycoplasma qPCR & PCR Detection Kits (EP 2.6.7)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycoplasma qPCR & PCR Kits (EP 2.6.7) | India | Nuvamed",
    description: "TaqMan probe qPCR mycoplasma testing kits with EP 2.6.7 regulatory compliance in India.",
    images: ["https://www.nuvamed.co.in/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nuvamed.co.in/categories/cell-culture-qc#category",
      name: "Cell Culture QC & Mycoplasma Detection Range",
      description: "Validated TaqMan qPCR and conventional PCR assays for biopharmaceutical cell bank mycoplasma surveillance.",
      url: "https://www.nuvamed.co.in/categories/cell-culture-qc",
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
          name: "Cell Culture QC & Mycoplasma Detection",
          item: "https://www.nuvamed.co.in/categories/cell-culture-qc",
        },
      ],
    },
  ],
};

export default function CellCultureQcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CellCultureQcClient />
    </>
  );
}
