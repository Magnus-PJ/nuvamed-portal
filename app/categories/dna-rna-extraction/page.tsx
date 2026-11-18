import type { Metadata } from "next";
import DnaRnaExtractionClient from "@/components/DnaRnaExtractionClient";

export const metadata: Metadata = {
  title: "DNA & RNA Extraction Kits India | Nuvamed",
  description:
    "Magnetic-bead and spin column kits for viral DNA/RNA and transfection-grade endotoxin-free plasmids. Express dispatch to Indian universities and labs.",
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
    title: "DNA & RNA Extraction Kits (Viral & Plasmid) | India | Nuvamed",
    description: "Magnetic-bead and silica columns for viral RNA/DNA, genomic DNA, and endotoxin-free plasmids (<0.1 EU/µg). Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/dna-rna-extraction",
    type: "website",
    images: [
      {
        url: "https://www.nuvamed.co.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DNA & RNA Extraction Kits, Viral RNA, Endo-Free Plasmids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DNA & RNA Extraction Kits (Viral & Plasmid) | India | Nuvamed",
    description: "Viral RNA/DNA isolation kits and endotoxin-free plasmid purification in India. HSN 3822 00 90.",
    images: ["https://www.nuvamed.co.in/opengraph-image"],
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
