import type { Metadata } from "next";
import CellTherapyClient from "@/components/CellTherapyClient";

export const metadata: Metadata = {
  title: "Cell Therapy & MSC Reagents India | Nuvamed",
  description:
    "Mesenchymal stem cell differentiation kits, recombinant dissociation enzymes, and cell cryopreservation tools. HSN 3822 00 90, 4-hour quote guarantee.",
  keywords: [
    "cell therapy reagents India",
    "MSC osteogenic differentiation kit",
    "recombinant dissociation enzyme",
    "trypsin replacement stem cells",
    "LNC1004",
    "HSN 38220090",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/categories/cell-therapy",
  },
  openGraph: {
    title: "Cell Therapy & MSC Differentiation Tools | India | Nuvamed",
    description: "Reagents for regenerative medicine, non-animal cell dissociation, and tri-lineage differentiation. Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/cell-therapy",
    type: "website",
    images: [
      {
        url: "https://www.nuvamed.co.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cell Therapy & Stem Cell Research Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cell Therapy & MSC Differentiation Tools | India | Nuvamed",
    description: "MSC differentiation kits and non-animal dissociation reagents in India. HSN 3822 00 90.",
    images: ["https://www.nuvamed.co.in/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nuvamed.co.in/categories/cell-therapy#category",
      name: "Cell Therapy & Stem Cell Research Range",
      description: "Complete toolsets for stem cell derivation, non-animal dissociation, and differentiation.",
      url: "https://www.nuvamed.co.in/categories/cell-therapy",
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
          name: "Cell Therapy & Stem Cell Tools",
          item: "https://www.nuvamed.co.in/categories/cell-therapy",
        },
      ],
    },
  ],
};

export default function CellTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CellTherapyClient />
    </>
  );
}
