import type { Metadata } from "next";
import CellCultureQcClient from "@/components/CellCultureQcClient";

export const metadata: Metadata = {
  title: "Universal Mycoplasma qPCR & PCR Detection Kits (EP 2.6.7) | India | Nuvamed",
  description:
    "TaqMan probe real-time qPCR and conventional PCR mycoplasma kits with <10 CFU/mL LOD. Formulated with internal amplification controls for EP 2.6.7 and USP <63> release testing. HSN 3822 00 90, 5% DSIR GST.",
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
    title: "Universal Mycoplasma qPCR & PCR Detection Kits (EP 2.6.7) | India",
    description: "Real-time TaqMan qPCR assay detecting >100 mycoplasma species in <2 hours with <10 CFU/mL analytical sensitivity. Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/cell-culture-qc",
    type: "website",
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
