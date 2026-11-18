import type { Metadata } from "next";
import DnaRnaExtractionClient from "@/components/DnaRnaExtractionClient";

export const metadata: Metadata = {
  title: "DNA & RNA Extraction Kits, Viral RNA, Endo-Free Plasmids | India | Nuvamed",
  description:
    "Magnetic-bead and spin column kits for viral DNA/RNA (L2056, L1051), transfection-grade endotoxin-free plasmid midipreps/maxipreps, and bulk magnetic beads (LA-1003). HSN 3822 00 90, 5% DSIR GST.",
  keywords: [
    "viral RNA extraction kit India",
    "plasmid maxiprep kit price",
    "endotoxin free plasmid kit",
    "bulk magnetic beads India",
    "L2056",
    "L1051",
    "HSN 38220090",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/categories/dna-rna-extraction",
  },
  openGraph: {
    title: "DNA & RNA Extraction Kits, Viral RNA, Endo-Free Plasmids | India",
    description: "Magnetic-bead and silica columns for viral RNA/DNA, genomic DNA, and endotoxin-free plasmids (<0.1 EU/µg). Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/dna-rna-extraction",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nuvamed.co.in/categories/dna-rna-extraction#category",
      name: "Genomic, Viral & Plasmid Nucleic Acid Extraction",
      description: "Nucleic acid isolation kits for viral diagnostics, transfection plasmids, and high-throughput genomic DNA.",
      url: "https://www.nuvamed.co.in/categories/dna-rna-extraction",
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
          name: "DNA & RNA Extraction Reagents",
          item: "https://www.nuvamed.co.in/categories/dna-rna-extraction",
        },
      ],
    },
  ],
};

export default function DnaRnaExtractionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DnaRnaExtractionClient />
    </>
  );
}
