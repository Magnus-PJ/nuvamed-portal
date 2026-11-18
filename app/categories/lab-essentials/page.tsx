import type { Metadata } from "next";
import LabEssentialsClient from "@/components/LabEssentialsClient";

export const metadata: Metadata = {
  title: "Sterile Buffers, DNA Ladders, Pipettes & PCR Plastics | India | Nuvamed",
  description:
    "0.22 µm sterile-filtered PBS, TBS, TAE, TBE buffers, ready-to-load DNA ladders, prestained protein markers, barrier filter tips, and qPCR plates. HSN 3822 00 90 / 3926 90 99, 5% DSIR GST.",
  keywords: [
    "sterile PBS buffer India",
    "TAE running buffer 50X",
    "100bp DNA ladder price",
    "prestained protein marker India",
    "filter tips 200ul",
    "HSN 38220090",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/categories/lab-essentials",
  },
  openGraph: {
    title: "Sterile Laboratory Buffers, Ladders & Plastics | India Supply",
    description: "0.22 µm sterile molecular biology buffers, sharp DNA ladders, and RNase-free PCR consumables. Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/lab-essentials",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nuvamed.co.in/categories/lab-essentials#category",
      name: "Sterile Laboratory Buffers, Ladders & Plastics",
      description: "Molecular biology reagents, ready-to-use buffers, and PCR consumables.",
      url: "https://www.nuvamed.co.in/categories/lab-essentials",
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
          name: "Lab Essentials, Sterile Buffers & Plastics",
          item: "https://www.nuvamed.co.in/categories/lab-essentials",
        },
      ],
    },
  ],
};

export default function LabEssentialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LabEssentialsClient />
    </>
  );
}
