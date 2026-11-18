import type { Metadata } from "next";
import CfdnaProductClient from "@/components/CfdnaProductClient";

export const metadata: Metadata = {
  title: "MagDNA cf-DNA Purification Kit (Cat # L2057) | India Price & Specifications",
  description:
    "Superparamagnetic SPRI bead-based extraction of mononucleosomal cfDNA (167 bp) from 0.5–5.0 mL plasma. HSN 3822 00 90, 5% DSIR GST. Official quotes in 4 hours from Nuvamed Diagnostics.",
  keywords: [
    "cfDNA extraction kit India",
    "cell-free DNA purification kit price",
    "MagDNA cfDNA L2057",
    "liquid biopsy cfDNA kit",
    "SPRI bead cfDNA isolation",
    "KingFisher cfDNA extraction",
    "HSN 38220090",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/products/cfdna-purification-kit",
  },
  openGraph: {
    title: "MagDNA cf-DNA Purification Kit (Cat # L2057) | India Distributor",
    description:
      "Selective 167 bp apoptotic cfDNA fragment recovery with ~75% cost savings vs imported columns. 4-hour proforma invoice SLA from Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/products/cfdna-purification-kit",
    type: "website",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.nuvamed.co.in/products/cfdna-purification-kit#product",
      name: "MagDNA cf-DNA Purification Kit",
      image: "https://www.nuvamed.co.in/assets/cfdna-schematic.png",
      description:
        "Superparamagnetic SPRI bead kit engineered for selective capture of low-abundance 167 bp mononucleosomal fragments from 0.5 mL to 5.0 mL human plasma or serum.",
      sku: "MG-CFDNA-101",
      mpn: "L2057",
      brand: {
        "@type": "Brand",
        name: "Luminous BioSciences",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "0.00",
        price: "0.00",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Nuvamed Diagnostics LLP Limited",
        },
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
          name: "Liquid Biopsy & cfDNA",
          item: "https://www.nuvamed.co.in/categories/liquid-biopsy",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "MagDNA cf-DNA Purification Kit",
          item: "https://www.nuvamed.co.in/products/cfdna-purification-kit",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can this cfDNA extraction kit be automated on standard magnetic rod handlers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The superparamagnetic beads and buffer chemistry are compatible with Thermo Scientific KingFisher Flex, Bio-Rad, and open 96-well automation robots. Protocol scripts available upon request.",
          },
        },
        {
          "@type": "Question",
          name: "How does ambient shipping affect kit performance in Indian summer temperatures?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The MagDNA buffers and magnetic silica matrix are formulated for stability at ambient room temperatures (up to 30°C) during transit, preventing cold-chain degradation and avoiding expensive dry-ice surcharges.",
          },
        },
        {
          "@type": "Question",
          name: "What documentation is provided for Indian institutional purchase committees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We supply an authorized distribution certificate, proprietary justification letter, GST proforma invoice in INR, and lot-specific COA to fulfill standard institutional tender and spot-purchase guidelines.",
          },
        },
      ],
    },
  ],
};

export default function CfdnaProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <CfdnaProductClient />
    </>
  );
}
