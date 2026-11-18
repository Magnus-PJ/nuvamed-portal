import type { Metadata } from "next";
import ElisaFinderClient from "@/components/ElisaFinderClient";

export const metadata: Metadata = {
  title: "13,137 ELISA Kits Across 15 Species | India Price & Target Finder | Nuvamed",
  description:
    "Searchable catalog of 13,137 pre-coated 96-test ELISA kits across Human, Mouse, Rat, Bovine, and Veterinary species. Standard & One-Step formats. 4-hour proforma quotes from Nuvamed Diagnostics.",
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
    title: "13,137 Validated ELISA Kits Across 15 Species | India Reagent Finder",
    description: "Search human, rodent, and veterinary biomarkers with pre-coated 96-well strip plates. Official GST quotes in 4 hours from Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/elisa-finder",
    type: "website",
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
